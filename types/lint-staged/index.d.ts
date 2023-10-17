// This exists so lit-staged.config.js can do this:
// /**
//  * @type {import('lint-staged').Config}
// */
// export default { ... };

export type Commands = string[] | string;

export type ConfigFn = (filenames: string[]) => Commands | Promise<Commands>;

export type Config = ConfigFn | { [key: string]: Commands | ConfigFn };
