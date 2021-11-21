import io from 'socket.io-client';
import { useState } from 'react';
import Particles from 'react-particles-js';
import Chat from './components/Chat.js';
import Navbar from './components/Navbar';
import './App.css';

const socket = io.connect("http://localhost:3001");

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

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
      <Particles className="particles"
        params={ particlesOptions }
      />
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
        <Chat socket={ socket } username={ username } room={ room }/>
      )}
    </div>
  );
}

export default App;
