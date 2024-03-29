import { NextApiRequest, NextApiResponse } from 'next';

export default function projects(req: NextApiRequest, res: NextApiResponse) {
  let data = [
    {
      slug: 'conneckt',
      tagline:
        'ConneKting alumni to students! A web-based platform that allows the students to build connections, ConneKt encourages college students to expand their networks. Also, it helps the alumni strengthen their relationships in the alma mater.',
      description:
        'conneKt helps the alumni strengthen their relationships in the alma mater. It is an web based platform for students to get to know people around their college,connect with alumni, raise questions and widen their network. The alumni can share their experiences, provide the budding developers with opportunities, update their job details and renew their connections.',
      img: '/images/projects/connekt.webp',
      name: 'ConneKt',
      tags: ['Angular', 'Firebase', 'TypeScript'],
      github: 'https://github.com/sachdeva-shrey/Connekt-Alumni-Tracker',
      category: ['web'],
      featured: false
    },
    {
      slug: 'milan-20',
      tagline:
        'The annual national-level cultural fest of SRM, Milan is organised by the Directorate of Student Affairs. It offers students loads of fun, entertainment, hope and happiness while it lasts.',
      img: '/images/projects/milan-20.webp',
      name: "SRM MILAN'20",
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['web'],
      featured: false,
      description:
        'The project allowed not only the SRMites but also the students of other colleges to get tickets for different pro shows, events and other fun exhibits.'
    },
    {
      slug: 'recruitments-2020',
      tagline:
        'An Abode of all the crazy developers and designers out there! Yet another project of SRMKZILLA, Recruitment 2020 was specially designed to recruit people to the team. ',
      description:
        "This web portal allows us to sign up, take the tests and submit the projects to stimulate the recruitment process. It's a state-of-an-art platform that gives the users a wonderful experience worth having!",
      img: '/images/projects/recruitments-srmkzilla.webp',
      name: 'Recruitments 2020',
      url: 'https://recruitments.srmkzilla.net/',
      tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'TypeScript'],
      category: ['web'],
      featured: true
    },
    {
      slug: 'goco-tracker',
      tagline:
        'Looking for the best healthcare tips and stores amidst the global pandemic? GoCoTracker is the one for you! It aims at minimising socializing among people and providing them with updates on COVID 19. Moreover, it helps people consult doctors and find the nearest medical stores in a go.',
      description:
        "A need of the hour, GoCoTracker is a web app build on MEAN(Mongo DB, Express, Angular8, NodeJS). It's a one-stop solution for people who wish to stay updated on COVID 19. In addition to this, it helps the people ask questions directly to the doctors and locate medical stores. Thus, reducing interaction among people and providing them with the best results on fingertips!",
      img: '/images/projects/goco.webp',
      name: 'GoCo Tracker',
      url: 'https://gocotracker.herokuapp.com/',
      tags: ['Angular', 'NodeJS', 'ExpressJS', 'MongoDB'],
      github: 'https://github.com/harshgoel05/GoCo-Tracker',
      category: ['web'],
      featured: false
    },
    {
      slug: 'idy-dashboard',
      tagline: 'Dashboard that makes work easy!',
      img: '/images/projects/idy-dashboard.webp',
      name: 'Idy Dashboards',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['web'],
      github: 'https://github.com/harshgoel05/WITLYF',
      featured: false
    },
    {
      slug: 'mirate',
      img: '/images/projects/mirate.webp',
      name: 'Mirate',
      url: 'http://mirate.co.in/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/harshgoel05/Mirate',
      category: ['web'],
      featured: false
    },
    {
      slug: 'work-mail-community',
      img: '/images/projects/workmailcommunity.webp',
      name: 'Work Mail Community',
      url: 'http://workmailcommunity.in/',
      github: 'https://github.com/harshgoel05/work-mail-community',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['web'],
      featured: true,
      description:
        'This project is designed to help out inexperienced people. The objective is to provide various internship offers to students so that they can showcase their talents, and outshine as individuals.',
      tagline:
        'A web-based program that aspires for passionate students to gain practical experience in various domains, have access to major worldwide projects and develop their skills. '
    },
    {
      slug: 'porfolio-v1',
      tagline:
        "Like what you see? Well, this is the first alteration of what you've been seeing now! My very own portfolio describing me and a gateway to my resume!",
      img: '/images/projects/portfolio_v1.webp',
      name: 'Porfolio 1.0',
      url: 'https://harshgoel05.github.io/portfolio-v1/',
      github: 'https://github.com/harshgoel05/portfolio-v1/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['web'],
      featured: false,
      description:
        "It's the first edition of my portfolio exhibiting my skills and knowledge that I've acquired so far. Moreover, there's an option for the users to get in touch with me. They're required to fill out a form giving away a few details to interest me!"
    },
    {
      slug: 'inception-wave',
      tagline:
        'Built during an internship for the organisation. Inception wave brings all the like-minded people together so that they can learn things from each other, grow and emerge as better individuals. ',
      description:
        'Inception Wave introduced me to Angular 8. Hands down, it gave me tremendous pleasure while solving the bugs that came in the way. I also learned Angular components, routings and other features like dynamic rendering, dynamic classes etc.',
      img: '/images/projects/inception_wave.webp',
      name: 'Inception Wave',
      url: 'https://inceptionwave.in/',
      tags: ['Angular', 'HTML', 'CSS', 'TypeScript'],
      category: ['web'],
      github: 'https://github.com/harshgoel05/inception-wave',
      featured: false
    },
    {
      slug: 'dr-jeewan-portfolio',
      tagline:
        'A perfect portfolio for the perfect doctor. As the name explains itself, Dr. Jeewan Kumar is an experienced doctor who has helped numerous patients throughout his life.  And, his portfolio is all about that. Moreover, it allows people to make appointments and visit him in his clinic at the scheduled time.',
      img: '/images/projects/dr-jeewan.webp',
      name: 'Dr. Jeewan Porfolio',
      url: 'https://harshgoel05.github.io/dr-jeewan-web/',
      github: 'https://github.com/harshgoel05/Dr-Jeewan-Website',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['web'],
      featured: false,
      description:
        'The project enables people to directly make appointments with the doctor and stop in at his place at the planned time. It also displays his expertise in various fields that he acquired throughout his career. All you have to do is fill out a form to book a slot and consult him.'
    },
    {
      slug: 'srmiec-2020',
      img: '/images/projects/srmiec-2020.webp',
      name: 'SRM Indian Energy Conference 2020',
      url: 'http://srmiec.co.in/',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MYSQL'],
      category: ['web', 'ui-ux'],
      github: 'https://github.com/harshgoel05/SRMIEC-2020',
      featured: true,
      description:
        'It gives the users an impression of what SRM IEC is and also, permits them to register for upcoming events and conferences. A separate page is available through which interested people can get an idea of different committees that are a part of this organisation.',
      tagline:
        'Following the principles and guidelines laid down by Model United Nations, SRM Indian Energy Conference 2020 brings all the like-minded people together to voice out their thoughts and opinions on a matter. '
    },
    {
      slug: 'kzilla-xyz',
      tagline:
        'Shorten the URL, broaden the reach. This product was solely designed to shrink the length of looong URLs to simplify the task of sharing links and tracking the clicks.',
      description:
        "Life is too short to have long urls. Striving to make your life easier, and a lot more fun, say hello to the new snappy url shrinker, that automagically got your back.With the powerful analytics, XYZ is all you need to stay ahead of the rest. Get your hands on it, and you will know why it's the best. \nThis fast, breezy and uninterrupted URL shrinker does the task in a jiffy! All you have to do is paste the desired URL and click on submit button. That's it! You can now share the aesthetically neat link with your friends!",
      img: '/images/projects/kzilla-xyz.webp',
      name: 'KZILLA-XYZ',
      url: 'http://kzilla.xyz/',
      github: 'https://github.com/srm-kzilla/kzilla.xyz',
      tags: ['SvelteJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'TypeScript'],
      category: ['web'],
      launch_video: 'https://www.youtube.com/embed/XPwWGZ_KnEE',
      featured: true
    },
    {
      slug: 'labelfuse',
      img: '/images/projects/labelfuse.webp',
      name: 'LabelFuse',
      url: 'https://www.labelfuse.com/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['web'],
      featured: false,
      tagline:
        "LabelFuse permits teams to deliver mission-critical insights from visual data fast and precisely using Machine learning. It's an all in one place for model designing, labelling and deployment. "
    },
    {
      slug: 'social-dukan',
      img: '/images/projects/social_dukan.webp',
      name: 'Social Dukan',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: ['web'],
      featured: false,
      tagline:
        'A prime influencer and marketing agency, Social Dukan is one place for all your online marketing needs and requirements to provide recognition to your brand. '
    },
    {
      slug: 'srm-daa',
      img: '/images/projects/daa.webp',
      name: 'Directorate of Alumni Affairs',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: ['web'],
      github: 'https://github.com/harshgoel05/DAA-Web',
      featured: false,
      description:
        'To foster interactions among students and alumni, as well as to make speed-networking a real thing, this project was designed. Thus, boosting coordination between the students and alumni in the college and allowing them to waive off all the doubts.',
      tagline:
        'With a vision of building a big, affiliated and powerful alumni community in the SRM University, Directorate of Alumni Affairs (DAA) was established. It also aims at enhancing the network of students and alumni as well as maintain their database.'
    },
    {
      slug: 'handholding-solution',
      tagline:
        'In this cooperative world of today, establishing digital identity is a tough cookie. But, why worry when Handholding solution is there to your aid? This web-based platform helps emerging developers increase the reach of their projects and analyze the involved risks.',
      img: '/images/projects/hhs.webp',
      name: 'Handholding Solution',
      url: 'https://handholdingsolution.com/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/harshgoel05/hand-holding',
      category: ['web'],
      featured: false,
      description:
        "As the name suggests, Handholding solution eases the load off the shoulders of developers. By providing support to its clients not only in the documentation but also financially, it's the go-to website for all newbies who wish to grow their business and create their own identities in the digital market."
    },
    {
      slug: 'jack',
      tagline:
        "Why bother RamuKaka when you have Jack? SRMKZILLA's cool discord bot, Jack is a master of all trades. He is indeed fun to play within the server and features numerous commands and services without lacking in quality!",
      description:
        'This multitasker serves a variety of purposes. From generating certificates for the events you have participated in, to shrinking loooong URLs using KZILLA.xyz, Jack covers it all. He can do anything and everything you ask for. But, does it send memes? Duh!!',
      img: '/images/projects/jack.webp',
      name: 'Jack',
      url: 'https://community.srmkzilla.net/',
      tags: ['NodeJS', 'DiscordJS', 'TypeScript'],
      category: ['discord'],
      featured: true
    },
    {
      slug: 'srm-sce',
      img: '/images/projects/srm_sce.webp',
      name: 'SRM Sociey of Civil Engineers',
      url: 'http://srmsce.in/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/srm-kzilla/srmsce',
      category: ['web'],
      featured: false,
      description:
        'The SRM Society of Civil Engineers also helps the students get trainings in administration and management. Moreover, the project enables them to know the details of upcoming trivias, seminars, quizzes and other events.',
      tagline:
        'An association of all the civil engineering students studying at SRMIST, SRMCSI envisions bringing out the hidden talents of their community to the world!'
    },
    {
      slug: 'pricinger',
      tagline:
        'Wish to travel the world at the minimum cost possible?  Pricinger is there to your rescue. All you have to do is add this extension and cut off the extra costs before booking the tickets. Start ticking things off your bucket list now!',
      description:
        'Pricinger is a browser extension that uses a plethora of amazing features like browser switcher, OS switcher, proxy and many others to block dynamic pricing and cut short the booking expenses without revealing your identify to the world.',
      img: '/images/projects/pricinger.png',
      name: 'Pricinger',
      tags: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      url: 'https://www.facebook.com/Pricinger/',
      category: ['extensions'],
      featured: true
    },
    {
      slug: 'mediseen',
      tagline:
        'Cure for all the medical needs under one roof. Mediseen is an advanced web application that fulfils all you can ask for in a jiffy! ',
      description:
        'I built this during my internship with Dezingdia. It simplifies the task of making appointments to consult doctors. Moreover, it lets people buy medicines and get treatments.',
      img: '/images/projects/mediseen.png',
      name: 'Mediseen',
      tags: ['JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB'],
      category: ['web'],
      featured: true
    },
    {
      slug: 'mozofest-21',
      tagline:
        "An annual event hosted by SRMKZILLA, MOZOFEST'21 covers a wide range of world-class events. It allows the gamers and crazy developers to showcase their skills and gives them a chance to shine.",
      description:
        "MOZOFEST'21 laid out a plethora of jaw-dropping events and tournaments. The project aimed at fostering the registration process smoothly. Thus, interested ones could directly register themselves into the desired event.",
      img: '/images/projects/mozofest21.png',
      name: "MOZOFEST'21",
      url: 'http://mozofest.srmkzilla.net/',
      tags: ['TypeScript', 'NodeJS', 'ExpressJS', 'MongoDB'],
      category: ['web'],
      featured: false
    },
    {
      slug: 'desk',
      tagline:
        'Maintain the integrity of exams with Desk!An end-to-end assistance right from conducting online proctored examinations to results processing, and grading. ',
      description:
        'Desk serves as an excellent platform that certainly helps in supervising online exams efficiently and effectively. Not only that, but it also enables teachers to design forms and grade students.',
      img: '/images/projects/desk.png',
      name: 'Desk',
      github: 'https://github.com/harshgoel05/desk',
      tags: ['TypeScript', 'NodeJS', 'ExpressJS', 'MongoDB', 'Angular'],
      category: ['web'],
      featured: true
    },
    {
      slug: 'doceasy',
      tagline:
        "This is an open-source community platform designed for doctors and medical staff to make medication easier, faster and effective. The well-trained medicos are brought together to treat the patients and are taken care of till they're disease-free. ",
      description:
        '“Alone we can do so little; together we can do so much.” This quote was given by Hellen Keller. It clarifies the power of a strong community. But what if we merge the superpowers of experienced medical staff and their community? Well, this is exactly what we are aiming to do. Presenting, DocEasy!',
      img: '/images/projects/doceasy.png',
      name: 'DocEasy',
      github: 'https://github.com/Yakshchopra/DocEasy',
      tags: ['TypeScript', 'NodeJS', 'ExpressJS', 'MongoDB', 'React'],
      category: ['web'],
      featured: true
    }
  ];
  res.json(data);
}
