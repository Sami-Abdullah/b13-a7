import Home from '@/app/page';
import React from 'react';

const Data = async() => {
  const res =await  fetch('http://localhost:3000/data.json')
  const friends = await res.json()
  
  return (
    <>
      <Home data={friends}></Home>
    </>
  );
};

export default Data;