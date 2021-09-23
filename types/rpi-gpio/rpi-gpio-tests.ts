import gpio = require('rpi-gpio');

gpio.setMode("mode_bcm");
gpio.setMode("mode_rpi");

gpio.setup(1);
gpio.setup(1, () => {});

gpio.setup(1, gpio.DIR_IN);
gpio.setup(1, "in");
gpio.setup(1, "in", () => {});

gpio.setup(1, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.setup(1, gpio.DIR_IN, "both");
gpio.setup(1, gpio.DIR_IN, "both", () => {});

gpio.write(7, true);
gpio.write(7, true, err => {});

gpio.output(7, true);
gpio.output(7, true, err => {});

gpio.read(7, (err, value) => {});

gpio.input(7, (err, value) => {});

gpio.destroy(err => {});

gpio.reset();

async function asyncTest() {
    const one = await gpio.promise.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH);
    const two = await gpio.promise.setup(7, gpio.DIR_IN);
    const three = await gpio.promise.write(7, true);
    const four = await gpio.promise.read(7);
    const five = await gpio.promise.destroy();
}
