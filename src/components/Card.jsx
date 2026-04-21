'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ friend }) => {
  const { name, days_since_contact, tags, status, picture,id } = friend;
  const router = useRouter()
  const handleRoute = (id)=>{
    router.push(`/profile/${id}`)
  }
  return (
    <div  onClick={()=>{handleRoute(id)}} className="card bg-base-100 shadow-md">
      <figure className="pt-6">
        <Image
          src={picture}
          alt="profile pic"
          width={100}
          height={100}
          className="rounded-full"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-gray-500">{days_since_contact}d ago</p>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-soft badge-accent text-xs text-[#244d3fFF] font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <div className={`badge ${status ==='overdue' ? 'badge-error' : status === 'on-track' ? 'badge-success': 'badge-warning'}`}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default Card;