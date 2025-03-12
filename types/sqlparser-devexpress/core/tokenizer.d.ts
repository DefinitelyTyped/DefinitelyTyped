/**
 * Represents a single token from the tokenizer.
 */
export interface Token {
    type: string;
    value: string;
    dataType?: string;
}
