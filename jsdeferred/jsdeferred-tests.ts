/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jsdeferred.d.ts"/>

declare function alert(a: any): void;
declare function log(a: any): void;

interface DeferredizedJQueryStatic extends JQueryStatic {
    //get (url: string, data?: any, success?: any, dataType?: any): Deferred;
}
declare var $: DeferredizedJQueryStatic;

declare interface http {
    get (url: string): Deferred;
}


/***** jsDoc case *****/

// constructor
(() => {
    var d = new Deferred();
    var d = Deferred();
})();

// define
(() => {
    Deferred.define();
    $.get("/hoge").next(function (data) {
        alert(data);
    }).
      parallel([$.get("foo.html"), $.get("bar.html")]).next(function (values) {
          log($.map(values, function (v) { return v.length }));
          if (values[1].match(/nextUrl:\s*(\S+)/)) {
              return $.get(RegExp.$1).next(function (d) {
                  return d;
              });
          }
      }).
      next(function (d) {
          log(d.length);
      });
})();

// next
(() => {
    var d = new Deferred();
    d.
      next(function () {
          alert(1);
      }).
      next(function () {
          alert(2);
      });
    d.call();
})();

// error
(() => {
    var d = new Deferred();
    d.
      next(function () {
          alert(1);
          throw "foo";
      }).
      next(function () {
          alert('not shown');
      }).
      error(function (e) {
          alert(e); //=> "foo"
      });
    d.call();
})();

// call
(() => {
    var d = new Deferred();
    setTimeout(function () {
        d.call('value');
    }, 100);
    return d;
})();

// fail
(() => {
    var d = new Deferred();
    var x = new XMLHttpRequest();
    x.onreadystatechange = function () {
        if (x.readyState == 4) {
            if (x.status == 200) d.call(x); else d.fail(x);
        }
    };
    return d;
})();

// chain
(() => {
    chain(
      function () {
          return wait(0.5);
      },
      function (w) {
          throw "foo";
      },
      function error(e) {
          alert(e);
      },
      [
        function () {
            return wait(1);
        },
        function () {
            return wait(2);
        }
      ],
      function (result) {
          alert([result[0], result[1]]);
      },
      {
          foo: wait(1),
          bar: wait(1)
      },
      function (result) {
          alert([result.foo, result.bar]);
      },
      function error(e) {
          alert(e);
      }
    );
})();

// wait
(() => {
    wait(1).next(function (elapsed) {
        log(elapsed); //=> may be 990-1100
    });
})();

// call
(() => {
    next(function () {
        function pow(x, n) {
            function _pow(n, r) {
                print([n, r]);
                if (n == 0) return r;
                return call(_pow, n - 1, x * r);
            }

            return call(_pow, n, 1);
        }

        return call(pow, 2, 10);
    }).
      next(function (r) {
          print([r, "end"]);
      });
})();

// parallel
(() => {
    parallel([
      $.get("foo.html"),
      $.get("bar.html")
    ]).next(function (values) {
        values[0] //=> foo.html data
        values[1] //=> bar.html data
    });

    parallel({
        foo: $.get("foo.html"),
        bar: $.get("bar.html")
    }).next(function (values) {
        values.foo //=> foo.html data
        values.bar //=> bar.html data
    });
})();

// loop
(() => {
    //=> loop 1 to 100
    loop({ begin: 1, end: 100, step: 10 }, function (n, o) {
        for (var i = 0; i < o.step; i++) {
            log(n + i);
        }
    });

    //=> loop 10 times with sleeping 1 sec in each loop.
    loop(10, function (n) {
        log(n);
        return wait(1);
    });
})();

// repeat
(() => {
    repeat(10, function (i) {
        i //=> 0,1,2,3,4,5,6,7,8,9
    });
})();

// register
(() => {
    // Deferred.register("loop", loop);

    // Global Deferred function
    loop(10, function (n) {
        print(n);
    }).
      // Registered Deferred.prototype.loop
      loop(10, function (n) {
          print(n);
      });
})();

// connect
(() => {
    var timeout = Deferred.connect(setTimeout, { target: window, ok: 0 });
    timeout(1).next(function () {
        alert('after 1 sec');
    });

    var timeout = Deferred.connect(window, "setTimeout");
    timeout(1).next(function () {
        alert('after 1 sec');
    });
})();

