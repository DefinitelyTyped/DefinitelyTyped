let scroller: Scroller = new Scroller((left, top, zoom) => { });
scroller = new Scroller((left, top, zoom) => { }, {
  scrollingX: true,
  scrollingY: true,
  animating: true,
  animationDuration: 400,
  bouncing: false,
  locking: false,
  paging: false,
  snapping: true,
  zooming: 10,
  minZoom: 1,
  maxZoom: 2
});

scroller.setDimensions(10, 10, 10, 10);
scroller.setPosition(200, 300);
scroller.setSnapSize(300, 300);
scroller.activatePullToRefresh(200, () => { }, () => { }, () => { });
scroller.finishPullToRefresh();
const data: {
  left: number;
  top: number;
  zoom: number
} = scroller.getValues();
scroller.zoomTo(10);
scroller.zoomBy(10);
scroller.doMouseZoom(10, 10, 10, 10);
scroller.doTouchStart([{
  pageX: 10,
  pageY: 20
}], 200);
scroller.doTouchEnd(300);

declare const clientWidth: number;
declare const clientHeight: number;
declare function render(left: number, top: number, zoom: number): void;

declare const Tiling: any; // TODO: What is this?

function test_basic() {
    const scrollerObj = new Scroller((left, top, zoom) => {
    }, {
        scrollingY: false
    });
    scrollerObj.setDimensions(1000, 1000, 3000, 3000);
}

function test_canvas() {
    const contentWidth = 2000;
    const contentHeight = 2000;
    const cellWidth = 100;
    const cellHeight = 100;
    const content = document.getElementById('content') as HTMLCanvasElement;
    const context = content.getContext('2d');
    const tiling = new Tiling();
    function render(left: number, top: number, zoom: number) {
        content.width = clientWidth;
        content.height = clientHeight;
        context.clearRect(0, 0, clientWidth, clientHeight);
        tiling.setup(clientWidth, clientHeight, contentWidth, contentHeight, cellWidth, cellHeight);
        tiling.render(left, top, zoom, paint);
    }
    function paint(row: number, col: number, left: number, top: number, width: number, height: number, zoom: number) {
        context.fillStyle = row % 2 + col % 2 > 0 ? "#ddd" : "#fff";
        context.fillRect(left, top, width, height);
        context.fillStyle = "black";
        context.font = (14 * zoom).toFixed(2) + 'px "Helvetica Neue", Helvetica, Arial, sans-serif';
        context.fillText(`${row},${col}`, left + (6 * zoom), top + (18 * zoom));
    }
}

