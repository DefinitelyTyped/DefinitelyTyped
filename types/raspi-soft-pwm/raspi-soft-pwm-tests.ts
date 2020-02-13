import { Config, SoftPWM } from 'raspi-soft-pwm';

const config: Config = {
  pin: 'P1-3',
  frequency: 1,
  range: 1
};

new SoftPWM(1);
new SoftPWM('P1-3');
const pwm = new SoftPWM(config);

pwm.write(1);
pwm.frequency;
pwm.dutyCycle;
pwm.range;
