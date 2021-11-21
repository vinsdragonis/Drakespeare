import React, { useEffect, useState } from 'react';
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setmessageList] = useState([]);
  
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
      setmessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setmessageList((list) => [...list, data]);
    })
  }, [socket]);
  
  return (
    <div className="chat-window shadow-2">
      <div className="chat-header">
        <p className="tl">🟢 Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          { messageList.map((messageContent) => {
            return (
              <div className="message" id={ username === messageContent.author ? "you" : "other" }>
                <div>
                  <div className="message-content shadow-3">
                    <p>{ messageContent.message }</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{ messageContent.time }</p>
                    <p id="author">{ messageContent.author }</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="tex"
          value={ currentMessage }
          placeholder="Hey there!"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
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