import React from 'react';

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <h2>Chat with us!</h2>
      <textarea placeholder="Type your message here..." />
      <button>Send</button>
    </div>
  );
};

export default ChatWidget;