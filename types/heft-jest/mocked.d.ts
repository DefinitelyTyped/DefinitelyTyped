// The declarations here are based on this file from the "ts-jest" package:
// https://github.com/kulshekhar/ts-jest/blob/ac88cd6649c25777f41139b6429980c8a77a38af/src/util/testing.ts
//
// The main change was to make every declarations importable, and move them into a global namespace.
// The original author's LICENSE.md is reproduced below.

// MIT License
//
// Copyright (c) 2016-2018
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

declare namespace mocked {
    type MockableFunction = (...args: any[]) => any;
    type MethodKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? K : never }[keyof T];
    type PropertyKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? never : K }[keyof T];
    type ArgumentsOf<T> = T extends (...args: infer A) => any ? A : never;
    type ConstructorArgumentsOf<T> = T extends new (...args: infer A) => any ? A : never;

    interface MockWithArgs<T extends MockableFunction> extends jest.MockInstance<ReturnType<T>, ArgumentsOf<T>> {
        new (...args: ConstructorArgumentsOf<T>): T;
        (...args: ArgumentsOf<T>): ReturnType<T>;
    }

    type MaybeMockedConstructor<T> = T extends new (...args: any[]) => infer R
        ? jest.MockInstance<R, ConstructorArgumentsOf<T>>
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
