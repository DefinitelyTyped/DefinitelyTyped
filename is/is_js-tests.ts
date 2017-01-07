

//#region Type checks

var getArguments = function () {
    return arguments;
};
var arguments = getArguments();
is.arguments(arguments);
is.not.arguments({ foo: 'bar' });
is.all.arguments(arguments, 'bar');
is.any.arguments(['foo'], arguments);
is.all.arguments([arguments, 'foo', 'bar']);

is.array(['foo', 'bar', 'baz']);
is.not.array({ foo: 'bar' });
is.all.array(['foo'], 'bar');
is.any.array(['foo'], 'bar');
is.all.array([[1, 2], 'foo', 'bar']);

is.boolean(true);
is.not.boolean({ foo: 'bar' });
is.all.boolean(true, 'bar');
is.any.boolean(true, 'bar');
is.all.boolean([true, 'foo', 'bar']);

is.date(new Date());
is.not.date({ foo: 'bar' });
is.all.date(new Date(), 'bar');
is.any.date(new Date(), 'bar');
is.all.date([new Date(), 'foo', 'bar']);

is.error(new Error());
is.not.error({ foo: 'bar' });
is.all.error(new Error(), 'bar');
is.any.error(new Error(), 'bar');
is.all.error([new Error(), 'foo', 'bar']);

is.function(toString);
is.not.function({ foo: 'bar' });
is.all.function(toString, 'bar');
is.any.function(toString, 'bar');
is.all.function([toString, 'foo', 'bar']);

is.nan(NaN);
is.not.nan(42);
is.all.nan(NaN, 1);
is.any.nan(NaN, 2);
is.all.nan([NaN, 'foo', 1]);

is.null(null);
is.not.null(42);
is.all.null(null, 1);
is.any.null(null, 2);
is.all.null([null, 'foo', 1]);

is.number(42);
is.not.number('42');
is.all.number('foo', 1);
is.any.number({}, 2);
is.all.number([42, 'foo', 1]);

is.object({ foo: 'bar' });
is.object(toString);
is.not.object('foo');
is.all.object({}, 1);
is.any.object({}, 2);
is.all.object([{}, new Object()]);

is.json({ foo: 'bar' });
is.json(toString);
is.not.json([]);
is.all.json({}, 1);
is.any.json({}, 2);
is.all.json([{}, { foo: 'bar' }]);

is.regexp(/test/);
is.not.regexp(['foo']);
is.all.regexp(/test/, 1);
is.any.regexp(new RegExp('ab+c'), 2);
is.all.regexp([{}, /test/]);

is.string('foo');
is.not.string(['foo']);
is.all.string('foo', 1);
is.any.string('foo', 2);
is.all.string([{}, 'foo']);

is.char('f');
is.not.char(['foo']);
is.all.char('f', 1);
is.any.char('f', 2);
is.all.char(['f', 'o', 'o']);

is.undefined(undefined);
is.not.undefined(null);
is.all.undefined(undefined, 1);
is.any.undefined(undefined, 2);
is.all.undefined([{}, undefined]);

is.sameType(42, 7);
is.sameType(42, '7');
is.not.sameType(42, 7);

//#endregion

//#region Presence checks

is.empty({});
is.empty([]);
is.empty('');
is.not.empty(['foo']);
is.all.empty('', {}, ['foo']);
is.any.empty([], 42);
is.all.empty([{}, 'foo']);

is.existy({});
is.existy(null);
is.not.existy(undefined);
is.all.existy(null, ['foo']);
is.any.existy(undefined, 42);
is.all.existy([{}, 'foo']);

is.truthy(true);
is.truthy(null);
is.not.truthy(false);
is.all.truthy(null, true);
is.any.truthy(undefined, true);
is.all.truthy([{}, true]);

is.falsy(false);
is.falsy(null);
is.not.falsy(true);
is.all.falsy(null, false);
is.any.falsy(undefined, true);
is.all.falsy([false, true, undefined]);

is.space(' ');
is.space('foo');
is.not.space(true);
is.all.space(' ', 'foo');
is.any.space(' ', true);
is.all.space([' ', 'foo', undefined]);

