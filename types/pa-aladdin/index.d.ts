// Type definitions for pa-aladdin 1.0
// Project: https://github.com/pole1419/pa-aladdin
// Definitions by: pole1419 <https://github.com/pole1419>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Aladdin {
    export interface Env {
        isPro: boolean;
        isDev: boolean;
    }

    export interface count {
        (n: number): number;
    }
}

export default Aladdin
