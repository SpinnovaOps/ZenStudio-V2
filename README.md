# ZenStudio - Your Private AI Companion

ZenStudio is a modern web application that provides a suite of AI assistants powered by local language models through Ollama. It offers specialized AI capabilities for different tasks while maintaining complete privacy by processing all data locally on your device.

## Features

### 1. Specialized AI Assistants

- **Coding Assistant**
  - Solve programming challenges
  - Get code explanations
  - Debug and optimize code
  - Uses models: deepseek-coder:6.7B, codegemma:7B

- **Planning & Decision Making**
  - Task automation
  - Scheduling assistance
  - Strategic planning
  - Uses models: Llama3.1:8B, Gemma3:12B

- **Knowledge Assistant**
  - General Q&A
  - Research assistance
  - Information retrieval
  - Uses models: Llama3.1:8B, Mistral7B

- **Logic & Reasoning**
  - Mathematical problems
  - Pattern recognition
  - Analytical reasoning
  - Uses models: Phi-4, deepseek-r1

- **Linguistic Assistant**
  - Grammar correction
  - Style suggestions
  - Text improvement
  - Uses models: phi-4, deepseek-r1

### 2. Privacy-First Approach

- All processing happens locally on your device
- No data sent to external servers
- Complete offline capability after initial setup
- Full control over your data

### 3. Modern UI Features

- Responsive design
- Real-time chat interface
- File upload support
- Beautiful animations and transitions
- Dark mode support

## Technical Stack

- **Frontend:**
  - React 18.3
  - TypeScript
  - Tailwind CSS
  - React Router DOM
  - Lucide React (icons)

- **Backend:**
  - Flask (Python)
  - Ollama integration
  - CORS support

## Getting Started

### Prerequisites

1. Install [Ollama](https://ollama.ai)
2. Node.js 16+ and npm
3. Python 3.8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SpinnovaOps/ZenStudio-V2.git
cd zenstudio
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

### Running the Application

1. Start the Flask backend:
```bash
npm run server
```

2. Start the frontend development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
zenstudio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   └── index.tsx      # Application entry point
├── server.py          # Flask backend server
└── public/           # Static assets
```

## Key Features

### Chat Interface
- Real-time messaging
- File upload support
- Model switching
- Chat history
- Message timestamps

### Model Integration
- Seamless integration with Ollama
- Multiple model support
- Optimized for specific tasks
- Easy model switching

### Privacy Features
- Local processing
- No cloud dependencies
- Data control
- Secure file handling

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Ollama](https://ollama.ai) for providing the local AI model infrastructure
- [Tailwind CSS](https://tailwindcss.com) for the styling system
- [React](https://reactjs.org) for the frontend framework
- [Flask](https://flask.palletsprojects.com) for the backend server

## Support

For support, please open an issue in the GitHub repository or contact the development team.
