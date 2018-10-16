// Type definitions for meow 5.x
// Project: https://github.com/sindresorhus/meow
// Definitions by: KnisterPeter <https://github.com/KnisterPeter>
//                 Lindsey Smith <https://github.com/praxxis>
//                 Jason Dreyzehner <https://github.com/bitjson>
//                 Daniel Perez Alvarez <https://github.com/danielpa9708>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as buildOptions from 'minimist-options';

declare function meow<O extends meow.Options>(
    helpMessage: string | ReadonlyArray<string>,
    options: O
): meow.Result<O>;

declare function meow<O extends meow.Options>(
    options: string | ReadonlyArray<string> | O
): meow.Result<O>;
declare namespace meow {
    interface Options {
        description?: string | boolean;
        help?: string | boolean;
        version?: string | boolean;
        pkg?: any;
        argv?: ReadonlyArray<string>;
        inferType?: boolean;
        flags?: buildOptions.Options;
        autoHelp?: boolean;
        autoVersion?: boolean;
        /**
         * Caution: Explicitly specifying undefined for booleanDefault
         * has different meaning from omitting key itself.
         */
        booleanDefault?: boolean | null;
    }

    interface Result<O extends Options, F = $PropertyType<O, 'flags'>> {
        input: string[];
        flags: {
            [id in keyof F]: F[id] extends GenericOption<infer T>
                ? MapTypeToRealType<T>
                : never
        } & { [id: string]: any};
        pkg: any;
        help: string;
        showHelp(code?: number): void;
        showVersion(): void;
    }

    type GenericOption<T extends buildOptions.Type> =
      | {
        type: buildOptions.Type;
        alias?: string | string[];
        default?: any;
      }
      | T;

  type MapTypeToRealType<T extends buildOptions.Type> = T extends 'string'
    ? string
    : T extends 'boolean' ? boolean : never;

  type $PropertyType<T extends object, K extends keyof T> = T[K]; // from utility-types
}

export = meow;
