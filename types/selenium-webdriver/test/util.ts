import * as util from "selenium-webdriver/lib/util";

function TestUtil() {
    let isObject: boolean = util.isObject(Object);
    let isPromise: boolean = util.isPromise(Promise);
}
