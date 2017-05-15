// Type definitions for is.js
// Project: http://arasatasaygin.github.io/is.js/
// Definitions by: Rodrigo Cabral <https://github.com/cabralRodrigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IsStatic {

    //#region Type checks

    /**
     * Checks if the given value type is arguments.
     */
    arguments(value: any): boolean;

    /**
     * Checks if the given value type is array.
     */
    array(value: any): boolean;

    /**
     * Checks if the given value type is boolean.
     */
    boolean(value: any): boolean;

    /**
     * Checks if the given value type is date.
     */
    date(value: any): boolean;

    /**
     * Checks if the given value type is error.
     */
    error(value: any): boolean;

    /**
     * Checks if the given value type is function.
     */
    function(value: any): boolean;

    /**
     * Checks if the given value type is NaN.
     */
    nan(value: any): boolean;

    /**
     * Checks if the given value type is null.
     */
    null(value: any): boolean;

    /**
     * Checks if the given value type is number.
     */
    number(value: any): boolean;

    /**
     * Checks if the given value type is object.
     */
    object(value: any): boolean;

    /**
     * Checks if the given value type is pure json object.
     */
    json(value: any): boolean;

    /**
     * Checks if the given value type is RegExp.
     */
    regexp(value: any): boolean;

    /**
     * Checks if the given value type is string.
     */
    string(value: any): boolean;

    /**
     * Checks if the given value type is char.
     */
    char(value: any): boolean;

    /**
     * Checks if the given value type is undefined.
     */
    undefined(value: any): boolean;

    /**
     * Checks if the given value types are same type.
     */
    sameType(value1: any, value2: any): boolean;

    //#endregion

    //#region Presence checks

    /**
     * Checks if the given value is empty.
     */
    empty(value: any): boolean;

    /**
     * Checks if the given value is existy. (not null or undefined)
     */
    existy(value: any): boolean;

    /**
     * Checks if the given value is truthy. (existy and not false)
     */
    truthy(value: any): boolean;

    /**
     * Checks if the given value is falsy.
     */
    falsy(value: any): boolean;

    /**
     * Checks if the given value is space.
     */
    space(value: any): boolean;

    //#endregion

    //#region RegExp checks

    /**
     * Checks if the given value matches url regexp.
     */
    url(value: any): boolean;

    /**
     * Checks if the given value matches email regexp.
     */
    email(value: any): boolean;

    /**
     * Checks if the given value matches credit card regexp.
     */
    creditCard(value: any): boolean;

    /**
     * Checks if the given value matches alpha numeric regexp.
     */
    alphaNumeric(value: any): boolean;

    /**
     * Checks if the given value matches time string regexp.
     */
    timeString(value: any): boolean;

    /**
     * Checks if the given value matches date string regexp.
     */
    dateString(value: any): boolean;

    /**
     * Checks if the given value matches US zip code regexp.
     */
    usZipCode(value: any): boolean;

    /**
     * Checks if the given value matches Canada postal code regexp.
     */
    caPostalCode(value: any): boolean;

    /**
     * Checks if the given value matches UK post code regexp.
     */
    ukPostCode(value: any): boolean;

    /**
     * Checks if the given value matches North American numbering plan phone regexp.
     */
    nanpPhone(value: any): boolean;

    /**
     * Checks if the given value matches extensible provisioning protocol phone regexp.
     */
    eppPhone(value: any): boolean;

    /**
     * Checks if the given value matches social security number regexp.
     */
    socialSecurityNumber(value: any): boolean;

    /**
     * Checks if the given value matches affirmative regexp.
     */
    affirmative(value: any): boolean;

    /**
     * Checks if the given value matches hexadecimal regexp.
     */
    hexadecimal(value: any): boolean;

    /**
     * Checks if the given value matches hexcolor regexp.
     */
    hexColor(value: any): boolean;

    /**
     * Checks if the given value matches ip regexp.
     */
    ip(value: any): boolean;

    /**
     * Checks if the given value matches ipv4 regexp
     */
    ipv4(value: any): boolean;

    /**
     * Checks if the given value matches ipv6 regexp
     */
    ipv6(value: any): boolean;

    //#endregion

    //#region String checks

    /**
     * Checks if the given string contains a substring.
     */
    include(value1: string, value2: string): boolean;

    /**
     * Checks if the given string is UPPERCASE.
     */
    upperCase(value: string): boolean;

    /**
     * Checks if the given string is lowercase.
     */
    lowerCase(value: string): boolean;

    /**
     * Checks if the given string starts with substring.
     */
    startWith(value1: string, value2: string): boolean;

    /**
     * Checks if the given string ends with substring.
     */
    endWith(value1: string, value2: string): boolean;

    /**
     * Checks if the given string is capitalized.
     */
    capitalized(value: string): boolean;

    /**
     * Checks if the given string is palindrome.
     */
    palindrome(value: string): boolean;

    //#endregion

    //#region Arithmetic checks

    /**
     * Checks if the given values are equal.
     */
    equal(value1: any, value2: any): boolean;

    /**
     * Checks if the given value is even.
     */
    even(value: number): boolean;

    /**
     * Checks if the given value is odd.
     */
    odd(value: number): boolean;

    /**
     * Checks if the given value is positive.
     */
    positive(value: number): boolean;

    /**
     * Checks if the given value is negative.
     */
    negative(value: number): boolean;

    /**
     * Checks if the given value is above minimum value.
     */
    above(value: number, min: number): boolean;

    /**
     * Checks if the given value is under maximum value.
     */
    under(value: number, max: number): boolean;

    /**
     * Checks if the given value is within minimum and maximum values.
     */
    within(value: number, min: number, max: number): boolean;

    /**
     * Checks if the given value is decimal.
     */
    decimal(value: number): boolean;

    /**
     * Checks if the given value is integer.
     */
    integer(value: number): boolean;

    /**
     * Checks if the given value is finite.
     */
    finite(value: number): boolean;

    /**
     * Checks if the given value is infinite.
     */
    infinite(value: number): boolean;

    //#endregion

    //#region Object checks

    /**
     * Checks if objects' property count is equal to given count.
     */
    propertyCount(value: any, count: number): boolean;

    /**
     * Checks if the given property is defined on object.
     */
    propertyDefined(value: any, property: string): boolean;

    /**
     * Checks if the given object is window object.
     */
    windowObject(value: any): boolean;

    /**
     * Checks if the given object is a dom node.
     */
    domNode(value: any): boolean;

    //#endregion

    //#region Array checks

    /**
     * Checks if the given item is in array.
     */
    inArray<T>(value: T, array: T[]): boolean;

    /**
     * Checks if the given array is sorted.
     */
    sorted(value: any[]): boolean;

    //#endregion

    //#region Environment checks

    /**
     * Checks if current browser is ie
     * @parm value Optional version number of browser
     */
    ie(value?: number): boolean;

    /**
     * Checks if current browser is chrome.
     */
    chrome(): boolean;

    /**
     * Checks if current browser is firefox.
     */
    firefox(): boolean;

    /**
     * Checks if current browser is opera.
     */
    opera(): boolean;

    /**
     * Checks if current browser is safari.
     */
    safari(): boolean;

    /**
     * Checks if current device has ios.
     */
    ios(): boolean;

    /**
     * Checks if current device is iPhone.
     */
    iphone(): boolean;

    /**
     * Checks if current device is iPad.
     */
    ipad(): boolean;

    /**
     * Checks if current device is iPod.
     */
    ipod(): boolean;

    /**
     * Checks if current device has Android.
     */
    android(): boolean;

    /**
     * Checks if current device is Android phone.
     */
    androidPhone(): boolean;

    /**
     * Checks if current device is Android tablet.
     */
    androidTablet(): boolean;

    /**
     * Checks if current device is Blackberry.
     */
    blackberry(): boolean;

    /**
     * Checks if current device is Windows phone.
     */
    windowsPhone(): boolean;

    /**
     * Checks if current device is Windows tablet.
     */
    windowsTablet(): boolean;

    /**
     * Checks if current OS is Windows.
     */
    windows(): boolean;

    /**
     * Checks if current OS is Mac OS X.
     */
    mac(): boolean;

    /**
     * Checks if current OS is linux.
     */
    linux(): boolean;

    /**
     * Checks if current device is desktop.
     */
    desktop(): boolean;

    /**
     * Checks if current device is mobile.
     */
    mobile(): boolean;

    /**
     * Checks if current device is tablet.
     */
    tablet(): boolean;

    /**
     * Checks if current device is online.
     */
    online(): boolean;

    /**
     * Checks if current device is offline.
     */
    offline(): boolean;

    //#endregion

    //#region Time checks

    /**
     * Checks if the given date object indicate today.
     */
    today(value: Date): boolean;

    /**
     * Checks if the given date object indicate yesterday.
     */
    yesterday(value: Date): boolean;

    /**
     * Checks if the given date object indicate tomorrow.
     */
    tomorrow(value: Date): boolean;

    /**
     * Checks if the given date object indicate past.
     */
    past(value: Date): boolean;

    /**
     * Checks if the given date object indicate future.
     */
    future(value: Date): boolean;

    /**
     * Checks if the given date objects' day equal given dayString parameter.
     */
    day(value: Date, dayString: string): boolean;

    /**
     * Checks if the given date objects' month equal given monthString parameter.
     */
    month(value: Date, monthString: string): boolean;

    /**
     * Checks if the given date objects' year equal given yearNumber parameter.
     */
    year(value: Date, yearNumber: number): boolean;

    /**
     * Checks if the given year number is a leap year
     */
    leapYear(value: number): boolean;

    /**
     * Checks if the given date objects' day is weekend.
     */
    weekend(value: Date): boolean;

    /**
     * Checks if the given date objects' day is weekday.
     */
    weekday(value: Date): boolean;

    /**
     * Checks if date is within given range.
     */
    inDateRange(value: Date, start: Date, end: Date): boolean;

    /**
     * Checks if the given date is between now and 7 days ago.
     */
    inLastWeek(value: Date): boolean;

    /**
     * Checks if the given date is between now and a month ago.
     */
    inLastMonth(value: Date): boolean;

    /**
     * Checks if the given date is between now and a year ago.
     */
    inLastYear(value: Date): boolean;

    /**
     * Checks if the given date is between now and 7 days later.
     */
    inNextWeek(value: Date): boolean;

    /**
     * Checks if the given date is between now and a month later.
     */
    inNextMonth(value: Date): boolean;

    /**
     * Checks if the given date is between now and a year later.
     */
    inNextYear(value: Date): boolean;

    /**
     * Checks if the given date is in the parameter quarter.
     */
    quarterOfYear(value: Date, quarter: number): boolean;

    /**
     * Checks if the given date is in daylight saving time.
     */
    dayLightSavingTime(value: Date): boolean;

    //#endregion

}

