/// <reference types="jquery" />

import Nightmare = require("nightmare");

new Nightmare()
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('.searchsubmit')
  .run((err: any, nightmare: Nightmare) => {
    if (err) return console.log(err);
    console.log('Done!');
  });

new Nightmare()
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('.searchsubmit')
  .wait('.url.breadcrumb')
  .evaluate(() => {
    return (document.querySelector('.url.breadcrumb') as HTMLElement).innerText;
  }, (breadcrumb: string) => {
    // expect(breadcrumb).to.equal('github.com');
  })
  .run((err: any, nightmare: Nightmare) => { });


var done = (err: any) => { };

new Nightmare()
  .goto('http://www.google.com/')
  .click('a')
  .back()
  .forward()
  .run(done);

new Nightmare()
  .goto('http://www.wikipedia.org/')
  .refresh()
  .run(done);

new Nightmare()
  .goto('http://www.wikipedia.org/')
  .url(function (url) {
  })
  .run(done);

new Nightmare()
  .goto('http://www.wikipedia.org/')
  .exists('a.link-box', function (exists) {
  })
  .exists('a.blahblahblah', function (exists) {
  })
  .run(done);

new Nightmare()
  .goto('http://www.wikipedia.org/')
  .exists('a.link-box')
  .then((exists: boolean) => { })

new Nightmare()
  .goto('http://www.wikipedia.org/')
  .visible('a.link-box')
  .then((isVisible: boolean) => { })

new Nightmare()
  .goto('http://www.wikipedia.org/')
  .title(function (title) {
  })
  .run(done);

new Nightmare()
  .goto('http://www.wikipedia.org/')
  .visible('input[type="hidden"]', function (visible) {
  })
  .visible('#asdfasdfasdf', function (visible) {
  })
  .visible('#searchInput', function (visible) {
  })
  .run(done);


new Nightmare()
  .goto('http://yahoo.com')
  .evaluate(function (parameter) {
    return document.title + ' -- ' + parameter;
  }, function (title) {
  }, 'testparameter')
  .run(done);

new Nightmare()
  .goto('http://google.com')
  .inject('js', 'test/files/jquery-2.1.1.min.js')
  .evaluate(function () {
    return $('a').length;
  }, function (numAnchors) {
  })
  .run(done);

new Nightmare()
  .goto('http://google.com')
  .inject('js', 'test/files/jquery-2.1.1.min.js')
  .inject('css', 'test/files/test.css')
  .evaluate(function () {
    return $('body').css('background-color');
  }, function (color) {
  })
  .run(done);

new Nightmare()
  .goto('http://google.com')
  .inject('js', 'test/files/jquery-2.1.1.min.js')
  .inject('pdf', 'test/files/test.css')
  .evaluate(function () {
    return $('body').css('background-color');
  }, function (color) {
  })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('.searchsubmit')
  .wait()
  .evaluate(function () {
    return document.title;
  }, function (title) {
  })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('.searchsubmit')
  .wait()
  .click('.breadcrumb_link')
  .wait()
  .evaluate(function () {
    return document.title;
  }, function (title) {
  })
  .run(done);

