import { Name, parseFullName } from 'parse-full-name';

const parsedName: Name = parseFullName('john doe sr');

parsedName.first; // $ExpectType string
parsedName.middle; // $ExpectType string
parsedName.last; // $ExpectType string
parsedName.nick; // $ExpectType string
parsedName.suffix; // $ExpectType string
parsedName.title; // $ExpectType string
parsedName.error; // $ExpectType []
