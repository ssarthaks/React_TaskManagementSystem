import React, { useState, useRef } from "react";

const UserSetting = () => {
  // State for managing form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  // Refs for accessing form input values directly
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const themeRef = useRef(null);
  const notificationsRef = useRef(null);

  // Handle form submission
  const handleSave = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Collect values from refs and handle the save logic (e.g., sending data to an API or updating the state)
    console.log("Settings saved:", {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      theme: themeRef.current.value,
      notifications: notificationsRef.current.checked,
    });
  };

  return (
    <div className="text-white p-6">
      {/* Header for the settings page */}
      <div className="text-3xl text-center font-semibold mb-8">
        <h1>User Settings</h1>
      </div>
      {/* Form for updating user settings */}
      <form
        onSubmit={handleSave}
        className="space-y-6 max-w-lg mx-auto bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
      >
        {/* Profile Settings Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
          {/* Input for the user's name */}
          <label htmlFor="name" className="block text-gray-200 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={name}
            ref={nameRef}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white"
          />

          {/* Input for the user's email */}
          <label htmlFor="email" className="block text-gray-200 mt-4 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={email}
            ref={emailRef}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white"
          />

          {/* Input for the user's password */}
          <label htmlFor="password" className="block text-gray-200 mt-4 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            defaultValue={password}
            ref={passwordRef}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white"
          />
        </div>

        {/* Preferences Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
          {/* Dropdown for selecting theme */}
          <div className="mb-4">
            <label htmlFor="theme" className="block text-gray-200 mb-2">
              Theme
            </label>
            <select
              id="theme"
              defaultValue={theme}
              ref={themeRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* Checkbox for enabling/disabling notifications */}
          <div>
            <label htmlFor="notifications" className="block text-gray-200 mb-2">
              Notifications
            </label>
            <input
              type="checkbox"
              id="notifications"
              defaultChecked={notifications}
              ref={notificationsRef}
              className="mr-2"
            />
            <span className="text-gray-200">Enable notifications</span>
          </div>
        </div>

        {/* Submit button for saving settings */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSetting;
