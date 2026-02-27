import React from 'react';
import Demo from './Demo';
import Studio from './Studio';
import Revenu from './Revenu';
import Beneath from './Beneath';
import Decision from './Decision';
import Mark from './Mark';
import Protect from './Protect';
import Discover from './Discover';

function Body() {
  return (
    <>
    <div className=" mx-auto">
      <Demo />
      <Studio />
      <Revenu />
      <Beneath />
      <Decision />
      </div>
      <Mark />
    
      <Protect />
      <Discover />
    </>
  );
}

export default Body;
