import './App.css';
import InputForm from './components/InputForm';
import React from 'react'

function App() {
  const [reviewText, setReviewText] = React.useState("Write your review here");
  const [machineLearningResponse, setMachineLearningResponse] = React.useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setMachineLearningResponse("Fetching data...")
    const url = "https://europe-west1-tdt4173-ml-project.cloudfunctions.net/function-1?message=" + reviewText
    const response = await fetch(url);
    const content = await response.text()
    setMachineLearningResponse(content)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>TDT4173 project - webpage</h2>
        <InputForm reviewText={reviewText} setReviewText={setReviewText} handleSubmit={handleSubmit}/>
        <p>{machineLearningResponse}</p>
      </header>
    </div>
  );
}

export default App;
