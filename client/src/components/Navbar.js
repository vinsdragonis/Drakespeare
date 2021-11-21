import React, { Component } from 'react';

const Navbar = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-between"}}>
      <div className="tl">
        <h1 className="f2 black dim b underline-hover pa2 br3 pointer" style={{paddingLeft: "20px"}}>DRAKESPEARE</h1>
      </div>
    </nav>
  );
}

export default Navbar;