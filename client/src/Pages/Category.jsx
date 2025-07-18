import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from './SectionTitle';


const Category = () => {
    return (
  <div className='p-10 bg-white/30 mx-auto '>
    <SectionTitle 
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
    ></SectionTitle>
    <Swiper
    slidesPerView={5}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper rounded-2xl"
  >
        <SwiperSlide><img src="/src/assets/home/slide1.jpg" alt="" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide2.jpg" alt="" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide3.jpg" alt="" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide4.jpg" alt="" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide5.jpg" alt="" className='rounded-xl'/></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide6.jpg" alt="" className='rounded-xl'/></SwiperSlide>
        
  </Swiper>

  </div>
    );
};

export default Category;