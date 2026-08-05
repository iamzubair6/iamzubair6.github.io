import { motion } from 'framer-motion';
import React from 'react';
import Tilt from 'react-tilt';

import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a frontend software engineer with 4+ years of experience building
        production web applications in React, Next.js, and TypeScript.
        Currently I work remotely for Raju Law (USA), building HRM and CRM
        platforms used daily by ~150 people, and the frontend of OurOpero — a
        project &amp; workflow management SaaS. I've shipped 15+ client
        applications end-to-end, and I care about performance, reusable
        component architecture, and interfaces people enjoy using.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map(({ title, icon }, index) => (
          <ServiceCard key={index} index={index} title={title} icon={icon} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
