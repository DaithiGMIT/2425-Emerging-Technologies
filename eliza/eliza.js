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
            const response = generateElizaResponse(message);
            // Add bot response to chat history
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

    function generateElizaResponse(message) {

        // For each pattern in patterns compare the message for a match
        for (const { pattern, responses } of patterns) {
            // Check to see if anything in the message matches any pattern
            const match = message.match(pattern);
            if (match) {
                // Choose a random reponse from the patterns.
                const response = responses[Math.floor(Math.random() * responses.length)];
                // Insert captured part of message into the response
                return response.replace("{0}", match[1] || "").trim();
            }
        }

        return "I'm not sure I understand. Can you elaborate?";
    }

    const patterns = [
        {
            pattern: /hello|hi|hey|good morning|good evening/i,
            responses: [
                "Hello! How are you today?",
                "Hi there! What’s on your mind?",
                "Hey! How can I help you?"
            ]
        },
        {
            pattern: /goodbye|bye|see you|take care/i,
            responses: [
                "Goodbye! It was nice talking to you.",
                "See you next time!",
                "Take care! Feel free to return if you'd like to chat more."
            ]
        },
        {
            pattern: /thank you|thanks/i,
            responses: [
                "You’re welcome! Is there anything else you’d like to discuss?",
                "I’m happy to help!",
                "It’s my pleasure. Let me know if there’s anything else."
            ]
        },
        {
            pattern: /you remind me of (.*)/i,
            responses: [
                "Why do you think I remind you of {0}?",
                "What makes you think of {0} when talking to me?",
                "Is it a good feeling to be reminded of {0}?"
            ]
        },
        {
            pattern: /(.*)mother|father|family|parent(.*)/i,
            responses: [
                "Tell me more about your family.",
                "How does that make you feel about your family?",
                "What role does your family play in your thoughts?"
            ]
        },
        {
            pattern: /(.*) I need (.*)/i,
            responses: [
                "Why do you feel you need {0}?",
                "Would getting {0} help you feel better?",
                "What would achieving {0} mean to you?"
            ]
        },
        {
            pattern: /help|assist|support/i,
            responses: [
                "How can I assist you?",
                "I’m here to help. What do you need?",
                "Let me know how I can support you."
            ]
        },
        {
            pattern: /i feel (.*)/i,
            responses: [
                "Why do you feel {0}?",
                "Can you elaborate on why you feel {0}?",
                "How does feeling {0} affect you?"
            ]
        },
        {
            pattern: /i am (.*)/i,
            responses: [
                "What makes you {0}?",
                "Is being {0} something that happens often?",
                "How long have you been {0}?"
            ]
        },
        {
            pattern: /why (.*)/i,
            responses: [
                "Why do you think {0}?",
                "What leads you to believe {0}?",
                "Is there a specific reason for {0}?"
            ]
        },
        {
            pattern: /what if (.*)/i,
            responses: [
                "What do you think would happen if {0}?",
                "How would {0} affect you?",
                "Does thinking about {0} bring you comfort or concern?"
            ]
        },
        {
            pattern: /do you think (.*)/i,
            responses: [
                "Why do you ask if I think {0}?",
                "What do you think about {0}?",
                "Do you often wonder about {0}?"
            ]
        },
        {
            pattern: /tell me about (.*)/i,
            responses: [
                "What about {0} interests you?",
                "Why would you like to know about {0}?",
                "What does {0} mean to you?"
            ]
        },
        {
            pattern: /sorry|apologies/i,
            responses: [
                "There’s no need to apologize.",
                "It’s okay! We all make mistakes.",
                "No need to worry about it. Let’s move on."
            ]
        }
    ];
});