import five = require('johnny-five');
var board = new five.Board();

board.on('connect', function(){
});

board.on('ready', function(){
    var accelerometer = new five.Accelerometer({
        controller: "MPU6050",
        sensitivity: 16384 // optional
    });

    var servo = new five.Servo(9);
    var animation = new five.Animation(servo);

    // Create an animation segment object
    animation.enqueue({
        duration: 2000,
        cuePoints: [0, 0.25, 0.5, 0.75, 1.0],
        keyFrames: [ {degrees: 0}, {degrees: 135}, {degrees: 45}, {degrees: 180}, {degrees: 0}]
    });

    // Create a new `button` hardware instance.
    var button = new five.Button(8);

    button.on("hold", function() {
        console.log( "Button held" );
    });

    button.on("press", function() {
        console.log( "Button pressed" );
    });

    button.on("release", function() {
        console.log( "Button released" );
    });


    var compass = new five.Compass({
        controller: "HMC6352"
    });

    compass.on("headingchange", function() {
        console.log("headingchange");
        console.log("  heading : ", Math.floor(this.heading));
        console.log("  bearing : ", this.bearing.name);
        console.log("--------------------------------------");
    });

    compass.on("data", function() {
        console.log("  heading : ", Math.floor(this.heading));
        console.log("  bearing : ", this.bearing.name);
        console.log("--------------------------------------");
    });

    var esc = new five.ESC(11);

    // Set to top speed. (this can be physically dangerous, you've been warned.)
    esc.throttle(100);

    // other options for creating an ESC instance
    esc = new five.ESC({
      device: 'FORWARD_REVERSE',
      pin: 11,
      pwmRange: [800, 1800],
    });

    // set a percentage value between 0 and 100
    esc.throttle(25);

    // set a micro-second
    esc.throttle(1500);

    // create a collection of ESC instances
    var escs = new five.ESCs([11, 12]);

    escs.throttle(80);

    escs.forEach(item => item.brake());


    var gyro = new five.Gyro({
        pins: ["A0", "A1"],
        sensitivity: 0.67, // optional
        resolution: 4.88   // optional
    });

    var accel = new five.IMU({
        controller: "MPU6050",
        address: 0x68, // optional
        freq: 100      // optional
    });

    var motion = new five.Motion(7);

// Options object with pin property
    var motion = new five.Motion({
        pin: 7
    });

    var proximityOption: five.ProximityOption = {
      controller: "HCSR04",
      pin: "10",
      freq: 500	// optional
    };

    let proximityController: string = proximityOption.controller;
    let proximityPin: string | number = proximityOption.pin;
    let proximityFrequency: number | undefined = proximityOption.freq;
    let proximity = new five.Proximity(proximityOption);

    var eyes = new five.IR.Reflect.Array({
        emitter: 13,
        pins: ["A0", "A1", "A2"], // any number of pins
        freq: 25
    });

    eyes.on('data', function() {
        console.log( "Raw Values: ", this.raw );
    });

    eyes.on('line', function() {
        console.log( "Line Position: ", this.line);
    });

    eyes.enable();

    var joystick = new five.Joystick({
        pins: ["A0", "A1"],
        invert: false,
        invertX: false,
        invertY: false
    });
    joystick.on("data", (value)=>{
        console.log(value);
    });

    joystick.on("axismove", (err, value)=>{
        console.log("change");

        console.log(joystick.axis);
        console.log(joystick.raw);
        console.log(err);
        console.log(value);
    });

    var lcd = new five.LCD({
        pins: [8, 9, 4, 5, 6, 7],
        backlight: 13,
        rows: 2,
        cols: 16
    });

    var led = new five.Led(13);
    led.blink();

    var digits = new five.Led.Digits({
        pins: {
            data: 2,
            clock: 3,
            cs: 4
        }
    });

    var matrix = new five.Led.Matrix({
        controller: "HT16K33",
        dims: "8x16", // or "16x8"
        rotation: 2
    });

    // With Options object & pins array
    var rgb = new five.Led.RGB({
        pins: [9, 10, 11]
    });

    var motor = new five.Motor({
        pins: {
            pwm:9,
            dir:8,
            brake: 11
        }
    });

    var motors = new five.Motors([
       { controller: 'PCA9685', pins: { pwm: 4, dir: 6 }},
       { controller: 'PCA9685', pins: { pwm: 5, dir: 7 }}
    ]);

    var piezo = new five.Piezo(3);

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
            [null, 1 / 2]
        ],
        tempo: 100
    });

    var digital = new five.Pin({
        pin: 13
    });

    var analog = new five.Pin({
        pin: "A0"
    });

    var analogAsDigital = new five.Pin({
        pin: 14,
        type: "digital"
    });

    var ping = new five.Ping(7);

    var ping = new five.Ping({
        pin: 7
    });

    var relay = new five.Relay(10);

// Options object with pin property
    var relay = new five.Relay({
        pin: 10
    });

    var sensor = new five.Sensor("A0");

    var value = sensor.scaleTo([ 0, 10 ]);
    console.log( value );

    var servo = new five.Servo({
        pin: 10,
        range: [45, 135]
    });

    var register = new five.ShiftRegister({
        pins: {
            data: 2,
            clock: 3,
            latch: 4
        }
    });

    var sonar = new five.Sonar("A0");

    sonar.on("data", function() {
        console.log("inches     : " + this.in);
        console.log("centimeters: " + this.cm);
        console.log("-----------------------");
    });

    var stepper = new five.Stepper({
        type: five.Stepper.TYPE.DRIVER,
        stepsPerRev: 200,
        pins: {
            step: 11,
            dir: 12
        }
    });

    var temperature = new five.Thermometer({
        pin: "A0",
        toCelsius: function(raw) { // optional
            return (raw / 100) + 10;
        }
    });

    var hygrometer = new five.Hygrometer({
        controller: "DHT22_I2C_NANO_BACKPACK"
    });

    var altimeter =  new five.Altimeter({
        controller: "MPL3115A2"
    });

    var Switch = new five.Switch({
        pin: "A4",
        type: "NC"
    });

}).on("ready", function(){
    console.log("Everything is ready!!!");
});