new Nightmare()
  .viewport(320, 320)
  .goto('http://www.yahoo.com')
  .wait()
  .evaluate(function () {
    return {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
  }, function (coordinates) {
  })
  .scrollTo(100, 50)
  .evaluate(function () {
    return {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
  }, function (coordinates) {
  })
  .run(done);

new Nightmare()
  .goto('http://validator.w3.org/#validate_by_upload')
  .upload('#uploaded_file', 'test/files/jquery-2.1.1.min.js')
  .evaluate(function () {
    return (document.getElementById('uploaded_file') as HTMLInputElement).value;
  }, function (value) {
  })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .screenshot('test/test.png')
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .screenshot((err, buffer) => {
    console.log(Buffer.isBuffer(buffer));
  })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .screenshot('test/test.png', { x: 10, y: 5, width: 10, height: 10 })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .screenshot({ x: 10, y: 5, width: 10, height: 10 }, (err, buffer) => {
    console.log(Buffer.isBuffer(buffer));
  })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .pdf('test/test.pdf')
  .run(done);

new Nightmare()
  .goto("http://yahoo.com")
  .pdf((err,data)=>{
    console.log(Buffer.isBuffer(data))
  })
  .run(done)

new Nightmare()
  .goto('http://www.google.com/')
  .wait('input')
  .run(done);


var seconds = function () {
  var gifs = document.querySelectorAll('img');
  var split = (gifs[gifs.length - 2] as HTMLImageElement).src.split('.gif')[0];
  var seconds = split.split('.com/c')[1];
  return parseInt(seconds, 10);
};
new Nightmare()
  .goto('http://onlineclock.net/')
  .wait(seconds, 1)
  .run(done);

var seconds = function () {
  var text = document.querySelectorAll('b')[0].textContent;
  var splits = text.split(/\s/);
  var seconds = splits[splits.length - 2].split(':')[2];
  return parseInt(seconds, 10) % 10;
};
new Nightmare()
  .goto('http://www.whattimeisit.com/')
  .wait(seconds, 1, 1500)
  .run(done);

new Nightmare({
  timeout: 1000
})
  .on('timeout', function (msg) {
  })
  .goto('http://www.google.com/')
  .wait('bbb')
  .run(done);

new Nightmare()
  .on('initialized', function () {
  })
  .on('loadStarted', function () {
  })
  .on('loadFinished', function (status) {
  })
  .on('resourceRequested', function () {
  })
  .on('resourceReceived', function () {
  })
  .on('navigationRequested', function (url) {
  })
  .on('urlChanged', function (url) {
  })
  .on('consoleMessage', function () {
  })
  .on('alert', function () {
  })
  .on('prompt', function () {
  })
  .on('error', function () {
  })
  .goto('http://www.yahoo.com')
  .run(done);

new Nightmare()
  .useragent('firefox')
  .goto('http://www.wikipedia.org/')
  .evaluate(function () {
    return window.navigator.userAgent;
  }, function (res) {
  })
  .run(done);

new Nightmare()
  .authentication('my', 'auth')
  .goto('http://httpbin.org/basic-auth/my/auth')
  .evaluate(function () {
    return document.body.innerHTML;
  }, function (data) {
  })
  .run(done);

var size = { width: 400, height: 1000 };
new Nightmare()
  .viewport(size.width, size.height)
  .goto('http://www.wikipedia.org/')
  .evaluate(function () {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }, function (res) {
  })
  .run(done);

new Nightmare()
  .viewport(1600, 900)
  .goto('http://www.wikipedia.org')
  .wait()
  .screenshot('test/testScaleDefault.png')
  .viewport(3200, 1800)
  .zoom(2)
  .goto('http://www.wikipedia.org')
  .wait()
  .screenshot('test/testScaleIs2.png')
  .run(done);

var headers = {
  'X-Nightmare-Header': 'hello world'
};
new Nightmare()
  .headers(headers)
  .goto('http://httpbin.org/headers')
  .evaluate(function () {
    return (document.body.children[0] as HTMLElement).innerHTML;
  }, function (data: string) {
  })
  .run(done);


var nightmare = new Nightmare().goto('http://yahoo.com');
nightmare.run();


function search(term: string) {
  return function (nightmare: Nightmare) {
    nightmare
      .goto('http://yahoo.com')
      .type('.input-query', term)
      .click('.searchsubmit')
      .wait();
  };
}
function testTitle(term: string) {
  return function (nightmare: Nightmare) {
    nightmare
      .evaluate(function () {
        return document.title;
      }, function (title: string) {
      });
  };
}
new Nightmare()
  .use(search('test term'))
  .use(testTitle('test term'))
  .run(done);

new Nightmare({ show: true });

new Nightmare()
  .goto('http://google.com', { bogus: 'foo' })
  .evaluate(() => document.body.textContent)
  .end()
  .then(body => console.log(body));

new Nightmare()
  .header('bogus', 'foo')
  .goto('http://google.com')
  .mouseup('body')
  .mousedown('body')
  .mouseover('body')
  .insert('input[name=q]', 'nightmare.js')
  .click('input[type=submit]');

new Nightmare()
  .goto('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox')
  .check('#book')
  .uncheck('#book');

new Nightmare()
  .goto('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select')
  .select('select[name=select]', 'value3');

new Nightmare()
  .goto('https://github.com/segmentio/nightmare')
  .click('a[href="/segmentio/nightmare/archive/master.zip"]')
  .download('/some/other/path/master.zip');

new Nightmare({ show: true, openDevTools: { mode: 'detach' } });


new Nightmare({ waitTimeout: 1000 })
  .goto("https//google.com")
  .wait(".really-not-real")


new Nightmare({ gotoTimeout: 10000 })
  .goto("https://45.56.178.93/")


new Nightmare({ executionTimeout: 1000 })
  .goto("https//google.com")
  .evaluate(() => {
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  })
