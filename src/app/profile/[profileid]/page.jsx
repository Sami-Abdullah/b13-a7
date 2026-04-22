
import ProfileDetailsCard from '@/components/ProfileDetailsCard';
import TimeLineTracker from '@/components/TimeLineTracker';
import TimeLineTrackerChild from '@/components/TimeLineTrackerChild';
import React from 'react';
import { GoArchive } from 'react-icons/go';
import { MdOutlineDelete, MdOutlineTextsms } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';

const page = async ({ params }) => {
  const { profileid } = await params;
  const res = await fetch('http://localhost:3000/data.json')
  const profiles = await res.json();

  const profile = profiles.find(p =>
    p.id === Number(profileid)
  );
  console.log(profileid,typeof(profileid));
  const { days_since_contact, goal, next_due_date } = profile

  return (
    <div className='mx-auto py-20 w-7/10'>

      <div className='grid grid-cols-3 gap-6 items-stretch'>

        <div className='col-span-1 flex flex-col justify-between gap-4'>

          <ProfileDetailsCard profile={profile}></ProfileDetailsCard>

          <div><button className=' btn w-full shadow-md'><RiNotificationSnoozeLine /> Snooze 2 Weeks</button></div>
          <div><button className=' btn w-full shadow-md'><GoArchive /> Archive</button></div>
          <div><button className=' btn w-full text-red-400 shadow-md'> <MdOutlineDelete />Delete</button></div>

        </div>
        <div className='col-span-2 flex flex-col justify-between'>
          {/* top */}
          <div className='flex justify-between gap-6'>
            <div className='flex flex-col shadow-sm text-center flex-1 rounded-2xl py-7'>
              <span className='text-[#244d3fFF] font-semibold text-3xl'>{days_since_contact}</span>
              <span className='text-gray-400 text-[18px]'>Days Since Contact</span>
            </div>
            <div className='flex flex-col shadow-sm text-center flex-1 rounded-2xl py-7'>
              <span className='text-[#244d3fFF] font-semibold text-3xl'>{goal}</span>
              <span className='text-gray-400 text-[18px]'>Goal (Days)</span>
            </div>
            <div className='flex flex-col shadow-sm text-center flex-1 rounded-2xl py-7'>
              <span className='text-[#244d3fFF] font-semibold text-3xl'>{next_due_date}</span>
              <span className='text-gray-400 text-[18px]'>Next Due</span>
            </div>
          </div>
          {/* middle */}
          <div className='shadow-sm p-4 rounded-2xl space-y-4 '>
            <div className='flex items-center justify-between '>
              <div><p className='text-[#244d3fFF] text-xl font-medium'>Relationship Goal</p></div>
              <button className='btn text-gray-700'> Edit</button>
            </div>
            <div className='text-[18px]'>
              <span className='text-gray-600'>Connect every</span>  <span className='text-black font-medium'>{goal}Days</span>
            </div>
          </div>
          {/* bottom */}
          <TimeLineTrackerChild profile={profile}></TimeLineTrackerChild>
        </div>
      </div>
    </div>
  );
};

export default page;