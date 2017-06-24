/* tslint:disable:no-arg object-literal-shorthand one-variable-per-declaration only-arrow-functions prefer-const prefer-for-of triple-equals no-var */

function examples() {
    function add_0() {
        $('div').css('border', '2px solid red')
            .add('p')
            .css('background', 'yellow');
    }

    function add_1() {
        $('p').add('span').css('background', 'yellow');
    }

    function add_2() {
        $('p').clone().add('<span>Again</span>').appendTo(document.body);
    }

    function add_3() {
        $('p').add(document.getElementById('a')!).css('background', 'yellow');
    }

    function add_4() {
        var collection = $('p');
        // Capture the new collection
        collection = collection.add(document.getElementById('a')!);
        collection.css('background', 'yellow');
    }

    function add_back_0() {
        $('div.left, div.right').find('div, div > p').addClass('border');

        // First Example
        $('div.before-addback').find('p').addClass('background');

        // Second Example
        $('div.after-addback').find('p').addBack().addClass('background');
    }

    function add_class_0() {
        $('p').last().addClass('selected');
    }

    function add_class_1() {
        $('p:last').addClass('selected highlight');
    }

    function add_class_2() {
        $('div').addClass(function(index, currentClass) {
            var addedClass = '';

            if (currentClass === 'red') {
                addedClass = 'green';
                $('p').text('There is one green div');
            }

            return addedClass;
        });
    }

    function after_0() {
        $('p').after('<b>Hello</b>');
    }

    function after_1() {
        $('p').after(document.createTextNode('Hello'));
    }

    function after_2() {
        $('p').after($('b'));
    }

    function ajax_complete_0() {
        $(document).ajaxComplete(function(event, request, settings) {
            $('#msg').append('<li>Request Complete.</li>');
        });
    }

    function ajax_error_0() {
        $(document).ajaxError(function(event, request, settings) {
            $('#msg').append('<li>Error requesting page ' + settings.url + '</li>');
        });
    }

    function ajax_send_0() {
        $(document).ajaxSend(function(event, request, settings) {
            $('#msg').append('<li>Starting request at ' + settings.url + '</li>');
        });
    }

    function ajax_start_0() {
        $(document).ajaxStart(function() {
            $('#loading').show();
        });
    }

    function ajax_stop_0() {
        $(document).ajaxStop(function() {
            $('#loading').hide();
        });
    }

    function ajax_success_0() {
        $(document).ajaxSuccess(function(event, request, settings) {
            $('#msg').append('<li>Successful Request!</li>');
        });
    }

    function all_0() {
        var elementCount = $('*').css('border', '3px solid red').length;
        $('body').prepend('<h3>' + elementCount + ' elements found</h3>');
    }

    function all_1() {
        var elementCount = $('#test').find('*').css('border', '3px solid red').length;
        $('body').prepend('<h3>' + elementCount + ' elements found</h3>');
    }

    function animate_0() {
        // Using multiple unit types within one animation.

        $('#go').click(function() {
            $('#block').animate({
                width: '70%',
                opacity: 0.4,
                marginLeft: '0.6in',
                fontSize: '3em',
                borderWidth: '10px',
            }, 1500);
        });
    }

    function animate_1() {
        $('#right').click(function() {
            $('.block').animate({ left: '+=50px' }, 'slow');
        });

        $('#left').click(function() {
            $('.block').animate({ left: '-=50px' }, 'slow');
        });
    }

    function animate_2() {
        $('#go1').click(function() {
            $('#block1')
                .animate({
                    width: '90%',
                }, {
                    queue: false,
                    duration: 3000,
                })
                .animate({ fontSize: '24px' }, 1500)
                .animate({ borderRightWidth: '15px' }, 1500);
        });

        $('#go2').click(function() {
            $('#block2')
                .animate({ width: '90%' }, 1000)
                .animate({ fontSize: '24px' }, 1000)
                .animate({ borderLeftWidth: '15px' }, 1000);
        });

        $('#go3').click(function() {
            $('#go1').add('#go2').click();
        });

        $('#go4').click(function() {
            $('div').css({
                width: '',
                fontSize: '',
                borderWidth: '',
            });
        });
    }

    function animate_3() {
        $('#go').click(function() {
            $('.block:first').animate({
                left: 100,
            }, {
                duration: 1000,
                step: function(now, fx) {
                    $('.block:gt(0)').css('left', now);
                },
            });
        });
    }

    function animate_4() {
        $('p').animate({
            height: 'toggle',
            opacity: 'toggle',
        }, 'slow');
    }

    function animate_5() {
        $('p').animate({
            left: 50,
            opacity: 1,
        }, 500);
    }

    function animate_6() {
        $('p').animate({
            left: '50px',
            opacity: 1,
        }, {
            duration: 500,
            queue: false,
        });
    }

    function animate_7() {
        $('p').animate({
            opacity: 'show',
        }, 'slow', 'easein');
    }

    function animate_8() {
        $('p').animate({
            height: 'toggle',
            opacity: 'toggle',
        }, {
            duration: 'slow',
        });
    }

    function animate_9() {
        $('p').animate({
            opacity: 'show',
        }, {
            duration: 'slow',
            easing: 'easein',
        });
    }

    function animate_10() {
        $('p').animate({
            height: 200,
            width: 400,
            opacity: 0.5,
        }, 1000, 'linear', function() {
            alert('all done');
        });
    }

    function animated_0() {
        $('#run').click(function() {
            $('div:animated').toggleClass('colored');
        });

        function animateIt() {
            $('#mover').slideToggle('slow', animateIt);
        }

        animateIt();
    }

    function append_0() {
        $('p').append('<strong>Hello</strong>');
    }

    function append_1() {
        $('p').append(document.createTextNode('Hello'));
    }

    function append_2() {
        $('p').append($('strong'));
    }

    function append_to_0() {
        $('span').appendTo('#foo');
    }

    function attr_0() {
        $('input')
            .change(function() {
                var $input = $(this);
                $('p').html('.attr( \'checked\' ): <b>' + $input.attr('checked') + '</b><br>' +
                    '.prop( \'checked\' ): <b>' + $input.prop('checked') + '</b><br>' +
                    '.is( \':checked\' ): <b>' + $input.is(':checked') + '</b>');
            })
            .change();
    }

    function attr_1() {
        var title = $('em').attr('title')!;
        $('div').text(title);
    }

    function attr_2() {
        $('img').attr({
            src: '/resources/hat.gif',
            title: 'jQuery',
            alt: 'jQuery Logo',
        });
        $('div').text($('img').attr('alt')!);
    }

    function attr_3() {
        $('div')
            .attr('id', function(arr) {
                return 'div-id' + arr;
            })
            .each(function() {
                $('span', this).html('(id = \'<b>' + this.id + '</b>\')');
            });
    }

    function attr_4() {
        $('img').attr('src', function() {
            return '/resources/' + this.title;
        });
    }

    function attribute_contains_prefix_0() {
        $('a[hreflang|=\'en\']').css('border', '3px dotted green');
    }

    function attribute_contains_0() {
        $('input[name*=\'man\']').val('has man in it!');
    }

    function attribute_contains_word_0() {
        $('input[name~=\'man\']').val('mr. man is in it!');
    }

    function attribute_ends_with_0() {
        $('input[name$=\'letter\']').val('a letter');
    }

    function attribute_equals_0() {
        $('input[value=\'Hot Fuzz\']').next().text('Hot Fuzz');
    }

    function attribute_not_equal_0() {
        $('input[name!=\'newsletter\']').next().append('<b>; not newsletter</b>');
    }

    function attribute_starts_with_0() {
        $('input[name^=\'news\']').val('news here!');
    }

    function before_0() {
        $('p').before('<b>Hello</b>');
    }

    function before_1() {
        $('p').before(document.createTextNode('Hello'));
    }

    function before_2() {
        $('p').before($('b'));
    }

    function bind_0() {
        $('p').bind('click', function(event) {
            var str = '( ' + event.pageX + ', ' + event.pageY + ' )';
            $('span').text('Click happened! ' + str);
        });
        $('p').bind('dblclick', function() {
            $('span').text('Double-click happened in ' + this.nodeName);
        });
        $('p').bind('mouseenter mouseleave', function(event) {
            $(this).toggleClass('over');
        });
    }

    function bind_1() {
        $('p').bind('click', function() {
            alert($(this).text());
        });
    }

    function bind_2() {
        function handler(event: JQuery.Event<HTMLElement, any>) {
            alert(event.data.foo);
        }

        $('p').bind('click', {
            foo: 'bar',
        }, handler);
    }

    function bind_3() {
        $('form').bind('submit', function() {
            return false;
        });
    }

    function bind_4() {
        $('form').bind('submit', function(event) {
            event.preventDefault();
        });
    }

    function bind_5() {
        $('form').bind('submit', function(event) {
            event.stopPropagation();
        });
    }

    function bind_6() {
        $('p').bind('myCustomEvent', function(e, myName, myValue) {
            $(this).text(myName + ', hi there!');
            $('span')
                .stop()
                .css('opacity', 1)
                .text('myName = ' + myName)
                .fadeIn(30)
                .fadeOut(1000);
        });
        $('button').click(function() {
            $('p').trigger('myCustomEvent', ['John']);
        });
    }

    function bind_7() {
        $('div.test').bind({
            click: function() {
                $(this).addClass('active');
            },
            mouseenter: function() {
                $(this).addClass('inside');
            },
            mouseleave: function() {
                $(this).removeClass('inside');
            },
        });
    }

    function blur_0() {
        $('p').blur();
    }

    function button_0() {
        var input = $(':button').addClass('marked');
        $('div').text('For this type jQuery found ' + input.length + '.');
        // Prevent the form from submitting
        $('form').submit(function(event) {
            event.preventDefault();
        });
    }

    function callbacks_add_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value: string) {
            console.log('foo: ' + value);
        };

        // Another function to also be added to the list
        var bar = function(value: string) {
            console.log('bar: ' + value);
        };

        var callbacks = $.Callbacks();

        // Add the function "foo" to the list
        callbacks.add(foo);

        // Fire the items on the list
        callbacks.fire('hello');
        // Outputs: "foo: hello"

        // Add the function "bar" to the list
        callbacks.add(bar);

        // Fire the items on the list again
        callbacks.fire('world');

        // Outputs:
        // "foo: world"
        // "bar: world"
    }

    function callbacks_disable_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value: string) {
            console.log(value);
        };

        var callbacks = $.Callbacks();

        // Add the above function to the list
        callbacks.add(foo);

        // Fire the items on the list
        callbacks.fire('foo');
        // Outputs: foo

        // Disable further calls being possible
        callbacks.disable();

        // Attempt to fire with "foobar" as an argument
        callbacks.fire('foobar');
        // foobar isn't output
    }

    function callbacks_disabled_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value: string) {
            console.log('foo:' + value);
        };

        var callbacks = $.Callbacks();

        // Add the logging function to the callback list
        callbacks.add(foo);

        // Fire the items on the list, passing an argument
        callbacks.fire('hello');
        // Outputs "foo: hello"

        // Disable the callbacks list
        callbacks.disable();

        // Test the disabled state of the list
        console.log(callbacks.disabled());
        // Outputs: true
    }

    function callbacks_empty_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value1: string, value2: string) {
            console.log('foo: ' + value1 + ',' + value2);
        };

        // Another function to also be added to the list
        var bar = function(value1: string, value2: string) {
            console.log('bar: ' + value1 + ',' + value2);
        };

        var callbacks = $.Callbacks();

        // Add the two functions
        callbacks.add(foo);
        callbacks.add(bar);

        // Empty the callbacks list
        callbacks.empty();

        // Check to ensure all callbacks have been removed
        console.log(callbacks.has(foo));
        // false
        console.log(callbacks.has(bar));
        // false
    }

    function callbacks_fire_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value: string) {
            console.log('foo:' + value);
        };

        var callbacks = $.Callbacks();

        // Add the function "foo" to the list
        callbacks.add(foo);

        // Fire the items on the list
        callbacks.fire('hello'); // Outputs: "foo: hello"
        callbacks.fire('world'); // Outputs: "foo: world"

        // Add another function to the list
        var bar = function(value: string) {
            console.log('bar:' + value);
        };

        // Add this function to the list
        callbacks.add(bar);

        // Fire the items on the list again
        callbacks.fire('hello again');
        // Outputs:
        // "foo: hello again"
        // "bar: hello again"
    }

    function callbacks_fired_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value: string) {
            console.log('foo:' + value);
        };

        var callbacks = $.Callbacks();

        // Add the function "foo" to the list
        callbacks.add(foo);

        // Fire the items on the list
        callbacks.fire('hello'); // Outputs: "foo: hello"
        callbacks.fire('world'); // Outputs: "foo: world"

        // Test to establish if the callbacks have been called
        console.log(callbacks.fired());
    }

    function callbacks_fire_with_0() {
        // A sample logging function to be added to a callbacks list
        var log = function(value1: string, value2: string) {
            console.log('Received: ' + value1 + ',' + value2);
        };

        var callbacks = $.Callbacks();

        // Add the log method to the callbacks list
        callbacks.add(log);

        // Fire the callbacks on the list using the context "window"
        // and an arguments array

        callbacks.fireWith(window, ['foo', 'bar']);
        // Outputs: "Received: foo, bar"
    }

    function callbacks_has_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value1: string, value2: string) {
            console.log('Received: ' + value1 + ',' + value2);
        };

        // A second function which will not be added to the list
        var bar = function(value1: string, value2: string) {
            console.log('foobar');
        };

        var callbacks = $.Callbacks();

        // Add the log method to the callbacks list
        callbacks.add(foo);

        // Determine which callbacks are in the list
        console.log(callbacks.has(foo));
        // true
        console.log(callbacks.has(bar));
        // false
    }

    function callbacks_lock_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value: string) {
            console.log('foo:' + value);
        };

        var callbacks = $.Callbacks();

        // Add the logging function to the callback list
        callbacks.add(foo);

        // Fire the items on the list, passing an argument
        callbacks.fire('hello');
        // Outputs "foo: hello"

        // Lock the callbacks list
        callbacks.lock();

        // Try firing the items again
        callbacks.fire('world');

        // As the list was locked, no items were called,
        // so "world" isn't logged
    }

    function callbacks_lock_1() {
        // Simple function for logging results
        var log = function(value: string) {
            $('#log').append('<p>' + value + '</p>');
        };

        // Two sample functions to be added to a callbacks list
        var foo = function(value: string) {
            log('foo: ' + value);
        };
        var bar = function(value: string) {
            log('bar: ' + value);
        };

        // Create the callbacks object with the "memory" flag
        var callbacks = $.Callbacks('memory');

        // Add the foo logging function to the callback list
        callbacks.add(foo);

        // Fire the items on the list, passing an argument
        callbacks.fire('hello');
        // Outputs "foo: hello"

        // Lock the callbacks list
        callbacks.lock();

        // Try firing the items again
        callbacks.fire('world');
        // As the list was locked, no items were called,
        // so "foo: world" isn't logged

        // Add the foo function to the callback list again
        callbacks.add(foo);

        // Try firing the items again
        callbacks.fire('silentArgument');
        // Outputs "foo: hello" because the argument value was stored in memory

        // Add the bar function to the callback list
        callbacks.add(bar);

        callbacks.fire('youHadMeAtHello');
        // Outputs "bar: hello" because the list is still locked,
        // and the argument value is still stored in memory
    }

    function callbacks_locked_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value: string) {
            console.log('foo: ' + value);
        };

        var callbacks = $.Callbacks();

        // Add the logging function to the callback list
        callbacks.add(foo);

        // Fire the items on the list, passing an argument
        callbacks.fire('hello');
        // Outputs "foo: hello"

        // Lock the callbacks list
        callbacks.lock();

        // Test the lock-state of the list
        console.log(callbacks.locked());
        // true
    }

    function callbacks_remove_0() {
        // A sample logging function to be added to a callbacks list
        var foo = function(value: string) {
            console.log('foo: ' + value);
        };

        var callbacks = $.Callbacks();

        // Add the function "foo" to the list
        callbacks.add(foo);

        // Fire the items on the list
        callbacks.fire('hello');
        // Outputs: "foo: hello"

        // Remove "foo" from the callback list
        callbacks.remove(foo);

        // Fire the items on the list again
        callbacks.fire('world');

        // Nothing output as "foo" is no longer in the list
    }

    function change_0() {
        $('select')
            .change(function() {
                var str = '';
                $('select option:selected').each(function() {
                    str += $(this).text() + ' ';
                });
                $('div').text(str);
            })
            .change();
    }

    function change_1() {
        $('input[type=\'text\']').change(function() {
            // Check input( $( this ).val() ) for validity here
        });
    }

    function checkbox_0() {
        var input = $('form input:checkbox')
            .wrap('<span></span>')
            .parent()
            .css({
                background: 'yellow',
                border: '3px red solid',
            });

        $('div')
            .text('For this type jQuery found ' + input.length + '.')
            .css('color', 'red');

        // Prevent the form from submitting
        $('form').submit(function(event) {
            event.preventDefault();
        });
    }

    function checked_0() {
        var countChecked = function() {
            var n = $('input:checked').length;
            $('div').text(n + (n === 1 ? ' is' : ' are') + ' checked!');
        };
        countChecked();

        $('input[type=checkbox]').on('click', countChecked);
    }

    function checked_1() {
        $('input').on('click', function() {
            $('#log').html($('input:checked').val() + ' is checked!');
        });
    }

    function child_0() {
        $('ul.topnav > li').css('border', '3px double red');
    }

    function children_0() {
        $('#container').click(function(event) {
            $('*').removeClass('hilite');
            var kids = $(event.target).children();
            var len = kids.addClass('hilite').length;

            $('#results span:first').text(len);
            $('#results span:last').text((<HTMLElement> event.target).tagName);

            event.preventDefault();
        });
    }

    function children_1() {
        $('div').children().css('border-bottom', '3px double red');
    }

    function children_2() {
        $('div').children('.selected').css('color', 'blue');
    }

    function class_0() {
        $('.myClass').css('border', '3px solid red');
    }

    function class_1() {
        $('.myclass.otherclass').css('border', '13px solid red');
    }

    function clear_queue_0() {
        $('#start').click(function() {
            var myDiv = $('div');
            myDiv.show('slow');
            myDiv.animate({
                left: '+=200',
            }, 5000);

            myDiv.queue(function() {
                var that = $(this);
                that.addClass('newcolor');
                that.dequeue();
            });

            myDiv.animate({
                left: '-=200',
            }, 1500);
            myDiv.queue(function() {
                var that = $(this);
                that.removeClass('newcolor');
                that.dequeue();
            });
            myDiv.slideUp();
        });

        $('#stop').click(function() {
            var myDiv = $('div');
            myDiv.clearQueue();
            myDiv.stop();
        });
    }

    function click_0() {
        $('p').click(function() {
            $(this).slideUp();
        });
    }

    function click_1() {
        $('p').click();
    }

    function clone_0() {
        $('b').clone().prependTo('p');
    }

    function closest_0() {
        $(document).on('click', function(event) {
            $(event.target).closest('li').toggleClass('hilight');
        });
    }

    function closest_1() {
        var listElements = $('li').css('color', 'blue');
        $(document).on('click', function(event) {
            $(event.target).closest(listElements).toggleClass('hilight');
        });
    }

    function contains_0() {
        $('div:contains(\'John\')').css('text-decoration', 'underline');
    }

    function contents_0() {
        $('p')
            .contents()
            .filter(function() {
                return this.nodeType !== 1;
            })
            .wrap('<b></b>');
    }

    function contents_1() {
        $('#frameDemo').contents().find('a').css('background-color', '#BADA55');
    }

    function contextmenu_0() {
        $('p').contextmenu(function() {
            alert('Hello World!');
        });
    }

    function contextmenu_1() {
        var div = $('div:first');
        div.contextmenu(function() {
            div.toggleClass('contextmenu');
        });
    }

    function css_0() {
        $('div').click(function() {
            var color = $(this).css('background-color');
            $('#result').html('That div is <span style=\'color:' +
                color + ';\'>' + color + '</span>.');
        });
    }

    function css_1() {
        $('div').click(function() {
            var html = ['The clicked div has the following styles:'];

            var styleProps = $(this).css([
                'width', 'height', 'color', 'background-color',
            ]);
            $.each(styleProps, function(prop, value) {
                html.push(prop + ': ' + value);
            });

            $('#result').html(html.join('<br>'));
        });
    }

    function css_2() {
        $('p').on('mouseover', function() {
            $(this).css('color', 'red');
        });
    }

    function css_3() {
        $('#box').one('click', function() {
            $(this).css('width', '+=200');
        });
    }

    function css_4() {
        var words = $('p').first().text().split(/\s+/);
        var text = words.join('</span> <span>');
        $('p').first().html('<span>' + text + '</span>');
        $('span').on('click', function() {
            $(this).css('background-color', 'yellow');
        });
    }

    function css_5() {
        $('p')
            .on('mouseenter', function() {
                $(this).css({
                    'background-color': 'yellow',
                    'font-weight': 'bolder',
                });
            })
            .on('mouseleave', function() {
                var styles = {
                    backgroundColor: '#ddd',
                    fontWeight: '',
                };
                $(this).css(styles);
            });
    }

    function css_6() {
        $('div').on('click', function() {
            $(this).css({
                width: function(index, value) {
                    return parseFloat(value) * 1.2;
                },
                height: function(index, value) {
                    return parseFloat(value) * 1.2;
                },
            });
        });
    }

    function data_0() {
        $('div').data('test', { first: 16, last: 'pizza!' });
        $('span:first').text($('div').data('test').first);
        $('span:last').text($('div').data('test').last);
    }

    function data_1() {
        $('button').click(function() {
            var value;

            switch ($('button').index(this)) {
                case 0 :
                    value = $('div').data('blah');
                    break;
                case 1 :
                    $('div').data('blah', 'hello');
                    value = 'Stored!';
                    break;
                case 2 :
                    $('div').data('blah', 86);
                    value = 'Stored!';
                    break;
                case 3 :
                    $('div').removeData('blah');
                    value = 'Removed!';
                    break;
            }

            $('span').text('' + value);
        });
    }

    function data_2() {
        $('button').click(function() {
            var value;

            switch ($('button').index(this)) {
                case 0 :
                    value = $('div').data('blah');
                    break;
                case 1 :
                    $('div').data('blah', 'hello');
                    value = 'Stored!';
                    break;
                case 2 :
                    $('div').data('blah', 86);
                    value = 'Stored!';
                    break;
                case 3 :
                    $('div').removeData('blah');
                    value = 'Removed!';
                    break;
            }

            $('span').text('' + value);
        });
    }

    function dblclick_0() {
        $('p').dblclick(function() {
            alert('Hello World!');
        });
    }

    function dblclick_1() {
        var divdbl = $('div:first');
        divdbl.dblclick(function() {
            divdbl.toggleClass('dbl');
        });
    }

    function deferred_always_0() {
        $.get('test.php').always(function() {
            alert('$.get completed with success or error callback arguments');
        });
    }

    function deferred_catch_0() {
        $.get('test.php')
            .then(function() {
                alert('$.get succeeded');
            })
            .catch(function() {
                alert('$.get failed!');
            });
    }

    function deferred_done_0() {
        $.get('test.php').done(function() {
            alert('$.get succeeded');
        });
    }

    function deferred_done_1() {
        // 3 functions to call when the Deferred object is resolved
        function fn1() {
            $('p').append(' 1 ');
        }

        function fn2() {
            $('p').append(' 2 ');
        }

        function fn3(n: string) {
            $('p').append(n + ' 3 ' + n);
        }

        // Create a deferred object
        var dfd = $.Deferred();

        // Add handlers to be called when dfd is resolved
        dfd
        // .done() can take any number of functions or arrays of functions
            .done([fn1, fn2], fn3, [fn2, fn1])
            // We can chain done methods, too
            .done(function(n) {
                $('p').append(n + ' we\'re done.');
            });

        // Resolve the Deferred object when the button is clicked
        $('button').on('click', function() {
            dfd.resolve('and');
        });
    }

    function deferred_fail_0() {
        $.get('test.php')
            .done(function() {
                alert('$.get succeeded');
            })
            .fail(function() {
                alert('$.get failed!');
            });
    }

    function deferred_pipe_0() {
        var defer = $.Deferred<number>(),
            filtered = defer.pipe(function(value) {
                return value * 2;
            });

        defer.resolve(5);
        filtered.done(function(value) {
            alert('Value is ( 2*5 = ) 10: ' + value);
        });
    }

    function deferred_pipe_1() {
        var defer = $.Deferred<number>(),
            filtered = defer.pipe(null, function(value) {
                return value * 3;
            });

        defer.reject(6);
        filtered.fail(function(value) {
            alert('Value is ( 3*6 = ) 18: ' + value);
        });
    }

    function deferred_pipe_2(url: string, url2: string) {
        var request = $.ajax(url, { dataType: 'json' }),
            chained = request.pipe(function(data) {
                return $.ajax(url2, { data: { user: data.userId } });
            });

        chained.done(function(data) {
            // data retrieved from url2 as provided by the first request
        });
    }

    function deferred_promise_0() {
        function asyncEvent() {
            var dfd = jQuery.Deferred<string>();

            // Resolve after a random interval
            setTimeout(function() {
                dfd.resolve('hurray');
            }, Math.floor(400 + Math.random() * 2000));

            // Reject after a random interval
            setTimeout(function() {
                dfd.reject('sorry');
            }, Math.floor(400 + Math.random() * 2000));

            // Show a "working..." message every half-second
            setTimeout(function working() {
                if (dfd.state() === 'pending') {
                    dfd.notify('working... ');
                    setTimeout(working, 500);
                }
            }, 1);

            // Return the Promise so caller can't change the Deferred
            return dfd.promise();
        }

        // Attach a done, fail, and progress handler for the asyncEvent
        $.when(asyncEvent()).then(
            function(status) {
                status === 3;
                alert(status + ', things are going well');
            },
            function(status) {
                alert(status + ', you fail this time');
            },
            function(status) {
                // $('body').append(status);
            },
        );
    }

    function deferred_promise_1() {
        // Existing object
        var obj = {
                hello: function(name: string) {
                    alert('Hello ' + name);
                },
            },
            // Create a Deferred
            defer = $.Deferred<string>();

        // Set object as a promise
        var _obj = defer.promise(obj);

        // Resolve the deferred
        defer.resolve('John');

        // Use the object as a Promise
        _obj.done(function(name) {
            _obj.hello(name); // Will alert "Hello John"
        });
        /// TODO: This doesn't work even though .done() returns this
        //     .hello('Karl'); // Will alert "Hello Karl"
    }

    function deferred_then_0() {
        $.get('test.php').then(
            function() {
                alert('$.get succeeded');
            }, function() {
                alert('$.get failed!');
            },
        );
    }

    function deferred_then_1() {
        var filterResolve = function() {
            var defer = $.Deferred<number>(),
                filtered = defer.then(function(value) {
                    return value * 2;
                });

            defer.resolve(5);
            filtered.done(function(value) {
                $('p').html('Value is ( 2*5 = ) 10: ' + value);
            });
        };

        $('button').on('click', filterResolve);
    }

    function deferred_then_2() {
        var defer = $.Deferred(),
            filtered = defer.then(null, function(value) {
                return value * 3;
            });

        defer.reject(6);
        filtered.fail(function(value) {
            alert('Value is ( 3*6 = ) 18: ' + value);
        });
    }

    function deferred_then_3(url: string, url2: string) {
        var request = $.ajax(url, { dataType: 'json' }),
            chained = request.then(function(data) {
                return $.ajax(url2, { data: { user: data.userId } });
            });

        chained.done(function(data) {
            // data retrieved from url2 as provided by the first request
        });
    }

    function delay_0() {
        $('button').click(function() {
            $('div.first').slideUp(300).delay(800).fadeIn(400);
            $('div.second').slideUp(300).fadeIn(400);
        });
    }

    function delegate_0() {
        $('body').delegate('p', 'click', function() {
            $(this).after('<p>Another paragraph!</p>');
        });
    }

    function delegate_1() {
        $('body').delegate('p', 'click', function() {
            alert($(this).text());
        });
    }

    function delegate_2() {
        $('body').delegate('a', 'click', function() {
            return false;
        });
    }

    function delegate_3() {
        $('body').delegate('a', 'click', function(event) {
            event.preventDefault();
        });
    }

    function delegate_4() {
        $('body').delegate('p', 'myCustomEvent', function(e, myName, myValue) {
            $(this).text('Hi there!');
            $('span')
                .stop()
                .css('opacity', 1)
                .text('myName = ' + myName)
                .fadeIn(30)
                .fadeOut(1000);
        });
        $('button').click(function() {
            $('p').trigger('myCustomEvent');
        });
    }

    function dequeue_0() {
        $('button').click(function() {
            $('div')
                .animate({ left: '+=200px' }, 2000)
                .animate({ top: '0px' }, 600)
                .queue(function() {
                    $(this).toggleClass('red').dequeue();
                })
                .animate({ left: '10px', top: '30px' }, 700);
        });
    }

    function descendant_0() {
        $('form input').css('border', '2px dotted blue');
        $('form fieldset input').css('backgroundColor', 'yellow');
    }

    function detach_0() {
        $('p').click(function() {
            $(this).toggleClass('off');
        });
        var p: JQuery | null;
        $('button').click(function() {
            if (p) {
                p.appendTo('body');
                p = null;
            } else {
                p = $('p').detach();
            }
        });
    }

    function disabled_0() {
        $('input:disabled').val('this is it');
    }

    function each_0() {
        $(document.body).click(function() {
            $('div').each(function(i) {
                if (this.style.color !== 'blue') {
                    this.style.color = 'blue';
                } else {
                    this.style.color = '';
                }
            });
        });
    }

    function each_1() {
        $('span').click(function() {
            $('li').each(function() {
                $(this).toggleClass('example');
            });
        });
    }

    function each_2() {
        $('button').click(function() {
            $('div').each(function(index, element) {
                // element == this
                $(element).css('backgroundColor', 'yellow');
                if ($(this).is('#stop')) {
                    $('span').text('Stopped at div index #' + index);
                    return false;
                }
            });
        });
    }

    function element_0() {
        $('div').css('border', '9px solid red');
    }

    function empty_0() {
        $('td:empty')
            .text('Was empty!')
            .css('background', 'rgb(255,220,200)');
    }

    function empty_1() {
        $('button').click(function() {
            $('p').empty();
        });
    }

    function enabled_0() {
        $('input:enabled').val('this is it');
    }

    function end_1() {
        $('p')
            .find('span')
            .end()
            .css('border', '2px red solid');
    }

    function eq_0() {
        $('td:eq( 2 )').css('color', 'red');
    }

    function eq_1() {
        // Applies yellow background color to a single <li>
        $('ul.nav li:eq(1)').css('backgroundColor', '#ff0');

        // Applies italics to text of the second <li> within each <ul class="nav">
        $('ul.nav').each(function(index) {
            $(this).find('li:eq(1)').css('fontStyle', 'italic');
        });

        // Applies red text color to descendants of <ul class="nav">
        // for each <li> that is the second child of its parent
        $('ul.nav li:nth-child(2)').css('color', 'red');
    }

    function eq_2() {
        $('li:eq(-2)').addClass('foo');
    }

    function eq_3() {
        $('body').find('div').eq(2).addClass('blue');
    }

    function even_0() {
        $('tr:even').css('background-color', '#bbf');
    }

    function event_current_target_0() {
        $('p').click(function(event) {
            alert(event.currentTarget === this); // true
        });
    }

    function event_data_0() {
        var logDiv = $('#log');

        for (var i = 0; i < 5; i++) {
            const j = i;
            $('button').eq(i).on('click', { value: i }, function(event) {
                var msgs = [
                    'button = ' + $(this).index(),
                    'event.data.value = ' + event.data.value,
                    'i = ' + j,
                ];
                logDiv.append(msgs.join(', ') + '<br>');
            });
        }
    }

    function event_delegate_target_0() {
        $('.box').on('click', 'button', function(event) {
            $(event.delegateTarget).css('background-color', 'red');
        });
    }

    function event_is_default_prevented_0() {
        $('a').click(function(event) {
            alert(event.isDefaultPrevented()); // false
            event.preventDefault();
            alert(event.isDefaultPrevented()); // true
        });
    }

    function event_is_immediate_propagation_stopped_0() {
        function immediatePropStopped(event: JQuery.Event) {
            var msg = '';
            if (event.isImmediatePropagationStopped()) {
                msg = 'called';
            } else {
                msg = 'not called';
            }
            $('#stop-log').append('<div>' + msg + '</div>');
        }

        $('button').click(function(event) {
            immediatePropStopped(event);
            event.stopImmediatePropagation();
            immediatePropStopped(event);
        });
    }

    function event_is_propagation_stopped_0() {
        function propStopped(event: JQuery.Event) {
            var msg = '';
            if (event.isPropagationStopped()) {
                msg = 'called';
            } else {
                msg = 'not called';
            }
            $('#stop-log').append('<div>' + msg + '</div>');
        }

        $('button').click(function(event) {
            propStopped(event);
            event.stopPropagation();
            propStopped(event);
        });
    }

    function event_meta_key_0() {
        $('#checkMetaKey').click(function(event) {
            $('#display').text(event.metaKey);
        });
    }

    function event_namespace_0() {
        $('p').on('test.something', function(event) {
            alert(event.namespace);
        });
        $('button').click(function(event) {
            $('p').trigger('test.something');
        });
    }

    function event_page_x_0() {
        $(document).on('mousemove', function(event) {
            $('#log').text('pageX: ' + event.pageX + ', pageY: ' + event.pageY);
        });
    }

    function event_page_y_0() {
        $(document).on('mousemove', function(event) {
            $('#log').text('pageX: ' + event.pageX + ', pageY: ' + event.pageY);
        });
    }

    function event_prevent_default_0() {
        $('a').click(function(event) {
            event.preventDefault();
            $('<div>')
                .append('default ' + event.type + ' prevented')
                .appendTo('#log');
        });
    }

    function event_related_target_0() {
        $('a').mouseout(function(event) {
            alert((<HTMLElement> event.relatedTarget).nodeName); // "DIV"
        });
    }

    function event_result_0() {
        $('button').click(function(event) {
            return 'hey';
        });
        $('button').click(function(event) {
            $('p').html(event.result);
        });
    }

    function event_stop_immediate_propagation_0() {
        $('p').click(function(event) {
            event.stopImmediatePropagation();
        });
        $('p').click(function(event) {
            // This function won't be executed
            $(this).css('background-color', '#f00');
        });
        $('div').click(function(event) {
            // This function will be executed
            $(this).css('background-color', '#f00');
        });
    }

    function event_stop_propagation_0() {
        $('p').click(function(event) {
            event.stopPropagation();
            // Do something
        });
    }

    function event_target_0() {
        $('body').click(function(event) {
            $('#log').html('clicked: ' + (<HTMLElement> event.target).nodeName);
        });
    }

    function event_target_1() {
        function handler(event: JQuery.Event) {
            var target = $(event.target);
            if (target.is('li')) {
                target.children().toggle();
            }
        }

        $('ul').click(handler).find('ul').hide();
    }

    function event_time_stamp_0() {
        var last: number,
            diff: number;
        $('div').click(function(event) {
            if (last) {
                diff = event.timeStamp - last;
                $('div').append('time since last event: ' + diff + '<br>');
            } else {
                $('div').append('Click again.<br>');
            }
            last = event.timeStamp;
        });
    }

    function event_type_0() {
        $('a').click(function(event) {
            alert(event.type); // "click"
        });
    }

    function event_which_0() {
        $('#whichkey').on('keydown', function(event) {
            $('#log').html(event.type + ': ' + event.which);
        });
    }

    function event_which_1() {
        $('#whichkey').on('mousedown', function(event) {
            $('#log').html(event.type + ': ' + event.which);
        });
    }

    function fade_in_0() {
        $(document.body).click(function() {
            $('div:hidden:first').fadeIn('slow');
        });
    }

    function fade_in_1() {
        $('a').click(function() {
            $('div').fadeIn(3000, function() {
                $('span').fadeIn(100);
            });
            return false;
        });
    }

    function fade_out_0() {
        $('p').click(function() {
            $('p').fadeOut('slow');
        });
    }

    function fade_out_1() {
        $('span').click(function() {
            $(this).fadeOut(1000, function() {
                $('div').text('\'' + $(this).text() + '\' has faded!');
                $(this).remove();
            });
        });
        $('span').hover(function() {
            $(this).addClass('hilite');
        }, function() {
            $(this).removeClass('hilite');
        });
    }

    function fade_out_2() {
        $('#btn1').click(function() {
            function complete(this: HTMLElement) {
                $('<div>').text(this.id).appendTo('#log');
            }

            $('#box1').fadeOut(1600, 'linear', complete);
            $('#box2').fadeOut(1600, complete);
        });

        $('#btn2').click(function() {
            $('div').show();
            $('#log').empty();
        });
    }

    function fade_to_0() {
        $('p:first').click(function() {
            $(this).fadeTo('slow', 0.33);
        });
    }

    function fade_to_1() {
        $('div').click(function() {
            $(this).fadeTo('fast', Math.random());
        });
    }

    function fade_to_2() {
        var getPos = function(n: number) {
            return (Math.floor(n) * 90) + 'px';
        };
        $('p').each(function(n) {
            var r = Math.floor(Math.random() * 3);
            var tmp = $(this).text();
            $(this).text($('p:eq(' + r + ')').text());
            $('p:eq(' + r + ')').text(tmp);
            $(this).css('left', getPos(n));
        });
        $('div')
            .each(function(n) {
                $(this).css('left', getPos(n));
            })
            .css('cursor', 'pointer')
            .click(function() {
                $(this).fadeTo(250, 0.25, function() {
                    $(this)
                        .css('cursor', '')
                        .prev()
                        .css({
                            'font-weight': 'bolder',
                            'font-style': 'italic',
                        });
                });
            });
    }

    function fade_toggle_0() {
        $('button:first').click(function() {
            $('p:first').fadeToggle('slow', 'linear');
        });
        $('button:last').click(function() {
            $('p:last').fadeToggle('fast', function() {
                $('#log').append('<div>finished</div>');
            });
        });
    }

    function file_0() {
        var input = $('input:file').css({
            background: 'yellow',
            border: '3px red solid',
        });
        $('div')
            .text('For this type jQuery found ' + input.length + '.')
            .css('color', 'red');
        $('form').submit(function(event) {
            event.preventDefault();
        });
    }

    function filter_0() {
        $('div')
            .css('background', '#c8ebcc')
            .filter('.middle')
            .css('border-color', 'red');
    }

    function filter_1() {
        $('div')
            .css('background', '#b4b0da')
            .filter(function(index) {
                return index === 1 || $(this).attr('id') === 'fourth';
            })
            .css('border', '3px double red');
    }

    function filter_2() {
        $('div').filter(document.getElementById('unique')!);
    }

    function filter_3() {
        $('div').filter($('#unique'));
    }

    function find_0() {
        $('p').find('span').css('color', 'red');
    }

    function find_1() {
        var spans = $('span');
        $('p').find(spans).css('color', 'red');
    }

    function find_2() {
        var newText = $('p').text().split(' ').join('</span> <span>');
        newText = '<span>' + newText + '</span>';

        $('p')
            .html(newText)
            .find('span')
            .hover(function() {
                $(this).addClass('hilite');
            }, function() {
                $(this).removeClass('hilite');
            })
            .end()
            .find(':contains(\'t\')')
            .css({
                'font-style': 'italic',
                'font-weight': 'bolder',
            });
    }

    function finish_0() {
        var horiz = $('#path').width()! - 20,
            vert = $('#path').height()! - 20;

        var btns: { [key: string]: () => void; } = {
            bstt: function() {
                $('div.box').stop(true, true);
            },
            bs: function() {
                $('div.box').stop();
            },
            bsft: function() {
                $('div.box').stop(false, true);
            },
            bf: function() {
                $('div.box').finish();
            },
            bcf: function() {
                $('div.box').clearQueue().finish();
            },
            bsff: function() {
                $('div.box').stop(false, false);
            },
            bstf: function() {
                $('div.box').stop(true, false);
            },
            bcs: function() {
                $('div.box').clearQueue().stop();
            },
        };

        $('button.b').on('click', function() {
            btns[this.id]();
        });

        $('#go').on('click', function() {
            $('.box')
                .clearQueue()
                .stop()
                .css({
                    left: 10,
                    top: 10,
                })
                .animate({
                    top: vert,
                }, 3000)
                .animate({
                    left: horiz,
                }, 3000)
                .animate({
                    top: 10,
                }, 3000);
        });
    }

    function first_child_0() {
        $('div span:first-child')
            .css('text-decoration', 'underline')
            .hover(function() {
                $(this).addClass('sogreen');
            }, function() {
                $(this).removeClass('sogreen');
            });
    }

    function first_of_type_0() {
        $('span:first-of-type').addClass('fot');
    }

    function first_0() {
        $('tr:first').css('font-style', 'italic');
    }

    function first_1() {
        $('p span').first().addClass('highlight');
    }

    function focus_0() {
        $('#content').delegate('*', 'focus blur', function() {
            var elem = $(this);
            setTimeout(function() {
                elem.toggleClass('focused', elem.is(':focus'));
            }, 0);
        });
    }

    function focus_1() {
        $('input').focus(function() {
            $(this).next('span').css('display', 'inline').fadeOut(1000);
        });
    }

    function focus_2() {
        $('input[type=text]').focus(function() {
            $(this).blur();
        });
    }

    function focus_3() {
        $(document).ready(function() {
            $('#login').focus();
        });
    }

    function focusin_0() {
        $('p').focusin(function() {
            $(this).find('span').css('display', 'inline').fadeOut(1000);
        });
    }

    function get_0() {
        $('*', document.body).click(function(event) {
            event.stopPropagation();
            var domElement = $(this).get(0);
            $('span:first').text('Clicked on - ' + domElement.nodeName);
        });
    }

    function get_1() {
        function display(divs: HTMLElement[]) {
            var a: any[] = [];
            for (var i = 0; i < divs.length; i++) {
                a.push(divs[i].innerHTML);
            }
            $('span').text(a.join(' '));
        }

        display($('div').get().reverse());
    }

    function gt_0() {
        $('td:gt(4)').css('backgroundColor', 'yellow');
        $('td:gt(-2)').css('color', 'red');
    }

    function attribute_has_0() {
        // Using .one() so the handler is executed at most once
        // per element per event type
        $('div[id]').one('click', function() {
            var idString = $(this).text() + ' = ' + $(this).attr('id');
            $(this).text(idString);
        });
    }

    function has_0() {
        $('div:has(p)').addClass('test');
    }

    function has_1() {
        $('ul').append('<li>' +
            ( $('ul').has('li').length ? 'Yes' : 'No' ) +
            '</li>');
        $('ul').has('li').addClass('full');
    }

    function has_class_0() {
        $('#result1').append($('p:first').hasClass('selected').toString());
        $('#result2').append($('p:last').hasClass('selected').toString());
        $('#result3').append($('p').hasClass('selected').toString());
    }

    function header_0() {
        $(':header').css({ background: '#ccc', color: 'blue' });
    }

    function height_0() {
        function showHeight(element: string, height: number) {
            $('div').text('The height for the ' + element + ' is ' + height + 'px.');
        }

        $('#getp').click(function() {
            showHeight('paragraph', $('p').height()!);
        });
        $('#getd').click(function() {
            showHeight('document', $(document).height()!);
        });
        $('#getw').click(function() {
            showHeight('window', $(window).height()!);
        });
    }

    function height_1() {
        $('div').one('click', function() {
            $(this).height(30).css({
                cursor: 'auto',
                backgroundColor: 'green',
            });
        });
    }

    function hidden_0() {
        // In some browsers :hidden includes head, title, script, etc...
        var hiddenElements = $('body').find(':hidden').not('script');

        $('span:first').text('Found ' + hiddenElements.length + ' hidden elements total.');
        $('div:hidden').show(3000);
        $('span:last').text('Found ' + $('input:hidden').length + ' hidden inputs.');
    }

    function hide_0() {
        $('p').hide();
        $('a').click(function(event) {
            event.preventDefault();
            $(this).hide();
        });
    }

    function hide_1() {
        $('button').click(function() {
            $('p').hide('slow');
        });
    }

    function hide_2() {
        $('#hider').click(function() {
            $('span:last-child').hide('fast', function() {
                // Use arguments.callee so we don't need a named function
                $(this).prev().hide('fast', arguments.callee as any);
            });
        });
        $('#shower').click(function() {
            $('span').show(2000);
        });
    }

    function hide_3() {
        for (var i = 0; i < 5; i++) {
            $('<div>').appendTo(document.body);
        }
        $('div').click(function() {
            $(this).hide(2000, function() {
                $(this).remove();
            });
        });
    }

    function hover_0() {
        $('li')
            .filter(':odd')
            .hide()
            .end()
            .filter(':even')
            .hover(function() {
                $(this)
                    .toggleClass('active')
                    .next()
                    .stop(true, true)
                    .slideToggle();
            });
    }

    function html_0() {
        $('p').click(function() {
            var htmlString = $(this).html();
            $(this).text(htmlString);
        });
    }

    function html_1() {
        $('div').html('<span class=\'red\'>Hello <b>Again</b></span>');
    }

    function html_2() {
        $('div').html('<b>Wow!</b> Such excitement...');
        $('div b')
            .append(document.createTextNode('!!!'))
            .css('color', 'red');
    }

    function id_0() {
        $('#myDiv').css('border', '3px solid red');
    }

    function id_1() {
        $('#myID\\.entry\\[1\\]').css('border', '3px solid red');
    }

    function image_0() {
        var input = $('input:image').css({
            background: 'yellow',
            border: '3px red solid',
        });
        $('div')
            .text('For this type jQuery found ' + input.length + '.')
            .css('color', 'red');
        $('form').submit(function(event) {
            event.preventDefault();
        });
    }

    function index_0() {
        $('div').click(function() {
            // `this` is the DOM element that was clicked
            var index = $('div').index(this);
            $('span').text('That was div index #' + index);
        });
    }

    function index_1() {
        var listItem = $('#bar');
        $('div').html('Index: ' + $('li').index(listItem));
    }

    function index_2() {
        var listItems = $('li:gt(0)');
        $('div').html('Index: ' + $('li').index(listItems));
    }

    function index_3() {
        $('div').html('Index: ' + $('#bar').index('li'));
    }

    function index_4() {
        var barIndex = $('#bar').index();
        $('div').html('Index: ' + barIndex);
    }

    function index_5() {
        var foobar = $('li').index($('#foobar'));
        $('div').html('Index: ' + foobar);
    }

    function inner_height_0() {
        var p = $('p:first');
        $('p:last').text('innerHeight:' + p.innerHeight());
    }

    function inner_height_1() {
        var modHeight = 70;
        $('div').one('click', function() {
            $(this).innerHeight(modHeight).addClass('mod');
            modHeight -= 8;
        });
    }

    function inner_width_0() {
        var p = $('p:first');
        $('p:last').text('innerWidth:' + p.innerWidth());
    }

    function inner_width_1() {
        var modWidth = 60;
        $('div').one('click', function() {
            $(this).innerWidth(modWidth).addClass('mod');
            modWidth -= 8;
        });
    }

    function input_0() {
        var allInputs = $(':input');
        var formChildren = $('form > *');
        $('#messages').text('Found ' + allInputs.length + ' inputs and the form has ' +
            formChildren.length + ' children.');

        $('form').submit(function(event) {
            event.preventDefault();
        });
    }

    function insert_after_0() {
        $('p').insertAfter('#foo');
    }

    function insert_before_0() {
        $('p').insertBefore('#foo');
    }

    function is_0() {
        $('div').one('click', function() {
            if ($(this).is(':first-child')) {
                $('p').text('It\'s the first div.');
            } else if ($(this).is('.blue,.red')) {
                $('p').text('It\'s a blue or red div.');
            } else if ($(this).is(':contains(\'Peter\')')) {
                $('p').text('It\'s Peter!');
            } else {
                $('p').html('It\'s nothing <em>special</em>.');
            }
            $('p').hide().slideDown('slow');
            $(this).css({
                'border-style': 'inset',
                cursor: 'default',
            });
        });
    }

    function is_1() {
        var isFormParent = $('input[type=\'checkbox\']').parent().is('form');
        $('div').text('isFormParent = ' + isFormParent);
    }

    function is_2() {
        var isFormParent = $('input[type=\'checkbox\']').parent().is('form');
        $('div').text('isFormParent = ' + isFormParent);
    }

    function is_3() {
        var alt = $('#browsers li:nth-child(2n)').css('background', '#0ff');
        $('li').click(function() {
            var li = $(this);
            if (li.is(alt)) {
                li.slideUp();
            } else {
                li.css('background', 'red');
            }
        });
    }

    function is_4() {
        var alt = $('#browsers li:nth-child(2n)').css('background', '#0ff');
        $('li').click(function() {
            if (alt.is(this)) {
                $(this).slideUp();
            } else {
                $(this).css('background', 'red');
            }
        });
    }

    function jquery_0() {
        var a = { what: 'A regular JS object' },
            b = $('body');

        // if (a.jquery) { // Falsy, since it's undefined
        //     alert('a is a jQuery object!');
        // }

        if (b.jquery) { // Truthy, since it's a string
            alert('b is a jQuery object!');
        }
    }

    function jquery_1() {
        alert('You are running jQuery version: ' + $.fn.jquery);
    }

    function jQuery_ajax_0() {
        $.ajax({
            method: 'POST',
            url: 'some.php',
            data: { name: 'John', location: 'Boston' },
        })
            .done(function(msg) {
                alert('Data Saved: ' + msg);
            });
    }

    function jQuery_ajax_1() {
        $.ajax({
            url: 'test.html',
            cache: false,
        })
            .done(function(html) {
                $('#results').append(html);
            });
    }

    function jQuery_ajax_2(handleResponse: JQuery.jqXHR.DoneCallback) {
        var xmlDocument = 'create xml document';
        var xmlRequest = $.ajax({
            url: 'page.php',
            processData: false,
            data: xmlDocument,
        });

        xmlRequest.done(handleResponse);
    }

    function jQuery_ajax_3() {
        var menuId = $('ul.nav').first().attr('id');
        var request = $.ajax({
            url: 'script.php',
            method: 'POST',
            data: { id: menuId },
            dataType: 'html',
        });

        request.done(function(msg) {
            $('#log').html(msg);
        });

        request.fail(function(jqXHR, textStatus) {
            alert('Request failed: ' + textStatus);
        });
    }

    function jQuery_ajax_4() {
        $.ajax({
            method: 'GET',
            url: 'test.js',
            dataType: 'script',
        });
    }

    function jQuery_ajax_setup_0(myData: JQuery.PlainObject) {
        $.ajaxSetup({
            url: '/xmlhttp/',
            global: false,
            type: 'POST',
        });
        $.ajax({ data: myData });
    }

    function jQuery_contains_0() {
        $.contains(document.documentElement, document.body); // true
        $.contains(document.body, document.documentElement); // false
    }

    function jQuery_data_0() {
        var div = $('div')[0];
        jQuery.data(div, 'test', {
            first: 16,
            last: 'pizza!',
        });
        $('span:first').text(jQuery.data(div, 'test').first);
        $('span:last').text(jQuery.data(div, 'test').last);
    }

    function jQuery_data_1() {
        $('button').click(function() {
            var value,
                div = $('div')[0];
            switch ($('button').index(this)) {
                case 0 :
                    value = jQuery.data(div, 'blah');
                    break;
                case 1 :
                    jQuery.data(div, 'blah', 'hello');
                    value = 'Stored!';
                    break;
                case 2 :
                    jQuery.data(div, 'blah', 86);
                    value = 'Stored!';
                    break;
                case 3 :
                    jQuery.removeData(div, 'blah');
                    value = 'Removed!';
                    break;
            }
            $('span').text('' + value);
        });
    }

    function jQuery_dequeue_0() {
        $('button').click(function() {
            $('div')
                .animate({ left: '+=200px' }, 2000)
                .animate({ top: '0px' }, 600)
                .queue(function() {
                    $(this).toggleClass('red');
                    $.dequeue(this);
                })
                .animate({ left: '10px', top: '30px' }, 700);
        });
    }

    function jQuery_each_0() {
        var arr = ['one', 'two', 'three', 'four', 'five'];
        var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };

        jQuery.each(arr, function(i, val) {
            $('#' + val).text('Mine is ' + val + '.');

            // Will stop running after "three"
            return ( val !== 'three' );
        });

        jQuery.each(obj, function(i, val) {
            $('#' + i).append(document.createTextNode(' - ' + val));
        });
    }

    function jQuery_each_1() {
        $.each(['a', 'b', 'c'], function(i, l) {
            alert('Index #' + i + ': ' + l);
        });
    }

    function jQuery_each_2() {
        $.each({ name: 'John', lang: 'JS' }, function(k, v) {
            alert('Key: ' + k + ', Value: ' + v);
        });
    }

    function jQuery_each_3() {
        var arr = ['one', 'two', 'three', 'four', 'five'];
        var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };

        jQuery.each(arr, function(i, val) {
            $('#' + val).text('Mine is ' + val + '.');

            // Will stop running after "three"
            return ( val !== 'three' );
        });

        jQuery.each(obj, function(i, val) {
            $('#' + i).append(document.createTextNode(' - ' + val));
        });
    }

    function jQuery_each_4() {
        $.each(['a', 'b', 'c'], function(i, l) {
            alert('Index #' + i + ': ' + l);
        });
    }

    function jQuery_each_5() {
        $.each({ name: 'John', lang: 'JS' }, function(k, v) {
            alert('Key: ' + k + ', Value: ' + v);
        });
    }

    function jQuery_error_0() {
        jQuery.error = console.error;
    }

    function jQuery_escape_selector_0() {
        $.escapeSelector('#target'); // "\#target"
    }

    function jQuery_escape_selector_1() {
        $('div').find('.' + $.escapeSelector('.box'));
    }

    function jQuery_extend_0() {
        var object1 = {
            apple: 0,
            banana: { weight: 52, price: 100 },
            cherry: 97,
        };
        var object2 = {
            banana: { price: 200 },
            durian: 100,
        };

        // Merge object2 into object1
        $.extend(object1, object2);

        // Assuming JSON.stringify - not available in IE<8
        $('#log').append(JSON.stringify(object1));
    }

    function jQuery_extend_1() {
        var object1 = {
            apple: 0,
            banana: { weight: 52, price: 100 },
            cherry: 97,
        };
        var object2 = {
            banana: { price: 200 },
            durian: 100,
        };

        // Merge object2 into object1, recursively
        $.extend(true, object1, object2);

        // Assuming JSON.stringify - not available in IE<8
        $('#log').append(JSON.stringify(object1));
    }

    function jQuery_extend_2() {
        var defaults = { validate: false, limit: 5, name: 'foo' };
        var options = { validate: true, name: 'bar' };

        // Merge defaults and options, without modifying defaults
        var settings = $.extend({}, defaults, options);

        // Assuming JSON.stringify - not available in IE<8
        $('#log').append('<div><b>defaults -- </b>' + JSON.stringify(defaults) + '</div>');
        $('#log').append('<div><b>options -- </b>' + JSON.stringify(options) + '</div>');
        $('#log').append('<div><b>settings -- </b>' + JSON.stringify(settings) + '</div>');
    }

    function jQuery_fx_interval_0() {
        jQuery.fx.interval = 100;
        $('input').click(function() {
            $('div').toggle(3000);
        });
    }

    function jQuery_fx_off_0() {
        var toggleFx = function() {
            $.fx.off = !$.fx.off;
        };
        toggleFx();
        $('button').click(toggleFx);
        $('input').click(function() {
            $('div').toggle('slow');
        });
    }

    function jQuery_get_0() {
        $.get('test.php');
    }

    function jQuery_get_1() {
        $.get('test.php', { name: 'John', time: '2pm' });
    }

    function jQuery_get_2() {
        $.get('test.php', { 'choices[]': ['Jon', 'Susan'] });
    }

    function jQuery_get_3() {
        $.get('test.php', function(data) {
            alert('Data Loaded: ' + data);
        });
    }

    function jQuery_get_4() {
        $.get('test.cgi', { name: 'John', time: '2pm' })
            .done(function(data) {
                alert('Data Loaded: ' + data);
            });
    }

    function jQuery_get_5() {
        $.get('test.php', function(data) {
            $('body')
                .append('Name: ' + data.name) // John
                .append('Time: ' + data.time); //  2pm
        }, 'json');
    }

    function jQuery_get_json_0() {
        (function() {
            var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
            $.getJSON(flickerAPI, {
                tags: 'mount rainier',
                tagmode: 'any',
                format: 'json',
            })
                .done(function(data) {
                    $.each(data.items as any[], function(i, item) {
                        $('<img>').attr('src', item.media.m).appendTo('#images');
                        if (i === 3) {
                            return false;
                        }
                    });
                });
        })();
    }

    function jQuery_get_json_1() {
        $.getJSON('test.js', function(json) {
            console.log('JSON Data: ' + json.users[3].name);
        });
    }

    function jQuery_get_json_2() {
        $.getJSON('test.js', { name: 'John', time: '2pm' })
            .done(function(json) {
                console.log('JSON Data: ' + json.users[3].name);
            })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ', ' + error;
                console.log('Request Failed: ' + err);
            });
    }

    function jQuery_get_script_1() {
        var url = 'https://code.jquery.com/color/jquery.color.js';
        $.getScript(url, function() {
            $('#go').click(function() {
                $('.block')
                    .animate({
                        backgroundColor: 'rgb(255, 180, 180)',
                    }, 1000)
                    .delay(500)
                    .animate({
                        backgroundColor: 'olive',
                    }, 1000)
                    .delay(500)
                    .animate({
                        backgroundColor: '#00f',
                    }, 1000);
            });
        });
    }

    function jQuery_global_eval_0() {
        function test() {
            jQuery.globalEval('var newVar = true;');
        }

        test();
        // newVar === true
    }

    function jQuery_grep_0() {
        var arr = [1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1];
        $('div').text(arr.join(', '));

        arr = jQuery.grep(arr, function(n, i) {
            return ( n !== 5 && i > 4 );
        });
        $('p').text(arr.join(', '));

        arr = jQuery.grep(arr, function(a) {
            return a !== 9;
        });

        $('span').text(arr.join(', '));
    }

    function jQuery_grep_1() {
        $.grep([0, 1, 2], function(n, i) {
            return n > 0;
        });
    }

    function jQuery_grep_2() {
        $.grep([0, 1, 2], function(n, i) {
            return n > 0;
        }, true);
    }

    function jQuery_has_data_0() {
        var $p = jQuery('p'),
            p = $p[0];
        $p.append(jQuery.hasData(p) + ' '); // false

        $.data(p, 'testing', 123);
        $p.append(jQuery.hasData(p) + ' '); // true

        $.removeData(p, 'testing');
        $p.append(jQuery.hasData(p) + ' '); // false

        $p.on('click', function() {});
        $p.append(jQuery.hasData(p) + ' '); // true

        $p.off('click');
        $p.append(jQuery.hasData(p) + ' '); // false
    }

    function jQuery_hold_ready_0() {
        $.holdReady(true);
        $.getScript('myplugin.js', function() {
            $.holdReady(false);
        });
    }

    function jQuery_in_array_0() {
        var arr = [4, 'Pete', 8, 'John'];
        var $spans = $('span');
        $spans.eq(0).text(jQuery.inArray('John', arr));
        $spans.eq(1).text(jQuery.inArray(4, arr));
        $spans.eq(2).text(jQuery.inArray('Karl', arr));
        $spans.eq(3).text(jQuery.inArray('Pete', arr, 2));
    }

    function jQuery_is_array_0() {
        $('b').append('' + $.isArray([]));
    }

    function jQuery_is_empty_object_0() {
        jQuery.isEmptyObject({}); // true
        jQuery.isEmptyObject({ foo: 'bar' }); // false
    }

    function jQuery_is_function_0() {
        function stub() {}

        var objs = [
            function() {},
            { x: 15, y: 20 },
            null,
            stub,
            'function',
        ];

        jQuery.each(objs, function(i) {
            var isFunc = jQuery.isFunction(objs[i]);
            $('span').eq(i).text(isFunc);
        });
    }

    function jQuery_is_function_1() {
        $.isFunction(function() {});
    }

    function jQuery_is_numeric_0() {
        // true (numeric)
        $.isNumeric('-10');
        $.isNumeric('0');
        $.isNumeric(0xFF);
        $.isNumeric('0xFF');
        $.isNumeric('8e5');
        $.isNumeric('3.1415');
        $.isNumeric(+10);
        $.isNumeric(0o144);

        // false (non-numeric)
        $.isNumeric('-0x42');
        $.isNumeric('7.2acdgs');
        $.isNumeric('');
        $.isNumeric({});
        $.isNumeric(NaN);
        $.isNumeric(null);
        $.isNumeric(true);
        $.isNumeric(Infinity);
        $.isNumeric(undefined);
    }

    function jQuery_is_plain_object_0() {
        jQuery.isPlainObject({}); // true
        jQuery.isPlainObject('test'); // false
    }

    function jQuery_is_window_0() {
        $('b').append('' + $.isWindow(window));
    }

    function jQuery_is_xml_doc_0() {
        jQuery.isXMLDoc(document); // false
        jQuery.isXMLDoc(document.body); // false
    }

    function jQuery_make_array_0() {
        // Returns a NodeList
        var elems = document.getElementsByTagName('div');
        // Convert the NodeList to an Array
        var arr = jQuery.makeArray(elems);
        // Use an Array method on list of dom elements
        arr.reverse();
        $(arr).appendTo(document.body);
    }

    function jQuery_make_array_1() {
        var obj = $('li');
        var arr = $.makeArray(obj);
    }

    function jQuery_map_0() {
        var arr = ['a', 'b', 'c', 'd', 'e'];
        $('div').text(arr.join(', '));

        arr = jQuery.map(arr, function(n, i) {
            return ( n.toUpperCase() + i );
        });
        $('p').text(arr.join(', '));

        arr = jQuery.map(arr, function(a) {
            return a + a;
        });
        $('span').text(arr.join(', '));
    }

    function jQuery_map_1() {
        $.map([0, 1, 2], function(n) {
            return n + 4;
        });
    }

    function jQuery_map_2() {
        $.map([0, 1, 2], function(n) {
            return n > 0 ? n + 1 : null;
        });
    }

    function jQuery_map_3() {
        $.map([0, 1, 2], function(n) {
            return [n, n + 1];
        });
    }

    function jQuery_map_4() {
        var dimensions = { width: 10, height: 15, length: 20 };
        var _dimensions = $.map(dimensions, function(value, index) {
            return value * 2;
        });
    }

    function jQuery_map_5() {
        var dimensions = { width: 10, height: 15, length: 20 };
        var keys = $.map(dimensions, function(value, key) {
            return key;
        });
    }

    function jQuery_map_6() {
        $.map([0, 1, 2, 3], function(a) {
            return a * a;
        });
    }

    function jQuery_map_7() {
        $.map([0, 1, 52, 97], function(a) {
            return (a > 50 ? a - 45 : null);
        });
    }

    function jQuery_map_8() {
        var array = [0, 1, 52, 97];
        var _array = $.map(array, function(a, index) {
            return [a - 45, index];
        });
    }

    function jQuery_merge_0() {
        $.merge([0, 1, 2], [2, 3, 4]);
    }

    function jQuery_merge_1() {
        $.merge([3, 2, 1], [4, 3, 2]);
    }

    function jQuery_merge_2() {
        var first = ['a', 'b', 'c'];
        var second = ['d', 'e', 'f'];
        $.merge($.merge([], first), second);
    }

    function jQuery_no_conflict_0() {
        jQuery.noConflict();
        // Do something with jQuery
        jQuery('div p').hide();
        // Do something with another library's $()
        // $('content').style.display = 'none';
    }

    function jQuery_no_conflict_1() {
        jQuery.noConflict();
        (function($) {
            $(function() {
                // More code using $ as alias to jQuery
            });
        })(jQuery);

        // Other code using $ as an alias to the other library
    }

    function jQuery_no_conflict_2() {
        var j = jQuery.noConflict();

        // Do something with jQuery
        j('div p').hide();

        // Do something with another library's $()
        // $('content').style.display = 'none';
    }

    function jQuery_no_conflict_3() {
        var dom = {} as any;
        dom.query = jQuery.noConflict(true);
    }

    function jQuery_no_conflict_4(jq162: JQueryStatic) {
        var $log = $('#log');

        $log.append('2nd loaded jQuery version ($): ' + $.fn.jquery + '<br>');

        // Restore globally scoped jQuery variables to the first version loaded
        // (the newer version)

        jq162 = jQuery.noConflict(true);

        $log.append('<h3>After $.noConflict(true)</h3>');
        $log.append('1st loaded jQuery version ($): ' + $.fn.jquery + '<br>');
        $log.append('2nd loaded jQuery version (jq162): ' + jq162.fn.jquery + '<br>');
    }

    function jQuery_param_0() {
        var params = { width: 1680, height: 1050 };
        var str = jQuery.param(params);
        $('#results').text(str);
    }

    function jQuery_param_1() {
        // <=1.3.2:
        $.param({ a: [2, 3, 4] }); // "a=2&a=3&a=4"
        // >=1.4:
        $.param({ a: [2, 3, 4] }); // "a[]=2&a[]=3&a[]=4"

        // <=1.3.2:
        $.param({ a: { b: 1, c: 2 }, d: [3, 4, { e: 5 }] });
        // "a=[object+Object]&d=3&d=4&d=[object+Object]"

        // >=1.4:
        $.param({ a: { b: 1, c: 2 }, d: [3, 4, { e: 5 }] });
        // "a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5"
    }

    function jQuery_parse_html_0() {
        var $log = $('#log'),
            str = 'hello, <b>my name is</b> jQuery.',
            html = $.parseHTML(str),
            nodeNames: string[] = [];

        // Append the parsed HTML
        $log.append(html);

        // Gather the parsed HTML's node names
        $.each(html, function(i, el) {
            nodeNames[i] = '<li>' + el.nodeName + '</li>';
        });

        // Insert the node names
        $log.append('<h3>Node Names:</h3>');
        $('<ol></ol>')
            .append(nodeNames.join(''))
            .appendTo($log);
    }

    function jQuery_parse_json_0() {
        var obj = jQuery.parseJSON('{ "name": "John" }');
        alert(obj.name === 'John');
    }

    function jQuery_parse_xml_0() {
        var xml = '<rss version=\'2.0\'><channel><title>RSS Title</title></channel></rss>',
            xmlDoc = $.parseXML(xml),
            $xml = $(xmlDoc),
            $title = $xml.find('title');

        // Append "RSS Title" to #someElement
        $('#someElement').append($title.text());

        // Change the title to "XML Title"
        $title.text('XML Title');

        // Append "XML Title" to #anotherElement
        $('#anotherElement').append($title.text());
    }

    function jQuery_post_0() {
        $.post('test.php');
    }

    function jQuery_post_1() {
        $.post('test.php', { name: 'John', time: '2pm' });
    }

    function jQuery_post_2() {
        $.post('test.php', { 'choices[]': ['Jon', 'Susan'] });
    }

    function jQuery_post_3() {
        $.post('test.php', $('#testform').serialize());
    }

    function jQuery_post_4() {
        $.post('test.php', function(data) {
            alert('Data Loaded: ' + data);
        });
    }

    function jQuery_post_5() {
        $.post('test.php', { name: 'John', time: '2pm' })
            .done(function(data) {
                alert('Data Loaded: ' + data);
            });
    }

    function jQuery_post_6() {
        $.post('test.php', { func: 'getNameAndTime' }, function(data) {
            console.log(data.name); // John
            console.log(data.time); // 2pm
        }, 'json');
    }

    function jQuery_post_7() {
        // Attach a submit handler to the form
        $('#searchForm').submit(function(event) {
            // Stop form from submitting normally
            event.preventDefault();

            // Get some values from elements on the page:
            var $form = $(this),
                term = $form.find('input[name=\'s\']').val(),
                url = $form.attr('action')!;

            // Send the data using post
            var posting = $.post(url, { s: term });

            // Put the results in a div
            posting.done(function(data) {
                var content = $(data).find('#content');
                $('#result').empty().append(content);
            });
        });
    }

    function jQuery_proxy_0() {
        var me = {
            type: 'zombie',
            test: function(event: JQuery.Event) {
                // Without proxy, `this` would refer to the event target
                // use event.target to reference that element.
                var element = event.target;
                $(element).css('background-color', 'red');

                // With proxy, `this` refers to the me object encapsulating
                // this function.
                $('#log').append('Hello ' + this.type + '<br>');
                $('#test').off('click', this.test);
            },
        };

        var you = {
            type: 'person',
            test: function(event: JQuery.Event) {
                $('#log').append(this.type + ' ');
            },
        };

        // Execute you.test() in the context of the `you` object
        // no matter where it is called
        // i.e. the `this` keyword will refer to `you`
        var youClick = $.proxy(you.test, you);

        // attach click handlers to #test
        $('#test')
        // this === "zombie"; handler unbound after first click
            .on('click', $.proxy(me.test, me) as JQuery.EventHandler<HTMLElement>)

            // this === "person"
            .on('click', youClick as JQuery.EventHandler<HTMLElement>)

            // this === "zombie"
            .on('click', $.proxy(you.test, me) as JQuery.EventHandler<HTMLElement>)

            // this === "<button> element"
            .on('click', you.test);
    }

    function jQuery_proxy_1() {
        var obj = {
            name: 'John',
            test: function() {
                $('#log').append(this.name);
                $('#test').off('click', obj.test);
            },
        };
        $('#test').on('click', jQuery.proxy(obj, 'test') as JQuery.EventHandler<HTMLElement>);
    }

    function jQuery_proxy_2() {
        var me = {
            // I'm a dog
            type: 'dog',

            // Note that event comes *after* one and two
            test: function(one: any, two: any, event: any) {
                $('#log')

                // `one` maps to `you`, the 1st additional
                // argument in the $.proxy function call
                    .append('<h3>Hello ' + one.type + ':</h3>')

                    // The `this` keyword refers to `me`
                    // (the 2nd, context, argument of $.proxy)
                    .append('I am a ' + this.type + ', ')

                    // `two` maps to `they`, the 2nd additional
                    // argument in the $.proxy function call
                    .append('and they are ' + two.type + '.<br>')

                    // The event type is "click"
                    .append('Thanks for ' + event.type + 'ing.')

                    // The clicked element is `event.target`,
                    // and its type is "button"
                    .append('the ' + event.target.type + '.');
            },
        };

        var you = { type: 'cat' };
        var they = { type: 'fish' };

        // Set up handler to execute me.test() in the context
        // of `me`, with `you` and `they` as additional arguments
        var proxy = $.proxy(me.test, me, you, they) as JQuery.EventHandler<HTMLElement>;

        $('#test')
            .on('click', proxy);
    }

    function jQuery_queue_0() {
        $('#show').click(function() {
            var n = jQuery.queue($('div')[0], 'fx');
            $('span').text('Queue length is: ' + n.length);
        });

        function runIt() {
            $('div')
                .show('slow')
                .animate({
                    left: '+=200',
                }, 2000)
                .slideToggle(1000)
                .slideToggle('fast')
                .animate({
                    left: '-=200',
                }, 1500)
                .hide('slow')
                .show(1200)
                .slideUp('normal', runIt);
        }

        runIt();
    }

    function jQuery_queue_1() {
        $(document.body).click(function() {
            var divs = $('div')
                .show('slow')
                .animate({ left: '+=200' }, 2000);
            jQuery.queue(divs[0], 'fx', function() {
                $(this).addClass('newcolor');
                jQuery.dequeue(this);
            });
            divs.animate({ left: '-=200' }, 500);
            jQuery.queue(divs[0], 'fx', function() {
                $(this).removeClass('newcolor');
                jQuery.dequeue(this);
            });
            divs.slideUp();
        });
    }

    function jQuery_queue_2() {
        $('#start').click(function() {
            var divs = $('div')
                .show('slow')
                .animate({ left: '+=200' }, 5000);
            jQuery.queue(divs[0], 'fx', function() {
                $(this).addClass('newcolor');
                jQuery.dequeue(this);
            });
            divs.animate({ left: '-=200' }, 1500);
            jQuery.queue(divs[0], 'fx', function() {
                $(this).removeClass('newcolor');
                jQuery.dequeue(this);
            });
            divs.slideUp();
        });
        $('#stop').click(function() {
            jQuery.queue($('div')[0], 'fx', []);
            $('div').stop();
        });
    }

    function jQuery_ready_0() {
        $.when($.ready).then(function() {
            // Document is ready.
        });
    }

    function jQuery_ready_1() {
        $.when(
            $.getJSON('ajax/test.json'),
            $.ready,
        ).done(function(data) {
            // Document is ready.
            // Value of test.json is passed as `data`.
        });
    }

    function jQuery_ready_exception_0() {
        jQuery.readyException = function(error) {
            console.error(error);
        };
    }

    function jQuery_remove_data_0() {
        var div = $('div')[0];
        $('span:eq(0)').text('' + $('div').data('test1'));
        jQuery.data(div, 'test1', 'VALUE-1');
        jQuery.data(div, 'test2', 'VALUE-2');
        $('span:eq(1)').text('' + jQuery.data(div, 'test1'));
        jQuery.removeData(div, 'test1');
        $('span:eq(2)').text('' + jQuery.data(div, 'test1'));
        $('span:eq(3)').text('' + jQuery.data(div, 'test2'));
    }

    function jQuery_trim_0() {
        var str = '         lots of spaces before and after         ';
        $('#original').html('Original String: \'' + str + '\'');
        $('#trimmed').html('$.trim()\'ed: \'' + $.trim(str) + '\'');
    }

    function jQuery_trim_1() {
        $.trim('    hello, how are you?    ');
    }

    function jQuery_type_0() {
        $('b').append('' + jQuery.type(/test/));
    }

    function jQuery_unique_0() {
        // unique() must take a native array
        var divs = $('div').get();

        // Add 3 elements of class dup too (they are divs)
        divs = divs.concat($('.dup').get());
        $('div:eq(1)').text('Pre-unique there are ' + divs.length + ' elements.');

        divs = jQuery.unique(divs);
        $('div:eq(2)').text('Post-unique there are ' + divs.length + ' elements.')
            .css('color', 'red');
    }

    function jQuery_unique_sort_0() {
        // unique() must take a native array
        var divs = $('div').get();

        // Add 3 elements of class dup too (they are divs)
        divs = divs.concat($('.dup').get());
        $('div:eq(1)').text('Pre-unique there are ' + divs.length + ' elements.');

        divs = jQuery.uniqueSort(divs);
        $('div:eq(2)').text('Post-unique there are ' + divs.length + ' elements.')
            .css('color', 'red');
    }

    function jQuery_when_0() {
        $.when($.ajax('/page1.php'), $.ajax('/page2.php')).done(function(a1, a2) {
            // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
            // Each argument is an array with the following structure: [ data, statusText, jqXHR ]

            var data = a1[0] + a2[0]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
            if (/Whip It/.test(data)) {
                alert('We got what we came for!');
            }
        });
    }

    function jQuery_when_1(myFunc: any, myFailure: any) {
        $.when($.ajax('/page1.php'), $.ajax('/page2.php'))
            .then(myFunc, myFailure);
    }

    function jQuery_0() {
        $('div > p').css('border', '1px solid gray');
    }

    function jQuery_1() {
        $('input:radio', document.forms[0]);
    }

    function jQuery_2(xml: JQuery.jqXHR) {
        $('div', xml.responseXML!);
    }

    function jQuery_3() {
        $(document.body).css('background', 'black');
    }

    function jQuery_4(myForm: HTMLFormElement) {
        $(myForm.elements).hide();
    }

    function jQuery_5() {
        $('<div><p>Hello</p></div>').appendTo('body');
    }

    function jQuery_6() {
        $('<div/>', {
            class: 'test',
            text: 'Click me!',
            click: function() {
                $(this).toggleClass('test');
            },
        })
            .appendTo('body');
    }

    function jQuery_7() {
        $(function() {
            // Document is ready
        });
    }

    function jQuery_8() {
        jQuery(function($) {
            // Your code using failsafe $ alias here...
        });
    }

    function keydown_0() {
        var xTriggered = 0;
        $('#target').keydown(function(event) {
            if (event.which == 13) {
                event.preventDefault();
            }
            xTriggered++;
            var msg = 'Handler for .keydown() called ' + xTriggered + ' time(s).';
            // $.print(msg, 'html');
            // $.print(event);
        });

        $('#other').click(function() {
            $('#target').keydown();
        });
    }

    function keypress_0() {
        var xTriggered = 0;
        $('#target').keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
            }
            xTriggered++;
            var msg = 'Handler for .keypress() called ' + xTriggered + ' time(s).';
            // $.print(msg, 'html');
            // $.print(event);
        });

        $('#other').click(function() {
            $('#target').keypress();
        });
    }

    function keyup_0() {
        var xTriggered = 0;
        $('#target').keyup(function(event) {
            xTriggered++;
            var msg = 'Handler for .keyup() called ' + xTriggered + ' time(s).';
            // $.print(msg, 'html');
            // $.print(event);
        }).keydown(function(event) {
            if (event.which == 13) {
                event.preventDefault();
            }
        });

        $('#other').click(function() {
            $('#target').keyup();
        });
    }

    function lang_0() {
        $('div:lang(en-us)').addClass('usa');
        $('div:lang(es-es)').addClass('spain');
    }

    function last_child_0() {
        $('div span:last-child')
            .css({ color: 'red', fontSize: '80%' })
            .hover(function() {
                $(this).addClass('solast');
            }, function() {
                $(this).removeClass('solast');
            });
    }

    function last_of_type_0() {
        $('span:last-of-type')
            .css({ color: 'red', fontSize: '80%' })
            .hover(function() {
                $(this).addClass('solast');
            }, function() {
                $(this).removeClass('solast');
            });
    }

    function last_0() {
        $('tr:last').css({ backgroundColor: 'yellow', fontWeight: 'bolder' });
    }

    function last_1() {
        $('p span').last().addClass('highlight');
    }

    function length_0() {
        $(document.body)
            .click(function() {
                $(document.body).append($('<div>'));
                var n = $('div').length;
                $('span').text('There are ' + n + ' divs.' +
                    'Click to add more.');
            })
            // Trigger the click to start
            .trigger('click');
    }

    function load_0() {
        $('#new-projects').load('/resources/load.html #projects li');
    }

    function load_1() {
        $('#success').load('/not-here.php', function(response, status, xhr) {
            if (status == 'error') {
                var msg = 'Sorry but there was an error: ';
                $('#error').html(msg + xhr.status + ' ' + xhr.statusText);
            }
        });
    }

    function load_2() {
        $('#feeds').load('feeds.html');
    }

    function load_3() {
        $('#objectID').load('test.php', { 'choices[]': ['Jon', 'Susan'] });
    }

    function load_4() {
        $('#feeds').load('feeds.php', { limit: 25 }, function() {
            alert('The last 25 entries in the feed have been loaded');
        });
    }

    function lt_0() {
        $('td:lt(4)').css('backgroundColor', 'yellow');
        $('td:lt(-2)').css('color', 'red');
    }

    function map_0() {
        $('p')
            .append($('input').map(function() {
                return $(this).val();
            })
                .get()
                .join(', '));
    }

    function map_1() {
        var mappedItems = $('li').map(function(index) {
            var replacement: Element | null = $('<li>').text($(this).text()).get(0);
            if (index === 0) {
                // Make the first item all caps
                $(replacement).text($(replacement).text().toUpperCase());
            } else if (index === 1 || index === 3) {
                // Delete the second and fourth items
                replacement = null;
            } else if (index === 2) {
                // Make two of the third item and add some text
                var _replacement = [replacement, $('<li>').get(0)];
                $(_replacement[0]).append('<b> - A</b>');
                $(_replacement[1]).append('Extra <b> - B</b>');
            }

            // Replacement will be a dom element, null,
            // or an array of dom elements
            return replacement;
        });
        $('#results').append(mappedItems);
    }

    function mousedown_0() {
        $('p')
            .mouseup(function() {
                $(this).append('<span style=\'color:#f00;\'>Mouse up.</span>');
            })
            .mousedown(function() {
                $(this).append('<span style=\'color:#00f;\'>Mouse down.</span>');
            });
    }

    function mouseenter_0() {
        var i = 0;
        $('div.overout')
            .mouseover(function() {
                $('p:first', this).text('mouse over');
                $('p:last', this).text(++i);
            })
            .mouseout(function() {
                $('p:first', this).text('mouse out');
            });

        var n = 0;
        $('div.enterleave')
            .mouseenter(function() {
                $('p:first', this).text('mouse enter');
                $('p:last', this).text(++n);
            })
            .mouseleave(function() {
                $('p:first', this).text('mouse leave');
            });
    }

    function mouseleave_0() {
        var i = 0;
        $('div.overout')
            .mouseover(function() {
                $('p:first', this).text('mouse over');
            })
            .mouseout(function() {
                $('p:first', this).text('mouse out');
                $('p:last', this).text(++i);
            });

        var n = 0;
        $('div.enterleave')
            .mouseenter(function() {
                $('p:first', this).text('mouse enter');
            })
            .mouseleave(function() {
                $('p:first', this).text('mouse leave');
                $('p:last', this).text(++n);
            });
    }

    function mousemove_0() {
        $('div').mousemove(function(event) {
            var pageCoords = '( ' + event.pageX + ', ' + event.pageY + ' )';
            var clientCoords = '( ' + event.clientX + ', ' + event.clientY + ' )';
            $('span:first').text('( event.pageX, event.pageY ) : ' + pageCoords);
            $('span:last').text('( event.clientX, event.clientY ) : ' + clientCoords);
        });
    }

    function mouseout_0() {
        var i = 0;
        $('div.overout')
            .mouseout(function() {
                $('p:first', this).text('mouse out');
                $('p:last', this).text(++i);
            })
            .mouseover(function() {
                $('p:first', this).text('mouse over');
            });

        var n = 0;
        $('div.enterleave')
            .on('mouseenter', function() {
                $('p:first', this).text('mouse enter');
            })
            .on('mouseleave', function() {
                $('p:first', this).text('mouse leave');
                $('p:last', this).text(++n);
            });
    }

    function mouseover_0() {
        var i = 0;
        $('div.overout')
            .mouseover(function() {
                i += 1;
                $(this).find('span').text('mouse over x ' + i);
            })
            .mouseout(function() {
                $(this).find('span').text('mouse out ');
            });

        var n = 0;
        $('div.enterleave')
            .mouseenter(function() {
                n += 1;
                $(this).find('span').text('mouse enter x ' + n);
            })
            .mouseleave(function() {
                $(this).find('span').text('mouse leave');
            });
    }

    function mouseup_0() {
        $('p')
            .mouseup(function() {
                $(this).append('<span style=\'color:#f00;\'>Mouse up.</span>');
            })
            .mousedown(function() {
                $(this).append('<span style=\'color:#00f;\'>Mouse down.</span>');
            });
    }

    function attribute_multiple_0() {
        $('input[id][name$=\'man\']').val('only this one');
    }

    function multiple_0() {
        $('div, span, p.myClass').css('border', '3px solid red');
    }

    function multiple_1() {
        var list = $('div, p, span')
            .map(function() {
                return this.tagName;
            })
            .get()
            .join(', ');
        $('b').append(document.createTextNode(list));
    }

    function next_adjacent_0() {
        $('label + input').css('color', 'blue').val('Labeled!');
    }

    function next_siblings_0() {
        $('#prev ~ div').css('border', '3px groove blue');
    }

    function next_0() {
        $('button[disabled]').next().text('this button is disabled');
    }

    function next_1() {
        $('p').next('.selected').css('background', 'yellow');
    }

    function next_all_0() {
        $('div:first').nextAll().addClass('after');
    }

    function next_all_1() {
        $(':nth-child(1)').nextAll('p').addClass('after');
    }

    function next_until_0() {
        $('#term-2')
            .nextUntil('dt')
            .css('background-color', 'red');
        var term3 = document.getElementById('term-3')!;
        $('#term-1')
            .nextUntil(term3, 'dd')
            .css('color', 'green');
    }

    function not_0() {
        $('input:not(:checked) + span').css('background-color', 'yellow');
        $('input').attr('disabled', 'disabled');
    }

    function not_1() {
        $('div').not('.green, #blueone')
            .css('border-color', 'red');
    }

    function not_2() {
        $('p').not($('#selected')[0]);
    }

    function not_3() {
        $('p').not('#selected');
    }

    function not_4() {
        $('p').not($('div p.selected'));
    }

    function nth_child_0() {
        $('ul li:nth-child(2)').append('<span> - 2nd!</span>');
    }

    function nth_child_1() {
        $('button').click(function() {
            var str = $(this).text();
            $('tr').css('background', 'white');
            $('tr' + str).css('background', '#ff0000');
            $('#inner').text(str);
        });
    }

    function nth_last_child_0() {
        $('ul li:nth-last-child(2)').append('<span> - 2nd to last!</span>');
    }

    function nth_last_child_1() {
        $('button').click(function() {
            var str = $(this).text();
            $('tr').css('background', 'white');
            $('tr' + str).css('background', '#ff0000');
            $('#inner').text(str);
        });
    }

    function nth_last_of_type_0() {
        $('ul li:nth-last-of-type(2)').append('<span> - 2nd to last!</span>');
    }

    function nth_last_of_type_1() {
        $('button').click(function() {
            var str = $(this).text();
            $('tr').css('background', 'white');
            $('tr' + str).css('background', '#ff0000');
            $('#inner').text(str);
        });
    }

    function nth_of_type_0() {
        $('span:nth-of-type(2)')
            .append('<span> is 2nd sibling span</span>')
            .addClass('nth');
    }

    function odd_0() {
        $('tr:odd').css('background-color', '#bbbbff');
    }

    function off_0() {
        function flash() {
            $('div').show().fadeOut('slow');
        }

        $('#bind').click(function() {
            $('body')
                .on('click', '#theone', flash)
                .find('#theone')
                .text('Can Click!');
        });
        $('#unbind').click(function() {
            $('body')
                .off('click', '#theone', flash)
                .find('#theone')
                .text('Does nothing...');
        });
    }

    function off_1() {
        $('p').off();
    }

    function off_2() {
        $('p').off('click', '**');
    }

    function off_3() {
        var foo = function() {
            // Code to handle some kind of event
        };

        // ... Now foo will be called when paragraphs are clicked ...
        $('body').on('click', 'p', foo);

        // ... Foo will no longer be called.
        $('body').off('click', 'p', foo);
    }

    function off_4() {
        var validate = function() {
            // Code to validate form entries
        };

        // Delegate events under the ".validator" namespace
        $('form').on('click.validator', 'button', validate);

        $('form').on('keypress.validator', 'input[type=\'text\']', validate);

        // Remove event handlers in the ".validator" namespace
        $('form').off('.validator');
    }

    function offset_0() {
        var p = $('p:last');
        var offset = p.offset();
        p.html('left: ' + offset.left + ', top: ' + offset.top);
    }

    function offset_1() {
        $('*', document.body).click(function(event) {
            var offset = $(this).offset();
            event.stopPropagation();
            $('#result').text(this.tagName +
                ' coords ( ' + offset.left + ', ' + offset.top + ' )');
        });
    }

    function offset_2() {
        $('p:last').offset({ top: 10, left: 30 });
    }

    function offset_parent_0() {
        $('li.item-a').offsetParent().css('background-color', 'red');
    }

    function on_0() {
        $('p').on('click', function() {
            alert($(this).text());
        });
    }

    function on_1() {
        function myHandler(event: JQuery.Event<HTMLElement, { foo: string; }>) {
            alert(event.data.foo);
        }

        $('p').on('click', { foo: 'bar' }, myHandler);
    }

    function on_2() {
        $('form').on('submit', false);
    }

    function on_3() {
        $('form').on('submit', function(event) {
            event.preventDefault();
        });
    }

    function on_4() {
        $('form').on('submit', function(event) {
            event.stopPropagation();
        });
    }

    function on_5() {
        $('div').on('click', function(event, person) {
            alert('Hello, ' + person.name);
        });
        $('div').trigger('click', { name: 'Jim' });
    }

    function on_6() {
        $('div').on('click', function(event, salutation, name) {
            alert(salutation + ', ' + name);
        });
        $('div').trigger('click', ['Goodbye', 'Jim']);
    }

    function on_7() {
        $('p').on('myCustomEvent', function(event, myName) {
            $(this).text(myName + ', hi there!');
            $('span')
                .stop()
                .css('opacity', 1)
                .text('myName = ' + myName)
                .fadeIn(30)
                .fadeOut(1000);
        });
        $('button').click(function() {
            $('p').trigger('myCustomEvent', ['John']);
        });
    }

    function on_8() {
        $('div.test').on({
            click: function() {
                $(this).toggleClass('active');
            }, mouseenter: function() {
                $(this).addClass('inside');
            }, mouseleave: function() {
                $(this).removeClass('inside');
            },
        });
    }

    function on_9() {
        var count = 0;
        $('body').on('click', 'p', function() {
            $(this).after('<p>Another paragraph! ' + (++count) + '</p>');
        });
    }

    function on_10() {
        $('body').on('click', 'p', function() {
            alert($(this).text());
        });
    }

    function on_11() {
        $('body').on('click', 'a', function(event) {
            event.preventDefault();
        });
    }

    function on_12() {
        $('#cart').on('mouseenter mouseleave', function(event) {
            $(this).toggleClass('active');
        });
    }

    function one_0() {
        var n = 0;
        $('div').one('click', function() {
            var index = $('div').index(this);
            $(this).css({
                borderStyle: 'inset',
                cursor: 'auto',
            });
            $('p').text('Div at index #' + index + ' clicked.' +
                ' That\'s ' + (++n) + ' total clicks.');
        });
    }

    function one_1() {
        $('p').one('click', function() {
            alert($(this).text());
        });
    }

    function one_2() {
        var n = 0;
        $('.target').one('click mouseenter', function() {
            $('.count').html((++n).toString());
        });
    }

    function only_child_0() {
        $('div button:only-child').text('Alone').css('border', '2px blue solid');
    }

    function only_of_type_0() {
        $('button:only-of-type').text('Alone').css('border', '2px blue solid');
    }

    function outer_height_0() {
        var p = $('p:first');
        $('p:last').text(
            'outerHeight:' + p.outerHeight() +
            ' , outerHeight( true ):' + p.outerHeight(true));
    }

    function outer_height_1() {
        var modHeight = 60;
        $('div').one('click', function() {
            $(this).outerHeight(modHeight).addClass('mod');
            modHeight -= 8;
        });
    }

    function outer_width_0() {
        var p = $('p:first');
        $('p:last').text(
            'outerWidth:' + p.outerWidth() +
            ' , outerWidth( true ):' + p.outerWidth(true));
    }

    function outer_width_1() {
        var modWidth = 60;
        $('div').one('click', function() {
            $(this).outerWidth(modWidth).addClass('mod');
            modWidth -= 8;
        });
    }

    function parent_0() {
        $('td:parent').fadeTo(1500, 0.3);
    }

    function parent_1() {
        $('*', document.body).each(function() {
            var parentTag = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode(parentTag + ' > '));
        });
    }

    function parent_2() {
        $('p').parent('.selected').css('background', 'yellow');
    }

    function parents_0() {
        var parentEls = $('b').parents()
            .map(function() {
                return this.tagName;
            })
            .get()
            .join(', ');
        $('b').append('<strong>' + parentEls + '</strong>');
    }

    function parents_1() {
        function showParents() {
            $('div').css('border-color', 'white');
            var len = $('span.selected')
                .parents('div')
                .css('border', '2px red solid')
                .length;
            $('b').text('Unique div parents: ' + len);
        }

        $('span').click(function() {
            $(this).toggleClass('selected');
            showParents();
        });
    }

    function parents_until_0() {
        $('li.item-a')
            .parentsUntil('.level-1')
            .css('background-color', 'red');

        $('li.item-2')
            .parentsUntil($('ul.level-1'), '.yes')
            .css('border', '3px solid green');
    }

    function password_0() {
        var input = $('input:password').css({
            background: 'yellow',
            border: '3px red solid',
        });
        $('div')
            .text('For this type jQuery found ' + input.length + '.')
            .css('color', 'red');

        // Prevent form submission
        $('form').submit(function() {
            return false;
        });
    }

    function position_0() {
        var p = $('p:first');
        var position = p.position();
        $('p:last').text('left: ' + position.left + ', top: ' + position.top);
    }

    function prepend_0() {
        $('p').prepend('<b>Hello </b>');
    }

    function prepend_1() {
        $('p').prepend(document.createTextNode('Hello '));
    }

    function prepend_2() {
        $('p').prepend($('b'));
    }

    function prepend_to_0() {
        $('span').prependTo('#foo');
    }

    function prev_0() {
        var $curr = $('#start');
        $curr.css('background', '#f99');
        $('button').click(function() {
            $curr = $curr.prev();
            $('div').css('background', '');
            $curr.css('background', '#f99');
        });
    }

    function prev_1() {
        $('p').prev('.selected').css('background', 'yellow');
    }

    function prev_all_0() {
        $('div:last').prevAll().addClass('before');
    }

    function prev_until_0() {
        $('#term-2').prevUntil('dt')
            .css('background-color', 'red');

        var term1 = document.getElementById('term-1')!;
        $('#term-3').prevUntil(term1, 'dd')
            .css('color', 'green');
    }

    function promise_0() {
        var div = $('<div>');

        div.promise().done(function(this: typeof div, arg1) {
            // Will fire right away and alert "true"
            alert(this === div && arg1 === div);
        });
    }

    function promise_1() {
        $('button').on('click', function() {
            $('p').append('Started...');

            $('div').each(function(i) {
                $(this).fadeIn().fadeOut(1000 * ( i + 1 ));
            });

            $('div').promise().done(function() {
                $('p').append(' Finished! ');
            });
        });
    }

    function promise_2() {
        var effect = function() {
            return $('div').fadeIn(800).delay(1200).fadeOut();
        };

        $('button').on('click', function() {
            $('p').append(' Started... ');

            $.when(effect()).done(function() {
                $('p').append(' Finished! ');
            });
        });
    }

    function prop_0() {
        $('input').change(function() {
            var $input = $(this);
            $('p').html(
                '.attr( "checked" ): <b>' + $input.attr('checked') + '</b><br>' +
                '.prop( "checked" ): <b>' + $input.prop('checked') + '</b><br>' +
                '.is( ":checked" ): <b>' + $input.is(':checked') + '</b>');
        }).change();
    }

    function prop_1() {
        $('input[type=\'checkbox\']').prop({
            disabled: true,
        });
    }

    function push_stack_0() {
        jQuery([])
            .pushStack(document.getElementsByTagName('div'))
            .remove()
            .end();
    }

    function queue_0() {
        var div = $('div');

        function runIt() {
            div
                .show('slow')
                .animate({ left: '+=200' }, 2000)
                .slideToggle(1000)
                .slideToggle('fast')
                .animate({ left: '-=200' }, 1500)
                .hide('slow')
                .show(1200)
                .slideUp('normal', runIt);
        }

        function showIt() {
            var n = div.queue('fx');
            $('span').text(n.length);
            setTimeout(showIt, 100);
        }

        runIt();
        showIt();
    }

    function queue_1() {
        $(document.body).click(function() {
            $('div')
                .show('slow')
                .animate({ left: '+=200' }, 2000)
                .queue(function() {
                    $(this).addClass('newcolor').dequeue();
                })
                .animate({ left: '-=200' }, 500)
                .queue(function() {
                    $(this).removeClass('newcolor').dequeue();
                })
                .slideUp();
        });
    }

    function queue_2() {
        $('#start').click(function() {
            $('div')
                .show('slow')
                .animate({ left: '+=200' }, 5000)
                .queue(function() {
                    $(this).addClass('newcolor').dequeue();
                })
                .animate({ left: '-=200' }, 1500)
                .queue(function() {
                    $(this).removeClass('newcolor').dequeue();
                })
                .slideUp();
        });
        $('#stop').click(function() {
            $('div')
                .queue('fx', [])
                .stop();
        });
    }

    function radio_0() {
        var input = $('form input:radio')
            .wrap('<span></span>')
            .parent()
            .css({
                background: 'yellow',
                border: '3px red solid',
            });

        $('div')
            .text('For this type jQuery found ' + input.length + '.')
            .css('color', 'red');

        // Prevent form submission
        $('form').submit(function(event) {
            event.preventDefault();
        });
    }

    function ready_0() {
        $(function() {
            $('p').text('The DOM is now loaded and can be manipulated.');
        });
    }

    function remove_0() {
        $('button').click(function() {
            $('p').remove();
        });
    }

    function remove_1() {
        $('button').click(function() {
            $('p').remove(':contains(\'Hello\')');
        });
    }

    function remove_attr_0() {
        (function() {
            var inputTitle = $('input').attr('title')!;
            $('button').click(function() {
                var input = $(this).next();

                if (input.attr('title') === inputTitle) {
                    input.removeAttr('title');
                } else {
                    input.attr('title', inputTitle);
                }

                $('#log').html('input title is now ' + input.attr('title'));
            });
        })();
    }

    function remove_class_0() {
        $('p:even').removeClass('blue');
    }

    function remove_class_1() {
        $('p:odd').removeClass('blue under');
    }

    function remove_class_2() {
        $('p:eq(1)').removeClass();
    }

    function remove_data_0() {
        $('span:eq(0)').text('' + $('div').data('test1'));
        $('div').data('test1', 'VALUE-1');
        $('div').data('test2', 'VALUE-2');
        $('span:eq(1)').text('' + $('div').data('test1'));
        $('div').removeData('test1');
        $('span:eq(2)').text('' + $('div').data('test1'));
        $('span:eq(3)').text('' + $('div').data('test2'));
    }

    function remove_prop_0(para: JQuery) {
        para = $('p');
        para
            .prop('luggageCode', 1234)
            .append('The secret luggage code is: ', String(para.prop('luggageCode')), '. ')
            .removeProp('luggageCode')
            .append('Now the secret luggage code is: ', String(para.prop('luggageCode')), '. ');
    }

    function replace_all_0() {
        $('<b>Paragraph. </b>').replaceAll('p');
    }

    function replace_with_0() {
        $('button').click(function() {
            $(this).replaceWith('<div>' + $(this).text() + '</div>');
        });
    }

    function replace_with_1() {
        $('p').replaceWith('<b>Paragraph. </b>');
    }

    function replace_with_2() {
        $('p').click(function() {
            $(this).replaceWith($('div'));
        });
    }

    function replace_with_3() {
        $('button').on('click', function() {
            var $container = $('div.container').replaceWith(function() {
                return $(this).contents();
            });

            $('p').append($container.attr('class')!);
        });
    }

    function reset_0() {
        var input = $('input:reset').css({
            background: 'yellow',
            border: '3px red solid',
        });
        $('div')
            .text('For this type jQuery found ' + input.length + '.')
            .css('color', 'red');

        // Prevent form submission
        $('form').submit(function(event) {
            event.preventDefault();
        });
    }

    function resize_0() {
        $(window).resize(function() {
            $('body').prepend('<div>' + $(window).width() + '</div>');
        });
    }

    function root_0() {
        $('<b></b>').html($(':root')[0].nodeName).appendTo('#log');
    }

    function scroll_0() {
        $('p').clone().appendTo(document.body);
        $('p').clone().appendTo(document.body);
        $('p').clone().appendTo(document.body);
        $(window).scroll(function() {
            $('span').css('display', 'inline').fadeOut('slow');
        });
    }

    function scroll_left_0() {
        var p = $('p:first');
        $('p:last').text('scrollLeft:' + p.scrollLeft());
    }

    function scroll_left_1() {
        $('div.demo').scrollLeft(300);
    }

    function scroll_top_0() {
        var p = $('p:first');
        $('p:last').text('scrollTop:' + p.scrollTop());
    }

    function scroll_top_1() {
        $('div.demo').scrollTop(300);
    }

    function select_0() {
        $(':input').select(function() {
            $('div').text('Something was selected').show().fadeOut(1000);
        });
    }

    function select_1() {
        $('input').select();
    }

    function selected_0() {
        $('select')
            .change(function() {
                var str = '';
                $('select option:selected').each(function() {
                    str += $(this).text() + ' ';
                });
                $('div').text(str);
            })
            .trigger('change');
    }

    function serialize_0() {
        function showValues() {
            var str = $('form').serialize();
            $('#results').text(str);
        }

        $('input[type=\'checkbox\'], input[type=\'radio\']').on('click', showValues);
        $('select').on('change', showValues);
        showValues();
    }

    function serialize_array_0() {
        function showValues() {
            var fields = $(':input').serializeArray();
            $('#results').empty();
            jQuery.each(fields, function(i, field) {
                $('#results').append(field.value + ' ');
            });
        }

        $(':checkbox, :radio').click(showValues);
        $('select').change(showValues);
        showValues();
    }

    function show_0() {
        $('button').click(function() {
            $('p').show('slow');
        });
    }

    function show_1() {
        $('#showr').click(function() {
            $('div').first().show('fast', function showNext() {
                $(this).next('div').show('fast', showNext);
            });
        });

        $('#hidr').click(function() {
            $('div').hide(1000);
        });
    }

    function show_2() {
        function doIt() {
            $('span,div').show('slow');
        }

        // Can pass in function name
        $('button').click(doIt);

        $('form').submit(function(event) {
            if ($('input').val() === 'yes') {
                $('p').show(4000, function() {
                    $(this).text('Ok, DONE! (now showing)');
                });
            }
            $('span,div').hide('fast');

            // Prevent form submission
            event.preventDefault();
        });
    }

    function siblings_0() {
        var len = $('.hilite').siblings()
            .css('color', 'red')
            .length;
        $('b').text(len);
    }

    function siblings_1() {
        $('p').siblings('.selected').css('background', 'yellow');
    }

    function slice_0() {
        function colorEm() {
            var $div = $('div');
            var start = Math.floor(Math.random() * $div.length);
            var end: number | undefined = Math.floor(Math.random() * ( $div.length - start )) +
                start + 1;
            if (end === $div.length) {
                end = undefined;
            }
            $div.css('background', '');
            if (end) {
                $div.slice(start, end).css('background', 'yellow');
            } else {
                $div.slice(start).css('background', 'yellow');
            }
            $('span').text('$( \'div\' ).slice( ' + start +
                (end ? ', ' + end : '') +
                ').css( \'background\', \'yellow\' );');
        }

        $('button').click(colorEm);
    }

    function slice_1() {
        $('p').slice(0, 1).wrapInner('<b></b>');
    }

    function slice_2() {
        $('p').slice(0, 2).wrapInner('<b></b>');
    }

    function slice_3() {
        $('p').slice(1, 2).wrapInner('<b></b>');
    }

    function slice_4() {
        $('p').slice(1).wrapInner('<b></b>');
    }

    function slice_5() {
        $('p').slice(-1).wrapInner('<b></b>');
    }

    function slide_down_0() {
        $(document.body).click(function() {
            if ($('div:first').is(':hidden')) {
                $('div').slideDown('slow');
            } else {
                $('div').hide();
            }
        });
    }

    function slide_down_1() {
        $('div').click(function() {
            $(this).css({
                borderStyle: 'inset',
                cursor: 'wait',
            });
            $('input').slideDown(1000, function() {
                $(this)
                    .css('border', '2px red inset')
                    .filter('.middle')
                    .css('background', 'yellow')
                    .focus();
                $('div').css('visibility', 'hidden');
            });
        });
    }

    function slide_toggle_0() {
        $('button').click(function() {
            $('p').slideToggle('slow');
        });
    }

    function slide_toggle_1() {
        $('#aa').click(function() {
            $('div:not(.still)').slideToggle('slow', function() {
                var n = parseInt($('span').text(), 10);
                $('span').text(n + 1);
            });
        });
    }

    function slide_up_0() {
        $(document.body).click(function() {
            if ($('div:first').is(':hidden')) {
                $('div').show('slow');
            } else {
                $('div').slideUp();
            }
        });
    }

    function slide_up_1() {
        $('button').click(function() {
            $(this).parent().slideUp('slow', function() {
                $('#msg').text($('button', this).text() + ' has completed.');
            });
        });
    }

    function stop_0() {
        // Start animation
        $('#go').click(function() {
            $('.block').animate({ left: '+=100px' }, 2000);
        });

        // Stop animation when button is clicked
        $('#stop').click(function() {
            $('.block').stop();
        });

        // Start animation in the opposite direction
        $('#back').click(function() {
            $('.block').animate({ left: '-=100px' }, 2000);
        });
    }

    function stop_1() {
        var $block = $('.block');

        // Toggle a sliding animation animation
        $('#toggle').on('click', function() {
            $block.stop().slideToggle(1000);
        });
    }

    function submit_0() {
        var submitEl = $('td :submit')
            .parent('td')
            .css({
                background: 'yellow',
                border: '3px red solid',
            })
            .end();

        $('#result').text('jQuery matched ' + submitEl.length + ' elements.');

        // Prevent form submission
        $('form').submit(function(event) {
            event.preventDefault();
        });

        // Extra JS to make the HTML easier to edit (None of this is relevant to the ':submit' selector)
        $('#exampleTable').find('td').each(function(i, el) {
            var inputEl = $(el).children(),
                inputType = inputEl.attr('type') ? ' type=\'' + inputEl.attr('type') + '\'' : '';
            $(el).before('<td>' + inputEl[0].nodeName + inputType + '</td>');
        });
    }

    function submit_1() {
        $('form').submit(function(event) {
            if ($('input:first').val() === 'correct') {
                $('span').text('Validated...').show();
                return;
            }

            $('span').text('Not valid!').show().fadeOut(1000);
            event.preventDefault();
        });
    }

    function submit_2() {
        $('form').submit(function() {
            // return this.some_flag_variable;
        });
    }

    function submit_3() {
        $('form:first').submit();
    }

    function text_0() {
        var input = $('form input:text').css({
            background: 'yellow',
            border: '3px red solid',
        });

        $('div')
            .text('For this type jQuery found ' + input.length + '.')
            .css('color', 'red');

        // Prevent form submission
        $('form').submit(function(event) {
            event.preventDefault();
        });
    }

    function text_1() {
        var str = $('p:first').text();
        $('p:last').html(str);
    }

    function text_2() {
        $('p').text('<b>Some</b> new text.');
    }

    function to_array_0() {
        function disp(divs: HTMLElement[]) {
            var a: any[] = [];
            for (var i = 0; i < divs.length; i++) {
                a.push(divs[i].innerHTML);
            }
            $('span').text(a.join(' '));
        }

        disp($('div').toArray().reverse());
    }

    function toggle_0() {
        $('button').click(function() {
            $('p').toggle();
        });
    }

    function toggle_1() {
        $('button').click(function() {
            $('p').toggle('slow');
        });
    }

    function toggle_2() {
        var flip = 0;
        $('button').click(function() {
            $('p').toggle(flip++ % 2 === 0);
        });
    }

    function toggle_class_0() {
        $('p').click(function() {
            $(this).toggleClass('highlight');
        });
    }

    function toggle_class_1() {
        var count = 0;
        $('p').each(function() {
            var $thisParagraph = $(this);
            var count = 0;
            $thisParagraph.click(function() {
                count++;
                $thisParagraph.find('span').text('clicks: ' + count);
                $thisParagraph.toggleClass('highlight', count % 3 === 0);
            });
        });
    }

    function toggle_class_2() {
        var cls = ['', 'a', 'a b', 'a b c'];
        var divs = $('div.wrap').children();
        var appendClass = function() {
            divs.append(function() {
                return '<div>' + ( this.className || 'none' ) + '</div>';
            });
        };

        appendClass();

        $('button').on('click', function() {
            var tc = this.className || undefined;
            divs.toggleClass(tc!);
            appendClass();
        });

        $('a').on('click', function(event) {
            event.preventDefault();
            divs.empty().each(function(i) {
                this.className = cls[i];
            });
            appendClass();
        });
    }

    function trigger_0() {
        $('button:first').click(function() {
            update($('span:first'));
        });

        $('button:last').click(function() {
            $('button:first').trigger('click');
            update($('span:last'));
        });

        function update(j: JQuery) {
            var n = parseInt(j.text(), 10);
            j.text(n + 1);
        }
    }

    function trigger_1() {
        $('form:first').trigger('submit');
    }

    function trigger_2() {
        var event = jQuery.Event('submit');
        $('form:first').trigger(event);
        if (event.isDefaultPrevented()) {
            // Perform an action...
        }
    }

    function trigger_3() {
        $('p')
            .click(function(event, a, b) {
                // When a normal click fires, a and b are undefined
                // for a trigger like below a refers to "foo" and b refers to "bar"
            })
            .trigger('click', ['foo', 'bar']);
    }

    function trigger_4() {
        var event = jQuery.Event('logged');
        // event.user = 'foo';
        // event.pass = 'bar';
        $('body').trigger(event);
    }

    function trigger_5() {
        $('body').trigger({
            type: 'logged',
            user: 'foo',
            pass: 'bar',
        } as any);
    }

    function trigger_handler_0() {
        $('#old').click(function() {
            $('input').trigger('focus');
        });
        $('#new').click(function() {
            $('input').triggerHandler('focus');
        });
        $('input').focus(function() {
            $('<span>Focused!</span>').appendTo('body').fadeOut(1000);
        });
    }

    function unbind_0() {
        function aClick() {
            $('div').show().fadeOut('slow');
        }

        $('#bind').click(function() {
            $('#theone')
                .bind('click', aClick)
                .text('Can Click!');
        });
        $('#unbind').click(function() {
            $('#theone')
                .unbind('click', aClick)
                .text('Does nothing...');
        });
    }

    function unbind_1() {
        $('p').unbind();
    }

    function unbind_2() {
        $('p').unbind('click');
    }

    function unbind_3() {
        var foo = function() {
            // Code to handle some kind of event
        };

        $('p').bind('click', foo); // ... Now foo will be called when paragraphs are clicked ...

        $('p').unbind('click', foo); // ... foo will no longer be called.
    }

    function undelegate_0() {
        function aClick() {
            $('div').show().fadeOut('slow');
        }

        $('#bind').click(function() {
            $('body')
                .delegate('#theone', 'click', aClick)
                .find('#theone').text('Can Click!');
        });
        $('#unbind').click(function() {
            $('body')
                .undelegate('#theone', 'click', aClick)
                .find('#theone').text('Does nothing...');
        });
    }

    function undelegate_1() {
        $('p').undelegate();
    }

    function undelegate_2() {
        $('p').undelegate('click');
    }

    function undelegate_3() {
        var foo = function() {
            // Code to handle some kind of event
        };

        // ... Now foo will be called when paragraphs are clicked ...
        $('body').delegate('p', 'click', foo);

        // ... foo will no longer be called.
        $('body').undelegate('p', 'click', foo);
    }

    function undelegate_4() {
        var foo = function() {
            // Code to handle some kind of event
        };

        // Delegate events under the ".whatever" namespace
        $('form').delegate(':button', 'click.whatever', foo);

        $('form').delegate('input[type=\'text\'] ', 'keypress.whatever', foo);

        // Unbind all events delegated under the ".whatever" namespace
        $('form').undelegate('.whatever');
    }

    function unwrap_0() {
        var pTags = $('p');
        $('button').click(function() {
            if (pTags.parent().is('div')) {
                pTags.unwrap();
            } else {
                pTags.wrap('<div></div>');
            }
        });
    }

    function val_0() {
        function displayVals() {
            var singleValues = $('#single').val();
            var multipleValues = $('#multiple').val() as string[] || [];
            // When using jQuery 3:
            // var multipleValues = $( "#multiple" ).val();
            $('p').html('<b>Single:</b> ' + singleValues +
                ' <b>Multiple:</b> ' + multipleValues.join(', '));
        }

        $('select').change(displayVals);
        displayVals();
    }

    function val_1() {
        $('input')
            .keyup(function() {
                var value = $(this).val() as string;
                $('p').text(value);
            })
            .keyup();
    }

    function val_2() {
        $('button').click(function() {
            var text = $(this).text();
            $('input').val(text);
        });
    }

    function val_3() {
        $('input').on('blur', function() {
            $(this).val(function(i, val) {
                return val.toUpperCase();
            });
        });
    }

    function val_4() {
        $('#single').val('Single2');
        $('#multiple').val(['Multiple2', 'Multiple3']);
        $('input').val(['check1', 'check2', 'radio1']);
    }

    function visible_0() {
        $('div:visible').click(function() {
            $(this).css('background', 'yellow');
        });
        $('button').click(function() {
            $('div:hidden').show('fast');
        });
    }

    function width_0() {
        function showWidth(ele: string, w: number) {
            $('div').text('The width for the ' + ele + ' is ' + w + 'px.');
        }

        $('#getp').click(function() {
            showWidth('paragraph', $('p').width()!);
        });
        $('#getd').click(function() {
            showWidth('document', $(document).width()!);
        });
        $('#getw').click(function() {
            showWidth('window', $(window).width()!);
        });
    }

    function width_1() {
        var modWidth = 50;
        $('div').one('click', function() {
            $(this).width(modWidth).addClass('mod');
            modWidth -= 8;
        });
    }

    function wrap_0() {
        $('p').wrap('<div></div>');
    }

    function wrap_1() {
        $('span').wrap('<div><div><p><em><b></b></em></p></div></div>');
    }

    function wrap_2() {
        $('p').wrap(document.createElement('div'));
    }

    function wrap_3() {
        $('p').wrap($('.doublediv'));
    }

    function wrap_all_0() {
        $('p').wrapAll('<div></div>');
    }

    function wrap_all_1() {
        $('span').wrapAll('<div><div><p><em><b></b></em></p></div></div>');
    }

    function wrap_all_2() {
        $('p').wrapAll(document.createElement('div'));
    }

    function wrap_all_3() {
        $('p').wrapAll($('.doublediv'));
    }

    function wrap_inner_0() {
        $('p').wrapInner('<b></b>');
    }

    function wrap_inner_1() {
        $('body').wrapInner('<div><div><p><em><b></b></em></p></div></div>');
    }

    function wrap_inner_2() {
        $('p').wrapInner(document.createElement('b'));
    }

    function wrap_inner_3() {
        $('p').wrapInner($('<span class=\'red\'></span>'));
    }
}
