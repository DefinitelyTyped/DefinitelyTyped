/// <reference path="../Definitions/jquery-1.8.d.ts" />

function test_add() {
    $("p").add("div").addClass("widget");
    var pdiv = $("p").add("div");

    $('li').add('p').css('background-color', 'red');
    $('li').add(document.getElementsByTagName('p')[0])
      .css('background-color', 'red');
    $('li').add('<p id="new">new paragraph</p>')
      .css('background-color', 'red');
    $("div").css("border", "2px solid red")
            .add("p")
            .css("background", "yellow");
    $("p").add("span").css("background", "yellow");
    $("p").clone().add("<span>Again</span>").appendTo(document.body);
    $("p").add(document.getElementById("a")).css("background", "yellow");
    var collection = $("p");

    collection = collection.add(document.getElementById("a"));
    collection.css("background", "yellow");
}

function test_addClass() {
    $("p").addClass("myClass yourClass");
    $("p").removeClass("myClass noClass").addClass("yourClass");
    $("ul li:last").addClass(function (index) {
        return "item-" + index;
    });
    $("p:last").addClass("selected");
    $("p:last").addClass("selected highlight");
    $("div").addClass(function (index, currentClass) {
        var addedClass: string;
        if (currentClass === "red") {
            addedClass = "green";
            $("p").text("There is one green div");
        }
        return addedClass;
    });
}

function test_after() {
    $('.inner').after('<p>Test</p>');
    $('<div/>').after('<p></p>');
    $('<div/>').after('<p></p>').addClass('foo')
      .filter('p').attr('id', 'bar').html('hello')
    .end()
    .appendTo('body');
    $('p').after(function () {
        return '<div>' + this.className + '</div>';
    });
    var $newdiv1 = $('<div id="object1"/>'),
        newdiv2 = document.createElement('div'),
        existingdiv1 = document.getElementById('foo');
    $('p').first().after($newdiv1, [newdiv2, existingdiv1]);
    $("p").after(document.createTextNode("Hello"));
    $("p").after($("b"));
}

function test_ajax() {
    $.ajax({
        url: "test.html",
        context: document.body
    }).done(function () {
        $(this).addClass("done");
    });
    $.ajax({
        statusCode: {
            404: function () {
                alert("page not found");
            }
        }
    });
    $.ajax({
        url: "http://fiddle.jshell.net/favicon.png",
        beforeSend: function (xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
    }).done(function (data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });
    $.ajax({
        url: 'ajax/test.html',
        success: function (data) {
            $('.result').html(data);
            alert('Load was performed.');
        }
    });
    var _super = jQuery.ajaxSettings.xhr;
    jQuery.ajaxSettings.xhr = function () {
        var xhr = _super(),
            getAllResponseHeaders = xhr.getAllResponseHeaders;

        xhr.getAllResponseHeaders = function () {
            if (getAllResponseHeaders()) {
                return getAllResponseHeaders();
            }
            var allHeaders = "";
            $(["Cache-Control", "Content-Language", "Content-Type",
                    "Expires", "Last-Modified", "Pragma"]).each(function (i, header_name) {

                        if (xhr.getResponseHeader(header_name)) {
                            allHeaders += header_name + ": " + xhr.getResponseHeader(header_name) + "\n";
                        }
                        return allHeaders;
                    });
        };
        return xhr;
    };
    $.ajax({
        type: "POST",
        url: "some.php",
        data: { name: "John", location: "Boston" }
    }).done(function (msg) {
        alert("Data Saved: " + msg);
    });
    $.ajax({
        url: "test.html",
        cache: false
    }).done(function (html) {
        $("#results").append(html);
    });
    var xmlDocument = [];
    var xmlRequest = $.ajax({
        url: "page.php",
        processData: false,
        data: xmlDocument
    });
    var handleResponse;
    xmlRequest.done(handleResponse);

    var menuId = $("ul.nav").first().attr("id");
    var request = $.ajax({
        url: "script.php",
        type: "POST",
        data: { id: menuId },
        dataType: "html"
    });
    request.done(function (msg) {
        $("#log").html(msg);
    });
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    $.ajax({
        type: "GET",
        url: "test.js",
        dataType: "script"
    });
}

function test_ajaxComplete() {
    $('.log').ajaxComplete(function () {
        $(this).text('Triggered ajaxComplete handler.');
    });
    $('.trigger').click(function () {
        $('.result').load('ajax/test.html');
    });
    $('.log').ajaxComplete(function (e, xhr, settings) {
        if (settings.url == 'ajax/test.html') {
            $(this).text('Triggered ajaxComplete handler. The result is ' + xhr.responseHTML);
        }
    });
    $("#msg").ajaxComplete(function (event, request, settings) {
        $(this).append("<li>Request Complete.</li>");
    });
}

function test_ajaxError() {
    $("div.log").ajaxError(function () {
        $(this).text("Triggered ajaxError handler.");
    });
    $("button.trigger").click(function () {
        $("div.result").load("ajax/missing.html");
    });
    $("div.log").ajaxError(function (e, jqxhr, settings, exception) {
        if (settings.url == "ajax/missing.html") {
            $(this).text("Triggered ajaxError handler.");
        }
    });
    $("#msg").ajaxError(function (event, request, settings) {
        $(this).append("<li>Error requesting page " + settings.url + "</li>");
    });
}

function test_ajaxPrefilter() {
    var currentRequests = {};
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        if (options.abortOnRetry) {
            if (currentRequests[options.url]) {
                currentRequests[options.url].abort();
            }
            currentRequests[options.url] = jqXHR;
        }
    });
    $.ajaxPrefilter(function (options) {
        if (options.crossDomain) {
            options.url = "http://mydomain.net/proxy/" + encodeURIComponent(options.url);
            options.crossDomain = false;
        }
    });
    $.ajaxPrefilter("json script", function (options, originalOptions, jqXHR) {

    });
    var isActuallyScript;
    $.ajaxPrefilter(function (options) {
        if (isActuallyScript(options.url)) {
            return "script";
        }
    });
}

