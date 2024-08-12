import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, removeTask, editTask } from "../todos/TodoSlice";

function TodoDashboard() {
  // Retrieve tasks from the Redux store
  const tasks = useSelector((state) => state.todoSlice.todos);
  const dispatch = useDispatch();

  // State for managing edit mode and current task being edited
  const [editMode, setEditMode] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Refs for the form inputs in edit mode
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);
  const completedRef = useRef(null);

  // Handle toggling task completion status
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  // Handle removing a task
  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  // Handle click on the edit button to enable edit mode
  const handleEditClick = (task) => {
    setEditMode(true);
    setCurrentTask(task);
    // Set initial values in the refs for editing
    if (nameRef.current) nameRef.current.value = task.name;
    if (descRef.current) descRef.current.value = task.desc;
    if (dateRef.current) dateRef.current.value = task.date;
    if (completedRef.current) completedRef.current.checked = task.completed;
  };

  // Handle form submission to update the task
  const handleUpdateTask = (e) => {
    e.preventDefault();
    if (currentTask) {
      dispatch(editTask({
        id: currentTask.id,
        name: nameRef.current.value,
        desc: descRef.current.value,
        date: dateRef.current.value,
        completed: completedRef.current.checked,
      }));
      setEditMode(false);  // Exit edit mode
      setCurrentTask(null);  // Clear current task
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Header for the dashboard */}
      <div className="text-3xl text-center text-white font-semibold mb-8">
        <h1>Edit your tasks here!</h1>
      </div>

      {/* Grid layout for displaying tasks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[90%]">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4"
          >
            <h2 className="text-xl font-semibold text-gray-900">{task.name}</h2>
            <p className="text-gray-700">Description: {task.desc}</p>
            <p className="text-gray-500 text-sm">Deadline: {task.date}</p>
            <div className="flex items-center justify-between mt-4">
              {/* Toggle task completion */}
              <button
                onClick={() => handleToggleComplete(task.id)}
                className={`px-4 py-2 rounded-lg text-white ${
                  task.completed
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {task.completed ? "Completed" : "Mark as Complete"}
              </button>
              {/* Remove task */}
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
              >
                Remove
              </button>
              {/* Edit task */}
              <button
                onClick={() => handleEditClick(task)}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Task Form */}
      {editMode && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <form
            onSubmit={handleUpdateTask}
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
          >
            <h2 className="text-xl font-semibold mb-4">Edit Task</h2>

            {/* Task Name Input */}
            <label htmlFor="editTaskName" className="block text-gray-700 font-medium mb-2">
              Task Name
            </label>
            <input
              type="text"
              id="editTaskName"
              ref={nameRef}
              placeholder="Task Name..."
              className="px-4 py-2 border border-gray-300 rounded-lg mb-4 w-full"
            />

            {/* Task Description Input */}
            <label htmlFor="editTaskDesc" className="block text-gray-700 font-medium mb-2">
              Task Description
            </label>
            <input
              type="text"
              id="editTaskDesc"
              ref={descRef}
              placeholder="Task Description..."
              className="px-4 py-2 border border-gray-300 rounded-lg mb-4 w-full"
            />

            {/* Task Deadline Input */}
            <label htmlFor="editTaskDate" className="block text-gray-700 font-medium mb-2">
              Task Deadline
            </label>
            <input
              type="date"
              id="editTaskDate"
              ref={dateRef}
              className="px-4 py-2 border border-gray-300 rounded-lg mb-4 w-full"
            />

            {/* Task Completed Checkbox */}
            <label htmlFor="editTaskComplete" className="block text-gray-700 font-medium mb-2">
              Completed
            </label>
            <input
              type="checkbox"
              id="editTaskComplete"
              ref={completedRef}
              className="mb-4"
            />

            {/* Form buttons: Save and Cancel */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default TodoDashboard;
