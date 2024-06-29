import { useState } from "react";
import "./App.css";

const FaqItem = ({question, answer}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={toggleShow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">{answer}</div>
      </div>
    </div>
  );
};

const FaqAccordion = ({ data }) => {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is an Front-End javaScript Library for Building user Interfaces or UI Component.",
  },
  {
    id: 2,
    question: "What are benefits of React?",
    answer:
      "Some of the Benefits of React : It is Fast, Scalable, Modular, Easy to Debug, and Support Server Side Rendering.",
  },
  {
    id: 3,
    question: "What are the main concepts of React?",
    answer:
      "Some of the main Concepts of React are : Component, Props, States, Hooks, Lifecycle Methods, and JSX.",
  },
];

function App() {
  return (
    <>
      <div className="app">
        <FaqAccordion data={data} />
      </div>
    </>
  );
}

export default App;
