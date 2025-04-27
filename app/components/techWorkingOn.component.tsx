import { TechWorkingOnModel } from "~/models/techWorkingOn.model";

export const TechWorkingOn = ({
  technologies,
}: {
  technologies: TechWorkingOnModel[];
}) => {
  return (
    <div className="w-full">
      <div className="px-6">
        <section className="py-12 ">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Technologies I am working on
            </h2>
            <div className="h-1 bg-green-300 mx-auto w-24 mb-8"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies?.map((tech: TechWorkingOnModel, index: number) => (
              <div
                key={index}
                className="flex items-center justify-center mb-4"
              >
                <a
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-x-2 p-2 bg-white rounded-full shadow hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <img
                    src={tech.icon}
                    alt={tech.tech + " " + "M. H. Nahib (Software Engineer)"}
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