function test_ajaxSend() {
    $('.log').ajaxSend(function () {
        $(this).text('Triggered ajaxSend handler.');
    });
    $('.trigger').click(function () {
        $('.result').load('ajax/test.html');
    });
    $('.log').ajaxSend(function (e, jqxhr, settings) {
        if (settings.url == 'ajax/test.html') {
            $(this).text('Triggered ajaxSend handler.');
        }
    });
    $("#msg").ajaxSend(function (evt, request, settings) {
        $(this).append("<li>Starting request at " + settings.url + "</li>");
    });
}

function test_ajaxSetup() {
    $.ajaxSetup({
        url: 'ping.php'
    });
    $.ajax({
        data: { 'name': 'Dan' }
    });
    $.ajaxSetup({
        url: "/xmlhttp/",
        global: false,
        type: "POST"
    });
}

function test_ajaxStart() {
    $('.log').ajaxStart(function () {
        $(this).text('Triggered ajaxStart handler.');
    });
    $('.trigger').click(function () {
        $('.result').load('ajax/test.html');
    });
    $("#loading").ajaxStart(function () {
        $(this).show();
    });
}

function test_ajaxStop() {
    $('.log').ajaxStop(function () {
        $(this).text('Triggered ajaxStop handler.');
    });
    $('.trigger').click(function () {
        $('.result').load('ajax/test.html');
    });
    $("#loading").ajaxStop(function () {
        $(this).hide();
    });
}

function test_ajaxSuccess() {
    $('.log').ajaxSuccess(function () {
        $(this).text('Triggered ajaxSuccess handler.');
    });
    $('.trigger').click(function () {
        $('.result').load('ajax/test.html');
    });
    $('.log').ajaxSuccess(function (e, xhr, settings) {
        if (settings.url == 'ajax/test.html') {
            $(this).text('Triggered ajaxSuccess handler. The ajax response was:' + xhr.responseText);
        }
    });
    $("#msg").ajaxSuccess(function (evt, request, settings) {
        $(this).append("<li>Successful Request!</li>");
    });
}

function test_allSelector() {
    var elementCount = $("*").css("border", "3px solid red").length;
    $("body").prepend("<h3>" + elementCount + " elements found</h3>");
    var elementCount2 = $("#test").find("*").css("border", "3px solid red").length;
    $("body").prepend("<h3>" + elementCount2 + " elements found</h3>");
}

function test_andSelf() {
    $('li.third-item').nextAll().andSelf()
        .css('background-color', 'red');
    $("div").find("p").andSelf().addClass("border");
    $("div").find("p").addClass("background");
}

