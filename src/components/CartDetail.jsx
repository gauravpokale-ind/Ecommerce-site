import React, { useEffect, useState } from 'react'
import './cartStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart, removeSingleItems , emptyCartItem } from '../redux/features/cartSlice'
import toast from 'react-hot-toast';

export default function CartDetail() {

  const { carts } = useSelector((state) => state.allCart)

  const[totalprice,setPrice]=useState(0)

  const [totalQunantity,setTotalQuantity]=useState(0)

  const dispatch = useDispatch()

  // add to cart

  const handleIncrement = (e) => {
    dispatch(addToCart(e))
  }

  // remove to singlr item from cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e))
    toast.success("item removed ")
  }

  // remove single item

  const handleSingleDecrement = (e) => {
    dispatch(removeSingleItems(e))
  }

  // empty cart
  const emptycart=()=>{
    dispatch(emptyCartItem())
    toast.success("cart is empty")
  }

  // count total price
  const total=()=>{
    let totalprice=0
    carts.map((elem,ind)=>{
      totalprice=elem.price * elem.qnty + totalprice
    })
    setPrice(totalprice)
  }

  useEffect(()=>{
    total()
  },[total])

  // total qunatity
  const totalQty=()=>{
    let totalQunantity=0
    carts.map((elem,ind)=>{
      totalQunantity=elem.qnty + totalQunantity
    })
    setTotalQuantity(totalQunantity)
  }

  useEffect(()=>{
    totalQty()
  },[totalQty])

  return (
    <div className="row justify-content-center m-0">
      <div className="col-md mt-5 mb-5 cardsDetails">
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className='card-header-flex'>
              <h5 className='text-white m-0'>Cart Calculation {carts.length > 0 ? `(${carts.length})` : ""} </h5>
              {
                carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm' onClick={emptycart} >
                  <i class="fa-solid fa-trash"></i>
                  <span> Empty Cart</span>
                </button>
                  : ""
              }

            </div>
          </div>
          <div className="card-body p-0">
            {
              carts.length === 0 ? <table className='table cart-table mb-0'>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <div className="cart-empty">
                        <i class="fa fa-shopping-cart"></i>
                        <p>Your cart is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> :
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qnty</th>
                      <th className='text-right'><span id='amount' className='amount'>Total Amount</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      carts.map((data, index) => {
                        return (
                          <>
                            <tr>
                              <td><button className='prdct-delete' onClick={() => handleDecrement(data.id)} >
                                <i class="fa-solid fa-trash"  ></i>
                              </button></td>
                              <td><div className='product-img' alt=""><img src={data.imgdata} alt="" /> </div></td>
                              <td><div className='product-name'><p>{data.dish}</p></div></td>
                              <td>{data.price}</td>
                              <td><div className="prdct-qty-container">
                                <button className='prdct-qty-btn' onClick={data.qnty <= 1 ? () => handleDecrement(data.id) : () => handleSingleDecrement(data)} ><i class="fa fa-minus"></i></button>

                                <input type="text" disabled className='qty-input-box' value={data.qnty} />
                                <button className='prdct-qty-btn' onClick={() => handleIncrement(data)}><i class="fa fa-plus"></i></button>
                              </div>
                              </td>
                              <td className="text-right">{data.qnty * data.price}</td>
                            </tr>
                          </>
                        )
                      })
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <th >&nbsp;  </th>
                      <th colSpan={3}>&nbsp;  </th>
                      <th >Items in Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'> {totalQunantity} </span></th>
                      <th className='text-right'>Total Price <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalprice}</span></th>
                    </tr>
                  </tfoot>
                </table>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