interface IsStaticApi {

    //#region Type checks

    /**
     * Checks if the given value type is arguments.
     */
    arguments(...value: any[]): boolean;
    
    /**
     * Checks if the given value type is arguments.
     */
    arguments(value: any[]): boolean;

    /**
     * Checks if the given value type is array.
     */
    array(...value: any[]): boolean;

    /**
     * Checks if the given value type is array.
     */
    array(value: any[]): boolean;

    /**
     * Checks if the given value type is boolean.
     */
    boolean(...value: any[]): boolean;

    /**
     * Checks if the given value type is boolean.
     */
    boolean(value: any[]): boolean;

    /**
     * Checks if the given value type is date.
     */
    date(...value: any[]): boolean;

    /**
     * Checks if the given value type is date.
     */
    date(value: any[]): boolean;

    /**
     * Checks if the given value type is error.
     */
    error(...value: any[]): boolean;

    /**
     * Checks if the given value type is error.
     */
    error(value: any[]): boolean;

    /**
     * Checks if the given value type is function.
     */
    function(...value: any[]): boolean;

    /**
     * Checks if the given value type is function.
     */
    function(value: any[]): boolean;

    /**
     * Checks if the given value type is NaN.
     */
    nan(...value: any[]): boolean;

    /**
     * Checks if the given value type is NaN.
     */
    nan(value: any[]): boolean;

