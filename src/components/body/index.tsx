import React from 'react';
import Demo from './Demo';
import Studio from './Studio';
import Revenu from './Revenu';
import Beneath from './Beneath';

function Body() {
  return (
    <div className="container mx-auto">
      <Demo />
      <Studio />
      <Revenu />
      <Beneath />
    </div>
  );
}

export default Body;
