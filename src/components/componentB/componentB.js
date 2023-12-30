import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from '../../actions/actions'; // Import the action to update the Redux store
import './componentB.css';

export default function ComponentB() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newValue = event.target.value;

    // Dispatch the action to update the Redux store
    dispatch(updateValue(newValue));
  };

  return (
    <div>
      <h2>Component B</h2>
      <input type="text" placeholder='Input some text' className='text-input' onChange={handleChange} />
    </div>
  );
};

