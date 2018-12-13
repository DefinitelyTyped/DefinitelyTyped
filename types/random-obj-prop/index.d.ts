// Type definitions for random-obj-prop 1.0
// Project: https://github.com/sindresorhus/random-obj-prop
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = randomObjProp;

declare function randomObjProp<T>(input: { [key: string]: T }): T;
