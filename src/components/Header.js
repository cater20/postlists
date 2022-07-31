import React from "react";

function Header ({onDarkModeClick,isDarkMode}){
    return (
       <div className={"App " + (isDarkMode ? "dark" : "light")}>
          <header>
            <h2>Posters</h2>
            <button onClick={onDarkModeClick}>
              {isDarkMode ? "Dark" : "Light"} Mode
            </button>
          </header>
          </div>
);} 

export default Header;
