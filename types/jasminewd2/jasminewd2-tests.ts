const promise = Promise.resolve();

describe('jasminewd', () => {
  describe('global it, fit, xit, before and after', () => {
    it('should be able to return promises', () => {
      return promise;
    });

    fit('should be able to return promises', () => {
      return promise;
    });

    xit('should be able to return promises', () => {
      return promise;
    });

    beforeEach(() => {
      return promise;
    });

    afterEach(() => {
      return promise;
    });

    beforeAll(() => {
      return promise;
    });

    afterAll(() => {
      return promise;
    });

    it('should be able to use DoneFn', done => {
      promise.then(done, done.fail);
    });

    fit('should be able to use DoneFn', done => {
      promise.then(done, done.fail);
    });

    xit('should be able to use DoneFn', done => {
      promise.then(done, done.fail);
    });

    beforeEach(done => {
      promise.then(done, done.fail);
    });

    afterEach(done => {
      promise.then(done, done.fail);
    });

    beforeAll(done => {
      promise.then(done, done.fail);
    });

    afterAll(done => {
      promise.then(done, done.fail);
    });
  });

  describe('matchers', () => {
    it('should work', () => {
      let expectedAny: any;
      let expectationFailOutputAny: any;
      let expectedString: string;
      let expectedNumber: number;
      let expectedRegExp: RegExp;
      let expectedPromiseString: Promise<string>;
      let expectedPromiseNumber: Promise<number>;
      let expectedPromiseRegExp: Promise<RegExp>;
      let paramsAny: any[];
      let error: Error;
      let errorPromise: Promise<Error>;

      expect(expectedAny).toBe(expectationFailOutputAny);
      expect(expectedAny).toEqual(expectationFailOutputAny);
      expect(expectedString).toMatch(expectationFailOutputAny);
      expect(expectedRegExp).toMatch(expectationFailOutputAny);
      expect(expectedPromiseString).toMatch(expectationFailOutputAny);
      expect(expectedPromiseRegExp).toMatch(expectationFailOutputAny);
      expect(expectationFailOutputAny).toBeDefined();
      expect(expectationFailOutputAny).toBeUndefined();
      expect(expectationFailOutputAny).toBeNull();
      expect(expectedAny).toBeNaN();
      expect(expectedAny).toBeTruthy();
      expect(expectedAny).toBeFalsy();
      expect(expectedAny).toHaveBeenCalled();
      expect(expectedAny).toHaveBeenCalledWith(paramsAny);
      expect(expectedAny).toHaveBeenCalledTimes(expectedNumber);
      expect(expectedAny).toHaveBeenCalledTimes(expectedPromiseNumber);
      expect(expectedAny).toContain(expectationFailOutputAny);
      expect(expectedNumber).toBeLessThan(expectedNumber);
      expect(expectedNumber).toBeLessThan(expectedPromiseNumber);
      expect(expectedNumber).toBeLessThanOrEqual(expectedNumber);
      expect(expectedNumber).toBeLessThanOrEqual(expectedPromiseNumber);
      expect(expectedNumber).toBeGreaterThan(expectedNumber);
      expect(expectedNumber).toBeGreaterThan(expectedPromiseNumber);
      expect(expectedNumber).toBeGreaterThanOrEqual(expectedNumber);
      expect(expectedNumber).toBeGreaterThanOrEqual(expectedPromiseNumber);
      expect(expectedNumber).toBeCloseTo(expectedNumber, expectedNumber);
      expect(expectedPromiseNumber).toBeCloseTo(expectationFailOutputAny, expectedNumber);
      expect(expectedAny).toThrow(expectationFailOutputAny);
      expect(expectedAny).toThrowError(expectedString);
      expect(expectedAny).toThrowError(expectedRegExp);
      expect(expectedAny).toThrowError(expectedPromiseString);
      expect(expectedAny).toThrowError(expectedPromiseRegExp);
      expect(error).toThrowError(expectedString);
      expect(error).toThrowError(expectedRegExp);
      expect(error).toThrowError(expectedPromiseString);
      expect(error).toThrowError(expectedPromiseRegExp);
      expect(error).toThrowError(expectedString);
      expect(errorPromise).toThrowError(expectedString);
      expect(errorPromise).toThrowError(expectedRegExp);
      expect(errorPromise).toThrowError(expectedPromiseString);
      expect(errorPromise).toThrowError(expectedPromiseRegExp);
      expect(errorPromise).toThrowError(expectedString);
    });
  });

  describe('jasmine matchers', () => {
    it('should be able to add matchers', () => {
      let matchers = {
        toBeLotsMoreThan() {
          return {
            compare(actual: number, expected: number) {
              return {
                pass: actual > expected + 100
              };
            }
          };
        },
        // Example custom matcher returning a promise that resolves to true/false.
        toBeDisplayed() {
          return {
            compare(actual: any, expected: void) {
              return {
                pass: (actual.isDisplayed() as Promise<boolean>)
              };
            }
          };
        }
      };
      jasmine.addMatchers(matchers);
      jasmine.getEnv().addMatchers(matchers);
      jasmine.getEnv().currentSpec.addMatchers(matchers);
    });
  });
});
