import { Robot, Adapter, Brain } from 'hubot';

const robot = new Robot<Adapter>('src/adapters', 'slack', false, 'hubot');
robot; // $ExpectType Robot<Adapter>
robot.adapter; // $ExpectType Adapter
robot.hear(/hello/, () => null); // $ExpectType void
robot.on('test', () => null); // $ExpectType Robot<Adapter>
robot.emit('test', 'arg'); // $ExpectType boolean

const brain = new Brain(robot);
brain; // $ExpectType Brain<Adapter>
brain.userForName('someone'); // $ExpectType User | null
brain.get('test'); // $ExpectType any
brain.set('test', 'test'); // $ExpectType Brain<Adapter>