function test_domlist() {
    const container = document.getElementById("container");
    const content = document.getElementById("content");
    const refreshElem = content.getElementsByTagName("div")[0];
    const scroller = new Scroller(render, {
        scrollingX: false
    });
    scroller.activatePullToRefresh(50, () => {
        refreshElem.className += " active";
        refreshElem.innerHTML = "Release to Refresh";
    }, () => {
        refreshElem.className = refreshElem.className.replace(" active", "");
        refreshElem.innerHTML = "Pull to Refresh";
    }, () => {
        refreshElem.className += " running";
        refreshElem.innerHTML = "Refreshing...";
        setTimeout(() => {
            refreshElem.className = refreshElem.className.replace(" running", "");
            insertItems();
            scroller.finishPullToRefresh();
        }, 2000);
    });
    const rect = container.getBoundingClientRect();
    scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    const insertItems = () => {
        for (let i = 0; i < 15; i++) {
            const row = document.createElement("div");
            row.className = "row";
            row.style.backgroundColor = i % 2 > 0 ? "#ddd" : "";
            row.innerHTML = Math.random().toString();
            if (content.firstChild === content.lastChild) {
                content.appendChild(row);
            } else {
                content.insertBefore(row, content.childNodes[1]);
            }
        }
        scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight - 50);
    };
    insertItems();
    if ('ontouchstart' in window) {
        container.addEventListener("touchstart", e => {
            // Don't react if initial down happens on a form element
            if ((e.target as any).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart((e as any).touches, e.timeStamp);
            e.preventDefault();
        }, false);
        document.addEventListener("touchmove", e => {
            scroller.doTouchMove((e as any).touches, e.timeStamp);
        }, false);
        document.addEventListener("touchend", e => {
            scroller.doTouchEnd(e.timeStamp);
        }, false);
    } else {
        let mousedown = false;
        container.addEventListener("mousedown", e => {
            if ((e.target as any).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart([{
                pageX: (e as any).pageX,
                pageY: (e as any).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mousemove", e => {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove([{
                pageX: (e as any).pageX,
                pageY: (e as any).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mouseup", e => {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            mousedown = false;
        }, false);
    }
}

function test_dompaging() {
    const container = document.getElementById("container");
    const content = document.getElementById("content");
    const size = 400;
    const frag = document.createDocumentFragment();
    for (let cell = 0, cl = content.clientWidth / size; cell < cl; cell++) {
        const elem = document.createElement("div");
        elem.className = "cell";
        elem.style.backgroundColor = cell % 2 > 0 ? "#ddd" : "";
        elem.innerHTML = cell.toString();
        frag.appendChild(elem);
    }
    content.appendChild(frag);
    const scroller = new Scroller(render, {
        scrollingY: false,
        paging: true
    });
    const rect = container.getBoundingClientRect();
    scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
    if ('ontouchstart' in window) {
        container.addEventListener("touchstart", e => {
            if ((e.target as any).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart((e as any).touches, e.timeStamp);
            e.preventDefault();
        }, false);
        document.addEventListener("touchmove", e => {
            scroller.doTouchMove((e as any).touches, e.timeStamp);
        }, false);
        document.addEventListener("touchend", e => {
            scroller.doTouchEnd(e.timeStamp);
        }, false);
    } else {
        let mousedown = false;
        container.addEventListener("mousedown", e => {
            if ((e.target as any).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart([{
                pageX: (e as any).pageX,
                pageY: (e as any).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mousemove", e => {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove([{
                pageX: (e as any).pageX,
                pageY: (e as any).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);

        document.addEventListener("mouseup", e => {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            mousedown = false;
        }, false);
    }
}

function test_domsnapping() {
    const container = document.getElementById("container");
    const content = document.getElementById("content");
    const size = 100;
    const frag = document.createDocumentFragment();
    for (let row = 0, rl = content.clientHeight / size; row < rl; row++) {
        for (let cell = 0, cl = content.clientWidth / size; cell < cl; cell++) {
            const elem = document.createElement("div");
            elem.className = "cell";
            elem.style.backgroundColor = row % 2 + cell % 2 > 0 ? "#ddd" : "";
            elem.innerHTML = `${row},${cell}`;
            frag.appendChild(elem);
        }
    }
    content.appendChild(frag);
    const scroller = new Scroller(render, {
        snapping: true
    });
    const rect = container.getBoundingClientRect();
    scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
    scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
    scroller.setSnapSize(100, 100);
    if ('ontouchstart' in window) {
        container.addEventListener("touchstart", e => {
            if ((e.target as any).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart((e as any).touches, e.timeStamp);
            e.preventDefault();
        }, false);
        document.addEventListener("touchmove", e => {
            scroller.doTouchMove((e as any).touches, e.timeStamp);
        }, false);
        document.addEventListener("touchend", e => {
            scroller.doTouchEnd(e.timeStamp);
        }, false);
    } else {
        let mousedown = false;
        container.addEventListener("mousedown", e => {
            if ((e.target as any).tagName.match(/input|textarea|select/i)) {
                return;
            }
            scroller.doTouchStart([{
                pageX: (e as any).pageX,
                pageY: (e as any).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mousemove", e => {
            if (!mousedown) {
                return;
            }
            scroller.doTouchMove([{
                pageX: (e as any).pageX,
                pageY: (e as any).pageY
            }], e.timeStamp);
            mousedown = true;
        }, false);
        document.addEventListener("mouseup", e => {
            if (!mousedown) {
                return;
            }
            scroller.doTouchEnd(e.timeStamp);
            mousedown = false;
        }, false);
    }
}
