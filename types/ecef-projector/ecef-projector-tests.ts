import { project, unproject } from 'ecef-projector';

// $ExpectType number[]
const ll = project(35.0, 135.0, 10.1);

// $ExpectType number[]
const ret = unproject(2222222, 1000, 1111);
