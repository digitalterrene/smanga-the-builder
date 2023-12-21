import React from "react";

export default function AboutPage() {
  return (
    <div className=" px-4 lg:px-40 py-96 lg:py-40">
      <div className="lg:flex gap-20">
        <div className="hidden lg:block">
          <img src="https://img.freepik.com/free-photo/old-brick-wall-urban-streets_23-2148742515.jpg?w=360&t=st=1703182628~exp=1703183228~hmac=1f7b5d12b61ed1cec03c873022c7a35410833019a06e353bee8050480400758f" />
        </div>
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4">
            <div className="h-20 w-3 bg-black"> </div>
            <p className="text-6xl font-bold text-yellow-500">15</p>
            <p className="text-3xl  ">Years of experience</p>
          </div>
          <div className="p-8 text-sm space-y-4">
            <p className="text-3xl  font-bold">
              Providing the best quality service
            </p>
            <p>
              My commitment to excellence is the cornerstone of every service I
              provide. I take great pride in offering the best quality service
              across all aspects of construction. Whether it's building,
              drywalling, ceilings, or tiling, I approach each task with
              precision and an unwavering dedication to superior craftsmanship.
            </p>
            <p>
              My goal is not just to meet but to exceed your expectations,
              ensuring that every project reflects the hallmark of quality that
              defines my commitment to you.Quality is the essence of my work. As
              your construction partner, I understand the paramount importance
              of providing you with the best quality service
            </p>
            <p>
              I employ the latest techniques, top-notch materials, and a skilled
              team to ensure that every project reflects my pursuit of
              excellence. Choose me for a construction experience that sets the
              standard for quality and leaves a lasting impression of superior
              service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
