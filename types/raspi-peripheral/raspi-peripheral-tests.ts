import { Peripheral } from 'raspi-peripheral';

const myPeripheral = new Peripheral('GPIO2');
myPeripheral.alive;
myPeripheral.pins.filter((pin) => true);