    /**
     * Checks if the given value type is null.
     */
    null(...value: any[]): boolean;

    /**
     * Checks if the given value type is null.
     */
    null(value: any[]): boolean;

    /**
     * Checks if the given value type is number.
     */
    number(...value: any[]): boolean;

    /**
     * Checks if the given value type is number.
     */
    number(value: any[]): boolean;

    /**
     * Checks if the given value type is object.
     */
    object(...value: any[]): boolean;

    /**
     * Checks if the given value type is object.
     */
    object(value: any[]): boolean;

    /**
     * Checks if the given value type is pure json object.
     */
    json(...value: any[]): boolean;

    /**
     * Checks if the given value type is pure json object.
     */
    json(value: any[]): boolean;

    /**
     * Checks if the given value type is RegExp.
     */
    regexp(...value: any[]): boolean;

    /**
     * Checks if the given value type is RegExp.
     */
    regexp(value: any[]): boolean;

    /**
     * Checks if the given value type is string.
     */
    string(...value: any[]): boolean;

    /**
     * Checks if the given value type is string.
     */
    string(value: any[]): boolean;

    /**
     * Checks if the given value type is char.
     */
    char(...value: any[]): boolean;

    /**
     * Checks if the given value type is char.
     */
    char(value: any[]): boolean;

