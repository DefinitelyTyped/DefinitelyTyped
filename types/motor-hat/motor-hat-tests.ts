import createMotorHat, { DC, Motor, MotorHat } from 'motor-hat';

function test() {
    const motors: Motor[] = ['M1', 'M2'];
    const motorHat: MotorHat = createMotorHat({
        dcs: motors,
        servos: [1, 2, 3],
        steppers: [{ W1: 'M3', W2: 'M1' }],
        address: 0x60,
    }).init();
    const dcL: DC = motorHat.dcs[0];
    const dcR: DC = motorHat.dcs[1];
    dcL.run('fwd', () => {});
    dcR.setSpeed(50, (err) => {});
}
