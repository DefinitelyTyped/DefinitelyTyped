import React from 'react';
import { TokenInterface } from "./types";
/**
 * AuthContextInterface
 *
 * authState - Stores the value of authentication State
 * setAuthState - Sets the authState Value
 */
declare interface AuthContextInterface {
    authState: TokenInterface;
    setAuthState: React.Dispatch<React.SetStateAction<TokenInterface>>;
}
export declare const AuthContextProvider: React.Provider<AuthContextInterface | null>;
export declare const AuthContextConsumer: React.Consumer<AuthContextInterface | null>;
export declare const AuthContext: React.Context<AuthContextInterface | null>;
export {};
