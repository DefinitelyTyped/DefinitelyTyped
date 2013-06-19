/// <reference path="jquery.d.ts" />

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
    var dims = $("#box").css([ "width", "height", "backgroundColor" ]);
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

function test_data() {
    $('body').data('foo', 52);
    $('body').data('bar', { myType: 'test', count: 40 });
    $('body').data('foo');
    $('body').data();
    $("div").data("test", { first: 16, last: "pizza!" });
    $("span:first").text($("div").data("test").first);
    $("span:last").text($("div").data("test").last);
    alert($('body').data('foo'));
    alert($('body').data());
    alert($("body").data("foo"));
    $("body").data("bar", "foobar");
    alert($("body").data("bar"));
    $("div").data("role") === "page";
    $("div").data("lastValue") === 43;
    $("div").data("hidden") === true;
    $("div").data("options").name === "John";
    var value;
    switch ($("button").index(this)) {
        case 0:
            value = $("div").data("blah");
            break;
        case 1:
            $("div").data("blah", "hello");
            value = "Stored!";
            break;
        case 2:
            $("div").data("blah", 86);
            value = "Stored!";
            break;
        case 3:
            $("div").removeData("blah");
            value = "Removed!";
            break;
    }
    $("span").text("" + value);
    jQuery.data(document.body, 'foo', 52);
    jQuery.data(document.body, 'bar', 'test');
    var div = $("div")[0];
    jQuery.data(div, "test", { first: 16, last: "pizza!" });
    $("span:first").text(jQuery.data(div, "test").first);
    $("span:last").text(jQuery.data(div, "test").last);
}

function test_dblclick() {
    $('#target').dblclick(function () {
        alert('Handler for .dblclick() called.');
    });
    $('#other').click(function () {
        $('#target').dblclick();
    });
    $("p").dblclick(function () { alert("Hello World!"); });
    var divdbl = $("div:first");
    divdbl.dblclick(function () {
        divdbl.toggleClass('dbl');
    });
}

function test_deferred() {
    $.get("test.php").always(function () {
        alert("$.get completed with success or error callback arguments");
    });
    $.get("test.php").done(function () {
        alert("$.get succeeded");
    });
    function fn1() {
        $("p").append(" 1 ");
    }
    function fn2() {
        $("p").append(" 2 ");
    }
    function fn3(n) {
        $("p").append(n + " 3 " + n);
    }
    var dfd = $.Deferred();
    dfd
        .done([fn1, fn2], fn3, [fn2, fn1])
        .done(function (n) {
            $("p").append(n + " we're done.");
        });
    $("button").bind("click", function () {
        dfd.resolve("and");
    });
    $.get("test.php")
        .done(function () { alert("$.get succeeded"); })
        .fail(function () { alert("$.get failed!"); });
    dfd.state();
    var defer = $.Deferred(),
    filtered = defer.pipe(function (value) {
        return value * 2;
    });
    defer.resolve(5);
    filtered.done(function (value) {
        alert("Value is ( 2*5 = ) 10: " + value);
    });
    filtered.fail(function (value) {
        alert("Value is ( 3*6 = ) 18: " + value);
    });
    filtered.done(function (data) { });

    function asyncEvent() {
        var newDeferred = new jQuery.Deferred();
        var dfd: JQueryDeferred;
        setTimeout(function () {
            dfd.resolve("hurray");
        }, Math.floor(400 + Math.random() * 2000));
        setTimeout(function () {
            dfd.reject("sorry");
        }, Math.floor(400 + Math.random() * 2000));
        setTimeout(function working() {
            if (dfd.state() === "pending") {
                dfd.notify("working... ");
                setTimeout(null, 500);
            }
        }, 1);
        return dfd.promise();
    }
    var obj = {
        hello: function (name) {
            alert("Hello " + name);
        }
    },
    defer = $.Deferred();
    defer.promise(obj);
    defer.resolve("John");
    $.get("test.php").then(
        function () { alert("$.get succeeded"); },
        function () { alert("$.get failed!"); }
    );
}

function test_delay() {
    $('#foo').slideUp(300).delay(800).fadeIn(400);
    $("button").click(function () {
        $("div.first").slideUp(300).delay(800).fadeIn(400);
        $("div.second").slideUp(300).fadeIn(400);
    });
}

/* Not existing, but not recommended either
function test_delegate() {
    $("table").delegate("td", "click", function () {
        $(this).toggleClass("chosen");
    });
    $("table").on("click", "td", function () {
        $(this).toggleClass("chosen");
    });
    $("body").delegate("p", "click", function () {
        $(this).after("<p>Another paragraph!</p>");
    });
    $("body").delegate("p", "click", function () {
        alert($(this).text());
    });
    $("body").delegate("a", "click", function () { return false; });
    $("body").delegate("a", "click", function (event) {
        event.preventDefault();
    });
    $("body").delegate("p", "myCustomEvent", function (e, myName, myValue) {
        $(this).text("Hi there!");
        $("span").stop().css("opacity", 1)
                 .text("myName = " + myName)
                 .fadeIn(30).fadeOut(1000);
    });
    $("button").click(function () {
        $("p").trigger("myCustomEvent");
    });
}
*/

