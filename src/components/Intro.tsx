import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useKBar } from "kbar";
import { FiGithub, FiMail } from "react-icons/fi";
import { RiLightbulbLine } from "react-icons/ri";
import * as anims from "../animations/index";
import Wavy from "../animations/Wavy";

const Links: FC = () => {
  return (
    <motion.div className="flex mt-10">
      {[
        {
          icon: FiGithub,
          href: "https://github.com/dev"
        },
        {
          icon: FiMail,
          href: "mailto:dev.hi@gmail.com"
        }
      ].map((link, index) => (
        <Link href={link.href} key={index} passHref>
          <motion.a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="mr-5 text-gray-600 dark:text-gray-400"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            variants={anims.Fade}
            aria-label={link.icon.toString()}
          >
            <link.icon
              size={22}
              className="dark:hover:text-white hover:text-black"
            />
          </motion.a>
        </Link>
      ))}
    </motion.div>
  );
};

const Intro: FC = () => {
  const { query } = useKBar();
  return (
    <motion.div
      className="flex items-start p-2 mmt-20"
      variants={anims.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={anims.FadeContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="h-16 pt-2 text-5xl name w-fit"
          variants={anims.Fade}
        >
          human being
        </motion.h1>

        <Wavy
          text="Developer"
          heading="p"
          className="mb-10 text-xl text-gray-900 mt-11 md:mt-3 dark:text-white"
        />

        <motion.p
          className="mr-20 text-xl text-gray-600 dark:text-gray-400"
          variants={anims.Fade}
        >
          cool developer makes cool stuff and blah blah crap
        </motion.p>

        <motion.p
          className="items-center hidden mt-10 mr-20 text-xl text-gray-600 dark:text-gray-400 sm:flex"
          variants={anims.Fade}
        >
          <span
            onClick={query.toggle}
            className="transition-all duration-300 cursor-pointer hover:text-amber-500 hover:scale-110"
          >
            <RiLightbulbLine size={21} />
          </span>
          &nbsp; Tip: Use
          <button
            onClick={query.toggle}
            style={{ opacity: 1 }}
            className="mx-2 inline bg-white focus:outline-none dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white text-sm leading-5 py-0.5 px-1.5 border border-gray-500 rounded-md"
          >
            <kbd className="font-sans no-underline">⌘</kbd>{" "}
            <kbd className="font-sans">K</kbd>
          </button>{" "}
          to quickly navigate the site.
        </motion.p>

        <Links />
      </motion.div>

      <motion.div variants={anims.Pfp} className="hidden sm:block">
        <Image
          src="https://avatars.githubusercontent.com/u/95541290?v=4"
          alt="pfp"
          width={150}
          height={150}
          className="rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
