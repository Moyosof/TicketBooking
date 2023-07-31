import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import './IndexPage.css';
import img1 from "../assets/ticks.jpg";
import img2 from "../assets/ticketshop.jpg";
import img3 from "../assets/show.jpg";
import img4 from "../assets/noiseporn.jpg";
import img5 from "../assets/microphone.jpg";


const IndexPage = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(goToNextSlide, 3000);
    return() => clearInterval(autoPlayInterval);
  }, []);

  return (
    <div>
       
    <div className="slider-container">
      <div className="slider"  
        >
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === currentIndex ? 1 : 0, 
              transform: `translateX(-${currentIndex * 100}%)`, 
            }}
          >
            <div className="slide-content">
              
              <Link to ={'/ticket'}><button>
                Click here to get Ticket
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='w-full p-4 flex flex-wrap justify-between'>
      <div className='card'>
        <img src={img2} alt="" className='w-full rounded-lg' />
        <div className='overlay'>
          <h1 className='text-primary font-semibold'>
            Ticket shop
          </h1>
          <p className='text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium dolorem consectetur.
          </p>
        </div>
      </div>

      <div className='card'>
        <img src={img3} alt="" className='w-full rounded-lg'  />
        <div className='overlay'>
          <h1 className='text-primary font-semibold'>
            Ticket shop
          </h1>
          <p className='text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium dolorem consectetur.
          </p>
        </div>
      </div>
      <div className='card'>
        <img src={img5} alt="" className='w-full rounded-lg' />
        <div className='overlay'>
          <h1 className='text-primary font-semibold'>
            Ticket shop
          </h1>
          <p className='text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium dolorem consectetur.
          </p>
        </div>
      </div>
      <div className='card'>
        <img src={img4 } alt="" className='w-full rounded-lg' />
        <div className='overlay'>
          <h1 className='text-primary font-semibold'>
            Ticket shop
          </h1>
          <p className='text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium dolorem consectetur.
          </p>
        </div>
      </div>
    </div>

    <div className='hidden lg:w-full lg:p-4 lg:flex lg:flex-wrap lg:justify-between'>
      <div className='card'>
        <img src={img2} alt="" className='w-full rounded-lg' />
        <div className='overlay'>
          <h1 className='text-primary font-semibold'>
            Ticket shop
          </h1>
          <p className='text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium dolorem consectetur.
          </p>
        </div>
      </div>

      <div className='card mt-32 pt-35'>
        <img src={img3} alt="" className=' lg:w-full lg:rounded-lg'  />
        <div className='overlay'>
          <h1 className='text-primary font-semibold'>
            Ticket shop
          </h1>
          <p className='text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium dolorem consectetur.
          </p>
        </div>
      </div>
      <div className='card'>
        <img src={img5} alt="" className='w-full rounded-lg' />
        <div className='overlay'>
          <h1 className='text-primary font-semibold'>
            Ticket shop
          </h1>
          <p className='text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium dolorem consectetur.
          </p>
        </div>
      </div>
      <div className='card'>
        <img src={img4 } alt="" className='w-full rounded-lg' />
        <div className='overlay'>
          <h1 className='text-primary font-semibold'>
            Ticket shop
          </h1>
          <p className='text-white text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium dolorem consectetur.
          </p>
        </div>
      </div>
    </div>

    <div className=' flex justify-center items-center mt-32'>
      <div className=' w-[80%] bg-yellow-100 p-8 rounded-lg lg:h-[300px]'>
        <h2 className=' text-center text-3xl font-bold mb-8'> SUBSCRIBE FOR OUR NEWSLETTER</h2>
        <p className=' text-center text-xl'> Recieve events you actually want to attend in your inbox</p>
        <div className='flex justify-center'>
        <Link> 
        <button className=' mt-10 lg:mt-20 bg-primary text-black rounded-lg py-3 px-6 w-full font-semibold'>Sign Up</button> </Link>

        </div>
      </div>
    
    </div>
    </div>
  )
}

export default IndexPage

