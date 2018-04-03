import { shuffle, unshuffle } from 'seededshuffle';

const a: number[] = shuffle([1, 2, 3] as ReadonlyArray<number>, 'Example seed', true);
const b: number[] = unshuffle(a as ReadonlyArray<number>, 'Example seed', true);

const c: string[] = shuffle(['a', 'b', 'c'], 'another seed');
const d: string[] = unshuffle(c, 'another seed');
