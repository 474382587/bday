import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { GiftFilled } from '@ant-design/icons';

import Avatar from '../../images/coco.png';
import Coco1 from '../../images/coco1.jpg';
import Coco2 from '../../images/coco2.jpg';
import Coco3 from '../../images/coco3.jpg';
import Coco4 from '../../images/coco4.jpg';
import Coco5 from '../../images/coco5.jpg';
import Coco6 from '../../images/coco6.jpg';
import Coco7 from '../../images/coco7.jpg';
import Coco8 from '../../images/coco8.jpg';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Wish from '../../components/Wish';
const imageArr = [Coco1, Coco5, Coco6, Coco7, Coco8, Coco2, Coco3, Coco4];

SwiperCore.use([Autoplay]);

const Coco = () => {
  const [countDown, setCountDown] = useState<number>(1);
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
          <h1 className="headline">最最最亲爱的董小姐 ~</h1>
          <div className="image-container">
            <img width={200} src={Avatar} alt="Coco" />
            <p className="excerpt">爱拿铁的Co + 生无可恋的拿铁</p>
          </div>
          <h1>
            祝你生日快乐~ 来年一定也要
            <span className="em">开开心心</span>哦 ~ ~ ~
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
              src="https://sharefs.ali.kugou.com/202112110842/8f1125d5bd637d87d47017996d7c4e93/KGTX/CLTX001/485f19afc92d48a2b428d6d88e74c9a0.mp3"
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
        <Wish phoneNumber={'+17788299426'} avatar={Avatar} name={'董小姐'} />
      )}
    </>
  );
};

export default Coco;
