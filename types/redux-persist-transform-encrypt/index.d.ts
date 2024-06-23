import { Transform } from "redux-persist";

export interface EncryptorConfig {
    secretKey: string;
    onError?: ((err: Error) => void) | undefined;
}

export default function createEncryptor<State, Raw>(config: EncryptorConfig): Transform<State, Raw>;
