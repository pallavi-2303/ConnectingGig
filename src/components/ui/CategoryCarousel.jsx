import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { Button } from "./button";
import { Navigate } from "react-router-dom";
const gigCategories = [
  "Logo Design",
  "Web Development",
  "Photography",
  "Content Writing",
  "Delivery Partner",
  "Home Repair",
  "Tutoring",
  "Social Media Marketing",
];
const CategoryCarousal = () => {
  const searchGigHandler = (category) => {
    Navigate("/explore")
  }
  return (
    <div>
      <Carousel className="w-full my-20 max-w-xl mx-auto">
        <CarouselContent>
          {gigCategories.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button
              className="rounded-full cursor-pointer"
                variant="ouline"
                onClick={() => searchGigHandler(category)}
              >
                {category}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
};

export default CategoryCarousal;
