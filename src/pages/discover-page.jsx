import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/navbar";
import React from "react";

const gigs = [
  {
    title: "Logo Design for Local Bakery",
    location: "Delhi",
    category: "Graphic Design",
    description: "Need a minimal logo designed for a small home bakery.",
    price: "₹1500",
    image:"https://th.bing.com/th/id/OIP.c2uGgP6VZB4g4fOfC1fKdwHaEK?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "Build a Portfolio Website",
    location: "Remote",
    category: "Web Development",
    description: "Simple responsive portfolio site for a photographer.",
    price: "₹5000",
    image:"https://cdn.pixabay.com/photo/2024/02/05/10/51/web-development-8554218_1280.jpg"
  },
  {
    title: "Math Tuition for Class 10 Student",
    location: "Mumbai",
    category: "Tutoring",
    description: "Looking for a tutor who can teach math 3 days/week.",
    price: "₹1000/week",
    image:"https://thumbs.dreamstime.com/z/tutoring-tutor-his-online-education-teaching-tutoring-learning-teacher-coach-management-82168018.jpg"
  },
  {
    title: "Event Photography for Wedding",
    location: "Jaipur",
    category: "Photography",
    description: "Need a photographer for a 2-day event.",
    price: "₹7000/day",
    image:"https://th.bing.com/th/id/OIP.QgvzZTfn8y3MP77BgHWIsgHaE8?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "Flyer Design for Restaurant Opening",
    location: "Pune",
    category: "Graphic Design",
    description: "Create a vibrant flyer for a new South Indian restaurant.",
    price: "₹800",
    image:"https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg"
  }
];

const DiscoverPage = () => {
  return (
    <div className="font-sans mt-10">
        <Navbar/>
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold"> Explore Freelance 
<span className="text-[#6A38C2]"> Gigs </span> Near You</h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto">
          Find nearby freelance opportunities or post your own gigs. Fast, flexible, and trusted by thousands.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">Businesses can also post gigs and hire talent directly.</p>
        <div className="mt-8 max-w-md mx-auto flex items-center border rounded-full shadow-sm overflow-hidden">
          <input className="flex-1 px-4 py-2 outline-none" type="text" placeholder="Search for gigs or services..." />
          <button className="bg-[#6A38C2] px-4 py-2 text-white">Search</button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="font-bold mb-2 text-lg">1. Post a Gig</h3>
            <p className="text-lg text-gray-800">Businesses or individuals can post freelance gigs for services they need.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2 text-lg">2. Browse Gigs</h3>
            <p className="text-lg text-gray-800">Freelancers can explore opportunities filtered by location, skill, and pay.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2 text-lg">3. Get Hired / Hire</h3>
            <p className="text-lg text-gray-800">Connect, chat, negotiate, and close the deal—all within the platform.</p>
          </div>
        </div>
      </section>

      {/* Latest Gigs */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest & Top <span className="text-violet-700">Gigs</span> Posted</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {gigs.map((gig, index) => (
            <div key={index} className="border p-6 rounded-xl shadow hover:shadow-md transition duration-200">
             <img
                src={gig.image}
                alt={gig.category}
                className="w-full h-48 object-cover rounded-t-xl"
              />
    
              <h3 className="text-xl font-bold mb-1">{gig.title}</h3>
              <p className="text-lg text-gray-600 mb-1">{gig.location}</p>
              <p className="font-semibold text-lg text-violet-800 mb-2">{gig.category}</p>
              <p className="text-muted-foreground mb-3">{gig.description}</p>
              <p className="font-semibold text-red-600 text-lg">{gig.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Start Your Gig Journey Today</h2>
        <p className="mb-6 text-gray-700 text-lg">Are you a freelancer or a business? Sign up and begin your journey in the local gig economy.</p>
        <div className="space-x-4">
          <button className="bg-[#6A38C2] text-white px-6 py-2 rounded-full hover:bg-[rgba(107,56,194,0.89)] font-bold">Find Gigs</button>
          <button className="bg-gray-400 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-400 font-bold">Post a Gig</button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default DiscoverPage;