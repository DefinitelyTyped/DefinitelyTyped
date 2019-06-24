export abstract class Metric {
    protected __brand: never;
    constructor(name: string, isTime?: boolean);
    add(value: number | boolean, tags?: { [name: string]: string }): void;
}

export class Counter extends Metric {
    protected __brand: never;
}
export class Gauge extends Metric {
    protected __brand: never;
}
export class Rate extends Metric {
    protected __brand: never;
}
export class Trend extends Metric {
    protected __brand: never;
}
