// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import brochures from '../../assets/brochures.jpg'
import sosa from '../../assets/3.jpg'
import panday from '../../assets/2.jpg'
import sushi from '../../assets/1.jpg'
import meem from '../../assets/meem.png'
import insta from '../../assets/insta.jpg'
import broch1 from '../../assets/broch1.jpg'
import broch2 from '../../assets/broch2.jpg'
import broch3 from '../../assets/broch3.jpg'
import broch4 from '../../assets/broch4.jpg'
import marketing from '../../assets/marketing.png'
import real from '../../assets/real.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Projects() {
  return (
    <div className='projects'>
    <div className='title'>
        <h3>Proiectele noastre</h3>
    </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={sosa} alt='sosa' /></SwiperSlide>
        <SwiperSlide><img src={sushi} alt='sushi' /></SwiperSlide>
        <SwiperSlide><img src={panday} alt='panday' /></SwiperSlide>
        <SwiperSlide><img src={brochures} alt='brochures' /></SwiperSlide>
        <SwiperSlide><img src={meem} alt='meem' /></SwiperSlide>
        <SwiperSlide><img src={insta} alt='insta' /></SwiperSlide>
        <SwiperSlide><img src={broch1} alt='broch1' /></SwiperSlide>
        <SwiperSlide><img src={broch2} alt='broch2' /></SwiperSlide>
        <SwiperSlide><img src={broch3} alt='broch3' /></SwiperSlide>
        <SwiperSlide><img src={broch4} alt='broch4' /></SwiperSlide>
        <SwiperSlide><img src={marketing} alt='marketing' /></SwiperSlide>
        <SwiperSlide><img src={real} alt='real' /></SwiperSlide>
      </Swiper>
    </div>
  );
}
