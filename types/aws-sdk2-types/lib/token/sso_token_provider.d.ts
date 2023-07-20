import {Token} from '../token';

export class SSOTokenProvider extends Token {
    /**
     * Creates a new SSOTokenProvider object.
     */
    constructor(options?: SSOTokenProviderOptions);
}

export interface SSOTokenProviderOptions {
  profile?: string
}
