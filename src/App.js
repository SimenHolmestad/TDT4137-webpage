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
    const url = `https://europe-west1-tdt4173-ml-project.cloudfunctions.net/function-${
      modelSelect ? "2" : "1"
    }?message=${reviewText}`;
    const response = await fetch(url);
    const content = await response.text();
    const formatted_content = content.replaceAll("|", "\n");
    setMachineLearningResponse(formatted_content);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>TDT4173 project - webpage</h2>
        <div className="info-text">
          <p>
            This website is related to a project in the course TDT4173 – Machine Learning at NTNU. The goal of the project was to try out two different machine learning techniques on the same classification problem – to predict the numbers of stars for the reviews in the <a href="https://www.kaggle.com/yelp-dataset/yelp-dataset">yelp dataset</a>. The methods used are:
          </p>
          <ul>
            <li>k nearest neighbours using bag-of-words</li>
            <li>LSTM using word embeddings</li>
          </ul>
          <p>
            The project report can be found <a href="http://folk.ntnu.no/simehol/maskinlaering/TDT4173_project.pdf">here</a>. To experiment with how the models perform on new data, try out the form below:
          </p>
        </div>
        <ModelSelect
          value={modelSelect}
          onValueChanged={(value) => setModel(value)}
        />
        <InputForm
          reviewText={reviewText}
          setReviewText={setReviewText}
          handleSubmit={handleSubmit}
        />
        {NewlineText(machineLearningResponse)}
      </header>
    </div>
  );
}

export default App;
