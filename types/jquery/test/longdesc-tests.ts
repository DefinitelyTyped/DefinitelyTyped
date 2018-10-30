// tslint:disable:ban-types
// tslint:disable:no-var-keyword
// tslint:disable:object-literal-key-quotes
// tslint:disable:object-literal-shorthand
// tslint:disable:one-variable-per-declaration
// tslint:disable:only-arrow-functions
// tslint:disable:prefer-const
// tslint:disable:prefer-for-of
// tslint:disable:prefer-template
// tslint:disable:space-within-parens
// tslint:disable:triple-equals

function longdesc() {
    function add_0() {
        $('p').add('div').addClass('widget');
        var pdiv = $('p').add('div');
    }

    function add_1() {
        var pdiv = $('p');
        pdiv.add('div'); // WRONG, pdiv will not change
    }

    function add_2() {
        $('li').add('p').css('background-color', 'red');
    }

    function add_3() {
        $('li').add(document.getElementsByTagName('p')[0])
            .css('background-color', 'red');
    }

    function add_4() {
        $('li').add('<p id=\'new\'>new paragraph</p>')
            .css('background-color', 'red');
    }

    function add_back_0() {
        $('li.third-item').nextAll().addBack()
            .css('background-color', 'red');
    }

    function add_class_0() {
        $('p').addClass('myClass yourClass');
    }

    function add_class_1() {
        $('p').removeClass('myClass noClass').addClass('yourClass');
    }

    function add_class_2() {
        $('ul li').addClass(function(index) {
            return 'item-' + index;
        });
    }

    function after_0() {
        $('.inner').after('<p>Test</p>');
    }

    function after_1() {
        $('.container').after($('h2'));
    }

    function after_2() {
        $('p').after(function() {
            return '<div>' + this.className + '</div>';
        });
    }

    function after_3() {
        var $newdiv1 = $('<div id=\'object1\'></div>'),
            newdiv2 = document.createElement('div'),
            existingdiv1 = document.getElementById('foo')!;

        $('p').first().after($newdiv1, [newdiv2, existingdiv1]);
    }

    function ajax_complete_0() {
        $(document).ajaxComplete(function() {
            $('.log').text('Triggered ajaxComplete handler.');
        });
    }

    function ajax_complete_1() {
        $('.trigger').click(function() {
            $('.result').load('ajax/test.html');
        });
    }

    function ajax_complete_2() {
        $(document).ajaxComplete(function(event, xhr, settings) {
            if (settings.url === 'ajax/test.html') {
                $('.log').text('Triggered ajaxComplete handler. The result is ' +
                    xhr.responseText);
            }
        });
    }

    function ajax_error_0() {
        $(document).ajaxError(function() {
            $('.log').text('Triggered ajaxError handler.');
        });
    }

    function ajax_error_1() {
        $('button.trigger').on('click', function() {
            $('div.result').load('ajax/missing.html');
        });
    }

    function ajax_error_2() {
        $(document).ajaxError(function(event, jqxhr, settings, thrownError) {
            if (settings.url == 'ajax/missing.html') {
                $('div.log').text('Triggered ajaxError handler.');
            }
        });
    }

    function ajax_send_0() {
        $(document).ajaxSend(function() {
            $('.log').text('Triggered ajaxSend handler.');
        });
    }

    function ajax_send_1() {
        $('.trigger').click(function() {
            $('.result').load('ajax/test.html');
        });
    }

    function ajax_send_2() {
        $(document).ajaxSend(function(event, jqxhr, settings) {
            if (settings.url == 'ajax/test.html') {
                $('.log').text('Triggered ajaxSend handler.');
            }
        });
    }

    function ajax_start_0() {
        $(document).ajaxStart(function() {
            $('.log').text('Triggered ajaxStart handler.');
        });
    }

    function ajax_start_1() {
        $('.trigger').click(function() {
            $('.result').load('ajax/test.html');
        });
    }

    function ajax_stop_0() {
        $(document).ajaxStop(function() {
            $('.log').text('Triggered ajaxStop handler.');
        });
    }

    function ajax_stop_1() {
        $('.trigger').click(function() {
            $('.result').load('ajax/test.html');
        });
    }

    function ajax_success_0() {
        $(document).ajaxSuccess(function() {
            $('.log').text('Triggered ajaxSuccess handler.');
        });
    }

    function ajax_success_1() {
        $('.trigger').on('click', function() {
            $('.result').load('ajax/test.html');
        });
    }

    function ajax_success_2() {
        $(document).ajaxSuccess(function(event, xhr, settings) {
            if (settings.url == 'ajax/test.html') {
                $('.log').text('Triggered ajaxSuccess handler. The Ajax response was: ' +
                    xhr.responseText);
            }
        });
    }

    function animate_0() {
        $('#clickme').click(function() {
            $('#book').animate({
                opacity: 0.25,
                left: '+=50',
                height: 'toggle',
            }, 5000, function() {
                // Animation complete.
            });
        });
    }

    function animate_1() {
        $('li').animate({
            opacity: .5,
            height: '50%',
        }, {
            step: function(now, fx) {
                var data = fx.elem.id + ' ' + fx.prop + ': ' + now;
                $('body').append('<div>' + data + '</div>');
            },
        });
    }

    function animate_2() {
        $('#clickme').click(function() {
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: ['toggle', 'swing'],
                opacity: 'toggle',
            }, 5000, 'linear', function() {
                $(this).after('<div>Animation complete.</div>');
            });
        });
    }

    function animate_3() {
        $('#clickme').click(function() {
            $('#book').animate({
                width: 'toggle',
                height: 'toggle',
            }, {
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce',
                },
                complete: function() {
                    $(this).after('<div>Animation complete.</div>');
                },
            });
        });
    }

    function append_0() {
        $('.inner').append('<p>Test</p>');
    }

    function append_1() {
        $('.container').append($('h2'));
    }

    function append_2() {
        var $newdiv1 = $('<div id=\'object1\'></div>'),
            newdiv2 = document.createElement('div'),
            existingdiv1 = document.getElementById('foo')!;

        $('body').append($newdiv1, [newdiv2, existingdiv1]);
    }

    function append_to_0() {
        $('<p>Test</p>').appendTo('.inner');
    }

    function append_to_1() {
        $('h2').appendTo($('.container'));
    }

    function attr_0() {
        $('#greatphoto').attr('alt', 'Beijing Brush Seller');
    }

    function attr_1() {
        $('#greatphoto').attr('title', 'Photo by Kelly Clark');
    }

    function attr_2() {
        $('#greatphoto').attr({
            alt: 'Beijing Brush Seller',
            title: 'photo by Kelly Clark',
        });
    }

    function attr_3() {
        $('#greatphoto').attr('title', function(i, val) {
            return val + ' - photo by Kelly Clark';
        });
    }

    function before_0() {
        $('.inner').before('<p>Test</p>');
    }

    function before_1() {
        $('.container').before($('h2'));
    }

    function before_2() {
        var newdiv1 = $('<div id=\'object1\'></div>'),
            newdiv2 = document.createElement('div'),
            existingdiv1 = document.getElementById('foo')!;

        $('p').first().before(newdiv1, [newdiv2, existingdiv1]);
    }

    function bind_0() {
        $('#foo').bind('click', function() {
            alert('User clicked on \'foo.\'');
        });
    }

    function bind_1() {
        $('#foo').bind('mouseenter mouseleave', function() {
            $(this).toggleClass('entered');
        });
    }

    function bind_2() {
        $('#foo').bind({
            click: function() {
                // Do something on click
            },
            mouseenter: function() {
                // Do something on mouseenter
            },
        });
    }

    function bind_3() {
        $('#foo').bind('click', function() {
            alert($(this).text());
        });
    }

    function bind_4() {
        $(document).ready(function() {
            $('#foo').bind('click', function(event) {
                alert('The mouse cursor is at (' +
                    event.pageX + ', ' + event.pageY +
                    ')');
            });
        });
    }

    function bind_5() {
        var message = 'Spoon!';
        $('#foo').bind('click', function() {
            alert(message);
        });
        message = 'Not in the face!';
        $('#bar').bind('click', function() {
            alert(message);
        });
    }

    function bind_6() {
        var message = 'Spoon!';
        $('#foo').bind('click', {
            msg: message,
        }, function(event) {
            alert(event.data.msg);
        });
        message = 'Not in the face!';
        $('#bar').bind('click', {
            msg: message,
        }, function(event) {
            alert(event.data.msg);
        });
    }

    function blur_0() {
        $('#other').click(function() {
            $('#target').blur();
        });
    }

    function change_0() {
        $('.target').change(function() {
            alert('Handler for .change() called.');
        });
    }

    function change_1() {
        $('#other').click(function() {
            $('.target').change();
        });
    }

    function children_0() {
        $('ul.level-2').children().css('background-color', 'red');
    }

    function click_0() {
        $('#target').click(function() {
            alert('Handler for .click() called.');
        });
    }

    function click_1() {
        $('#other').click(function() {
            $('#target').click();
        });
    }

    function clone_0() {
        $('.hello').appendTo('.goodbye');
    }

    function clone_1() {
        $('.hello').clone().appendTo('.goodbye');
    }

    function clone_2() {
        // Original element with attached data
        var $elem = $('#elem').data('arr', [1]),
            $clone = $elem.clone(true)
            // Deep copy to prevent data sharing
                .data('arr', $.extend([], $elem.data('arr')));
    }

    function closest_0() {
        $('li.item-a')
            .closest('ul')
            .css('background-color', 'red');
    }

    function closest_1() {
        $('li.item-a')
            .closest('li')
            .css('background-color', 'red');
    }

    function closest_2() {
        var listItemII = document.getElementById('ii')!;
        $('li.item-a')
            .closest('ul', listItemII)
            .css('background-color', 'red');
        $('li.item-a')
            .closest('#one', listItemII)
            .css('background-color', 'green');
    }

    function contents_0() {
        $('.container')
            .contents()
            .filter(function() {
                return this.nodeType === 3;
            })
            .wrap('<p></p>')
            .end()
            .filter('br')
            .remove();
    }

    function contextmenu_0() {
        $('#target').contextmenu(function() {
            alert('Handler for .contextmenu() called.');
        });
    }

    function contextmenu_1() {
        $('#target').contextmenu();
    }

    function css_0() {
        $('div.example').css('width', function(index) {
            return index * 50;
        });
    }

    function data_0() {
        alert($('body').data('foo'));
        alert($('body').data());
    }

    function data_1() {
        alert($('body').data('foo')); // undefined
        $('body').data('bar', 'foobar');
        alert($('body').data('bar')); // foobar
    }

    function data_2() {
        $('div').data('role') === 'page';
        $('div').data('lastValue') === 43;
        $('div').data('hidden') === true;
        $('div').data('options').name === 'John';
    }

    function data_3() {
        var mydata = $('#mydiv').data();
        if (mydata.count < 9) {
            mydata.count = 43;
            mydata.status = 'embiggened';
        }
    }

    function data_4() {
        $('body').data('foo', 52);
        $('body').data('bar', { myType: 'test', count: 40 });
        $('body').data({ baz: [1, 2, 3] });
        $('body').data('foo'); // 52
        $('body').data(); // { foo: 52, bar: { myType: "test", count: 40 }, baz: [ 1, 2, 3 ] }
    }

    function data_5() {
        alert($('body').data('foo'));
        alert($('body').data());
    }

    function data_6() {
        alert($('body').data('foo')); // undefined
        $('body').data('bar', 'foobar');
        alert($('body').data('bar')); // foobar
    }

    function data_7() {
        $('div').data('role') === 'page';
        $('div').data('lastValue') === 43;
        $('div').data('hidden') === true;
        $('div').data('options').name === 'John';
    }

    function data_8() {
        var mydata = $('#mydiv').data();
        if (mydata.count < 9) {
            mydata.count = 43;
            mydata.status = 'embiggened';
        }
    }

    function dblclick_0() {
        $('#target').dblclick(function() {
            alert('Handler for .dblclick() called.');
        });
    }

    function dblclick_1() {
        $('#other').click(function() {
            $('#target').dblclick();
        });
    }

    function delay_0() {
        $('#foo').slideUp(300).delay(800).fadeIn(400);
    }

    function delegate_0(elements: HTMLElement[], selector: string, events: any, data: any, handler: JQuery.EventHandler<HTMLElement>) {
        // jQuery 1.4.3+
        $(elements).delegate(selector, events, data, handler);
        // jQuery 1.7+
        $(elements).on(events, selector, data, handler);
    }

    function delegate_1() {
        $('table').delegate('td', 'click', function() {
            $(this).toggleClass('chosen');
        });
    }

    function delegate_2() {
        $('table').on('click', 'td', function() {
            $(this).toggleClass('chosen');
        });
    }

    function each_0() {
        $('li').each(function(index) {
            console.log(index + ': ' + $(this).text());
        });
    }

    function each_1() {
        // The .each() method is unnecessary here:
        $('li').each(function() {
            $(this).addClass('foo');
        });

        // Instead, you should rely on implicit iteration:
        $('li').addClass('bar');
    }

    function empty_0() {
        $('.hello').empty();
    }

    function end_0() {
        $('ul.first')
            .find('.foo')
            .css('background-color', 'red')
            .end()
            .find('.bar')
            .css('background-color', 'green');
    }

    function end_1() {
        $('ul.first')
            .find('.foo')
            .css('background-color', 'red')
            .end()
            .find('.bar')
            .css('background-color', 'green')
            .end();
    }

    function eq_0() {
        $('li').eq(2).css('background-color', 'red');
    }

    function eq_1() {
        $('li').eq(-2).css('background-color', 'red');
    }

    function eq_2() {
        $('li').eq(5).css('background-color', 'red');
    }

    function fade_out_0() {
        $('#clickme').click(function() {
            $('#book').fadeOut('slow', function() {
                // Animation complete.
            });
        });
    }

    function filter_0() {
        $('li').filter(':even').css('background-color', 'red');
    }

    function filter_1() {
        $('li')
            .filter(function(index) {
                return $('strong', this).length === 1;
            })
            .css('background-color', 'red');
    }

    function filter_2() {
        $('li')
            .filter(function(index) {
                return index % 3 === 2;
            })
            .css('background-color', 'red');
    }

    function find_0() {
        $('li.item-ii').find('li').css('background-color', 'red');
    }

    function find_1() {
        var allListElements = $('li');
    }

    function find_2(allListElements: never) {
        $('li.item-ii').find(allListElements);
    }

    function find_3() {
        var item1 = $('li.item-1')[0];
        $('li.item-ii').find(item1).css('background-color', 'red');
    }

    function first_0() {
        $('li').first().css('background-color', 'red');
    }

    function focus_0() {
        $('#target').focus(function() {
            alert('Handler for .focus() called.');
        });
    }

    function focus_1() {
        $('#other').click(function() {
            $('#target').focus();
        });
    }

    function get_0() {
        console.log($('li').get(0));
    }

    function get_1() {
        console.log($('li')[0]);
    }

    function get_2() {
        console.log($('li').get(-1));
    }

    function get_3() {
        console.log($('li').get());
    }

    function has_0() {
        $('li').has('ul').css('background-color', 'red');
    }

    function has_class_0() {
        $('#mydiv').hasClass('foo');
    }

    function has_class_1() {
        $('#mydiv').hasClass('bar');
    }

    function has_class_2() {
        $('#mydiv').hasClass('quux');
    }

    function height_0() {
        // Returns height of browser viewport
        $(window).height();

        // Returns height of HTML document
        $(document).height();
    }

    function hide_0() {
        $('.target').hide();
    }

    function hide_1() {
        // With the element initially shown, we can hide it slowly:
        $('#clickme').click(function() {
            $('#book').hide('slow', function() {
                alert('Animation complete.');
            });
        });
    }

    function hover_0(selector: string, handlerInOut: never) {
        $(selector).on('mouseenter mouseleave', handlerInOut);
    }

    function html_0() {
        $('div.demo-container').html();
    }

    function html_1() {
        $('div.demo-container')
            .html('<p>All new content. <em>You bet!</em></p>');
    }

    function html_2() {
        $('div.demo-container').html(function() {
            var emphasis = '<em>' + $('p').length + ' paragraphs!</em>';
            return '<p>All new content for ' + emphasis + '</p>';
        });
    }

    function index_0() {
        var listItem = document.getElementById('bar')!;
        alert('Index: ' + $('li').index(listItem));
    }

    function index_1() {
        var listItem = $('#bar');
        alert('Index: ' + $('li').index(listItem));
    }

    function index_2() {
        var listItems = $('li:gt(0)');
        alert('Index: ' + $('li').index(listItems));
    }

    function index_3() {
        var listItem = $('#bar');
        alert('Index: ' + listItem.index('li'));
    }

    function index_4() {
        alert('Index: ' + $('#bar').index());
    }

    function insert_after_0() {
        $('<p>Test</p>').insertAfter('.inner');
    }

    function insert_after_1() {
        $('h2').insertAfter($('.container'));
    }

    function insert_before_0() {
        $('<p>Test</p>').insertBefore('.inner');
    }

    function insert_before_1() {
        $('h2').insertBefore($('.container'));
    }

    function is_0() {
        $('ul').click(function(event) {
            var target = $(event.target);
            if (target.is('li')) {
                target.css('background-color', 'red');
            }
        });
    }

    function is_1() {
        $('li').click(function() {
            var li = $(this),
                isWithTwo = li.is(function() {
                    return $('strong', this).length === 2;
                });
            if (isWithTwo) {
                li.css('background-color', 'green');
            } else {
                li.css('background-color', 'red');
            }
        });
    }

    function jquery_ajax_0() {
        $.ajax();
    }

    function jquery_ajax_1() {
        $.ajax({
            url: 'http://fiddle.jshell.net/favicon.png',
            beforeSend: function(xhr) {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
            },
        })
            .done(function(data) {
                if (console && console.log) {
                    console.log('Sample of data:', data.slice(0, 100));
                }
            });
    }

    function jquery_ajax_2() {
        // Assign handlers immediately after making the request,
        // and remember the jqXHR object for this request
        var jqxhr = $.ajax('example.php')
            .done(function() {
                alert('success');
            })
            .fail(function() {
                alert('error');
            })
            .always(function() {
                alert('complete');
            });

        // Perform other work here ...

        // Set another completion function for the request above
        jqxhr.always(function() {
            alert('second complete');
        });
    }

    function jquery_ajax_3() {
        $.ajaxSetup({
            contents: {
                mycustomtype: /mycustomtype/,
            },
            converters: {
                'mycustomtype json': function(result) {
                    // Do stuff
                    var newresult = '';
                    return newresult;
                },
            },
        });
    }

    function jquery_ajax_4() {
        $.ajaxSetup({
            contents: {
                mycustomtype: /mycustomtype/,
            },
            converters: {
                'text mycustomtype': true,
                'mycustomtype json': function(result) {
                    // Do stuff
                    var newresult = '';
                    return newresult;
                },
            },
        });
    }

    function jquery_ajax_prefilter_0() {
        $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
            // Modify options, control originalOptions, store jqXHR, etc
        });
    }

    function jquery_ajax_prefilter_1() {
        var currentRequests: JQuery.PlainObject = {};

        $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
            if ((<any> options).abortOnRetry) {
                if (currentRequests[options.url!]) {
                    currentRequests[options.url!].abort();
                }
                currentRequests[options.url!] = jqXHR;
            }
        });
    }

    function jquery_ajax_prefilter_2() {
        $.ajaxPrefilter(function(options) {
            if (options.crossDomain) {
                options.url = 'http://mydomain.net/proxy/' + encodeURIComponent(options.url!);
                options.crossDomain = false;
            }
        });
    }

    function jquery_ajax_prefilter_3() {
        $.ajaxPrefilter('json script', function(options, originalOptions, jqXHR) {
            // Modify options, control originalOptions, store jqXHR, etc
        });
    }

    function jquery_ajax_prefilter_4(isActuallyScript: Function) {
        $.ajaxPrefilter(function(options) {
            if (isActuallyScript(options.url)) {
                return 'script';
            }
        });
    }

    function jquery_ajax_setup_0() {
        $.ajaxSetup({
            url: 'ping.php',
        });
    }

    function jquery_ajax_setup_1() {
        $.ajax({
            // url not set here; uses ping.php
            data: { 'name': 'Dan' },
        });
    }

    function jquery_ajax_transport_0(dataType: string, transportCanHandleRequest: boolean) {
        $.ajaxTransport(dataType, function(options, originalOptions, jqXHR) {
            if (transportCanHandleRequest) {
                return {
                    send: function(headers, completeCallback) {
                        // Send code
                    },
                    abort: function() {
                        // Abort code
                    },
                };
            }
        });
    }

    function jquery_ajax_transport_1() {
        // function(status, statusText, responses, headers) {}
    }

    function jquery_ajax_transport_2() {
        $.ajaxTransport('script', function(options, originalOptions, jqXHR) {
            let transport: JQuery.Transport = undefined!;

            // Will only be called for script requests
            return transport;
        });
    }

    function jquery_ajax_transport_3() {
        $.ajaxTransport('image', function(s) {
            if (s.type === 'GET' && s.async) {
                var image: any;
                return {
                    send: function(_, callback) {
                        image = new Image();
                        function done(status: number) {
                            if (image) {
                                var statusText: JQuery.Ajax.TextStatus = ( status === 200 ) ? 'success' : 'error',
                                    tmp = image;
                                image = image.onreadystatechange = image.onerror = image.onload = null;
                                // Error:(962, 50) TS2345:Argument of type 'string' is not assignable to parameter of type
                                //     '"success" | "notmodified" | "nocontent" | "abort" | "timeout" | "error" | "parsererror"'.
                                // Why can't the compiler infer this?
                                callback(status, statusText, { image: tmp });
                            }
                        }

                        image.onreadystatechange = image.onload = function() {
                            done(200);
                        };
                        image.onerror = function() {
                            done(404);
                        };
                        image.src = s.url;
                    },
                    abort: function() {
                        if (image) {
                            image = image.onreadystatechange = image.onerror = image.onload = null;
                        }
                    },
                };
            }
        });
    }

    function jquery_ajax_transport_4() {
        // List of data converters
        // 1) Key format is "source_type destination_type"
        //    (a single space in-between)
        // 2) The catchall symbol "*" can be used for source_type
        return {
            converters: {
                // Convert anything to text
                '* text': String,
                // Text to html (true = no transformation)
                'text html': true,
                // Evaluate text as a json expression
                'text json': jQuery.parseJSON,
                // Parse text as xml
                'text xml': jQuery.parseXML,
            },
        };
    }

    function jquery_ajax_transport_5() {
        jQuery.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript',
            },
            contents: {
                script: /javascript/,
            },
            converters: {
                'text script': jQuery.globalEval,
            },
        });
    }

    function jquery_callbacks_0() {
        function fn1(value: string) {
            console.log(value);
        }

        function fn2(value: string) {
            console.log('fn2 says: ' + value);
            return false;
        }
    }

    function jquery_callbacks_1(fn1: Function, fn2: Function) {
        var callbacks = $.Callbacks();
        callbacks.add(fn1);

        // Outputs: foo!
        callbacks.fire('foo!');

        callbacks.add(fn2);

        // Outputs: bar!, fn2 says: bar!
        callbacks.fire('bar!');
    }

    function jquery_callbacks_2(fn1: Function, fn2: Function) {
        var callbacks = $.Callbacks();
        callbacks.add(fn1);

        // Outputs: foo!
        callbacks.fire('foo!');

        callbacks.add(fn2);

        // Outputs: bar!, fn2 says: bar!
        callbacks.fire('bar!');

        callbacks.remove(fn2);

        // Only outputs foobar, as fn2 has been removed.
        callbacks.fire('foobar');
    }

    function jquery_callbacks_3(fn1: Function, fn2: Function) {
        var callbacks = $.Callbacks('once');
        callbacks.add(fn1);
        callbacks.fire('foo');
        callbacks.add(fn2);
        callbacks.fire('bar');
        callbacks.remove(fn2);
        callbacks.fire('foobar');

        /*
         output:
         foo
         */
    }

    function jquery_callbacks_4(fn1: Function, fn2: Function) {
        var callbacks = $.Callbacks('memory');
        callbacks.add(fn1);
        callbacks.fire('foo');
        callbacks.add(fn2);
        callbacks.fire('bar');
        callbacks.remove(fn2);
        callbacks.fire('foobar');

        /*
         output:
         foo
         fn2 says:foo
         bar
         fn2 says:bar
         foobar
         */
    }

    function jquery_callbacks_5(fn1: Function, fn2: Function) {
        var callbacks = $.Callbacks('unique');
        callbacks.add(fn1);
        callbacks.fire('foo');
        callbacks.add(fn1); // Repeat addition
        callbacks.add(fn2);
        callbacks.fire('bar');
        callbacks.remove(fn2);
        callbacks.fire('foobar');

        /*
         output:
         foo
         bar
         fn2 says:bar
         foobar
         */
    }

    function jquery_callbacks_6() {
        function fn1(value: string) {
            console.log(value);
            return false;
        }

        function fn2(value: string) {
            fn1('fn2 says: ' + value);
            return false;
        }

        var callbacks = $.Callbacks('stopOnFalse');
        callbacks.add(fn1);
        callbacks.fire('foo');
        callbacks.add(fn2);
        callbacks.fire('bar');
        callbacks.remove(fn2);
        callbacks.fire('foobar');

        /*
         output:
         foo
         bar
         foobar
         */
    }

    function jquery_callbacks_7() {
        function fn1(value: string) {
            console.log(value);
            return false;
        }

        function fn2(value: string) {
            fn1('fn2 says: ' + value);
            return false;
        }

        var callbacks = $.Callbacks('unique memory');
        callbacks.add(fn1);
        callbacks.fire('foo');
        callbacks.add(fn1); // Repeat addition
        callbacks.add(fn2);
        callbacks.fire('bar');
        callbacks.add(fn2);
        callbacks.fire('baz');
        callbacks.remove(fn2);
        callbacks.fire('foobar');

        /*
         output:
         foo
         fn2 says:foo
         bar
         fn2 says:bar
         baz
         fn2 says:baz
         foobar
         */
    }

    function jquery_callbacks_8(fn1: Function, fn2: Function) {
        var callbacks = $.Callbacks(),
            add = callbacks.add,
            remove = callbacks.remove,
            fire = callbacks.fire;

        add(fn1);
        fire('hello world');
        remove(fn1);
    }

    function jquery_css_hooks_0() {
        (function($) {
            // First, check to see if cssHooks are supported
            if (!$.cssHooks) {
                // If not, output an error message
                throw( new Error('jQuery 1.4.3 or above is required for this plugin to work') );
            }

            // Wrap in a document ready call, because jQuery writes
            // cssHooks at this time and will blow away your functions
            // if they exist.
            $(function() {
                $.cssHooks['someCSSProp'] = {
                    get: function(elem, computed, extra) {
                        // Handle getting the CSS property
                    },
                    set: function(elem, value) {
                        // Handle setting the CSS value
                    },
                };
            });
        })(jQuery);
    }

    function jquery_css_hooks_1() {
        (function($) {
            function styleSupport(prop: string) {
                var vendorProp,
                    supportedProp,

                    // Capitalize first character of the prop to test vendor prefix
                    capProp = prop.charAt(0).toUpperCase() + prop.slice(1),
                    prefixes = ['Moz', 'Webkit', 'O', 'ms'],
                    div: HTMLElement | null = document.createElement('div');

                if (prop in div.style) {
                    // Browser supports standard CSS property name
                    supportedProp = prop;
                } else {
                    // Otherwise test support for vendor-prefixed property names
                    for (var i = 0; i < prefixes.length; i++) {
                        vendorProp = prefixes[i] + capProp;
                        if (vendorProp in div.style) {
                            supportedProp = vendorProp;
                            break;
                        }
                    }
                }

                // Avoid memory leak in IE
                div = null;

                // Add property to $.support so it can be accessed elsewhere
                $.support[prop] = supportedProp;
                return supportedProp;
            }

            // Call the function, e.g. testing for "border-radius" support:
            styleSupport('borderRadius');
        })(jQuery);
    }

    function jquery_css_hooks_2() {
        (function($) {
            if (!$.cssHooks) {
                throw( new Error('jQuery 1.4.3+ is needed for this plugin to work') );
            }

            function styleSupport(prop: string) {
                var vendorProp,
                    supportedProp,
                    capProp = prop.charAt(0).toUpperCase() + prop.slice(1),
                    prefixes = ['Moz', 'Webkit', 'O', 'ms'],
                    div: HTMLElement | null = document.createElement('div');

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

            var borderRadius = styleSupport('borderRadius');

            // Set cssHooks only for browsers that support a vendor-prefixed border radius
            if (borderRadius && borderRadius !== 'borderRadius') {
                $.cssHooks.borderRadius = {
                    get: function(elem, computed, extra) {
                        return $.css(elem, borderRadius!);
                    },
                    set: function(elem, value) {
                        (<any> elem.style)[borderRadius!] = value;
                    },
                };
            }
        })(jQuery);
    }

    function jquery_css_hooks_3() {
        $('#element').css('borderRadius', '10px');
        $('#another').css('border-radius', '20px');
    }

    function jquery_css_hooks_4(supportsProprietaryAlternative: boolean) {
        (function($) {
            // Feature test for support of a CSS property
            // and a proprietary alternative
            // ...
            if ($.support.someCSSProp && $.support.someCSSProp !== 'someCSSProp') {
                // Set cssHooks for browsers that
                // support only a vendor-prefixed someCSSProp
                $.cssHooks.someCSSProp = {
                    get: function(elem, computed, extra) {
                        return $.css(elem, $.support.someCSSProp);
                    },
                    set: function(elem, value) {
                        elem.style[$.support.someCSSProp] = value;
                    },
                };
            } else if (supportsProprietaryAlternative) {
                $.cssHooks.someCSSProp = {
                    get: function(elem, computed, extra) {
                        // Handle crazy conversion from the proprietary alternative
                    },
                    set: function(elem, value) {
                        // Handle crazy conversion to the proprietary alternative
                    },
                };
            }
        })(jQuery);
    }

    function jquery_css_hooks_5() {
        $.cssNumber.someCSSProp = true;
    }

    function jquery_css_hooks_6() {
        $.fx.step.someCSSProp = function(fx) {
            $.cssHooks.someCSSProp.set!(fx.elem as HTMLElement, fx.now + fx.unit);
        };
    }

    function jquery_css_number_0() {
        jQuery.cssNumber.someCSSProp = true;
    }

    function jquery_data_0() {
        jQuery.data(document.body, 'foo', 52);
        jQuery.data(document.body, 'bar', 'test');
    }

    function jquery_data_1() {
        alert(jQuery.data(document.body, 'foo'));
        alert(jQuery.data(document.body));
    }

    function jquery_each_0() {
        $.each([52, 97], function(index, value) {
            alert(index + ': ' + value);
        });
    }

    function jquery_each_1() {
        var obj = {
            'flammable': 'inflammable',
            'duh': 'no duh',
        };
        $.each(obj, function(key, value) {
            alert(key + ': ' + value);
        });
    }

    function jquery_each_2() {
        $.each([52, 97], function(index, value) {
            alert(index + ': ' + value);
        });
    }

    function jquery_each_3() {
        var obj = {
            'flammable': 'inflammable',
            'duh': 'no duh',
        };
        $.each(obj, function(key, value) {
            alert(key + ': ' + value);
        });
    }

    function jquery_extend_0(object1: object, object2: object) {
        var object = $.extend({}, object1, object2);
    }

    function jquery_get_0(url: string, data: any, success: never, dataType: string) {
        $.ajax({
            url: url,
            data: data,
            success: success,
            dataType: dataType,
        });
    }

    function jquery_get_1() {
        $.get('ajax/test.html', function(data) {
            $('.result').html(data);
            alert('Load was performed.');
        });
    }

    function jquery_get_2() {
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.get('example.php', function() {
            alert('success');
        })
            .done(function() {
                alert('second success');
            })
            .fail(function() {
                alert('error');
            })
            .always(function() {
                alert('finished');
            });

        // Perform other work here ...

        // Set another completion function for the request above
        jqxhr.always(function() {
            alert('second finished');
        });
    }

    function jquery_get_json_0(url: string, data: any, success: never) {
        $.ajax({
            dataType: 'json',
            url: url,
            data: data,
            success: success,
        });
    }

    function jquery_get_json_1() {
        $.getJSON('ajax/test.json', function(data) {
            var items: string[] = [];
            $.each(data, function(key, val) {
                items.push('<li id=\'' + (key as string) + '\'>' + val + '</li>');
            });

            $('<ul/>', {
                'class': 'my-new-list',
                html: items.join(''),
            }).appendTo('body');
        });
    }

    function jquery_get_json_2() {
        return {
            'one': 'Singular sensation',
            'two': 'Beady little eyes',
            'three': 'Little birds pitch by my doorstep',
        };
    }

    function jquery_get_script_0(url: string, success: never) {
        $.ajax({
            url: url,
            dataType: 'script',
            success: success,
        });
    }

    function jquery_get_script_1() {
        $.getScript('ajax/test.js', function(data, textStatus, jqxhr) {
            console.log(data); // Data returned
            console.log(textStatus); // Success
            console.log(jqxhr.status); // 200
            console.log('Load was performed.');
        });
    }

    function jquery_get_script_2() {
        $.getScript('ajax/test.js')
            .done(function(script, textStatus) {
                console.log(textStatus);
            })
            .fail(function(jqxhr, settings, exception) {
                $('div.log').text('Triggered ajaxError handler.');
            });
    }

    function jquery_get_script_3() {
        $('div.log').ajaxError(function(e, jqxhr, settings, exception) {
            if (settings.dataType == 'script') {
                $(this).text('Triggered ajaxError handler.');
            }
        });
    }

    function jquery_get_script_4() {
        $.ajaxSetup({
            cache: true,
        });
    }

    function jquery_html_prefilter_0() {
        var htmlPrefilter = $.htmlPrefilter,
            rdel = /<(del)(?=[\s>])[\w\W]*?<\/\1\s*>/gi;

        $.htmlPrefilter = function(html) {
            return htmlPrefilter.call(this, html).replace(rdel, '');
        };
    }

    function jquery_html_prefilter_1() {
        $.htmlPrefilter = function(html) {
            // Return HTML strings unchanged
            return html;
        };
    }

    function jquery_html_prefilter_2() {
        var panything = '[\\w\\W]*?',

            // Whitespace
            // https://html.spec.whatwg.org/multipage/infrastructure.html#space-character
            pspace = '[\\x20\\t\\r\\n\\f]',

            // End of tag name (whitespace or greater-than)
            pnameEnd = pspace.replace(']', '>]'),

            // Tag name (a leading letter, then almost anything)
            // https://html.spec.whatwg.org/multipage/syntax.html#tag-open-state
            // https://html.spec.whatwg.org/multipage/syntax.html#tag-name-state
            pname = '[a-z]' + pnameEnd.replace('[', '[^/\\0') + '*',

            // Void element (end tag prohibited)
            // https://html.spec.whatwg.org/multipage/syntax.html#void-elements
            pvoidName = '(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|' +
                'source|track|wbr)(?=' + pnameEnd + ')',

            // Attributes (double-quoted value, single-quoted value, unquoted value, or no value)
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            pattrs = '(?:' + pspace + '+[^\\0-\\x20\\x7f-\\x9f="\'/>]+(?:' + pspace + '*=' + pspace +
                '*(?:"' + panything + '"|\'' + panything + '\'|' +
                pnameEnd.replace('[', '[^') + '*(?!/)' +
                ')|))*' + pspace + '*',

            // Trailing content of a close tag
            pcloseTail = '(?:' + pspace + panything + '|)',

            rspecialHtml = new RegExp(
                // Non-void element that self-closes: $1–$5
                '(<)(?!' + pvoidName + ')(' + pname + ')(' + pattrs + ')(\\/)(>)|' +
                // No-innerHTML container (element, comment, or CDATA): $6
                '(<(script|style|textarea)' + pattrs + '>' + panything + '<\\/\\7' + pcloseTail + '>|' +
                '<!--' + panything + '--)',
                'gi',
            ),

            // "<"; element name; attributes; ">"; "<"; "/"; element name; ">"; no-innerHTML container
            pspecialReplacement = '$1$2$3$5$1$4$2$5$6';

        $.htmlPrefilter = function(html) {
            return ( html + '' ).replace(rspecialHtml, pspecialReplacement);
        };
    }

    function jquery_in_array_0() {
        $.inArray((5 + 5).toString(), ['8', '9', '10', 10 + '']);
    }

    function jquery_is_plain_object_0() {
        console.log($.isPlainObject(document.location));
    }

    function jquery_map_0() {
        // The following object masquerades as an array.
        var fakeArray = { 'length': 2, 0: 'Addy', 1: 'Subtracty' };

        // Therefore, convert it to a real array
        var realArray = $.makeArray(fakeArray);

        // Now it can be used reliably with $.map()
        $.map(realArray, function(val, i) {
            // Do something
        });
    }

    function jquery_merge_0(oldArray: any[]) {
        var newArray = $.merge([], oldArray);
    }

    function jquery_param_0() {
        [
            { name: 'first', value: 'Rick' },
            { name: 'last', value: 'Astley' },
            { name: 'job', value: 'Rock Star' },
        ];
    }

    function jquery_param_1() {
        var myObject = {
            a: {
                one: 1,
                two: 2,
                three: 3,
            },
            b: [1, 2, 3],
        };
        var recursiveEncoded = $.param(myObject);
        var recursiveDecoded = decodeURIComponent($.param(myObject));

        alert(recursiveEncoded);
        alert(recursiveDecoded);
    }

    function jquery_param_2() {
        var myObject = {
            a: {
                one: 1,
                two: 2,
                three: 3,
            },
            b: [1, 2, 3],
        };
        var shallowEncoded = $.param(myObject, true);
        var shallowDecoded = decodeURIComponent(shallowEncoded);

        alert(shallowEncoded);
        alert(shallowDecoded);
    }

    function jquery_post_0(url: string, data: any, success: never, dataType: string) {
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: success,
            dataType: dataType,
        });
    }

    function jquery_post_1() {
        $.post('ajax/test.html', function(data) {
            $('.result').html(data);
        });
    }

    function jquery_post_2() {
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.post('example.php', function() {
            alert('success');
        })
            .done(function() {
                alert('second success');
            })
            .fail(function() {
                alert('error');
            })
            .always(function() {
                alert('finished');
            });

        // Perform other work here ...

        // Set another completion function for the request above
        jqxhr.always(function() {
            alert('second finished');
        });
    }

    function jquery_when_0() {
        $.when($.ajax('test.aspx')).then(function(data, textStatus, jqXHR) {
            alert(jqXHR.status); // Alerts 200
        });
    }

    function jquery_when_1() {
        $.when({ testing: 123 }).done(function(x: { testing: number; }) {
            alert(x.testing); // Alerts "123"
        });
    }

    function jquery_when_2() {
        $.when().then(function() {
            alert('I fired immediately');
        });
    }

    function jquery_when_3() {
        var d1 = $.Deferred();
        var d2 = $.Deferred();

        $.when(d1, d2).done(function(v1, v2) {
            console.log(v1); // "Fish"
            console.log(v2); // "Pizza"
        });

        d1.resolve('Fish');
        d2.resolve('Pizza');
    }

    function jquery_when_4() {
        var d1 = $.Deferred();
        var d2 = $.Deferred<string>();
        var d3 = $.Deferred<number>();

        $.when(d1, d2, d3).done(function(v1, v2, v3) {
            console.log(v1); // v1 is undefined
            console.log(v2); // v2 is "abc"
            console.log(v3); // v3 is an array [ 1, 2, 3, 4, 5 ]
        });

        d1.resolve();
        d2.resolve('abc');
        d3.resolve(1, 2, 3, 4, 5);
    }

    function jquery_0() {
        $('<p id=\'test\'>My <em>new</em> text</p>').appendTo('body');
    }

    function jquery_1() {
        $('<a href=\'http://jquery.com\'></a>');
    }

    function jquery_2() {
        $('<img>');
        $('<input>');
    }

    function jquery_3() {
        var el = $('<br>2<br>3'); // returns [<br>, "2", <br>]
        el = $('<br>2<br>3 >'); // returns [<br>, "2", <br>, "3 &gt;"]
    }

    function jquery_4() {
        $('', {
            'class': 'my-div',
            on: {
                touchstart: function(event: JQuery.Event) {
                    // Do something
                },
            },
        }).appendTo('body');
    }

    function jquery_5() {
        $('')
            .addClass('my-div')
            .on({
                touchstart: function(event) {
                    // Do something
                },
            })
            .appendTo('body');
    }

    function jquery_6() {
        $('div.foo');
    }

    function jquery_7() {
        $('div.foo').click(function() {
            $('span', this).addClass('bar');
        });
    }

    function jquery_8() {
        $('div.foo').click(function() {
            $(this).slideUp();
        });
    }

    function jquery_9() {
        $.post('url.xml', function(data) {
            var $child = $(data).find('child');
        });
    }

    function jquery_10() {
        // Define a plain object
        var foo = { foo: 'bar', hello: 'world' };

        // Pass it to the jQuery function
        var $foo = $(foo);

        // Test accessing property values
        var test1 = $foo.prop('foo'); // bar

        // Test setting property values
        $foo.prop('foo', 'foobar');
        var test2 = $foo.prop('foo'); // foobar

        // Test using .data() as summarized above
        $foo.data('keyName', 'someValue');
        console.log($foo); // will now contain a jQuery{randomNumber} property

        // Test binding an event name and triggering
        $foo.on('eventName', function() {
            console.log('eventName was called');
        });

        $foo.trigger('eventName'); // Logs "eventName was called"
    }

    function jquery_11($foo: JQuery) {
        $foo.triggerHandler('eventName'); // Also logs "eventName was called"
    }

    function keydown_0() {
        $('#target').keydown(function() {
            alert('Handler for .keydown() called.');
        });
    }

    function keydown_1() {
        $('#other').click(function() {
            $('#target').keydown();
        });
    }

    function keypress_0() {
        $('#target').keypress(function() {
            console.log('Handler for .keypress() called.');
        });
    }

    function keypress_1() {
        $('#other').click(function() {
            $('#target').keypress();
        });
    }

    function keyup_0() {
        $('#target').keyup(function() {
            alert('Handler for .keyup() called.');
        });
    }

    function keyup_1() {
        $('#other').click(function() {
            $('#target').keyup();
        });
    }

    function last_0() {
        $('li').last().css('background-color', 'red');
    }

    function load_0() {
        $('#result').load('ajax/test.html');
    }

    function load_1() {
        $('#result').load('ajax/test.html', function() {
            alert('Load was performed.');
        });
    }

    function load_2() {
        $('#result').load('ajax/test.html #container');
    }

    function load_3() {
        $('#a').load('article.html');
    }

    function load_4() {
        $('#b').load('article.html #target');
    }

    function map_0() {
        $(':checkbox')
            .map(function() {
                return this.id;
            })
            .get()
            .join();
    }

    function mousedown_0() {
        $('#target').mousedown(function() {
            alert('Handler for .mousedown() called.');
        });
    }

    function mousedown_1() {
        $('#other').click(function() {
            $('#target').mousedown();
        });
    }

    function mouseenter_0() {
        $('#outer').mouseenter(function() {
            $('#log').append('<div>Handler for .mouseenter() called.</div>');
        });
    }

    function mouseenter_1() {
        $('#other').click(function() {
            $('#outer').mouseenter();
        });
    }

    function mouseleave_0() {
        $('#outer').mouseleave(function() {
            $('#log').append('<div>Handler for .mouseleave() called.</div>');
        });
    }

    function mouseleave_1() {
        $('#other').click(function() {
            $('#outer').mouseleave();
        });
    }

    function mousemove_0() {
        $('#target').mousemove(function(event) {
            var msg = 'Handler for .mousemove() called at ';
            msg += event.pageX + ', ' + event.pageY;
            $('#log').append('<div>' + msg + '</div>');
        });
    }

    function mousemove_1() {
        $('#other').click(function() {
            $('#target').mousemove();
        });
    }

    function mouseout_0() {
        $('#outer').mouseout(function() {
            $('#log').append('Handler for .mouseout() called.');
        });
    }

    function mouseout_1() {
        $('#other').click(function() {
            $('#outer').mouseout();
        });
    }

    function mouseover_0() {
        $('#outer').mouseover(function() {
            $('#log').append('<div>Handler for .mouseover() called.</div>');
        });
    }

    function mouseover_1() {
        $('#other').click(function() {
            $('#outer').mouseover();
        });
    }

    function mouseup_0() {
        $('#target').mouseup(function() {
            alert('Handler for .mouseup() called.');
        });
    }

    function mouseup_1() {
        $('#other').click(function() {
            $('#target').mouseup();
        });
    }

    function next_0() {
        $('li.third-item').next().css('background-color', 'red');
    }

    function next_all_0() {
        $('li.third-item').nextAll().css('background-color', 'red');
    }

    function not_0() {
        $('li').not(':even').css('background-color', 'red');
    }

    function not_1() {
        $('li').not(document.getElementById('notli')!)
            .css('background-color', 'red');
    }

    function offset_parent_0() {
        $('li.item-a').offsetParent().css('background-color', 'red');
    }

    function on_0() {
        $('#dataTable tbody tr').on('click', function() {
            console.log($(this).text());
        });
    }

    function on_1() {
        $('#dataTable tbody').on('click', 'tr', function() {
            console.log($(this).text());
        });
    }

    function on_2() {
        function notify() {
            alert('clicked');
        }

        $('button').on('click', notify);
    }

    function on_3() {
        function greet(event: JQuery.Event<HTMLElement, { name: string; }>) {
            alert('Hello ' + event.data.name);
        }

        $('button').on('click', {
            name: 'Karl',
        }, greet);
        $('button').on('click', {
            name: 'Addy',
        }, greet);
    }

    function on_4() {
        var $test = $('#test');

        function handler1() {
            console.log('handler1');
            $test.off('click', handler2);
        }

        function handler2() {
            console.log('handler2');
        }

        $test.on('click', handler1);
        $test.on('click', handler2);
    }

    function one_0() {
        $('#foo').one('click', function() {
            alert('This will be displayed only once.');
        });
    }

    function one_1() {
        $('#foo').on('click', function(event) {
            alert('This will be displayed only once.');
            $(this).off(event);
        });
    }

    function one_2() {
        $('#foo').one('click mouseover', function(event) {
            alert('The ' + event.type + ' event happened!');
        });
    }

    function parent_0() {
        $('li.item-a').parent().css('background-color', 'red');
    }

    function parents_0() {
        $('li.item-a').parents().css('background-color', 'red');
    }

    function prepend_0() {
        $('.inner').prepend('<p>Test</p>');
    }

    function prepend_1() {
        $('.container').prepend($('h2'));
    }

    function prepend_2() {
        var $newdiv1 = $('<div id=\'object1\'></div>'),
            newdiv2 = document.createElement('div'),
            existingdiv1 = document.getElementById('foo')!;

        $('body').prepend($newdiv1, [newdiv2, existingdiv1]);
    }

    function prepend_to_0() {
        $('<p>Test</p>').prependTo('.inner');
    }

    function prepend_to_1() {
        $('h2').prependTo($('.container'));
    }

    function prev_0() {
        $('li.third-item').prev().css('background-color', 'red');
    }

    function prev_all_0() {
        $('li.third-item').prevAll().css('background-color', 'red');
    }

    function prop_0() {
        $('input').prop('disabled', false);
        $('input').prop('checked', true);
        $('input').val('someValue');
    }

    function prop_1() {
        $('input[type=\'checkbox\']').prop('checked', function(i, val) {
            return !val;
        });
    }

    function queue_0() {
        $('#foo').slideUp().fadeIn();
    }

    function queue_1() {
        $('#foo').slideUp();
        $('#foo').queue(function() {
            alert('Animation complete.');
            $(this).dequeue();
        });
    }

    function queue_2() {
        $('#foo').slideUp(function() {
            alert('Animation complete.');
        });
    }

    function queue_3() {
        $('#test').queue(function(next) {
            // Do some stuff...
            next();
        });
    }

    function ready_0() {
        $(document).ready(function() {
            // Handler for .ready() called.
        });
    }

    function ready_1() {
        $(function() {
            // Handler for .ready() called.
        });
    }

    function ready_2(jq2: JQueryStatic) {
        jq2 = jQuery.noConflict();
        jq2(function($) {
            // Code using $ as usual goes here; the actual jQuery object is jq2
        });
    }

    function remove_0() {
        $('.hello').remove();
    }

    function remove_1() {
        $('div').remove('.hello');
    }

    function remove_attr_0($element: JQuery) {
        $element.prop('onclick', null);
        console.log('onclick property: ', $element[0].onclick);
    }

    function remove_class_0() {
        $('p').removeClass('myClass yourClass');
    }

    function remove_class_1() {
        $('p').removeClass('myClass noClass').addClass('yourClass');
    }

    function remove_class_2() {
        $('li:last').removeClass(function() {
            return $(this).prev().attr('class')!;
        });
    }

    function replace_all_0() {
        $('<h2>New heading</h2>').replaceAll('.inner');
    }

    function replace_all_1() {
        $('.first').replaceAll('.third');
    }

    function replace_with_0() {
        $('div.second').replaceWith('<h2>New heading</h2>');
    }

    function replace_with_1() {
        $('div.inner').replaceWith('<h2>New heading</h2>');
    }

    function replace_with_2() {
        $('div.third').replaceWith($('.first'));
    }

    function resize_0() {
        $(window).resize(function() {
            $('#log').append('<div>Handler for .resize() called.</div>');
        });
    }

    function scroll_0() {
        $('#target').scroll(function() {
            $('#log').append('<div>Handler for .scroll() called.</div>');
        });
    }

    function scroll_1() {
        $('#other').click(function() {
            $('#target').scroll();
        });
    }

    function select_0() {
        $('#target').select(function() {
            alert('Handler for .select() called.');
        });
    }

    function select_1() {
        $('#other').click(function() {
            $('#target').select();
        });
    }

    function serialize_0() {
        $('form').on('submit', function(event) {
            event.preventDefault();
            console.log($(this).serialize());
        });
    }

    function serialize_array_0() {
        $('form').submit(function(event) {
            console.log($(this).serializeArray());
            event.preventDefault();
        });
    }

    function serialize_array_1() {
        [
            {
                name: 'a',
                value: '1',
            },
            {
                name: 'b',
                value: '2',
            },
            {
                name: 'c',
                value: '3',
            },
            {
                name: 'd',
                value: '4',
            },
            {
                name: 'e',
                value: '5',
            },
        ];
    }

    function show_0() {
        $('.target').show();
    }

    function siblings_0() {
        $('li.third-item').siblings().css('background-color', 'red');
    }

    function slice_0() {
        $('li').slice(2).css('background-color', 'red');
    }

    function slice_1() {
        $('li').slice(2, 4).css('background-color', 'red');
    }

    function slice_2() {
        $('li').slice(-2, -1).css('background-color', 'red');
    }

    function slide_down_0() {
        $('#clickme').click(function() {
            $('#book').slideDown('slow', function() {
                // Animation complete.
            });
        });
    }

    function slide_toggle_0() {
        $('#clickme').click(function() {
            $('#book').slideToggle('slow', function() {
                // Animation complete.
            });
        });
    }

    function slide_up_0() {
        $('#clickme').click(function() {
            $('#book').slideUp('slow', function() {
                // Animation complete.
            });
        });
    }

    function stop_0() {
        $('#hoverme-stop-2').hover(function() {
            $(this).find('img').stop(true, true).fadeOut();
        }, function() {
            $(this).find('img').stop(true, true).fadeIn();
        });
    }

    function submit_0() {
        $('#target').submit(function(event) {
            alert('Handler for .submit() called.');
            event.preventDefault();
        });
    }

    function submit_1() {
        $('#other').click(function() {
            $('#target').submit();
        });
    }

    function text_0() {
        $('<input>').is('[type=text]'); // false
        $('<input>').is(':text'); // true
    }

    function text_1() {
        $('ul li').text(function(index) {
            return 'item number ' + ( index + 1 );
        });
    }

    function to_array_0() {
        alert($('li').toArray());
    }

    function toggle_0() {
        $('.target').toggle();
    }

    function toggle_1() {
        $('#clickme').click(function() {
            $('#book').toggle('slow', function() {
                // Animation complete.
            });
        });
    }

    function toggle_2(display: boolean) {
        $('#foo').toggle(display);
    }

    function toggle_3(display: boolean) {
        if (display) {
            $('#foo').show();
        } else {
            $('#foo').hide();
        }
    }

    function toggle_class_0(className: string, addOrRemove: boolean) {
        $('#foo').toggleClass(className, addOrRemove);
    }

    function toggle_class_1(className: string, addOrRemove: boolean) {
        if (addOrRemove) {
            $('#foo').addClass(className);
        } else {
            $('#foo').removeClass(className);
        }
    }

    function toggle_class_2() {
        $('div.foo').toggleClass(function() {
            if ($(this).parent().is('.bar')) {
                return 'happy';
            } else {
                return 'sad';
            }
        });
    }

    function trigger_0() {
        $('#foo').on('click', function() {
            alert($(this).text());
        });
        $('#foo').trigger('click');
    }

    function trigger_1() {
        $('#foo').on('custom', function(event, param1, param2) {
            alert(param1 + '\n' + param2);
        });
        $('#foo').trigger('custom', ['Custom', 'Event']);
    }

    function unbind_0() {
        $('#foo').unbind();
    }

    function unbind_1() {
        $('#foo').unbind('click');
    }

    function unbind_2() {
        var handler = function() {
            alert('The quick brown fox jumps over the lazy dog.');
        };
        $('#foo').bind('click', handler);
        $('#foo').unbind('click', handler);
    }

    function unbind_3() {
        $('#foo').bind('click', function() {
            alert('The quick brown fox jumps over the lazy dog.');
        });

        // Will NOT work
        $('#foo').unbind('click', function() {
            alert('The quick brown fox jumps over the lazy dog.');
        });
    }

    function unbind_4(handler: never) {
        $('#foo').bind('click.myEvents', handler);
    }

    function unbind_5() {
        $('#foo').unbind('click');
    }

    function unbind_6() {
        $('#foo').unbind('click.myEvents');
    }

    function unbind_7() {
        $('#foo').unbind('.myEvents');
    }

    function unbind_8() {
        var timesClicked = 0;
        $('#foo').bind('click', function(event) {
            alert('The quick brown fox jumps over the lazy dog.');
            timesClicked++;
            if (timesClicked >= 3) {
                $(this).unbind(event);
            }
        });
    }

    function val_0() {
        // Get the value from the selected option in a dropdown
        $('select#foo option:checked').val();

        // Get the value from a dropdown select directly
        $('select#foo').val();

        // Get the value from a checked checkbox
        $('input[type=checkbox][name=bar]:checked').val();

        // Get the value from a set of radio buttons
        $('input[type=radio][name=baz]:checked').val();
    }

    function val_1() {
        $.valHooks.textarea = {
            get: function(elem: HTMLTextAreaElement) {
                return elem.value.replace(/\r?\n/g, '\r\n');
            },
        };
    }

    function val_2() {
        $('input[type=text].tags').val(function(index, value) {
            return value.trim();
        });
    }

    function width_0() {
        // Returns width of browser viewport
        $(window).width();

        // Returns width of HTML document
        $(document).width();
    }

    function wrap_0() {
        $('.inner').wrap('<div class=\'new\'></div>');
    }

    function wrap_1() {
        $('.inner').wrap(function() {
            return '<div class=\'' + $(this).text() + '\'></div>';
        });
    }

    function wrap_all_0() {
        $('.inner').wrapAll('<div class=\'new\' />');
    }

    function wrap_inner_0() {
        $('.inner').wrapInner('<div class=\'new\'></div>');
    }

    function wrap_inner_1() {
        $('.inner').wrapInner(function() {
            return '<div class=\'' + this.nodeValue + '\'></div>';
        });
    }

    function wrap_inner_2(elem: HTMLElement) {
        $(elem).wrapInner('<div class=\'test\'></div>');
        $(elem).wrapInner('<div class="test"></div>');
    }
}
