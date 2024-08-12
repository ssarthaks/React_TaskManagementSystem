import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state of the todos slice
const initialState = {
  todos: [
    {
      id: 1,
      name: "Learning React",
      desc: "Today I will be making a task management system using react redux and redux toolkit.",
      date: "2024-01-12", // Updated date format
      completed: false,
    },
    {
      id: 2,
      name: "Learning Tailwind",
      desc: "Tomorrow I will learn TailwindCSS.",
      date: "2024-01-13", // Updated date format
      completed: true,
    },
    {
      id: 3,
      name: "Learning Node",
      desc: "Then after tomorrow I will learn Node.",
      date: "2024-01-14", // Updated date format
      completed: false,
    },
    {
      id: 4,
      name: "Reading JavaScript Book",
      desc: "Read chapters 3 to 5 of the JavaScript book.",
      date: "2024-01-15", // Updated date format
      completed: false,
    },
    {
      id: 5,
      name: "Complete Redux Tutorial",
      desc: "Finish the Redux tutorial on the official website.",
      date: "2024-01-16", // Updated date format
      completed: true,
    },
    {
      id: 6,
      name: "Set Up GitHub Repository",
      desc: "Create and initialize a new GitHub repository for the project.",
      date: "2024-01-17", // Updated date format
      completed: false,
    },
    {
      id: 7,
      name: "Attend Web Development Workshop",
      desc: "Participate in the online workshop for web development.",
      date: "2024-01-18", // Updated date format
      completed: false,
    },
    {
      id: 8,
      name: "Write Blog Post",
      desc: "Draft and publish a blog post about the latest tech trends.",
      date: "2024-01-19", // Updated date format
      completed: false,
    },
  ],
};

// Create a slice of the Redux store
export const todoSlice = createSlice({
  name: "todoSlice", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Action to add a new task
    addTask: (state, action) => {
      const { name, desc, date, completed } = action.payload; // Destructure the payload
      const todo = {
        id: nanoid(), // Generate a unique ID for the new task
        name,
        desc,
        date,
        completed,
      };
      state.todos.push(todo); // Add the new task to the todos array
    },
    // Action to remove a task by ID
    removeTask: (state, action) => {
      state.todos = state.todos.filter(
        (eachVal) => eachVal.id !== action.payload // Filter out the task with the specified ID
      );
    },
    // Action to toggle the completed status of a task
    toggleComplete: (state, action) => {
      const todo = state.todos.find((eachVal) => eachVal.id === action.payload); // Find the task by ID
      if (todo) {
        todo.completed = !todo.completed; // Toggle the completed status
      }
    },
    // Action to edit an existing task
    editTask: (state, action) => {
      const { id, name, desc, date, completed } = action.payload; // Destructure the payload
      const todo = state.todos.find((eachVal) => eachVal.id === id); // Find the task by ID
      if (todo) {
        // Update task details if provided
        todo.name = name !== undefined ? name : todo.name;
        todo.desc = desc !== undefined ? desc : todo.desc;
        todo.date = date !== undefined ? date : todo.date;
        todo.completed = completed !== undefined ? completed : todo.completed;
      }
    },
  },
});

// Export actions and the reducer function
export const { addTask, removeTask, toggleComplete, editTask } =
  todoSlice.actions;
export default todoSlice.reducer;
