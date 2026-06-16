import chocolate from "../assets/chocolate.png";
import vanilla from "../assets/vanilla.png";
import strawberry from "../assets/strawberry.png";
import mango from "../assets/mago.png";
import title from "../assets/title.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "../assets/man.png";

import picture4 from "../assets/pic4.png";


function Hero(){
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true 
    });
  },[]);
 
return (

    <>
      
      <section  className="  bg-[#dbd1c0] py-0.5">
       
        <div className="  hidden lg:flex justify-between items-center py-1 h-20 ">
           <img src={logo} alt="company logo" className="w-35 h-35 object-contain gap-20 hover:scale-120 transition" />
          <ul className="flex items-center gap-30 text-lg  mt-0 ">
            
            <li className="hover:scale-120 transition">Home</li>
            <li className="hover:scale-120 transition">About</li>
            <li className="hover:scale-120 transition">Register</li>

            <img
              src={picture4}
              alt="logo"
              className="h-16 w-16 object-cover"
            />
          </ul>
        </div>
      </section>

      
      <section className="min-h-screen bg-[#F6F1E9] flex items-center">
        <div className="max-w-7xl mx-auto px-8 text-center">

          
          <h1
  data-aos="fade-left"
  className=" text-3xl lg:text-6xl  text-blue-950   Playfair Display leading-tight"
>
  Find your new <br />
  favorite flavor.
</h1>

          
          <p className="text-xl text-gray-700 mt-6 max-w-2xl mx-auto">
            Discover delicious ice creams and choose the flavor you're
            craving today.
          </p>

          
          <div className="flex justify-center  bg-[#F6F1E9]  w-full ">
            
          </div>

          
          <div className="flex flex-col items-center gap-10 mt-10 w-full lg:1/2">

            <button className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
              Explore Flavors
            </button>

            <div className="flex  justify-center gap-6">
              <img
                src={chocolate}
                alt="Chocolate"
                className="h-28 w-28 object-cover rounded-xl hover:scale-120 transition "
              />

              <img
                src={strawberry}
                alt="Strawberry"
                className="h-28 w-28 object-cover rounded-xl hover:scale-120 transition"
              />
   
              <img
                src={vanilla}
                alt="Vanilla"
                className="h-28 w-28 object-cover rounded-xl sh hover:scale-120 transition"
              />

              <img
                src={mango}
                alt="Mango"
                className="h-28 w-28 object-cover rounded-xl shadow-md hover:scale-120 transition"
              />
            </div>
          </div>

          
          <div className="mt-12 max-w-2xl  lg:max-w-4xl mx-auto " >
            <p className="text-gray-700 leading-relaxed text-center" data-aos="fade-right">
              Enjoy a delicious and creamy ice cream that not only satisfies
              your sweet cravings but also supports your digestive wellness.
              Enriched with beneficial probiotics and nourishing prebiotics,
              this ice cream helps maintain a healthy gut balance while
              delivering a rich and refreshing taste. Every scoop combines
              indulgence and nutrition, making it a perfect treat for those
              who want to enjoy dessert with added health benefits.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}


export default Hero;