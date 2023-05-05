import { useEffect, useState } from 'react';
import { TimerContext } from './context/TimerContext';
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
    <TimerContext.Provider value={dateInfo}>
      <hr />
      <Timer fuseName={'UTC'} fuseStep={0} />
      <hr />
      <Timer fuseName={'Brasília'} fuseStep={-3} />
      <hr />
      <Timer fuseName={'Moscow'} fuseStep={+3} />
      <hr />
    </TimerContext.Provider>
  );
}

export default App;
