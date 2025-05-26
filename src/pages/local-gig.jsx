import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/ui/shared/Footer';
import Navbar from '@/components/ui/shared/navbar';
import React from 'react';


const gigs = [
  {
    id: 1,
    title: 'Logo Design for Startup',
    company: 'PixelForge',
    category: 'Graphic Design',
    location: 'Remote',
    budget: '$150',
    workImage:'https://th.bing.com/th/id/OIP.su4-4BVrseAkTTugBJOfpQHaEO?cb=iwp2&rs=1&pid=ImgDetMain',
 avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    email: 'john.doe@example.com',
    resume: '#',
  },
  {
    id: 2,
    title: 'React Developer for Landing Page',
    company: 'CodeHive',
    category: 'Frontend Development',
    location: 'Delhi',
    budget: '$300',
    workImage: 'https://kodmek.com/wp-content/uploads/2021/01/front-end-developer-1600x900-1.jpg',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    email: 'jane.dev@example.com',
    resume: '#',
  },
  {
    id: 3,
    title: 'Social Media Manager',
    company: 'BuzzReach',
    category: 'Marketing',
    location: 'Mumbai',
    budget: '$200',
    workImage: 'https://th.bing.com/th/id/OIP.Kn5jn-KJ36I3X6ocZXyL3QAAAA?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    email: 'mike.marketer@example.com',
    resume: '#',
  },
  {
    id: 4,
    title: 'WordPress Site Customization',
    company: 'WPMasters',
    category: 'Web Development',
    location: 'Remote',
    budget: '$250',
    workImage: 'https://th.bing.com/th/id/OIP.0LUplQOEpLShuxCC8vkRzwHaE8?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    email: 'ella.wp@example.com',
    resume: '#',
  },
  {
    id: 5,
    title: 'Product Photography for Catalog',
    company: 'LensCraft',
    category: 'Photography',
    location: 'Bangalore',
    budget: '$180',
    workImage: 'https://th.bing.com/th/id/OIP.QgvzZTfn8y3MP77BgHWIsgHaE8?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    email: 'alan.photo@example.com',
    resume: '#',
  },
  {
    id: 6,
    title: 'Voice Over for Ad Script',
    company: 'AudioMates',
    category: 'Voice Acting',
    location: 'Remote',
    budget: '$100',
    workImage: 'https://th.bing.com/th/id/OIP.6C91NCI6CgyGvs73BrRoIgHaEO?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    email: 'susan.voice@example.com',
    resume: '#',
  },
  {
    id: 7,
    title: 'Tutoring for Math - Class 10',
    company: 'EduPlus',
    category: 'Tutoring',
    location: 'Pune',
    budget: '$120/week',
    workImage: 'https://th.bing.com/th/id/OIP.haEj7bydSXuu9ft-Gt3WbgHaE7?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    email: 'tutor.sam@example.com',
    resume: '#',
  },
  {
    id: 8,
    title: 'UI/UX Design for Mobile App',
    company: 'DesignBase',
    category: 'UI/UX',
    location: 'Chennai',
    budget: '$350',
    workImage: 'https://th.bing.com/th/id/OIP.QmleCodn6vEkuz3b0a5C5QHaE7?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    email: 'nina.ui@example.com',
    resume: '#',
  },
  {
    id: 9,
    title: 'Backend API Development',
    company: 'TechLogix',
    category: 'Backend Development',
    location: 'Hyderabad',
    budget: '$400',
    workImage: 'https://microdeft.com/wp-content/uploads/2022/10/Backend-Web-Development-Benefits-2048x985.jpg',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    email: 'raj.backend@example.com',
    resume: '#',
  },
  {
    id: 10,
    title: 'Illustration for Children',
    company: 'CreativeInk',
    category: 'Illustration',
    location: 'Kolkata',
    budget: '$220',
    workImage: 'https://th.bing.com/th/id/OIP.e1BM98UCQC-0yF2AIQpj2AHaHa?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    email: 'lisa.art@example.com',
    resume: '#',
  },
   {
    id: 11,
    title: 'Full Stack Developer',
    company: 'Ceeras',
    category: 'Wev-development',
    location: 'Delhi',
    budget: '$200',
    workImage: 'https://th.bing.com/th/id/OIP.IpujAAg-gd3T6vHvdGS8mgHaHK?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    email: 'mira.developer@example.com',
    resume: '#',
  },
   {
    id: 12,
    title: 'Writer',
    company: 'GFG',
    category: 'Writer',
    location: 'Mumbai',
    budget: '$100',
    workImage: 'https://th.bing.com/th/id/OIP.eirlsfMyCIqKQPn-EHkLsQHaE8?cb=iwp2&rs=1&pid=ImgDetMain',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    email: 'rakesh.writer@example.com',
    resume: '#',
  },
];

const LocalGig = () => {
  return (
    <div>
        <Navbar/>
    <div className="max-w-7xl mx-auto py-10 px-4 mt-15">
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore Freelance <span className="text-purple-600">Opportunities</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gigs.map((gig) => (
          <div key={gig.id} className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition-shadow duration-300">
            <img src={gig.workImage} alt={gig.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Avatar>
                  <AvatarImage src={gig.avatar} />
                  <AvatarFallback>{gig.company[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-bold">{gig.company}</p>
                  <p className="text-medium text-gray-700">{gig.email}</p>
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-1">{gig.title}</h2>
              <div className="flex flex-wrap gap-2 text-sm mb-3 text-gray-600">
                <span className='text-medium text-muted-foreground'>{gig.category}</span>
                <span className='text-medium text-muted-foreground'>{gig.location}</span>
              </div>
              <p className="text-purple-600 font-bold mb-3">{gig.budget}</p>
              <div className="flex gap-3">
                <a
                  href={gig.resume}
                  className="text-lg font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded hover:bg-purple-200"
                >
                  View Resume
                </a>
                <Button variant={"link"}
                  className="text-lg font-semibold bg-gray-100 text-gray-800 px-3 py-1 rounded hover:bg-gray-200"
                >
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LocalGig;