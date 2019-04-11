import { dom, expect, spy } from 'mochaccino';
/**
 * spy test
 *
 */
const obj = {
    funcName: (): any => {
    }
};
let s = spy();
s(1, 2);
expect(s).toHaveBeenCalledWith(1, 2);
spy(obj, 'funcName');
obj.funcName();
expect(obj.funcName).toHaveBeenCalled();
/***********************/
s = spy();
s();
expect(s).toHaveBeenCalled();
/***********************/
s(obj, 'funcName').and.callFake(() => {
    return 123;
});
expect(obj.funcName()).toEqual(123);
spy(obj, 'funcName');

expect(obj.funcName).toHaveBeenCalled();
/***********************/
s(obj, 'funcName').and.callThrough();
/***********************/
s(obj, 'funcName').and.returnValue(5);
/***********************/
/**
 * dom test
 */
dom.create();
dom.destroy();
dom.clear();
/**
 * expect test
 *
 */
const a = 1;
const b = true;
const c = 2;
const f = () => {
};
const ErrorType = new Error();
const regexp = /123/;
expect(true).toBeTruthy();
expect(a).toBe(b);
expect(a).toEqual(b);
expect(a).toBeTruthy();
expect(a).toBeFalsy();
expect(a).toBeDefined();
expect(a).toBeUndefined();
expect(a).toBeNull();
expect(a).toBeLessThan(c);
expect(a).toBeGreaterThan(c);
expect([1, 2]).toContain(1);
expect(f).toThrow();
expect(f).toThrowError(ErrorType);
expect(s).toMatch(regexp);
expect(s).toHaveBeenCalled();
expect(s).toHaveBeenCalledWith(1, '23');
expect(s).toHaveBeenCalledTimes(55);
