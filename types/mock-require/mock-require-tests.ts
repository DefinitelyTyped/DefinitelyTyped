import mock = require('mock-require');

function testMock() {
  mock('http', {
    request: function () {
      console.log('http.request called');
    }
  });

  const http = require('http');
  http.request(); // 'http.request called'
}

function testStop() {
  mock('fs', { mockedFS: true });

  const fs1 = require('fs');
  mock.stop('fs');

  const fs2 = require('fs');
  fs1 === fs2; // false
}

function testStopAll() {
  mock('fs', {});
  mock('path', {});

  const fs1 = require('fs');
  const path1 = require('path');

  mock.stopAll();

  const fs2 = require('fs');
  const path2 = require('path');

  fs1 === fs2; // false
  path1 === path2; // false
}

function testReRequire() {
  const fs = require('fs');
  let fileToTest = require('./fileToTest');
  mock('fs', {}); // fileToTest is still using the unmocked fs module
  fileToTest = mock.reRequire('./fileToTest'); // fileToTest is now using your mock
}