function test_dequeue() {
    $("button").click(function () {
        $("div").animate({ left: '+=200px' }, 2000);
        $("div").animate({ top: '0px' }, 600);
        $("div").queue(function () {
            $(this).toggleClass("red");
            $(this).dequeue();
        });
        $("div").animate({ left: '10px', top: '30px' }, 700);
    });
}

function test_detach() {
    $("p").click(function () {
        $(this).toggleClass("off");
    });
    var p;
    $("button").click(function () {
        if (p) {
            p.appendTo("body");
            p = null;
        } else {
            p = $("p").detach();
        }
    });
}

function test_each() {
    $.each([52, 97], function (index, value) {
        alert(index + ': ' + value);
    });
    var map = {
        'flammable': 'inflammable',
        'duh': 'no duh'
    };
    $.each(map, function (key, value) {
        alert(key + ': ' + value);
    });
    var arr = ["one", "two", "three", "four", "five"];
    var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
    jQuery.each(arr, function () {
        $("#" + this).text("Mine is " + this + ".");
        return (this != "three");
    });
    jQuery.each(obj, function (i, val) {
        $("#" + i).append(document.createTextNode(" - " + val));
    });
    $.each(['a', 'b', 'c'], function (i, l) {
        alert("Index #" + i + ": " + l);
    });
    $.each({ name: "John", lang: "JS" }, function (k, v) {
        alert("Key: " + k + ", Value: " + v);
    });
    $.each([{a: 1}, {a: 2}, {a: 3}], function (i, o) {
        alert("Index #" + i + ": " + o.a);
    });
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

function test_empty() {
    $('.hello').empty();
}

function test_end() {
    $('ul.first').find('.foo').css('background-color', 'red')
        .end().find('.bar').css('background-color', 'green');
    $('ul.first').find('.foo')
        .css('background-color', 'red')
        .end().find('.bar')
        .css('background-color', 'green')
        .end();
}

function test_eq() {
    $('li').eq(2).css('background-color', 'red');
    $('li').eq(-2).css('background-color', 'red');
    $('li').eq(5).css('background-color', 'red');
    $("body").find("div").eq(2).addClass("blue");
}

function test_error() {
    $('#book')
        .error(function () {
            alert('Handler for .error() called.')
        })
        .attr("src", "missing.png");
    $("img")
        .error(function () {
            $(this).hide();
        })
        .attr("src", "missing.png");
    jQuery.error = console.error;
}

function test_eventParams() {
    $("p").click(function (event) {
        event.currentTarget === this;
    });
    $(".box").on("click", "button", function (event) {
        $(event.delegateTarget).css("background-color", "red");
    });
    $("a").click(function (event) {
        event.isDefaultPrevented();
        event.preventDefault();
        event.isDefaultPrevented();
    });
    function immediatePropStopped(e) {
        var msg = "";
        if (e.isImmediatePropagationStopped()) {
            msg = "called"
        } else {
            msg = "not called";
        }
        $("#stop-log").append("<div>" + msg + "</div>");
    }
    $("button").click(function (event) {
        immediatePropStopped(event);
        event.stopImmediatePropagation();
        immediatePropStopped(event);
    });
    function propStopped(e) {
        var msg = "";
        if (e.isPropagationStopped()) {
            msg = "called"
        } else {
            msg = "not called";
        }
        $("#stop-log").append("<div>" + msg + "</div>");
    }
    $("button").click(function (event) {
        propStopped(event);
        event.stopPropagation();
        propStopped(event);
    });
    $("p").bind("test.something", function (event) {
        alert(event.namespace);
    });
    $("button").click(function (event) {
        $("p").trigger("test.something");
    });
    $(document).bind('mousemove', function (e) {
        $("#log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
    });
    $("a").click(function (event) {
        event.preventDefault();
        $('<div/>')
            .append('default ' + event.type + ' prevented')
            .appendTo('#log');
    });
    $("a").mouseout(function (event) {
        alert(event.relatedTarget.nodeName);
    });
    $("button").click(function (event) {
        return "hey";
    });
    $("button").click(function (event) {
        $("p").html(event.result);
    });
    $("p").click(function (event) {
        event.stopImmediatePropagation();
    });
    $("p").click(function (event) {
        $(this).css("background-color", "#f00");
    });
    $("div").click(function (event) {
        $(this).css("background-color", "#f00");
    });
    $("p").click(function (event) {
        event.stopPropagation();
    });
    $("body").click(function (event) {
        //bugfix, duplicate identifier.  see: http://stackoverflow.com/questions/14824143/duplicate-identifier-nodename-in-jquery-d-ts
        //$("#log").html("clicked: " + event.target.nodeName);
    });
    $('#whichkey').bind('keydown', function (e) {
        $('#log').html(e.type + ': ' + e.which);
    });
    $('#whichkey').bind('mousedown', function (e) {
        $('#log').html(e.type + ': ' + e.which);
    });
}

function test_extend() {
    var object1 = {
        apple: 0,
        banana: { weight: 52, price: 100 },
        cherry: 97
    };
    var object2 = {
        banana: { price: 200 },
        durian: 100
    };
    $.extend(object1, object2);
    var printObj = typeof JSON != "undefined" ? JSON.stringify : function (obj) {
        var arr = [];
        $.each(obj, function (key, val) {
            var next = key + ": ";
            next += $.isPlainObject(val) ? printObj(val) : val;
            arr.push(next);
        });
        return "{ " + arr.join(", ") + " }";
    };
    $("#log").append(printObj(object1));

    var defaults = { validate: false, limit: 5, name: "foo" };
    var options = { validate: true, name: "bar" };
    var settings = $.extend({}, defaults, options);
}

function test_fadeIn() {
    $('#clickme').click(function () {
        $('#book').fadeIn('slow', function () { });
    });
    $(document.body).click(function () {
        $("div:hidden:first").fadeIn("slow");
    });
    $("a").click(function () {
        $("div").fadeIn(3000, function () {
            $("span").fadeIn(100);
        });
        return false;
    });
}

function test_fadeOut() {
    $('#clickme').click(function () {
        $('#book').fadeOut('slow', function () { });
    });
    $("p").click(function () {
        $("p").fadeOut("slow");
    });
    $("span").click(function () {
        $(this).fadeOut(1000, function () {
            $("div").text("'" + $(this).text() + "' has faded!");
            $(this).remove();
        });
    });
    $("span").hover(function () {
        $(this).addClass("hilite");
    }, function () {
        $(this).removeClass("hilite");
    });
    $("#btn1").click(function () {
        function complete() {
            $("<div/>").text(this.id).appendTo("#log");
        }
        $("#box1").fadeOut(1600, "linear", complete);
        $("#box2").fadeOut(1600, complete);
    });
    $("#btn2").click(function () {
        $("div").show();
        $("#log").empty();
    });
}

function test_fadeTo() {
    $('#clickme').click(function () {
        $('#book').fadeTo('slow', 0.5, function () { });
    });
    $("p:first").click(function () {
        $(this).fadeTo("slow", 0.33);
    });
    $("div").click(function () {
        $(this).fadeTo("fast", Math.random());
    });
    var getPos = function (n) {
        return (Math.floor(n) * 90) + "px";
    };
    $("p").each(function (n) {
        var r = Math.floor(Math.random() * 3);
        var tmp = $(this).text();
        $(this).text($("p:eq(" + r + ")").text());
        $("p:eq(" + r + ")").text(tmp);
        $(this).css("left", getPos(n));
    });
    $("div").each(function (n) {
        $(this).css("left", getPos(n));
    })
    .css("cursor", "pointer")
    .click(function () {
        $(this).fadeTo(250, 0.25, function () {
            $(this).css("cursor", "")
                   .prev().css({
                       "font-weight": "bolder",
                       "font-style": "italic"
                   });
        });
    });
}

function test_fadeToggle() {
    $("button:first").click(function () {
        $("p:first").fadeToggle("slow", "linear");
    });
    $("button:last").click(function () {
        $("p:last").fadeToggle("fast", function () {
            $("#log").append("<div>finished</div>");
        });
    });
}

function test_filter() {
    $('li').filter(':even').css('background-color', 'red');
    $('li').filter(function (index) {
        return index % 3 == 2;
    }).css('background-color', 'red');
    $("div").css("background", "#b4b0da")
        .filter(function (index) {
            return index == 1 || $(this).attr("id") == "fourth";
        })
        .css("border", "3px double red");
    $("div").filter(document.getElementById("unique"));
    $("div").filter($("#unique"));
}

function test_find() {
    $('li.item-ii').find('li').css('background-color', 'red');
    var item1 = $('li.item-1')[0];
    $('li.item-ii').find(item1).css('background-color', 'red');
    var $spans = $('span');
    $("p").find($spans).css('color', 'red');
    var newText = $("p").text().split(" ").join("</span> <span>");
    newText = "<span>" + newText + "</span>";
    $("p").html(newText)
        .find('span')
        .hover(function () {
            $(this).addClass("hilite");
        },
        function () {
            $(this).removeClass("hilite");
        })
    .end()
        .find(":contains('t')")
        .css({ "font-style": "italic", "font-weight": "bolder" });
}

function test_finish() {
    $(".box").finish();
}

function test_first() {
    $('li').first().css('background-color', 'red');
}

function test_focus() {
    $('#target').focus(function () {
        alert('Handler for .focus() called.');
    });
    $('#other').click(function () {
        $('#target').focus();
    });
    $("input").focus(function () {
        $(this).next("span").css('display', 'inline').fadeOut(1000);
    });
    $("input[type=text]").focus(function () {
        $(this).blur();
    });
    $(document).ready(function () {
        $("#login").focus();
    });
}

function test_focusin() {
    $("p").focusin(function () {
        $(this).find("span").css('display', 'inline').fadeOut(1000);
    });
}

function test_focusout() {
    var fo = 0, b = 0;
    $("p").focusout(function () {
        fo++;
        $("#fo")
            .text("focusout fired: " + fo + "x");
    }).blur(function () {
        b++;
        $("#b")
            .text("blur fired: " + b + "x");
    });
}

function test_fx() {
    jQuery.fx.interval = 100;
    $("input").click(function () {
        $("div").toggle(3000);
    });
    var toggleFx = function () {
        $.fx.off = !$.fx.off;
    };
    toggleFx();
    $("button").click(toggleFx)
    $("input").click(function () {
        $("div").toggle("slow");
    });
}

function test_get() {
    $.get('ajax/test.html', function (data) {
        $('.result').html(data);
        alert('Load was performed.');
    });
    var jqxhr = $.get("example.php", function () {
        alert("success");
    })
    .done(function () { alert("second success"); })
    .fail(function () { alert("error"); });

    $.get("test.php");
    $.get("test.php", { name: "John", time: "2pm" });
    $.get("test.php", { 'choices[]': ["Jon", "Susan"] });
    $.get("test.php", function (data) {
        alert("Data Loaded: " + data);
    });
    $.get("test.cgi", { name: "John", time: "2pm" },
        function (data) {
            alert("Data Loaded: " + data);
        });
    $.get("test.php",
       function (data) {
           $('body').append("Name: " + data.name)
                    .append("Time: " + data.time);
       }, "json");
    alert($('li').get());
    $('li').get(0);
    $('li')[0];
    alert($('li').get(-1));
    function disp(divs) {
        var a = [];
        for (var i = 0; i < divs.length; i++) {
            a.push(divs[i].innerHTML);
        }
        $("span").text(a.join(" "));
    }
    disp($("div").get().reverse());
    $("*", document.body).click(function (e) {
        e.stopPropagation();
        var domEl = $(this).get(0);
        $("span:first").text("Clicked on - " + domEl.tagName);
    });
}

function test_getJSON() {
    $.getJSON('ajax/test.json', function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push('<li id="' + key + '">' + val + '</li>');
        });
        $('<ul/>', {
            'class': 'my-new-list',
            html: items.join('')
        }).appendTo('body');
    });
    var jqxhr = $.getJSON("example.json", function () {
        alert("success");
    })
    .done(function () { alert("second success"); })
    .fail(function () { alert("error"); });
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    },
    function (data) {
        $.each(data.items, function (i, item) {
            $("<img/>").attr("src", item.media.m).appendTo("#images");
            if (i == 3) return false;
        });
    });
    $.getJSON("test.js", function (json) {
        alert("JSON Data: " + json.users[3].name);
    });
    $.getJSON("test.js", { name: "John", time: "2pm" }, function (json) {
        alert("JSON Data: " + json.users[3].name);
    });
}

