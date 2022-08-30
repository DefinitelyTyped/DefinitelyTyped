// Type definitions for heft-jest 1.0
// Project: https://github.com/octogonz/heft-jest
// Definitions by: Pete Gonzalez <https://github.com/octogonz>
//                 Ian Clanton-Thuon <https://github.com/iclanton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

type MockInstance<T> = import('jest-mock').MockInstance<T>;

namespace mocked {
    type MockableFunction = (...args: any[]) => any;
    type MethodKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? K : never }[keyof T];
    type PropertyKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? never : K }[keyof T];
    type ArgumentsOf<T> = T extends (...args: infer A) => any ? A : never;
    type ConstructorArgumentsOf<T> = T extends new (...args: infer A) => any ? A : never;

    interface MockWithArgs<T extends MockableFunction> extends MockInstance<T> {
        new (...args: ConstructorArgumentsOf<T>): T;
        (...args: ArgumentsOf<T>): ReturnType<T>;
    }

    type MaybeMockedConstructor<T> = T extends new (...args: any[]) => infer R
        ? MockInstance<(...args: ConstructorArgumentsOf<T>) => R>
        : {};
    type MockedFunction<T extends MockableFunction> = MockWithArgs<T> & { [K in keyof T]: T[K] };
    type MockedFunctionDeep<T extends MockableFunction> = MockWithArgs<T> & MockedObjectDeep<T>;
    type MockedObject<T> = MaybeMockedConstructor<T> &
        { [K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFunction<T[K]> : T[K] } &
        { [K in PropertyKeysOf<T>]: T[K] };
    type MockedObjectDeep<T> = MaybeMockedConstructor<T> &
        { [K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFunctionDeep<T[K]> : T[K] } &
        { [K in PropertyKeysOf<T>]: MaybeMockedDeep<T[K]> };

    type MaybeMockedDeep<T> = T extends MockableFunction
        ? MockedFunctionDeep<T>
        : T extends object
        ? MockedObjectDeep<T>
        : T;

    type MaybeMocked<T> = T extends MockableFunction ? MockedFunction<T> : T extends object ? MockedObject<T> : T;
}

/**
 * Tests can use the `mocked()` function to access additional properties that
 * Jest adds to a mocked object.
 *
 * @remarks
 *
 * In the example below, `mockClear()` is not part of the type signature for the
 * real `SoundPlayer` class.  It is added by Jest.  The `mocked()` function returns
 * its input object but extends the type signature with these additional members.
 *
 * ```ts
 * jest.mock('./SoundPlayer');
 * import SoundPlayer from './SoundPlayer';
 *
 * // mockClear() is provided by Jest's API:
 * mocked(SoundPlayer).mockClear();
 * ```
 *
 * Heft's API is based on `mocked()` from `ts-jest`, but provided as a global API
 * so you don't need to explicitly import it.  For more information, see the `ts-jest`
 * documentation here:
 *
 * https://kulshekhar.github.io/ts-jest/user/test-helpers
 */
function mocked<T>(item: T, deep?: false): mocked.MaybeMocked<T>;
function mocked<T>(item: T, deep: true): mocked.MaybeMockedDeep<T>;
