import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { GiftFilled } from '@ant-design/icons';

import Avatar from '../../images/honghao.png';
import Honghao1 from '../../images/hh1.jpg';
import Honghao2 from '../../images/hh2.jpg';
import Honghao3 from '../../images/hh3.jpg';
import Honghao4 from '../../images/hh4.jpg';
import Honghao5 from '../../images/hh5.jpg';
import Honghao6 from '../../images/hh6.jpg';
import Honghao8 from '../../images/hh8.jpg';
import Honghao9 from '../../images/hh9.jpg';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Wish from '../../components/Wish';
const imageArr = [
  Honghao6,
  Honghao8,
  Honghao5,
  Honghao9,
  Honghao1,
  Honghao2,
  Honghao3,
  Honghao4,
];

SwiperCore.use([Autoplay]);

const Honghao = () => {
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
          <h1 className="headline">只是有点多情的纯种好男人 ~</h1>
          <div className="image-container">
            <img width={200} src={Avatar} alt="Coco" />
            <p className="excerpt">他不是渣 只是爱的人多了亿点点</p>
          </div>
          <h1>
            祝你生日快乐~ 来年一定也要
            <span className="em">幸福安康</span>哦 ~ ~ ~
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
              src={
                process.env.NODE_ENV === 'development'
                  ? 'http://ip.h5.ra01.sycdn.kuwo.cn/f632d7227ef2febe1cc7350fea6b3df7/61b65f65/resource/n1/128/53/96/185017203.mp3'
                  : process.env.REACT_APP_AUDIO_URL_HONGHAO
              }
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>

          <div className="wish">
            {countDown > 0 && <div>{countDown} 秒后 - 精彩继续！</div>}
            {countDown < 1 && (
              <div
                onClick={() => {
                  setShowWish(true);
                }}
              >
                来许个愿吧~ <GiftFilled />
              </div>
            )}
          </div>
        </div>
      )}
      {showWish && (
        <Wish
          phoneNumber={process.env.REACT_APP_HONGHAO}
          avatar={Avatar}
          name={'非典型渣男'}
        />
      )}
    </>
  );
};

export default Honghao;
