import {
  SiBehance,
  SiDribbble,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
} from "react-icons/si";

import imgOne from "../../public/images/paisaje-1.jpg";
import imgTwo from "../../public/images/paisaje-3.jpg";

import { motion } from "framer-motion";

function Main() {
  return (
    <main className="container mx-auto pt-5 px-6">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-gray-500 text-lg mb-2"
      >
        Portfolio
      </motion.h3>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-pink-500 font-medium text-2xl mb-2"
      >
        Will Turner
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-gray-500 text-lg mb-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maxime
        fugiat dolores voluptatem dolor adipisci earum quia non! Omnis est quis
        rerum fugiat, illum impedit itaque illo optio dolores nemo magni, sint
        sit.
      </motion.p>
      <div className="mb-5">
        <motion.h5
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-gray-500 text-lg mb-4"
        >
          Find me one
        </motion.h5>
        <ul className="flex gap-10 text-3xl">
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a href="#" className="text-blue-600 hover:text-blue-600/50 ">
              <SiBehance />
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a href="#" className="text-pink-500 hover:text-pink-500/50">
              <SiDribbble />
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a href="#" className="text-orange-700 hover:text-orange-700/50">
              <SiInstagram />
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a href="#" className="text-blue-300 hover:text-blue-300/50">
              <SiTwitter />
            </a>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a href="#" className="text-blue-800 hover:text-blue-800/50">
              <SiLinkedin />
            </a>
          </motion.li>
        </ul>
      </div>
      <div className="flex items-center gap-4 px-3 mb-4">
        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          type="button"
          className="bg-pink-500 text-white py-2 px-8 rounded-full text-lg hover:bg-pink-500/50"
        >
          Here me
        </motion.button>
        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          type="button"
          className="text-pink-500 py-2 px-8 rounded-full border border-pink-500 text-lg"
        >
          Portfolio
        </motion.button>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex gap-6 px-2 w-32"
      >
        <img
          src={imgOne}
          alt="paisaje londres"
          className="rounded-xl grayscale"
        />
        <img
          src={imgTwo}
          alt="paisaje paris"
          className="rounded-xl grayscale"
        />
      </motion.div>
      <span className="absolute w-32 h-32 bg-pink-500 rounded-full bottom-0 -right-24 shadow-black shadow-2xl"></span>
    </main>
  );
}

export default Main;
