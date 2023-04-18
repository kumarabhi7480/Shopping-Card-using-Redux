import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../store/cartSlice";
import "./ProductCard.css";
import { useEffect } from "react";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList);
  const {name, price, image} = product;

  useEffect(()=>{
     
  })

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={()=>dispatch(add(product))}>Add To Cart</button>
      </div>
    </div>
  )
}
