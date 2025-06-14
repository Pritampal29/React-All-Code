import React, { useEffect, useState } from "react";

const ToDate = () => {
  const [date, setDate] = useState("");
  const curDate = new Date();
  const nwDate = curDate.toLocaleDateString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  useEffect(() => {
    setDate(nwDate);
  }, []);
  return (
    <div className="fs-12" style={{ fontWeight: "700" }}>
      {date}
    </div>
  );
};

export default ToDate;
