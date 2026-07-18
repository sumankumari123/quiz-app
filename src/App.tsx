import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import { Routes, Route, Navigate } from "react-router";
import Result from "./components/Result";

function App() {
  return (
    <>
      <section>
        <div className="min-h-screen bg-violet-300 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-pink-300 rounded-2xl shadow-lg p-10">
        <Routes>
          <Route path="/" element={<Navigate to="/quiz/0" replace />} />
          <Route path="/quiz/:id" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        </div>
        </div>
      </section>
    </>
  );
}

export default App;
