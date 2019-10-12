// Type definitions for webpagetest 0.3
// Project: http://github.com/marcelduran/webpagetest-api
// Definitions by: Konstantin Simon Maria Möllers <https://github.com/ksm2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface Response<R> {
  data: R;
  statusCode: number;
  statusText: string;
}

type Callback<R> = (err: Error | undefined, data: R | undefined, info: any) => void;

type TestScript = TestScriptCommand[];
type TestScriptCommand = string | { [command: string]: string | number | string[] | number[] };

interface Options {
  /** if true, method does not make an actual request to the API Server but rather returns an object with url which contains the actual URL to make the GET request to WebPageTest API Server */
  dryRun?: boolean;
  /** if specified, overrides the WebPageTest server informed in the constructor only for that method call */
  server?: string;
}

interface KeyOptions {
  /** API key (if assigned). Contact the WebPageTest server administrator for a key if required */
  key?: string;
}

interface RequestOptions {
  /** echo request ID, useful to track asynchronous requests */
  requestId?: string;
}

interface TestOptions {
  /** location to test from */
  location?: string;
  /** connectivity profile -- requires location to be specified -- (Cable|DSL|FIOS|Dial|3G|3GFast|Native|custom) [Cable] */
  connectivity?: string;
  /** number of test runs [1] */
  runs?: number;
  /** skip the Repeat View test */
  firstViewOnly?: boolean;
  /** capture video */
  video?: boolean;
  /** keep the test hidden from the test log */
  private?: boolean;
  /** label for the test */
  label?: string;
  /** stop test at document complete. typically, tests run until all activity stops */
  stopAtDocumentComplete?: boolean;
  /** disable JavaScript (IE, Chrome, Firefox) */
  disableJavaScript?: boolean;
  /** clear SSL certificate caches */
  clearCerts?: boolean;
  /** ignore SSL certificate errors, e.g. name mismatch, self-signed certificates, etc */
  ignoreSSL?: boolean;
  /** forces all pages to load in standards mode (IE only) */
  disableCompatibilityView?: boolean;
  /** capture network packet trace (tcpdump) */
  tcpDump?: boolean;
  /** save response bodies for text resources */
  saveResponseBodies?: boolean;
  /** do not add PTST to the original browser User Agent string */
  keepOriginalUserAgent?: boolean;
  /** DOM element to record for sub-measurement */
  domElement?: string;
  /** minimum test duration in seconds */
  minimumDuration?: number;
  /** run the test on a specific PC (name must match exactly or the test will not run) */
  tester?: string;
  /** (experimental) emulate mobile browser: Chrome mobile user agent, 640x960 screen, 2x scaling and fixed viewport (Chrome only) */
  emulateMobile?: boolean;
  /** capture Developer Tools Timeline (Chrome only) */
  timeline?: boolean;
  /** set between 1-5 to include the JS call stack. must be used in conjunction with timeline (increases overhead) (Chrome only) */
  timelineCallStack?: boolean;
  /** capture chrome trace (about://tracing) (Chrome only) */
  chromeTrace?: boolean;
  /** capture Network Log (Chrome only) */
  netLog?: boolean;
  /** enable data reduction on Chrome 34+ Android (Chrome only) */
  dataReduction?: boolean;
  /** custom user agent string (Chrome only) */
  userAgent?: string;
  /** use a list of custom command line switches (Chrome only) */
  commandLine?: string;
  /** username for authenticating tests (http authentication) */
  login?: string;
  /** password for authenticating tests (http authentication) */
  password?: string;
  /** discard script and http headers in the result */
  sensitive?: boolean;
  /** disable saving of the http headers (as well as browser status messages and CPU utilization) */
  disableHTTPHeaders?: boolean;
  /** space-delimited list of urls to block (substring match) */
  block?: string;
  /** space-delimited list of domains to simulate failure by re-routing to blackhole.webpagetest.org to silently drop all requests */
  spof?: string;
  /** execute arbitrary JavaScript at the end of a test to collect custom metrics */
  customMetrics?: string;
  /** type of authentication: 0 = Basic, 1 = SNS [0] */
  authenticationType?: number;
  /** e-mail address to notify with the test results */
  notifyEmail?: string;
  /** URL to ping when the test is complete (the test ID will be passed as an "id" parameter) */
  pingback?: string;
  /** download bandwidth in Kbps (used when specifying a custom connectivity profile) */
  bandwidthDown?: string;
  /** upload bandwidth in Kbps (used when specifying a custom connectivity profile) */
  bandwidthUp?: string;
  /** first-hop Round Trip Time in ms (used when specifying a custom connectivity profile) */
  latency?: string;
  /** packet loss rate - percent of packets to drop (used when specifying a custom connectivity profile) */
  packetLossRate?: number;
  /** disable optimization checks (for faster testing) */
  disableOptimization?: boolean;
  /** disable screen shot capturing */
  disableScreenshot?: boolean;
  /** save a full-resolution version of the fully loaded screen shot as a PNG */
  fullResolutionScreenshot?: boolean;
  /** jpeg compression level (30-100) for the screen shots and video capture */
  jpegQuality?: number;
  /** store the video from the median run when capturing video is enabled */
  medianVideo?: boolean;
  /** save the content of only the base HTML response */
  htmlBody?: boolean;
  /** test name to use when submitting results to tsviewdb (for private instances that have integrated with tsviewdb) */
  tsView?: string;
  /** configs to use when submitting results to tsviewdb (for private instances that have integrated with tsviewdb) */
  tsViewConfigs?: string;
  /** string to hash test to a specific test agent. tester will be picked by index among available testers */
  affinity?: string;
  /** change test priority (0-9) [enforced by API key, otherwise 5] */
  priority?: number;
  /** block ads defined by http://adblockplus.org */
  blockAds?: boolean;
  /** capture video continuously (unstable/experimental, may cause tests to fail) */
  continuousVideoCapture?: boolean;
  /** force SPDY version 3 (Chrome only) */
  forceSpdy3?: boolean;
  /** force software rendering, disable GPU acceleration (Chrome only) */
  forceSoftwareRendering?: boolean;
  /** poll for results after test is scheduled at every seconds [5] */
  pollResults?: number;
  /** wait for test results informed by agent once complete listening on : [hostname:first port available above 8000] */
  waitResults?: string;
  /** timeout for polling and waiting results [no timeout] */
  timeout?: number;
  /** perform lighthouse test (Chrome only, Linux agent only) */
  lighthouse?: boolean;
}

