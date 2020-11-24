import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ModelSelect from "./components/modelSelect";

function NewlineText(text) {
  return text.split("\n").map((str, index) => <p key={index}>{str}</p>);
}

function App() {
  const [reviewText, setReviewText] = useState("Write your review here");
  const [machineLearningResponse, setMachineLearningResponse] = useState("");
  const [modelSelect, setModel] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setMachineLearningResponse(
      "Calculating results... (this might take som time)"
    );
    const url = `https://europe-west1-tdt4173-ml-project.cloudfunctions.net/function-1?message=${reviewText}&model=${
      modelSelect ? "kNN" : "LSTM"
    }`;
    const response = await fetch(url);
    const content = await response.text();
    const formatted_content = content.replaceAll("|", "\n");
    setMachineLearningResponse(formatted_content);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>TDT4173 project - webpage</h2>
        <InputForm
          reviewText={reviewText}
          setReviewText={setReviewText}
          handleSubmit={handleSubmit}
        />
        {NewlineText(machineLearningResponse)}
        <ModelSelect
          value={modelSelect}
          onValueChanged={(value) => setModel(value)}
        />
      </header>
    </div>
  );
}

export default App;