// retry
(() => {
    Deferred.retry(3, function () {
        return http.get('foo.html');
    }).
      next(function (res) {
          res //=> response if succeeded
      }).
      error(function (e) {
          e //=> error if all try failed
      });
})();


/***** Tutorial case *****/

(() => {
    Deferred.define();

    next(function () {
        alert("Hello!");
        return wait(5);
    }).
      next(function () {
          alert("World!");
      });

    Deferred.next(function () {
        alert("Hello!");
        return Deferred.wait(5);
    }).
      next(function () {
          alert("World!");
      });

    // http.get is assumed to be a function that takes a URI as an argument and returns a Deferred instance
    var results = [];
    next(function () {
        return http.get("/foo.json").next(function (data) {
            results.push(data);
        });
    }).
      next(function () {
          return http.get("/baz.json").next(function (data) {
              results.push(data);
          });
      }).
      next(function () {
          return http.get("/baz.json").next(function (data) {
              results.push(data);
          });
      }).
      next(function () {
          alert(results);
      });

    var wants = ["/foo.json", "/bar.json", "/baz.json"];
    var results = [];
    loop(wants.length, function (i) {
        return http.get(wants[i]).next(function (data) {
            results.push(data);
        });
    }).
      next(function () {
          alert(results);
      });

    parallel([
      http.get("/foo.json"),
      http.get("/bar.json"),
      http.get("/baz.json")
    ]).
      next(function (results) {
          alert(results);
      });

    next(function () {
        // something 1
    }).
      next(function () {
          // asynchronous process
          throw "error!";
      }).
      next(function () {
          // something 2 (not executed as an error occurs in the previous process)
      });

    next(function () {
        // something 1
    }).
      next(function () {
          // asynchronous process
          throw "error!";
      }).
      next(function () {
          // something 2 (not executed as an error occurs in the previous process)
      }).
      error(function (e) {
          alert(e);
      });

    next(function () {
        // something 1
    }).
      next(function () {
          // asynchronous process
          throw "error!";
      }).
      error(function (e) {
          alert(e);
      }).
      next(function () {
          // something 2 (executed since the exception would already be handled)
      }).
      error(function (e) {
          alert(e);
      });

    next(function () {
        alert("Hello!");
        return wait(5);
    }).
      next(function () {
          alert("World!");
      });

    next(function () {
        alert(1);
        return next(function () {
            alert(2);
        }).
          next(function () {
              alert(3);
          });
    }).
      next(function () {
          alert(4);
      });

    var http = {}
    http.get = function (uri) {
        var deferred = new Deferred();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    deferred.call(xhr);
                } else {
                    deferred.fail(xhr);
                }
            }
        };
        deferred.canceller = function () { xhr.abort() };
        return deferred;
    }

    loop(1000, function (n) {
        // heavy process
    });

    function repeat(n, f) {
        var i = 0, end = {}, ret = null;
        return Deferred.next(function () {
            var t = (new Date()).getTime();
            divide: {
                do {
                    if (i >= n) break divide;
                    ret = f(i++);
                } while ((new Date()).getTime() - t < 20);
                return Deferred.call(arguments.callee);
            }
        });
    }

    next(function () {
        console.log("start");
    }).
      next(function () {
          function pow(x, n) {
              function _pow(n, r) {
                  console.log([n, r]);
                  if (n == 0) return r;
                  return call(_pow, n - 1, x * r);
              }

              return call(_pow, n, 1);
          }

          return call(pow, 2, 10);
      }).
      next(function (r) {
          console.log([r, "end"]);
      }).
      error(function (e) {
          alert(e);
      })

    loop(10, function (i) {
        console.log(i)
    });

    $.get("README.markdown").next(function (data) {
        console.log(data);
    });

})();

(() => {
    console.log("start. gathering data.");

    parallel([$.get("README.markdown"), $.get("ChangeLog")]).
      next(function (values) {
          var lengths = $.map(values, function (i) { return i.length });
          console.log(lengths.join(", "));
      });
})();

(() => {
    console.log("start. gathering data.");

    parallel({ html: $.get("README.markdown"), js: $.get("ChangeLog") }).
      next(function (values) {
          console.log(["html=", values.html.length, " js=", values.js.length].join(""));
      });
})();

