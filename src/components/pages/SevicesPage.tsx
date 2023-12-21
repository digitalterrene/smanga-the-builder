import { services } from "@/assets/data/data";
import React from "react";

export default function SevicesPage() {
  return (
    <div className="px-4 lg:px-40  lg:py-40">
      <div className="space-y-10">
        <p className="lg:text-5xl text-2xl font-bold">
          Awesome Services in Meaningful Way
        </p>
        <div className="lg:grid  grid-cols-3 gap-10">
          {services?.map(({ name, desc, icon }, i) => (
            <div key={i} className="hover:bg-gray-50 p-3 space-y-4">
              <div>
                <img className="w-16 p-2 bg-gray-200/30" src={icon} />
              </div>
              <p className="text-xl font-bold">{name}</p>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