function test_animate() {
    $('#clickme').click(function () {
        $('#book').animate({
            opacity: 0.25,
            left: '+=50',
            height: 'toggle'
        }, 5000, function () {
        });
    });
    $('li').animate({
        opacity: .5,
        height: '50%'
    }, {
        step: function (now, fx) {
            var data = fx.elem.id + ' ' + fx.prop + ': ' + now;
            $('body').append('<div>' + data + '</div>');
        }
    });
    $('#clickme').click(function () {
        $('#book').animate({
            width: ['toggle', 'swing'],
            height: ['toggle', 'swing'],
            opacity: 'toggle'
        }, 5000, 'linear', function () {
            $(this).after('<div>Animation complete.</div>');
        });
    });
    $('#clickme').click(function () {
        $('#book').animate({
            width: 'toggle',
            height: 'toggle'
        }, {
            duration: 5000,
            specialEasing: {
                width: 'linear',
                height: 'easeOutBounce'
            },
            complete: function () {
                $(this).after('<div>Animation complete.</div>');
            }
        });
    });
    $("#go").click(function () {
        $("#block").animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500);
    });
    $("#right").click(function () {
        $(".block").animate({ "left": "+=50px" }, "slow");
    });
    $("#left").click(function () {
        $(".block").animate({ "left": "-=50px" }, "slow");
    });
    $("#go1").click(function () {
        $("#block1").animate({ width: "90%" }, { queue: false, duration: 3000 })
           .animate({ fontSize: "24px" }, 1500)
           .animate({ borderRightWidth: "15px" }, 1500);
    });
    $("#go2").click(function () {
        $("#block2").animate({ width: "90%" }, 1000)
           .animate({ fontSize: "24px" }, 1000)
           .animate({ borderLeftWidth: "15px" }, 1000);
    });
    $("#go3").click(function () {
        $("#go1").add("#go2").click();
    });
    $("#go4").click(function () {
        $("div").css({ width: "", fontSize: "", borderWidth: "" });
    });
    $("#go").click(function () {
        $(".block:first").animate({
            left: 100
        }, {
            duration: 1000,
            step: function (now, fx) {
                $(".block:gt(0)").css("left", now);
            }
        });
    });
    $("p").animate({
        height: "toggle", opacity: "toggle"
    }, "slow");
    $("p").animate({
        left: 50, opacity: 1
    }, 500);
    $("p").animate({
        left: "50px", opacity: 1
    }, { duration: 500, queue: false });
    $("p").animate({
        opacity: "show"
    }, "slow", "easein");
    $("p").animate({
        height: "toggle", opacity: "toggle"
    }, { duration: "slow" });
    $("p").animate({
        opacity: "show"
    }, { duration: "slow", easing: "easein" });
    $("p").animate({
        height: 200, width: 400, opacity: 0.5
    }, 1000, "linear", function () {
        alert("all done");
    });
}

function test_animatedSelector() {
    $("#run").click(function () {
        $("div:animated").toggleClass("colored");
    });
    function animateIt() {
        $("#mover").slideToggle("slow", animateIt);
    }
    animateIt();
}

function test_append() {
    $('.inner').append('<p>Test</p>');
    $('.container').append($('h2'));

    var $newdiv1 = $('<div id="object1"/>'),
    newdiv2 = document.createElement('div'),
    existingdiv1 = document.getElementById('foo');

    $('body').append($newdiv1, [newdiv2, existingdiv1]);
}

function test_appendTo() {
    $('<p>Test</p>').appendTo('.inner');
    $('h2').appendTo($('.container'));
}

function test_attr() {
    var title = $("em").attr("title");
    $("div").text(title);
    $('#greatphoto').attr('alt', 'Beijing Brush Seller');
    $('#greatphoto')
        .attr('title', 'Photo by Kelly Clark');
    $('#greatphoto').attr({
        alt: 'Beijing Brush Seller',
        title: 'photo by Kelly Clark'
    });
    $('#greatphoto').attr('title', function (i, val) {
        return val + ' - photo by Kelly Clark'
    });
    $("div").attr("id", function (arr) {
        return "div-id" + arr;
    })
    .each(function () {
        $("span", this).html("(ID = '<b>" + this.id + "</b>')");
    });
    $("img").attr("src", function () {
        return "/images/" + this.title;
    });
}

