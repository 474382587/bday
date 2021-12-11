import { Card, Modal, Radio, Space } from 'antd';
import { useEffect, useState } from 'react';
import TypeEffect from '../../components/TypeEffect';

import { passcode } from '../../config.js';
import Coco from '../Coco';

import './index.css';

const WELCOME_MESSAGE = `这一分钟，你和我在一起，因为你，我会记得那一分钟。从现在开始，我们就是一分钟的朋友。这是事实，你改变不了，因为已经完成了... ...`;

const Home = () => {
  const [currentUser, setCurrentUser] = useState<string>();
  const [showPopup, setShowPopup] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 12000);
  }, []);

  const generateSelection = () => {
    const entries = Object.entries(passcode);
    return entries.map(([key, value]) => {
      return (
        <Radio.Button key={key} value={key}>
          {key}
        </Radio.Button>
      );
    });
  };

  switch (currentUser) {
    case 'Coco':
      return <Coco />;
    case 'Honghao':
      return <h1>Hello Honghao</h1>;
    case 'Sunshine':
      return <h1>Hello Sunshine</h1>;
    case 'Kit':
      return <h1>Hello Kit</h1>;
    case 'Angel':
      return <h1>Hello Angel</h1>;
    default:
      return (
        <>
          {showPopup && (
            <div className="welcome">
              <h1>圣诞的季节 就是你的季节</h1>
              <h1>又是一年十二月，生日快乐~</h1>
              <p></p>
              <TypeEffect content={WELCOME_MESSAGE} interval={150} />
            </div>
          )}
          <div className="container">
            <Card title="客官您哪位？~">
              <p>根据关键字对号入座 ~</p>
              <Radio.Group
                onChange={(e) => {
                  const val: string = e.target.value;
                  setCurrentUser((passcode as any)[val]);
                }}
              >
                <Space direction="vertical">{generateSelection()}</Space>
              </Radio.Group>
            </Card>
          </div>
        </>
      );
  }
};

export default Home;
