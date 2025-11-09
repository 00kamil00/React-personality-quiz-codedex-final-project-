import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserForm() {
  const [inputName, setInputName] = useState("");
  const { setName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputName.trim() === "") return;
    setName(inputName);
    window.history.pushState({}, "", "/quiz");
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  }

  return (
    <form onSubmit={handleSubmit} className="text-center mt-12">
      <label className="block text-2xl font-semibold mb-4">
        What's your name?
      </label>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter your name..."
        className="border border-gray-300 rounded-xl px-4 py-2 w-64 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="ml-4 bg-blue-600 text-white text-lg font-semibold px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Start Quiz
      </button>
    </form>
  );
}
