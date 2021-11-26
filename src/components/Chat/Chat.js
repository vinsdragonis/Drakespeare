import React, { useEffect, useState } from 'react';
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setmessageList] = useState([]);

  const getCurrentTime = () => {
    var currentHours = new Date(Date.now()).getHours();
    var currentMinutes = new Date(Date.now()).getMinutes();

    currentHours = ("0" + currentHours).slice(-2);
    currentMinutes = ("0" + currentMinutes).slice(-2);

    return currentHours + ":" + currentMinutes;
  }

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: getCurrentTime()
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
    <div className="chat-window shadow-5">
      <div className="chat-header">
        <p className="tl">👥 Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          { messageList.map((messageContent) => {
            return (
              <div className="message" id={ username === messageContent.author ? "you" : "other" }>
                <div>
                  <div className="message-content shadow-4">
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
