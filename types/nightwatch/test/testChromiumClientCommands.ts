import { ExtendDescribeThis, NightwatchAPI } from "nightwatch";

function isNull(v: null) {}
function isString(v: string) {}
function isNightwatchAPI(v: NightwatchAPI) {}
function isMetrics(v: {[metricName: string]: number}) {}

//
// .setGeolocation
//
describe('mock geolocation', function() {
  it('sets the geolocation to Tokyo, Japan and then resets it', () => {
    browser
      .setGeolocation({
        latitude: 35.689487,
        longitude: 139.691706,
        accuracy: 100
      })  // sets the geolocation to Tokyo, Japan
      .navigateTo('https://www.gps-coordinates.net/my-location')
      .pause(3000)
      .setGeolocation()  // resets the geolocation
      .navigateTo('https://www.gps-coordinates.net/my-location')
      .pause(3000);
  });

  it('tests different ways of using setGeolocation', () => {
    // with all parameters
    browser.setGeolocation({
      latitude: 35.689487,
      longitude: 139.691706,
      accuracy: 100
    }, function(result) {
      isNightwatchAPI(this);
      // without any parameter (resets the geolocation)
      this.setGeolocation();
      console.log(result.value);
    });

    // with only latitude and longitude
    browser.setGeolocation({
      latitude: 35.689487,
      longitude: 139.691706
    });

    // with just one parameter
    // @ts-expect-error
    browser.setGeolocation({
      latitude: 35.689487
    });
  });

  it('tests setGeolocation with async', async () => {
    const result = await browser.setGeolocation({
      latitude: 35.689487,
      longitude: 139.691706
    });

    isNull(result);
  });
});

//
// .captureNetworkRequests
//
describe('capture network requests', function() {
  it('captures and logs network requests as they occur', function(this: ExtendDescribeThis<{requestCount: number}>) {
    this.requestCount = 1;
    browser
      .captureNetworkRequests((requestParams) => {
        console.log('Request Number:', this.requestCount!++);
        console.log('Request URL:', requestParams.request.url);
        console.log('Request method:', requestParams.request.method);
        console.log('Request headers:', requestParams.request.headers);
      })
      .navigateTo('https://www.google.com');
  });

  it('tests different ways of using captureNetworkRequests', () => {
    // with all parameters
    browser.captureNetworkRequests((requestParams) => {
      console.log('Request URL:', requestParams.request.url);
      console.log('Request method:', requestParams.request.method);
      console.log('Request headers:', requestParams.request.headers);
    }, function(result) {
      isNightwatchAPI(this);
      // without any parameter
      // @ts-expect-error
      this.captureNetworkRequests();
      console.log(result.value);
    });
  });

  it('tests captureNetworkRequests with async', async () => {
    const result = await browser.captureNetworkRequests(() => {});

    isNull(result);
  });
});

//
// .mockNetworkResponse
//
describe('mock network response', function() {
  it('intercepts the request made to Google search and mocks its response', function() {
    browser
      .mockNetworkResponse('https://www.google.com/', {
        status: 200,
        headers: {
          'Content-Type': 'UTF-8'
        },
        body: 'Hello there!'
      })
      .navigateTo('https://www.google.com/')
      .pause(2000);
  });

  it('tests different ways of using mockNetworkResponse', () => {
    // with all parameters
    browser.mockNetworkResponse('https://www.google.com/', {
      status: 200,
      headers: {
        'Content-Type': 'UTF-8'
      },
      body: 'Hello there!'
    }, function(result) {
      isNightwatchAPI(this);
      // without any parameter (invalid)
      // @ts-expect-error
      this.mockNetworkResponse();
      console.log(result.value);
    });

    // with no response
    browser.mockNetworkResponse('https://www.google.com/');

    // with empty response
    browser.mockNetworkResponse('https://www.google.com/', {});

    // with just one parameter
    browser.mockNetworkResponse('https://www.google.com/', {
      body: 'Hello there!'
    });
  });

  it('tests mockNetworkResponse with async', async () => {
    const result = await browser.mockNetworkResponse('https://www.google.com/');

    isNull(result);
  });
});

//
// .setDeviceDimensions
//
describe('modify device dimensions', function() {
  it('modifies the device dimensions and then resets it', function() {
    browser
      .setDeviceDimensions({
        width: 400,
        height: 600,
        deviceScaleFactor: 50,
        mobile: true
      })
      .navigateTo('https://www.google.com')
      .pause(1000)
      .setDeviceDimensions()  // resets the device dimensions
      .navigateTo('https://www.google.com')
      .pause(1000);
  });

  it('tests different ways of using setDeviceDimensions', () => {
    // with all parameters
    browser.setDeviceDimensions({
      width: 400,
      height: 600,
      deviceScaleFactor: 50,
      mobile: true
    }, function(result) {
      isNightwatchAPI(this);
      // without any parameter (resets the dimensions)
      this.setDeviceDimensions();
      console.log(result.value);
    });

    // with only width and deviceScaleFactor
    browser.setDeviceDimensions({
      width: 400,
      deviceScaleFactor: 50
    });

    // with just one parameter
    browser.setDeviceDimensions({
      mobile: true
    });
  });

  it('tests setDeviceDimensions with async', async () => {
    const result = await browser.setDeviceDimensions();

    isNull(result);
  });
});

