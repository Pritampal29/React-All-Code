import React, { useState, useEffect } from "react";
import "./AgeCal.css";

const AgeCal = () => {
  const [dob, setDob] = useState("");
  const [today, setToday] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const current = new Date().toISOString().split("T")[0];
    setToday(current);
  }, []);

  const calculateAge = () => {
    if (!dob || !today) {
      setResult("Please enter both dates.");
      return;
    }

    const birthDate = new Date(dob);
    const currentDate = new Date(today);

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult(`Age: ${years} year(s), ${months} month(s), and ${days} day(s)`);
  };

  return (
    <section className="age-calculator">
      <div className="container">
        <h2>Age Calculator</h2>

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <label htmlFor="today">Today's Date:</label>
        <input
          type="date"
          id="today"
          value={today}
          onChange={(e) => setToday(e.target.value)}
        />

        <button onClick={calculateAge}>Calculate Age</button>

        <div className="result">{result}</div>
      </div>
    </section>
  );
};

export default AgeCal;
