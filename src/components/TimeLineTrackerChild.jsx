'use client'
import React, { useContext, useEffect } from 'react';
import { LuPhone, LuVideo } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { connectionContext } from './ContextCom';

const TimeLineTrackerChild = ({ profile }) => {
  const { connectionType, setConnectionType } = useContext(connectionContext);

  const handleConnection = (method) => {
    const temp = [...connectionType];
    const res = temp.filter(t => t.id !== profile.id)

    setConnectionType([...res,
    {
      id: profile.id,
      type: method,
      name: profile.name,
      date: profile.next_due_date
    }])

  }
  useEffect(() => {
    console.log("UPDATED:", connectionType);
  }, [connectionType]);

  return (
    <div className='shadow-sm p-4 rounded-2xl space-y-4'>
      <div>Quick Check-In</div>
      <div>
        <div className='flex gap-4'>
          <div className='flex-1'>
            <button onClick={() => { handleConnection('call') }} className='w-full bg-gray-200 py-10 btn flex flex-col'><span><LuPhone /> </span><span>Call</span></button>
          </div>
          <div className='flex-1'>
            <button onClick={() => (handleConnection('text'))} className='w-full bg-gray-200 py-10 btn flex flex-col'><span><MdOutlineTextsms /> </span><span>Text</span></button>
          </div>
          <div className='flex-1'>
            <button onClick={() => (handleConnection('video'))} className='w-full bg-gray-200 py-10 btn flex flex-col'><span><LuVideo /> </span><span>Video</span></button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TimeLineTrackerChild;