import React from 'react';

const TaskManager = () => {
    const [tasks, setTasks] = React.useState([]);
    
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <ul>
                {tasks.map((task, index) => ( 
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Add new task" onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value) {
                    addTask(e.target.value);
                    e.target.value = '';
                }
            }} />
        </div>
    );
};

export default TaskManager;