//
// .getPerformanceMetrics
//
describe('collect performance metrics', function() {
  it('enables the metrics collection, does some stuff and collects the metrics', function() {
    browser
      .enablePerformanceMetrics()
      .navigateTo('https://www.google.com')
      .getPerformanceMetrics((result) => {
        if (result.status === 0) {
          const metrics = result.value;
          console.log(metrics);
        }
      });
  });

  it('tests different ways of using getPerformanceMetrics', () => {
    // with all parameters
    browser.getPerformanceMetrics(function(result) {
      isNightwatchAPI(this);
      // without any parameter
      this.getPerformanceMetrics();

      if (result.status === 0) {
        const metrics = result.value;
        isMetrics(metrics);
      }
    });
  });

  it('tests getPerformanceMetrics with async', async () => {
    const result1 = await browser.getPerformanceMetrics();
    isMetrics(result1);

    const result2 = await browser
      .enablePerformanceMetrics()
      .navigateTo('https://www.google.com')
      .getPerformanceMetrics();
    isMetrics(result2);
  });
});

//
// .enablePerformanceMetrics
//
describe('collect performance metrics', function() {
  it('enables the metrics collection, does some stuff and collects the metrics', function() {
    browser
      .enablePerformanceMetrics()
      .navigateTo('https://www.google.com')
      .getPerformanceMetrics((result) => {
        if (result.status === 0) {
          const metrics = result.value;
          console.log(metrics);
        }
      });
  });

  it('tests different ways of using enablePerformanceMetrics', () => {
    // with all parameters
    browser.enablePerformanceMetrics(false, function(result) {
      isNightwatchAPI(this);
      // without any parameter
      this.enablePerformanceMetrics();
      console.log(result.value);
    });
  });

  it('tests enablePerformanceMetrics with async', async () => {
    const result1 = await browser.enablePerformanceMetrics();
    isNull(result1);

    const result2 = await browser.enablePerformanceMetrics(false);
    isNull(result2);
  });
});

//
// .takeHeapSnapshot
//
describe('take heap snapshot', function() {
  it('takes heap snapshot and saves it as snap.heapsnapshot file', function() {
    browser
      .navigateTo('https://www.google.com')
      .takeHeapSnapshot('./snap.heapsnapshot');
  });

  it('tests different ways of using takeHeapSnapshot', () => {
    // with all parameters
    browser.takeHeapSnapshot('snap.heapsnapshot', function(result) {
      isNightwatchAPI(this);
      // without any parameter
      this.takeHeapSnapshot();

      if (result.status === 0) {
        const snapshot = result.value;
        isString(snapshot);
      }
    });
  });

  it('tests takeHeapSnapshot with async', async () => {
    const result1 = await browser.takeHeapSnapshot();
    isString(result1);

    const result2 = await browser
      .navigateTo('https://www.google.com')
      .takeHeapSnapshot('something.heapsnapshot');
    isString(result2);
  });
});

//
// .captureBrowserConsoleLogs
//
describe('capture console events', function() {
  it('captures and logs console.log event', function() {
    browser
      .captureBrowserConsoleLogs((event) => {
        console.log(event.type, event.timestamp, event.args[0].value);
      })
      .navigateTo('https://www.google.com')
      .executeScript(function() {
        console.log('here');
      }, []);
  });

  it('tests different ways of using captureBrowserConsoleLogs', () => {
    // with all parameters
    browser.captureBrowserConsoleLogs((event) => {
      console.log(event.type, event.timestamp, event.args[0].value);
      // @ts-expect-error
      console.log(event.context, event.stackTrace);
    }, function(result) {
      isNightwatchAPI(this);
      // without any parameter
      // @ts-expect-error
      this.captureBrowserConsoleLogs();
      console.log(result.value);
    });
  });

  it('tests captureBrowserConsoleLogs with async', async () => {
    const result = await browser.captureBrowserConsoleLogs(() => {});

    isNull(result);
  });
});

//
// .captureBrowserExceptions
//
describe('catch browser exceptions', function() {
  it('captures the js exceptions thrown in the browser', async function() {
    await browser.captureBrowserExceptions((event) => {
      console.log('>>> Exception:', event);
    });

    await browser.navigateTo('https://duckduckgo.com/');

    const searchBoxElement = await browser.findElement('input[name=q]');
    await browser.executeScript(function(_searchBoxElement) {
      _searchBoxElement.setAttribute('onclick', 'throw new Error("Hello world!")');
    }, [searchBoxElement]);

    await browser.elementIdClick(searchBoxElement.getId());
  });

  it('tests different ways of using captureBrowserExceptions', () => {
    // with all parameters
    browser.captureBrowserExceptions((event) => {
      console.log('>>> Exception:', event.timestamp, event.exceptionDetails);
    }, function(result) {
      isNightwatchAPI(this);
      // without any parameter
      // @ts-expect-error
      this.captureBrowserExceptions();
      console.log(result.value);
    });
  });

  it('tests captureBrowserExceptions with async', async () => {
    const result = await browser.captureBrowserExceptions(() => {});

    isNull(result);
  });
});