//#endregion

//#region RegExp checks

is.url('http://www.test.com');
is.url('foo');
is.not.url(true);
is.all.url('http://www.test.com', 'foo');
is.any.url('http://www.test.com', true);
is.all.url(['http://www.test.com', 'foo', undefined]);

is.email('test@test.com');
is.email('foo');
is.not.email('foo');
is.all.email('test@test.com', 'foo');
is.any.email('test@test.com', 'foo');
is.all.email(['test@test.com', 'foo', undefined]);

is.creditCard(378282246310005);
is.creditCard(123);
is.not.creditCard(123);
is.all.creditCard(378282246310005, 123);
is.any.creditCard(378282246310005, 123);
is.all.creditCard([378282246310005, 123, undefined]);

is.alphaNumeric('alphaNu3er1k');
is.alphaNumeric('*?');
is.not.alphaNumeric('*?');
is.all.alphaNumeric('alphaNu3er1k', '*?');
is.any.alphaNumeric('alphaNu3er1k', '*?');
is.all.alphaNumeric(['alphaNu3er1k', '*?']);

is.timeString('13:45:30');
is.timeString('90:90:90');
is.not.timeString('90:90:90');
is.all.timeString('13:45:30', '90:90:90');
is.any.timeString('13:45:30', '90:90:90');
is.all.timeString(['13:45:30', '90:90:90']);

is.dateString('11/11/2011');
is.dateString('90/11/2011');
is.not.dateString('90/11/2011');
is.all.dateString('11/11/2011', '90/11/2011');
is.any.dateString('11/11/2011', '90/11/2011');
is.all.dateString(['11/11/2011', '90/11/2011']);

is.usZipCode('02201-1020');
is.usZipCode('123');
is.not.usZipCode('123');
is.all.usZipCode('02201-1020', '123');
is.any.usZipCode('02201-1020', '123');
is.all.usZipCode(['02201-1020', '123']);

is.caPostalCode('L8V3Y1');
is.caPostalCode('L8V 3Y1');
is.caPostalCode('123');
is.not.caPostalCode('123');
is.all.caPostalCode('L8V3Y1', '123');
is.any.caPostalCode('L8V3Y1', '123');
is.all.caPostalCode(['L8V3Y1', '123']);

is.ukPostCode('B184BJ');
is.ukPostCode('123');
is.not.ukPostCode('123');
is.all.ukPostCode('B184BJ', '123');
is.any.ukPostCode('B184BJ', '123');
is.all.ukPostCode(['B184BJ', '123']);

is.nanpPhone('609-555-0175');
is.nanpPhone('123');
is.not.nanpPhone('123');
is.all.nanpPhone('609-555-0175', '123');
is.any.nanpPhone('609-555-0175', '123');
is.all.nanpPhone(['609-555-0175', '123']);

is.eppPhone('+90.2322456789');
is.eppPhone('123');
is.not.eppPhone('123');
is.all.eppPhone('+90.2322456789', '123');
is.any.eppPhone('+90.2322456789', '123');
is.all.eppPhone(['+90.2322456789', '123']);

is.socialSecurityNumber('017-90-7890');
is.socialSecurityNumber('123');
is.not.socialSecurityNumber('123');
is.all.socialSecurityNumber('017-90-7890', '123');
is.any.socialSecurityNumber('017-90-7890', '123');
is.all.socialSecurityNumber(['017-90-7890', '123']);

is.affirmative('yes');
is.affirmative('no');
is.not.affirmative('no');
is.all.affirmative('yes', 'no');
is.any.affirmative('yes', 'no');
is.all.affirmative(['yes', 'y', 'true', 't', 'ok', 'okay']);

is.hexadecimal('f0f0f0');
is.hexadecimal(2.5);
is.not.hexadecimal('string');
is.all.hexadecimal('ff', 'f50');
is.any.hexadecimal('ff5500', true);
is.all.hexadecimal(['fff', '333', 'f50']);

