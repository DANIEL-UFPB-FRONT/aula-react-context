function Timer({ dateInfo, fuseName, fuseStep }) {
  return (
    <div>{`Fuse Zone: ${fuseName} with time ${dateInfo.hour + fuseStep}:${
      dateInfo.minute
    }:${dateInfo.second}`}</div>
  );
}

export default Timer;
