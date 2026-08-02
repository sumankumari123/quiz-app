import { useState } from "react";
import { option } from "./Option";
import { useParams, useNavigate } from "react-router";

const Question = () => {
  const [selectedAns, setSelectedAns] = useState<string>();
  const [clickOps, setClickOps] = useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const questionId = Number(id);

  const handleSelectedOption = (selectedOps: string) => {
    console.log("handleSelectedOption", selectedOps);
    setSelectedAns(selectedOps);
  };

  const handleNext = () => {
    // setCount(count + 1);
    setSelectedAns(undefined);

    if (questionId + 1 < option.length) {
      navigate(`/quiz/${questionId + 1}`);
    } else {
      navigate("/result");
    }
  };

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
            onClick={() => {
              if (!selectedAns) {
                setSelectedAns(item);
              }
              setClickOps(true);
              setSelectedAns(item);
              console.log(item, " ==== ", selectedAns);
              // console.log("option", option);
              // console.log("clickOps", clickOps);
              // console.log("selectedAns ", selectedAns);
              
            }}
            className={`border rounded-lg p-4 cursor-pointer transition duration-200
      ${
        selectedAns && clickOps
          ? selectedAns === option[questionId].answer &&
            item === option[questionId].answer
            ? "bg-green-600 text-white"
            : item === selectedAns
              ? "bg-red-600 text-white"
              : "bg-white text-black"
          : "bg-white text-black"
      }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="w-full mt-10 bg-cyan-100 hover:bg-cyan-500 rounded-xl py-3 text-lg font-semibold transition"
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
