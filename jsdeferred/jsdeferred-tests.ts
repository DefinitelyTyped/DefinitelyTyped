/// <reference path="jsdeferred.d.ts"/>

declare function alert(a: any): void;

interface IHttp {
    get (url: string): Deferred;
}

var http: IHttp;

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

loop(1000, function (n) {
    // heavy process
});

next(function () {
    console.log("start");
}).
next(function () {
    function pow (x, n) {
        function _pow (n, r) {
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

$.get("README.markdown").next(function (data) {
    console.log(data);
});

console.log("start. gathering data.");

parallel([$.get("README.markdown"), $.get("ChangeLog")]).
next(function (values) {
    var lengths = $.map(values, function (i) { return i.length });
    console.log(lengths.join(", "));
});

console.log("start. gathering data.");

parallel({html: $.get("README.markdown"), js: $.get("ChangeLog")}).
next(function (values) {
    console.log(["html=", values.html.length, " js=", values.js.length].join(""));
});

console.log("start. wait 3 sec.");

var list = [];
var printAndReturn = function (i) { console.log(i+"msec elapsed"); return i; };
list.push(wait(0).next(printAndReturn));
list.push(wait(1).next(printAndReturn));
list.push(wait(2).next(printAndReturn));
list.push(wait(3).next(printAndReturn));

parallel(list).next(function (values) {
    console.log("Completed. values: "+values.join(", "));
});

var queue   = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var workers = new Array(2);
var work    = function (job) {
    console.log('working... ' + job);
    return wait(Math.random() * 4);
};

for (var i = 0, len = workers.length; i < len; i++) {
    workers[i] = next(function me () {
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

next(function () {
    var sum = 0;
    return loop({end:100000, step:1000}, function (n: number, o?: any) {
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
    console.log("Result:"+e);
    console.log("end");
}).
error(function (e) {
    console.log(e);
});


loop({begin: 1, end:100, step:10}, function (n: number, o?: any) {
    console.log(["Processing divided loop:n=", n, " last?=", o.last].join(""));
    for (var i = 0; i < o.step; i++) {
        var j = n + i;
        console.log(j);
    }
});

Deferred.repeat(100, function (n, o?) {
    console.log(n);
    for (var i = 0; i < Math.pow(n, 2); i++) {
        for (var j = n; j; j--);
    }
});

loop(10, function (n) {
    console.log(n);
    return wait(0.1);
});

loop(10, function (n) {
    console.log(String.fromCharCode(97+n));
    return wait(0.2);
});

console.log(0);
loop(10, function (n) {
    console.log(n);
    return n;
}).
wait(1).
loop(10, function (n) {
    var c = String.fromCharCode(97+n);
    console.log(c);
    return c;
}).
next(function (i) {
    console.log("end");
}).
error(function (e) {
    alert(e);
});

loop(5, function (i, o?) {
    console.log(i);
    return o.last? i : wait(1);
}).
next(function (e) {
    console.log("end ["+e+"]");
}).
error(function (e) {
    console.log(e);
});

next(function (i) {
    function delayloop (i) {
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

var deferred = new Deferred();
$("#step-run").click(function () { deferred.call() });

loop(5, function (i) {
    console.log("running... " + i);
    return deferred;
}).
next(function () {
    console.log("completed");
});
