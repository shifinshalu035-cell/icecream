import chocolate from "../assets/chocolate.png";
import mango from "../assets/mago.png";
import strawberry from "../assets/strawberry.png";
import vanilla from "../assets/vanilla.png";
import bg from "../assets/bg.jpeg";

function Categories() {
  return (
    <div className="bg-[#F6F1E9] min-h-screen py-10">
    
<section className="bg-yelloe-500 ">
  <div className=" p-40 bg-purple-200  rounded-tl-4xl rounded-br-3xl  relative overflow-hidden">
    <img
      src={bg}
      alt="picture"
      className="absolute top-0 right-0 left-0 opacity-30"
    />
    <p>
          Experience a new way to enjoy ice cream. Crafted with carefully
      selected ingredients, our ice cream contains beneficial
      prebiotics and probiotics that support digestive wellness.
      Free from added sugar and artificial flavors, it delivers pure
      taste and creamy goodness in every bite.
    </p>
  </div>
</section>
<nav>
  <div className="bg-amber-600 flex justify-center items-center  rounded-2xl opacity-20  fixed ">
    <ul className="fixed flex gap-10"  >
      <li>HOME</li>
      <li>LOGIN</li>
      <li>ABOUT</li>
    </ul>
  </div>
</nav>

    
      <h1 className=" flex justify-center textalign-center  ">
        Categories
      </h1>

  
      <div className="max-w-6xl mx-auto gap-8 mt-12 px-5">
        
      
        <div className=" rounded-xl p-5 text-center ">
          <img
            src={chocolate}
            alt="Chocolate Ice Cream"
            className="w-full h-60 object-cover rounded-lg"
          />
          <p className="mt-4 ">
            Chocolate 🍫
          </p>
        </div>

        
        <div className=" rounded-xl p-5 text-center">
          <img
            src={mango}
            alt="Mango Ice Cream"
            className="w-full h-60 object-cover rounded-lg"
          />
          <p className="mt-4  ">
            Mango 🥭
          </p>
        </div>

        
        <div className=" rounded-xl p-5 text-center ">
          <img
            src={vanilla}
            alt="Vanilla Ice Cream"
            className="w-full h-60 object-cover  rounded-lg"
          />
          <p className="mt-4 text-xl">
            Vanilla 🍦
          </p>
        </div>

        
        <div className=" rounded-xl  p-5 text-center">
          <img
            src={strawberry}
            alt="Strawberry Ice Cream"
            className="w-full h-60 object-cover rounded-lg"
          />
          <p className="mt-4 text-xl ">
            Strawberry 🍓
          </p>
        </div>

      </div>
    </div>
  );
}

export default Categories;