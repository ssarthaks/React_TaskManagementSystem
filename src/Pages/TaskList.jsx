import React, { useState } from "react";
import { useSelector } from "react-redux";

function TaskList() {
  // Retrieve tasks from the Redux store
  const tasks = useSelector((state) => state.todoSlice.todos);

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter out completed tasks from the filtered tasks
  const incompleteTasks = filteredTasks.filter((task) => !task.completed);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Title of the task list */}
      <div className="text-3xl text-center text-white font-semibold mb-8">
        <h1>Here are your tasks!</h1>
      </div>

      {/* Search input field */}
      <div className="mb-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Search tasks by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
        />
      </div>

      {/* Display tasks in a responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {/* Show a message if there are no incomplete tasks */}
        {incompleteTasks.length === 0 ? (
          <p className="text-white text-lg col-span-full">
            No incomplete tasks available.
          </p>
        ) : (
          // Map through the incomplete tasks and display them
          incompleteTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4"
            >
              <h2 className="text-xl font-semibold text-gray-900">{task.name}</h2>
              <p className="text-gray-700">Description: {task.desc}</p>
              <p className="text-gray-500 text-sm">Deadline: {task.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
