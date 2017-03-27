function add_and_end() {
  //
  // new Bucks object
  //
  var b = new Bucks();

  //
  // Add and add several tasks.
  //
  b.add(function f1(err, res) {

    return 'a';

  }).add(function f2(err, res, next) {

    // res => 'a'
    return next(null, 3);

  }).add(function f3(err, res, next) {

    // res => 3
    return next(new Error('error after 3'));

  }).add(function f4(err, res, next) {

    // err => 'error after 3'
    return next(null, "recover 4");

  }).add(function f5(err, res) {

    // res => 'recover 4'
    throw new Error('error in f5');

  }).add(function f6(err, res) {

    // err => 'error in f5'
    throw err;

  }).add(function f7(err, res) {

    // err => 'error in f5'
    // ignore and return
    return "recover 7";

  }).add(function f8(err, res, next) {

    // res => 'recover 7';
    throw new Error('error in f8');

  }).add(function f9(err, res, next) {

    // err => 'Error in f8'
    // ignore error
    return next(null, 'result of 9');

  }).end(function last(err, results) {

    // all of results
    // are obtained in #end

    // err => null

    // results => [
    //     'a',
    //     null,
    //     null,
    //     'recover 4',
    //     null,
    //     null,
    //     'recover 7',
    //     null,
    //     'result of 9'
    // ];
  });
}

function then() {
  var b = new Bucks();
  b.then(function start() {
    return 'start';
  }).then(function second(res, next) {
    // res => 'start'
    return next(null, 'second')
  }).end();
}

function delay() {
  var b = new Bucks();
  b.add(function (){ /** program */ })
  .delay(1 * 1000) // 1ms
  .add(function() { /** program */})
  .end();
}

function error() {
  var b = new Bucks();
  b.then(function start() {
    throw new Error('error in start');
  }).error(function onError(e, next) {
    // e => 'error in start'
    return next();
  }).end();
}

function final_errorback_in_end() {
  //
  // last error back
  //
  var b = new Bucks();
  b.empty(
    // add empty task (#end with no task cause error)
  ).end(function last(err, res) {
    // error in last callback
    throw new Error('error in end');
  }, function finalErrorback(err) {
    // catch uncaught error in last callback
    // err => 'error in end'
  });
}

function uncaught_error() {
  try {
    var b = new Bucks();
    b.then(function () {
      throw new Error('error');
    }).end();
  } catch(e) {
    // e => 'error'
  }
}

function waterfall() {
  var t1: Bucks.Task = function t1(err, res) {
    return 't1';
  };
  var t2: Bucks.Task = function t2(err, res) {
    return 't2';
  };

  new Bucks().waterfall([t1, t2]).end(function finish(err, ress) {
    // ress => ['t1', 't2']
  });

  // same as
  new Bucks().add(t1).add(t2).end(function finish(err, ress) {
    // ress => ['t1', 't2']
  });
}

function parallel() {
  var b = new Bucks();

  b.parallel([
    function task1(err, res) {
      return "task1";
    },
    function task2(err, res, next) {
      return next(null, "task2");
    },
    function task3(err, res, next) {
      return next(new Error('passed error in task3'));
    },
    function task4(err, res, next) {
      throw new Error('thrown error in task4');
    }
  ]).add(function getResults(err, res, next) {
    // res => {
    //     err: [
    //         null,
    //         null,
    //         [Error: passed error in task3],
    //         [Error: thrown error in task4]
    //     ],
    //     res: [
    //         'task1',
    //         'task2',
    //         null,
    //         null
    //     ]
    // }
    next();
  }).end();
}

function onError() {
  var onError = function (e: Error, bucks: Bucks.Bucks) {
    console.log("Custom onError");
  };

  // Bucks.onError!!
  Bucks.onError(onError);
  var b0 = new Bucks();
  b0
    .add(function(err, next) {
      throw new Error('b0');
    })
    .end()
  ;
}

function dispose() {
  var b0 = new Bucks();

  b0.dispose = function dispose () {
    // delete b0.dummy;
  }

  b0
    .add(function(err, next) {
      // b0.dummy = "dummy";
      next();
    })
    .end(null, null)
  ;
}

function debug() {
  Bucks.DEBUG = true;
}
