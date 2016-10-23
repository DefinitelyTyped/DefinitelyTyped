import Validator = ValidateJS.Validator;
import Field = ValidateJS.Field;
import Constraints = ValidateJS.Constraints;

let validator: Validator;
validator = {};
validator = {message: 'test'};
validator = {message: (value: any, attribute: any, validatorOptions: any, attributes: any, globalOptions: any) => 'test'};

let date: Validator.Date;
date = {};
date = {
	earliest: 'a',
	latest: 'b',
	notValid: 'c',
	tooEarly: 'd',
	tooLate: 'e',
	message: 'test',
};

let dateTime: Validator.DateTime;
dateTime = {};
dateTime = {
	dateOnly: true,
	earliest: 'a',
	latest: 'b',
	notValid: 'c',
	tooEarly: 'd',
	tooLate: 'e',
	message: 'test',
};

let email: Validator.Email;
email = {};
email = {message: 'test'};

let equality: Validator.Equality;
equality = {};
equality = {
	attribute: 'a',
	comparator: (v1: any, v2: any) => true,
	message: 'test',
};

let exclusion: Validator.Exclusion;
exclusion = {
	within: ['a', 'b'],
	message: 'test',
};
exclusion = {
	within: {a: 'b', c: 'd'},
};

let format: Validator.Format;
format = {
	pattern: 'a',
	message: 'test',
};
format = {
	pattern: /a/g,
};
format = {
	pattern: new RegExp('a'),
};

let inclusion: Validator.Inclusion;
inclusion = {
	within: ['a', 'b'],
	message: 'test',
};
inclusion = {
	within: {a: 'b', c: 'd'},
};

let _length: Validator.Length;
_length = {};
_length = {
	is: 1,
	notValid: 'a',
	wrongLength: 'b',
	message: 'test',
	tokenizer: (value: any[]) => [1, 2],
};
_length = {
	minimum: 2,
	maximum: 4,
	tooShort: 'a',
	tooLong: 'b',
	tokenizer: (value: string) => 'test',
};

let numericality: Validator.Numericality;
numericality = {};
numericality = {
	onlyInteger: true,
	strict: true,
	equalTo: 8,
	divisibleBy: 4,
	even: true,
	notValid: 'a',
	notInteger: 'b',
	notEqualTo: 'c',
	notDivisibleBy: 'd',
	notEven: 'e',
	message: 'test',
};
numericality = {
	greaterThan: 4,
	lessThan: 10,
	odd: true,
	notGreaterThan: 'a',
	notLessThan: 'b',
	notOdd: 'c',
};
numericality = {
	greaterThanOrEqualTo: 4,
	lessThanOrEqualTo: 7,
	notGreaterThanOrEqualTo: 'a',
	notLessThanOrEqualTo: 'b',
};

let presence: Validator.Presence;
presence = {};
presence = {message: 'test'};

let url: Validator.Url;
url = {};
url = {
	schemes: ['a', /b/g, new RegExp('c')],
	allowLocal: true,
	message: 'test',
};

let field: Field;
field = {};
field = {
	date: {earliest: 'a'},
	datetime: {dateOnly: true},
	email: {message: 'test'},
	equality: {attribute: 'b'},
	exclusion: {within: ['c']},
	format: {pattern: 'd'},
	inclusion: {within: ['e']},
	length: {is: 4},
	numericality: {onlyInteger: true},
	presence: {message: 'test2'},
	url: {schemes: ['f']},
};
field = {
	date: true,
	datetime: true,
	email: true,
	equality: 'a',
	exclusion: ['b'],
	format: 'c',
	inclusion: ['d'],
	numericality: true,
	presence: true,
	url: true,
};
field = {
	format: /a/g,
};
field = {
	date: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({earliest: 'a'}),
	datetime: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({dateOnly: true}),
	email: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({message: 'test'}),
	equality: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({attribute: 'b'}),
	exclusion: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({within: ['c']}),
	format: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({pattern: 'd'}),
	inclusion: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({within: ['e']}),
	length: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({is: 4}),
	numericality: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({onlyInteger: true}),
	presence: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({message: 'test2'}),
	url: (value: any, attributes: any, attributeName: any, options: any, constraints: any) => ({schemes: ['f']}),
};

let constraints: Constraints;
constraints = {};
constraints = {
	a: {date: true},
	b: (value: any, attribute: any, attributeName: any, options: any, constraints: any) => ({datetime: true}),
};