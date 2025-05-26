import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
 const {isSignedIn,user}=useUser();
  return (
    <div className="bg-white">
      <div className="bg-white p-4 border-b-1 h-20 flex justify-between items-center mx-auto w-full fixed top-0 left-0 z-50">
        <div>
       <Link to="/">  <h1 className="text-4xl font-bold">
            Gigster<span className="text-3xl font-bold text-red-700">Hub</span>
          </h1></Link> 
        </div>
        <div className="flex gap-12 items-center justify-center">
          <ul className="flex font-semibold gap-5 text-lg items-center">
          <Link to="/discover"><li>Discover</li></Link>  
          <Link to="/local-gig"><li>Gigs</li></Link>  
          <Link to="/categories"><li>Categories</li></Link>  
           
          </ul>
          {!isSignedIn ? (
            <div className="flex items-center gap-4">
            <Link to="/login"> <Button variant="outline">Login</Button></Link> 
           <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                SignUp
              </Button></Link>   
            </div>
          ) : (
           <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
    
    </div>
  );
};

export default Navbar;
