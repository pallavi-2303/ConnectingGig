import Footer from '@/components/ui/shared/Footer';
import Navbar from '@/components/ui/shared/navbar';
import React from 'react';

const gigCategories = [
  {
    title: "Web Development",
    image:"https://cdn.pixabay.com/photo/2024/02/05/10/51/web-development-8554218_1280.jpg",
  
    description: "Build websites and web apps with modern technologies."
  },
  {
    title: "Graphic Design",
    image:"https://th.bing.com/th/id/OIP.su4-4BVrseAkTTugBJOfpQHaEO?cb=iwp2&rs=1&pid=ImgDetMain"
 ,
    description: "Create visual concepts using design tools and creativity."
  },
  {
    title: "Digital Marketing",
    image: "https://th.bing.com/th/id/OIP.UpgpHc-ZzXLJREotRpnjCwHaE6?cb=iwp2&rs=1&pid=ImgDetMain",
    description: "Promote products and services through digital channels."
  },
  {
    title: "Content Writing",
     image: "https://th.bing.com/th/id/OIP.Jw8vdnDemzJkddN5Lqmc1AHaE7?cb=iwp2&rs=1&pid=ImgDetMain",
   
    description: "Craft compelling articles, blogs, and copy."
  },
  {
    title: "Mobile App Development",
    image: "https://externlabs.com/blogs/wp-content/uploads/2022/04/b2.jpg",
    description: "Develop mobile apps for Android and iOS platforms."
  },
  {
    title: "Video Editing",
    image: "https://th.bing.com/th/id/OIP.iGglV7KlurCm-g1GBbxZlQHaLH?cb=iwp2&rs=1&pid=ImgDetMain",
    description: "Edit and produce high-quality video content."
  },
  {
    title: "Voice Over",
    image: "https://s.studiobinder.com/wp-content/uploads/2020/03/What-is-Voice-over-StudioBinder.jpg",
    description: "Record voiceovers for videos, ads, and audiobooks."
  },
  {
    title: "Translation Services",
    image: "https://img.freepik.com/premium-photo/handdrawn-illustration-translation-services_1225085-19040.jpg",
    description: "Translate content between languages professionally."
  },
  {
    title: "UI/UX Design",
    image: "https://th.bing.com/th/id/OIP.QmleCodn6vEkuz3b0a5C5QHaE7?cb=iwp2&rs=1&pid=ImgDetMain",
    description: "Design user interfaces and enhance user experience."
  },
  {
    title: "Virtual Assistance",
    image: "https://th.bing.com/th/id/OIP.n67KgS8UONjya3fzplRAHgHaE8?cb=iwp2&rs=1&pid=ImgDetMain",
    description: "Support businesses with administrative tasks remotely."
  },
  {
    title: "Photography",
    image: "https://th.bing.com/th/id/OIP.nzpntnKwRUuWiny_CFC2OAHaE8?cb=iwp2&rs=1&pid=ImgDetMain",
    description: "Capture stunning photos for various occasions."
  },
  {
    title: "Data Entry",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20220925/pngtree-information-concept-data-entry-on-digital-background-computer-concept-storage-photo-image_9483714.jpg",
    description: "Accurately input and manage data for businesses."
  }
];

const CategoriesPage = () => {
  return (
    <div>
        <Navbar/>
    <div className="max-w-7xl mx-auto py-10 px-4 mt-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 mt-5">Explore Gig Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gigCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <img src={category.image} alt={category.title} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{category.title}</h2>
              <p className="text-gray-600 text-lg">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
     <Footer/>
    </div>
  );
};
 
export default CategoriesPage;