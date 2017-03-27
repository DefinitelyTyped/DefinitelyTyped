/// <reference types="jquery"/>
/// <reference types="google-maps"/>

function test_map() {
    viewporter.preventPageScroll = true;
    var eventName = viewporter.ACTIVE ? 'viewportready' : "load";
    google.maps.event.addDomListener(window, eventName, function () {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 2,
            center: new google.maps.LatLng(10, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        window.addEventListener("resize", viewporter.refresh);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                map.setCenter(new google.maps.LatLng(
                    position.coords.latitude,
                    position.coords.longitude
                ));
                map.setZoom(14);
            });
        }
    });
}

function test_resize() {
    viewporter.preventPageScroll = true;
    document.addEventListener('DOMContentLoaded', function () {
        // listen for "resize" events and trigger "refresh" method.
        window.addEventListener("resize", function () {
            viewporter.refresh();
            document.getElementById("events").innerHTML += "resize<br>";
        });
        if (navigator.geolocation) {
            function success(position) {
                var coords = [position.coords.latitude, position.coords.longitude]
                document.getElementById("coords").innerHTML = coords.join(", ");
            }
            navigator.geolocation.getCurrentPosition(success);
        }
    });
}

function test_swipey() {
    function rainbow(numOfSteps, step) {
            var r, g, b, h = step / numOfSteps, i = ~~(h * 6), f = h * 6 - i, q = 1 - f;
        switch (i % 6) {
            case 0: r = 1, g = f, b = 0; break;
            case 1: r = q, g = 1, b = 0; break;
            case 2: r = 0, g = 1, b = f; break;
            case 3: r = 0, g = q, b = 1; break;
            case 4: r = f, g = 0, b = 1; break;
            case 5: r = 1, g = 0, b = q; break;
        }
        return [((~ ~(r * 255))), (~ ~(g * 255)), (~ ~(b * 255))];
    }

    function drawingPointer(context, color) {
        var clickX = [];
        var clickY = [];
        var clickDrag = [];

        this.painting = false;
        var timestamp = null;

        this.addPoint = function (x, y, dragging) {
            clickX.push(x);
            clickY.push(y);
            clickDrag.push(dragging);
        };
        this.start = function () {
            this.clear();
            this.painting = true;
        };
        this.clear = function () {
            clickX = [];
            clickY = [];
            clickDrag = [];
            timestamp = null;
        };
        this.stop = function () {
            this.painting = false;
            timestamp = Date.now();
        };
        this.redraw = function () {
            var opacity = timestamp ? (300 - (Date.now() - timestamp)) / 300 : 1;
            if (opacity <= 0) {
                this.clear();
                return;
            }
            context.strokeStyle = "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + opacity + ")";
            context.lineJoin = "round";
            context.lineWidth = ((<any>window).devicePixelRatio || 1) * 5;
            for (var i = 0; i < clickX.length; i++) {
                context.beginPath();
                if (clickDrag[i] && i) {
                    context.moveTo(clickX[i - 1], clickY[i - 1]);
                } else {
                    context.moveTo(clickX[i] - 1, clickY[i]);
                }
                context.lineTo(clickX[i], clickY[i]);
                context.closePath();
                context.stroke();
            }
        };
    };

    $(window).bind(viewporter.ACTIVE ? 'viewportready' : 'load', function () {
        var canvas = <HTMLCanvasElement>$('canvas')[0];
        var context = canvas.getContext('2d');
        var iOS = (/iphone|ipad/i).test(navigator.userAgent);
        var pointers = {};
        // handle resizing / rotating of the viewport
        var width, height;
        $(window).bind(viewporter.ACTIVE ? 'viewportchange' : 'resize', function () {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight
        }).trigger(viewporter.ACTIVE ? 'viewportchange' : 'resize');
        $('canvas').bind(iOS ? 'touchstart' : 'mousedown', function (e) {
            e.preventDefault();
            var touches = iOS ? (<any>e.originalEvent).changedTouches : [e.originalEvent];
            var identifier;
            for (var i = 0; i < touches.length; i++) {
                identifier = touches[i].identifier || 'mouse';
                // if no pointer has been created for this finger yet, do it
                if (!pointers[identifier]) {
                    pointers[identifier] = new drawingPointer(context, rainbow(8, Object.keys(pointers).length));
                }
                pointers[identifier].start();
                pointers[identifier].addPoint(touches[i].pageX, touches[i].pageY);
            }
        });

        $('canvas').bind(iOS ? 'touchmove' : 'mousemove', function (e) {
			var touches = iOS ? (<any>e.originalEvent).changedTouches : [e.originalEvent];
            var identifier;
            for (var i = 0; i < touches.length; i++) {
                identifier = touches[i].identifier || 'mouse';
                if (pointers[identifier] && pointers[identifier].painting) {
                    pointers[identifier].addPoint(touches[i].pageX, touches[i].pageY, true);
                }
            }
        });

        $('canvas').bind(iOS ? 'touchend' : 'mouseup', function (e) {
			var touches = iOS ? (<any>e.originalEvent).changedTouches : [e.originalEvent];
            var identifier;
            for (var i = 0; i < touches.length; i++) {
                identifier = touches[i].identifier || 'mouse';
                if (pointers[identifier]) {
                    pointers[identifier].stop();
                    (function (identifier) {
                        setTimeout(function () {
                            delete pointers[identifier];
                        }, 300);
                    })(identifier);
                }
            }
        });

        window.setInterval(function () {
            context.clearRect(0, 0, width, height);
            var counter = 0, ratio = (<any>window).devicePixelRatio || 1;
            for (var identifier in pointers) {
                pointers[identifier].redraw();
                counter++;
            }
            context.font = (10 * ratio) + 'pt Arial';
            context.fillText(counter + ' active pointers', 15 * ratio, 25 * ratio);

        }, 16);

    });
}