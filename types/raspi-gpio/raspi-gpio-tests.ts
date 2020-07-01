import { DigitalInput, DigitalOutput, Config, LOW, HIGH, PULL_UP, PULL_DOWN, PULL_NONE } from 'raspi-gpio';

const inputConfig: Config = {
  pin: 'P1-3',
  pullResistor: PULL_UP
};
const input = new DigitalInput(inputConfig);
input.read();
input.value;

new DigitalInput({
  pin: 'P1-3',
  pullResistor: PULL_DOWN
});

new DigitalInput({
  pin: 'P1-3',
  pullResistor: PULL_NONE
});

const output = new DigitalOutput('P1-5');
output.write(LOW);
output.write(HIGH);
output.value;
