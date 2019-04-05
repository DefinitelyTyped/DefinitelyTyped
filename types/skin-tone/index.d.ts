// Type definitions for skin-tone 1.0
// Project: https://github.com/sindresorhus/skin-tone#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = skinTone;

declare function skinTone(emoji: string, type: 0 | 1 | 2 | 3 | 4 | 5): string;

declare namespace skinTone {
    const NONE: 0;
    const WHITE: 1;
    const CREAM_WHITE: 2;
    const LIGHT_BROWN: 3;
    const BROWN: 4;
    const DARK_BROWN: 5;
}
