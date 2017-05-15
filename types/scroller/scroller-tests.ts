var clientWidth: any;
var clientHeight: any;
var render: any;

var Tiling: any;

function test_basic() {
    var scrollerObj = new Scroller(function (left, top, zoom) {
    }, {
        scrollingY: false
    });
    scrollerObj.setDimensions(1000, 1000, 3000, 3000);
}

function test_canvas() {
    var contentWidth = 2000;
    var contentHeight = 2000;
    var cellWidth = 100;
    var cellHeight = 100;
    var content = <HTMLCanvasElement>document.getElementById('content');
    var context = content.getContext('2d');
    var tiling = new Tiling();
    var render = function (left, top, zoom) {
        content.width = clientWidth;
        content.height = clientHeight;
        context.clearRect(0, 0, clientWidth, clientHeight);
        tiling.setup(clientWidth, clientHeight, contentWidth, contentHeight, cellWidth, cellHeight);
        tiling.render(left, top, zoom, paint);
    };
    var paint = function (row, col, left, top, width, height, zoom) {
        context.fillStyle = row % 2 + col % 2 > 0 ? "#ddd" : "#fff";
        context.fillRect(left, top, width, height);
        context.fillStyle = "black";
        context.font = (14 * zoom).toFixed(2) + 'px "Helvetica Neue", Helvetica, Arial, sans-serif';
        context.fillText(row + "," + col, left + (6 * zoom), top + (18 * zoom));
    };
}

function test_domlist() {
    var container = document.getElementById("container");
    var content = document.getElementById("content");
    var refreshElem = <HTMLElement>content.getElementsByTagName("div")[0];
    var scroller = new Scroller(render, {
        scrollingX: false
    });
    scroller.activatePullToRefresh(50, function () {
        refreshElem.className += " active";
        refreshElem.innerHTML = "Release to Refresh";
    }, function () {
        refreshElem.className = refreshElem.className.replace(" active", "");
        refreshElem.innerHTML = "Pull to Refresh";
    }, function () {
        refreshElem.className += " running";
        refreshElem.innerHTML = "Refreshing...";
        setTimeout(function () {
            refreshElem.className = refreshElem.className.replace(" running", "");
            insertItems();
            scroller.finishPullToRefresh();
        }, 2000);
    });
    var rect = container.getBoundingClientRect();
    scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    var insertItems = function () {
        for (var i = 0; i < 15; i++) {
            var row = document.createElement("div");
            row.className = "row";
            row.style.backgroundColor = i % 2 > 0 ? "#ddd" : "";
            row.innerHTML = <any>Math.random();
            if (content.firstChild == content.lastChild) {
                content.appendChild(row);
            } else {
                content.insertBefore(row, content.childNodes[1])
            }
        }
        scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight - 50);
    };
    insertItems();
    if ('ontouchstart' in window) {
        container.addEventListener("touchstart", function (e) {
            // Don't react if initial down happens on a form element
            if ((<any>e.target).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart((<any>e).touches, e.timeStamp);
            e.preventDefault();
        }, false);
        document.addEventListener("touchmove", function (e) {
            scroller.doTouchMove((<any>e).touches, e.timeStamp);
        }, false);
        document.addEventListener("touchend", function (e) {
            scroller.doTouchEnd(e.timeStamp);
        }, false);
    } else {
        var mousedown = false;
        container.addEventListener("mousedown", function (e) {
            if ((<any>e.target).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart([{
                pageX: (<any>e).pageX,
                pageY: (<any>e).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mousemove", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove([{
                pageX: (<any>e).pageX,
                pageY: (<any>e).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mouseup", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            mousedown = false;
        }, false);
    }
}

function test_dompaging() {
    var container = document.getElementById("container");
    var content = document.getElementById("content");
    var size = 400;
    var frag = document.createDocumentFragment();
    for (var cell = 0, cl = content.clientWidth / size; cell < cl; cell++) {
        var elem = document.createElement("div");
        elem.className = "cell";
        elem.style.backgroundColor = cell % 2 > 0 ? "#ddd" : "";
        elem.innerHTML = <any>cell;
        frag.appendChild(elem);
    }
    content.appendChild(frag);
    var scroller = new Scroller(render, {
        scrollingY: false,
        paging: true
    });
    var rect = container.getBoundingClientRect();
    scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
    if ('ontouchstart' in window) {
        container.addEventListener("touchstart", function (e) {
            if ((<any>e.target).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart((<any>e).touches, e.timeStamp);
            e.preventDefault();
        }, false);
        document.addEventListener("touchmove", function (e) {
            scroller.doTouchMove((<any>e).touches, e.timeStamp);
        }, false);
        document.addEventListener("touchend", function (e) {
            scroller.doTouchEnd(e.timeStamp);
        }, false);
    } else {
        var mousedown = false;
        container.addEventListener("mousedown", function (e) {
            if ((<any>e.target).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart([{
                pageX: (<any>e).pageX,
                pageY: (<any>e).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mousemove", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove([{
                pageX: (<any>e).pageX,
                pageY: (<any>e).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);

        document.addEventListener("mouseup", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            mousedown = false;
        }, false);
    }
}

function test_domsnapping() {
    var container = document.getElementById("container");
    var content = document.getElementById("content");
    var size = 100;
    var frag = document.createDocumentFragment();
    for (var row = 0, rl = content.clientHeight / size; row < rl; row++) {
        for (var cell = 0, cl = content.clientWidth / size; cell < cl; cell++) {
            var elem = document.createElement("div");
            elem.className = "cell";
            elem.style.backgroundColor = row % 2 + cell % 2 > 0 ? "#ddd" : "";
            elem.innerHTML = row + "," + cell;
            frag.appendChild(elem);
        }
    }
    content.appendChild(frag);
    var scroller = new Scroller(render, {
        snapping: true
    });
    var rect = container.getBoundingClientRect();
    scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
    scroller.setSnapSize(100, 100);
    if ('ontouchstart' in window) {
        container.addEventListener("touchstart", function (e) {
            if ((<any>e.target).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart((<any>e).touches, e.timeStamp);
            e.preventDefault();
        }, false);
        document.addEventListener("touchmove", function (e) {
            scroller.doTouchMove((<any>e).touches, e.timeStamp);
        }, false);
        document.addEventListener("touchend", function (e) {
            scroller.doTouchEnd(e.timeStamp);
        }, false);
    } else {
        var mousedown = false;
        container.addEventListener("mousedown", function (e) {
            if ((<any>e.target).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart([{
                pageX: (<any>e).pageX,
                pageY: (<any>e).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mousemove", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove([{
                pageX: (<any>e).pageX,
                pageY: (<any>e).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mouseup", function (e) {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            mousedown = false;
        }, false);
    }
}