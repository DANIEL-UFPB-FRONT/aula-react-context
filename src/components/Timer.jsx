import { TimerContext } from '../context/TimerContext';
function Timer({ fuseName, fuseStep }) {
  return (
    <TimerContext.Consumer>
      {(dateInfo) => (
        <div>{`Fuse Zone: ${fuseName} with time ${dateInfo.hour + fuseStep}:${
          dateInfo.minute
        }:${dateInfo.second}`}</div>
      )}
    </TimerContext.Consumer>
  );
}

export default Timer;
