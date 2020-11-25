import React from 'react';

export function InputForm(props) {
  return (
    <form className="input-form" onSubmit={props.handleSubmit}>
      <textarea value={props.reviewText} onChange={e => props.setReviewText(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default InputForm