    /**
     * Checks if the given value type is undefined.
     */
    undefined(...value: any[]): boolean;

    /**
     * Checks if the given value type is undefined.
     */
    undefined(value: any[]): boolean;

    //#endregion

    //#region Presence checks

    /**
     * Checks if the given value is empty.
     */
    empty(...value: any[]): boolean;

    /**
     * Checks if the given value is empty.
     */
    empty(value: any[]): boolean;

    /**
     * Checks if the given value is existy. (not null or undefined)
     */
    existy(...value: any[]): boolean;

    /**
     * Checks if the given value is existy. (not null or undefined)
     */
    existy(value: any[]): boolean;

    /**
     * Checks if the given value is truthy. (existy and not false)
     */
    truthy(...value: any[]): boolean;

    /**
     * Checks if the given value is truthy. (existy and not false)
     */
    truthy(value: any[]): boolean;

    /**
     * Checks if the given value is falsy.
     */
    falsy(...value: any[]): boolean;

    /**
     * Checks if the given value is falsy.
     */
    falsy(value: any[]): boolean;

    /**
     * Checks if the given value is space.
     */
    space(...value: any[]): boolean;

    /**
     * Checks if the given value is space.
     */
    space(value: any[]): boolean;

    //#endregion

    //#region RegExp checks

    /**
     * Checks if the given value matches url regexp.
     */
    url(...value: any[]): boolean;

    /**
     * Checks if the given value matches url regexp.
     */
    url(value: any[]): boolean;

    /**
     * Checks if the given value matches email regexp.
     */
    email(...value: any[]): boolean;

    /**
     * Checks if the given value matches email regexp.
     */
    email(value: any[]): boolean;

    /**
     * Checks if the given value matches credit card regexp.
     */
    creditCard(...value: any[]): boolean;

    /**
     * Checks if the given value matches credit card regexp.
     */
    creditCard(value: any[]): boolean;

    /**
     * Checks if the given value matches alpha numeric regexp.
     */
    alphaNumeric(...value: any[]): boolean;

    /**
     * Checks if the given value matches alpha numeric regexp.
     */
    alphaNumeric(value: any[]): boolean;

    /**
     * Checks if the given value matches time string regexp.
     */
    timeString(...value: any[]): boolean;

    /**
     * Checks if the given value matches time string regexp.
     */
    timeString(value: any[]): boolean;

    /**
     * Checks if the given value matches date string regexp.
     */
    dateString(...value: any[]): boolean;

    /**
     * Checks if the given value matches date string regexp.
     */
    dateString(value: any[]): boolean;

    /**
     * Checks if the given value matches US zip code regexp.
     */
    usZipCode(...value: any[]): boolean;

    /**
     * Checks if the given value matches US zip code regexp.
     */
    usZipCode(value: any[]): boolean;

