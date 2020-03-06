import { go, log, add, delay, every, filter, find, flat, flatMap, map, range } from 'fxjs';

go([10, 20, 30], (..._: number[]) => log(_));
add(1, 2);
delay(100, 100);
every((a: number) => a > 10, [0, 1, 2]);
filter((a: number) => a > 10, [0, 10, 100]);
find((a: number) => a > 10, [0, 10, 100]);
flat([[], [], []], 1);
flatMap((a: number) => a, [1, 2]);
range(0, 10, 5);
map((a: number) => a + 1, [0, 1, 2]);
