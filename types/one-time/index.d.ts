export = oneTime;

declare function oneTime<TFn extends Function>(fn: TFn): TFn; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
