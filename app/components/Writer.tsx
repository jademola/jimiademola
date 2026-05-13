import Typewriter from "typewriter-effect";
import React from "react";

const Writer = ({ positions, className }: { positions: Array<string>, className?: string }) => {
  return (
    <div className={className}>

      <Typewriter
      options={
        {
          delay: 50,
          loop: true,
          wrapperClassName: "font-Ovo font-semibold Typewriter__wrapper"
        }
      }
        onInit={(typewriter) => {
          positions.forEach(element => {
            typewriter.typeString(element).pauseFor(2500).start();
            typewriter.deleteAll();
          });
            
        }}
      />
    </div>
  );
};

export default Writer;