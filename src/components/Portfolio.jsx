import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoUrl: "http://example.com/demo1", // Replace with actual URL
      codeUrl: "http://github.com/user/project1", // Replace with actual URL
    },
    {
      id: 2,
      src: reactParallax,
      demoUrl: "http://example.com/demo1", // Replace with actual URL
      codeUrl: "http://github.com/user/project1", // Replace with actual URL
    },
    {
      id: 3,
      src: navbar,
      demoUrl: "http://example.com/demo1", // Replace with actual URL
      codeUrl: "http://github.com/user/project1", // Replace with actual URL
    },
    {
      id: 4,
      src: reactSmooth,
      demoUrl: "http://example.com/demo1", // Replace with actual URL
      codeUrl: "http://github.com/user/project1", // Replace with actual URL
    },
    {
      id: 5,
      src: installNode,
      demoUrl: "http://example.com/demo1", // Replace with actual URL
      codeUrl: "http://github.com/user/project1", // Replace with actual URL
    },
    {
      id: 6,
      src: reactWeather,
      demoUrl: "http://example.com/demo1", // Replace with actual URL
      codeUrl: "http://github.com/user/project1", // Replace with actual URL
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black 
     to-gray-800 w-full text-white md:h-screen pb-8"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full h-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my personal projects here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
             px-12 sm:px-0 "
        >
          {portfolios.map(({ id, src, demoUrl, codeUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center my-3">
                <a
                  href={codeUrl}
                  className="inline-flex items-center justify-center rounded-lg
                                 bg-gray-700 text-white py-2 px-4
                                 hover:bg-gray-800 transition duration-200 hover:scale-110 "
                >
                  <i className="fab fa-github my-1"></i>
                </a>
                <a
                  href={demoUrl}
                  className="ml-4 inline-flex items-center justify-center 
                                rounded-lg bg-gray-700 text-white py-2 px-4 
                                 hover:bg-gray-800 transition duration-200 hover:scale-110"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
