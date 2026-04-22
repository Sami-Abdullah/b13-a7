'use client'
import { connectionContext } from '@/components/ContextCom';
import PieChart from '@/components/PieChart';

import React, { useContext } from 'react';
const Page = () => {
  const { connectionType } = useContext(connectionContext);
  const call = connectionType.filter(iteam => iteam.type === 'call')
  const text = connectionType.filter(iteam => iteam.type === 'text')
  const video = connectionType.filter(iteam => iteam.type === 'video')
  const data = {
    labels: ['Text', 'Call', 'Video'],
    datasets: [
      {
        label: '# of Votes',
        data: [text.length, call.length, video.length ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=' container mx-auto space-y-6 my-6'>
      <h1 className='text-4xl font-bold'>FriendShip Analytics</h1>
      <div className='shadow-sm bg-gray-200 px-20 py-10'>
        <h1 className='text-2xl text-[#244d3fFF]font-semibold'>By Interaction Type</h1>

        <div className='h-96 flex justify-center'>
          <PieChart data={data}></PieChart>
        </div>
      </div>
    </div>
  );
};

export default Page;