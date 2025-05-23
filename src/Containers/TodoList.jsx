import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleDelete = (event) => {
    if (event.target.tagName === "BUTTON" && event.target.dataset.id) {
      const todoId = Number(event.target.dataset.id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    }
  };

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    setTodos([...todos, { id: todos.length + 1, text: todoText.trim() }]);
    setTodoText("");
  };

  return (
    <>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="button" onClick={handleAddTodo}>
        Add Todo
      </button>
      {/* handle child deletions using event delegation */}
      <div onClick={handleDelete}>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.text}</span>
            <button type="button" data-id={todo.id}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
