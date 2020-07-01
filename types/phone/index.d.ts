// Type definitions for phone 2.4.0
// Project: https://github.com/aftership/phone
// Definitions by: Hagai Cohen <https://github.com/DxCx>, Tim Brown <https://github.com/brimtown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function phone(phoneNumber: string, countryCode?: string, allowLandLine?: boolean): Array<string>;
export = phone;
