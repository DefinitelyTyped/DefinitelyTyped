import webpagemod = require('webpage')
let page = webpagemod.create();
let vUrl = 'https://www.w3c.org';

let vUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8'
page.settings.userAgent = vUserAgent;

page.onConsoleMessage = function(vMsg) {
};

page.onAlert = function(vMsg) {
};

page.onLoadStarted = function() {
};

page.captureContent = [ /json/ ]

page.onResourceReceived = function(oResponse) {
  oResponse.id;
  oResponse.bodySize;
  oResponse.body;
  oResponse.contentType;
  oResponse.headers;
};

page.onResourceRequested = function(oRequestData, oNetworkRequest) {
  oRequestData.headers;
  oRequestData.id;
  oRequestData.method;
  oRequestData.time;
  oRequestData.url;
};


page.onLoadFinished = function(vStatus) {
  phantom.exit();
};

page.onInitialized = function() {
};

page.onPageCreated = function(oPage) {
  let oCookie: ICookie
  oPage.addCookie(oCookie);
};


page.open(vUrl) // loads a page
  .then(function(){ // executed after loading
    page.viewportSize = { width:414, height:736 };


    let vFilename = `../data/page01.png`;
    page.render(vFilename, {onlyViewport:true})

    // then open a second page
    return page.open('http://');
  })
  .then(function(){
    // click somewhere on the second page
    page.sendEvent("click", 5, 5, 'left', 0);
    slimer.exit()
  });
