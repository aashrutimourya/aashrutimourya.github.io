"use client";

import Bio from "@/components/bio/Bio";
import ResponsiveImage from "@/components/Unit/ResponsiveImage";
import { motion } from "framer-motion";
import ProfilePic from "@/images/dummy.png";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-row justify-center overflow-hidden w-full">
      <div className="flex flex-col mx-auto justify-center items-center">
        <div className="flex md:flex-row flex-col md:gap-20 gap-8 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <ResponsiveImage
              src={ProfilePic.src}
              alt="Aashruti Maurya profile picture"
              className="rounded-full"
              width={400}
              height={400}
              mobile={{ width: 200, height: 200 }}
            />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Bio />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
