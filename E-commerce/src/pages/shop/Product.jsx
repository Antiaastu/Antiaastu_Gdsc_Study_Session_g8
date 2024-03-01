import React from 'react'
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const {id, productName, price, productImage} =props.data;
    const {}=useContext(ShopContext);
  return (
    <div className="product">
        <img src={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>{price} birr</p>
        </div>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add To Cart</ button>
    </div>
  )
}
