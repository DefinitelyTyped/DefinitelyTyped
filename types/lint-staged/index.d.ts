// Type definitions for lint-staged 13.2
// Project: https://github.com/okonet/lint-staged#readme
// Definitions by: Andrey Okonetchnikov <https://github.com/okonet>
//                 Saiichi Hashimoto <https://github.com/saiichihashimoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This exists so lit-staged.config.js can do this:
// /**
//  * @type {import('lint-staged').Config}
// */
// export default { ... };

export type Commands = string[] | string;

export type ConfigFn = (filenames: string[]) => Commands | Promise<Commands>;

export type Config = ConfigFn | { [key: string]: Commands | ConfigFn };
