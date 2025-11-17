import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <>
        <h1 className="text-body-secondary display-5 text-center mt-3">Form</h1>
        <form className="container d-flex flex-column align-items-center" onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select className="form-select"
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea 
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-secondary mb-3">Send</button>
    </form>
    </>

  );
}