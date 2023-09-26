import HttpContext = require("http-context");

export = XRayCrawler;

declare function XRayCrawler(driver?: XRayCrawler.Driver): XRayCrawler.Instance;

declare namespace XRayCrawler {
    type Callback<T> = (err: Error, obj: T) => void;
    type Driver = (context: HttpContext.Context, callback: Callback<HttpContext.Context>) => void;
    type RequestHook = (request: HttpContext.Request) => void;
    type ResponseHook = (response: HttpContext.Response) => void;
    type RandomDelay = () => number;

    interface Instance {
        (url: string, callback: Callback<HttpContext.Context>): void;
        driver(): Driver;
        driver(driver: Driver): this;
        throttle(): number;
        throttle(requests: string | number, rate: string | number): this;
        delay(): RandomDelay;
        delay(from: string | number, to?: string | number): this;
        timeout(): number;
        timeout(n: string | number): this;
        concurrency(): number;
        concurrency(n: number): this;
        request(): RequestHook;
        request(fn: RequestHook): this;
        response(): ResponseHook;
        response(fn: ResponseHook): this;
        limit(): number;
        limit(n: number): this;
    }
}
