import { useState } from "react";
import { option } from "./Option";

const Question = () => {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  {
    // console.log(option);
    console.log(count);
  }
  return (
<div className="min-h-screen bg-violet-300 flex items-center justify-center p-6">
  <div className="w-full max-w-5xl bg-pink-300 rounded-2xl shadow-lg p-10">
    {count === option.length ? (
      <div className="flex flex-col items-center justify-center h-96">
        <h1 className="text-5xl font-bold mb-4">🎉 Thank You!</h1>
        <p className="text-xl">Quiz Completed Successfully.</p>
      </div>
    ) : (
      <main className="max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-12">
          Quizapp
        </h1>

        {/* Question */}
        <h2 className="text-3xl font-semibold text-center mb-8">
          {option[count]?.question}
        </h2>

        {/* Options */}
        <ul className="space-y-4">
          {option[count]?.options.map((item) => (
            <li
              key={item}
              className="bg-white border rounded-lg p-4 cursor-pointer hover:bg-indigo-600 hover:text-white transition duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Next Button */}
        <button
          onClick={handleCount}
          className="w-full mt-10 bg-cyan-100 hover:bg-cyan-200 rounded-xl py-3 text-lg font-semibold transition"
        >
          Next
        </button>

        {/* Question Counter */}
        <p className="text-center mt-6 font-semibold">
          Question {count + 1} out of {option.length}
        </p>
      </main>
    )}
  </div>
</div>
  );
};

export default Question;
