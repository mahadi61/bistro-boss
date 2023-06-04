import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="my-8"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-14 text-white">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-14 text-white">
            soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-14 text-white">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-14 text-white">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-14 text-white">
            pizza
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
