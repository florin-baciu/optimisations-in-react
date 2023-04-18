self.onmessage = function (event) {
    var map = event.data;
    var value = 0;
    // simulate doing some heavy opperations on the initial map
    for (var i = 0; i < 1000000000; i++) {
        value += Math.random();
    }
    self.postMessage(map);
};