function test_getScript() {
    $.getScript("ajax/test.js", function (data, textStatus, jqxhr) {
        console.log(data);
        console.log(textStatus);
        console.log(jqxhr.status);
        console.log('Load was performed.');
    });
    $.getScript("ajax/test.js")
        .done(function (script, textStatus) {
            console.log(textStatus);
        })
        .fail(function (jqxhr, settings, exception) {
            $("div.log").text("Triggered ajaxError handler.");
        });
    $("div.log").ajaxError(function (e, jqxhr, settings, exception) {
        if (settings.dataType == 'script') {
            $(this).text("Triggered ajaxError handler.");
        }
    });
    $.ajaxSetup({
        cache: true
    });
    $.getScript("/scripts/jquery.color.js", function () {
        $("#go").click(function () {
            $(".block").animate({ backgroundColor: "pink" }, 1000)
              .delay(500)
              .animate({ backgroundColor: "blue" }, 1000);
        });
    });
}

function test_globalEval() {
    jQuery.globalEval("var newVar = true;");
}

function test_grep() {
    var arr = [1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1];
    $("div").text(arr.join(", "));
    arr = jQuery.grep(arr, function (n, i) {
        return (n != 5 && i > 4);
    });
    $("p").text(arr.join(", "));
    var arr2 = jQuery.grep(arr, function (a) { return a != 9; });
    $("span").text(arr.join(", "));
    $.grep([0, 1, 2], function (n, i) {
        return n > 0;
    }, true);
    var arr3 = $.grep(["a", "b", "c"], function (n, i) { return n !== "b"; });
}