(() => {
    console.log("start. wait 3 sec.");

    var list = [];
    var printAndReturn = function (i) {
        console.log(i + "msec elapsed");
        return i;
    };
    list.push(wait(0).next(printAndReturn));
    list.push(wait(1).next(printAndReturn));
    list.push(wait(2).next(printAndReturn));
    list.push(wait(3).next(printAndReturn));

    parallel(list).next(function (values) {
        console.log("Completed. values: " + values.join(", "));
    });
})();

(() => {
    var queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var workers = new Array(2);
    var work = function (job) {
        console.log('working... ' + job);
        return wait(Math.random() * 4);
    };

    for (var i = 0, len = workers.length; i < len; i++) {
        workers[i] = next(function me() {
            var job = queue.shift();
            if (!job) return;

            console.log("start worker: " + job);
            return next(function () { return job }).
              next(work).
              next(me);
        }).
          error(function (e) {
              alert(e);
          });
    }

    parallel(workers).next(function () {
        console.log('all done!');
    });
})();

(() => {
    next(function () {
        var sum = 0;
        return loop({ end: 100000, step: 1000 }, function (n, o) {
            console.log(["Processing divided loop:n=", n, ", sum=", sum, " last?=", o.last].join(""));
            for (var i = 0; i < o.step; i++) {
                // console.log(i + n);
                sum += i + n;
            }
            console.log(["sum=", sum].join(""));
            return sum;
        });
    }).
      next(function (e) {
          console.log("Result:" + e);
          console.log("end");
      }).
      error(function (e) {
          console.log(e);
      });
})();

(() => {
    loop({ begin: 1, end: 100, step: 10 }, function (n, o) {
        console.log(["Processing divided loop:n=", n, " last?=", o.last].join(""));
        for (var i = 0; i < o.step; i++) {
            var j = n + i;
            console.log(j);
        }
    });
})();

(() => {
    Deferred.repeat(100, function (n, o) {
        console.log(n);
        for (var i = 0; i < Math.pow(n, 2); i++) {
            for (var j = n; j; j--);
        }
    });
})();

(() => {
    loop(10, function (n) {
        console.log(n);
        return wait(0.1);
    });

    loop(10, function (n) {
        console.log(String.fromCharCode(97 + n));
        return wait(0.2);
    });
})();

(() => {
    console.log(0);
    loop(10, function (n) {
        console.log(n);
        return n;
    }).
      wait(1).
      loop(10, function (n) {
          var c = String.fromCharCode(97 + n);
          console.log(c);
          return c;
      }).
      next(function (i) {
          console.log("end");
      }).
      error(function (e) {
          alert(e);
      });
})();

(() => {
    loop(5, function (i, o) {
        console.log(i);
        return o.last ? i : wait(1);
    }).
      next(function (e) {
          console.log("end [" + e + "]");
      }).
      error(function (e) {
          console.log(e);
      });
})();

(() => {
    next(function (i) {
        function delayloop(i) {
            console.log(i++);
            if (i < 5) {
                return wait(1).next(function () {
                    return call(delayloop, i);
                });
            }
        }

        return call(delayloop, 0);
    }).
      next(function (e) {
          console.log("end");
      }).
      error(function (e) {
          console.log(e);
      });
})();

(() => {
    function callcc(fun) {
        var error = new Deferred();
        return call(function () {
            // JSDeferred passes current Deferred Object to  this.
            var ccdeferred = this;
            // Call with current continuation (calling Deferred.next)
            return fun(function (a) {
                ccdeferred._next.call(a);
                throw error
            });
        }).
          error(function (e) {
              // Current Deferred chain must be stopped
              if (e === error) {
                  return e;
              } else {
                  throw e;
              }
          });
    }

    callcc(function (cont) {
        return 10 * 10 * cont(20);
    }).
      next(function (val) {
          console.log("callcc1 returns:" + val);
      });
    // should show "callcc1 returns:20"

    var cont;
    var i = 0;
    callcc(function (c) {
        cont = c;
        return 10;
    }).
      next(function (val) {
          console.log("callcc2 returns:" + val);
          if (!i++) cont(20);
      });
    // should show "callcc2 returns:10", "callcc returns:20"
})();

