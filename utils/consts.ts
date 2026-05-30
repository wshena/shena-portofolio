interface SideNavLinksItem {
  label: string;
  to: string;
}

interface ExperiencesItem {
  date: string;
  position: string;
  at: string;
  desc: string;
}

interface ProjectsItem {
  title: string;
  desc: string;
  link: string;
  img: string;
}

export const sideNavLinks: SideNavLinksItem[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Resume",
    to: "https://www.cake.me/wisnu-shena",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export const experiences: ExperiencesItem[] = [
  {
    date: "Agustus - Desember 2023",
    position: "Web developer intern",
    at: "PT. radnet digital indonesia",
    desc: "Participated in an internship program as a web developer at PT. Radnet Digital Indonesia. Apart from studying the web, I also learned about web hosting itself, experimented with servers, got to know hosting providers, learned Docker, learned automation with Ansible, and also learned Linux as the main operating system in the internship process.",
  },
  {
    date: "Februari - Mei 2023",
    position: "Bangkit acedemy cohort",
    at: "bangkit academy",
    desc: "Become a participant in the independent study internship program at Bangkit Academy 2023. In this program I learned about cloud computing, with the main tool used being the Goggle Cloud Console. In this program, I learned thoroughly about cloud computing, concepts, etc. Then apply the learning results by creating a capstone project regarding tourism in the city of Bandung",
  },
];

export const projects: ProjectsItem[] = [
  {
    title: "Tokonyadia",
    desc: "Tokonyadia is an e-commerce website that takes inspiration from Tokopedia. Like an e-commerce website, this website provides various features such as product search, product filters, etc. This website was developed using Next.js, Tailwind, and Supabase for auth and database.",
    link: "https://tokonyadia-v2.vercel.app/",
    img: "/tokonyadia-v2.vercel.app_.png",
  },
  {
    title: "Spellscribe",
    desc: "Spellscribe is a website that taken inspiration from Moxfield. This website is a deck builder website for the card game Magic: The Gathering. This website was developed using Next.js, Tailwind, and Supabase for auth and database.",
    link: "https://spell-scribe.vercel.app/",
    img: "/spell-scribe.vercel.app_.png",
  },
];
