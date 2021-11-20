import React, { useEffect, useState } from 'react';

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: 
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      }
      
      await socket.emit("send_message", messageData);
    }
  };
  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
    })
  }, [socket]);
  
  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey there!"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button
          onClick={ sendMessage }
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Chat;