interface ResultsOptions {
  /** include the breakdown of requests and bytes by mime type */
  breakDown?: boolean;
  /** include the breakdown of requests and bytes by domain */
  domains?: boolean;
  /** include the PageSpeed score in the response (may be slower) */
  pageSpeed?: boolean;
  /** include the request data in the response (slower and results in much larger responses) */
  requests?: boolean;
  /** set the metric used to calculate median for multiple runs tests (default: loadTime) */
  medianMetric?: string;
  /** set the specs for performance test suite */
  specs?: string;
  /** set performance test suite reporter output: [dot]|spec|tap|xunit|list|progress|min|nyan|landing|json|doc|markdown|teamcity */
  reporter?: string;
}

interface RunOptions {
  /** the test run number for multiple runs tests (default: 1, first test) */
  run?: number;
  /** if true returns the repeat view (cached) data */
  repeatView?: boolean;
}

interface ImageOptions {
  /** returns the thumbnail of actual image */
  thumbnail?: boolean;
  /** returns the base64 string representation (inline) of actual image */
  dataURI?: boolean;
}

interface ScreenshotOptions {
  /** returns the full resolution screenshot in PNG format if available */
  fullResolution?: boolean;
  /** returns the page screenshot at the Start Render point (i.e.: when something was first displayed on screen) */
  startRender?: boolean;
  /** returns the page screenshot at the Document Complete point (i.e.: when window.onload was fired) */
  documentComplete?: boolean;
}

interface WaterfallOptions {
  /** set the chart type: waterfall or connection [waterfall] */
  chartType?: string;
  /** set chart coloring by MIME type [false] */
  colorByMime?: boolean;
  /** chart image width in px (300-2000) [930] */
  chartWidth?: number;
  /** set maximum time in seconds [automatic] */
  maxTime?: number;
  /** filter requests (e.g.:1,2,3,4-9,8) [all] */
  requests?: string;
  /** hide CPU utilization [false] */
  noCPU?: boolean;
  /** hide bandwidth utilization [false] */
  noBandwidth?: boolean;
  /** hide ellipsis (...) for missing items [false] */
  noEllipsis?: boolean;
  /** hide labels for requests (URL) [false] */
  noLabels?: boolean;
}

interface VideoOptions {
  /** frame comparison end point: [visual]=visually complete | all=last change | doc=document complete | full=fully loaded */
  comparisonEndPoint?: string;
}

interface ResponseOptions {
  /** the request number [1] */
  request?: number;
}

interface ListenOptions {
  /** private key file path to use for SSL */
  key?: string;
  /** public x509 certificate file path to use for SSL */
  cert?: string;
}

declare namespace WebPageTest {
  interface Location {
    id: string;
    Label: string;
    location: string;
    Browsers: string;
    labelShort: string;
    PendingTests: { [id: string]: number };
  }

  interface TestStatus {
    statusCode: number;
    statusText: string;
    id: string;
    testInfo: TestInfo;
    testId: string;
    runs: number;
    fvonly: number;
    remote: false;
    testsExpected: number;
    location: string;
    startTime: string;
    elapsed: number;
    completeTime: string;
    testsCompleted: number;
    fvRunsCompleted: number;
    rvRunsCompleted: number;
  }

  interface TestInfo {
    url: string;
    runs: number;
    fvonly: number;
    web10: number;
    ignoreSSL: number;
    video: string;
    label: string;
    priority: number;
    block: string;
    location: string;
    browser: string;
    connectivity: string;
    bwIn: number;
    bwOut: number;
    latency: number;
    plr: string;
    tcpdump: number;
    timeline: number;
    trace: number;
    bodies: number;
    netlog: number;
    standards: number;
    noscript: number;
    pngss: number;
    iq: number;
    keepua: number;
    mobile: number;
    scripted: number;
  }

