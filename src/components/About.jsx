import React from "react";

const About = () => {
  const educationDetails = [
    { title: "10th Class", description: "J. E. School & Jr College, 2015" },
    { title: "12th Class", description: "J. E. School & Jr College, 2017" },
    {
      title: "UG",
      description:
        "Bachelor of Engineering ( Electronics and Telecommunication Engineering ), Mumbai University, 2022",
    },
  ];

  const trainingDetails = [
    {
      title: "Full Stack Web Developer Trainee",
      title1: "[ at AccioJob - 2023 Present ]",
      description:
        " Completed over 900+ hours of training in frontend development, with a focus on HTML, CSS, and JavaScript.\n" +
        " Achieved proficiency in React.js and Redux, which improved my project delivery speed by 30%\n" +
        " Utilized tools like Bootstrap and Webpack to streamline development. This reduced build times by 40% and facilitated the creation of mobile-responsive interfaces.",
    },
    // Add more training details here if needed
  ];

  const renderDetails = (details) =>
    details.map((detail, index) => (
      <li
        key={index}
        className="transition-transform duration-200 hover:scale-105 mb-5 text-gray-500"
      >
        <span className="font-semibold block mb-1 text-lg md:text-xl">
          {detail.title}
        </span>
        <p className="text-xs sm:text-sm md:text-base">{detail.description}</p>
      </li>
    ));

  return (
    <div
      name="about"
      className="w-full pt-12 sm:pt-0 min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex flex-wrap">
          {/* Education Section */}
          <div className="w-full md:w-1/2 p-4 ">
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <ul className="list-disc pl-4 sm:pl-5 md:pl-6 lg:pl-7">
                {renderDetails(educationDetails)}
              </ul>
            </div>
          </div>
          {/* Training Section */}
          <div className="w-full md:w-1/2 p-4">
            {trainingDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-2xl"
              >
                {/* Added aria-label for accessibility */}
                <h2 className="text-2xl font-semibold mb-4">Training</h2>
                <h3
                  className="text-xl text-gray-500 font-semibold mb-2 transition-transform duration-200 hover:scale-105"
                  aria-label={`Title: ${detail.title}`}
                >
                  {detail.title}
                </h3>
                <h4
                  className="text-xl text-gray-500  mb-1"
                  aria-label={`Duration: ${detail.title1}`}
                >
                  {detail.title1}
                </h4>
                <ul className="list-disc pl-4 sm:pl-5 md:pl-6 lg:pl-7">
                  {detail.description.split("\n").map((point, idx) => (
                    <li className="mb-1 text-gray-500" key={idx}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
