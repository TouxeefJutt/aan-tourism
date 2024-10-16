import React from 'react'
import Image from "next/image";
import logo from '/public/images/logo.png'; // Direct path from the public folder
import searchIcon from '/public/images/search.png'; // Direct path from the public folder
import shopIcon from '/public/images/shop.png'; // Direct path from the public folder
import starsIcons from '/public/images/stars.png'; // Direct path from the public folder
import tentsImage from '/public/images/tents.png'; // Direct path from the public folder
import carImage from '/public/images/car.jpeg'; // Direct path from the public folder
import groundImage from '/public/images/ground.jpeg'; // Direct path from the public folder
import buggyImage from '/public/images/buggy.png'; // Direct path from the public folder
import icon1 from '/public/images/icon1.png'; // Direct path from the public folder
import icon2 from '/public/images/icon2.png'; // Direct path from the public folder
import icon3 from '/public/images/icon3.png'; // Direct path from the public folder
import icon4 from '/public/images/icon4.png'; // Direct path from the public folder
import icon5 from '/public/images/icon5.png'; // Direct path from the public folder
import desertImage from '/public/images/desert.png'; // Direct path from the public folder
import lineBreak from '/public/images/lineBreak.png'; // Direct path from the public folder

export default function index() {
  return (
    <>
      <header className="flex items-center px-12">
        <div className="top-bar w-full flex items-center justify-between">
          <div>
            <Image src={logo} alt="image" width={129} height={47} />
          </div>
          <div>
            <ul className="flex items-center gap-8">
              <li>
                <h5 className="menu-item">Top Selling</h5>
              </li>
              <li>
                <h5 className="menu-item">Top Activities</h5>
              </li>
              <li>
                <h5 className="menu-item">Burj Khalifa</h5>
              </li>
              <li>
                <h5 className="menu-item">Desert Safari</h5>
              </li>
              <li>
                <h5 className="menu-item">|</h5>
              </li>
              <li>
                <h5 className="menu-item">Login</h5>
              </li>
              <li>
                <Image src={searchIcon} alt="image" width={22} height={22} />
              </li>
              <li>
                <Image src={shopIcon} alt="image" width={17} height={19} />
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="hero mt-4 mx-24">
        <p className="hero-text">
          Dubai Desert 4x4 Dune Bashing, Self-Ride 60min ATV Quad, Camel
          Ride,Shows,Dinner
        </p>
        <div className="flex py-3 items-center">
          <Image src={starsIcons} alt="image" width={142} height={23} />
          <p className="px-3 flex items-center">45 Reviews</p>
        </div>
        <div className="flex gap-3 hero-content">
          <div className="w-[70%]">
            <div className="flex gap-2">
              <div className="flex flex-col gap-3 w-[17%]">
                <Image
                  src={carImage}
                  alt="image"
                  width={0}
                  height={0}
                  className="object-cover image-size"
                />
                <Image
                  src={groundImage}
                  alt="image"
                  width={0}
                  height={0}
                  className="object-cover image-size"
                />
                <Image
                  src={tentsImage}
                  alt="image"
                  width={0}
                  height={0}
                  className="image-size object-cover"
                />
              </div>
              <div className="w-[83%]">
                <Image
                  src={buggyImage}
                  alt="image"
                  width={0}
                  height={0}
                  className="cover-image"
                />
              </div>
            </div>
            <div className="flex my-5 mx-1 py-5 px-2 hero-expl">
              <div className="w-[29%]">
                <Image src={desertImage} alt="image" width={0} height={0} />
              </div>
              <div className=" pl-2 pr-1 w-[42%]">
                <h3 className="expl-heading">Camel Ride,Shows,Dinner</h3>
                <Image src={starsIcons} alt="image" width={94} height={15} />
                <ul className="marker:text-gray-600 list-disc pl-6">
                  <li>
                    <h5 className="expl-desc pt-3">
                      Get yourself tickets to the award-winning Dubai Frame –
                      the world`s largest picture frame and admire unbeaten
                      views of the city.
                    </h5>
                  </li>
                  <li>
                    <h5 className="expl-desc">
                      On one side, you1ll notice iconic landmarks of modern
                      Dubai, and on the other, you1ll see older parts of the
                      city.
                    </h5>
                  </li>
                  <li>
                    <h5 className="expl-desc">
                      On one side, you`ll notice iconic landmarks of modern
                      Dubai, and on the other, you`ll see older parts of the
                      city.
                    </h5>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  className=""
                  src={lineBreak}
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>
              <div className="w-[29%] pl-5">
                <ul className="flex flex-col gap-2 py-2">
                  <li className="flex gap-2">
                    <Image
                      className="icon-size"
                      src={icon1}
                      alt="icon"
                      width={0}
                      height={0}
                    />
                    <div>
                      <h4 className="about-heading">Free cancellation</h4>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Image
                      className="icon-size"
                      src={icon2}
                      alt="icon"
                      width={0}
                      height={0}
                    />
                    <div>
                      <h4 className="about-heading">Reserve now & pay later</h4>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Image
                      className="icon-size"
                      src={icon3}
                      alt="icon"
                      width={0}
                      height={0}
                    />
                    <div>
                      <h4 className="about-heading">Duration 1 - 3 hours</h4>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Image
                      className="icon-size"
                      src={icon4}
                      alt="icon"
                      width={0}
                      height={0}
                    />
                    <div>
                      <h4 className="about-heading">Host or greeter</h4>
                    </div>
                  </li>
                </ul>
                <div className="mt-5">
                  <h5 className="price-desc">Starting from</h5>
                  <h3 className="price"> AED 69.00</h3>
                </div>
                <button className='btn w-full py-1 mt-4'><h5 className='btn-text'>Check Availability</h5></button>
              </div>
            </div>
            <div className="flex my-5 mx-1 py-5 px-2 hero-expl">
              <div className="w-[29%]">
                <Image src={desertImage} alt="image" width={0} height={0} />
              </div>
              <div className=" pl-2 pr-1 w-[42%]">
                <h3 className="expl-heading">Camel Ride,Shows,Dinner</h3>
                <Image src={starsIcons} alt="image" width={94} height={15} />
                <ul className="marker:text-gray-600 list-disc pl-6">
                  <li>
                    <h5 className="expl-desc pt-3">
                      Get yourself tickets to the award-winning Dubai Frame –
                      the world`s largest picture frame and admire unbeaten
                      views of the city.
                    </h5>
                  </li>
                  <li>
                    <h5 className="expl-desc">
                      On one side, you1ll notice iconic landmarks of modern
                      Dubai, and on the other, you1ll see older parts of the
                      city.
                    </h5>
                  </li>
                  <li>
                    <h5 className="expl-desc">
                      On one side, you`ll notice iconic landmarks of modern
                      Dubai, and on the other, you`ll see older parts of the
                      city.
                    </h5>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  className=""
                  src={lineBreak}
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>
              <div className="w-[29%] pl-5">
                <ul className="flex flex-col gap-2 py-2">
                  <li className="flex gap-2">
                    <Image
                      className="icon-size"
                      src={icon1}
                      alt="icon"
                      width={0}
                      height={0}
                    />
                    <div>
                      <h4 className="about-heading">Free cancellation</h4>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Image
                      className="icon-size"
                      src={icon2}
                      alt="icon"
                      width={0}
                      height={0}
                    />
                    <div>
                      <h4 className="about-heading">Reserve now & pay later</h4>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Image
                      className="icon-size"
                      src={icon3}
                      alt="icon"
                      width={0}
                      height={0}
                    />
                    <div>
                      <h4 className="about-heading">Duration 1 - 3 hours</h4>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Image
                      className="icon-size"
                      src={icon4}
                      alt="icon"
                      width={0}
                      height={0}
                    />
                    <div>
                      <h4 className="about-heading">Host or greeter</h4>
                    </div>
                  </li>
                </ul>
                <div className="mt-5">
                  <h5 className="price-desc">Starting from</h5>
                  <h3 className="price"> AED 69.00</h3>
                </div>
                <button className='btn w-full py-1 mt-4'><h5 className='btn-text'>Check Availability</h5></button>
              </div>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="about-activity px-3 py-6">
              <h3 className="about-text">About this activity</h3>
              <ul className="flex flex-col gap-3 py-5">
                <li className="flex gap-2">
                  <Image
                    className="icon-size"
                    src={icon1}
                    alt="icon"
                    width={0}
                    height={0}
                  />
                  <div>
                    <h4 className="about-heading">Free cancellation</h4>
                    <p className="about-desc">
                      Cancel up to 24 hours in advance for a full refund
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Image
                    className="icon-size"
                    src={icon2}
                    alt="icon"
                    width={0}
                    height={0}
                  />
                  <div>
                    <h4 className="about-heading">Reserve now & pay later</h4>
                    <p className="about-desc">
                      Keep your travel plans flexible — book your spot and pay
                      nothing today.
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Image
                    className="icon-size"
                    src={icon3}
                    alt="icon"
                    width={0}
                    height={0}
                  />
                  <div>
                    <h4 className="about-heading">Duration 1 - 3 hours</h4>
                    <p className="about-desc">
                      Check availability to see starting times.
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Image
                    className="icon-size"
                    src={icon4}
                    alt="icon"
                    width={0}
                    height={0}
                  />
                  <div>
                    <h4 className="about-heading">Host or greeter</h4>
                    <p className="about-desc">English</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Image
                    className="icon-size"
                    src={icon5}
                    alt="icon"
                    width={0}
                    height={0}
                  />
                  <div>
                    <h4 className="about-heading">Audio guide included</h4>
                    <p className="about-desc">English</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
