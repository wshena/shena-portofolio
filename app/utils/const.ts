interface SideNavLinksItem {
  label: string;
  to: string;
}

interface ExperiencesItem {
  date: string,
  position: string,
  at: string,
  desc: string
}

interface ProjectsItem {
  title: string,
  desc: string,
  link: string,
  img: string
}

export const sideNavLinks: SideNavLinksItem[] = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Projects',
    to: '/projects'
  },
  {
    label: 'Resume',
    to: 'https://www.cake.me/wisnu-shena'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
]

export const experiences: ExperiencesItem[] = [
  {
    date: 'Agustus - Desember 2023',
    position: 'Web developer intern',
    at: 'PT. radnet digital indonesia',
    desc: 'Participated in an internship program as a web developer at PT. Radnet Digital Indonesia. Apart from studying the web, I also learned about web hosting itself, experimented with servers, got to know hosting providers, learned Docker, learned automation with Ansible, and also learned Linux as the main operating system in the internship process.'
  },
  {
    date: 'Februari - Mei 2023',
    position: 'Bangkit acedemy cohort',
    at: 'bangkit academy',
    desc: 'Become a participant in the independent study internship program at Bangkit Academy 2023. In this program I learned about cloud computing, with the main tool used being the Goggle Cloud Console. In this program, I learned thoroughly about cloud computing, concepts, etc. Then apply the learning results by creating a capstone project regarding tourism in the city of Bandung'
  },
]

export const projects: ProjectsItem[] = [
  {
    title: 'AskNova',
    desc: 'AskNova is a project that implements AI in it. This project is a cloning project for AI websites such as chatgpt, gemini, and deepseek. The API used is taken from the google gemini API. Using Next.js for the frontend and backend, and shadcn for styling.',
    link: 'https://ask-nova-iota.vercel.app/',
    img: '/askNova.png'
  },
  {
    title: 'Anime Paradise',
    desc: 'Taking inspiration from crunchyroll and myanimelist. The anime paradise website is a website that displays information related to anime and anime. This website was created using NextJS framework and Supabase. This website uses dynamic data retrieved using Axios via the API provided by Jikan API. This website provides information regarding anime, anime recommendations, and specific detailed information about anime. This website is responsive so it can be used by devices of different widths',
    link: 'https://anime-paradise.vercel.app/',
    img: '/anime-paradise.png'
  },
  {
    title: 'Mangaice',
    desc: 'Mangaice is a website where anybody can read their favourite manga, manhwa, or manhua for free. In this website, user can search spesific manga, add to their library, configure website setting for personal taste, and more. This website is create using Next.js, Tailwind CSS, and Axios. Data being provided in this website are taken from Mangadex api. This website is take inspiration from Mangadex, so you can expect a lot of feature like Mangadex',
    link: 'https://mangaice-context-api.vercel.app/',
    img: '/mangaice-home-page.png'
  },
  {
    title: 'Kukus',
    desc: 'Kukus is a website that displays information about games. This website is inspired by the epic game store. Kukus provides information about games from various platforms. This website is developed using Next.js, Tailwind, and Supabase for databases and authentication. Data from this website is taken from the RAWG API',
    link: 'https://kukus.vercel.app/',
    img: '/kukus.png'
  },
  {
    title: 'Tokonyadia',
    desc: 'Tokonyadia is an e-commerce website that takes inspiration from Tokopedia. Like an e-commerce website, this website provides various features such as product search, product filters, etc. This website was developed using Next.js, Tailwind, and Supabase for auth and database.',
    link: 'https://tokonyadia-sage.vercel.app/',
    img: '/tokonyadia-prettier.png'
  },
  {
    title: 'Valorant Website Clone',
    desc: 'This is a website that takes inspiration from the official Valorant website, you could say this website is a clone of my version of that website. Created using Nextjs and Tailwind CSS for styling. Data from the website is taken from the public API. This website is responsive, so it can be used on various devices with different widths.',
    link: 'https://valorant-website-clone-tawny.vercel.app/',
    img: '/valorant_new.png'
  },
  {
    title: 'Arknights Website Clone',
    desc: 'This is a website that takes inspiration from the official Arknights website, you could say this website is a clone of my version of that website. Created using Nextjs and Tailwind CSS for styling. Data from the website is taken from the public API. The main feature of this website is detailed information about the operators in the Arknights game. This website is responsive, so it can be used on various devices with different widths.',
    link: 'https://arknights-website-clone.vercel.app/',
    img: '/arknights-index-page.png'
  },
  {
    title: 'Poke TCG Hub',
    desc: 'PokeTCGHub is a website providing informations about Pokemon TCG, so there will be a lot of infos about cards, decks, etc. There are also deck building feature in this website, user can use this feature for preparation or inspiration for building their powerfull deck. There is also advance search card feature so user can search a spesific card with detail. This website made using Next.js, Tailwind CSS, and Axios.',
    link: 'https://pokemon-tcg-hub.vercel.app/',
    img: '/pokemon-tcg-homepage.png'
  },
]