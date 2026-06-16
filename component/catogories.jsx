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
    <p data-aos="zoom-in">
          Experience a new way to enjoy ice cream. Crafted with carefully
      selected ingredients, our ice cream contains beneficial
      prebiotics and probiotics that support digestive wellness.
      Free from added sugar and artificial flavors, it delivers pure
      taste and creamy goodness in every bite.
    </p>
  </div>
</section>

    
      <h1 className=" flex justify-center textalign-center  ">
        Categories
      </h1>

  
      <div className="max-w-6xl mx-auto gap-8 mt-12 px-5">
        
      
        <div className=" rounded-xl p-5 text-center lg-mx-w-full lg:max-w-6xl" data-aos = "zoom-in">
          <img
            src={chocolate}
            alt="Chocolate Ice Cream"
            className="w-full h-60 object-cover rounded-lg"
          />
          <p className="mt-4  ">
            Chocolate 🍫
          </p>
          <p>
            "Our Chocolate Flavour Ice Cream is a rich and creamy delight made
             for true chocolate lovers. Crafted with premium cocoa, it offers a 
             smooth texture and a deep, indulgent chocolate taste in every scoop.
              Perfect for satisfying your sweet cravings, this classic flavor
             delivers a deliciously satisfying experience with every bite." 🍫🍦
          </p>
       
        </div>

        
        <div className=" rounded-xl p-5 text-center" data-aos="zoom-in">
          <img
            src={mango}
            alt="Mango Ice Cream"
            className="w-full h-60 object-cover rounded-lg"
          />
          <p className="mt-4  ">
            Mango 🥭
          </p>
             <p>"Our Mango Flavour Ice Cream is a delicious blend of creamy texture a
            nd the sweet, tropical taste of ripe mangoes. Made with high-quality ingredients,
             every scoop delivers a refreshing burst of fruity flavor that melts smoothly in 
             your mouth. It's the perfect treat for mango lovers and 
            a delightful way to enjoy the taste of summer all year round." 🥭🍦</p>
        </div>

        
        <div className=" rounded-xl p-5 text-center "data-aos="zoom-in">
          <img
            src={vanilla}
            alt="Vanilla Ice Cream"
            className="w-full h-60 object-cover  rounded-lg"
          />
          <p className="mt-4 text-xl">
            Vanilla 🍦
          </p>
          <p>
            "Our Vanilla Flavour Ice Cream is a timeless classic with a rich,
             creamy texture and a smooth vanilla taste. Made with carefully selected ingredients,
              it delivers a light and refreshing sweetness that everyone can enjoy. Simple, 
              delicious, and satisfying,
             it's the perfect treat for any occasion." 🍦✨
          </p>
        </div>

        
        <div className=" rounded-xl  p-5 text-center"data-aos="zoom-in">
          <img
            src={strawberry}
            alt="Strawberry Ice Cream"
            className="w-full h-60 object-cover rounded-lg"
          />
          <p className="mt-4 text-xl ">
            Strawberry 🍓
          </p>
          <p className="text-bold">
            "Our Strawberry Flavour Ice Cream is a delightful combination of creamy goodness and the sweet, 
            fruity taste of fresh strawberries. Bursting with refreshing flavor and a smooth texture, 
            every scoop offers a deliciously sweet experience.
             It's the perfect treat for anyone who loves the taste of juicy strawberries." 🍓🍦✨
          </p>
        </div>
       

      </div>
    </div>
  );
}

export default Categories;