import "./App.css";
import AddTask from "./Pages/AddTask";
import TodoDashboard from "./Pages/TodoDashboard";
import Layout from "./components/Layout";
import UserSetting from "./Pages/UserSetting";
import TaskList from "./Pages/TaskList";
import background from "/background.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
      {/* <div> */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<TaskList />} />
              <Route path="addtask" element={<AddTask />} />
              <Route path="viewtask" element={<TodoDashboard />} />
              <Route path="usersetting" element={<UserSetting />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
