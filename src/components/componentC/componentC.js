import React from 'react';
import { useSelector } from 'react-redux';

export default function ComponentC() {

  const value = useSelector((state) => state.value);
  return (
    <div>
        <h2>Component C</h2>
        Value from Redux Store: {value}
    </div>
  )
}
