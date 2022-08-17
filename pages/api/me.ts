import { NextApiRequest, NextApiResponse } from 'next';

export default function me(req: NextApiRequest, res: NextApiResponse) {
  let data = {
    name: 'Md Abdul Kuddus',
    about:
      'A fresher with experience, this line says exactly who he is. He is a software developer who crafts beautiful web and apps. His perfect balance of technical & managerial skills stands him apart from the crowd.',
    work: {
      company: 'Headout',
      designation: 'Software Developer',
      logo: '/images/companies/headout.svg'
    },
    logo: '/images/logo-light.svg',
    resume: 'https://drive.google.com/uc?export=download&id=1e1M4Q1DM27t81kx3ufmX_ZjemVsKyW2L',
    profile_img: '/images/bob.png',
    calendyUrl:
      'https://calendly.com/harsh-goel05/web_meet?hide_event_type_details=1&hide_gdpr_banner=1',
    socialMedia: [
      {
        link: 'mailto:harshgoel05@gmail.com',
        image_file: '/images/icons/mail.svg',
        alt_text: 'Email'
      },
      {
        link: 'https://linkedin.com/in/harshgoel05',
        image_file: '/images/icons/linkedin.svg',
        alt_text: 'LinkedIn'
      },
      {
        link: 'https://facebook.com/harshgoel05',
        image_file: '/images/icons/facebook.svg',
        alt_text: 'Facebook'
      },
      {
        link: 'https://github.com/harshgoel05',
        image_file: '/images/icons/github.svg',
        alt_text: 'Github'
      },
      {
        link: 'https://www.instagram.com/_d_specialist/',
        image_file: '/images/icons/instagram.svg',
        alt_text: 'Instagram'
      }
    ]
  };

  res.json(data);
}
