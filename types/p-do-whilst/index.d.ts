// Type definitions for p-do-whilst 0.1
// Project: https://github.com/sindresorhus/p-do-whilst#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pDoWhilst;

declare function pDoWhilst(action: () => any, condition: () => boolean): Promise<void>;
