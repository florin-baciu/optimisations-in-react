self.onmessage = function (event: WorkerEventMap["message"]) {
  const map = event.data as EngineMap;

  let value = 0;

  // simulate doing some heavy opperations on the initial map
  for (let i = 0; i < 1000000000; i++) {
    value += Math.random();
  }

  self.postMessage(map);
};

interface EngineMap {
  z: number[][];
  x: number[];
  y: number[];
  masterGraph: {
    yAxis: string;
    xAxis: string;
    zAxis: string;
  };
}
