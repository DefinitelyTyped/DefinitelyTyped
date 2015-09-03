/// <reference path="./phantom.d.ts" />

import phantom = require("phantom");

phantom.create((ph: phantom.PhantomJS): void => {
  ph.createPage((page): void => {
    page.open("http://www.google.com", (status: string): void => {
      console.log("opened google? ", status);
      page.evaluate((): string => {
        return document.title;
      }, (result: string): void => {
        console.log('Page title is ' + result);
        ph.exit();
      });
    });
  });
});


var _ph: phantom.PhantomJS;
phantom.create("--web-security=no", "--ignore-ssl-errors=yes", { port: 12345 }, (ph) => {
  console.log("Phantom Bridge Initiated");
  _ph = ph;
});
var _page: phantom.WebPage;
_ph.createPage((page) => {
  console.log("Page created!");
  _page = page;
});

_page.open("http://www.google.com", function (status) {
  if (status == "success") {
    console.log("Page is open!");
    _page.close();
  }
});

_page.evaluate(function() {
  var title = (<HTMLElement>document.querySelector("title")).innerText
  console.log("The page title is " + title)
})
_page.evaluate(function(selector) {
  var text = (<HTMLElement>document.querySelector(selector)).innerText
  console.log(selector + " contains the following text: " + text)
}, function(result) {}, "title")
_page.evaluate(function(selector) {
  var text = (<HTMLElement>document.querySelector(selector)).innerText
  return text
}, function(result) {
  console.log("The element contains the following text: " + result)
}, "title");


_page.set('viewportSize', { width: 1920, height: 1080 }, function (result) {
  console.log("Viewport set to: " + result.width + "x" + result.height);
});
_page.set('onConsoleMessage', function (msg: string) {
  console.log("Phantom Console: " + msg);
});
_page.set('onUrlChanged', function(url: string) {
  console.log("New URL: "+url);
});
_page.set('onResourceRequested', function () {
  console.log("Resource requested..");
});
_page.set('onResourceReceived', function (res: any) {
  if (res.stage == 'end') {
    console.log("Resource received!")
  }
});
_page.set('onLoadStarted', function () {
  console.log("Loading started");
});
_page.set('onLoadFinished', function (status: string) {
  console.log("Loading finished, the page is " + ((status == "success") ? "open." : "not open!"));
});
_page.set('settings.loadImages', false);
_page.set('settings.resourceTimeout', 1000);


_page.set('settings.viewportSize', {
  width : 1920,
  height : 1080
});
_page.open("http://google.co.jp", (status) => {
  _page.render("/tmp/google-top.jpg", {
    format : 'jpeg',
    quality : '80'
  });
  _ph.exit();
});


phantom.create((ph) => {
  ph.addCookie('cookie_name', 'cookie_value', 'localhost', () => {});
  ph.getCookies((cookies) => {});

  ph.createPage((page) => {
    page.set('Referer', 'http://google.com');
    page.set('settings.userAgent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1');

    page.open("http://localhost:9901/cookie", (status) => {
      var someFunc = (aaa: string, my_obj: Object) => {
        var attribute_to_want = aaa;
        var h2Arr: string[] = [];
        var results = document.querySelectorAll(attribute_to_want);
        for (var i = 0, len = results.length; i < len; ++i) {
          var result = <HTMLElement>results[i];
          h2Arr.push(result.innerText);
        }
        return {
          h2: h2Arr,
          aaa: this.arguments,
          obj: my_obj
        };
      };
      var finishedFunc = (result: any) => {
        ph.exit();
      };
      page.evaluate(someFunc, finishedFunc, 'div', {wahtt: 111});
    });
  });

  ph.createPage((page) => {
    page.open('http://www.phantomjs.org', (status) => {
      if (status === 'success') {
        page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', () => {
          page.injectJs('do.js', (res) => {
            page.evaluate(() => {
              return document.title;
            }, (title: string) => {
              console.log(title);
              ph.exit();
            });
          });
        });

        page.sendEvent('click', 350, 320);
        page.sendEvent('click', 350, 320, 'right');
        page.sendEvent('keypress', 'A', null, null, 0x02000000 | 0x08000000);
        page.sendEvent('keypress', 'A');

        page.setViewportSize(800, 640);
        page.setPaperSize({
          width: '200px',
          height: '300px',
          margin: '0px'
        });
        page.setPaperSize({
          format: 'A4',
          orientation: 'portrait',
          margin: '1cm'
        });
        page.setPaperSize({
          width: '5in',
          height: '7in',
          margin: {
            top: '50px',
            left: '20px'
          }
        });
        page.setZoomFactor(0.25);
      }
    });
  });
});


