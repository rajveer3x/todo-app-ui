import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      <AddTodo />
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoDate={item.date} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
