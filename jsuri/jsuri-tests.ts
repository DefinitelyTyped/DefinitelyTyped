

function test_createUri() {
  var uri = new jsuri.Uri('http://user:pass@www.test.com:81/index.html?q=books#fragment');

  var getTests = {
    protocol: 'http' == uri.protocol(),
    userInfo: 'user:pass' == uri.userInfo(),
    host: 'www.test.com' == uri.host(),
    port: 81 == uri.port(),
    path: '/index.html' == uri.path(),
    query: 'q=books' == uri.query(),
    anchor: 'fragment' == uri.anchor()
  };

  uri.protocol('https');
  var setProtocolTest = uri.toString() == 'https://user:pass@www.test.com:81/index.html?q=books#fragment';

  uri.host('mydomain.com');
  var setHostTest = uri.toString() == 'https://user:pass@mydomain.com:81/index.html?q=books#fragment';
}

function test_chainable() {
  new jsuri.Uri()
    .setPath('/archives/1979/')
    .setQuery('?page=1');               // /archives/1979?page=1

  new jsuri.Uri()
    .setPath('/index.html')
    .setAnchor('content')
    .setHost('www.test.com')
    .setPort(8080)
    .setUserInfo('username:password')
    .setProtocol('https')
    .setQuery('this=that&some=thing');  // https://username:password@www.test.com:8080/index.html?this=that&some=thing#content

  new jsuri.Uri('http://www.test.com')
    .setHost('www.yahoo.com')
    .setProtocol('https');              // https://www.yahoo.com
}

function test_queryParams() {
  new jsuri.Uri('?cat=1&cat=2&cat=3').getQueryParamValue('cat');   // 1

  new jsuri.Uri('?cat=1&cat=2&cat=3').getQueryParamValues('cat');  // [1, 2, 3]

  new jsuri.Uri().addQueryParam('q', 'books');                     // ?q=books

  new jsuri.Uri('http://www.github.com')
    .addQueryParam('testing', '123')
    .addQueryParam('one', 1);                                // http://www.github.com/?testing=123&one=1

  // insert param at index 0
  new jsuri.Uri('?b=2&c=3&d=4').addQueryParam('a', '1', 0);        // ?a=1&b=2&c=3&d=4

  new jsuri.Uri().replaceQueryParam('page', 2);                    // ?page=2

  new jsuri.Uri('?a=1&b=2&c=3')
    .replaceQueryParam('a', 'eh');                           // ?a=eh&b=2&c=3

  new jsuri.Uri('?a=1&b=2&c=3&c=4&c=5&c=6')
    .replaceQueryParam('c', 'five', '5');                    // ?a=1&b=2&c=3&c=4&c=five&c=6

  new jsuri.Uri('?a=1&b=2&c=3')
    .deleteQueryParam('a');                 // ?b=2&c=3

  new jsuri.Uri('test.com?a=1&b=2&c=3&a=eh')
    .deleteQueryParam('a', 'eh');           // test.com/?a=1&b=2&c=3

  new jsuri.Uri('?a=1&b=2&c=3')
    .hasQueryParam('a');                    // true

  new jsuri.Uri('?a=1&b=2&c=3')
    .hasQueryParam('d');                    // false
}

function test_clone() {
  var baseUri = new jsuri.Uri('http://localhost/');

  baseUri.clone().setProtocol('https');  // https://localhost/
  baseUri;                               // http://localhost/
}
