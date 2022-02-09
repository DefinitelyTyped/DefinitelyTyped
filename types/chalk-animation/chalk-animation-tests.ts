import * as chalkAnimation from 'chalk-animation';

const rainbow: chalkAnimation.Animation = chalkAnimation.rainbow('Lorem ipsum dolor sit amet');
chalkAnimation.rainbow('Lorem ipsum dolor sit amet', 2);
chalkAnimation.pulse('Lorem ipsum dolor sit amet');
chalkAnimation.pulse('Lorem ipsum dolor sit amet', 2);
chalkAnimation.glitch('Lorem ipsum dolor sit amet');
chalkAnimation.glitch('Lorem ipsum dolor sit amet', 2);
chalkAnimation.radar('Lorem ipsum dolor sit amet');
chalkAnimation.radar('Lorem ipsum dolor sit amet', 2);
chalkAnimation.neon('Lorem ipsum dolor sit amet');
chalkAnimation.neon('Lorem ipsum dolor sit amet', 2);
chalkAnimation.karaoke('Lorem ipsum dolor sit amet');
chalkAnimation.karaoke('Lorem ipsum dolor sit amet', 2);

rainbow.stop();
rainbow.start();
rainbow.replace('.');
rainbow.render();
// $ExpectType string
rainbow.frame();

rainbow.f; // $ExpectType number
rainbow.text; // $ExpectType string[]
rainbow.lines; // $ExpectType number
rainbow.init; // $ExpectType boolean
rainbow.stopped; // $ExpectType boolean
