# Chatbot Project

This project is a full-stack application that integrates a conversational AI chatbot using Google Generative AI (Gemini-1.5-flash). The application is built with a React frontend and a Flask backend. The chatbot can handle user queries and provide intelligent responses.

## Screenshot
![image](https://github.com/ViswasSomapongu/Chatbot/assets/145599843/8c3c8bbd-bc78-4d66-92a4-fcd04e157a78)

## Features

- **Conversational AI**: Uses Google's Generative AI to generate responses to user queries.
- **Full-stack Integration**: Combines React for the frontend and Flask for the backend.
- **Deployment**: Deployed on Render, ensuring scalability and reliability.
- **User Interaction**: Users can interact with the chatbot, ask questions, and receive responses in real-time.
- **Copy Responses**: Ability to copy chatbot responses to the clipboard directly from the UI.
- **Edit Feature**: Users can edit their questions.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Flask
- **AI Model**: Google Generative AI (Gemini-1.5-flash)
- **Deployment**: Render

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ViswasSomapongu/Chatbot.git
2. **Installation and Setup**:

### Install Frontend Dependencies
Navigate to the client directory:
```bash
cd client
```
### Install dependencies using npm
```bash
npm install
```
### Install Backend Dependencies
Navigate to the api directory:
```bash
cd ../api
```
Install Python dependencies using pip:
```baash
pip install -r requirements.txt
```

3. **Running the Servers**:
### Start the Frontend Server
Navigate back to the client directory:
```bash
cd ../client
```
Start the frontend server:
```bash
npm run dev
```
### Start the Backend Server
Navigate to the api directory:
```bash
cd ../api
```
Start the backend server:
```bash
python app.py
```
Open your web browser and go to:
http://localhost:3000

## Usage

### Interacting with the Chatbot
- Enter a question in the chatbox and press enter to interact with the chatbot.
- Responses from the chatbot will appear in the chat area.
### Editing Questions
- Each question displayed in the chat log can be edited by clicking the edit button next to it.
- Clicking the edit button will populate the question back into the input box for editing.
### Copying Responses
- Click on the "Copy" button next to a response to copy it to the clipboard.
  
## Steps to Train the Model

### Sign in to Google AI Studio:
Visit [Google AI Studio](https://ai.google.dev/aistudio) and log in with your Google account.
### Create a Chat Prompt
#### Define Chatbot Behavior:
Use the Google AI Studio interface to define how your chatbot should behave.
Specify prompts that guide the chatbot to capture specific user information or respond to queries relevant to your purpose.
Provide detailed examples of user interactions and the corresponding expected responses.
### Generate Code
Click on the Generate Code to generate sample code tailored for integrating the chatbot into a Flask/Node.js etc application.
### Configure API Key
- Obtain an API key from the Google Cloud Platform, specifically for accessing the Gemini API.
- Integrate API Key: Include the obtained API key within your  application code.
  
## Feedback
For feedback or any inquiries, feel free to contact and connect with me on [LinkedIn](https://www.linkedin.com/in/viswas-somapongu/)
