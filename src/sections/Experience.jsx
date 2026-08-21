import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer",
    company: "AD Infocom Systems",
    duration: "2026",
    description:
      "Worked with team to build high-performance apps, integrated AI features, and improved engagement by 10%.",
  },
  {
    role: "Web Developer Intern",
    company: "STP Computer",
    duration: "2025",
    description:
      "In this internship, I gained valuable hands-on experience and exposure to various aspects of web development.",
  },
  {
    role: "ADVANCE EXCEL",
    company: "STP Computer",
    duration: "2024 - 2025",
    description:
      "Successfully worked on data management and reporting using Advanced Excel tools. Handled large datasets, automated daily workflows using complex formulas and Pivot Tables, and created insightful visual dashboards for business reporting.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-4xl font-semibold sm:text-5xl">
          Experience
        </h2>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/20 md:block" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative flex flex-col md:flex-row md:items-center"
                >
                  <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-black bg-white md:block" />

                  <div
                    className={
                      isLeft
                        ? "md:w-1/2 md:pr-12 md:text-right"
                        : "md:ml-auto md:w-1/2 md:pl-12"
                    }
                  >
                    <motion.article className="rounded-2xl border border-white/10 bg-gray-900/80 p-6 shadow-2xl backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="mb-3 text-sm text-gray-400">
                        {exp.company} | {exp.duration}
                      </p>
                      <p className="text-sm leading-7 text-gray-300">
                        {exp.description}
                      </p>
                    </motion.article>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
