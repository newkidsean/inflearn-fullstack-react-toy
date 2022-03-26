import React, { useRef } from 'react';

const MsgInput = ({ mutate, text = '', id = undefined }) => {
  const textRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text, id);
  };

  return (
    <form className="messages__input" onSubmit={onSubmit}>
      <textarea
        ref={textRef}
        placeholder="fill in text"
        defaultValue={text}
      />
      <button type="submit">완료</button>
    </form>
  )
}

export default MsgInput;