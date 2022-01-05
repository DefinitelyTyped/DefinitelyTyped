import midi from 'midi';

const input = new midi.Input();
input.getPortCount();
input.getPortName(0);
input.on('message', (deltaTime: number, message: number[]) => {});
input.openPort(0);
input.ignoreTypes(false, false, false);

const output = new midi.Output();
output.getPortCount();
output.getPortName(0);
output.openPort(0);
output.sendMessage([176, 22, 1]);
output.closePort();
