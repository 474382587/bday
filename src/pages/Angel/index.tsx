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
  }, 50000);

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
              src="https://sharefs.ali.kugou.com/202112120014/dfcddc4bf6fdcf838124c9bdf324841c/KGTX/CLTX001/75a431fe132305d73bf1caedc26d9ddd.mp3"
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
