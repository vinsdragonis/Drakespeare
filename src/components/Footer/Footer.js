import React from 'react';

const Footer = () => {
  return (
    <div>
      <nav style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
        <div>
          <a
            className="f6 white grow b dim br3 pointer footer link footer-link"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px"
            }}
            href="https://vinsdragonis.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            COPYRIGHT © VINEETH B V
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
