import isDate = require("is-date-object");

isDate();
isDate(undefined);
isDate(null);
isDate(false);
isDate(true);
isDate(42);
isDate('foo');
isDate((): void => {});
isDate([]);
isDate({});
isDate(/a/g);
isDate(new RegExp('a', 'g'));
isDate(new Date());