is.hexColor('#333');
is.hexColor('#3333');
is.not.hexColor(0.5);
is.all.hexColor('fff', 'f50');
is.any.hexColor('ff5500', 0.5);
is.all.hexColor(['fff', '333', 'f50']);

is.ip('198.156.23.5');
is.ip('1.2..5');
is.not.ip('8:::::::7');
is.all.ip('0:1::4:ff5:54:987:C', '123.123.123.123');
is.any.ip('123.8.4.3', '0.0.0.0');
is.all.ip(['123.123.23.12', 'A:B:C:D:E:F:0:0']);

is.ipv4('198.12.3.142');
is.ipv4('1.2..5');
is.not.ipv4('8:::::::7');
is.all.ipv4('198.12.3.142', '123.123.123.123');
is.any.ipv4('255.255.255.255', '850..1.4');
is.all.ipv4(['198.12.3.142', '1.2.3']);

is.ipv6('2001:DB8:0:0:1::1');
is.ipv6('985.12.3.4');
is.not.ipv6('8:::::::7');
is.all.ipv6('2001:DB8:0:0:1::1', '1:50:198:2::1:2:8');
is.any.ipv6('255.255.255.255', '2001:DB8:0:0:1::1');
is.all.ipv6(['2001:DB8:0:0:1::1', '1.2.3']);

//#endregion

//#region String checks

is.include('Some text goes here', 'text');
is.include('test', 'text');
is.not.include('test', 'text');

is.upperCase('YEAP');
is.upperCase('nope');
is.not.upperCase('Nope');
is.all.upperCase('YEAP', 'nope');
is.any.upperCase('YEAP', 'nope');
is.all.upperCase(['YEAP', 'ALL UPPERCASE']);

is.lowerCase('yeap');
is.lowerCase('NOPE');
is.not.lowerCase('Nope');
is.all.lowerCase('yeap', 'NOPE');
is.any.lowerCase('yeap', 'NOPE');
is.all.lowerCase(['yeap', 'all lowercase']);

is.startWith('yeap', 'ye');
is.startWith('nope', 'ye');
is.not.startWith('nope not that', 'not');

is.endWith('yeap', 'ap');
is.endWith('nope', 'no');
is.not.endWith('nope not that', 'not');
is.endWith('yeap that one', 'one');

is.capitalized('Yeap');
is.capitalized('nope');
is.not.capitalized('nope not capitalized');
is.not.capitalized('nope Capitalized');
is.all.capitalized('Yeap', 'All', 'Capitalized');
is.any.capitalized('Yeap', 'some', 'Capitalized');
is.all.capitalized(['Nope', 'not']);

is.palindrome('testset');
is.palindrome('nope');
is.not.palindrome('nope not palindrome');
is.not.palindrome('tt');
is.all.palindrome('testset', 'tt');
is.any.palindrome('Yeap', 'some', 'testset');
is.all.palindrome(['Nope', 'testset']);

//#endregion

//#region Arithmetic checks

is.equal(42, 40 + 2);
is.equal('yeap', 'yeap');
is.equal(true, true);
is.not.equal('yeap', 'nope');

is.even(42);
is.not.even(41);
is.all.even(40, 42, 44);
is.any.even(39, 42, 43);
is.all.even([40, 42, 43]);

is.odd(41);
is.not.odd(42);
is.all.odd(39, 41, 43);
is.any.odd(39, 42, 44);
is.all.odd([40, 42, 43]);

is.positive(41);
is.not.positive(-42);
is.all.positive(39, 41, 43);
is.any.positive(-39, 42, -44);
is.all.positive([40, 42, -43]);

is.negative(-41);
is.not.negative(42);
is.all.negative(-39, -41, -43);
is.any.negative(-39, 42, 44);
is.all.negative([40, 42, -43]);

is.above(41, 30);
is.not.above(42, 50);

is.under(30, 35);
is.not.under(42, 30);

is.within(30, 20, 40);
is.not.within(40, 30, 35);

is.decimal(41.5);
is.not.decimal(42);
is.all.decimal(39.5, 41.5, -43.5);
is.any.decimal(-39, 42.5, 44);
is.all.decimal([40, 42.5, -43]);

