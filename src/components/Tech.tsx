// @ts-nocheck
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center justify-center bg-tertiary rounded-full border-2 border-white-100' key={technology.name}>
          <div className="w-20 h-20 flex items-center justify-center text-white font-bold">
            {technology.name.slice(0, 3).toUpperCase()}
          </div>
          <p className="text-[12px] text-secondary">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
