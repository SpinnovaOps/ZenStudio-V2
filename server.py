from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
import os

app = Flask(__name__)

# Configure CORS with specific origins and headers
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:5173", "http://127.0.0.1:5173"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"],
        "expose_headers": ["Content-Type"],
        "supports_credentials": True,
        "max_age": 600
    }
})

# Make OLLAMA_API_URL configurable through environment variable
OLLAMA_API_URL = os.getenv('OLLAMA_API_URL', 'http://localhost:11434/api/generate')

MODEL_MAPPINGS = {
    "coding": {
        "deepseek-r1": "deepseek-coder:6.7b",
        "WizardLM-27B": "wizardlm:27b"
    },
    "planning": {
        "Llama 2 13B": "llama2:13b",
        "Mistral7B": "mistral:7b"
    },
    "knowledge": {
        "Llama 2 13B": "llama2:13b",
        "Mistral 8x7B": "mixtral:8x7b"
    },
    "logic": {
        "Phi-2": "phi:2.7b",
        "deepseek-r1": "deepseek-coder:6.7b"
    },
    "linguistic": {
        "Llama 2 13B": "llama2:13b",
        "Mistral7B": "mistral:7b"
    }
}

@app.route('/chat', methods=['POST', 'OPTIONS'])
def chat():
    if request.method == 'OPTIONS':
        # Handle preflight requests
        response = jsonify({'status': 'ok'})
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response, 200
        
    try:
        data = request.json
        assistant_type = data.get('type', 'general')
        model_name = data.get('model', '')
        message = data.get('message', '')
        
        # Get the correct Ollama model name
        model = MODEL_MAPPINGS.get(assistant_type, {}).get(model_name)
        if not model:
            return jsonify({"error": "Invalid model"}), 400

        # Prepare the prompt for Ollama
        ollama_data = {
            "model": model,
            "prompt": message,
            "stream": False
        }

        try:
            # Make request to Ollama
            response = requests.post(OLLAMA_API_URL, json=ollama_data, timeout=30)
            if response.status_code != 200:
                return jsonify({"error": f"Ollama API error: {response.text}"}), response.status_code
                
            response_data = response.json()
            
            return jsonify({
                "response": response_data.get('response', 'No response generated'),
                "model": model_name
            })
        except requests.exceptions.ConnectionError:
            return jsonify({"error": f"Could not connect to Ollama at {OLLAMA_API_URL}. Make sure Ollama is running and accessible."}), 503
        except requests.exceptions.Timeout:
            return jsonify({"error": "Request to Ollama timed out. Please try again."}), 504
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Get host and port from environment variables or use defaults
    host = os.getenv('FLASK_HOST', '0.0.0.0')
    port = int(os.getenv('FLASK_PORT', 5000))
    
    print(f"Server starting on {host}:{port}")
    print(f"Connecting to Ollama at: {OLLAMA_API_URL}")
    
    # Explicitly set to run without SSL/HTTPS
    app.run(
        host=host,
        port=port,
        ssl_context=None,
        debug=True,
        threaded=True
    )