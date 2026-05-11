interface ResultHash {
    [key: string]: string | string[] | ResultHash;
}

interface Options<Result> {
    /** Configure the output type. If true, the output will be a js object. */
    hash?: boolean | undefined;
    /**
     * Optional serializer function to override the default one. The function takes 3 arguments (result, key,
     * value) and should return new result hash and url encoded str serializers are provided with this module
     */
    serializer?: ((result: Result, key: string, value: string) => Result) | undefined;
    /** If true serialize disabled fields. */
    disabled?: boolean | undefined;
    /** If true serialize empty fields */
    empty?: boolean | undefined;
}

interface OptionsHash extends Options<ResultHash> {
    hash: true;
}

interface OptionsString extends Options<string> {
    hash: false;
}

declare function serialize(form: HTMLFormElement, options: OptionsHash | true): ResultHash;
declare function serialize(form: HTMLFormElement, options?: OptionsString | false): string;
declare function serialize<Result = string>(form: HTMLFormElement, options?: Options<Result> | boolean): Result;

export = serialize;
