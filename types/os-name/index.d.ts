// Type definitions for os-name 2.0
// Project: https://github.com/sindresorhus/os-name#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = osName;

declare function osName(): string;
declare function osName(platform: NodeJS.Platform, release: string): string;
