import React, { useState } from "react";

function Assessment({ assessment, onComplete }) {
  const [userAnswer, setUserAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    const isCorrect =
      assessment.type === "multiple-choice"
        ? userAnswer === assessment.correctAnswer
        : userAnswer.toLowerCase() === assessment.correctAnswer.toLowerCase();

    if (isCorrect) {
      setFeedback("Correct! You can proceed.");
      onComplete();
    } else {
      setFeedback("Incorrect. Please try again.");
    }
  };

  return (
    <div>
      <p>{assessment.question}</p>
      {assessment.type === "multiple-choice" ? (
        assessment.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="option"
              value={index}
              onChange={() => setUserAnswer(index)}
            />
            {option}
          </label>
        ))
      ) : (
        <input
          type="text"
          placeholder="Your answer"
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default Assessment;
