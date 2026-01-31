// Chatbot Support Module
// 24/7 AI-powered assistance for citizens

class CleanSceneChatbot {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.userName = null;
        this.currentContext = null;
        this.initializeChatbot();
    }

    // Initialize chatbot UI
    initializeChatbot() {
        // Create chatbot HTML structure
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <div id="chatbot-button" class="chatbot-button">
                    <i class="fas fa-comments"></i>
                    <span class="chatbot-badge">1</span>
                </div>
                
                <div id="chatbot-window" class="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <div class="chatbot-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div>
                                <h3>Clean-Scene Assistant</h3>
                                <p class="chatbot-status">
                                    <span class="status-dot"></span> Online 24/7
                                </p>
                            </div>
                        </div>
                        <button id="chatbot-close" class="chatbot-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div id="chatbot-messages" class="chatbot-messages">
                        <!-- Messages will be inserted here -->
                    </div>
                    
                    <div class="chatbot-quick-actions" id="chatbot-quick-actions">
                        <!-- Quick action buttons -->
                    </div>
                    
                    <div class="chatbot-input-area">
                        <input 
                            type="text" 
                            id="chatbot-input" 
                            placeholder="Type your message..."
                            autocomplete="off"
                        />
                        <button id="chatbot-send" class="chatbot-send-btn">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add chatbot to body
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        
        // Add styles
        this.addChatbotStyles();
        
        // Attach event listeners
        this.attachEventListeners();
        
        // Send welcome message
        setTimeout(() => this.sendWelcomeMessage(), 500);
    }

    // Add chatbot CSS styles
    addChatbotStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .chatbot-container { position: fixed; bottom: 20px; right: 20px; z-index: 9999; }
            .chatbot-button {
                width: 60px; height: 60px; border-radius: 50%;
                background: linear-gradient(135deg, #2C5AA0, #1E88E5);
                color: white; display: flex; align-items: center; justify-content: center;
                font-size: 1.5rem; cursor: pointer; box-shadow: 0 4px 20px rgba(44, 90, 160, 0.4);
                transition: all 0.3s ease; position: relative;
            }
            .chatbot-button:hover {
                transform: scale(1.1); box-shadow: 0 6px 25px rgba(44, 90, 160, 0.6);
            }
            .chatbot-badge {
                position: absolute; top: -5px; right: -5px;
                background: #dc3545; color: white; border-radius: 50%;
                width: 22px; height: 22px; display: flex; align-items: center;
                justify-content: center; font-size: 0.75rem; font-weight: bold;
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            .chatbot-window {
                position: absolute; bottom: 80px; right: 0;
                width: 380px; height: 550px; background: white;
                border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                display: none; flex-direction: column; overflow: hidden;
                animation: slideUp 0.3s ease;
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .chatbot-window.active { display: flex; }
            
            /* Mobile responsive */
            @media (max-width: 768px) {
                .chatbot-container {
                    bottom: 20px !important;
                    right: 20px !important;
                    z-index: 9999 !important;
                }
                .chatbot-button {
                    width: 55px !important;
                    height: 55px !important;
                    font-size: 1.3rem !important;
                }
                .chatbot-window {
                    width: calc(100vw - 20px) !important;
                    height: calc(100vh - 100px) !important;
                    max-width: 380px !important;
                    right: -10px !important;
                }
            }
            
            @media (max-width: 480px) {
                .chatbot-window {
                    width: calc(100vw - 10px) !important;
                    right: -160px !important;
                    bottom: 75px !important;
                }
            }
            
            .chatbot-header {
                background: linear-gradient(135deg, #2C5AA0, #1E88E5);
                color: white; padding: 1rem; display: flex;
                justify-content: space-between; align-items: center;
            }
            .chatbot-header-info { display: flex; gap: 0.75rem; align-items: center; }
            .chatbot-avatar {
                width: 45px; height: 45px; border-radius: 50%;
                background: rgba(255,255,255,0.2); display: flex;
                align-items: center; justify-content: center; font-size: 1.5rem;
            }
            .chatbot-header h3 { margin: 0; font-size: 1rem; }
            .chatbot-status {
                margin: 0; font-size: 0.75rem; opacity: 0.9;
                display: flex; align-items: center; gap: 0.3rem;
            }
            .status-dot {
                width: 8px; height: 8px; border-radius: 50%;
                background: #4caf50; animation: blink 2s infinite;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.4; }
            }
            .chatbot-close {
                background: none; border: none; color: white;
                font-size: 1.25rem; cursor: pointer; padding: 0.5rem;
                opacity: 0.8; transition: opacity 0.3s;
            }
            .chatbot-close:hover { opacity: 1; }
            .chatbot-messages {
                flex: 1; overflow-y: auto; padding: 1rem;
                background: #f8f9fa; display: flex; flex-direction: column; gap: 1rem;
            }
            .message {
                display: flex; gap: 0.5rem; animation: fadeIn 0.3s ease;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .message.bot { align-self: flex-start; }
            .message.user { align-self: flex-end; flex-direction: row-reverse; }
            .message-avatar {
                width: 35px; height: 35px; border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                font-size: 1rem; flex-shrink: 0;
            }
            .message.bot .message-avatar {
                background: linear-gradient(135deg, #2C5AA0, #1E88E5);
                color: white;
            }
            .message.user .message-avatar {
                background: #28a745; color: white;
            }
            .message-content {
                max-width: 70%; padding: 0.75rem 1rem;
                border-radius: 15px; line-height: 1.5; font-size: 0.9rem;
            }
            .message.bot .message-content {
                background: white; color: #333;
                border-bottom-left-radius: 5px;
            }
            .message.user .message-content {
                background: #2C5AA0; color: white;
                border-bottom-right-radius: 5px;
            }
            .message-time {
                font-size: 0.7rem; opacity: 0.6; margin-top: 0.25rem;
            }
            .typing-indicator {
                display: flex; gap: 0.3rem; padding: 0.75rem 1rem;
                background: white; border-radius: 15px; width: fit-content;
            }
            .typing-dot {
                width: 8px; height: 8px; border-radius: 50%;
                background: #2C5AA0; animation: typing 1.4s infinite;
            }
            .typing-dot:nth-child(2) { animation-delay: 0.2s; }
            .typing-dot:nth-child(3) { animation-delay: 0.4s; }
            @keyframes typing {
                0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
                30% { transform: translateY(-10px); opacity: 1; }
            }
            .chatbot-quick-actions {
                padding: 0.75rem; background: white; border-top: 1px solid #e0e0e0;
                display: flex; flex-wrap: wrap; gap: 0.5rem; max-height: 80px;
                overflow-y: auto;
            }
            .quick-action-btn {
                padding: 0.5rem 1rem; border-radius: 20px;
                border: 1px solid #2C5AA0; color: #2C5AA0;
                background: white; cursor: pointer; font-size: 0.85rem;
                transition: all 0.3s; white-space: nowrap;
            }
            .quick-action-btn:hover {
                background: #2C5AA0; color: white;
            }
            .chatbot-input-area {
                padding: 1rem; background: white;
                border-top: 1px solid #e0e0e0; display: flex; gap: 0.5rem;
            }
            .chatbot-input-area input {
                flex: 1; padding: 0.75rem; border: 1px solid #ddd;
                border-radius: 25px; outline: none; font-size: 0.9rem;
            }
            .chatbot-input-area input:focus {
                border-color: #2C5AA0;
            }
            .chatbot-send-btn {
                width: 45px; height: 45px; border-radius: 50%;
                background: #2C5AA0; color: white; border: none;
                cursor: pointer; transition: all 0.3s; display: flex;
                align-items: center; justify-content: center;
            }
            .chatbot-send-btn:hover {
                background: #1E88E5; transform: scale(1.05);
            }
            .quick-links {
                display: flex; flex-direction: column; gap: 0.5rem;
                margin-top: 0.5rem;
            }
            .quick-link {
                padding: 0.5rem; background: #e3f2fd; border-radius: 8px;
                border-left: 3px solid #2C5AA0; cursor: pointer;
                transition: all 0.3s; font-size: 0.85rem;
            }
            .quick-link:hover {
                background: #bbdefb; transform: translateX(5px);
            }
            @media (max-width: 480px) {
                .chatbot-window { width: calc(100vw - 40px); height: 500px; }
            }
        `;
        document.head.appendChild(style);
    }

    // Attach event listeners
    attachEventListeners() {
        const button = document.getElementById('chatbot-button');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        button.addEventListener('click', () => this.toggleChatbot());
        closeBtn.addEventListener('click', () => this.toggleChatbot());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    // Toggle chatbot window
    toggleChatbot() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbot-window');
        const badge = document.querySelector('.chatbot-badge');
        
        if (this.isOpen) {
            window.classList.add('active');
            if (badge) badge.style.display = 'none';
        } else {
            window.classList.remove('active');
        }
    }

    // Send welcome message
    sendWelcomeMessage() {
        const welcomeMsg = `Hello! 👋 I'm your Clean-Scene Assistant. I'm here 24/7 to help you with:

• Reporting garbage
• Tracking collection status
• Trade licenses & property tax
• General queries

How can I assist you today?`;
        
        this.addMessage(welcomeMsg, 'bot');
        this.showQuickActions([
            'Report Garbage',
            'Track My Report',
            'Collection Schedule',
            'Trade License',
            'Contact Support'
        ]);
    }

    // Add message to chat
    addMessage(text, sender = 'bot', showTime = true) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        const messageHTML = `
            <div class="message ${sender}">
                <div class="message-avatar">
                    <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
                </div>
                <div>
                    <div class="message-content">
                        ${text.replace(/\n/g, '<br>')}
                    </div>
                    ${showTime ? `<div class="message-time">${time}</div>` : ''}
                </div>
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        this.conversationHistory.push({ text, sender, time });
    }

    // Show typing indicator
    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingHTML = `
            <div class="message bot typing-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Remove typing indicator
    removeTypingIndicator() {
        const typing = document.querySelector('.typing-message');
        if (typing) typing.remove();
    }

    // Show quick action buttons
    showQuickActions(actions) {
        const container = document.getElementById('chatbot-quick-actions');
        container.innerHTML = '';
        
        actions.forEach(action => {
            const btn = document.createElement('button');
            btn.className = 'quick-action-btn';
            btn.textContent = action;
            btn.onclick = () => this.handleQuickAction(action);
            container.appendChild(btn);
        });
    }

    // Handle quick action clicks
    handleQuickAction(action) {
        this.addMessage(action, 'user');
        this.processUserMessage(action);
    }

    // Send user message
    sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        this.processUserMessage(message);
    }

    // Process user message and generate response
    async processUserMessage(message) {
        this.showTypingIndicator();
        
        // Simulate AI processing time
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        
        this.removeTypingIndicator();
        
        const lowerMessage = message.toLowerCase();
        let response = '';
        let quickActions = [];

        // Intent detection and response generation
        if (lowerMessage.includes('report') || lowerMessage.includes('garbage') || lowerMessage.includes('trash')) {
            response = `To report garbage, you need to:

1. 📸 Take a clear photo of the garbage
2. 📍 Enable GPS location
3. ⚠️ Select priority level
4. 📝 Add any additional details

Would you like me to guide you to the reporting page?`;
            quickActions = ['Take me to Report Page', 'How to take good photos', 'More info'];
            
        } else if (lowerMessage.includes('track') || lowerMessage.includes('status')) {
            response = `To track your report:

1. Note your Report ID (sent via SMS/email)
2. Visit the Track Collection page
3. Enter your Report ID
4. View real-time status

Do you have a Report ID to track?`;
            quickActions = ['Track My Report', 'Find Report ID', 'Check Schedule'];
            
        } else if (lowerMessage.includes('schedule') || lowerMessage.includes('collection') || lowerMessage.includes('pick')) {
            response = `Collection schedules vary by area:

🏘️ Residential: Daily (6 AM - 11 AM)
🏢 Commercial: Twice daily
🏭 Industrial: As per agreement

You can check your ward's specific schedule on the Track Collection page. What's your area/ward?`;
            quickActions = ['View Schedule', 'Set Reminder', 'Collection Routes'];
            
        } else if (lowerMessage.includes('license') || lowerMessage.includes('trade')) {
            response = `For Trade License applications:

✅ Required documents:
   • Business registration proof
   • Address proof
   • Owner ID proof
   • NOC (if applicable)

⏱️ Processing time: 15-30 days
💰 Fee: Based on business type

Would you like to start an application?`;
            quickActions = ['Apply Now', 'Check Status', 'Required Documents'];
            
        } else if (lowerMessage.includes('tax') || lowerMessage.includes('property')) {
            response = `Property Tax information:

📊 Assessment based on property size & location
📅 Payment: Annual/Half-yearly options
💳 Online payment available
🎁 10% discount for early payment

Need help with payment or assessment?`;
            quickActions = ['Pay Tax', 'View Assessment', 'Payment History'];
            
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            response = `Hello! 😊 How can I help you today with Clean-Scene services?`;
            quickActions = ['Report Garbage', 'Track Report', 'Services Info', 'Contact'];
            
        } else if (lowerMessage.includes('thank')) {
            response = `You're welcome! Is there anything else I can help you with? I'm here 24/7! 😊`;
            quickActions = ['Report Garbage', 'More Questions', 'Exit Chat'];
            
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
            response = `📞 Contact Information:

🆘 Helpline: 1800-123-BBMP (2267)
📧 Email: support@cleanscene.bbmp.gov.in
⏰ Working hours: 24/7

💬 Or continue chatting with me - I'm always here to help!`;
            quickActions = ['Call Helpline', 'Send Email', 'Continue Chatting'];
            
        } else if (lowerMessage.includes('photo') || lowerMessage.includes('picture') || lowerMessage.includes('image')) {
            response = `📸 Tips for good garbage photos:

✓ Take photo in good lighting
✓ Capture the full area
✓ Include landmarks for location context
✓ Multiple angles if needed
✓ Avoid blurry images

Our AI will automatically analyze your photo to detect garbage type and severity!`;
            quickActions = ['Start Report', 'AI Detection Info', 'Back'];
            
        } else {
            response = `I can help you with:

📱 Report Garbage
📍 Track Reports
📅 Collection Schedules
📄 Trade Licenses
💰 Property Tax
❓ General Queries

What would you like to know more about?`;
            quickActions = ['Report Garbage', 'Services', 'FAQ', 'Contact'];
        }

        this.addMessage(response, 'bot');
        if (quickActions.length > 0) {
            this.showQuickActions(quickActions);
        }
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', function() {
    const chatbot = new CleanSceneChatbot();
    window.cleanSceneChatbot = chatbot;
});
