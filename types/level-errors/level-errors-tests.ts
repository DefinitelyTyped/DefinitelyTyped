import {
    EncodingError,
    InitializationError,
    LevelUPError,
    NotFoundError,
    OpenError,
    ReadError,
    WriteError,
} from "level-errors";

let e: LevelUPError;
e = new InitializationError();
e = new OpenError();
e = new ReadError();
e = new WriteError();
e = new NotFoundError();
e = new EncodingError();

const notFound = new NotFoundError();
// $ExpectType true
notFound.notFound;
// $ExpectType 404
notFound.status;
