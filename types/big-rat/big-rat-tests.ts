import bigRat = require('big-rat');
const rat = bigRat(1, 10);

import toFloat = require('big-rat/to-float');
toFloat(rat); // $ExpectType Rat

import toString = require('big-rat/to-string');
toString(rat); // $ExpectType string

import isRat = require('big-rat/is-rat');
isRat(rat); // $ExpectType boolean
isRat(10);

import add = require('big-rat/add');
add(rat, rat); // $ExpectType Rat

import sub = require('big-rat/sub');
sub(rat, rat); // $ExpectType Rat

import mul = require('big-rat/mul');
mul(rat, rat); // $ExpectType Rat

import div = require('big-rat/div');
div(rat, rat); // $ExpectType Rat

import neg = require('big-rat/neg');
neg(rat); // $ExpectType Rat

import recip = require('big-rat/recip');
recip(rat); // $ExpectType Rat

import sign = require('big-rat/sign');
sign(rat); // $ExpectType number

import abs = require('big-rat/abs');
abs(rat); // $ExpectType Rat

import min = require('big-rat/min');
min(rat, rat); // $ExpectType Rat

import max = require('big-rat/max');
max(rat, rat); // $ExpectType Rat

import equals = require('big-rat/equals');
equals(rat, rat); // $ExpectType boolean

import cmp = require('big-rat/cmp');
cmp(rat, rat); // $ExpectType number
