/**
 * Parses the `argv` value supplied (or `process.argv` by default), extracting and returning the `command` and remainder of `argv`. The command will be the first value in the `argv` array unless it is an option (e.g. `--help`).
 *
 * @param {string|string[]} - One or more command strings, one of which the user must supply. Include `null` to represent "no command" (effectively making a command optional).
 * @param [argv] {string[]} - An argv array, defaults to the global `process.argv` if not supplied.
 * @returns {{ command: string, argv: string[] }}
 * @throws `INVALID_COMMAND` - user supplied a command not specified in `commands`.
 */
declare function commandLineCommands(
    commands: (string | null)[],
    argv?: string[],
): { command: string | null; argv: string[] };

export = commandLineCommands;
