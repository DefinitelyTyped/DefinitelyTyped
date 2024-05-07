import simpleheat = require("simpleheat");

const canvasElement = new HTMLCanvasElement();

const instances = [new simpleheat(canvasElement), simpleheat(canvasElement)];

for (const instance of instances) {
    // $ExpectType Instance
    instance.data([
        [0, 0, 1.0],
        [1, 0, 2.0],
        [1, 1],
    ]);
    instance.max(10); // $ExpectType Instance
    instance.add([0, 1]); // $ExpectType Instance
    instance.add([2, 1, 2]); // $ExpectType Instance
    instance.clear(); // $ExpectType Instance
    instance.radius(15); // $ExpectType Instance
    instance.radius(20, 10); // $ExpectType Instance
    instance.resize(); // $ExpectType Instance
    // $ExpectType Instance
    instance.gradient({
        0.6: "blue",
        0.7: "cyan",
        0.8: "lime",
        0.9: "yellow",
        1.0: "red",
    });
    instance.draw(); // $ExpectType Instance
    instance.draw(0.1); // $ExpectType Instance
}
