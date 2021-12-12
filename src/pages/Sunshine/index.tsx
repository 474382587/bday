import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { GiftFilled } from '@ant-design/icons';

import Avatar from '../../images/sunshine.png';
import Sunshine1 from '../../images/ss1.jpg';
import Sunshine2 from '../../images/ss2.jpg';
import Sunshine3 from '../../images/ss3.jpg';
import Sunshine4 from '../../images/ss4.jpg';
import Sunshine5 from '../../images/ss5.jpg';
import Sunshine6 from '../../images/ss6.jpg';
import Sunshine7 from '../../images/ss7.jpg';
import Sunshine8 from '../../images/ss8.jpg';
import Sunshine9 from '../../images/ss9.jpg';
import Sunshine10 from '../../images/ss10.jpg';
import Sunshine11 from '../../images/ss11.jpg';
import Sunshine12 from '../../images/ss12.jpg';
// import Sunshine8 from '../../images/sunshine8.jpg';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Wish from '../../components/Wish';
const imageArr = [
  Sunshine8,
  Sunshine9,
  Sunshine10,
  Sunshine11,
  Sunshine12,
  Sunshine1,
  Sunshine2,
  Sunshine3,
  Sunshine4,
  Sunshine5,
  Sunshine6,
  Sunshine7,
];

SwiperCore.use([Autoplay]);

const Sunshine = () => {
  const [countDown, setCountDown] = useState<number>(45);
  const [showWish, setShowWish] = useState<boolean>(false);
  useEffect(() => {
    if (countDown < 1) return;
    const countInterval = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);
    return () => {
      clearInterval(countInterval);
    };
  }, [countDown]);

  return (
    <>
      {!showWish && (
        <div className="coco">
          <h1 className="headline">不断成长的sun小shine ~</h1>
          <div className="image-container">
            <img width={200} src={Avatar} alt="Coco" />
            <p className="excerpt">只要不网恋就是好孩子的阳光</p>
          </div>
          <h1>
            祝你生日快乐~ 来年一定也要
            <span className="em">不网恋！！！！！！</span>哦 ~ ~ ~
          </h1>
          <h1>K哥想对你说：“爱你永不变吧（？or ！）” </h1>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {imageArr.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-image-container">
                  <img src={image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <audio controls={true} autoPlay={true}>
            <source
              src="http://fsios.hw.kugou.com/202112120444/411bc5f9659506e3a067453656095fcc/KGTX/CLTX001/9ba5834c9bbb2701d472c58d8a61fb41.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          <h3 style={{ textAlign: 'center', marginBottom: 40 }}>
            《别网恋，下秒就奔现》
          </h3>
          <div className="wish">
            {countDown > 0 && <div>{countDown} 秒后 - 精彩继续！</div>}
            {countDown < 1 && (
              <div
                onClick={() => {
                  setShowWish(true);
                }}
              >
                来许个愿吧~{' '}
                <span className="spark">
                  <GiftFilled />
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      {showWish && (
        <Wish
          phoneNumber={process.env.REACT_APP_SUNSHINE}
          avatar={Avatar}
          name={'阳光'}
        />
      )}
    </>
  );
};

export default Sunshine;
