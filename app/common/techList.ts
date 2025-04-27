export const technologyList = [
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
  {
    tech: "bootstrap",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg",
    link: "https://getbootstrap.com/",
  },
  {
    tech: "EJS",
    icon: "https://static-00.iconduck.com/assets.00/file-type-ejs-icon-2048x1151-hdkbavbz.png",
    link: "https://ejs.co/",
  },
  {
    tech: "telegram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png",
    link: "https://telegram.org/",
  },
];

export const getReleventTech = (tech: string) => {
  const techObj = technologyList.find(
    (item) =>
      item.tech === tech ||
      item.tech.toLowerCase() === tech.toLowerCase() ||
      item.tech.toLowerCase().includes(tech.toLowerCase())
  );
  return techObj
    ? techObj
    : {
        tech: "",
        icon: "",
        link: "",
      };
};
