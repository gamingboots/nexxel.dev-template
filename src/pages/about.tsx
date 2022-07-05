import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import * as anims from "../animations/index";
import Header from "../components/Header";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shoubhit Dash | About</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Shoubhit Dash | About" />
        <meta
          name="description"
          content="Shoubhit Dash aka nexxel's personal website"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexxel.dev/" />
        <meta property="og:title" content="Shoubhit Dash | About" />
        <meta
          property="og:description"
          content="Shoubhit Dash aka nexxel's personal website"
        />
        <meta property="og:image" content="/nexxel.jpg" />
      </Head>
      <Wrapper>
        <motion.div
          className="flex flex-col items-start justify-start"
          variants={anims.FadeContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="pb-4">
            <Header head="About Me" />
          </div>
          <Text>
            <motion.div
              variants={anims.FadeContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={anims.Fade}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and 
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting</motion.p>
            </motion.div>
          </Text>
          <div className="py-6" />
          <div className="pb-6">
            <Header head="About this website" />
          </div>
          <Text>
            <motion.div
              className="pt-4"
              variants={anims.FadeContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={anims.Fade}>
                In case you&apos;re wondering:
                <ul>
                  <li>
                    Heavily inspired by{" "}
                    <a
                      href="https://leerob.io"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Lee Robinson&apos;s website
                    </a>
                  </li>
                  <li>
                    Built with{" "}
                    <a
                      href="https://nextjs.org"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Next.js
                    </a>
                    ,{" "}
                    <a
                      href="https://framer.com/motion"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Framer Motion
                    </a>{" "}
                    ,{" "}
                    <a
                      href="https://tailwindcss.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      TailwindCSS
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://firebase.google.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Firebase
                    </a>
                  </li>

                  <li>
                    Everything is in{" "}
                    <a
                      href="https://typescriptlang.org"
                      rel="noreferrer"
                      target="_blank"
                    >
                      TypeScript
                    </a>
                  </li>

                  <li>
                    Deployed on{" "}
                    <a
                      href="https://vercel.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Vercel
                    </a>
                  </li>

                  <li>
                    Open source on{" "}
                    <a
                      href="https://github.com/nexxeln/nexxel.dev"
                      rel="noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </Text>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default about;
