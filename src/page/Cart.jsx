import React from "react";
import CartChecout from "./CartChecout";
import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { clean } from "../Redux/Cartslice";

export default function Cart() {
  const { carItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="shadow-2xl m-4 p-3">
      <div>
        <h1 className="text-center font-serif text-3xl font-bold">Cart Item</h1>
      </div>
      {carItems.length === 0 ? (
        <div>Your cart is Empty</div>
      ) : (
        <div>
          <div>
            {carItems.map((cartitem) => (
              <CartChecout key={cartitem.id} cartitem={cartitem} />
            ))}
          </div>
          <div className="flex items-center justify-center space-x-10 uppercase text-xl my-9 py-4 border-t-4">
            <div className="font-semibold">
              {" "}
              TOTAL cost :{" "}
              <span className="font-bold font-serif">${total}</span>
            </div>
            <div>
              <BsFillTrashFill
                size={30}
                onClick={() => dispatch(clean(carItems))}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
