'use client'
import React, {  useState } from 'react';
import TimeLineTrackerChild from './TimeLineTrackerChild';
import { connectionContext } from './ContextCom';
const TimeLineTracker = ({ children }) => {
  const [connectionType, setConnectionType] = useState([]);

  return (

    <>
      <connectionContext.Provider value={{connectionType,setConnectionType}}>
        {children}
      </connectionContext.Provider>
    </>
  );
};

export default TimeLineTracker;