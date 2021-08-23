/**
 * TimeoutError is emitted whenever certain operations are terminated due to timeout,
 * e.g. page.waitForSelector(selector[, options]) or puppeteer.launch([options]).
 */
export class TimeoutError extends Error {
}
