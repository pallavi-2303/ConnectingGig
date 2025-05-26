import React from 'react'
import LatestGigCards from './LatestGigCards';
const hardcodedGigs = [
  {
    _id: "1",
    title: "Logo Design for Local Bakery and many more",
    category: "Graphic Design",
    budget: "₹1500",
    location: "Delhi",
    description: "Need a minimal logo designed for a small home bakery.",
    image:"https://th.bing.com/th/id/OIP.su4-4BVrseAkTTugBJOfpQHaEO?cb=iwp2&rs=1&pid=ImgDetMain"
 
  },
  {
    _id: "2",
 title: "Build a Portfolio Website",
    category: "Web Development",
    budget: "₹5000",
    location: "Remote",
    description: "Simple responsive portfolio site for a photographer.",
    image:"https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg"
  },
  {
    _id: "3",
    title: "Math Tuition for Class 10 Student",
    category: "Tutoring",
    budget: "₹1000/week",
    location: "Mumbai",
    description: "Looking for a tutor who can teach math 3 days/week.",
    image:"https://th.bing.com/th/id/OIP.k6DF5Z1mj8U4NfIlq_QnhQHaE8?cb=iwp2&rs=1&pid=ImgDetMain"
  },
 {
    _id: "4",
    title: "Social Media Content Creator",
    category: "Marketing",
    budget: "₹3000",
    location: "Remote",
    description: "Help create reels/posts for a small fashion brand.",
    image:"https://th.bing.com/th/id/OIP.e-P8xtn2lJ2CtHgJxC49uQHaFk?w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  },
  {
    _id: "5",
    title: "Fix Kitchen Tap Leak",
    category: "Home Repair",
    budget: "₹500",
    location: "Pune",
    description: "Need a plumber to fix a leaking kitchen tap.",
    image:"https://th.bing.com/th/id/OIP.Go_1-7ei8FShFeUFvsVsdgHaFn?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    _id: "6",
    title: "Delivery Partner Needed",
    category: "Delivery",
    budget: "₹50/delivery",
    location: "Bangalore",
    description: "Deliver small packages within local radius.",
    image:"https://www.handover.in/wp-content/uploads/Right-Delivery-Partner-Handover.jpg"
  }
];


const LatestGigs = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'>
        <span className='text-[#6A38C2]'>Latest & Top</span> Gigs Posted
      </h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
    {hardcodedGigs.length === 0 ? <span>No Gigs Available</span> : (
      hardcodedGigs.map((gig)=>(
        <LatestGigCards key={gig._id} gig={gig}/>
      ))  
    )}
  </div>
    </div>
  )
}

export default LatestGigs