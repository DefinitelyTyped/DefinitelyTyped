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
        var addedClass;
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