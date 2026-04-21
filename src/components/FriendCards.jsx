
import React from 'react';
import Card from '@/components/Card'
const FriendCards = ({friends=[]}) => {

  console.log(friends);
  return (
    <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-7/12 mb-20">
      {
        friends.map((friend,index) => (
          <Card key={index} friend={friend}></Card>
        ))
      }
    </div>
  );
};

export default FriendCards;