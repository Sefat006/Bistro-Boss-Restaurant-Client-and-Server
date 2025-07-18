import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { id: 1, img: '/src/assets/home/01.jpg' },
  { id: 2, img: '/src/assets/home/02.jpg' },
  { id: 3, img: '/src/assets/home/03.png' },
  { id: 4, img: '/src/assets/home/04.jpg' },
  { id: 5, img: '/src/assets/home/05.png' },
//   { id: 6, img: '/src/assets/home/06.png' },
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="h-[400px] md:h-[550px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
