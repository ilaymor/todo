import Header from "./components/Header";
import Button from "./components/Button";
import List from "./components/List";
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {
  const headerText = "To-do list"
  const addTaskButtonText = "Add task"
  const tasksNotFoundText = "You don't have any tasks, currently"

  const [ tasks, setTasks ] = useState([]);

  const tasksAPI = 'http://localhost:4000/api/tasks'

  const fetchTasks = async () => {
    try {
      const response = await axios.get(tasksAPI);
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    }

    fetchData();
  }, []);



  return (
    <div className="appContainer">
      <div className="todoList">
        <Header text = { headerText }/>
        <Button text = { addTaskButtonText } />
        <List items = { tasks } notFound= { tasksNotFoundText } />
      </div>
    </div>
  );
}

export default App;




