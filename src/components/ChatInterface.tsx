import React, { useState, useRef } from 'react';
import { SendIcon, RefreshCwIcon, DownloadIcon, UploadIcon, XIcon } from 'lucide-react';
import axios from 'axios';

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
  attachments?: Array<{
    name: string;
    size: number;
    type: string;
  }>;
}

interface ChatInterfaceProps {
  title: string;
  description: string;
  primaryModel: string;
  alternativeModel: string;
  type: string;
}

const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200MB in bytes

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  title,
  description,
  primaryModel,
  alternativeModel,
  type
}) => {
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    content: `I'm your ${title}. How can I assist you today?`,
    isUser: false,
    timestamp: new Date()
  }]);
  const [inputText, setInputText] = useState('');
  const [selectedModel, setSelectedModel] = useState(primaryModel);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} is too large. Maximum size is 200MB.`);
        return false;
      }
      return true;
    });
    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const cleanResponse = (response: string) => {
    // Remove <think> tags and any content between them
    return response.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === '' && selectedFiles.length === 0) return;

    const attachments = selectedFiles.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type
    }));

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputText,
      isUser: true,
      timestamp: new Date(),
      attachments: attachments.length > 0 ? attachments : undefined
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Direct request to Ollama API
      const response = await axios.post('http://localhost:11434/api/generate', {
        model: selectedModel.toLowerCase().replace(/\s+/g, ''),
        prompt: inputText,
        stream: false
      });

      const cleanedResponse = cleanResponse(response.data.response);

      const aiResponse: Message = {
        id: messages.length + 2,
        content: cleanedResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prevMessages => [...prevMessages, aiResponse]);
    } catch (error: any) {
      console.error('Error getting response:', error);
      const errorMessage = error.response?.data?.error || error.message || 'An error occurred while connecting to Ollama. Make sure Ollama is running and the model is loaded.';
      setError(errorMessage);
      const errorResponse: Message = {
        id: messages.length + 2,
        content: `Error: ${errorMessage}`,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prevMessages => [...prevMessages, errorResponse]);
    }

    setIsLoading(false);
    setInputText('');
    setSelectedFiles([]);
  };

  const handleClearChat = () => {
    setMessages([{
      id: 1,
      content: `I'm your ${title}. How can I assist you today?`,
      isUser: false,
      timestamp: new Date()
    }]);
    setSelectedFiles([]);
    setError(null);
  };

  return (
    <div className="flex flex-col h-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_100%)] animate-shimmer" />
        <h2 className="text-2xl font-bold relative z-10">{title}</h2>
        <p className="text-sm text-indigo-100 mt-2 relative z-10">
          {description}
        </p>
      </div>
      <div className="flex-grow overflow-auto p-6 space-y-6 bg-gradient-to-b from-white/50 to-white/30">
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-slideIn`}>
            <div className={`max-w-3/4 rounded-2xl px-6 py-4 shadow-lg transition-all duration-200 ${message.isUser ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : 'bg-white text-gray-800'}`}>
              <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
              {message.attachments && (
                <div className="mt-3 space-y-2">
                  {message.attachments.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm bg-white/10 rounded-lg p-2">
                      <UploadIcon className="h-4 w-4" />
                      <span className="truncate">{file.name}</span>
                      <span className="text-xs opacity-75">({formatFileSize(file.size)})</span>
                    </div>
                  ))}
                </div>
              )}
              <div className={`text-xs mt-2 ${message.isUser ? 'text-indigo-200' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="animate-pulse h-2 w-2 bg-indigo-600 rounded-full"></div>
                <div className="animate-pulse h-2 w-2 bg-indigo-600 rounded-full delay-75"></div>
                <div className="animate-pulse h-2 w-2 bg-indigo-600 rounded-full delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Model
            </label>
            <div className="relative">
              <select
                value={selectedModel}
                onChange={e => setSelectedModel(e.target.value)}
                className="block w-full pl-4 pr-10 py-2.5 text-base border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white"
              >
                <option value={primaryModel}>{primaryModel}</option>
                <option value={alternativeModel}>{alternativeModel}</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleClearChat}
            className="inline-flex items-center p-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            title="Clear chat"
          >
            <RefreshCwIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            className="inline-flex items-center p-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            title="Download chat"
          >
            <DownloadIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {selectedFiles.length > 0 && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-700 mb-2">Selected Files:</div>
            <div className="space-y-2">
              {selectedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-2 rounded-md">
                  <div className="flex items-center space-x-2">
                    <UploadIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm truncate">{file.name}</span>
                    <span className="text-xs text-gray-500">({formatFileSize(file.size)})</span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <XIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSendMessage} className="flex space-x-4">
          <div className="flex-grow space-y-2">
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              className="block w-full rounded-xl border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm py-3 px-4 transition-all duration-200"
              placeholder={`Ask your ${title.toLowerCase()} question...`}
            />
            <div className="flex items-center space-x-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                multiple
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-sm text-indigo-600 hover:text-indigo-500 flex items-center gap-1"
              >
                <UploadIcon className="h-4 w-4" />
                Attach files (max 200MB)
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SendIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;