import { Card, Radio, Space } from 'antd';
import { useEffect, useState } from 'react';
import Snowflake from '../../components/Snowflake';
import TypeEffect from '../../components/TypeEffect';

import { passcode } from '../../config.js';
import Angel from '../Angel';
import Coco from '../Coco';
import Honghao from '../Honghao';
import Kit from '../Kit';
import Sunshine from '../Sunshine';

import './index.css';

const WELCOME_MESSAGE = `这一分钟，你和我在一起，因为你，我会记得那一分钟。从现在开始，我们就是一分钟的朋友。这是事实，你改变不了，因为已经完成了... ...`;

const Home = () => {
  const [currentUser, setCurrentUser] = useState<string>();
  const [showPopup, setShowPopup] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 0); //22000
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
      return <Honghao />;
    case 'Sunshine':
      return <Sunshine />;
    case 'Kit':
      return <Kit />;
    case 'Angel':
      return <Angel />;
    default:
      return (
        <>
          {showPopup && (
            <div className="welcome">
              <Snowflake />
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
