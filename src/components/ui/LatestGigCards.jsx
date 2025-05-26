import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "./badge";

const LatestGigCards = ({ gig }) => {
  const navigate = useNavigate();
  return (
    <div
      className="p-5 rounded-lg shadow-xl bg-white border border-gray-100 cursor-pointer"
      onClick={() => navigate(`/description/${gig._id}`)}
    >
      <div>
         <img
                src={gig.image}
                alt={gig.category}
                className="w-full h-48 object-cover rounded-t-xl"
              />
        <h1 className="font-medium text-lg">{gig?.title}</h1>
        <p className="text-lg text-muted-foreground">{gig?.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{gig?.category}</h1>
        <p className="text-medium text-gray-600">{gig?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge className="text-[#6A38C2] font-bold" variant="ghost">
          {gig?.category}
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {gig?.budget}
        </Badge>
      </div>
    </div>
  );
};

export default LatestGigCards;
