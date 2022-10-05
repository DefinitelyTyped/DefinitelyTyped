import Token from './Token';

export default class CommonToken extends Token {
    constructor(source?: Token['source'], type?: number, channel?: number, start?: number, stop?: number);

    /**
     * Constructs a new {@link CommonToken} as a copy of another {@link Token}.
     */
    clone(): CommonToken;

    static readonly EMPTY_SOURCE: [null, null];
}