function test_attributeSelectors() {
    $('a[hreflang|="en"]').css('border', '3px dotted green');
    $('input[name*="man"]').val('has man in it!');
    $('input[name~="man"]').val('mr. man is in it!');
    $('input[name$="letter"]').val('a letter');
    $('input[value="Hot Fuzz"]').next().text(" Hot Fuzz");
    $('input[name!="newsletter"]').next().append('<b>; not newsletter</b>');
    $('input[name^="news"]').val('news here!');
}

function test_before() {
    $('.inner').before('<p>Test</p>');
    $('.container').before($('h2'));
    $("<div/>").before("<p></p>");
    var $newdiv1 = $('<div id="object1"/>'),
        newdiv2 = document.createElement('div'),
        existingdiv1 = document.getElementById('foo');
    $('p').first().before($newdiv1, [newdiv2, existingdiv1]);
}

function test_bind() {
    $('#foo').bind('click', function () {
        alert('User clicked on "foo."');
    });
    $('#foo').bind('mouseenter mouseleave', function () {
        $(this).toggleClass('entered');
    });
    $('#foo').bind({
        click: function () { },
        mouseenter: function () { }
    });
    $('#foo').bind('click', function () {
        alert($(this).text());
    });
    $(document).ready(function () {
        $('#foo').bind('click', function (event) {
            alert('The mouse cursor is at ('
              + event.pageX + ', ' + event.pageY + ')');
        });
    });
    var message = 'Spoon!';
    $('#foo').bind('click', function () {
        alert(message);
    });
    message = 'Not in the face!';
    $('#bar').bind('click', function () {
        alert(message);
    });
    var message = 'Spoon!';
    $('#foo').bind('click', { msg: message }, function (event) {
        alert(event.data.msg);
    });
    message = 'Not in the face!';
    $('#bar').bind('click', { msg: message }, function (event) {
        alert(event.data.msg);
    });
    $("p").bind("click", function (event) {
        var str = "( " + event.pageX + ", " + event.pageY + " )";
        $("span").text("Click happened! " + str);
    });
    $("p").bind("dblclick", function () {
        $("span").text("Double-click happened in " + this.nodeName);
    });
    $("p").bind("mouseenter mouseleave", function (event) {
        $(this).toggleClass("over");
    });
    $("p").bind("click", function () {
        alert($(this).text());
    });
    function handler(event) {
        alert(event.data.foo);
    }
    $("p").bind("click", { foo: "bar" }, handler)
    $("form").bind("submit", function () { return false; })
    $("form").bind("submit", function (event) {
        event.preventDefault();
    });
    $("form").bind("submit", function (event) {
        event.stopPropagation();
    });
    $("p").bind("myCustomEvent", function (e, myName, myValue) {
        $(this).text(myName + ", hi there!");
        $("span").stop().css("opacity", 1)
        .text("myName = " + myName)
        .fadeIn(30).fadeOut(1000);
    });
    $("button").click(function () {
        $("p").trigger("myCustomEvent", ["John"]);
    });
    $("div.test").bind({
        click: function () {
            $(this).addClass("active");
        },
        mouseenter: function () {
            $(this).addClass("inside");
        },
        mouseleave: function () {
            $(this).removeClass("inside");
        }
    });
}

function test_blur() {
    $('#target').blur(function () {
        alert('Handler for .blur() called.');
    });
    $('#other').click(function () {
        $('#target').blur();

    });
    $("p").blur();
}

function test_browser() {
    jQuery.each(jQuery.browser, function (i, val) {
        $("<div>" + i + " : <span>" + val + "</span>").appendTo(document.body);
    });
    $.browser.msie;
    if ($.browser.webkit) {
        alert("this is webkit!");
    }
    var ua = $.browser;
    if (ua.mozilla && ua.version.slice(0, 3) == "1.9") {
        alert("Do stuff for firefox 3");
    }
    if ($.browser.msie) {
        $("#div ul li").css("display", "inline");
    } else {
        $("#div ul li").css("display", "inline-table");
    }
    $("p").html("The version number of the rendering engine your browser uses is: <span>" + $.browser.version + "</span>");
    if ($.browser.msie) {
        alert($.browser.version);
    }
    if ($.browser.msie) {
        parseInt($.browser.version, 10);
    }
}

