import crocks = require('crocks');

import Async from 'crocks/Async';
import asyncToPromise from 'crocks/Async/asyncToPromise';
import eitherToAsync from 'crocks/Async/eitherToAsync';
import firstToAsync from 'crocks/Async/firstToAsync';
import lastToAsync from 'crocks/Async/lastToAsync';
import maybeToAsync from 'crocks/Async/maybeToAsync';
import race from 'crocks/Async/race';
import resultToAsync from 'crocks/Async/resultToAsync';

import Either from 'crocks/Either';
import firstToEither from 'crocks/Either/firstToEither';
import lastToEither from 'crocks/Either/lastToEither';
import Left from 'crocks/Either/Left';
import maybeToEither from 'crocks/Either/maybeToEither';
import resultToEither from 'crocks/Either/resultToEither';
import Right from 'crocks/Either/Right';

import eitherToFirst from 'crocks/First/eitherToFirst';
import First from 'crocks/First/First';
import lastToFirst from 'crocks/First/lastToFirst';
import maybeToFirst from 'crocks/First/maybeToFirst';
import resultToFirst from 'crocks/First/resultToFirst';

import eitherToLast from 'crocks/Last/eitherToLast';
import firstToLast from 'crocks/Last/firstToLast';
import Last from 'crocks/Last/Last';
import maybeToLast from 'crocks/Last/maybeToLast';
import resultToLast from 'crocks/Last/resultToLast';

import eitherToMaybe from 'crocks/Maybe/eitherToMaybe';
import find from 'crocks/Maybe/find';
import firstToMaybe from 'crocks/Maybe/firstToMaybe';
import getPath from 'crocks/Maybe/getPath';
import getProp from 'crocks/Maybe/getProp';
import lastToMaybe from 'crocks/Maybe/lastToMaybe';
import Maybe from 'crocks/Maybe';
import maybeToArray from 'crocks/Maybe/maybeToArray';
import resultToMaybe from 'crocks/Maybe/resultToMaybe';
import safe from 'crocks/Maybe/safe';
import safeAfter from 'crocks/Maybe/safeAfter';
import safeLift from 'crocks/Maybe/safeLift';

import branch from 'crocks/Pair/branch';
import fanout from 'crocks/Pair/fanout';
import fst from 'crocks/Pair/fst';
import Pair from 'crocks/Pair';
import snd from 'crocks/Pair/snd';
import toPairs from 'crocks/Pair/toPairs';
import writerToPair from 'crocks/Pair/writerToPair';

import * as combinators from 'crocks/combinators';
import * as pointfree from 'crocks/pointfree';
import * as predicates from 'crocks/predicates';

import evalWith from 'crocks/State/evalWith';
import execWith from 'crocks/State/execWith';
import State from 'crocks/State';

import nmap from 'crocks/Tuple/nmap';
import project from 'crocks/Tuple/project';
import Tuple from 'crocks/Tuple';

import log from 'crocks/Writer/log';
import read from 'crocks/Writer/read';
import Writer from 'crocks/Writer';

const noop = () => {};

const asyncValue1: Async = Async(() => 1);
const asyncValue2: Async = Async(() => 2);
const raceValue: Async = race(asyncValue1, asyncValue2);

raceValue.fork(noop, noop);

const eitherLeft: Either = Either.Left(1);
const eitherRight: Either = Either.Right(2);

eitherLeft.equals(eitherRight);

const tuple: Tuple = Tuple(1, 2);
