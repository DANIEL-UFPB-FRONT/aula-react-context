import { useEffect, useState } from 'react';
import Timer from './components/Timer';
import './App.css';

function App() {
  const [dateInfo, setDateInfo] = useState({
    hour: 10,
    minute: 20,
    second: 60,
  });

  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date();
      setDateInfo({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <hr />
      <Timer fuseName={'UTC'} fuseStep={0} dateInfo={dateInfo} />
      <hr />
      <Timer fuseName={'Brasília'} fuseStep={-3} dateInfo={dateInfo} />
      <hr />
      <Timer fuseName={'Moscou'} fuseStep={+3} dateInfo={dateInfo} />
      <hr />
    </>
  );
}

export default App;
