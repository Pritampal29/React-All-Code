import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const curTime = new Date();
      const newTime = curTime.toLocaleTimeString();
      setTime(newTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fs-12" style={{ fontWeight: "700" }}>
      {time}
    </div>
  );
};

export default Clock;
