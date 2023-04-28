import React, { useState } from "react";
import data from "./data";
import FoodShope from "./FoodShope";
import { BsCupStraw } from "react-icons/bs";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
function Food() {
  const [Food, setFood] = useState(data);
  const filter = (catagory) =>{
    setFood(
      data.filter((items)=> items.catagory ===catagory)
    )
  }
  return (
    <div className=" w-screen items-center   ">
      
     <div>
     <h2 className="uppercase font-serif font-bold text-2xl text-center my-2">Filter Type</h2>
      <div className="w-full flex items-center justify-center m-4   space-x-5 text-white">
        <button  onClick={()=>filter("dirnks")} className=" bg-orange-500 py-1 px-2 rounded-lg" >
          <BsCupStraw size={30}  />
        </button>
        <button onClick={()=>filter("pizza")} className=" bg-orange-500 py-1 px-2 rounded-lg" >
          <FaPizzaSlice size={30}  />
        </button>
        <button onClick={()=> filter("Hamburger")} className=" bg-orange-500 py-1 px-2 rounded-lg" >
          <GiHamburger size={30}  />
        </button>
      </div>
     </div>
      <div className="grid grid-cols-3 gap-2 m-5">
        {Food.map((items) => (
          <FoodShope key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
}

export default Food;
