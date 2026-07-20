import { useState } from "react";
import { option } from "./Option";
import { useParams, useNavigate } from "react-router";

const Question = () => {
  const [selectedAns, setSelectedAns] = useState<string >();
  const { id } = useParams();
  const navigate = useNavigate();

  const questionId = Number(id);
  console.log(selectedAns);

  const handleSelectedOption = (selectedOps: string) => {
    setSelectedAns(selectedOps);
  };

  const handleNext = () => {
    // setCount(count + 1);
    if (questionId + 1 < option.length) {
      navigate(`/quiz/${questionId + 1}`);
    } else {
      navigate("/result");
    }
  };
  console.log("option", option);
  return (
    <main className="max-w-2xl mx-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-12">Quizapp</h1>

      {/* Question */}
      <h2 className="text-3xl font-semibold text-center mb-8">
        {option[questionId]?.question}
      </h2>

      {/* Options */}
      <ul className="space-y-4">
        {option[questionId]?.options.map((item) => (
          
          <li
  key={item}
  onClick={() => handleSelectedOption(item)}
  className={`${
    Boolean(selectedAns)
   && selectedAns === option[questionId].answer ?
    "bg-green-400" : "bg-red-500"
  } border rounded-lg p-4 cursor-pointer hover:bg-indigo-600 hover:text-white transition duration-200`}
>
  {item}
</li>
        ))} 
      </ul>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="w-full mt-10 bg-cyan-100 hover:bg-cyan-200 rounded-xl py-3 text-lg font-semibold transition"
      >
        Next
      </button>

      {/* Question Counter */}
      <p className="text-center mt-6 font-semibold">
        Question {questionId + 1} out of {option.length}
      </p>
    </main>
  );
};

export default Question;
