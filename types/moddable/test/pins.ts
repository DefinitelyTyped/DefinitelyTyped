import Digital from "pins/digital";
import Monitor from "pins/digital/monitor";
import Servo from "pins/servo";
import Analog from "pins/analog";
import I2C from "pins/i2c";
import SMBus from "pins/smbus";
import AudioOut from "pins/audioout";
import Resource from "resource";
import Timer from "timer";

Timer.repeat(id => {
    Digital.write(2, 1);
    Timer.clear(id);
}, 200);

const led = new Digital({
    pin: 2,
    mode: Digital.Output,
});
led.write(1);

const monitor = new Monitor({
    pin: 0,
    mode: Digital.Input,
    edge: Monitor.Rising,
});

/**
 * Refer to https://github.com/Moddable-OpenSource/iot-product-dev-book/blob/master/ch6-hardware/servo/example.js
 */
function testServo() {
    const servo = new Servo({ pin: 14 });
    servo.write(2.5);
}

trace('Celsius temperature: ' + ((Analog.read(0) / 1023) * 330 - 50));

function testI2C() {
    const sensor = new I2C({ address: 0x48 });
    sensor.write(0);
}

function testSMBus() {
    const sensor = new SMBus({ address: 0x48 });
    sensor.readWord(1, true);
}

/**
 * Refer to https://github.com/Moddable-OpenSource/iot-product-dev-book/blob/master/ch7-audio/sound/example.js
 */
function testAudioOut() {
    const speaker = new AudioOut({ streams: 1 });
    speaker.enqueue(0, AudioOut.Samples,
        new Resource("bflatmajor.maud"));
    speaker.start();
}
