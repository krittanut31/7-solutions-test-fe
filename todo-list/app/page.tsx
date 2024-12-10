"use client";

import { useState } from "react";
import Box from "@/components/Box";

export type DataType = {
  type: string;
  name: string;
  countDownFn?: () => void;
};

export default function Home() {
  const [fruits, setFruits] = useState<DataType[]>([]);
  const [vegetable, setVegetable] = useState<DataType[]>([]);

  const [data, setData] = useState<DataType[]>([
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ]);

  const handleProduceType = (dataSelect: DataType) => {
    if (dataSelect.type === "Fruit") {
      setFruits((prev: DataType[]) => [...prev, dataSelect]);
      const newArr = data.filter((x: DataType) => x.name !== dataSelect.name);
      setData(newArr);
      setTimeout(handleTypeFruits, 2000, dataSelect);
    }
    if (dataSelect.type === "Vegetable") {
      setVegetable((prev: DataType[]) => [...prev, dataSelect]);
      const newArr = data.filter((x: DataType) => x.name !== dataSelect.name);
      setData(newArr);
      setTimeout(handleTypeVegetable, 2000, dataSelect);
    }
  };

  const handleTypeFruits = (dataSelect: DataType) => {
    const newArr = fruits.filter((x: DataType) => x.name !== dataSelect.name);
    setFruits(newArr);
    setData((prev: DataType[]) => [...prev, dataSelect]);
  };

  const handleTypeVegetable = (dataSelect: DataType) => {
    const newArr = vegetable.filter(
      (x: DataType) => x.name !== dataSelect.name
    );
    setVegetable(newArr);
    setData((prev: DataType[]) => [...prev, dataSelect]);
  };

  return (
    <div className="w-full h-screen bg-white p-4 text-center ">
      <main className="w-3/4 2xl:w-1/2 h-full m-auto grid grid-cols-3 gap-4">
        <section className="flex flex-col gap-4">
          {data?.map((d: DataType, index: number) => (
            <Box data={d} handleFunction={handleProduceType} key={index} />
          ))}
        </section>
        <section className="border-2 border-gray-300 ml-4 flex flex-col gap-4">
          <div className="w-full h-12 bg-gray-300 text-black font-bold flex justify-center items-center cursor-pointer">
            Fruit
          </div>
          {fruits?.map((d: DataType, index: number) => (
            <Box key={index} data={d} handleFunction={handleTypeFruits} />
          ))}
        </section>
        <section className="border-2 border-gray-300 flex flex-col gap-4">
          <div className="w-full h-12 bg-gray-300 text-black font-bold flex justify-center items-center cursor-pointer">
            Vegetable
          </div>
          {vegetable?.map((d: DataType, index: number) => (
            <Box key={index} handleFunction={handleTypeVegetable} data={d} />
          ))}
        </section>
      </main>
    </div>
  );
}
