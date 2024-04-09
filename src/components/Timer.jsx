import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
function Timer({ fuseName, fuseStep }) {
  const { hour, minute, second } = useContext(TimerContext);

  function getHour(fuseStep) {
    const currentDate = new Date()
    currentDate.setUTCHours(hour + fuseStep)
    return currentDate.getUTCHours()
  }

  function getFormatted(time) {
    return String(time).padStart(2,'0')
  }
  return (
    <div>{`Fuse Zone: ${fuseName} with time ${
      getFormatted(getHour(fuseStep))
    }:${getFormatted(minute)}:${getFormatted(second)}`}</div>
  );
}

export default Timer;
