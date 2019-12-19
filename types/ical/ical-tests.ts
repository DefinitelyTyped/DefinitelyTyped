import * as ical from 'ical';

const calendar: ical.FullCalendar = ical.parseFile('cal.ics');
const event: ical.CalendarComponent = calendar['uid'];

// $ExpectType CalendarComponentType
event.type;
// $ExpectType string | undefined
event.summary;
// $ExpectType Date | undefined
event.start;
// $ExpectType Geo | undefined
event.geo;
// $ExpectType string[] | undefined
event.categories;
// $ExpectType CalendarComponent[] | undefined
event.recurrences;
// $ExpectType FreeBusy | undefined
event.freebusy;
// $ExpectType string | ParamList | undefined
event.sequence;
