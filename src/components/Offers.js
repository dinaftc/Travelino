import React from "react";
import p1 from "./images/ghardaia.jpg";
import p4 from "../components/images/téléchargement (4).jpg";
import p6 from "../components/images/taghit.jpg";
import p7 from "../components/images/rocks.jpg";
import p3 from "../components/images/maisons-des-pecheurs.jpg";
import p2 from "../components/images/notre-dame-d-afrique.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Projects() {
  const places = [
    { name: "Santa Cruz library", wilaya: "Oran", Country: "Algeria", Img: p2 },

    { name: "Taghit", wilaya: "Beni Abbes", Country: "Algeria", Img: p6 },

    {
      name: "Qasr RaYas Lbaher",
      wilaya: "Algiers",
      Country: "Algeria",
      Img: p3,
    },
    { name: "Ghardaia", wilaya: "Ghardaia", Country: "Algeria", Img: p1 },

    { name: "Front de Mer", wilaya: "Oran", Country: "Algeria", Img: p4 },
    { name: "Djanet", wilaya: "Tamenraset", Country: "Algeria", Img: p7 },
  ];
  return (
    <div className="container m-10 ">
      <p className="font-bold text-4xl my-1">Popular Destinations</p>
      <p className="text-xl my-1">
        Vacations to make your experience enjoyable in Indonesia!
      </p>
      <div className="grid grid-cols-3 ">
        {places.map((place, index) => (
          <div
            key={index}
            className="card w-96 bg-base-100 shadow-xl m-8 rounded-xl"
          >
            <figure className="px-2 py-3 my-5 rounded-xl">
              <img className="rounded-xl" src={place.Img} alt="Shoes" />
            </figure>

            <div className="card-actions flex justify-right text-center">
              <LocationOnIcon color="primary" />


              <h2 className="text-s font-bold mr-8">
                {place.name}, {place.wilaya}, {place.city},{place.Country}
              </h2>

              <div className="flex flex-col items-start">
                <p className="text-xs text-gray-500 mb-1 ml-2">3 days</p>

                <div className="flex items-center ml-2 my-3">
                  <p className="text-xs font-bold text-primary">Rp 13600 DA</p>
                  <p className="text-xs ml-1">/ person</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
