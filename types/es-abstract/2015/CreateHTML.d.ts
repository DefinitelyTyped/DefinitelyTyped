/**
 * @throws {TypeError} If `string` or `value` is a `symbol`.
 */
declare function CreateHTML(
    string: string | number | bigint | boolean | object | null | undefined, // unknown & not symbol
    tag: string,
    attribute: string,
    value?: string | number | bigint | boolean | object | null, // unknown & not symbol
): string;
export = CreateHTML;
