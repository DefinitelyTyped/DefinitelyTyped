import HttpContext = require('http-context');
import XRayCrawler = require('x-ray-crawler');

const xRayCrawler: XRayCrawler.Instance = XRayCrawler();

const driver: XRayCrawler.Driver = xRayCrawler.driver();
xRayCrawler.driver(driver);

const throttle: number = xRayCrawler.throttle();
xRayCrawler.throttle(5, 4);
xRayCrawler.throttle(5, '4ms');

const randomDelay: XRayCrawler.RandomDelay = xRayCrawler.delay();
const delay: number = randomDelay();
xRayCrawler.delay(0, 2);
xRayCrawler.delay(0);
xRayCrawler.delay('0s', '5s');

const timeout: number = xRayCrawler.timeout();
xRayCrawler.timeout(timeout);
xRayCrawler.timeout('5s');

const concurrency: number = xRayCrawler.concurrency();
xRayCrawler.concurrency(5);

const requestHook: XRayCrawler.RequestHook = xRayCrawler.request();
xRayCrawler.request(requestHook);
xRayCrawler.request((request: HttpContext.Request) => {
    console.log(request);
});

const responseHook: XRayCrawler.ResponseHook = xRayCrawler.response();
xRayCrawler.response(responseHook);
xRayCrawler.response((response: HttpContext.Response) => {
    console.log(response);
});

const limit: number = xRayCrawler.limit();
xRayCrawler.limit(limit);

const xRayCrawler2: XRayCrawler.Instance = XRayCrawler()
    .throttle(5, '10s')
    .delay('5s', '10s')
    .timeout('20s')
    .concurrency(4)
    .request((request: HttpContext.Request) => {
        console.log(request);
    })
    .response((response: HttpContext.Response) => {
        console.log(response);
    })
    .limit(10);
