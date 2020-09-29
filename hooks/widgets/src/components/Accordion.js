import React, { useState } from "react";

const Accordion = ({ items }) => {
  // simple array destructuring syntax. This is what retrieves the state.
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, currIndex) => {
    const isActive = currIndex === activeIndex ? "active" : "";

    return (
      <React.Fragment key={currIndex}>
        <div
          className={`title ${isActive}`}
          onClick={() => {
            onTitleClick(currIndex);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
