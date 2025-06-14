import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Word.css";

const WordCounter = () => {
  const [text, setText] = useState("");

  const handleUpper = () => {
    let UpperCase = text.toUpperCase();
    setText(UpperCase);
  };

  const handleLower = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  };

  const handleSentense = () => {
    let SentenseCase = text
      .trim()
      .toLowerCase()
      .replace(/^./, (c) => c.toUpperCase());
    setText(SentenseCase);
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    let copyText = navigator.clipboard.writeText(text);
    toast.success("📋 Text Copied to Clipboard");
    setText(text);
  };

  const handleExtraSpace = () => {
    let extraSpace = text.trim().replace(/\s+/g, " ");
    setText(extraSpace);
  };

  const WordCount =
    text.trim() === ""
      ? 0
      : text
          .trim()
          .split(/\s+/)
          .filter((word) => word !== "").length;
  return (
    <div className="text-analyzer-wrapper">
      <div className="text-analyzer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="input-col">
                <label htmlFor="textInput">Enter Text Here:</label>
                <textarea
                  id="textInput"
                  placeholder="Type or Paste your text Here..."
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                ></textarea>

                <div className="button-group">
                  <button onClick={handleUpper} className="btn cyan-outline">
                    UPPERCASE
                  </button>
                  <button onClick={handleLower} className="btn cyan-outline">
                    lowercase
                  </button>
                  <button onClick={handleSentense} className="btn cyan-outline">
                    Sentence case
                  </button>
                  <button onClick={handleClear} className="btn green">
                    Clear
                  </button>
                  <button onClick={handleCopy} className="btn yellow">
                    Copy to Clipboard
                  </button>
                  <button onClick={handleExtraSpace} className="btn red">
                    Remove Extra Space
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="result-col">
                <ul>
                  <li>
                    <strong>Words:</strong> <span>{WordCount}</span>
                  </li>
                  <li>
                    <strong>Characters:</strong> <span>{text.length}</span>
                  </li>
                  <li>
                    <strong>Sentences:</strong>{" "}
                    <span>
                      {
                        text
                          .split(/[.!?]+/)
                          .filter((sentence) => sentence.trim().length > 0)
                          .length
                      }
                    </span>
                  </li>
                  <li>
                    <strong>Paragraphs:</strong>{" "}
                    <span>
                      {text.trim() === ""
                        ? 0
                        : text
                            .trim()
                            .split(/\n\s*\n/)
                            .filter((p) => p.trim() !== "").length}
                    </span>
                  </li>
                  <li>
                    <strong>Reading Time:</strong>{" "}
                    <span>
                      {Math.floor((0.22 * WordCount) / 60)} min{" "}
                      {Math.round((0.22 * WordCount) % 60)} sec
                    </span>
                  </li>
                  <li>
                    <strong>Speaking Time:</strong>{" "}
                    <span>
                      {Math.floor((0.36 * WordCount) / 60)} min{" "}
                      {Math.round((0.36 * WordCount) % 60)} sec
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} position="top-right" />
    </div>
  );
};

export default WordCounter;
