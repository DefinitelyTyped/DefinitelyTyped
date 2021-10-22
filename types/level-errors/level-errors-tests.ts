import { LevelUPError, InitializationError, OpenError, ReadError, WriteError, NotFoundError, EncodingError } from 'level-errors';

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
