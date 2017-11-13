// Type definitions for p-whilst 1.0
// Project: https://github.com/sindresorhus/p-whilst#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pWhilst;

declare function pWhilst(condition: () => boolean, action: () => any): Promise<void>;
