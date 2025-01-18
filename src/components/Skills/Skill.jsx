import { skills } from "./skil"; // Ensure your updated `skills` array is imported

const Skills = () => (
  <nav
    className="flex flex-col justify-center relative z-[1] items-center"
    id="skills"
  >
    <div className="relative flex justify-between items-center flex-col w-full max-w-6xl gap-3">
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold tracking-tight text-textPrimary sm:text-5xl">
        Skills
      </h1>

      {/* Description */}
      <p className="text-lg mt-4 text-center text-textSecondary dark:text-gray-400 max-w-[600px] lg:text-base">
        Here are some of my skills on which I have been working for the past{" "}
        {new Date().getFullYear() - 2021} years.
      </p>

      {/* Skills Cards */}
      <div className="flex flex-wrap justify-center w-full mt-7 gap-7">
        {skills.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[500px] bg-cardBackground dark:bg-darkCardBackground border border-primary shadow-lg rounded-xl p-8 m-8 lg:max-w-[400px] sm:max-w-[330px]"
          >
            {/* Card Title */}
            <h2 className="text-2xl font-semibold text-center text-textPrimary dark:text-gray-200 mb-5">
              {item.title}
            </h2>

            {/* Skills Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {item.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-2 text-base font-medium text-textSecondary dark:text-gray-300 border border-borderGray dark:border-darkBorderGray rounded-lg px-4 py-2 lg:text-sm lg:px-3 lg:py-1 sm:text-xs sm:px-2 sm:py-1"
                >
                  <img src={skill.image} alt={skill.name} className="w-6 h-6" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </nav>
);

export default Skills;