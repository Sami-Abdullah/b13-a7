import Image from 'next/image';
import React from 'react';
import call from '../../public/assets/call.png'
import video from '../../public/assets/video.png'
import text from '../../public/assets/text.png'
const TimeLineList = ({ t }) => {

  const { name, type, date } = t

  const cardMap = {
    call: <div className="p-4 bg-gray-300  rounded-2xl shadow-sm flex items-center gap-4">

      <Image src={call} alt={"call"}></Image> <div><p>Call with {name} </p> <p>{date}</p></div>

    </div>,
    video: <div className="p-4 bg-gray-300  rounded-2xl shadow-sm flex items-center gap-4">

      <Image src={video} alt={"video"}></Image> <div><p>Video with {name} </p> <p>{date}</p></div>

    </div>,
    text: <div className="p-4 bg-gray-300  rounded-2xl shadow-sm flex items-center gap-4">

      <Image src={text} alt={"text"}></Image> <div><p>Text with {name} </p> <p>{date}</p></div>

    </div>,
  };

  return (
    <>
      {cardMap[type] }
    </>
  );
};

export default TimeLineList;