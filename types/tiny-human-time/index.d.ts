export = tinyHumanTime;

declare function tinyHumanTime(
    t1: Date | number | [number, number],
    t2?: Date | number | [number, number],
    u?: "short" | "long",
): string;

declare namespace tinyHumanTime {
    function short(t1: Date | number | [number, number], t2?: Date | number | [number, number]): string;
}
