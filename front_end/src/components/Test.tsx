import Home from "./HomeComponents/Home.tsx";

export function test() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState(null);
    const [newTodo, setNewTodo] = useState('');


    const fetchTodos = async () => {
        try {
            const response = await fetch('/api/todo');
            const data = await response.json();
            setTodos(data);
            console.log('Fetched todos:', data);  // Log the todos
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

// Post a new todo
    const postTodo = async () => {
        try {
            const response = await fetch('/api/todo', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({description: newTodo, status: 'OPEN'}),
            });
            const data = await response.json();
            setTodos([...todos, data]);
            console.log('Created todo:', data);
        } catch (error) {
            console.error('Error posting todo:', error);
        }
    };

// Fetch a todo by ID
    const fetchTodoById = async (id) => {
        try {
            const response = await fetch(`/api/todo/${id}`);
            const data = await response.json();
            setTodo(data);
            console.log('Fetched todo by ID:', data);  // Log the specific todo
        } catch (error) {
            console.error(`Error fetching todo with ID ${id}:`, error);
        }
    };

// Update a todo by ID
    const updateTodo = async (id, updatedDescription) => {
        try {
            const response = await fetch(`/api/todo/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id, description: updatedDescription, status: 'IN_PROGRESS'}),
            });
            const data = await response.json();
            setTodos(todos.map(todo => (todo.id === id ? data : todo)));
            console.log('Updated todo:', data);  // Log the updated todo
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

// Delete a todo by ID
    const deleteTodo = async (id) => {
        try {
            await fetch(`/api/todo/${id}`, {method: 'DELETE'});
            setTodos(todos.filter(todo => todo.id !== id));
            console.log(`Deleted todo with ID ${id}`);  // Log the deleted todo ID
        } catch (error) {
            console.error(`Error deleting todo with ID ${id}:`, error);
        }
    };

    return (
        <div className="App">
            <h1>Todo API Test</h1>

            {/* Fetch all todos */}
            <button onClick={fetchTodos}>Fetch All Todos</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.description}
                        <button onClick={() => fetchTodoById(todo.id)}>Get Todo</button>
                        <button onClick={() => updateTodo(todo.id, "Updated Description")}>Update Todo</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
                    </li>
                ))}
            </ul>

            {/* Add new todo */}
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="New Todo"
            />
            <button onClick={postTodo}>Add Todo</button>

            {/* Show details of a fetched todo */}
            {todo && (
                <div>
                    <h3>Todo Details:</h3>
                    <p>ID: {todo.id}</p>
                    <p>Description: {todo.description}</p>
                    <p>Status: {todo.status}</p>
                </div>
            )}
        </div>
    );
}
export default Test;