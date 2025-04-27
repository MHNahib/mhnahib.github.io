import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header.component";
import { Hero } from "~/components/hero.component";
import { Timeline } from "~/components/timeline.component";
import { TimelineItemModel } from "~/models/timeline.model";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const timelineItems: TimelineItemModel[] = [
    {
      date: "Present",
      isRunning: true,
      title: "Software Engineer",
      institution: "ImpleVista",
      image: "assets/img/job/implevista.jpg",
      description:
        "Currently building scalable and efficient web applications using modern technologies such as Microsoft Azure, React.js, MERN Stack, PostgreSQL, MongoDB, Next.js, Docker, MySQL, Node.js, Express.js, Firebase, Angular, Tailwind, Angular Material, BullMQ, AWS SQS, and SAP at ImpleVista.",
    },
    {
      date: "2024",
      title: "Master of Science in Computer Science and Engineering (CSE)",
      institution: "Jahangirnagar University",
      description:
        "Successfully completed an MSc (PMSC) in CSE with a CGPA of 3.50, focusing on advanced computing concepts and research at Jahangirnagar University.",
      image: "assets/img/education/ju.png",
    },
    {
      date: "Nov 2022",
      title: "Junior Software Engineer",
      institution: "ImpleVista",
      image: "assets/img/job/implevista.jpg",
      description:
        "Contributed to the development of full-stack web solutions using technologies like SQL, React.js, MongoDB, Next.js, MySQL, Node.js, and Docker at ImpleVista.",
    },
    {
      date: "Sep 2022",
      endDate: "Nov 2022",
      title: "Junior Software Engineer (Probationary)",
      institution: "ImpleVista",
      image: "assets/img/job/implevista.jpg",
      description:
        "Gained hands-on experience by building projects and prototypes with React.js, MongoDB, Next.js, and Node.js during the probationary period at ImpleVista.",
    },
    {
      date: "2022",
      title: "Bachelor of Science in Computer Science and Engineering (CSE)",
      institution: "Daffodil International University",
      description:
        "Graduated with a B.Sc in CSE, achieving a CGPA of 3.75, and specializing in software development and system design at Daffodil International University.",
      image: "assets/img/education/diu.png",
    },
    {
      date: "2017",
      title: "Higher Secondary Certificate (HSC) - Science",
      institution: "Govt. Debendra College",
      description:
        "Completed Higher Secondary Education in the Science stream with a GPA of 4.42 at Govt. Debendra College under the Dhaka Board.",
      image: "assets/img/education/gdc.png",
    },
    {
      date: "2015",
      title: "Secondary School Certificate (SSC) - Science",
      institution: "Manikganj Govt. High School (Dhaka Board)",
      description:
        "Achieved a GPA of 4.94 in the Secondary School Certificate examination, with a strong foundation in science subjects at Manikganj Govt. High School under the Dhaka Board.",
      image: "assets/img/education/mghs.png",
    },
  ];
  return (
    <div className="h-full w-full">
      <Header />
      <Hero />
      <div className="flex flex-col items-center justify-center w-full h-auto p-4">
        <h4 className="text-4xl font-bold text-gray-800 mb-4">Life Timeline</h4>
        <div className=" p-4 items-center flex justify-center">
          <div className="w-full max-w-4xl">
            <Timeline timelineItems={timelineItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
