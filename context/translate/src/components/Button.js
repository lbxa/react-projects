import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => {
            return language === "english" ? "Submit" : "Voorleggen";
          }}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {({ languageColor }) => {
          console.log(languageColor);
          return this.renderButton(languageColor);
        }}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
