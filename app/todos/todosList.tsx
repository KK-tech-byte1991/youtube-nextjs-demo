import React from "react";
import { Todo } from "typings";
import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todoList = await fetchTodos();

  return (
    <>
      tod
      {todoList.map((todo) => (
        <p key={todo.id}>
          hhhhhhhhhhhhhhhhhhhhhh
          <Link href={`/todos/${todo.id}`}>Todo :{todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
