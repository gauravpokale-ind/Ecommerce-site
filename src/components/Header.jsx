import React from 'react'
import './style.css'
import './header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import {searchItm} from '../redux/features/cartSlice'

export default function Header({ setQuery }) {

  const { carts } = useSelector((state) => state.allCart)
  console.log(carts);


  return (
    <div>
      <Navbar className='header' >
        <Container>
          <NavLink to='/' className="text-decoration-none text-light px-2">
            <h1 className='swad'  >Indian cuisine</h1>
          </NavLink>
          {/* <span className='searchIcn'><i class="fa-solid fa-magnifying-glass"></i></span> */}
          <div className="search">
            <input className='searchBx' type="text" placeholder="search"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}>
            </input>
          </div>
          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
            <div id='ex4'>
              <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                <i class="fa-solid fa-cart-shopping" ></i>
              </span>
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </div>
  )
}


