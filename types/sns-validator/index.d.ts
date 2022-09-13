// Type definitions for sns-validator 0.3
// Project: https://github.com/aws/aws-js-sns-message-validator#readme
// Definitions by: Kévin Baumeyer <https://github.com/kevin68>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare class MessageValidator {
    /**
     * Create a new MessageValidator
     * @param hostPattern - A pattern used to validate that a message's certificate originates from a trusted domain. Default: `/^sns\.[a-zA-Z0-9\-]{3,}\.amazonaws\.com(\.cn)?$/`
     * @param encoding - The encoding of the messages being signed. Default is `utf8`
     */
    constructor(hostPattern?: RegExp, encoding?: string);

    /**
     * Validates a message's signature and passes it to the provided callback.
     * @param hash Can be the raw or parsed message.
     * @param cb The callback which is called with the message when it is valid or with an Error when it isn't.
     */
    validate(
        hash: string | Record<string, unknown>,
        cb: (err: Error | null, message?: Record<string, unknown>) => void,
    ): void;
}
export = MessageValidator;
