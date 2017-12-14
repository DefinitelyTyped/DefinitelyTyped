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
      return (<HTMLElement>document.querySelector('.url.breadcrumb')).innerText;
    }, (breadcrumb: string) => {
      // expect(breadcrumb).to.equal('github.com');
    })
    .run((err: any, nightmare: Nightmare) => {});


var done = (err: any) => {};

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
  }, 'testparameter')
  .run(done);

new Nightmare()
  .goto('http://google.com')
  .inject('js', 'test/files/jquery-2.1.1.min.js')
  .evaluate(function () {
    return $('a').length;
  })
  .run(done);

new Nightmare()
  .goto('http://google.com')
  .inject('js', 'test/files/jquery-2.1.1.min.js')
  .inject('css', 'test/files/test.css')
  .evaluate(function () {
    return $('body').css('background-color');
  })
  .run(done);

new Nightmare()
  .goto('http://google.com')
  .inject('js', 'test/files/jquery-2.1.1.min.js')
  .inject('pdf', 'test/files/test.css')
  .evaluate(function () {
    return $('body').css('background-color');
  })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('.searchsubmit')
  .wait('bbb')
  .evaluate(function () {
    return document.title;
  })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('.searchsubmit')
  .wait('bbb')
  .click('.breadcrumb_link')
  .wait('bbb')
  .evaluate(function () {
    return document.title;
  })
  .run(done);

new Nightmare()
  .viewport(320, 320)
  .goto('http://www.yahoo.com')
  .wait('bbb')
  .evaluate(function () {
    return {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
  })
  .scrollTo(100,50)
  .evaluate(function () {
    return {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
  })
  .run(done);

new Nightmare()
  .goto('http://validator.w3.org/#validate_by_upload')
  .upload('#uploaded_file', 'test/files/jquery-2.1.1.min.js')
  .evaluate(function () {
    return (<HTMLInputElement>document.getElementById('uploaded_file')).value;
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
  .screenshot('test/test.png', { x: 10, y: 5, width: 10, height: 10})
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .screenshot({ x: 10, y: 5, width: 10, height: 10}, (err, buffer) => {
    console.log(Buffer.isBuffer(buffer));
  })
  .run(done);

new Nightmare()
  .goto('http://yahoo.com')
  .pdf('test/test.pdf')
  .run(done);

new Nightmare()
  .goto('http://www.google.com/')
  .wait('input')
  .run(done);


var seconds = function () {
  var gifs = document.querySelectorAll('img');
  var split = (<HTMLImageElement>gifs[gifs.length-2]).src.split('.gif')[0];
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
  var seconds = splits[splits.length-2].split(':')[2];
  return parseInt(seconds, 10)%10;
};
new Nightmare()
  .goto('http://www.whattimeisit.com/')
  .wait(seconds, 1, 1500)
  .run(done);

new Nightmare({
    waitTimeout: 1000
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
  })
  .run(done);

new Nightmare()
  .authentication('my','auth')
  .goto('http://httpbin.org/basic-auth/my/auth')
  .evaluate(function () {
    return document.body.innerHTML;
  })
  .run(done);

var size = { width : 400, height: 1000 };
new Nightmare()
  .viewport(size.width, size.height)
  .goto('http://www.wikipedia.org/')
  .evaluate(function () {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  })
  .run(done);

new Nightmare()
  .viewport(1600, 900)
  .goto('http://www.wikipedia.org')
  .wait('bbb')
  .screenshot('test/testScaleDefault.png')
  .viewport(3200, 1800)
  .zoom(2)
  .goto('http://www.wikipedia.org')
  .wait('bbb')
  .screenshot('test/testScaleIs2.png')
  .run(done);

var headers = {
  'X-Nightmare-Header': 'hello world'
};
new Nightmare()
  .headers(headers)
  .goto('http://httpbin.org/headers')
  .evaluate(function () {
    return (<HTMLElement>document.body.children[0]).innerHTML;
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
      .wait('bbb');
  };
}
function testTitle(term: string) {
  return function (nightmare: Nightmare) {
    nightmare
      .evaluate(function () {
        return document.title;
      });
  };
}
new Nightmare()
  .use(search('test term'))
  .use(testTitle('test term'))
  .run(done);

new Nightmare({show: true});

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

new Nightmare({show: true, openDevTools: {mode: 'detach'}});
