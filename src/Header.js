import React from "react";

function Header() {
  return (
    <header className="header">
      <div id="logo">
        <img src={require("./photos/new.jpg")} alt="New guys log" />
        <h2>New Guys</h2>
      </div>

      <h1 id="title">The Best Friends Forever</h1>
    </header>
  );
}

export default Header;