    /**
     * Checks if the given value matches Canada postal code regexp.
     */
    caPostalCode(...value: any[]): boolean;

    /**
     * Checks if the given value matches Canada postal code regexp.
     */
    caPostalCode(value: any[]): boolean;

    /**
     * Checks if the given value matches UK post code regexp.
     */
    ukPostCode(...value: any[]): boolean;

    /**
     * Checks if the given value matches UK post code regexp.
     */
    ukPostCode(value: any[]): boolean;

    /**
     * Checks if the given value matches North American numbering plan phone regexp.
     */
    nanpPhone(...value: any[]): boolean;

    /**
     * Checks if the given value matches North American numbering plan phone regexp.
     */
    nanpPhone(value: any[]): boolean;

    /**
     * Checks if the given value matches extensible provisioning protocol phone regexp.
     */
    eppPhone(...value: any[]): boolean;

    /**
     * Checks if the given value matches extensible provisioning protocol phone regexp.
     */
    eppPhone(value: any[]): boolean;

    /**
     * Checks if the given value matches social security number regexp.
     */
    socialSecurityNumber(...value: any[]): boolean;

    /**
     * Checks if the given value matches social security number regexp.
     */
    socialSecurityNumber(value: any[]): boolean;

    /**
     * Checks if the given value matches affirmative regexp.
     */
    affirmative(...value: any[]): boolean;

    /**
     * Checks if the given value matches affirmative regexp.
     */
    affirmative(value: any[]): boolean;

    /**
     * Checks if the given value matches hexadecimal regexp.
     */
    hexadecimal(...value: any[]): boolean;

    /**
     * Checks if the given value matches hexadecimal regexp.
     */
    hexadecimal(value: any[]): boolean;

    /**
     * Checks if the given value matches hexcolor regexp.
     */
    hexColor(...value: any[]): boolean;

    /**
     * Checks if the given value matches hexcolor regexp.
     */
    hexColor(value: any[]): boolean;

    /**
     * Checks if the given value matches ip regexp.
     */
    ip(...value: any[]): boolean;

    /**
     * Checks if the given value matches ip regexp.
     */
    ip(value: any[]): boolean;

    /**
     * Checks if the given value matches ipv4 regexp.
     */
    ipv4(...value: any[]): boolean;

    /**
     * Checks if the given value matches ipv4 regexp.
     */
    ipv4(value: any[]): boolean;

    /**
     * Checks if the given value matches ipv6 regexp.
     */
    ipv6(...value: any[]): boolean;

    /**
     * Checks if the given value matches ipv6 regexp.
     */
    ipv6(value: any[]): boolean;

    //#endregion

    //#region String checks

    /**
     * Checks if the given string is UPPERCASE.
     */
    upperCase(...value: string[]): boolean;

    /**
     * Checks if the given string is UPPERCASE.
     */
    upperCase(value: string[]): boolean;

    /**
     * Checks if the given string is lowercase.
     */
    lowerCase(...value: string[]): boolean;

    /**
     * Checks if the given string is lowercase.
     */
    lowerCase(value: string[]): boolean;

    /**
     * Checks if the given string is capitalized.
     */
    capitalized(...value: string[]): boolean;

    /**
     * Checks if the given string is capitalized.
     */
    capitalized(value: string[]): boolean;

    /**
     * Checks if the given string is palindrome
     */
    palindrome(...value: string[]): boolean;

    /**
     * Checks if the given string is palindrome
     */
    palindrome(value: string[]): boolean;

    //#endregion

    //#region Arithmetic checks

    /**
     * Checks if the given value is even.
     */
    even(...value: number[]): boolean;

    /**
     * Checks if the given value is even.
     */
    even(value: number[]): boolean;

    /**
     * Checks if the given value is odd.
     */
    odd(...value: number[]): boolean;

    /**
     * Checks if the given value is odd.
     */
    odd(value: number[]): boolean;

    /**
     * Checks if the given value is positive.
     */
    positive(...value: number[]): boolean;

    /**
     * Checks if the given value is positive.
     */
    positive(value: number[]): boolean;

