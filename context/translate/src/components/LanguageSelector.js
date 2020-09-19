import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <React.Fragment>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          Select a language:
        </span>
        <i
          className="flag us"
          onClick={() => {
            this.context.onLanguageChange("english", "primary");
          }}
        ></i>
        <i
          className="flag nl"
          onClick={() => {
            this.context.onLanguageChange("dutch", "red");
          }}
        ></i>
      </React.Fragment>
    );
  }
}

export default LanguageSelector;
