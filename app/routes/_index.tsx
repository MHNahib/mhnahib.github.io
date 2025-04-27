import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header.component";
import { Hero } from "~/components/hero.component";
import { TechWorkingOn } from "~/components/techWorkingOn.component";
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

  const technologyIcons = [
    {
      tech: "Angular",
      icon: "https://angular.io/assets/images/logos/angular/angular.svg",
      link: "https://angular.io",
    },
    {
      tech: "Arduino",
      icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
      link: "https://www.arduino.cc/",
    },
    {
      tech: "C",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      link: "https://www.cprogramming.com/",
    },
    {
      tech: "C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      link: "https://www.w3schools.com/cpp/",
    },
    {
      tech: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      link: "https://www.w3schools.com/css/",
    },
    {
      tech: "Django",
      icon: "https://cdn.worldvectorlogo.com/logos/django.svg",
      link: "https://www.djangoproject.com/",
    },
    {
      tech: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      link: "https://www.docker.com/",
    },
    {
      tech: "Express.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      link: "https://expressjs.com",
    },
    {
      tech: "Google Cloud",
      icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      link: "https://cloud.google.com",
    },
    {
      tech: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      link: "https://git-scm.com/",
    },
    {
      tech: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      link: "https://www.w3.org/html/",
    },
    {
      tech: "Ionic",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
      link: "https://ionicframework.com",
    },
    {
      tech: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      link: "https://www.java.com",
    },
    {
      tech: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      tech: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      link: "https://www.mongodb.com/",
    },
    {
      tech: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      link: "https://www.mysql.com/",
    },
    {
      tech: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      link: "https://nodejs.org",
    },
    {
      tech: "Puppeteer",
      icon: "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
      link: "https://github.com/puppeteer/puppeteer",
    },
    {
      tech: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      link: "https://www.python.org",
    },
    {
      tech: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      link: "https://reactjs.org/",
    },
    {
      tech: "Redis",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
      link: "https://redis.io",
    },
    {
      tech: "SQLite",
      icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      link: "https://www.sqlite.org/",
    },
    {
      tech: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      link: "https://tailwindcss.com/",
    },
    {
      tech: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      link: "https://www.typescriptlang.org/",
    },
  ];

  return (
    <div className="h-full w-full">
      <Header />
      <Hero />
      <TechWorkingOn technologies={technologyIcons} />
      <div className="flex flex-col items-center justify-center w-full h-auto p-4">
        <h4 className="text-4xl font-bold text-gray-800 mb-4">Life Events</h4>
        <div className="h-1 bg-green-300 mx-auto w-24 mb-8"></div>
        <div className=" p-4 items-center flex justify-center">
          <div className="w-full max-w-4xl">
            <Timeline timelineItems={timelineItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
