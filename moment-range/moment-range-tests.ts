/// <reference path="moment-range.d.ts" />

var range: moment.Range = moment.range(new Date(2012, 0, 15), new Date(2012, 4, 23));
var range2: moment.Range = moment.range(moment("2011-04-15", "YYYY-MM-DD"), moment("2011-11-27", "YYYY-MM-DD"));
var range3: moment.Range = moment.range([moment("2011-04-15", "YYYY-MM-DD"), moment("2011-11-27", "YYYY-MM-DD")]);
var range4: moment.Range = moment.range("2015-01-17T09:50:04+00:00/2015-04-17T08:29:55+00:00");

var date: moment.Moment = moment(2012, 4, 15);

var res1: boolean = range.contains(date);
var res2: boolean = range.contains(date, false);
var res3: boolean = range.contains(date, true);

var res4: boolean = date.within(range);

var res5: boolean = range.overlaps(range2);

var res6: moment.Range = range.intersect(range2);

var res7: moment.Range = range.add(range2);

var res8: Array<moment.Range> = range.subtract(range2);

range.by('days', (moment: moment.Moment) => {  });
range.by(range2, (moment: moment.Moment) => {  });
range.by('d', (moment: moment.Moment) => {  }, true);

var res9: boolean = range.isSame(range2);

var res10: number = range.diff('months');
var res11: number = range.diff('days');
var res12: number = range.diff();

var res13: Date = range.toDate();
var res14: string = range.toString();

var res15: number = range.valueOf();

var res16: number = range.center();

var res17: moment.Range = range.clone();

var res18: moment.Moment = range.start;
var res19: moment.Moment = range.end;
