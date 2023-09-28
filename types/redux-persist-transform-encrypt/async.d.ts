import { Transform } from "redux-persist";

export interface AsyncEncryptorConfig {
    secretKey: string;
}

export default function createAsyncEncryptor<State, Raw>(config: AsyncEncryptorConfig): Transform<State, Raw>;
