import React from "react";
import { DataType } from "@/app/page";

type Props = {
  data: DataType;
  handleFunction: (data: DataType) => void;
};

const Box = ({ data, handleFunction }: Props) => {
  return (
    <div
      className="border-2 border-gray-300 w-full h-12 flex justify-center items-center text-black cursor-pointer"
      onClick={() => handleFunction(data)}
    >
      {data.name}
    </div>
  );
};

export default Box;
