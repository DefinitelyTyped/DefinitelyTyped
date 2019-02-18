// Type definitions for internal-ip 3.0
// Project: https://github.com/sindresorhus/internal-ip#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const v6: IPGetterFn;
export const v4: IPGetterFn;

export interface IPGetterFn { // tslint:disable-line:interface-name
    (): Promise<string | null>;
    sync(): string | null;
}
