import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is quickly becoming the new industry standard.",
  },
  {
    title: "How do you use React?",
    content:
      "1) Install nodejs 2) install create-react-app 3) run npm start. Its that easy.",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
