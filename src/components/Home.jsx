import React, { useState } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardData';
import { addToCart } from '../redux/features/cartSlice'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export default function Home({query}) {

  const [cartData, setCartData] = useState(Cardsdata)

  const dispatch = useDispatch()

  // add to cart

  const send = (e) => { 
    dispatch(addToCart(e))
   
      toast.success("item added in cart"),10
   }

// const [query,setQuery]=useState('')

const searchItem=cartData.filter((ele)=>
  ele.dish.toLowerCase().includes(query))

  return (
    <> 
    
      <section className='item_section mt-4 container'>
        <h2 className='px-4' style={{ fontWeight: 500 }}>Available Food items</h2>

        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {
            searchItem.map((element, index) => {
              return (
                <>
               
                  <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                    <Card.Img variant="top" className='cd' src={element.imgdata} />

                    <div className="card_body">
                      <div className="upper_data d-flex justify-content-between align-items-center">
                        <h4 className="mt-2">{element.dish}</h4>
                        <span>{element.rating} ★</span>
                      </div>
                      <div className="lower_data d-flex justify-content-between ">
                        <h5 className="mt-2">{element.address}</h5>
                        <span>₹ {element.price}</span>
                      </div>
                      <div className="extra"></div>

                      <div className="last_data d-flex justify-content-between align-items-center">
                      <i class="fa-solid fa-arrow-trend-up"></i>
                        <button style={{ width: "150px", background: "#ff3054db", borderRadius: "3px", border: "none" }} variant='outeline-light'
                          className='mt-2 mb-2'
                          onClick={() => send(element)}
                        >Add to Cart</button>
                        <img src={element.delimg} className="laimg" alt='' />
                      </div>
                    </div>
                  </Card>
                </>
              )
            })
          }

        </div>
      </section>
    </>
  )
}


