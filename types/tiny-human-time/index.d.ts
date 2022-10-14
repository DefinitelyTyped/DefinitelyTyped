// Type definitions for tiny-human-time 1.2
// Project: https://github.com/danasilver/tiny-human-time#readme
// Definitions by: Jimmy Cuadra <https://github.com/jimmycuadra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = tinyHumanTime;

declare function tinyHumanTime(
    t1: Date | number | [number, number],
    t2?: Date | number | [number, number],
    u?: 'short' | 'long',
): string;

declare namespace tinyHumanTime {
    function short(t1: Date | number | [number, number], t2?: Date | number | [number, number]): string;
}
