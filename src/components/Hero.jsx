import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen flex justify-center items-center`}
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#fe6428]">Adarsh Dhote</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I transform UI designs into <br className="sm:block hidden" />
            captivating web & mobile applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
