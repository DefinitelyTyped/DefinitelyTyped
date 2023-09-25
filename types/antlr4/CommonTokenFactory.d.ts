import CommonToken from "./CommonToken";
import Token from "./Token";

export class TokenFactory {}

/**
 * This default implementation of {@link TokenFactory}
 * creates {@link CommonToken} objects.
 */
export default class CommonTokenFactory extends TokenFactory {
    /**
     * The default {@link CommonTokenFactory} instance.
     *
     * This token factory does not explicitly copy token
     * text when constructing tokens.
     */
    static readonly DEFAULT: CommonTokenFactory;

    constructor(copyText: boolean);

    create(
        source: Token["source"] | undefined,
        type: number | undefined,
        text: string | null,
        channel: number,
        start: number,
        stop: number,
        line: number,
        column: number,
    ): CommonToken;

    createThin(type: number, text: string): CommonToken;
}
