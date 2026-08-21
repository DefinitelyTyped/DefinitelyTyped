declare namespace minimalTimezoneSet {
    interface MinimalTimezoneSet {
        offset: string;
        label: string;
        tzCode: string;
    }
}

declare const minimalTimezoneSet: minimalTimezoneSet.MinimalTimezoneSet[];
export default minimalTimezoneSet;
export { minimalTimezoneSet };
