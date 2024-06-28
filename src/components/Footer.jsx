// import React from 'react';
// import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
// import { Link } from 'react-scroll';

// const Footer = () => {
//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "portfolio",
//     },
//     {
//       id: 4,
//       link: "skills",
//     },
//     {
//       id: 5,
//       link: "contact",
//     },
//   ];

//   return (
//     <footer className="bg-gray-900 p-8">
//       <div className="container mx-auto">
//         <div className="flex justify-center items-center mb-7">
//           <ul className="flex space-x-4">
//             {links.map(({ id, link }) => (
//               <li
//                 key={id}
//                 className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
//               >
//                 <Link to={link} smooth duration={500}>
//                  {link}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex justify-center space-x-4 text-gray-500 my-4">
//           {/* Updated anchor tags with Tailwind CSS hover classes */}
//           <a href="https://www.linkedin.com/in/kashishkoli/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transform hover:scale-105 duration-200">
//             <FaLinkedinIn />
//           </a>
//           <a href="https://github.com/kashishkoli" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transform hover:scale-105 duration-200">
//             <FaGithub />
//           </a>
//           <a href="https://www.instagram.com/dumping_wordswiththoughts/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transform hover:scale-105 duration-200">
//             <FaInstagram />
//           </a>
//         </div>
//         <div className="flex text-gray-500 justify-center">
//           <p>&copy; 2024 Kashish Koli. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <footer className="bg-gray-900 p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center mb-7">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-x-4">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center space-x-4 text-gray-500 my-4">
          <a href="https://www.linkedin.com/in/kashishkoli/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transform hover:scale-105 duration-200">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/kashishkoli" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transform hover:scale-105 duration-200">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/dumping_wordswiththoughts/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transform hover:scale-105 duration-200">
            <FaInstagram />
          </a>
        </div>
        <div className="flex text-gray-500 justify-center">
          <p>&copy; 2024 Kashish Koli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
