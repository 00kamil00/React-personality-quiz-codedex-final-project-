import React from "react";

export default function Question({ question, options, onAnswer }) {
  return (
    <div className="text-center mt-12">
      <h2 className="text-2xl font-semibold mb-6">{question}</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="bg-gray-200 px-6 py-3 rounded-xl text-lg hover:bg-gray-300 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
