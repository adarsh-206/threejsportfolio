import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

const Feedbacks = () => {
  return (
    <>
      <div className={`mt-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-[20px]`}>
        <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What I have done</p>
            <h2 className={styles.sectionHeadText}>Education Details</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
          <div className="table-container">
            <table className={`w-full border-collapse text-center`}>
              <colgroup>
                <col style={{ width: '33%' }} />
                <col style={{ width: '33%' }} />
                <col style={{ width: '33%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th className={`p-3 border-b`}>Degree</th>
                  <th className={`p-3 border-b`}>Institution</th>
                  <th className={`p-3 border-b`}>Year</th>
                </tr>
              </thead>
              <tbody>
                {education.map((detail, index) => (
                  <tr key={index}>
                    <td className={`p-3 border-b`}>{detail.degree}</td>
                    <td className={`p-3 border-b`}>{detail.institution}</td>
                    <td className={`p-3 border-b`}>{detail.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>

  );
};

export default SectionWrapper(Feedbacks, "education");
