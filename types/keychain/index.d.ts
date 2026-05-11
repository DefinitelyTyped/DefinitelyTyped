declare namespace keychainTypes {
    interface KeyChainBaseOptions {
        account: string;
        service: string;
        password: string;
        type?: "generic" | "internet";
    }

    type KeychainErrorCodes =
        | "UnsupportedPlatform"
        | "NoAccountProvided"
        | "NoServiceProvided"
        | "NoPasswordProvided"
        | "ServiceFailure"
        | "PasswordNotFound";

    type KeychainErrorType = `${KeychainErrorCodes}Error`;

    class KeychainError extends Error {
        code: KeychainErrorCodes;
        type: KeychainErrorType;
    }
}

declare function getPassword(
    options: Pick<keychainTypes.KeyChainBaseOptions, "account" | "service">,
    callback: (err: keychainTypes.KeychainError, password: string) => void,
): void;

declare function setPassword(
    options: keychainTypes.KeyChainBaseOptions,
    callback?: (err: keychainTypes.KeychainError) => void,
): void;

declare function deletePassword(
    options: Pick<keychainTypes.KeyChainBaseOptions, "account" | "service">,
    callback: (err: keychainTypes.KeychainError) => void,
): void;

declare const keychain: typeof keychainTypes & {
    getPassword: typeof getPassword;
    setPassword: typeof setPassword;
    deletePassword: typeof deletePassword;
};

export = keychain;
