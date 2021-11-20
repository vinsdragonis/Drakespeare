import React, { Component } from 'react';

const Navbar = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-between"}}>
      <div className="tr">
        <p className="f2 black dim b underline-hover pa2 br3 pointer" style={{paddingLeft: "20px"}}>DRAKESPEARE</p>
      </div>
    </nav>
  );
}

export default Navbar;