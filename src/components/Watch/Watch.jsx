import { useState, useEffect } from "react";

import "./watch.css";

const moment = require("moment");

export const Watch = ({ watch, handleDelete }) => {
  const [time, setTime] = useState(
    moment()
      .utc()
      .utcOffset(watch.timeZone * 60)
      .format("HH:MM:ss")
  );

  useEffect(() => {
    const itervalId = setInterval(() => {
      setTime(
        moment()
          .utc()
          .utcOffset(watch.timeZone * 60)
          .format("HH:MM:ss")
      );
    }, 1000);

    return () => clearInterval(itervalId);
  }, [time, watch.timeZone]);

  return (
    <div className="watch">
      <h2 className="watch__title">{watch.title}</h2>
      <p className="watch__time">{time}</p>
      <span className="watch__delete-icon" onClick={handleDelete}>
        ✘
      </span>
    </div>
  );
};