function test_has() {
    $('li').has('ul').css('background-color', 'red');
    $("ul").append("<li>" + ($("ul").has("li").length ? "Yes" : "No") + "</li>");
    $("ul").has("li").addClass("full");
}

function test_hasClass() {
    $("div#result1").append($("p:first").hasClass("selected"));
    $("div#result2").append($("p:last").hasClass("selected"));
    $("div#result3").append($("p").hasClass("selected"));

    $('#mydiv').hasClass('foo');
    // typescript has a bug to (bool).toString() - I'll comment this code until typescript team solve this problem.
    //$("div#result1").append($("p:first").hasClass("selected").toString());
    //$("div#result2").append($("p:last").hasClass("selected").toString());
    //$("div#result3").append($("p").hasClass("selected").toString());
}

function test_hasData() {
    var $p = jQuery("p"), p = $p[0];
    $p.append(jQuery.hasData(p) + " ");
    $.data(p, "testing", 123);
    $p.append(jQuery.hasData(p) + " ");
    $.removeData(p, "testing");
    $p.append(jQuery.hasData(p) + " ");
    $p.on('click', function () { });
    $p.append(jQuery.hasData(p) + " ");
    $p.off('click');
    $p.append(jQuery.hasData(p) + " ");
}

function test_height() {
    $(window).height();
    $(document).height();
    function showHeight(ele, h) {
        $("div").text("The height for the " + ele + " is " + h + "px.");
    }
    $("#getp").click(function () {
        showHeight("paragraph", $("p").height());
    });
    $("#getd").click(function () {
        showHeight("document", $(document).height());
    });
    $("#getw").click(function () {
        showHeight("window", $(window).height());
    });
    $("div").one('click', function () {
        $(this).height(30)
               .css({ cursor: "auto", backgroundColor: "green" });
    });
}