interface JQueryStatic { Topic; }
function test_callbacks() {
    function fn1(value) {
        console.log(value);
    }
    function fn2(value) {
        fn1("fn2 says:" + value);
        return false;
    }
    var callbacks = $.Callbacks();
    var callbacks2 = $.Callbacks("once");
    callbacks.add(fn1);
    callbacks.fire("foo!");
    callbacks.add(fn2);
    callbacks.fire("bar!");
    callbacks.remove(fn2);
    callbacks.fire("foobar");
    var topics = {};

    jQuery.Topic = function (id) {
        var callbacks,
            method,
            topic = id && topics[id];
        if (!topic) {
            callbacks = jQuery.Callbacks();
            topic = {
                publish: callbacks.fire,
                subscribe: callbacks.add,
                unsubscribe: callbacks.remove
            };
            if (id) {
                topics[id] = topic;
            }
        }
        return topic;
    };
    $.Topic("mailArrived").subscribe(fn1);
    $.Topic("mailArrived").subscribe(fn2);
    $.Topic("mailSent").subscribe(fn1);
    $.Topic("mailArrived").publish("hello world!");
    $.Topic("mailSent").publish("woo! mail!");
    $.Topic("mailArrived").subscribe(fn1);

    var dfd = $.Deferred();
    var topic = $.Topic("mailArrived");
    dfd.done(topic.publish);
    dfd.resolve("its been published!");
}

function test_callbacksFunctions() {
    var foo = function (value) {
        console.log('foo:' + value);
    }
    var bar = function (value) {
        console.log('bar:' + value);
    }
    var callbacks = $.Callbacks();
    callbacks.add(foo);
    callbacks.fire('hello');
    callbacks.add(bar);
    callbacks.fire('world');
    callbacks.disable();
    callbacks.empty();
    callbacks.fire('hello');
    console.log(callbacks.fired());
    callbacks.fireWith(window, ['foo', 'bar']);
    var foo2 = function (value1, value2) {
        console.log('Received:' + value1 + ',' + value2);
    };
    console.log(callbacks.has(foo2));
    callbacks.lock();
    console.log(callbacks.locked());
    callbacks.remove(foo);
}

function test_change() {
    $('.target').change(function () {
        alert('Handler for .change() called.');
    });
    $('#other').click(function () {
        $('.target').change();
    });
    $("input[type='text']").change(function () { });
}

function test_children() {
    $('ul.level-2').children().css('background-color', 'red');
    $("#container").click(function (e) {
        $("*").removeClass("hilite");
        var $kids = $(e.target).children();
        var len = $kids.addClass("hilite").length;

        $("#results span:first").text(len.toString());
        //$("#results span:last").text(e.target.tagName);

        e.preventDefault();
        return false;
    });
    $("div").children(".selected").css("color", "blue");
}

function test_clearQueue() {
    $("#start").click(function () {
        var myDiv = $("div");
        myDiv.show("slow");
        myDiv.animate({ left: '+=200' }, 5000);
        myDiv.queue(function () {
            var _this = $(this);
            _this.addClass("newcolor");
            _this.dequeue();
        });
        myDiv.animate({ left: '-=200' }, 1500);
        myDiv.queue(function () {
            var _this = $(this);
            _this.removeClass("newcolor");
            _this.dequeue();
        });
        myDiv.slideUp();

    });
    $("#stop").click(function () {
        var myDiv = $("div");
        myDiv.clearQueue();
        myDiv.stop();
    });
}

function test_click() {
    $("#target").click(function () {
        alert("Handler for .click() called.");
    });
    $("#other").click(function () {
        $("#target").click();
    });
    $("p").click(function () {
        $(this).slideUp();
    });
    $("p").click();
}

function test_clone() {
    $('.hello').clone().appendTo('.goodbye');
    var $elem = $('#elem').data({ "arr": [1] }),
        $clone = $elem.clone(true)
        .data("arr", $.extend([], $elem.data("arr")));
    $("b").clone().prependTo("p");
    $('#copy').append($('#orig .elem')
          .clone()
          .children('a')
          .prepend('foo - ')
          .parent()
          .clone());
}

function test_closest() {
    $('li.item-a').closest('ul')
        .css('background-color', 'red');
    $('li.item-a').closest('li')
        .css('background-color', 'red');
    var listItemII = document.getElementById('ii');
    $('li.item-a').closest('ul', listItemII)
        .css('background-color', 'red');
    $('li.item-a').closest('#one', listItemII)
        .css('background-color', 'green');
    $(document).bind("click", function (e) {
        $(e.target).closest("li").toggleClass("hilight");
    });
    var $listElements = $("li").css("color", "blue");
    $(document).bind("click", function (e) {
        //$(e.target).closest($listElements).toggleClass("hilight");
    });
}

