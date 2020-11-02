import React from 'react';

export function InputForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Review text:
        <input
          type="text"
          value={props.reviewText}
          onChange={e => props.setReviewText(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default InputForm
