// import { motion } from "framer-motion";
import { FaReact, FaUnity, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiR,
  SiGit,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaJava, FaLinux } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

const SkillIcon = ({
  Icon,
  name,
  invert,
}: {
  Icon: IconType;
  name: string;
  invert?: boolean;
}) => (
  <div className="flex flex-col items-center gap-4">
    <Icon className={`h-10 w-10 ${invert ? "" : "text-primary"}`} />
    <span className="text-sm font-medium text-center">{name}</span>
  </div>
);

export const Skills = () => {
  const skills = [
    { Icon: FaReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: BiLogoTypescript, name: "TypeScript" },
    { Icon: SiAdobephotoshop, name: "Adobe Photoshop" },
    { Icon: SiR, name: "R" },
    { Icon: FaPython, name: "Python" },
    { Icon: FaUnity, name: "Unity 6" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: FaJava, name: "Java" },
    { Icon: FaLinux, name: "Linux", invert: true },
    { Icon: SiGit, name: "Git" },
  ];

  return (
    <div className="py-12 md:py-24 lg:py-32 " id="stack">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center justify-center gap-4 space-y-6">
          <h2 className="text-xl line-clamp-1 md:text-2xl font-semibold font-Ovo leading-loose">
            Tech Stack
          </h2>

          <div className="grid w-2/3  grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </div>
          <p className="text-sm md:text-base font-medium  text-center font-Ovo pt-8">
            ...and more! Plus I&apos;m always adding to my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;