export function fail(msg: any): void;
export function failEquals(expected: any, actual: any, msg: any): void;
export function failNotEquals(expected: any, actual: any, msg: any): void;
export function check(condition: boolean, msg: string): void;
export function checkEquals(expected: any, actual: any, msg: any): void;
export function checkNotEquals(expected: any, actual: any, msg: any): void;
export function checkEqualNumbers(
    expected: number,
    actual: number,
    delta: number,
    msg: string,
): void;
export function checkNotEqualNumbers(
    expected: number,
    actual: number,
    delta: number,
    msg: string,
): void;
export function checkEqualDates(expected: Date, actual: Date, msg: string): void;
export function checkNotEqualDates(expected: Date, actual: Date, msg: string): void;
export function checkEqualDateTimes(expected: Date, actual: Date, msg: string): void;
export function checkNotEqualDateTimes(expected: Date, actual: Date, msg: string): void;
export function checkEqualArrays(expected: any[], actual: any[], msg: string): void;
export function checkNotEqualArrays(expected: any[], actual: any[], msg: string): void;
declare function assert_(message: string, condition: boolean, ...args: any[]): void;
export function assertTrue(message: string, condition: boolean, ...args: any[]): void;
export function assertFalse(message: string, condition: boolean, ...args: any[]): void;
export function assertEquals(message: string, expected: any, actual: any, ...args: any[]): void;
export function assertNotEquals(
    message: string,
    unexpected: any,
    actual: any,
    ...args: any[]
): void;
export function assertNull(message: string, actual: any, ...args: any[]): void;
export function assertNotNull(message: string, actual: any, ...args: any[]): void;
export function assertUndefined(message: string, actual: any, ...args: any[]): void;
export function assertNotUndefined(message: string, actual: any, ...args: any[]): void;
export function assertNan(message: string, actual: any, ...args: any[]): void;
export function assertNotNan(message: string, actual: any, ...args: any[]): void;
export { assert_ as assert };
