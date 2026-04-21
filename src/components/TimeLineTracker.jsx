'use client'
import React, {  useState } from 'react';
import TimeLineTrackerChild from './TimeLineTrackerChild';
import { connectionContext } from './ContextCom';
const TimeLineTracker = ({ profileid }) => {
  const [connectionType, setConnectionType] = useState([]);

  return (

    <>
      <connectionContext.Provider value={{connectionType,setConnectionType,profileid}}>

        <TimeLineTrackerChild >

        </TimeLineTrackerChild>
      </connectionContext.Provider>
    </>
  );
};

export default TimeLineTracker;