/**
 * Typescript definition tests for d3/d3-ease module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Ease from 'd3-ease';

let t_in: number, t_out: number;

t_out = d3Ease.easeLinear(t_in);

t_out = d3Ease.easeQuad(t_in);
t_out = d3Ease.easeQuadIn(t_in);
t_out = d3Ease.easeQuadOut(t_in);
t_out = d3Ease.easeQuadInOut(t_in);

t_out = d3Ease.easeCubic(t_in);
t_out = d3Ease.easeCubicIn(t_in);
t_out = d3Ease.easeCubicOut(t_in);
t_out = d3Ease.easeCubicInOut(t_in);

t_out = d3Ease.easePoly(t_in);
t_out = d3Ease.easePolyIn(t_in);
t_out = d3Ease.easePolyOut(t_in);
t_out = d3Ease.easePolyInOut(t_in);

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

t_out = d3Ease.easeBack(t_in);
t_out = d3Ease.easeBackIn(t_in);
t_out = d3Ease.easeBackOut(t_in);
t_out = d3Ease.easeBackInOut(t_in);

t_out = d3Ease.easeElastic(t_in);
t_out = d3Ease.easeElasticIn(t_in);
t_out = d3Ease.easeElasticOut(t_in);
t_out = d3Ease.easeElasticInOut(t_in);
