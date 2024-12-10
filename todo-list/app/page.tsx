"use client";

import { useState, useEffect } from "react";

type DataType = {
  type: string;
  name: string;
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
    }
    if (dataSelect.type === "Vegetable") {
      setVegetable((prev: DataType[]) => [...prev, dataSelect]);
      const newArr = data.filter((x: DataType) => x.name !== dataSelect.name);
      setData(newArr);
    }
  };

  const handleTypeFruits = (dataSelect: DataType) => {
    setData((prev: DataType[]) => [...prev, dataSelect]);
    const newArr = fruits.filter((x: DataType) => x.name !== dataSelect.name);
    setFruits(newArr);
  };

  const handleTypeVegetable = (dataSelect: DataType) => {
    setData((prev: DataType[]) => [...prev, dataSelect]);
    const newArr = vegetable.filter(
      (x: DataType) => x.name !== dataSelect.name
    );
    setVegetable(newArr);
  };

  return (
    <div className="w-full h-screen bg-white p-4 text-center ">
      <main className="w-1/2 h-full m-auto grid grid-cols-3 gap-4">
        <section className="flex flex-col gap-4">
          {data?.map((d: DataType, index: number) => (
            <div
              key={index}
              className="border-2 border-gray-300 w-full h-12 flex justify-center items-center text-black cursor-pointer"
              onClick={() => handleProduceType(d)}
            >
              {d.name}
            </div>
          ))}
        </section>
        <section className="border-2 border-gray-300 ml-4 flex flex-col gap-4">
          <div className="w-full h-12 bg-gray-300 text-black font-bold flex justify-center items-center cursor-pointer">
            Fruit
          </div>
          {fruits?.map((d: DataType, index: number) => (
            <div
              key={index}
              className="border-2 border-gray-300 w-full h-12 flex justify-center items-center text-black cursor-pointer"
              onClick={() => handleTypeFruits(d)}
            >
              {d.name}
            </div>
          ))}
        </section>
        <section className="border-2 border-gray-300 flex flex-col gap-4">
          <div className="w-full h-12 bg-gray-300 text-black font-bold flex justify-center items-center cursor-pointer">
            Vegetable
          </div>
          {vegetable?.map((d: DataType, index: number) => (
            <div
              key={index}
              className="border-2 border-gray-300 w-full h-12 flex justify-center items-center text-black cursor-pointer"
              onClick={() => handleTypeVegetable(d)}
            >
              {d.name}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
