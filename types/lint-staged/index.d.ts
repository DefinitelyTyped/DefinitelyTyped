// This exists so lint-staged.config.js can do this:
// /**
//  * @type {import('lint-staged').Config}
// */
// export default { ... };

export type Command = string;

export type Commands = Command[] | Command;

export type ConfigFn = (filenames: string[]) => Commands | Promise<Commands>;

export type Config = ConfigFn | { [key: string]: Command | ConfigFn | Array<Command | ConfigFn> };
