import { createInterval } from "valiant";

// To make an Interval, you need to create a constructor:
const Interval = createInterval();

// By default it will manage integers:
// (0,100] — the numbers 0 to 100, excluding 0
new Interval(
    Interval.exclusiveEndpoint(0),
    Interval.inclusiveEndpoint(100)
);

// You can provide a custom sort function to support a different data type:
const DateInterval = createInterval<Date>(function sortDates(a, b) {
    return a.getTime() - b.getTime();
});

// [12 hours ago,now] — 12 hours ago until now
new DateInterval(
    DateInterval.incEnd(
        new Date(Date.now() - (1000 * 60 * 60 * 12))
    ),
    DateInterval.incEnd(
        new Date(Date.now())
    )
);

// You can do calculations with two intervals:
const i = new Interval(Interval.incEnd(1), Interval.incEnd(3));
const j = new Interval(Interval.incEnd(2), Interval.incEnd(4));
const k = new Interval(Interval.incEnd(5), Interval.incEnd(6));

i.intersection(j);         // 2, 3
i.hull(j);                 // 1, 4
i.contiguousWith(j);       // true
i.unify(j);                // 1, 4

i.intersection(k);         // Interval.empty
i.hull(k);                 // 1, 6
i.contiguousWith(k);       // false
i.unify(k);                // Interval.empty

i.equalTo(j);              // false
i.contains(2);             // true
i.isSubsetOf(j);           // false

// If there is no possible unification, the empty set (Interval.empty) results.
// There are two special intervals:
Interval.empty; // {}
Interval.whole; // -Infinity, Infinity

// You can also create an interval of value:
Interval.singleton(5); // [5,5]
