

import { Optional, Some, None, Try, Right, Left, Either, Future } from "scalike";

// Optional
Optional(1).map(x => x + 1); // Some(2)
Optional(null).map(x => x + 1); // None
Optional(undefined).map(x => x + 1); // None
Optional(1).flatMap(x => Some(x + 1)).fold(0, x => x + 1); // 3

// Try
function something() { return 1; }
Try(something); // Success(1)
function throwError() { throw new Error; }
Try(throwError); // Failure(Error)
Try(() => 1).map(x => x + 1); // Success(2)

// Either
function validate(x: number): Either<string, number> {
  return x !== 1 ? Left<string, number>('this is not 1') : Right<string, number>(x);
}
validate(1).right().getOrElse(0); // 1
validate(2).left().getOrElse("err"); // "this is not 1"

// Future
Future(something).map(x => x + 1); // Future(2)
Future.successful(1).value; // Optional(Success(1)
const fu = Future(something);
Future.sequence([fu, fu, fu]); // Future([1, 1, 1])
