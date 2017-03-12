import * as moment from 'moment';

var range: moment.Range = moment.range(new Date(2012, 0, 15), new Date(2012, 4, 23));
var range2: moment.Range = moment.range(moment("2011-04-15", "YYYY-MM-DD"), moment("2011-11-27", "YYYY-MM-DD"));
var range3: moment.Range = moment.range([moment("2011-04-15", "YYYY-MM-DD"), moment("2011-11-27", "YYYY-MM-DD")]);
var range4: moment.Range = moment.range("2015-01-17T09:50:04+00:00/2015-04-17T08:29:55+00:00");

var date: moment.Moment = moment('2012-05- 15');

var res1: boolean = range.adjacent(range2);

var it0: Iterable<moment.Range> = range.by('days');
var it1: Iterable<moment.Range> = range.by('months', {exclusive: true});
var it2: Iterable<moment.Range> = range.by('years', {exclusive: false, step: 2});

var it3: Iterable<moment.Range> = range.byRange(range);
var it4: Iterable<moment.Range> = range.byRange(range, {exclusive: true});
var it5: Iterable<moment.Range> = range.byRange(range, {exclusive: false, step: 2});

var res2: moment.Moment = range.center();

var res3: moment.Range = range.clone();

var res4: boolean = range.contains(range);
var res5: boolean = range.contains(range, {exclusive: true});
var res6: boolean = range.contains(range, {exclusive: false});

var res10: number = range.diff('months', true);
var res11: number = range.diff('days');
var res12: number = range.diff();

var res13: number = range.duration('months', true);
var res14: number = range.duration('days');
var res15: number = range.duration();

var res16: moment.Range = range.intersect(range2);

var res17: boolean = range.isSame(range2);

var res18: boolean = range.isEqual(range2);

var res19: boolean = date.within(range);

var res20: boolean = range.overlaps(range2);
var res21: boolean = range.overlaps(range2, {adjacent: true});
var res22: boolean = range.overlaps(range2, {adjacent: false});

var it6: Iterable<moment.Range> = range.reverseBy('days');
var it7: Iterable<moment.Range> = range.reverseBy('months', {exclusive: true});
var it8: Iterable<moment.Range> = range.reverseBy('years', {exclusive: false, step: 2});

var it9: Iterable<moment.Range> = range.reverseByRange(range);
var it10: Iterable<moment.Range> = range.reverseByRange(range, {exclusive: true});
var it11: Iterable<moment.Range> = range.reverseByRange(range, {exclusive: false, step: 2});

var res23: moment.Range = range.add(range2);

var res24: Array<moment.Range> = range.subtract(range2);

var res25: Date[] = range.toDate();

var res26: string = range.toString();

var res27: number = range.valueOf();

var res28: moment.Moment = range.start;
var res29: moment.Moment = range.end;
