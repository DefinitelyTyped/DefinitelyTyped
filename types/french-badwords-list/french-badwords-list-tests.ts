import { array, object, regex } from "french-badwords-list";

// $ExpectType string[]
array;

// $ExpectType { [key: string]: number; }
object;

// $ExpectType RegExp
regex;
