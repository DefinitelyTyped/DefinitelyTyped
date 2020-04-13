import { require as d3Require, requireFrom } from 'd3-require';

d3Require('abc').then(x => null);

d3Require.alias({a: 'a'})('a', 'b').then(x => null);
d3Require.resolve('b').then(x => x.length);

requireFrom(async a => ('/~/' + a))('a', 'b').then(x => null);
