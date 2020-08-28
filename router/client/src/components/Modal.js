import React from "react";
import ReactDOM from "react-dom";

// modals should always be created using a portal. This is due to the
// uncertainties with the other css components on the website.
// When react components need to be rendered into html/css which you
// have no coded yourself - create a portal.

/**
 * Create a basic customizable modal, styled with semantic UI.
 * @param {title, content, actions, onDismiss} props
 */
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
