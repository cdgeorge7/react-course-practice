import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

export default function MainContent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const todoItems = todosData.map(item => (
    <TodoItem key={item.id} title={item.title} completed={item.completed} />
  ));

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      {}
      {todoItems}
    </div>
  );
}
