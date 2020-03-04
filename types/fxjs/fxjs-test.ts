import { go, log, add, delay, every, filter, find, flat, flatMap, map, range } from './index';

go([10, 20, 30], (..._: number[]) => log(_));
add(1, 2);
delay(100, 100);
every((a) => a > 10, [0, 1, 2]);
filter((a) => a > 10, [0, 10, 100]);
find(a => a > 10, [0, 10, 100]);
flat([[], [], []], 1);
flatMap(a => range(a), [1, 2]);
range(0, 10, 5);
map((a) => a + 1, [0, 1, 2]);