is.integer(41);
is.not.integer(42.5);
is.all.integer(39, 41, -43);
is.any.integer(-39, 42.5, 44);
is.all.integer([40, 42.5, -43]);

is.finite(41);
is.not.finite(42 / 0);
is.all.finite(39, 41, -43);
is.any.finite(-39, Infinity, 44);
is.all.finite([Infinity, -Infinity, 42.5]);

is.infinite(Infinity);
is.not.infinite(42);
is.all.infinite(Infinity, -Infinity, -43 / 0);
is.any.infinite(-39, Infinity, 44);
is.all.infinite([Infinity, -Infinity, 42.5]);

//#endregion

//#region Object checks

is.propertyCount({ this: 'is', 'sample': {} }, 2);
is.propertyCount({ this: 'is', 'sample': {} }, 3);
is.not.propertyCount({}, 2);

is.propertyDefined({ yeap: 'yeap' }, 'yeap');
is.propertyDefined({ yeap: 'yeap' }, 'nope');
is.not.propertyDefined({}, 'nope');

is.windowObject(window);
is.windowObject({ nope: 'nope' });
is.not.windowObject({});

is.all.windowObject(window, { nope: 'nope' });
is.any.windowObject(window, { nope: 'nope' });
is.all.windowObject([window, { nope: 'nope' }]);

var obj = document.createElement('div');
is.domNode(obj);
is.domNode({ nope: 'nope' });
is.not.domNode({});
is.all.domNode(obj, obj);
is.any.domNode(obj, { nope: 'nope' });
is.all.domNode([obj, { nope: 'nope' }]);

//#endregion

//#region Array checks

is.inArray(2, [1, 2, 3]);
is.inArray(4, [1, 2, 3]);
is.not.inArray(4, [1, 2, 3]);

is.sorted([1, 2, 3]);
is.sorted([1, 2, 4, 3]);
is.not.sorted([5, 4, 3]);
is.all.sorted([1, 2], [3, 4]);
is.any.sorted([1, 2], [5, 4]);
is.all.sorted([[1, 2], [5, 4]]);

//#endregion

//#region Environment checks

is.ie();
is.ie(6);
is.not.ie();

is.chrome();
is.not.chrome();

is.firefox();
is.not.firefox();

is.opera();
is.not.opera();

is.safari();
is.not.safari();

is.ios();
is.not.ios();

is.iphone();
is.not.iphone();

is.ipad();
is.not.ipad();

is.ipod();
is.not.ipod();

is.android();
is.not.android();

is.androidPhone();
is.not.androidPhone();

is.androidTablet();
is.not.androidTablet();

is.blackberry();

is.not.blackberry();

is.windowsPhone();
is.not.windowsPhone();

is.windowsTablet();
is.not.windowsTablet();

is.windows();
is.not.windows();

is.mac();
is.not.mac();

is.linux();
is.not.linux();

is.desktop();
is.not.desktop();

is.mobile();
is.not.mobile();

is.tablet();
is.not.tablet();

is.online();
is.not.online();

is.offline();
is.not.offline();

//#endregion

//#region Time checks

var today = new Date();
var yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
var tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
var monday = new Date('01/26/2015');
var sunday = new Date('01/25/2015');
var saturday = new Date('01/24/2015');

is.today(today);
is.today(yesterday)
is.not.today(yesterday);
is.all.today(today, today);
is.any.today(today, yesterday);
is.all.today([today, yesterday]);

is.yesterday(today);
is.yesterday(yesterday);
is.not.yesterday(today);
is.all.yesterday(yesterday, today);
is.any.yesterday(today, yesterday);
is.all.yesterday([today, yesterday]);

is.tomorrow(today);
is.tomorrow(tomorrow);
is.not.tomorrow(today);
is.all.tomorrow(tomorrow, today);
is.any.tomorrow(today, tomorrow);
is.all.tomorrow([today, tomorrow]);

is.past(yesterday);
is.past(tomorrow);
is.not.past(tomorrow);
is.all.past(tomorrow, yesterday);
is.any.past(yesterday, tomorrow);
is.all.past([yesterday, tomorrow]);

