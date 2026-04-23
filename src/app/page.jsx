
import Trackers from "@/components/Trackers";
import FriendCards from "@/components/FriendCards";
import data from '@/data/data.json'



export default async function Home() {
  

  const friends = data

  return (
    <div className="flex flex-col items-center font-sans text-black">
      <div className="space-y-5 text-center mb-13">

        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
        <p className='text-[#64748bFF] '>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br /> relationships that matter most.</p>
        <button className='btn bg-[#244d3fFF] text-white '>+ Add a Friend</button>
      </div>

      <Trackers friends={friends}></Trackers>
      <div className="divider my-8 w-7/12 mx-auto"></div>

      <div className="text-left w-7/12 mb-8">
        <h1 className="font-semibold text-2xl">Your Friends</h1>
      </div>
      <FriendCards friends={friends}>
      
      </FriendCards>
    </div>
  );
}
