import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {({ language }) => {
              return language === "english" ? "Name" : "Naam";
            }}
          </LanguageContext.Consumer>
        </label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