is.future(yesterday);
is.future(tomorrow);
is.not.future(yesterday);
is.all.future(tomorrow, yesterday);
is.any.future(yesterday, tomorrow);
is.all.future([yesterday, tomorrow]);

var mondayObj = new Date('01/26/2015');
var tuesdayObj = new Date('01/27/2015');
is.day(mondayObj, 'monday');
is.day(mondayObj, 'tuesday');
is.not.day(mondayObj, 'tuesday');

var januaryObj = new Date('01/26/2015');
var februaryObj = new Date('02/26/2015');
is.month(januaryObj, 'january');
is.month(februaryObj, 'january');
is.not.month(februaryObj, 'january');

var year2015 = new Date('01/26/2015');
var year2016 = new Date('01/26/2016');
is.year(year2015, 2015);
is.year(year2016, 2015);
is.not.year(year2016, 2015);

is.leapYear(2016);
is.leapYear(2015);
is.not.leapYear(2015);
is.all.leapYear(2015, 2016);
is.any.leapYear(2015, 2016);
is.all.leapYear([2016, 2080]);

is.weekend(sunday);
is.weekend(monday);
is.not.weekend(monday);
is.all.weekend(sunday, saturday);
is.any.weekend(sunday, saturday, monday);
is.all.weekend([sunday, saturday, monday]);

is.weekday(monday);
is.weekday(sunday);
is.not.weekday(sunday);
is.all.weekday(monday, saturday);
is.any.weekday(sunday, saturday, monday);
is.all.weekday([sunday, saturday, monday]);

is.inDateRange(sunday, saturday, monday);
is.inDateRange(saturday, sunday, monday);
is.not.inDateRange(saturday, sunday, monday);

var twoDaysAgo = new Date(new Date().setDate(new Date().getDate() - 2));
var nineDaysAgo = new Date(new Date().setDate(new Date().getDate() - 9));
is.inLastWeek(twoDaysAgo);
is.inLastWeek(nineDaysAgo);
is.not.inLastWeek(nineDaysAgo);

var tenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 10));
var fortyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 40));
is.inLastMonth(tenDaysAgo);
is.inLastMonth(fortyDaysAgo);
is.not.inLastMonth(fortyDaysAgo);

var twoMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 2));
var thirteenMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 13));
is.inLastYear(twoMonthsAgo);
is.inLastYear(thirteenMonthsAgo);
is.not.inLastYear(thirteenMonthsAgo);

var twoDaysLater = new Date(new Date().setDate(new Date().getDate() + 2));
var nineDaysLater = new Date(new Date().setDate(new Date().getDate() + 9));
is.inNextWeek(twoDaysLater);
is.inNextWeek(nineDaysLater);
is.not.inNextWeek(nineDaysLater);

var tenDaysLater = new Date(new Date().setDate(new Date().getDate() + 10));
var fortyDaysLater = new Date(new Date().setDate(new Date().getDate() + 40));
is.inNextMonth(tenDaysLater);
is.inNextMonth(fortyDaysLater);
is.not.inNextMonth(fortyDaysLater);

var twoMonthsLater = new Date(new Date().setMonth(new Date().getMonth() + 2));
var thirteenMonthsLater = new Date(new Date().setMonth(new Date().getMonth() + 13));
is.inNextYear(twoMonthsLater);
is.inNextYear(thirteenMonthsLater);
is.not.inNextYear(thirteenMonthsLater);

var firstQuarter = new Date('01/26/2015');
var secondQuarter = new Date('05/26/2015');
is.quarterOfYear(firstQuarter, 1);
is.quarterOfYear(secondQuarter, 1);
is.not.quarterOfYear(secondQuarter, 1);

var january1 = new Date('01/01/2015');
var june1 = new Date('06/01/2015');
is.dayLightSavingTime(june1);
is.dayLightSavingTime(january1);
is.not.dayLightSavingTime(january1);

//#endregion

//#region Configuration methods

is.url('https://www.duckduckgo.com');
is.setRegexp(/quack/, 'url');
is.url('quack');

var customName = is.setNamespace();
customName.odd(3);

//#endregion