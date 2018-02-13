// Type definitions for map-obj 2.0
// Project: https://github.com/sindresorhus/map-obj#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = mapObj;

declare function mapObj<O extends object, T extends string>(
    source: O, mapper: mapObj.Mapper<O, T, any>, options: mapObj.DeepOptions): object;
declare function mapObj<O extends object, O2 extends object, T extends string, U>(
    source: O, mapper: mapObj.Mapper<O, T, U>, options: mapObj.TargetOptions<O2>): O2 & {[K in T]: U};
declare function mapObj<O extends object, T extends string, U>(
    source: O, mapper: mapObj.Mapper<O, T, U>, options?: mapObj.Options): {[K in T]: U};

declare namespace mapObj {
    type Mapper<O extends object, T extends string, U> = (sourceKey: keyof O, sourceValue: O[keyof O], source: O) => [T, U];

    interface DeepOptions extends Options {
        deep: true;
    }

    interface TargetOptions<T extends object> extends Options {
        target: T;
    }

    interface Options {
        deep?: boolean;
        target?: object;
    }
}
