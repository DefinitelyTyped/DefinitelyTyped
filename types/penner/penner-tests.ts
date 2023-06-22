import * as penner from 'penner';
import * as pennerMin from 'penner/penner.min';

penner.linear(0, 10, 100, 2); // $ExpectType number
penner.easeInQuad(0, 10, 100, 2); // $ExpectType number
penner.easeOutQuad(0, 10, 100, 2); // $ExpectType number
penner.easeInOutQuad(0, 10, 100, 2); // $ExpectType number
penner.easeInCubic(0, 10, 100, 2); // $ExpectType number
penner.easeOutCubic(0, 10, 100, 2); // $ExpectType number
penner.easeInOutCubic(0, 10, 100, 2); // $ExpectType number
penner.easeInQuart(0, 10, 100, 2); // $ExpectType number
penner.easeOutQuart(0, 10, 100, 2); // $ExpectType number
penner.easeInOutQuart(0, 10, 100, 2); // $ExpectType number
penner.easeInQuint(0, 10, 100, 2); // $ExpectType number
penner.easeOutQuint(0, 10, 100, 2); // $ExpectType number
penner.easeInOutQuint(0, 10, 100, 2); // $ExpectType number
penner.easeInSine(0, 10, 100, 2); // $ExpectType number
penner.easeOutSine(0, 10, 100, 2); // $ExpectType number
penner.easeInOutSine(0, 10, 100, 2); // $ExpectType number
penner.easeInExpo(0, 10, 100, 2); // $ExpectType number
penner.easeOutExpo(0, 10, 100, 2); // $ExpectType number
penner.easeInOutExpo(0, 10, 100, 2); // $ExpectType number
penner.easeInCirc(0, 10, 100, 2); // $ExpectType number
penner.easeOutCirc(0, 10, 100, 2); // $ExpectType number
penner.easeInOutCirc(0, 10, 100, 2); // $ExpectType number
penner.easeInElastic(0, 10, 100, 2); // $ExpectType number
penner.easeOutElastic(0, 10, 100, 2); // $ExpectType number
penner.easeInOutElastic(0, 10, 100, 2); // $ExpectType number
penner.easeInBounce(0, 10, 100, 2); // $ExpectType number
penner.easeOutBounce(0, 10, 100, 2); // $ExpectType number
penner.easeInOutBounce(0, 10, 100, 2); // $ExpectType number

penner.easeInBack(0, 10, 100, 2, 1.5); // $ExpectType number
penner.easeOutBack(0, 10, 100, 2, 1.5); // $ExpectType number
penner.easeInOutBack(0, 10, 100, 2, 1.5); // $ExpectType number

pennerMin.linear(0, 10, 100, 2); // $ExpectType number