(() => {
    function callcc(fun) {
        var error = new Deferred();
        return call(function () {
            // JSDeferred passes current Deferred Object to  this.
            var ccdeferred = this;
            // Call with current continuation (calling Deferred.next)
            return fun(function (a) {
                ccdeferred._next.call(a);
                throw error
            });
        }).
          error(function (e) {
              // Current Deferred chain must be stopped
              if (e === error) {
                  return e;
              } else {
                  throw e;
              }
          });
    }

    // http://www.sampou.org/scheme/t-y-scheme/t-y-scheme-Z-H-16.html#node_chap_14
    // Just port above.
    function amb() {
        var alts = arguments;
        var prevAmbFail = amb.ambFail;

        return callcc(function (sk) {
            return loop(alts.length, function (i) {
                var alt = alts[i];
                return callcc(function (fk) {
                    amb.ambFail = function () {
                        amb.ambFail = prevAmbFail;
                        return fk("fail");
                    };
                    return sk(alt);
                });
            }).
              next(prevAmbFail);
        });
    }

    amb.ambFail = function () { throw "amb tree exhausted" };

    // Utility function
    function amb1(ambvars) {
        var f = wait(0);
        var vars = {};
        for (var k in ambvars) if (ambvars.hasOwnProperty(k)) (function (name, val) {
            console.log(name);
            f = f.next(function () {
                return amb.apply(this, val).next(function (i) {
                    vars[name] = i;
                    return vars;
                });
            });
        })(k, ambvars[k]);

        return f;
    }

    function assert(cond) {
        if (!cond) throw amb();
    }

    // http://mayokara.info/note/view/251
    Array.prototype.uniq = function () {
        for (var i = 0, l = this.length; i < l; i++) {
            if (this.indexOf(this[i]) < i) {
                this.splice(i--, l-- && 1);
            }
        }
        return this;
    };

    amb1({
        baker: [1, 2, 3, 4, 5],
        cooper: [1, 2, 3, 4, 5],
        fletcher: [1, 2, 3, 4, 5],
        miller: [1, 2, 3, 4, 5],
        smith: [1, 2, 3, 4, 5]
    }).
      next(function (vars) {
          with (vars) {
              console.log(vars);
              // 簡易 distinct
              assert([baker, cooper, fletcher, miller, smith].uniq().length == 5);
              console.log("distinct passed");
              assert(baker != 5);
              assert(cooper != 1);
              assert(fletcher != 1 && fletcher != 5);
              assert(miller > cooper);
              assert(Math.abs(smith - fletcher) != 1);
              assert(Math.abs(fletcher - cooper) != 1);

              return vars;
          }
      }).
      next(function (vars) {
          with (vars) {
              console.log("solved");
              console.log(vars);
              alert(uneval(vars));
          }
      }).
      error(function (e) {
          alert(e)
      });
})();

(() => {
    var d1 = new Deferred();
    d1.callback.ok = function () {
        alert("1");
    };

    var d2 = new Deferred();
    d2.callback.ok = function () {
        alert("2");
    };

    // Set d2 as continuation of d1.
    d1._next = d2;

    // Invoke the chain.
    d1.call();
})();

(() => {
    next(function () { // this `next` is global function
        alert("1");
    }).
      next(function () { // this `next` is Deferred#next
          alert("2");
      }).
      next(function () {
          alert("3");
      });
})();

(() => {
    next(function () {
        alert("1");
    }).
      next(function () {
          alert("2");
          // child Deferred
          return next(function () {
              alert("3");
          });
      }).
      next(function () {
          alert("4");
      });
})();

(() => {
    next(function () {
        alert("1");
    }).
      next(function () {
          alert("2");
          var d = next(function () {
              alert("3");
          });
          d._next = this._next;
          this.cancel();
      }).
      next(function () {
          alert("4");
      });
})();

(() => {
    next(function () {
        alert("1");
    }).
      next(function () {
          alert("2");
          next(function () {
              alert("3");
          }).
            next(function () {
                alert("4");
            });
      });
})();

(() => {
    next(function () {
        throw "Error";
    }).
      error(function (e) {
          expect("Errorback called", "Error", e);
          return e; // recovering error
      }).
      next(function (e) {
          expect("Callback called", "Error", e);
          throw "Error2";
      }).
      next(function (e) {
          // This process is not called because
          // the error is not recovered.
          ng("Must not be called!!");
      }).
      error(function (e) {
          expect("Errorback called", "Error2", e);
      });
})();
