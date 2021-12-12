import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { GiftFilled } from '@ant-design/icons';

import Avatar from '../../images/angel.png';
import Angel1 from '../../images/angel01.jpg';
import Angel2 from '../../images/angel2.jpg';
import Angel3 from '../../images/angel3.png';
import Angel4 from '../../images/angel4.jpg';
import Angel5 from '../../images/angel5.jpg';
// import Coco6 from '../../images/coco6.jpg';
// import Coco7 from '../../images/coco7.jpg';
// import Coco8 from '../../images/coco8.jpg';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Wish from '../../components/Wish';
import Deers from '../../components/Deers';
const imageArr = [Angel5, Angel1, Angel2, Angel3, Angel4];

SwiperCore.use([Autoplay]);

const Angel = () => {
  const [countDown, setCountDown] = useState<number>(45);
  const [showWish, setShowWish] = useState<boolean>(false);
  const [displayDeer, setDisplayDeer] = useState<boolean>(true);

  setTimeout(() => {
    setDisplayDeer(false);
  }, 5000000);

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
      {displayDeer && <Deers />}
      {!showWish && (
        <div className="coco">
          <h1 className="headline">想患上社交牛逼症的天使 ~</h1>
          <div className="image-container">
            <img width={200} src={Avatar} alt="Coco" />
            <p className="excerpt">难得的清醒的时候</p>
          </div>
          <h1>
            祝你生日快乐~ 来年一定也要
            <span className="em">不！尴！尬！</span>哦！ ~ ~ ~
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
                  ? 'http://ip.h5.nf01.sycdn.kuwo.cn/69f6da53ee892c214a728b0b75f31756/61b66131/resource/n1/56/52/2540586845.mp3'
                  : process.env.REACT_APP_AUDIO_URL_ANGEL
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
          phoneNumber={process.env.REACT_APP_ANGEL}
          avatar={Avatar}
          name={'天使'}
        />
      )}
    </>
  );
};

export default Angel;
