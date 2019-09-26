import { Config, PWM } from 'raspi-pwm';

const config: Config = {
  pin: 'P1-3',
  frequency: 1
};

new PWM();
new PWM(1);
new PWM('P1-3');
const pwm = new PWM(config);

pwm.write(1);
pwm.frequency;
pwm.dutyCycle;
