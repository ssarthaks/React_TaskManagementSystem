import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../todos/TodoSlice";

const AddTask = () => {
  // Initialize the Redux dispatch function
  const dispatch = useDispatch();
  
  // Create refs for form inputs to directly access their values
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);

  // State to manage the completed status of the task
  const [completed, setCompleted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Retrieve current values from the input fields via refs
    const name = nameRef.current.value;
    const desc = descRef.current.value;
    const date = dateRef.current.value;

    // Ensure that all required fields are filled
    if (name && desc && date) {
      // Dispatch the action to add the task to the Redux store
      dispatch(addTask({ name, desc, date, completed }));

      // Clear the form fields and reset state after submission
      nameRef.current.value = "";
      descRef.current.value = "";
      dateRef.current.value = "";
      setCompleted(false);
    }
  };

  return (
    <div>
      {/* Title of the form */}
      <h1 className="text-3xl text-center text-white font-semibold mb-8">
        Add your tasks here!
      </h1>

      {/* Form container */}
      <div className="relative text-white mt-12 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg flex max-w-[40%] mx-auto items-center justify-center text-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
          
          {/* Task Name input field */}
          <label htmlFor="taskName" className="text-gray-700 font-medium">
            Enter your task Name
          </label>
          <input
            type="text"
            id="taskName"
            ref={nameRef} // Attach ref to access value
            placeholder="Task Name..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base text-black"
          />

          {/* Task Description input field */}
          <label htmlFor="taskDesc" className="text-gray-700 font-medium">
            Enter your task description
          </label>
          <input
            type="text"
            id="taskDesc"
            ref={descRef} // Attach ref to access value
            placeholder="Task Description..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base text-black"
          />

          {/* Task Deadline input field */}
          <label htmlFor="taskDate" className="text-gray-700 font-medium">
            Enter your task deadline
          </label>
          <input
            type="date"
            id="taskDate"
            ref={dateRef} // Attach ref to access value
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base text-black"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
