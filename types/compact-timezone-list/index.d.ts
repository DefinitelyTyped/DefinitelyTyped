// Type definitions for compact-timezone-list 1.0
// Project: https://github.com/filipdanic/compact-timezone-list
// Definitions by: Buddha Nag <https://github.com/buddhanag12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace minimalTimezoneSet {
    interface IMinimalTimezoneSet {
        offset: string;
        label: string;
        tzCode: string;
    }
}

declare const minimalTimezoneSet: minimalTimezoneSet.IMinimalTimezoneSet[];
export default minimalTimezoneSet;
export { minimalTimezoneSet };