function test_hide() {
    $('.target').hide();
    $('#clickme').click(function () {
        $('#book').hide('slow', function () {
            alert('Animation complete.');
        });
    });
    $("p").hide();
    $("a").click(function (event) {
        event.preventDefault();
        $(this).hide();
    });
    $("button").click(function () {
        $("p").hide("slow");
    });
    $("#hidr").click(function () {
        $("span:last-child").hide("fast", function () {
            $(this).prev().hide("fast", arguments.callee);
        });
    });
    $("#showr").click(function () {
        $("span").show(2000);
    });
    $("div").click(function () {
        $(this).hide(2000, function () {
            $(this).remove();
        });
    });
}

function test_holdReady() {
    $.holdReady(true);
    $.getScript("myplugin.js", function () {
        $.holdReady(false);
    });
}

function test_hover() {
    $("li").hover(
        function () {
            $(this).append($("<span> ***</span>"));
        },
        function () {
            $(this).find("span:last").remove();
        }
    );
    $("li.fade").hover(function () { $(this).fadeOut(100); $(this).fadeIn(500); });
    $("li")
    .filter(":odd")
    .hide()
    .end()
    .filter(":even")
    .hover(
        function () {
            $(this).toggleClass("active")
            .next().stop(true, true).slideToggle();
        }
    );
}

function test_html() {
    $('div.demo-container').html();
    $("p").click(function () {
        var htmlStr = $(this).html();
        $(this).text(htmlStr);
    });
    $('div.demo-container')
        .html('<p>All new content. <em>You bet!</em></p>');
    $('div.demo-container').html(function () {
        var emph = '<em>' + $('p').length + ' paragraphs!</em>';
        return '<p>All new content for ' + emph + '</p>';
    });
    $("div").html("<b>Wow!</b> Such excitement...");
    $("div b").append(document.createTextNode("!!!"))
              .css("color", "red");
}

function test_inArray() {
    var arr: any[] = [4, "Pete", 8, "John"];
    var $spans = $("span");
    $spans.eq(0).text(jQuery.inArray("John", arr));
    $spans.eq(1).text(jQuery.inArray(4, arr));
    $spans.eq(2).text(jQuery.inArray("Karl", arr));
    $spans.eq(3).text(jQuery.inArray("Pete", arr, 2));

    var arr2: number[] = [1, 2, 3, 4];
    $spans.eq(1).text(jQuery.inArray(4, arr2));
}

function test_index() {
    var listItem = document.getElementById('bar');
    alert('Index: ' + $('li').index(listItem));
    var listItems = $('li:gt(0)');
    alert('Index: ' + $('li').index(listItems));
    alert('Index: ' + $('#bar').index());
    $("div").click(function () {
        var index = $("div").index(this);
        $("span").text("That was div index #" + index);
    });
    var listItems = $('li:gt(0)');
    $('div').html('Index: ' + $('li').index(listItems));
    $('div').html('Index: ' + $('#bar').index('li'));
    var foobar = $("li").index($('#foobar'));
    $('div').html('Index: ' + foobar);
}

function test_innedHeight() {
    var p = $("p:first");
    $("p:last").text("innerHeight:" + p.innerHeight());
}

function test_innerWidth() {
    var p = $("p:first");
    $("p:last").text("innerWidth:" + p.innerWidth());
}

function test_insertAfter() {
    $('<p>Test</p>').insertAfter('.inner');
    $('h2').insertAfter($('.container'));
    $("p").insertAfter("#foo");
}

function test_insertBefore() {
    $('<p>Test</p>').insertBefore('.inner');
    $('h2').insertBefore($('.container'));
    $("p").insertBefore("#foo");
}

