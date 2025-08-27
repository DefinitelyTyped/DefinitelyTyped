import moment from "moment";
import "moment-precise-range-plugin";

declare const m1: moment.Moment;
declare const m2: moment.Moment;

// Static methods
{
    // $ExpectType string
    moment.preciseDiff(m1, m2);
    // $ExpectType PreciseRangeValueObject
    moment.preciseDiff(m1, m2, true);
    // $ExpectType string
    moment.preciseDiff(m1, m2, false);
}

// Instance methods
{
    // $ExpectType string
    m1.preciseDiff(m2);
    // $ExpectType PreciseRangeValueObject
    m1.preciseDiff(m2, true);
    // $ExpectType string
    m1.preciseDiff(m2, false);
}
