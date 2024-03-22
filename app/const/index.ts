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
    label: 'Project',
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
    title: 'Airbnb Clone Website',
    desc: 'Cloning a website from Airbnb. This website was created using NextJS and Tailwind CSS for styling. The data from this website is static because it does not use the API provided by Airbnb or does not have an API that can display relevant data. This website is responsive so it can be used on various devices with different widths.',
    link: 'https://airbnb-clone-psi-vert.vercel.app/',
    img: '/airbnb_clone.png'
  },
  {
    title: 'Space Tourism Website',
    desc: 'This website project is a project challenge provided by the frontend mentor website. This website was created using Vite with the framework used is ReactJS, for styling the website using Tailwind CSS, and routing using React Router. The data on this website is static as provided by the frontend mentor.',
    link: 'https://space-tourism-website-henna.vercel.app/',
    img: '/space_tourism.png'
  },
  {
    title: 'Anime Paradise',
    desc: 'Taking inspiration from crunchyroll and myanimelist. The anime paradise website is a website that displays information related to anime and anime. This website was created using Vite with the ReactJS framework. This website uses dynamic data retrieved using Axios via the API provided by Jikan API. This website provides information such as top anime and top manga, anime and manga recommendations, and specific detailed information about anime or manga. This website is responsive so it can be used by devices of different widths',
    link: 'https://anime-paradise.vercel.app/',
    img: '/anime_paradise.png'
  },
  {
    title: 'People Care Hospital Company Profile',
    desc: 'People Care Hospital is a company profile website that displays information about the hospital. The hospital used as data is a fictitious hospital that has nothing to do with the real hospital. The data displayed is static. This website was created using NextJS with the help of Bootstrap for website styling.',
    link: 'https://people-care-hospital-company-profile-website.vercel.app/',
    img: '/people_care.png'
  },
  {
    title: 'Pokeapp',
    desc: 'This is a website that takes inspiration from Pokedex. This website displays information about Pokemon in general. The data displayed is dynamic, taken from the poke API using axios. This website was created using Vite with the framework used, namely ReactJS with the help of Tailwind for styling. This website is responsive so it can be used on devices of different widths.',
    link: 'https://pokeapp-tau-three.vercel.app/',
    img: '/poke_app.png'
  },
]