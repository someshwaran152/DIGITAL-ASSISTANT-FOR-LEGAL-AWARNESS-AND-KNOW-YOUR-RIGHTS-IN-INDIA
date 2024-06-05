function appendUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('user-message');
    messageElement.innerText = message;
    document.getElementById('messages').appendChild(messageElement);
    scrollToBottom();
}
function appendBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('bot-message');
    messageElement.innerText = message;
    document.getElementById('messages').appendChild(messageElement);
    scrollToBottom();
}
