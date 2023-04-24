import {Token} from '../token';
import {AWSError} from '../error';
export class TokenProviderChain {
    /**
     * Creates a new TokenProviderChain with a default set of providers specified by defaultProviders.
     */
    constructor(providers?: provider[])
    /**
     * Resolves the provider chain by searching for the first set of token in providers.
     */
    resolve(callback:(err: AWSError|null, token?: Token) => void): TokenProviderChain;
    /**
     * Return a Promise on resolve() function
     */
    resolvePromise(): Promise<Token>;
    /**
     * Returns a list of token objects or functions that return token objects. If the provider is a function, the function will be executed lazily when the provider needs to be checked for valid token. By default, this object will be set to the defaultProviders.
     */
    providers: Array<Token|provider>;

    static defaultProviders: provider[]
}

type provider = () => Token;
