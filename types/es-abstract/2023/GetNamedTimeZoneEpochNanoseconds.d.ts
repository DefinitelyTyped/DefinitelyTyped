declare function GetNamedTimeZoneEpochNanoseconds(
    timeZoneIdentifier: string,
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number,
    microsecond: number,
    nanosecond: number,
): [bigint];
export = GetNamedTimeZoneEpochNanoseconds;
