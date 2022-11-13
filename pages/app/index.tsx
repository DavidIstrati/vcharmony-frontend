import Image from "next/image";
import { useState } from "react";
import {
  RiCloseFill,
  RiHeartFill,
  RiHomeFill,
  RiUserLine,
} from "react-icons/ri";
import { MyResponsiveLine } from "../../components";

const slides = [
  {
    logo: "AirbnbLogo.png",
    pitch: "AirBnbPitch.jpg",
    title: "Airbnb Inc.",
    categories: "Lodging, Network",
    descritpion:
      "Airbnb is a community-based online platform for listing and renting local homes. It connects hosts and travelers and facilitates the process of renting without owning any rooms itself. Moreover it cultivates a sharing-economy by allowing property owners to rent out private flats.",
    businessModel:
      "The Airbnb story started back in 2008, with the two founders, Joe Gebbia and Brian Chesky (Nathan Biecharczyk was invited to join later), and 3 air mattresses in San Francisco, California. Their problem: they couldn’t pay rent. They set up a simple website with a map and rented out three mattresses and promised home-made breakfast. Three people came and they decided to build on it. They refined the website with money from selling cereal boxes during the presidential campaign in 2008, and took high-quality pictures of the rented space to boost click-rates. In the winter of 2012, Airbnb overtakes Hilton Hotels in nights booked. Now, it has over 1,500,000 listings in 34,000 cities and 190 countries. Bookings can be made online and on mobile devices. In 2015, the value of the company was $25.5 billion.",
  },
  {
    logo: "UberLogo.png",
    pitch: "UberPitch.jpg",
    title: "Uber Inc.",
    categories: "Ride Sharing, Network",
    descritpion:
      "Uber is a platform where those who drive and deliver can connect with riders, eaters, and restaurants. In cities where Uber is available, you can use the Uber app to request a ride. When a nearby driver accepts your request, the app displays an estimated time of arrival for the driver heading to your pickup location. The app will notify you when the driver is about to arrive.",
    businessModel:
      "The Uber business model is also known as a multisided platform business model, as it connects drivers (offer) and passengers (demand), in order to offer cheaper transportation and an additional source of income. According to Dara Khosrowshahi, current CEO of Uber, “Uber accounts for less than 1% of all miles driven globally. Just a small percentage of people in countries where Uber is available have ever used our services”. Still, I am sure that you know very well what this company is, you have probably already used its services and, most likely, you have the app installed on your smartphone.",
  },
];

const PitchPage = () => {
  const [slide, setSlide] = useState(slides[0]);
  const [index, setIndex] = useState(0);
  const changeSlide = () => {
    setSlide(slides[index + 1]);
    setIndex(index + 1);
  };
  return (
    <div className="w-screen h-screen bg-slate-100 flex flex-row">
      <div className="w-60 h-screen bg-white shadow flex flex-col pt-20 px-5">
        <div className="w-full h-16 bg-indigo-500 rounded-md mt-5 flex justify-center items-center cursor-pointer">
          <RiHomeFill className="text-lg mr-2 text-white" />
          <span className="text-lg text-white">Pitch Page</span>
        </div>
        <div className="w-full h-16 border border-slate-500 rounded-md mt-5 flex justify-center items-center text-slate-500 cursor-pointer">
          <RiHeartFill className="text-lg mr-2" />
          <span className="text-lg">Matches</span>
        </div>
        <div className="w-full h-16 border border-slate-500 rounded-md mt-5 5 flex justify-center items-center text-slate-500 cursor-pointer">
          <RiUserLine className="text-lg mr-2" />
          <span className="text-lg">Account</span>
        </div>
      </div>
      <div className="w-full h-hull px-40 pt-20 pb-20 flex flex-col">
        <div className="w-full h-full relative flex flex-col">
          <div className="w-full h-2/3 bg-white rounded-md border border-slate-300 flex flex-col p-10">
            <div className="h-2/5 w-full text-black flex flex-row items-stretch">
              <div className="flex flex-col justify-center items-start h-20">
                  <Image src={`/demo/${slide.logo}`} width={50} height={50} alt={""} />

              </div>
              <div className="flex flex-col justify-center items-start h-20 ml-4">
                <span className="font-bold text-3xl">{slide.title}</span>
                <span className="font-normal text-sm">{slide.categories}</span>
              </div>
            </div>
            <div className="h-3/5 w-full">
              <span className="font-bold text-black">{slide.descritpion}</span>
            </div>
          </div>
          <div className="w-full h-1/3 flex flex-row my-6">
            <div className="w-1/3 h-full bg-white rounded-md border border-slate-300 mr-2 p-4 px-6 pt-3  cursor-pointer transition-all duration-300 ease-in-out scale-100 hover:scale-105">
              <div className="border border-slate-200 rounded-lg overflow-hidden max-w-full">

                  <Image
                    src={`/demo/${slide.pitch}`}
                    className="rounded-lg max-w-full max-h-full"
                    layout="fill"
                    alt={""}
                  ></Image>

              </div>
            </div>
            <div className="w-1/3 h-full bg-white rounded-md border border-slate-300 mx-2 p-4  cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <div className="w-full h-1/5 text-black font-bold">
                Financials
              </div>
              <div className="flex-inline w-full h-4/5 items-start">
                <MyResponsiveLine />
              </div>
            </div>
            <div className="w-1/3 h-full bg-white rounded-md border border-slate-300 ml-2 p-4  cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              <div className="w-full h-1/5 text-black font-bold">
                Business Model
              </div>
              <div className="flex-inline h-4/5 items-start text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-slate-500 to-white">
                {slide.businessModel.slice(0, 420)}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-40 flex flex-row">
          <div
            className="w-1/2 h-20 mx-4 rounded-md bg-black flex justify-center items-center  cursor-pointer transition duration-300 ease-in-out hover:shadow-md hover:scale-105"
            onClick={() => changeSlide()}
          >
            <RiCloseFill className="text-2xl mr-2 text-white" />
            <span className="text-white text-xl font-bold">Next</span>
          </div>
          <div
            className="w-1/2 h-20 mx-4 rounded-md bg-gradient-to-r from-orange-400 to-red-400 flex justify-center items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-md hover:scale-105"
            onClick={() => changeSlide()}
          >
            <RiHeartFill className="text-2xl mr-2 text-white" />
            <span className="text-white text-xl font-bold">Like</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchPage;
