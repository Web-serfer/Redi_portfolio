import React from "react";
import "./testimonials.css";
import clients from "./clients.js";
// Swipe Slider
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h3>Наши клиенты</h3>
      <h2>Отзывы</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map(({ id, img, name, review }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={img} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client-review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
