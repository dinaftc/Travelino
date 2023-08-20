import React from "react";
import people from "./images/people.png";
import MobileStoreButton from "react-mobile-store-button";
import ghardaia from "./images/ghardaia.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlightIcon from "@mui/icons-material/Flight";
import circle from "./images/circle 1.png";
export default function Presentation() {
  const iOSUrl =
    "https://play.google.com/store/apps/details?id=host.exp.exponent";
  return (
    <div className="container m-10 grid grid-cols-2">
      <div className="mx-10 my-12 ">
        <p className=" text-5xl font-bold p-1">Start your journey</p>
        <p className=" text-5xl font-bold p-1">by one click,explore</p>
        <p className=" text-5xl font-bold p-1">our beautiful World!</p>
        <p className="p-1 my-1">
          plan and book your perfect trip with experts advices, travel tips,
          destination informations and inspiration from us!
        </p>
        <div className="flex my-1">
          <MobileStoreButton
            store="android"
            url={iOSUrl}
            linkProps={{ title: "Google Play Button" }}
          />
        </div>
      </div>
      <div className="mx-10 relative">
        <img src={circle} alt="" />
        <img
          src={people}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className=" py-1 px-2 shadow-xl flex bg-white rounded-xl absolute top-16 right-2">
          
          <FlightIcon color="primary"></FlightIcon>
          <p>Oran,Algeria</p>
        </div>
        <div className="card w-52 h-44 bg-base-100 shadow-xl absolute bottom-0 left-0">
          <figure className="px-2 pt-3 mb-3 rounded-xl">
            <img className="rounded-xl" src={ghardaia} alt="Shoes" />
          </figure>

          <div className="card-actions flex justify-center text-center">
            <LocationOnIcon color="primary"/>
            <h2 className="text-s font-bold mr-3">Ghardaia</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