  interface TestResult {
    id: string;
    url: string;
    summary: string;
    testUrl: string;
    location: string;
    from: string;
    connectivity: string;
    bwDown: number;
    bwUp: number;
    latency: number;
    plr: string;
    mobile: number;
    completed: number;
    tester: string;
    testerDNS: string;
    runs: { [key: string]: TestRun };
    fvonly: boolean;
    successfulFVRuns: number;
    average: TestRun;
    standardDeviation: TestRun;
    median: TestRun;
  }

  interface TestRun {
    firstView: any;
  }
}

declare class WebPageTest {
  static defaultListenPort: number;
  static defaultServer: string;
  static defaultWaitResultsPort: number;
  static version: string;

  /**
   * @param server The host of the WebPagetest server. Defaults to 'www.webpagetest.org'.
   * @param key The API Key used for the instance. Can be left empty for public API.
   */
  constructor(server?: string, key?: string);

  static scriptToString(script: TestScript): string;

  getTestStatus(id: string, options: Options & RequestOptions, callback: Callback<Response<WebPageTest.TestStatus>>): void;
  getTestStatus(id: string, callback: Callback<Response<WebPageTest.TestStatus>>): void;

  getTestResults(id: string, options: Options & RequestOptions & ResultsOptions, callback: Callback<Response<WebPageTest.TestResult>>): void;
  getTestResults(id: string, callback: Callback<Response<WebPageTest.TestResult>>): void;

  getLocations(options: Options & RequestOptions, callback: Callback<{ response: Response<{ location: WebPageTest.Location[] }> }>): void;
  getLocations(callback: Callback<{ response: Response<{ location: WebPageTest.Location[] }> }>): void;

  getTesters(options: Options & RequestOptions, callback: Callback<any>): void;
  getTesters(callback: Callback<any>): void;

  runTest(url_or_script: string, options: Options & TestOptions & KeyOptions & ResultsOptions, callback: Callback<any>): void;
  runTest(url_or_script: string, callback: Callback<any>): void;

  cancelTest(id: string, options: Options & KeyOptions, callback: Callback<any>): void;
  cancelTest(id: string, callback: Callback<any>): void;

  getHARData(id: string, options: Options, callback: Callback<any>): void;
  getHARData(id: string, callback: Callback<any>): void;

  getPageSpeedData(id: string, options: Options & RunOptions, callback: Callback<any>): void;
  getPageSpeedData(id: string, callback: Callback<any>): void;

  getUtilizationData(id: string, options: Options & RunOptions, callback: Callback<any>): void;
  getUtilizationData(id: string, callback: Callback<any>): void;

  getRequestData(id: string, options: Options & RunOptions, callback: Callback<any>): void;
  getRequestData(id: string, callback: Callback<any>): void;

  getTimelineData(id: string, options: Options & RunOptions, callback: Callback<any>): void;
  getTimelineData(id: string, callback: Callback<any>): void;

  getNetLogData(id: string, options: Options & RunOptions, callback: Callback<any>): void;
  getNetLogData(id: string, callback: Callback<any>): void;

  getChromeTraceData(id: string, options: Options & RunOptions, callback: Callback<any>): void;
  getChromeTraceData(id: string, callback: Callback<any>): void;

  getConsoleLogData(id: string, options: Options & RunOptions, callback: Callback<any>): void;
  getConsoleLogData(id: string, callback: Callback<any>): void;

  getTestInfo(id: string, options: Options, callback: Callback<any>): void;
  getTestInfo(id: string, callback: Callback<any>): void;

  getHistory(days: number, options: Options, callback: Callback<any>): void;
  getHistory(days: number, callback: Callback<any>): void;

  getGoogleCsiData(id: string, options: Options & RunOptions, callback: Callback<any>): void;
  getGoogleCsiData(id: string, callback: Callback<any>): void;

  getResponseBody(id: string, options: Options & RunOptions & ResponseOptions, callback: Callback<any>): void;
  getResponseBody(id: string, callback: Callback<any>): void;

  getWaterfallImage(id: string, options: Options & RunOptions & ImageOptions & WaterfallOptions, callback: Callback<any>): void;
  getWaterfallImage(id: string, callback: Callback<any>): void;

  getScreenshotImage(id: string, options: Options & RunOptions & ImageOptions & ScreenshotOptions, callback: Callback<any>): void;
  getScreenshotImage(id: string, callback: Callback<any>): void;

  createVideo(tests: string, options: Options & VideoOptions, callback: Callback<any>): void;
  createVideo(tests: string, callback: Callback<any>): void;

  getEmbedVideoPlayer(id: string, options: Options, callback: Callback<any>): void;
  getEmbedVideoPlayer(id: string, callback: Callback<any>): void;

  listen(port: number, options: Options & ListenOptions, callback: Callback<any>): void;
  listen(port: number, callback: Callback<any>): void;

  scriptToString(script: TestScript): string;
}

export = WebPageTest;
