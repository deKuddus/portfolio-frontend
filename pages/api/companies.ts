import { NextApiRequest, NextApiResponse } from 'next';

export default function companies(req: NextApiRequest, res: NextApiResponse) {
  let data = [
    {
      name: 'Headout',
      logo_url: '/images/companies/headout.svg',
      featured: true,
      position: 'Software Developer',
      startDate: "May'2021",
      responsibilities: [
        'Working on backend team, integrations pod',
        'Primarly involed in building and integrating APIs',
        'Works on Java, Kotlin, Springboot'
      ],
      order: 1
    },
    {
      name: 'BharatPe',
      position: 'SDE Intern',
      logo_url: '/images/companies/bharatpe.png',
      featured: true,
      startDate: "Aug'2022",
      endDate: 'Present',
      responsibilities: [
        'Working with the lending Pod',
        'Collaborates with frontend team',
        'Building things on React,TypeScript'
      ],
      order: 2
    },
    {
      name: 'SRM CARE',
      position: 'Full Stack Developer',
      featured: true,
      startDate: "May'2019",
      endDate: "Oct'2020",
      responsibilities: [
        'Developed questions on C/C++ solved by 40k+ people over campus',
        'Developed an syllabus portal for SRMCARE',
        'Wrote a research paper on underwater communications',
        'Worked on Angular 8, NodeJS and MongoDB'
      ],
      order: 3
    },
    {
      name: 'Dezigndia',
      position: 'Software Development Intern',
      logo_url: '/images/companies/dezigndia.png',
      featured: true,
      startDate: "Jan'2021",
      responsibilities: [
        'Working on NodeJS and MongoDB',
        'Working on a real time chat application',
        'Using software management tools like Trello'
      ],
      endDate: "Apr'2021",
      order: 3
    },
    {
      name: 'Zoob Labs',
      position: 'Backend Developer',
      logo_url: '/images/companies/zoob_labs.svg',
      featured: false,
      startDate: "Sept'2020",
      endDate: "Dec'2020",
      responsibilities: [
        'Worked on NodeJS, Express and MongoDB',
        'Developed APIs for React and App consumption',
        'Startup based in Zurich, USA',
        'Focuses on gift sharing b/w people'
      ],
      order: 5
    },
    {
      name: 'SRM Indian Energy Conference',
      position: 'Technical Lead',
      logo_url: '/images/companies/iec.svg',
      featured: false,
      startDate: "Jan'2020",
      endDate: "Nov'2020",
      responsibilities: [
        'Lead the technical team at SRMIEC',
        'Developed an event portal with admin panel',
        'Got pretty good reviews about the website',
        'Worked on HTML, CSS, JavaScript, PHP and MYSQL'
      ],
      order: 6
    },
    {
      name: 'Hashbinary LLP',
      logo_url: '/images/companies/hashbinary.svg',
      featured: true,
      position: 'Software Development Intern',
      startDate: "Apr'2020",
      endDate: "Dec'2021",
      responsibilities: [
        'Worked on browser extension',
        'Pricinger, protects you from dynamic Pricing',
        'Worked with NodeJS and LoopBack 4',
        'Attended daily calls, used Jira ,Asana, Bitbucket',
        'Extensively worked with Javascript'
      ],
      order: 7
    },
    {
      name: 'Coding Blocks',
      position: 'Campus Ambassador',
      logo_url: '/images/companies/coding_blocks.svg',
      featured: false,
      startDate: "Oct'2019",
      endDate: "Sept'2020",
      responsibilities: [
        'Organized Workshops on various topics',
        'Promoted Coding Blocks inside SRMIST',
        'Wrote blogs and cleared doubts on Quora',
        'Brought sponsorships for Coding Blocks'
      ],
      order: 8
    },
    {
      name: 'Social Dukan',
      position: 'Web Developer',
      logo_url: '/images/companies/social_dukan.svg',
      featured: false,
      startDate: "Nov'2020",
      endDate: "Dec'2020",
      responsibilities: [
        'Developed website for Social Dukan',
        'Work to understand client requirments'
      ],
      order: 10
    },
    {
      name: 'Inception Wave',
      position: 'Web Development Intern',
      logo_url: '/images/companies/inception_wave.svg',
      featured: false,
      startDate: "Sept'2020",
      endDate: "Dec'2020",
      responsibilities: [
        'Developed website for Inception Wave',
        'Crafted the website for their product, Graphido',
        'Worked on Angular 8'
      ],
      order: 11
    }
  ];
  res.json(data);
}
