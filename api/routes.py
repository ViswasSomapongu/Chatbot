"""
Install the Google AI Python SDK

$ pip install google-generativeai

See the getting started guide for more information:
https://ai.google.dev/gemini-api/docs/get-started/python
"""


from flask import Blueprint, jsonify, request
import google.generativeai as genai
from config import config


# Configure the Generative AI API
genai.configure(api_key=config.api_key)

# Create the model

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,

  system_instruction= config.system_instruction
)

chat_session = model.start_chat(
  history=[
  ]
)


main = Blueprint('main', __name__)

@main.route('/', methods=['POST'])
def ask_question():
    question = request.json.get('question')
    if not question:
        return jsonify({'error': 'Invalid input'}), 400
    
    response = chat_session.send_message(question)
    response_text = response.text
    
    return jsonify({'response': response_text})
