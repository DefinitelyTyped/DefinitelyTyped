import { TOO_EARLY } from "http-codes";

const _tooEarly = TOO_EARLY; // $ExpectType number
_tooEarly + 5;
