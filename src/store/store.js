import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todos/TodoSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Handle write errors
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    todoSlice: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
