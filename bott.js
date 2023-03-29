const chatLog = document.querySelector('.chat-log');
const userInput = document.querySelector('#user-input');
const sendBtn = document.querySelector('#send-btn');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		sendMessage();
	}
});

function sendMessage() {
	const userMessage = userInput.value;

	// Append user message to chat log
	appendMessage(userMessage, 'user');

	// TODO: Send user message to chatbot API and get response
	// For demo purposes, we'll just send a generic response
	const botResponse = 'Hey how can i help you ? Am here to answer to any of your questions in legal terms from the provisions of indian consitution ';

	// Append bot response to chat log after 1 second delay
	setTimeout(function() {
		appendMessage(botResponse, 'bot');
	}, 1000);

	// Clear user input
	userInput.value = '';
}

function appendMessage(message, sender) {
	const messageContainer = document.createElement('div');
	messageContainer.classList.add('message-container');
	messageContainer.classList.add(sender);

	const messageBubble = document.createElement('div');
	messageBubble.classList.add('message-bubble');
	messageBubble.textContent = message;

	messageContainer.appendChild(messageBubble);
	chatLog.appendChild(messageContainer);

	// Scroll to bottom of chat log
	chatLog.scrollTop = chatLog.scrollHeight;
}
