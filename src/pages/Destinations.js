import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import p1 from "../components/images/maisons-des-pecheurs.jpg";
import p2 from "../components/images/notre-dame-d-afrique.jpg";
import p3 from "../components/images/fb-img-1570439611876.jpg";
import p4 from "../components/images/photo1jpg.jpg";
import q1 from "../components/images/téléchargement.jpg";
import q2 from "../components/images/rocks.jpg";
import q3 from "../components/images/randonnee-desert-algerie.webp";
import q4 from "../components/images/téléchargement (2).jpg";
import r1 from "../components/images/images (1).jpg";
import r2 from "../components/images/téléchargement (3).jpg";
import r3 from "../components/images/téléchargement (4).jpg";
import r5 from "../components/images/téléchargement (6).jpg";
import r4 from "../components/images/téléchargement (5).jpg";
import r6 from "../components/images/images (2).jpg";
import r7 from "../components/images/images (3).jpg";
import r8 from "../components/images/images (4).jpg";
import r9 from "../components/images/images (5).jpg";

export default function Destinations() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-10 my-12 text-center">
        <p className=" text-5xl font-bold p-1">
          Discover The Most Popular Destinstions
        </p>
      </div>
      <div className="container m-10 grid grid-cols-2">
        <div className="m-20">
          <p className=" text-5xl font-bold px-1 pb-2 pt-8">Algiers Tour</p>
          <p className=" text-xl p-1">
            Best Places to visite in the Capital of Algeria
          </p>
          <p className=" text-lg px-1 py-8 my-8">
            A Mesmerizing Blend of History and Modernity Welcome to Algiers, a
            captivating gem nestled along the Mediterranean coast, inviting you
            to discover its rich history, vibrant culture, and breathtaking
            landscapes. As your trusted travel agency, we are thrilled to
            introduce you to the enchanting city of Algiers.
          </p>
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="grid grid-cols-2 gap-2">
            <img src={p1} alt="" className="w-full h-auto" />
            <img src={p2} alt="" className="w-full h-auto" />
            <img src={p3} alt="" className="w-full h-auto" />
            <img src={p4} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="container m-10 grid grid-cols-2">
        <div className="flex items-center justify-center h-screen">
          <div className="grid grid-cols-2 gap-2">
            <img src={q1} alt="" className="w-full h-auto" />
            <img src={q2} alt="" className="w-full h-auto" />
            <img src={q3} alt="" className="w-full h-auto" />
            <img src={q4} alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="m-20">
          <p className=" text-5xl font-bold px-1 pb-2 pt-8">Sahara Tour</p>
          <p className=" text-xl p-1">
            Best Places to visite in our beautiful desert
          </p>
          <p className=" text-lg px-1 py-8 my-8">
            Unveil the Mystique of the Desert Welcome to a world where endless
            stretches of golden sand meet the vast expanse of cerulean skies -
            welcome to the Algerian Sahara, a land of unparalleled beauty and
            captivating landscapes. As a dedicated traveling agency, we are
            thrilled to present an extraordinary journey that promises to be an
            unforgettable adventure.
          </p>
        </div>
      </div>
      <div className="container m-10 grid grid-cols-2">
        <div className="m-20">
          <p className=" text-5xl font-bold px-1 pb-2 pt-8">Oran Tour</p>
          <p className=" text-xl p-1">
            Best Places to visite in the Capital of ouest Algeria
          </p>
          <p className=" text-lg px-1 py-8 my-8">
            Where History and Sea Embrace, fellow explorers! Are you on
            the lookout for a destination that weaves together the charm of
            history, the melody of the sea, and the warmth of local culture?
            Your search ends here with the captivating city of Oran in Algeria.
            Our travel agency is excited to introduce you to the undeniable
            allure of this remarkable gem.
          </p>
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="grid grid-cols-2 gap-2">
            <img src={r5} alt="" className="w-full h-auto" />
            <img src={r2} alt="" className="w-full h-auto" />

            <img src={r9} alt="" className="w-full h-auto pt-1" />
            <img src={r7} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
