// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    // Chat history container
    const chatHistory = document.getElementById("chat-history");
    // User text input field
    const userInput = document.getElementById("user-input");
    // Send Message Button
    const sendButton = document.getElementById("send-button");

    // Event Listener: Send Button
    sendButton.addEventListener("click", () => {
        // Get user input and trim whitespace
        const message = userInput.value.trim(); 
        if (message) {
            // Add user message to chat
            addMessageToChat("user", message); 
            // Clear the input field 
            userInput.value = "";
            // Generate a response
            const response = "Chatbot Default Response";
            // Add response to chat history
            addMessageToChat("eliza", response);
        }
    });

    // Function to add messages to the chat from the user and bot
    function addMessageToChat(sender, message) {
        // Create a new div for the message
        const messageElement = document.createElement("div"); 
        // Add sender-specific classes
        messageElement.classList.add("message", sender); 
        // Set the message text
        messageElement.textContent = message;
        // Append the message to the chat history 
        chatHistory.appendChild(messageElement);
        // Scroll to the bottom of the chat
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
});