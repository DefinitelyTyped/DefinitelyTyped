// Type definitions for redux-persist-transform-encrypt 2.0
// Project: https://github.com/maxdeviant/redux-persist-transform-encrypt
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Gaurav Lahoti <https://github.com/dante-101>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Transform } from "redux-persist";

export interface EncryptorConfig {
    secretKey: string;
    onError?: (err: Error) => void;
}

export default function createEncryptor<State, Raw>(config: EncryptorConfig): Transform<State, Raw>;
