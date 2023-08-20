import React from "react";
import illustrasi from "./images/illustrasi.png";
import flight from './images/flight.png';
import flight1 from './images/flight (1).png';
import flight2 from './images/flight (2).png';
export default function Skills() {
  return (
    <div className="grid grid-cols-2 m-10">
      <div>
        <img src={illustrasi} alt="" />
      </div>
      <div>
        <p className="font-bold text-4xl py-2 my-2">Why Choose Us</p>
        <p className=" text-xl py-2 my-2">
          Enjoy different experiences in every place you visit and discover new
          and affordable adventures of course.
        </p>

        <div className="p-2 m-2  items-center">
          <div className="container h-20 flex shadow-xl rounded-md m-8 ">
            <img src={flight} alt="" />
            <div className="p-2 m-2">
            <p className="text-lg font-bold">Flight Ticket</p>
            <p className="text-s ">
              {" "}
              Vitae donec pellentesque a aliquam et ultricies auctor.
            </p>
            </div>
          </div>
          <div className="container h-20 flex shadow-xl rounded-md m-8">
          <img src={flight1} alt="" />
          <div className="p-2 m-2">
            <p className="text-lg font-bold ">Accomodation</p>
            <p className="text-s ">

              {" "}
              Vitae donec pellentesque a aliquam et ultricies auctor.
            </p>
            </div>
          </div>
          <div className="container h-20 flex shadow-xl rounded-md m-8">
          <img src={flight2} alt="" />
          <div className="p-2 m-2">
            <p className="text-lg font-bold">Packaged Tour</p>
            <p className="text-s ">
              {" "}
              Vitae donec pellentesque a aliquam et ultricies auctor.
            </p>
          </div>
          </div>
          <a className='font-bold text-lg p-2 m-2' href='#'>Read More</a>
        </div>
      </div>
    </div>
  );
}
