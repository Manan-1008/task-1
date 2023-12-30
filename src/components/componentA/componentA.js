import React from 'react';
import ComponentB from '../componentB/componentB';
import ComponentC from '../componentC/componentC';

export default function ComponentA() {
  return (
    <div>
        <h2>Inside Component A</h2>
        <ComponentB />
        <ComponentC />
    </div>
  )
}
