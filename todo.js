const todo = document.getElementById("todo");

function ListItem({ taskName }) {
  return <p>{taskName}</p>;
}

function Board() {
  const [tasks, setTasks] = React.useState(['Touch grass', 'Learn React', 'Sip boba']);
  const [newTask, setNewTask] = React.useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <div>
        <input 
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress} 
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
        <button onClick={handleClearTasks}>Clear</button>
      </div>
      {tasks.map((task) => (
        <ListItem key={task} taskName={task} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(todo);
root.render(<Board />);
