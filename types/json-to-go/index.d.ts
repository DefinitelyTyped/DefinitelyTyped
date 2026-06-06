interface JsonToGoResult {
    go: string;
    error: string;
}

declare function jsonToGo(
    json: string,
    typename: string,
    flatten: boolean,
    example: boolean,
    allOmitEmpty: boolean,
): JsonToGoResult;
declare function jsonToGo(json: string, typename: string, flatten: boolean, example: boolean): JsonToGoResult;
declare function jsonToGo(json: string, typename: string, flatten: boolean): JsonToGoResult;
declare function jsonToGo(json: string, typename: string): JsonToGoResult;

export = jsonToGo;
