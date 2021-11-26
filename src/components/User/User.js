import React from 'react';

function User({ socket, username, room }) {
  const getTime = () => {
    var currentHours = new Date(Date.now()).getHours();
    var currentMinutes = new Date(Date.now()).getMinutes();

    currentHours = ("0" + currentHours).slice(-2);
    currentMinutes = ("0" + currentMinutes).slice(-2);

    return " " + currentHours + ":" + currentMinutes;
  }

  return (
    <div>
      <div
        className="userDetails"
        style={{
          marginTop:"0",
          paddingLeft:"15px",
          paddingBottom:"25px",
          width:"500px"
        }}
      >
        <h3
          className="tc dim pointer"
          style={{
            marginTop:"0",
            color:"lightGreen"
          }}
        >
          User details
        </h3>
        <p
          className="tl"
          style={{
            marginTop:"5px",
            color:"white",
            display: "inline",
            marginRight:"25px",
            paddingLeft:"30px"
          }}
        >
          <span style={{ color:"lime" }}>Username:</span> { username }</p>
        <p
          className="tc"
          style={{
            marginTop:"5px",
            color:"white",
            display: "inline",
            marginRight:"25px"
          }}
        >
          <span style={{ color:"lime" }}>Room ID:</span> { room }</p>
        <p
          className="tr"
          style={{
            marginTop:"5px",
            color:"white",
            display: "inline",
            marginRight:"25px"
          }}
        >
          <span style={{ color:"lime" }}>
            Joined at:
          </span>
          { getTime() }</p>
      </div>
    </div>
  );
}

export default User;
