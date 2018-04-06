import * as Hubot from "hubot";

const robot = new Hubot.Robot(
  'src/adapters',
  'slack',
  false,
  'hubot',
);
robot; // $ExpectType Robot
robot.hear(/hello/, () => null); // $ExpectType void
robot.on('test', () => null); // $ExpectType Robot
robot.emit('test', 'arg'); // $ExpectType boolean

const brain = new Hubot.Brain(robot);
brain; // $ExpectType Brain
brain.get<{}>('test'); // $ExpectType {}
brain.set<string>('test', 'test'); // $ExpectType Brain
brain.userForName('someone'); // $ExpectType User
