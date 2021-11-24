import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
        <div>
          <h1 className="f2 orange grow b underline-hover dim pa2 br3 pointer" style={{paddingLeft: "20px"}}>DRAKESPEARE</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
