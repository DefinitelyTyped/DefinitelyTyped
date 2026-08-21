export class FileNotFoundError extends Error {
    constructor(fileName: any);
}
export class MixedTypeError extends TypeError {
    constructor(...types: any[]);
}
export class NoSuchColumnError extends Error {
    constructor(column: any, columns: any);
}
export class WrongSchemaError extends Error {
    constructor(columns: any, expected: any);
}
export class ArgumentTypeError extends TypeError {
    constructor(input: any, expected: any);
}
export class SQLParseError extends Error {
    constructor(message: any);
}
export class TableAlreadyExistsError extends Error {
    constructor(tableName: any);
}
export class WrongTableNameError extends Error {
    constructor(tableName: any);
}
