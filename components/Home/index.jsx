import React from 'react'
import Image from "next/image";
import logo from '/public/images/logo.png'; // Direct path from the public folder

export default function index() {
  return (
    <>
      <header>
        <div className="top-bar flex justify-between">
          {/* <Image alt="logo"> </Image> */}
          <Image src={logo} alt="logo" width={129} height={47} />
          <ul className='flex items-center'>
            <li>
            <h5 className='menu-item'>
              Top Selling
            </h5>
            </li>
            <li>
              Top Activities
            </li>
            <li>
              Burj Khalifa
            </li>
            <li>
              Desert Safari
            </li>
            <li>
              |
            </li>
            <li>
              Login
            </li>
          </ul>
        </div>
      </header>

      <div>index</div>
    </>
  );
}
