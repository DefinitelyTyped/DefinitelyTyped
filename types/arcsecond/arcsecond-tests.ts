import {
  char,
  many,
  sequenceOf,
  regex,
  anythingExcept,
  sepBy,
  choice,
  between,
  Parser,
  toValue
} from 'arcsecond';

declare const console: { log: (...msgs: any[]) => void };

const join = (separator: string) => (array: any[]) => array.join(separator);
const joinedMany = (parser: Parser<any, any, any>) => many(parser).map(join(''));

const csvString = between<string, string, null>(char('"'))(char('"'))(joinedMany(choice([
  sequenceOf<string, [string, string], null>([char('\\'), char('"')]).map(join('')),
  anythingExcept(regex(/^["\n]/))
])));

const cell = joinedMany(choice([
  csvString,
  anythingExcept(regex(/^[,\n]/))
]));
const cells = sepBy(char(','))(cell);
const parser = sepBy(char('\n'))(cells);

const data = `
1,React JS,"A declarative, efficient, and flexible JavaScript library for building user interfaces"
2,Vue.js,"Vue.js is a progressive incrementally-adoptable JavaScript framework for building UI on the web."
3,Angular,"One framework. Mobile & desktop."
4,ember.js,"Ember.js - A JavaScript framework for creating ambitious web applications"
`;

console.log(toValue(parser.run(data)));
