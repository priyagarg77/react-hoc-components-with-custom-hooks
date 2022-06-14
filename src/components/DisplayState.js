import React from 'react';
import simpleHOC from './simpleHOC';

const DisplayState = ({ data }) => {
  return data !== undefined ? (
    <>
      <h2>HOC component to change the value of state</h2> {data}
    </>
  ) : (
    'loading data...'
  );
};

export default simpleHOC(DisplayState);