function test_is() {
    $("ul").click(function (event) {
        var $target = $(event.target);
        if ($target.is("li")) {
            $target.css("background-color", "red");
        }
    });
    $("li").click(function () {
    var $li = $(this),
        isWithTwo = $li.is(function () {
            return $('strong', this).length === 2;
        });
        if (isWithTwo) {
            $li.css("background-color", "green");
        } else {
            $li.css("background-color", "red");
        }
    });
    $("div").one('click', function () {
        if ($(this).is(":first-child")) {
            $("p").text("It's the first div.");
        } else if ($(this).is(".blue,.red")) {
            $("p").text("It's a blue or red div.");
        } else if ($(this).is(":contains('Peter')")) {
            $("p").text("It's Peter!");
        } else {
            $("p").html("It's nothing <em>special</em>.");
        }
        $("p").hide().slideDown("slow");
        $(this).css({ "border-style": "inset", cursor: "default" });
    });
    var isFormParent = $("input[type='checkbox']").parent().is("form");
    $("div").text("isFormParent = " + isFormParent);
    var isFormParent = $("input[type='checkbox']").parent().is("form");
    $("div").text("isFormParent = " + isFormParent);
    var $alt = $("#browsers li:nth-child(2n)").css("background", "#00FFFF");
    $('li').click(function () {
        var $li = $(this);
        if ($li.is($alt)) {
            $li.slideUp();
        } else {
            $li.css("background", "red");
        }
    });
    var $alt = $("#browsers li:nth-child(2n)").css("background", "#00FFFF");
    $('li').click(function () {
        if ($alt.is(this)) {
            $(this).slideUp();
        } else {
            $(this).css("background", "red");
        }
    });
}

function test_isArray() {
    $("b").append("" + $.isArray([]));
}

function test_isEmptyObject() {
    jQuery.isEmptyObject({});
    jQuery.isEmptyObject({ foo: "bar" });
}

function test_isFuction() {
    function stub() { };
    var objs: any[] = [
          function () { },
          { x: 15, y: 20 },
          null,
          stub,
          "function"
    ];
    jQuery.each(objs, function (i) {
        var isFunc = jQuery.isFunction(objs[i]);
        $("span").eq(i).text(isFunc);
    });
    $.isFunction(function () { });
}

function test_isNumeric() {
    $.isNumeric("-10");
    $.isNumeric(16);
    $.isNumeric(0xFF);
    $.isNumeric("0xFF");
    $.isNumeric("8e5");
    $.isNumeric(3.1415);
    $.isNumeric(+10);
    $.isNumeric(0144);
    $.isNumeric("");
    $.isNumeric({});
    $.isNumeric(NaN);
    $.isNumeric(null);
    $.isNumeric(true);
    $.isNumeric(Infinity);
    $.isNumeric(undefined);
}

function test_isPlainObject() {
    $.isPlainObject(document.location);
    jQuery.isPlainObject({});
    jQuery.isPlainObject("test");
}

function test_isWindow() {
    $("b").append("" + $.isWindow(window));
}

function test_isXMLDoc() {
    jQuery.isXMLDoc(document);
    jQuery.isXMLDoc(document.body);
}

function test_jQuery() {
    $('div.foo');
    $('div.foo').click(function () {
        $('span', this).addClass('bar');
    });
    $('div.foo').click(function () {
        $(this).slideUp();
    });
    $.post('url.xml', function (data) {
        var $child = $(data).find('child');
    });
    var foo = { foo: 'bar', hello: 'world' };
    var $foo = $(foo);
    var test1 = $foo.prop('foo');
    $foo.prop('foo', 'foobar');
    var test2 = $foo.prop('foo');
    $foo.data('keyName', 'someValue');
    console.log($foo);
    $foo.bind('eventName', function () {
        console.log('eventName was called');
    });
    $foo.trigger('eventName');
    $foo.triggerHandler('eventName');
    $("div > p").css("border", "1px solid gray");
    $("input:radio", document.forms[0]);
	var xml: any;
    $("div", xml.responseXML);
    $(document.body).css("background", "black");
	var myForm: any;
    $(myForm.elements).hide();
    $('<p id="test">My <em>new</em> text</p>').appendTo('body');
    $('<img />');
    $('<input>');
    var el = $('1<br/>2<br/>3');
    el = $('1<br/>2<br/>3 >');
    $('<input />', {
        type: 'text',
        name: 'test'
    }).appendTo("body");
    $('<input type="text" />').attr({
        name: 'test'
    }).appendTo("body");
    $("<div><p>Hello</p></div>").appendTo("body");
    $("<div/>", {
        "class": "test",
        text: "Click me!",
        click: function () {
            $(this).toggleClass("test");
        }
    }).appendTo("body");
    jQuery(function ($) {
    });
}

function test_jquery() {
    var a = <any>{ what: "A regular JS object" },
    b = $('body');
    if (a.jquery) {
        alert(' a is a jQuery object! ');
    }
    if (b.jquery) {
        alert(' b is a jQuery object! ');
    }
    alert('You are running jQuery version: ' + $.fn.jquery);
}

function test_keydown() {
    $('#target').keydown(function () {
        alert('Handler for .keydown() called.');
    });
    $('#other').click(function () {
        $('#target').keydown();
    });
    var xTriggered = 0;
    $('#target').keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
        }
        xTriggered++;
        var msg = 'Handler for .keydown() called ' + xTriggered + ' time(s).';
    });
    $('#other').click(function () {
        $('#target').keydown();
    });
}

