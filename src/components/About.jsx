import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I graduated from 2022 Open Education High School. During my high school education,
        I attended many software courses and tried to experience myself in every field.
        After obtaining my training on frontend technologies, which lasted for about 1 year,
        their 6-month internship experience at Taptoweb technology company has further improved my
        development in the field of mobile application. I have been developing front-end
        technologies such as React Native, React JS, HTML and CSS for 1 year and I have developed
        2 mobile application projects using these technologies. During my projects, I made the
        necessary customizations to optimize the user experience and for this purpose, I expanded
        the boundaries of my designs.

        </p>

        <br />

        <p className="text-xl">
        Currently at Pen Software, Jr. Working as Frontend Developer. Here,
        I take part in various web and mobile application projects using front-end
        technologies in accordance with the possibilities of internal and external
        protection. In my projects, I write user satisfaction-oriented, UI / UX
        design and optimized codes. Caring about teams with teammates in separate,
        different disciplines. I aim to take part in projects that create final solutions
        for development in the field of personal front-end technologies.
        </p>
      </div>
    </div>
  );
};

export default About;