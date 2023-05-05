import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
function Timer({ fuseName, fuseStep }) {
  const { hour, minute, second } = useContext(TimerContext);
  return (
    <div>{`Fuse Zone: ${fuseName} with time ${
      hour + fuseStep
    }:${minute}:${second}`}</div>
  );
}

export default Timer;
