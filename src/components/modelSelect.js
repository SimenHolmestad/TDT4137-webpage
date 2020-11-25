import { selectContainer, selectRow } from "./modelSelect.module.css";

const ModelSelect = ({ value, onValueChanged }) => {
  return (
    <div className={selectContainer}>
      <div className={selectRow}>
        <label for="LSTMButton">LSTM</label>
        <input
          id="LSTMButton"
          type="radio"
          checked={!value}
          onClick={() => onValueChanged(false)}
        ></input>
      </div>

      <div className={selectRow}>
        <label for="kNNButton">kNN</label>
        <input
          id="kNNButton"
          type="radio"
          checked={value}
          onClick={() => onValueChanged(true)}
        ></input>
      </div>
    </div>
  );
};

export default ModelSelect;
