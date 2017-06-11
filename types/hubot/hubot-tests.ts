import * as Hubot from "hubot";

var brain = new Hubot.Brain(); // $ExpectType Hubot.Brain
brain.userForName('someone'); // $ExpectType any

// $ExpectType Hubot.Robot
var robot = new Hubot.Robot(
  'src/adapters',
  'slack',
  false,
  'hubot',
);
robot.hear(/hello/, () => null); // $ExpectType void
