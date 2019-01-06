// Type definitions for parents 1.0
// Project: https://github.com/substack/node-parents
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Return an array of the parent directories of 'dir', including and starting with 'dir'.
 * If a dir isn't specified, process.cwd() will be used.
 * Optionally specify an 'opts.platform' to control whether the separator and
 * paths works the unixy way with '/' or the windowsy way where sometimes things use '/' and
 * sometimes they use '\\' and also there are leading drive letters and other exotic features.
 * If 'opts.platform' isn't specified, 'process.platform' will be used.
 * Anything that matches /^win/ will use the windowsy behavior.
 */
declare function parents(dir?: string, opts?: { platform?: string }): string[];

export = parents;
