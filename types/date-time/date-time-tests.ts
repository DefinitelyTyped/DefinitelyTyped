import DateTime from "date-time";

DateTime();

DateTime({date: new Date(1989, 2, 4, 10)});

DateTime({showTimeZone: true});

DateTime({local: false});

DateTime({local: false, showTimeZone: true});

DateTime({showMilliseconds: true});
