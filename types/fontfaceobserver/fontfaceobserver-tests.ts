function test1() {
  var font = new FontFaceObserver('My Family', {
    weight: 400
  });

  font.load().then(function () {
    console.log('Font is available');
  }, function () {
    console.log('Font is not available');
  });
}

function test2() {
  var font = new FontFaceObserver('My Family');

  font.load('中国').then(function () {
    console.log('Font is available');
  }, function () {
    console.log('Font is not available');
  });
}

function test3() {
  var font = new FontFaceObserver('My Family');

  font.load(null, 5000).then(function () {
    console.log('Font is available');
  }, function () {
    console.log('Font is not available after waiting 5 seconds');
  });
}

function test4() {
  var fontA = new FontFaceObserver('Family A');
  var fontB = new FontFaceObserver('Family B');

  fontA.load().then(function () {
    console.log('Family A is available');
  });

  fontB.load().then(function () {
    console.log('Family B is available');
  });
}
