import { OFF, ON, LED } from 'raspi-led';

const led = new LED();
led.hasLed();
led.read();
led.write(OFF);
led.write(ON);
