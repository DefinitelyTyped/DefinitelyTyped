import { Transform } from './'

const syncTransform: Transform = () => 'result';

const asyncTransform: Transform = () => Promise.resolve('result');
