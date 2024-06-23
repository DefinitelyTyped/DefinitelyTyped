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
