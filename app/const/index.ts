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
    to: 'https://www.cakeresume.com/wisnu-shena'
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
    title: 'Valorant Clone Website',
    desc: 'Cloning a website from playvalorant.com. This website was created using NextJS and Tailwind CSS for styling. The data used for this website is taken from public api. This website is responsive so it can be used on various devices with different widths.',
    link: 'https://valorant-website-clone-two.vercel.app/',
    img: '/valorant.png'
  },
  {
    title: 'Arknights Clone Website',
    desc: 'This website is a website that takes inspiration from the official Arknights website, you could say this website is a clone of my version of that website. Created using Nextjs and Tailwind CSS for styling. Data from the website is taken from the public API. The main feature of this website is detailed information about the operators in the Arknights game. This website is responsive, so it can be used on various devices with different widths.',
    link: 'https://arknights-website-clone.vercel.app/',
    img: '/arknights.png'
  },
  {
    title: 'Anime Paradise',
    desc: 'Taking inspiration from crunchyroll and myanimelist. The anime paradise website is a website that displays information related to anime and anime. This website was created using Vite with the ReactJS framework. This website uses dynamic data retrieved using Axios via the API provided by Jikan API. This website provides information such as top anime and top manga, anime and manga recommendations, and specific detailed information about anime or manga. This website is responsive so it can be used by devices of different widths',
    link: 'https://anime-paradise.vercel.app/',
    img: '/anime_paradise.png'
  },
  {
    title: 'Airbnb Clone Website',
    desc: 'Cloning a website from Airbnb. This website was created using NextJS and Tailwind CSS for styling. The data from this website is static because it does not use the API provided by Airbnb or does not have an API that can display relevant data. This website is responsive so it can be used on various devices with different widths.',
    link: 'https://airbnb-clone-psi-vert.vercel.app/',
    img: '/airbnb_clone.png'
  },
  {
    title: 'Studio Ghibli Website',
    desc: 'This website is a website that displays data related to films from Studio Ghibli. This website was created with Nextjs and Tailwind CSS for styling. The data displayed on this website is taken from the public api. Apart from that, this website is also responsive so it can be used on all devices.',
    link: 'https://ghibli-website.vercel.app/',
    img: '/ghibli.png'
  },
  {
    title: 'Pokeapp',
    desc: 'This is a website that takes inspiration from Pokedex. This website displays information about Pokemon in general. The data displayed is dynamic, taken from the poke API using axios. This website was created using Vite with the framework used, namely ReactJS with the help of Tailwind for styling. This website is responsive so it can be used on devices of different widths.',
    link: 'https://pokeapp-tau-three.vercel.app/',
    img: '/poke_app.png'
  },
]