function test_contains() {
    jQuery.contains(document.documentElement, document.body);
    jQuery.contains(document.body, document.documentElement);
}

function test_contents() {
    $('.container').contents().filter(function () {
        return this.nodeType == 3;
    })
    .wrap('<p></p>')
    .end()
    .filter('br')
    .remove();
    $("#frameDemo").contents().find("a").css("background-color", "#BADA55");
}

function test_context() {
    $("ul")
        .append("<li>" + $("ul").context + "</li>")
        .append("<li>" + $("ul", document.body).context.nodeName + "</li>");
}

function test_css() {
    $("div").click(function () {
        var color = $(this).css("background-color");
        $("#result").html("That div is <span style='color:" + color + ";'>" + color + "</span>.");
    });
    $('div.example').css('width', function (index) {
        return index * 50;
    });
    $("p").mouseover(function () {
        $(this).css("color", "red");
    });
    $("#box").one("click", function () {
        $(this).css("width", "+=200");
    });
    var words = $("p:first").text().split(" ");
    var text = words.join("</span> <span>");
    $("p:first").html("<span>" + text + "</span>");
    $("span").click(function () {
        $(this).css("background-color", "yellow");
    });
    $("p").hover(function () {
        $(this).css({ 'background-color': 'yellow', 'font-weight': 'bolder' });
    }, function () {
        var cssObj = {
            'background-color': '#ddd',
            'font-weight': '',
            'color': 'rgb(0,40,244)'
        }
        $(this).css(cssObj);
    });
    $("div").click(function () {
        $(this).css({
            width: function (index, value) {
                return parseFloat(value) * 1.2;
            },
            height: function (index, value) {
                return parseFloat(value) * 1.2;
            }

        });
    });
}

function test_cssHooks() {
    if (!$.cssHooks) {
        throw ("jQuery 1.4.3 or above is required for this plugin to work");
        return;
    }
    $.cssHooks["someCSSProp"] = {
        get: function (elem, computed, extra) { },
        set: function (elem, value) { }
    };
    function styleSupport(prop) {
        var vendorProp, supportedProp,
            capProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            prefixes = ["Moz", "Webkit", "O", "ms"],
            div = document.createElement("div");

        if (prop in div.style) {
            supportedProp = prop;
        } else {
            for (var i = 0; i < prefixes.length; i++) {
                vendorProp = prefixes[i] + capProp;
                if (vendorProp in div.style) {
                    supportedProp = vendorProp;
                    break;
                }
            }
        }
        div = null;
        $.support[prop] = supportedProp;
        return supportedProp;
    }
    styleSupport("borderRadius");

    $.cssNumber["someCSSProp"] = true;
    $.fx.step["someCSSProp"] = function (fx) {
        $.cssHooks["someCSSProp"].set(fx.elem, fx.now + fx.unit);
    };
}

function test_each() {
    $('li').each(function (index) {
        alert(index + ': ' + $(this).text());
    });
    $(document.body).click(function () {
        $("div").each(function (i) {
            if (this.style.color != "blue") {
                this.style.color = "blue";
            } else {
                this.style.color = "";
            }
        });
    });
    $("span").click(function () {
        $("li").each(function () {
            $(this).toggleClass("example");
        });
    });
    $("button").click(function () {
        $("div").each(function (index, domEle) {
            // domEle == this
            $(domEle).css("backgroundColor", "yellow");
            if ($(this).is("#stop")) {
                $("span").text("Stopped at div index #" + index);
                return false;
            }
        });
    });
}

function test_prop() {
    var $input = $(this);
    $("p").html(".attr('checked'): <b>" + $input.attr('checked') + "</b><br>"
                + ".prop('checked'): <b>" + $input.prop('checked') + "</b><br>"
                + ".is(':checked'): <b>" + $input.is(':checked')) + "</b>";
    $("input").prop("disabled", false);
    $("input").prop("checked", true);
    $("input").val("someValue");
    $("input[type='checkbox']").prop("checked", function (i, val) {
        return !val;
    });
    $("input[type='checkbox']").prop({
        disabled: true
    });
}

function test_text() {
    var str = $("p:first").text();
    $("p:last").html(str);
    $('ul li').text(function (index) {
        return 'item number ' + (index + 1);
    });
    $("p").text("<b>Some</b> new text.");
}