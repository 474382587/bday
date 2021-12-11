import { useState, useEffect } from 'react';

const TypeEffect = ({
  content,
  interval,
}: {
  content: string;
  interval: number;
}) => {
  let count = 0;
  const [text, setText] = useState('');
  useEffect(() => {
    setInterval(() => {
      setText(content.slice(0, count));
      count++;
    }, interval);
  }, [interval, content, count]);

  return <p>{text}</p>;
};
export default TypeEffect;