function test_keypress() {
    $("#target").keypress(function () {
        alert("Handler for .keypress() called.");
    });
    $('#other').click(function () {
        $("#target").keypress();
    });
    $("#other").click(function () {
        $("#target").keypress();
    });
}

function test_keyup() {
    $('#target').keyup(function () {
        alert('Handler for .keyup() called.');
    });
    $('#other').click(function () {
        $('#target').keyup();
    });
    $('#other').click(function () {
        $('#target').keyup();
    });
}

function test_last() {
    $('li').last().css('background-color', 'red');
    $("p span").last().addClass('highlight');
}

function test_length() {
    $(document.body).click(function () {
        $(document.body).append($("<div>"));
        var n = $("div").length;
        $("span").text("There are " + n + " divs." + "Click to add more.");
    }).trigger('click');
}

function test_load() {
    $('#result').load('ajax/test.html');
    $('#result').load('ajax/test.html', function () {
        alert('Load was performed.');
    });
    $('#result').load('ajax/test.html #container');
    $('#b').load('article.html #target');
    $("#success").load("/not-here.php", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    $("#objectID").load("test.php", { 'choices[]': ["Jon", "Susan"] });
    $("#feeds").load("feeds.php", { limit: 25 }, function () {
        alert("The last 25 entries in the feed have been loaded");
    });
}

function test_loadEvent() {
    $('#book').load(function () { });
    $('img.userIcon').load(function () {
        if ($(this).height() > 100) {
            $(this).addClass('bigImg');
        }
    });
}

function test_mousedown() {
    $('#target').mousedown(function () {
        alert('Handler for .mousedown() called.');
    });
    $('#other').click(function () {
        $('#target').mousedown();
    });
}

function test_mouseenter() {
    $('#outer').mouseenter(function () {
        $('#log').append('<div>Handler for .mouseenter() called.</div>');
    });
    $('#other').click(function () {
        $('#outer').mouseenter();
    });
    var n = 0;
    $("div.enterleave").mouseenter(function () {
        $("p:first", this).text("mouse enter");
        $("p:last", this).text(++n);
    }).mouseleave(function () {
        $("p:first", this).text("mouse leave");
    });
}

function test_mouseleave() {
    $('#outer').mouseleave(function () {
        $('#log').append('<div>Handler for .mouseleave() called.</div>');
    });
    $('#other').click(function () {
        $('#outer').mouseleave();
    });
    var i = 0;
    $("div.overout").mouseover(function () {
        $("p:first", this).text("mouse over");
    }).mouseout(function () {
        $("p:first", this).text("mouse out");
        $("p:last", this).text(++i);
    });
    var n = 0;
    $("div.enterleave").mouseenter(function () {
        $("p:first", this).text("mouse enter");
    }).mouseleave(function () {
        $("p:first", this).text("mouse leave");
        $("p:last", this).text(++n);
    });
}

function test_mousemove() {
    $("#target").mousemove(function (event) {
        var msg = "Handler for .mousemove() called at ";
        msg += event.pageX + ", " + event.pageY;
        $("#log").append("<div>" + msg + "</div>");
    });
    $("#other").click(function () {
        $("#target").mousemove();
    });
    $("div").mousemove(function (e) {
        var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
        var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
        $("span:first").text("( e.pageX, e.pageY ) : " + pageCoords);
        $("span:last").text("( e.clientX, e.clientY ) : " + clientCoords);
    });
}

function test_mouseout() {
    $('#outer').mouseout(function () {
        $('#log').append('Handler for .mouseout() called.');
    });
    $('#other').click(function () {
        $('#outer').mouseout();
    });
    var i = 0;
    $("div.overout").mouseout(function () {
        $("p:first", this).text("mouse out");
        $("p:last", this).text(++i);
    }).mouseover(function () {
        $("p:first", this).text("mouse over");
    });
    var n = 0;
    $("div.enterleave").bind("mouseenter", function () {
        $("p:first", this).text("mouse enter");
    }).bind("mouseleave", function () {
        $("p:first", this).text("mouse leave");
        $("p:last", this).text(++n);
    });
}

function test_mouseup() {
    $("p").mouseup(function () {
        $(this).append('<span style="color:#F00;">Mouse up.</span>');
    }).mousedown(function () {
        $(this).append('<span style="color:#00F;">Mouse down.</span>');
    });
    $('#target').mouseup(function () {
        alert('Handler for .mouseup() called.');
    });
    $('#other').click(function () {
        $('#target').mouseup();
    });
    $("p").mouseup(function () {
        $(this).append('<span style="color:#F00;">Mouse up.</span>');
    }).mousedown(function () {
        $(this).append('<span style="color:#00F;">Mouse down.</span>');
    });
}

function test_mouseover() {
    $('#outer').mouseover(function () {
        $('#log').append('<div>Handler for .mouseover() called.</div>');
    });
    $('#other').click(function () {
        $('#outer').mouseover();
    });
    var i = 0;
    $("div.overout").mouseover(function () {
        $("p:first", this).text("mouse over");
        $("p:last", this).text(++i);
    }).mouseout(function () {
        $("p:first", this).text("mouse out");
    });
    var n = 0;
    $("div.enterleave").mouseenter(function () {
        n += 1;
        $(this).find("span").text("mouse enter x " + n);
    }).mouseleave(function () {
        $(this).find("span").text("mouse leave");
    });
}

function test_makeArray() {
    var elems = document.getElementsByTagName("div");
    var arr = jQuery.makeArray(elems);
    arr.reverse();
    $(arr).appendTo(document.body);
    var obj = $('li');
    var arr = $.makeArray(obj);
    jQuery.isArray(arr) === true;
}

function test_map() {
    $(':checkbox').map(function () {
        return this.id;
    }).get().join(',');
    $("p").append($("input").map(function () {
        return $(this).val();
    }).get().join(", "));
    var mappedItems = $("li").map(function (index) {
        var replacement = $("<li>").text($(this).text()).get(0);
        if (index == 0) {
            $(replacement).text($(replacement).text().toUpperCase());
        } else if (index == 1 || index == 3) {
            replacement = null;
        } else if (index == 2) {
            replacement = [replacement, $("<li>").get(0)];
            $(replacement[0]).append("<b> - A</b>");
            $(replacement[1]).append("Extra <b> - B</b>");
        }
        return replacement;
    });
    $("#results").append(mappedItems);
    var fakeArray = { "length": 1, 0: "Addy", 1: "Subtracty" };
    var realArray = $.makeArray(fakeArray)
    $.map(realArray, function (val, i) { });
    var arr = ["a", "b", "c", "d", "e"];
    $("div").text(arr.join(", "));
    arr = jQuery.map(arr, function (n, i) {
        return (n.toUpperCase() + i);
    });
    $("p").text(arr.join(", "));
    arr = jQuery.map(arr, function (a) {
        return a + a;
    });
    $("span").text(arr.join(", "));
    $.map([0, 1, 2], function (n) {
        return n + 4;
    });
    $.map([0, 1, 2], function (n) {
        return n > 0 ? n + 1 : null;
    });
    $.map([0, 1, 2], function (n) {
        return [n, n + 1];
    });
    var dimensions = { width: 10, height: 15, length: 20 };
    dimensions = $.map(dimensions, function (value, index) {
        return value * 2;
    });
    var dimensions = { width: 10, height: 15, length: 20 },
    keys = $.map(dimensions, function (value, index) {
        return index;
    });
    $.map([0, 1, 2, 3], function (a) {
        return a * a;
    });
    $.map([0, 1, 52, 97], function (a) {
        return (a > 50 ? a - 45 : null);
    });
    var array = [0, 1, 52, 97];
    var array2 = $.map(array, function (a, index) {
        return [a - 45, index];
    });
}

function test_merge() {
    var oldArray: any[];
    var newArray = $.merge([], oldArray);
    $.merge([0, 1, 2], [2, 3, 4]);
    var first = ['a', 'b', 'c'];
    var second = ['d', 'e', 'f'];
    $.merge($.merge([], first), second);
    var z = $.merge([0, 1, 2], ['a', 'b', 'c']);
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
    var title: string = $('option:selected', this).prop('title');
}


function test_selector() {
  var $main = $('#main');
  var $mainDivs = $('div', $main);
  return $mainDivs.selector == '#main div';
}

function test_text() {
    var str = $("p:first").text();
    $("p:last").html(str);
    $('ul li').text(function (index) {
        return 'item number ' + (index + 1);
    });
    $("p").text("<b>Some</b> new text.");
}

$('#item').click(function(e) {
	if (e.ctrlKey) { console.log('control pressed'); }
	if (e.altKey) { console.log('alt pressed'); }
});

function test_addBack() {
    $('li.third-item').nextAll().addBack().css('background-color', 'red');

    $("div.left, div.right").find("div, div > p").addClass("border");

    // First Example
    $("div.before-addback").find("p").addClass("background");

    // Second Example
    $("div.after-addback").find("p").addBack().addClass("background");
}

// http://api.jquery.com/jQuery.parseHTML/
function test_parseHTML() {
	var $log = $( "#log" ),
		str = "hello, <b>my name is</b> jQuery.",
		html = $.parseHTML( str ),
		nodeNames = [];
	 
	// Append the parsed HTML
	$log.append( html );
	 
	// Gather the parsed HTML's node names
	$.each( html, function( i, el ) {
		nodeNames[i] = "<li>" + el.nodeName + "</li>";
	});
	 
	// Insert the node names
	$log.append( "<h3>Node Names:</h3>" );
	$( "<ol></ol>" )
	  .append( nodeNames.join( "" ) )
	  .appendTo( $log );
}

function test_EventIsNewable() {
    var ev = new jQuery.Event('click');
}

function test_EventIsCallable() {
    var ev = jQuery.Event('click');
}