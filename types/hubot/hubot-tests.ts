import * as Hubot from "hubot";

const brain = new Hubot.Brain();
brain; // $ExpectType Brain
brain.userForName('someone'); // $ExpectType any

const robot = new Hubot.Robot(
  'src/adapters',
  'slack',
  false,
  'hubot',
);
robot; // $ExpectType Robot
robot.hear(/hello/, () => null); // $ExpectType void
