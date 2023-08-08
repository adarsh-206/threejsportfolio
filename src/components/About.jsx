import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icon.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [icon]);

  const currentService = icon[currentIconIndex];
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-gradient-to-b from-gray-900 to-gray-800 bg-gradient-to-r rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={currentService.import}
            alt={currentService.name}
            className='w-16 h-16 object-contain'
          />
          <p className='text-white text-[16px] text-center'>
            {currentService.name}
          </p>
          <h3 className='text-white text-[18px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>

  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled full-stack developer experienced in crafting responsive web apps with HTML, CSS, Tailwind, JavaScript, and ReactJS.
        Proficient in MERN stack, C/C++, DBMS, MySQL, OOP, RESTful APIs, and algorithms.
        A quick learner, I collaborate closely with clients to build efficient, scalable, and user-friendly solutions for real-world challenges.
        Let's bring your ideas to life together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
