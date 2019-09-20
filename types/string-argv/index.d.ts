// Type definitions for string-argv 0.1
// Project: https://github.com/mccormicka/string-argv
// Definitions by: Vladimir Tikhonov <https://github.com/vladimir-tikhonov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = parseArgsStringToArgv;

/**
 * Parses a string into an argument array to mimic `process.argv`.
 * @param value - Arguments that you would normally pass to the command line.
 * @param [env] - Adds to the environment position in the argv array.
 * If ommitted then there is no need to call argv.split(2) to remove the environment/file values.
 * However if your cli.parse method expects a valid argv value then you should include this value.
 * @param [file] - File that called the arguments.
 * If omitted then there is no need to call argv.split(2) to remove the environment/file values.
 * However if your cli.parse method expects a valid argv value then you should include this value.
 */
declare function parseArgsStringToArgv(value: string, env?: string, file?: string): string[];
