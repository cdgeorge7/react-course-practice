import React, { useState } from "react";

export default function TodoItem(props) {
  const [completed, markComplete] = useState(props.completed);

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          markComplete(!completed);
        }}
      />{" "}
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {props.title}
      </span>
    </div>
  );
}
