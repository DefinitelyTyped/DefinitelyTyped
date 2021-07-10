// Type definitions for level-errors 3.0
// Project: https://github.com/Level/errors
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class LevelUPError extends Error {}

export class InitializationError extends LevelUPError {}

export class OpenError extends LevelUPError {}

export class ReadError extends LevelUPError {}

export class WriteError extends LevelUPError {}

export class NotFoundError extends LevelUPError {
    readonly notFound: true;
    readonly status: 404;
}

export class EncodingError extends LevelUPError {}
