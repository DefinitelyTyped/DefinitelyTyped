export = oneTime;

declare function oneTime<TFn extends Function>(fn: TFn): TFn; // tslint:disable-line:ban-types
