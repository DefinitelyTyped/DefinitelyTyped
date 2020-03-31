import { Name, parseFullName } from "parse-full-name";

const parsedName: Name = parseFullName('john doe sr');

parsedName.first; // $ExpectType string | undefined
parsedName.middle; // $ExpectType string | undefined
parsedName.last; // $ExpectType string | undefined
parsedName.nick; // $ExpectType string | undefined
parsedName.suffix; // $ExpectType string | undefined
parsedName.title; // $ExpectType string | undefined
parsedName.error; // $ExpectType [] | undefined
