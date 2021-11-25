import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './components/Chat/Chat.js';
import User from './components/User/User.js';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

const socket = io.connect("https://drakespeare.herokuapp.com/");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

  return (
    <div className="App">
      <Navbar />
      { !showChat ? (
        <div className="joinChatContainer shadow-5 tc">
          <h3>Join a chat</h3>
          <input
            type="text"
            placeholder="Name"
            className="tc"
            onChange={(event) => {
              setUsername(event.target.value)
            }}
          />
          <input
            type="text"
            placeholder="Room ID"
            className="tc"
            onChange={(event) => {
              setRoom(event.target.value)
            }}
          />
          <button onClick={ joinRoom }>Join a room</button>
        </div>
      ) : (
        <div>
          <User socket={ socket } username={ username } room={ room }/>
          <Chat socket={ socket } username={ username } room={ room }/>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
