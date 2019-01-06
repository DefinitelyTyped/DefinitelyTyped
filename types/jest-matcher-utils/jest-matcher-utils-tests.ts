import chalk from 'chalk';
import * as utils from 'jest-matcher-utils';

utils.EXPECTED_COLOR; // $ExpectType Chalk
utils.RECEIVED_COLOR; // $ExpectType Chalk
utils.SUGGEST_TO_EQUAL; // $ExpectType string

utils.stringify({}); // $ExpectType string
utils.stringify({}, 44);
utils.stringify({}, '44'); // $ExpectError
utils.stringify({}, false); // $ExpectError

utils.highlightTrailingWhitespace('', chalk.red); // $ExpectType string
utils.highlightTrailingWhitespace(44, chalk.blue); // $ExpectError
utils.highlightTrailingWhitespace(false, chalk.green); // $ExpectError

utils.printReceived({}); // $ExpectType string
utils.printExpected({}); // $ExpectType string
utils.printWithType('obj', {}, () => ''); // $ExpectType string

utils.ensureNoExpected(null, ''); // $ExpectType void
utils.ensureNoExpected('', '');

utils.ensureActualIsNumber(66); // $ExpectType void
utils.ensureActualIsNumber(66, 'highwayRouteMatcher');
utils.ensureActualIsNumber('66', 'highwayRouteMatcher');

utils.ensureExpectedIsNumber(66); // $ExpectType void
utils.ensureExpectedIsNumber(66, 'highwayRouteMatcher');
utils.ensureExpectedIsNumber('66', 'highwayRouteMatcher');

utils.ensureNumbers(66, 66); // $ExpectType void
utils.ensureNumbers(66, 66, 'highwayRouteMatcher');
utils.ensureNumbers('66', 'highwayRouteMatcher');
utils.ensureNumbers(66); // $ExpectError

utils.pluralize('fox', 1); // $ExpectType string
utils.pluralize('fox', 9);
utils.pluralize('fox', 'a yuge number'); // $ExpectError
utils.pluralize(1, 2); // $ExpectError

utils.matcherHint('[.not]primeNumberMatcher'); // $ExpectType string
utils.matcherHint('[.not]primeNumberMatcher', '12');
utils.matcherHint('[.not]primeNumberMatcher', '12', '13');
utils.matcherHint('[.not]primeNumberMatcher', '12', '13', {});
utils.matcherHint('[.not]primeNumberMatcher', '12', '13', {
    secondArgument: ''
});
utils.matcherHint('[.not]primeNumberMatcher', '12', '13', {
    secondArgument: '',
    isDirectExpectCall: true
});
utils.matcherHint('[.not]primeNumberMatcher', '12', '13', {
    secondArgument: '',
    isDirectExpectCall: true,
    notAnOption: 'notAnOptionValue' // $ExpectError
});
