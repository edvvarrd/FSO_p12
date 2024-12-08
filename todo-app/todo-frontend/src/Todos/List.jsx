import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
	return (
		<>
			{todos
				.map((todo, i) => <Todo key={i} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />)
				.reduce((acc, cur) => [...acc, <hr />, cur], [])}
		</>
	)
}

export default TodoList
