import { Robot, Adapter, Brain } from 'hubot';

const robot = new Robot<Adapter>('src/adapters', 'slack', false, 'hubot');
robot; // $ExpectType Robot<{}>
robot.adapter; // $ExpectType {}
robot.hear(/hello/, () => null); // $ExpectType void
robot.on('test', () => null); // $ExpectType Robot<{}>
robot.emit('test', 'arg'); // $ExpectType boolean

const brain = new Brain(robot);
brain; // $ExpectType Brain<{}>
brain.userForName('someone'); // $ExpectType User
brain.get('test'); // $ExpectType any
brain.set('test', 'test'); // $ExpectType Brain<{}>
