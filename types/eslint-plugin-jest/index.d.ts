// Type definitions for eslint-plugin-jest 25.2
// Project: https://github.com/jest-community/eslint-plugin-jest
// Definitions by: Beth Hitch <https://github.com/dfoverdx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// NOTE: This file is incomplete.  It only contains the Rules, because that's all I need for my purposes and all I have
// time to fill out.

import { Linter } from 'eslint';

/*~ You can declare types that are available via importing the module */
export interface Rules extends Linter.RulesRecord {
    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
     */
    'consistent-test-it': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default 'test'
                 */
                fn: 'it' | 'test';
                /**
                 * @default 'it'
                 */
                withinDescribe: 'it' | 'test';
            }>
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
     */
    'expect-expect': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default ['expect']
                 */
                assertFunctionNames: string[];
                /**
                 * @default []
                 */
                additionalTestBlockFunctions: string[];
            }>
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
     */
    'max-nested-describe': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default 5
                 */
                max: number
            }>
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
     */
    'no-alias-methods': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
     */
    'no-commented-out-tests': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
     */
    'no-conditional-expect': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
     */
    'no-deprecated-functions': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
     */
    'no-disabled-tests': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
     */
    'no-done-callback': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
     */
    'no-duplicate-hooks': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
     */
    'no-export': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
     */
    'no-focused-tests': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
     */
    'no-hooks': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default []
                 */
                allow: Array<'afterEach' | 'afterAll' | 'beforeEach' | 'beforeAll'>;
            }>,
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
     */
    'no-identical-title': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-if.md
     */
    'no-if': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
     */
    'no-interpolation-in-snapshots': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
     */
    'no-jasmine-globals': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jest-import.md
     */
    'no-jest-import': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
     */
    'no-large-snapshots': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default 12
                 */
                maxSize: number;
                /**
                 * @default 6
                 */
                inlineMaxSize: number;
            }>,
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
     */
    'no-mocks-import': Linter.RuleEntry<[]>;

    /**
     * Bans are expressed in the form of a map, with the value being either a string message to be shown, or null if the
     * default rule message should be used.
     *
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
     */
    'no-restricted-matchers': Linter.RuleEntry<
        [
            Record<string, string | null>,
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
     */
    'no-standalone-expect': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default []
                 */
                additionalTestBlockFunctions: string[];
            }>,
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
     */
    'no-test-prefixes': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
     */
    'no-test-return-statement': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
     */
    'prefer-called-with': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
     */
    'prefer-expect-assertions': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                onlyFunctionsWithAsyncKeyword: boolean;
            }>,
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
     */
    'prefer-expect-resolves': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
     */
    'prefer-hooks-on-top': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
     */
    'prefer-lowercase-title': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default []
                 */
                ignore: Array<'describe' | 'test' | 'it'>;
                /**
                 * @default []
                 */
                allowedPrefixes: string[];
                /**
                 * @default false
                 */
                ignoreTopLevelDescribe: boolean;
            }>,
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
     */
    'prefer-spy-on': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
     */
    'prefer-strict-equal': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
     */
    'prefer-to-contain': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
     */
    'prefer-to-have-length': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
     */
    'prefer-todo': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
     */
    'require-hook': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
     */
    'require-to-throw-message': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
     */
    'require-top-level-describe': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
     */
    'valid-expect': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                alwaysAwait: boolean;
                /**
                 * @default 1
                 */
                minArgs: number;
                /**
                 * @default 1
                 */
                maxArgs: number;
            }>,
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
     */
    'valid-expect-in-promise': Linter.RuleEntry<[]>;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
     */
    'valid-title': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                ignoreTypeOfDescribeName: boolean;
                /**
                 * @default []
                 */
                disallowedWords: string[];
                /**
                 * @default {}
                 */
                mustNotMatch: Partial<Record<'describe' | 'test' | 'it', string>> | string;
                /**
                 * @default {}
                 */
                mustMatch: Partial<Record<'describe' | 'test' | 'it', string>> | string;
            }>,
        ]
    >;

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
     */
    'unbound-method': Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                ignoreStatic: boolean;
            }>,
        ]
    >;
}
