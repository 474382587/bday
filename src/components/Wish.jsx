import { LuckyGrid } from '@lucky-canvas/react';
import { Button, Input } from 'antd';
import { useState, useRef, useEffect } from 'react';
import './Wish.css';

const Wish = ({ avatar, name, phoneNumber }) => {
  const myLucky = useRef();
  const [showGrid, setShowGrid] = useState(false);

  const [wish1, setWish1] = useState('');
  const [wish2, setWish2] = useState('');
  const [wish3, setWish3] = useState('');
  const [prize, setPrize] = useState('');

  const handleComplete = () => {
    if (!wish1 || !wish2 || !wish3) {
      console.log(wish1, wish2, wish3);
      alert('朋友，记得想三个~');
      return;
    }
    setShowGrid(true);
  };

  useEffect(() => {
    const sendPrizeMsg = async () => {
      try {
        await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.sms.to/sms/send?to=${phoneNumber}&message=${`祝${name}的心愿：${wish1}，${wish2}，${wish3}，全部实现！~ 还有额外奖品：${prize}`}\n
          祝愿你在接下来的一年开开心心，健康幸福 ~ ~ ~
          `,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.REACT_APP_SMS_TO_TOKEN}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    console.log('useEffect', prize);
    if (prize.includes('渣男')) {
      window.alert(`远离渣男 幸福一生`);
    } else if (prize.includes('男')) {
      window.alert(`别瞎想了，${prize} 是没可能的事儿`);
    } else if (prize.includes('妹')) {
      window.alert(`别瞎想了，${prize} 是没可能的事儿`);
    }

    sendPrizeMsg();
  }, [name, phoneNumber, prize, wish1, wish2, wish3]);

  return (
    <>
      {!showGrid && (
        <div className="wish-list">
          <h1>愿望清单（比较靠谱的）</h1>
          <Input
            onChange={(e) => {
              setWish1(e.target.value);
            }}
            placeholder="愿望1"
          />
          <Input
            onChange={(e) => {
              setWish2(e.target.value);
            }}
            placeholder="愿望2"
          />
          <Input
            onChange={(e) => {
              setWish3(e.target.value);
            }}
            placeholder="愿望3"
          />
          <Button
            style={{ marginTop: 20 }}
            type="primary"
            onClick={handleComplete}
          >
            完成~
          </Button>
        </div>
      )}
      {showGrid && (
        <>
          <div className="draw">
            <h1>考验你运气的时候到了, {name}</h1>
            <div className="grid-container">
              <LuckyGrid
                ref={myLucky}
                blocks={[
                  {
                    background: '#FBEBC9',
                    borderRadius: '15px',
                    padding: '10px',
                  },
                  {
                    background: '#E96A3D',
                    borderRadius: '15px',
                    padding: '10px',
                  },
                ]}
                buttons={[
                  {
                    col: 1,
                    borderRadius: '50%',
                    imgs: [
                      {
                        src: avatar,
                        width: '84px',
                        height: '84px',
                      },
                    ],
                    fonts: [
                      {
                        fontColor: '#fff',
                        text: '立即抽奖',
                        top: '50%',
                      },
                    ],
                    row: 1,
                    x: 1,
                    y: 1,
                  },
                ]}
                defaultStyle={{
                  background: '#FBEBCB',
                  fontColor: '#88410E',
                  fontSize: '14px',
                  shadow: '2px, 2px, 0.5, #000',
                }}
                onStart={() => {
                  // 点击抽奖按钮会触发star回调
                  // 调用抽奖组件的play方法开始游戏
                  myLucky.current.play();
                  // 模拟调用接口异步抽奖
                  setTimeout(() => {
                    // 假设后端返回的中奖索引是 0
                    const index = Math.floor(Math.random() * 9);
                    // 调用stop停止旋转并传递中奖索引
                    myLucky.current.stop(index);
                  }, 5000);
                }}
                onEnd={(prize) => {
                  console.log(prize.fonts[0].text);
                  setPrize(prize.fonts[0].text);
                }}
                prizes={[
                  {
                    col: 1,
                    fonts: [
                      {
                        text: '1次捞捞',
                        top: '40%',
                      },
                    ],
                    row: 1,
                    x: 2,
                    y: 1,
                  },
                  {
                    col: 1,
                    fonts: [
                      {
                        text: '1次烤串',
                        top: '40%',
                      },
                    ],
                    row: 1,
                    x: 0,
                    y: 1,
                  },
                  {
                    col: 1,
                    fonts: [
                      {
                        text: '2次捞捞',
                        top: '40%',
                      },
                    ],
                    row: 1,
                    x: 1,
                    y: 0,
                  },

                  {
                    col: 1,
                    fonts: [
                      {
                        text: wish1,
                        top: '40%',
                      },
                    ],
                    row: 1,
                    x: 0,
                    y: 2,
                  },
                  {
                    col: 1,
                    fonts: [
                      {
                        text: '3次捞捞',
                        top: '40%',
                      },
                    ],
                    row: 1,
                    x: 1,
                    y: 2,
                  },
                  {
                    col: 1,
                    fonts: [
                      {
                        text: wish2,
                        top: '40%',
                      },
                    ],
                    row: 1,
                    x: 2,
                    y: 0,
                  },
                  {
                    col: 1,
                    fonts: [
                      {
                        text: '1次羊肉汤',
                        top: '40%',
                      },
                    ],
                    row: 1,
                    x: 0,
                    y: 0,
                  },
                  {
                    col: 1,
                    fonts: [
                      {
                        text: wish3,
                        top: '40%',
                      },
                    ],
                    row: 1,
                    x: 2,
                    y: 2,
                  },
                ]}
                width={300}
                height={300}
              />
            </div>
            {prize !== '' && (
              <p className="congrats">
                <span>
                  恭喜你中了个<em>{prize}</em>！截图发群里 ~
                </span>
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Wish;
