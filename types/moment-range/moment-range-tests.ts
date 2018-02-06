import moment = require("moment");
import * as momentRange from "moment-range";

const range: momentRange.DateRange = new momentRange.DateRange(new Date(2012, 0, 15), new Date(2012, 4, 23));

const extendedMoment = momentRange.extendMoment(moment);

// Moment methods test
extendedMoment.add();
extendedMoment().add();

const range2: momentRange.DateRange = new momentRange.DateRange(moment("2011-04-15", "YYYY-MM-DD"), moment("2011-11-27", "YYYY-MM-DD"));
const range3: momentRange.DateRange = new momentRange.DateRange([moment("2011-04-15", "YYYY-MM-DD"), moment("2011-11-27", "YYYY-MM-DD")]);
const range4: momentRange.DateRange = new momentRange.DateRange("2015-01-17T09:50:04+00:00/2015-04-17T08:29:55+00:00");

const date: moment.Moment = moment('2012-05-15');

const res1: boolean = range.adjacent(range2);

const it0: Iterable<moment.Moment> = range.by('days');
const it1: Iterable<moment.Moment> = range.by('months', { exclusive: true });
const it2: Iterable<moment.Moment> = range.by('years', { exclusive: false, step: 2 });

const it3: Iterable<moment.Moment> = range.byRange(range);
const it4: Iterable<moment.Moment> = range.byRange(range, { exclusive: true });
const it5: Iterable<moment.Moment> = range.byRange(range, { exclusive: false, step: 2 });

const res2: moment.Moment = range.center();

const res3: momentRange.DateRange = range.clone();

const res4: boolean = range.contains(range);
const res5: boolean = range.contains(range, { exclusive: true });
const res6: boolean = range.contains(range, { exclusive: false });

const res10: number = range.diff('months', true);
const res11: number = range.diff('days');
const res12: number = range.diff();

const res13: number = range.duration('months', true);
const res14: number = range.duration('days');
const res15: number = range.duration();

const res16: momentRange.DateRange = range.intersect(range2);

const res17: boolean = range.isSame(range2);

const res18: boolean = range.isEqual(range2);

const res20: boolean = range.overlaps(range2);
const res21: boolean = range.overlaps(range2, { adjacent: true });
const res22: boolean = range.overlaps(range2, { adjacent: false });

const it6: Iterable<moment.Moment> = range.reverseBy('days');
const it7: Iterable<moment.Moment> = range.reverseBy('months', { exclusive: true });
const it8: Iterable<moment.Moment> = range.reverseBy('years', { exclusive: false, step: 2 });

const it9: Iterable<moment.Moment> = range.reverseByRange(range);
const it10: Iterable<moment.Moment> = range.reverseByRange(range, { exclusive: true });
const it11: Iterable<moment.Moment> = range.reverseByRange(range, { exclusive: false, step: 2 });

const res23: momentRange.DateRange = range.add(range2);

const res24: momentRange.DateRange[] = range.subtract(range2);

const res25: Date[] = range.toDate();

const res26: string = range.toString();

const res27: number = range.valueOf();

const res28: moment.Moment = range.start;
const res29: moment.Moment = range.end;

const res30: boolean = extendedMoment.within(range);
const res31: boolean = extendedMoment().within(range);
const res32: momentRange.DateRange = extendedMoment().range(moment("2011-04-15", "YYYY-MM-DD"), moment("2011-11-27", "YYYY-MM-DD"));
