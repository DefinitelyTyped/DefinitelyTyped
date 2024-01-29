import tz, { minimalTimezoneSet } from "compact-timezone-list";

// $ExpectType void[]
minimalTimezoneSet.map(({ label, offset, tzCode }) => {
    // $ExpectType string
    const l = label;
    // $ExpectType string
    const o = offset;
    // $ExpectType string
    const tz = tzCode;
    console.log({
        label,
        offset,
        tzCode,
    });
});
// $ExpectType void[]
tz.map(({ label, offset, tzCode }) => {
    // $ExpectType string
    const l = label;
    // $ExpectType string
    const o = offset;
    // $ExpectType string
    const tz = tzCode;
    console.log({
        label,
        offset,
        tzCode,
    });
});
