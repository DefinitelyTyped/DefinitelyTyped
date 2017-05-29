/**
 * Typescript definition tests for d3/d3-ease module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Ease from 'd3-ease';

const t_in: number = 0.5;
let t_out: number;

t_out = d3Ease.easeLinear(t_in);

t_out = d3Ease.easeQuad(t_in);
t_out = d3Ease.easeQuadIn(t_in);
t_out = d3Ease.easeQuadOut(t_in);
t_out = d3Ease.easeQuadInOut(t_in);

t_out = d3Ease.easeCubic(t_in);
t_out = d3Ease.easeCubicIn(t_in);
t_out = d3Ease.easeCubicOut(t_in);
t_out = d3Ease.easeCubicInOut(t_in);

let easePolyFactory: d3Ease.PolynomialEasingFactory;

easePolyFactory = d3Ease.easePoly;
easePolyFactory = d3Ease.easePoly.exponent(2);
t_out = easePolyFactory(t_in);

easePolyFactory = d3Ease.easePolyIn;
easePolyFactory = d3Ease.easePolyIn.exponent(2);
t_out = easePolyFactory(t_in);

easePolyFactory = d3Ease.easePolyOut;
easePolyFactory = d3Ease.easePolyOut.exponent(2);
t_out = easePolyFactory(t_in);

easePolyFactory = d3Ease.easePolyInOut;
easePolyFactory = d3Ease.easePolyInOut.exponent(2);
t_out = easePolyFactory(t_in);

t_out = d3Ease.easeSin(t_in);
t_out = d3Ease.easeSinIn(t_in);
t_out = d3Ease.easeSinOut(t_in);
t_out = d3Ease.easeSinInOut(t_in);

t_out = d3Ease.easeExp(t_in);
t_out = d3Ease.easeExpIn(t_in);
t_out = d3Ease.easeExpOut(t_in);
t_out = d3Ease.easeExpInOut(t_in);

t_out = d3Ease.easeCircle(t_in);
t_out = d3Ease.easeCircleIn(t_in);
t_out = d3Ease.easeCircleOut(t_in);
t_out = d3Ease.easeCircleInOut(t_in);

t_out = d3Ease.easeBounce(t_in);
t_out = d3Ease.easeBounceIn(t_in);
t_out = d3Ease.easeBounceOut(t_in);
t_out = d3Ease.easeBounceInOut(t_in);

let easeBackFactory: d3Ease.BackEasingFactory;

easeBackFactory = d3Ease.easeBack;
easeBackFactory = d3Ease.easeBack.overshoot(2);
t_out = easeBackFactory(t_in);

easeBackFactory = d3Ease.easeBackIn;
easeBackFactory = d3Ease.easeBackIn.overshoot(2);
t_out = easeBackFactory(t_in);

easeBackFactory = d3Ease.easeBackOut;
easeBackFactory = d3Ease.easeBackOut.overshoot(2);
t_out = easeBackFactory(t_in);

easeBackFactory = d3Ease.easeBackInOut;
easeBackFactory = d3Ease.easeBackInOut.overshoot(2);
t_out = easeBackFactory(t_in);

let easeElasticFactory: d3Ease.ElasticEasingFactory;

easeElasticFactory = d3Ease.easeElastic;
easeElasticFactory = d3Ease.easeElastic.amplitude(1.5);
easeElasticFactory = d3Ease.easeElastic.period(0.4);
t_out = easeElasticFactory(t_in);

easeElasticFactory = d3Ease.easeElasticIn;
easeElasticFactory = d3Ease.easeElasticIn.amplitude(1.5);
easeElasticFactory = d3Ease.easeElasticIn.period(0.4);
t_out = easeElasticFactory(t_in);

easeElasticFactory = d3Ease.easeElasticOut;
easeElasticFactory = d3Ease.easeElasticOut.amplitude(1.5);
easeElasticFactory = d3Ease.easeElasticOut.period(0.4);
t_out = easeElasticFactory(t_in);

easeElasticFactory = d3Ease.easeElasticInOut;
easeElasticFactory = d3Ease.easeElasticInOut.amplitude(1.5);
easeElasticFactory = d3Ease.easeElasticInOut.period(0.4);
t_out = easeElasticFactory(t_in);
