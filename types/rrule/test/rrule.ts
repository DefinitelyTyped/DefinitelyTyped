import RRule = require('rrule');

// Create a rule:
let rule: RRule = new RRule({
    freq: RRule.WEEKLY,
    interval: 5,
    byweekday: [RRule.MO, RRule.FR],
    dtstart: new Date(2012, 1, 1, 10, 30),
    until: new Date(2012, 12, 31)
});

let x: Date[];
const y: string[] = [];

// Get all occurrence dates (Date instances):
x = rule.all();

// Get a slice:
x = rule.between(new Date(2012, 7, 1), new Date(2012, 8, 1));

// Get an iCalendar RRULE string representation:
// The output can be used with RRule.fromString().
y.push(rule.toString());

// Get a human-friendly text representation:
// The output can be used with RRule.fromText().
y.push(rule.toText());

// Get full a string representation of all options,
// including the default and inferred ones.
y.push(RRule.optionsToString(rule.options));

// Cherry-pick only some options from an rrule:
y.push(RRule.optionsToString({
    freq: rule.options.freq,
    dtstart: rule.options.dtstart,
}));

rule = RRule.fromString("FREQ=WEEKLY;DTSTART=20120201T093000Z");

// This is equivalent
rule = new RRule(RRule.parseString("FREQ=WEEKLY;DTSTART=20120201T093000Z"));

let options = RRule.parseString('FREQ=DAILY;INTERVAL=6');
options.dtstart = new Date(2000, 1, 1);
rule = new RRule(options);

rule = new RRule({
  freq: RRule.WEEKLY,
  count: 23
});
y.push(rule.toText());

rule = RRule.fromText('every day for 3 times');

options = RRule.parseText('every day for 3 times');
// {freq: 3, count: "3"}
options.dtstart = new Date(2000, 1, 1);
rule = new RRule(options);

// Test arrays
const multipleInstance = new RRule({freq: 3, byhour: [6, 12, 18]});
