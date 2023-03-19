import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleCopy = () => {
    // let textBox = document.getElementById("mybox");
    // textBox.select();
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges()
    props.showAlert("copy to clipboard", "primary");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <div
      className="container rounded border my-3"
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#042743",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <div className=" my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            placeholder="Enter text hare"
            id="mybox"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-primary m-1"
          onClick={() => setText(text.toUpperCase())}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => setText(text.toLowerCase())}
        >
          Convert to LowerCase
        </button>
        <button className="btn btn-primary m-1" onClick={() => setText("")}>
          Clear Text
        </button>
        <button className="btn btn-primary m-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="my-3">
        <h2>Your text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((elem) => {
              return elem.length !== 0;
            }).length} minuts read</p>
        <h3>Preview</h3>
        <p>
          {!text
            ? "Enter somthing in the textbox above to preview it hare"
            : text}
        </p>
      </div>
    </div>
  );
};

export default TextForm;
