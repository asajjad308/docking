'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Popup from './Popup';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Nav(props) {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navRef = useRef(null);

  const open = () => {
    setToggle(!toggle);
  };
  function showPopupHandler(e) {
    setShowPopup(true);
    change(e);
  }
  function closePopupHandler(e) {
    setShowPopup(false);
    change(e);
  }
  const change = (e) => {
    let ids = e.target.id;
    ids = Number(ids);
    setActive(ids);

    if (navRef.current) {
      navRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white text-white ">
      <div className="max-w-[1240px] flex justify-between py-[15px]  mx-auto">
        <div className="text-2xl font-heading">My Logo</div>
        {toggle ? (
          <AiOutlineClose
            onClick={open}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={open}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul
          className="hidden md:flex text-white gap-10 
        "
          ref={navRef}
        >
          <li className="text-secondary hover:text-hover-secondary">
            <Link
              href="/"
              id="0"
              onClick={change}
              style={
                active === 0
                  ? {
                      background: 'yellow',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="rentals"
              id="1"
              onClick={change}
              style={
                active === 1
                  ? {
                      background: 'yellow',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Docks Rentals
            </Link>
          </li>
          <li>
            <Link
              href="parkings"
              id="1"
              onClick={change}
              style={
                active === 1
                  ? {
                      background: 'yellow',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              parkings Rentals
            </Link>
          </li>
          <li>
            <Link
              href="/leases"
              id="2"
              onClick={change}
              style={
                active === 2
                  ? {
                      background: 'yellow',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Moring Leasing
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              id="3"
              onClick={change}
              style={
                active === 3
                  ? {
                      background: 'yellow',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              id="4"
              onClick={change}
              style={
                active === 4
                  ? {
                      background: 'yellow',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              About
            </Link>
          </li>
        </ul>
        <ul className="hidden md:flex text-white gap-10">
          <li>
            <button
              id="6"
              onClick={(e) => showPopupHandler(e)}
              style={
                active === 6
                  ? {
                      background: 'yellow',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Login
            </button>
          </li>
        </ul>

        {/* ////////////////////Responsive Menu //////////////////*/}
        <ul
          className={`md:hidden w-full h-screen z-20 text-white fixed bg-black  top-[92px] bg-optional text-primary
        ${toggle ? 'left-[0]' : 'left-[-100%]'}`}
        >
          <li className="p-5 ">
            <Link
              href="/"
              id="7"
              onClick={change}
              style={
                active === 7
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Home
            </Link>
          </li>
          <li className="p-5">
            <Link
              href="shop"
              id="8"
              onClick={change}
              style={
                active === 8
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Shop
            </Link>
          </li>
          <li className="p-5">
            <Link
              href="/contact"
              id="9"
              onClick={change}
              style={
                active === 9
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Contact
            </Link>
          </li>
          <li className="p-5">
            <Link
              href="/about"
              id="10"
              onClick={change}
              style={
                active === 10
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              About
            </Link>
          </li>

          <li className="p-5">
            <Link
              href="/wishlist"
              id="11"
              onClick={change}
              style={
                active === 11
                  ? {
                      background: 'yellow',
                      padding: '8px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Wishlist
            </Link>
          </li>

          <li className="p-5">
            <Link
              href="/login"
              id="13"
              onClick={change}
              style={
                active === 13
                  ? {
                      background: 'yellow',
                      padding: '5px',
                      color: 'black',
                      borderRadius: '8px',
                    }
                  : { background: 'none' }
              }
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
      {showPopup && <Popup closePopupHandler={closePopupHandler} />}
    </div>
  );
}

export default Nav;
