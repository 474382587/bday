import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { GiftFilled } from '@ant-design/icons';

import Avatar from '../../images/ka.jpg';
import Coco1 from '../../images/k1.jpg';
import Coco2 from '../../images/k2.jpg';
import Coco3 from '../../images/k3.jpg';
import Coco4 from '../../images/k4.jpg';
import Coco5 from '../../images/k5.jpg';
// import Coco6 from '../../images/coco6.jpg';
// import Coco7 from '../../images/coco7.jpg';
// import Coco8 from '../../images/coco8.jpg';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Wish from '../../components/Wish';
const imageArr = [Coco1, Coco5, Coco2, Coco3, Coco4];

SwiperCore.use([Autoplay]);

const Kit = () => {
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
          <h1 className="headline">回国秒变海王的K哥 ~</h1>
          <div className="image-container">
            <img width={200} src={Avatar} alt="Coco" />
            <p className="excerpt">盗版米其林</p>
          </div>
          <h1>
            祝你生日快乐~ 来年一定也要
            <span className="em">海海森森</span>哦 ~ ~ ~
          </h1>

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
              src="http://www.ihaoge.net/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_202341063&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3"
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
          phoneNumber={process.env.REACT_APP_KIT}
          avatar={Avatar}
          name={'海王K哥'}
        />
      )}
    </>
  );
};

export default Kit;
