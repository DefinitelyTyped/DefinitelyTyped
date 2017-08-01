const webpageMod = require('webpage'); // tslint:disable-line no-var-requires
const webserverMod = require('webserver').create(); // tslint:disable-line no-var-requires

let page = webpageMod.create();
let vUrl = 'https://www.w3c.org';

function testWebserver() {
  webserverMod.close();
  webserverMod.listen(1234);
  webserverMod.registerFile("urlPath", "filePath");
  webserverMod.registerDirectory("urlPath", "dirPath");
}

let vUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8';
page.settings.userAgent = vUserAgent;

page.onConsoleMessage = (vMsg) => {
};

page.onAlert = (vMsg) => {
};

page.onLoadStarted = () => {
};

page.captureContent = [/json/];

page.onResourceReceived = (oResponse) => {
  oResponse.id;
  oResponse.bodySize;
  oResponse.body;
  oResponse.contentType;
  oResponse.headers;
};

page.onResourceRequested = (oRequestData, oNetworkRequest) => {
  oRequestData.headers;
  oRequestData.id;
  oRequestData.method;
  oRequestData.time;
  oRequestData.url;
};

page.onLoadFinished = (vStatus) => {
  phantom.exit();
};

page.onInitialized = () => {
};

page.onPageCreated = (oPage) => {
  let oCookie: Cookie;
  oPage.addCookie(oCookie);
};

page.open(vUrl) // loads a page
  .then(() => { // executed after loading
    page.viewportSize = { width: 414, height: 736 };

    let vFilename = `../data/page01.png`;
    page.render(vFilename, {onlyViewport: true});

    // then open a second page
    return page.open('http://');
  })
  .then(() => {
    // click somewhere on the second page
    page.sendEvent("click", 5, 5, 'left', 0);
    slimer.exit();
  });