    /**
     * Checks if the given value is negative.
     */
    negative(...value: number[]): boolean;

    /**
     * Checks if the given value is negative.
     */
    negative(value: number[]): boolean;

    /**
     * Checks if the given value is decimal.
     */
    decimal(...value: number[]): boolean;

    /**
     * Checks if the given value is decimal.
     */
    decimal(value: number[]): boolean;

    /**
     * Checks if the given value is integer.
     */
    integer(...value: number[]): boolean;

    /**
     * Checks if the given value is integer.
     */
    integer(value: number[]): boolean;

    /**
     * Checks if the given value is finite.
     */
    finite(...value: number[]): boolean;

    /**
     * Checks if the given value is finite.
     */
    finite(value: number[]): boolean;

    /**
     * Checks if the given value is infinite.
     */
    infinite(...value: number[]): boolean;

    /**
     * Checks if the given value is infinite.
     */
    infinite(value: number[]): boolean;

    //#endregion

    //#region Object checks

    /**
     * Checks if the given object is window object.
     */
    windowObject(...value: any[]): boolean;

    /**
     * Checks if the given object is window object.
     */
    windowObject(value: any[]): boolean;

    /**
     * Checks if the given object is a dom node.
     */
    domNode(...value: any[]): boolean;

    /**
     * Checks if the given object is a dom node.
     */
    domNode(value: any[]): boolean;

    //#endregion

    //#region Array checks

    /**
     * Checks if the given array is sorted.
     */
    sorted(...value: number[][]): boolean;

    /**
     * Checks if the given array is sorted.
     */
    sorted(value: number[][]): boolean;

    //#endregion

    //#region Time checks

    /**
     * Checks if the given date object indicate today.
     */
    today(...value: Date[]): boolean;

    /**
     * Checks if the given date object indicate today.
     */
    today(value: Date[]): boolean;

    /**
     * Checks if the given date object indicate yesterday.
     */
    yesterday(...value: Date[]): boolean;

    /**
     * Checks if the given date object indicate yesterday.
     */
    yesterday(value: Date[]): boolean;

    /**
     * Checks if the given date object indicate tomorrow.
     */
    tomorrow(...value: Date[]): boolean;

    /**
     * Checks if the given date object indicate tomorrow.
     */
    tomorrow(value: Date[]): boolean;

    /**
     * Checks if the given date object indicate past.
     */
    past(...value: Date[]): boolean;

    /**
     * Checks if the given date object indicate past.
     */
    past(value: Date[]): boolean;

    /**
     * Checks if the given date object indicate future.
     */
    future(...value: Date[]): boolean;

    /**
     * Checks if the given date object indicate future.
     */
    future(value: Date[]): boolean;

    /**
     * Checks if the given year number is a leap year
     */
    leapYear(...value: number[]): boolean;

    /**
     * Checks if the given year number is a leap year
     */
    leapYear(value: number[]): boolean;

    /**
     * Checks if the given date objects' day is weekend.
     */
    weekend(...value: Date[]): boolean;

    /**
     * Checks if the given date objects' day is weekend.
     */
    weekend(value: Date[]): boolean;

    /**
     * Checks if the given date objects' day is weekday.
     */
    weekday(...value: Date[]): boolean;

    /**
     * Checks if the given date objects' day is weekday.
     */
    weekday(value: Date[]): boolean;

    //#endregion
}

interface Is extends IsStatic {

    not: IsStatic;
    any: IsStaticApi;
    all: IsStaticApi;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'url'): boolean;
    
    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'email'): boolean;
    
    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'creditCard'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'alphaNumeric'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'timeString'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'dateString'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'usZipCode'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'caPostalCode'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'nanpPhone'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'eppPhone'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'affirmative'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'hexadecimal'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'hexColor'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'ip'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: 'ipv6'): boolean;

    /**
     * Override RegExps if you think they suck.
     */
    setRegexp(value: RegExp, regexp: string): boolean;

    /**
     * Change namespace of library to prevent name collisions.
     */
    setNamespace(): Is;
}

declare var is: Is;

declare module 'is' {
    export = is;
}