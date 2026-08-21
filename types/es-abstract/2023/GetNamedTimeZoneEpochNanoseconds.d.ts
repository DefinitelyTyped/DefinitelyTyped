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
    // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
): [bigint];
export = GetNamedTimeZoneEpochNanoseconds;
