import Todo from "./Todo";

const TodoList = ({todos}:any) => {
    return (
        <div className='todoList'>
            <h2>todo 목록</h2>
            <div className='container'>
                {todos.map((todo:any) => <Todo key={todo.id} data={todo} />)}
            </div>
        </div>
    )
}

export default TodoList;