import * as five from "johnny-five";

const board = new five.Board();

board.on("connect", () => {});

board
    .on("ready", () => {
        board.pinMode(13, five.Pin.OUTPUT);
        board.pinMode(13, 0);
        const pin = new five.Pin(13);
        pin.mode = five.PinMode.OUTPUT;
        pin.mode = five.Pin.OUTPUT;
        pin.mode = 4;
        const animation = new five.Animation(new five.Servo(9));

        const servo = new five.Servo({ pin: 4 });
        const servo2 = new five.Servo({ pin: 5 });
        const servos = new five.Servo.Collection([servo, servo2]);
        const servos2 = new five.Servos([4, 5]);

        // Create an animation segment object
        animation.enqueue({
            duration: 2000,
            cuePoints: [0, 0.25, 0.5, 0.75, 1.0],
            keyFrames: [{ degrees: 0 }, { degrees: 135 }, { degrees: 45 }, { degrees: 180 }, { degrees: 0 }],
        });

        // Create a new `button` hardware instance.
        const button = new five.Button(8);

        button.on("hold", () => {
            console.log("Button held");
        });

        button.on("press", () => {
            console.log("Button pressed");
        });

        button.on("release", () => {
            console.log("Button released");
        });

        const compass = new five.Compass({
            controller: "HMC6352",
        });

        compass.on("data", function onCompassData() {
            console.log("  heading : ", Math.floor(this.heading));
            console.log("  bearing : ", this.bearing.name);
            console.log("--------------------------------------");
        });

        let esc = new five.ESC(11);

        // Set to top speed. (this can be physically dangerous, you've been warned.)
        esc.throttle(100);

        // other options for creating an ESC instance
        esc = new five.ESC({
            device: "FORWARD_REVERSE",
            pin: 11,
            pwmRange: [800, 1800],
        });

        // set a percentage value between 0 and 100
        esc.throttle(25);

        // set a micro-second
        esc.throttle(1500);

        // create a collection of ESC instances
        const escs = new five.ESCs([11, 12]);

        escs.throttle(80);

        escs.forEach(item => item.brake());

        new five.Motion(7);

        // Options object with pin property
        new five.Motion({ pin: 7 });

        const proximityOption: five.ProximityOption = {
            controller: "HCSR04",
            pin: "10",
            freq: 500, // optional
        };

        new five.Proximity(proximityOption);

        const eyes = new five.ReflectanceArray({
            emitter: 13,
            pins: ["A0", "A1", "A2"], // any number of pins
            freq: 25,
        });

        eyes.on("data", function onEyesData() {
            console.log("Raw Values: ", this.raw);
        });

        eyes.on("line", function onEyesLine() {
            console.log("Line Position: ", this.line);
        });

        eyes.enable();

        const joystick = new five.Joystick({
            pins: ["A0", "A1"],
            invert: false,
            invertX: false,
            invertY: false,
        });
        joystick.on("data", value => {
            console.log(value);
        });

        joystick.on("axismove", (err, value) => {
            console.log("change");

            console.log(joystick.axis);
            console.log(joystick.raw);
            console.log(err);
            console.log(value);
        });

        new five.LCD({
            pins: [8, 9, 4, 5, 6, 7],
            backlight: 13,
            rows: 2,
            cols: 16,
        });

        const led = new five.Led(13);
        led.blink();
        led.brightness(255);
        led.intensity(100);
        led.pulse({
            easing: "linear",
            duration: 3500,
            cuePoints: [0, 0.3, 0.6, 0.8, 1],
            keyFrames: [0, 60, 100, 50, 70],
        });

        new five.Led.Digits({
            pins: {
                data: 2,
                clock: 3,
                cs: 4,
            },
        });

        new five.Led.Matrix({
            controller: "HT16K33",
            dims: "8x16", // or "16x8"
            rotation: 2,
        });

        // With Options object & pins array

        const piezo = new five.Piezo(3);

        // Plays a song
        piezo.play({
            // song is composed by an array of pairs of notes and beats
            // The first argument is the note (null means "no note")
            // The second argument is the length of time (beat) of the note (or non-note)
            song: [
                ["C4", 1 / 4],
                ["D4", 1 / 4],
                ["F4", 1 / 4],
                ["D4", 1 / 4],
                ["A4", 1 / 4],
                [null, 1 / 4],
                ["A4", 1],
                ["G4", 1],
                [null, 1 / 2],
                ["C4", 1 / 4],
                ["D4", 1 / 4],
                ["F4", 1 / 4],
                ["D4", 1 / 4],
                ["G4", 1 / 4],
                [null, 1 / 4],
                ["G4", 1],
                ["F4", 1],
                [null, 1 / 2],
            ],
            tempo: 100,
        }).stop();

        // Options object with pin property

        const sensor = new five.Sensor("A0");

        const value = sensor.scaleTo([0, 10]);
        sensor.freq = 1000;

        const sonar = new five.Sonar("A0");

        sonar.on("data", function onSonarData() {
            console.log("inches     : " + this.in);
            console.log("centimeters: " + this.cm);
            console.log("-----------------------");
        });
    })
    .on("ready", () => {
        console.log("Everything is ready!!!");
    });

// Boards test for multiple boards
const boards = new five.Boards([{ id: "UNO" }] as const);

boards.on("ready", ({ UNO }) => {
    const led = new five.Led({ board: UNO, pin: 13 });
    led.blink(500);
});

const boards2 = new five.Boards(["UNO", "UNO_MINI"] as const);

boards2.on("ready", ({ UNO, UNO_MINI }) => {
    const led = new five.Led({ board: UNO, pin: 1 });
    const led2 = new five.Led({ board: UNO_MINI, pin: 2 });
    const pin = new five.Pin({ board: UNO, pin: 3 });
    const pin2 = new five.Pin({ board: UNO_MINI, pin: 4 });
    led.blink(500);
    led2.blink(500);
    pin.high();
    pin2.low();
});

new five.Barometer({ controller: "BMP280" });
new five.Barometer({ controller: "BMP180", mode: 1 });

five.Stepper.TYPE.DRIVER;
five.Fn.bitValue(1);

// Relay
const r0 = new five.Relay(1);
const r1 = new five.Relay({ pin: 1, board });
const r2 = new five.Relay({ pin: 1, type: "NO" });
const r3 = new five.Relay({ pin: 10, type: "NC" });

// Relays
const relays0 = new five.Relays([1, 2, 3]);
const relays2 = new five.Relays([{ pin: 1, type: "NC" }, { pin: 2, type: "NO" }, { pin: 3 }]);
const relays3 = new five.Relays([r0, r1, r2]);
relays0[0].open();
relays0[1].open();
relays0[2].open();

relays2.close();
relays3.toggle();
