import React, { Component } from "react";

const defaultLanguage = "english";
const Context = React.createContext(defaultLanguage);

export class LanguageStore extends Component {
  state = { language: "english", languageColor: "primary" };

  onLanguageChange = (language, languageColor) => {
    this.setState({ language, languageColor });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
