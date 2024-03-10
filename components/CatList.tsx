import { isEmpty } from "lodash";
import React from "react";
import CatCard from "./CatCard";

interface CatListProps {
  data: Record<string, any>[];
  title: string;
  desc: string | "";
}

const CatList: React.FC<CatListProps> = ({ data, title, desc }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="">
        <p className="mt-10 mb-4 text-white text-md md:text-xl lg:text-2xl font-semibold">
          {title}
        </p>
        <p className="mb-4 mt-2 text-gray-400 text-sm md:text-sm lg:text-md font-semibold md:w-[80%] lg:w-[50%] ">
          {desc}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <CatCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatList;
