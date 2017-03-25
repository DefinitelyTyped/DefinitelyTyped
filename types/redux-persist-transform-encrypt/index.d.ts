// Type definitions for redux-persist-transform-encrypt 1.0
// Project: https://github.com/maxdeviant/redux-persist-transform-encrypt
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Transform } from "redux-persist";

export interface EncryptorConfig {
    secretKey: string;
}

export default function createEncryptor<State, Raw>(config: EncryptorConfig): Transform<State, Raw>;
