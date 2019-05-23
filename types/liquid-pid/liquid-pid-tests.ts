import * as PIDController from "liquid-pid";

let pid = new PIDController.PIDController();

pid.tune(25, 1000, 9); // $ExpectType void
pid.setPoint(67); // $ExpectType number
pid.getRefTemperature(); // $ExpectType number
pid.calculate(20); // $ExpectType number

pid = new PIDController.PIDController({
    temp: { ref: 67 },
    Pmax: 1000,
    Kp: 25,
    Ki: 1000,
    Kd: 9
});

pid.tune(25, 1000, 9); // $ExpectType void
pid.setPoint(67); // $ExpectType number
pid.getRefTemperature(); // $ExpectType number
pid.calculate(20); // $ExpectType number
