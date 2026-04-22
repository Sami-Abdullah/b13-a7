'use client'
import { connectionContext } from '@/components/ContextCom';
import DropDownFilter from '@/components/DropDownFilter';
import TimeLineList from '@/components/TimeLineList';
import React, { useContext, useState } from 'react';

const Page = () => {
  const { connectionType } = useContext(connectionContext);
  const [filteredMethods, setfilteredMethods] = useState([...connectionType])

  console.log('this is filter',filteredMethods);  
  return (
    <div className='space-y-6 container mx-auto mb-10'>
      <h1 className='text-gray-800 text-5xl font-bold'>Timeline</h1>
      <DropDownFilter connectionType={connectionType} setfilteredMethods={setfilteredMethods}></DropDownFilter>

      {
      
      filteredMethods.length === 0 ? (
        <div className="px-7 py-30 text-center text-3xl fonst-semibold bg-gray-100 text-gray-500 ">
          No timeline activity yet
        </div>
      ) : (
        filteredMethods.map((t) => (
          <TimeLineList key={t.id} t={t} />

        ))
      )}
    </div>
  );
};

export default Page;