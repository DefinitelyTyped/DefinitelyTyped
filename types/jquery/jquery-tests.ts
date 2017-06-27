function JQuery() {
    function type_assertion() {
        const $el = $(document.createElement('canvas'));
        const $canvas = $el as JQuery<HTMLCanvasElement>;
    }

    function iterable() {
        for (const a of $('div')) {
            a.textContent = 'myDiv';
        }
    }

    function arrayLike() {
        $('div')[0] === new HTMLElement();
    }

    function ajax() {
        function ajaxComplete() {
            // $ExpectType JQuery<HTMLElement>
            $(document).ajaxComplete(function(event, jqXHR, ajaxOptions) {
                // $ExpectType Document
                this;
                // $ExpectType Event<Document, null>
                event;
                // $ExpectType jqXHR<any>
                jqXHR;
                // $ExpectType AjaxSettings<any>
                ajaxOptions;

                return false;
            });
        }

        function ajaxError() {
            // $ExpectType JQuery<HTMLElement>
            $(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
                // $ExpectType Document
                this;
                // $ExpectType Event<Document, null>
                event;
                // $ExpectType jqXHR<any>
                jqXHR;
                // $ExpectType AjaxSettings<any>
                ajaxSettings;
                // $ExpectType string
                thrownError;

                return false;
            });
        }

        function ajaxSend() {
            // $ExpectType JQuery<HTMLElement>
            $(document).ajaxSend(function(event, jqXHR, ajaxOptions) {
                // $ExpectType Document
                this;
                // $ExpectType Event<Document, null>
                event;
                // $ExpectType jqXHR<any>
                jqXHR;
                // $ExpectType AjaxSettings<any>
                ajaxOptions;

                return false;
            });
        }

        function ajaxStart() {
            // $ExpectType JQuery<HTMLElement>
            $(document).ajaxStart(function() {
                // $ExpectType Document
                this;

                return false;
            });
        }

        function ajaxStop() {
            // $ExpectType JQuery<HTMLElement>
            $(document).ajaxStop(function() {
                // $ExpectType Document
                this;

                return false;
            });
        }

        function ajaxSuccess() {
            // $ExpectType JQuery<HTMLElement>
            $(document).ajaxSuccess(function(event, jqXHR, ajaxOptions, data) {
                // $ExpectType Document
                this;
                // $ExpectType Event<Document, null>
                event;
                // $ExpectType jqXHR<any>
                jqXHR;
                // $ExpectType AjaxSettings<any>
                ajaxOptions;
                // $ExpectType PlainObject<any>
                data;

                return false;
            });
        }

        function load() {
            // $ExpectType JQuery<HTMLElement>
            $('#result').load('/echo/html/', 'data', function(responseText, textStatus, jqXHR) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType string
                responseText;
                // $ExpectType TextStatus
                textStatus;
                // $ExpectType jqXHR<any>
                jqXHR;
            });

            // $ExpectType JQuery<HTMLElement>
            $('#result').load('/echo/html/', { data: 'data' }, function(responseText, textStatus, jqXHR) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType string
                responseText;
                // $ExpectType TextStatus
                textStatus;
                // $ExpectType jqXHR<any>
                jqXHR;
            });

            // $ExpectType JQuery<HTMLElement>
            $('#result').load('/echo/html/', function(responseText, textStatus, jqXHR) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType string
                responseText;
                // $ExpectType TextStatus
                textStatus;
                // $ExpectType jqXHR<any>
                jqXHR;
            });

            // $ExpectType JQuery<HTMLElement>
            $('#result').load('/echo/html/', 'data');

            // $ExpectType JQuery<HTMLElement>
            $('#result').load('/echo/html/', { data: 'data' });
        }
    }

    function attributes() {
        function attr() {
            // $ExpectType JQuery<HTMLElement>
            $('#greatphoto').attr('alt', 'Beijing Brush Seller');

            // $ExpectType JQuery<HTMLElement>
            $('#greatphoto').attr('width', 200);

            // $ExpectType JQuery<HTMLElement>
            $('#greatphoto').attr('title', null);

            // $ExpectType JQuery<HTMLElement>
            $('#greatphoto').attr('alt', function(index, attr) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                attr;

                return 'Beijing Brush Seller';
            });

            // $ExpectType JQuery<HTMLElement>
            $('#greatphoto').attr('width', function(index, attr) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                attr;

                return 200;
            });

            // $ExpectType JQuery<HTMLElement>
            $('#greatphoto').attr('title', function(index, attr) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                attr;
            });

            // $ExpectType JQuery<HTMLElement>
            $('#greatphoto').attr('title', function(index, attr) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                attr;

                return undefined;
            });

            // $ExpectType JQuery<HTMLElement>
            $('img').attr({
                src: '/resources/hat.gif',
                title: 'jQuery',
                alt: 'jQuery Logo'
            });

            // $ExpectType string | undefined
            $('img').attr('src');
        }

        function removeAttr() {
            // $ExpectType JQuery<HTMLElement>
            $('#greatphoto').removeAttr('alt');
        }
    }

    function properties() {
        function prop() {
            // $ExpectType JQuery<HTMLElement>
            $('p').prop('myProp', function(index, oldPropertyValue) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType any
                oldPropertyValue;

                return {};
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').prop('myProp', {});

            // $ExpectType JQuery<HTMLElement>
            $('input[type=\'checkbox\']').prop({
                myProp: true
            });

            // $ExpectType any
            $('input[type=\'checkbox\']').prop('myProp');
        }

        function removeProp() {
            // $ExpectType JQuery<HTMLElement>
            $('p').removeProp('luggageCode');
        }
    }

    function css() {
        // TODO: .css() getters can return 'undefined' for properties that don't exist. Consider changing the return types to reflect this after adding specialized signatures.
        function css() {
            // $ExpectType JQuery<HTMLElement>
            $('p').css('cssProp', 'value');

            // $ExpectType JQuery<HTMLElement>
            $('p').css('cssProp', 20);

            // $ExpectType JQuery<HTMLElement>
            $('p').css('cssProp', function(index, value) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                value;

                return 'value';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').css('cssProp', function(index, value) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                value;

                return 20;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').css('cssProp', function(index, value) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                value;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').css('cssProp', function(index, value) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                value;

                return undefined;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').css({
                myProp1: 'value',
                myProp2: 20,
                myProp3(index, value) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType number
                    index;
                    // $ExpectType string
                    value;

                    return 'value';
                },
                myProp4(index, value) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType number
                    index;
                    // $ExpectType string
                    value;

                    return 20;
                },
                myProp5(index, value) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType number
                    index;
                    // $ExpectType string
                    value;
                },
                myProp6(index, value) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType number
                    index;
                    // $ExpectType string
                    value;

                    return undefined;
                }
            });

            // $ExpectType string
            $('p').css('myProp');

            // $ExpectType PlainObject<string>
            $('p').css([
                'myProp1',
                'myProp2'
            ]);
        }

        function height() {
            // $ExpectType JQuery<HTMLElement>
            $('p').height('200px');

            // $ExpectType JQuery<HTMLElement>
            $('p').height(400);

            // $ExpectType JQuery<HTMLElement>
            $('p').height(function(index, height) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                height;

                return '200px';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').height(function(index, height) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                height;

                return 400;
            });

            // $ExpectType number | undefined
            $('p').height();
        }

        function innerHeight() {
            // $ExpectType JQuery<HTMLElement>
            $('p').innerHeight('200px');

            // $ExpectType JQuery<HTMLElement>
            $('p').innerHeight(400);

            // $ExpectType JQuery<HTMLElement>
            $('p').innerHeight(function(index, height) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                height;

                return '200px';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').innerHeight(function(index, height) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                height;

                return 400;
            });

            // $ExpectType number | undefined
            $('p').innerHeight();
        }

        function outerHeight() {
            // $ExpectType JQuery<HTMLElement>
            $('p').outerHeight('200px');

            // $ExpectType JQuery<HTMLElement>
            $('p').outerHeight(400);

            // $ExpectType JQuery<HTMLElement>
            $('p').outerHeight(function(index, height) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                height;

                return '200px';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').outerHeight(function(index, height) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                height;

                return 400;
            });

            // $ExpectType number | undefined
            $('p').outerHeight();

            // $ExpectType number | undefined
            $('p').outerHeight(true);
        }

        function width() {
            // $ExpectType JQuery<HTMLElement>
            $('p').width('200px');

            // $ExpectType JQuery<HTMLElement>
            $('p').width(400);

            // $ExpectType JQuery<HTMLElement>
            $('p').width(function(index, width) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                width;

                return '200px';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').width(function(index, width) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                width;

                return 400;
            });

            // $ExpectType number | undefined
            $('p').width();
        }

        function innerWidth() {
            // $ExpectType JQuery<HTMLElement>
            $('p').innerWidth('200px');

            // $ExpectType JQuery<HTMLElement>
            $('p').innerWidth(400);

            // $ExpectType JQuery<HTMLElement>
            $('p').innerWidth(function(index, width) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                width;

                return '200px';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').innerWidth(function(index, width) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                width;

                return 400;
            });

            // $ExpectType number | undefined
            $('p').innerWidth();
        }

        function outerWidth() {
            // $ExpectType JQuery<HTMLElement>
            $('p').outerWidth('200px');

            // $ExpectType JQuery<HTMLElement>
            $('p').outerWidth(400);

            // $ExpectType JQuery<HTMLElement>
            $('p').outerWidth(function(index, width) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                width;

                return '200px';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').outerWidth(function(index, width) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType number
                width;

                return 400;
            });

            // $ExpectType number | undefined
            $('p').outerWidth();

            // $ExpectType number | undefined
            $('p').outerWidth(true);
        }

        function offset() {
            // $ExpectType JQuery<HTMLElement>
            $('p').offset({
                left: 20,
                top: 50
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').offset(function(index, coords) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType Coordinates
                coords;

                return {
                    left: 20,
                    top: 50
                };
            });

            // $ExpectType Coordinates
            $('p').offset();
        }

        function position() {
            // $ExpectType Coordinates
            $('p').position();
        }

        function scrollLeft() {
            // $ExpectType JQuery<HTMLElement>
            $('p').scrollLeft(200);

            // $ExpectType number
            $('p').scrollLeft();
        }

        function scrollTop() {
            // $ExpectType JQuery<HTMLElement>
            $('p').scrollTop(200);

            // $ExpectType number
            $('p').scrollTop();
        }

        function addClass() {
            // $ExpectType JQuery<HTMLElement>
            $('p').addClass('className');

            // $ExpectType JQuery<HTMLElement>
            $('p').addClass(function(index, currentClassName) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                currentClassName;

                return 'className';
            });
        }

        function hasClass() {
            // $ExpectType boolean
            $('p').hasClass('className');
        }

        function removeClass() {
            // $ExpectType JQuery<HTMLElement>
            $('p').removeClass('className');

            // $ExpectType JQuery<HTMLElement>
            $('p').removeClass(function(index, currentClassName) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                currentClassName;

                return 'className';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').removeClass();
        }

        function toggleClass() {
            // $ExpectType JQuery<HTMLElement>
            $('p').toggleClass('className', true);

            // $ExpectType JQuery<HTMLElement>
            $('p').toggleClass(function(index, className, state) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                className;
                // $ExpectType true
                state;

                return 'className';
            }, true);

            // $ExpectType JQuery<HTMLElement>
            $('p').toggleClass('className');

            // $ExpectType JQuery<HTMLElement>
            $('p').toggleClass(function(index, className, state) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                className;
                // $ExpectType boolean
                state;

                return 'className';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').toggleClass(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').toggleClass();
        }
    }

    function data() {
        function data() {
            // $ExpectType any
            $('p').data('myData', undefined);

            // $ExpectType JQuery<HTMLElement>
            $('p').data('myData', {});

            // $ExpectType JQuery<HTMLElement>
            $('p').data({
                myData1: {},
                myData2: false
            });

            // $ExpectType any
            $('p').data('myData');

            // $ExpectType PlainObject<any>
            $('p').data();
        }

        function removeData() {
            // $ExpectType JQuery<HTMLElement>
            $('p').removeData('myData');

            // $ExpectType JQuery<HTMLElement>
            $('p').removeData([
                'myData1',
                'myData2'
            ]);

            // $ExpectType JQuery<HTMLElement>
            $('p').removeData();
        }
    }

    function effects() {
        function animate() {
            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: 200,
                opacity: 'toggle'
            }, 5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;

                $(this).after('<div>Animation complete.</div>');
            });

            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: 200,
                opacity: 'toggle'
            }, 5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: 200,
                opacity: 'toggle'
            }, 5000, function() {
                // $ExpectType HTMLElement
                this;

                $(this).after('<div>Animation complete.</div>');
            });

            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: 200,
                opacity: 'toggle'
            }, 'linear', function() {
                // $ExpectType HTMLElement
                this;

                $(this).after('<div>Animation complete.</div>');
            });

            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: 200,
                opacity: 'toggle'
            }, 5000);

            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: 200,
                opacity: 'toggle'
            }, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: 200,
                opacity: 'toggle'
            }, function() {
                // $ExpectType HTMLElement
                this;

                $(this).after('<div>Animation complete.</div>');
            });

            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: 'toggle',
                height: 'toggle'
            }, {
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('#book').animate({
                width: ['toggle', 'swing'],
                height: 200,
                opacity: 'toggle'
            });
        }

        function fadeIn() {
            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn('linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn('linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn({
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeIn();
        }

        function fadeOut() {
            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut('linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut('linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut({
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeOut();
        }

        function fadeToggle() {
            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle('linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle('linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle({
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeToggle();
        }

        function slideDown() {
            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown('linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown('linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown({
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideDown();
        }

        function slideToggle() {
            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle('linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle('linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle({
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideToggle();
        }

        function slideUp() {
            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp('linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp('linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp({
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').slideUp();
        }

        function fadeTo() {
            // $ExpectType JQuery<HTMLElement>
            $('p').fadeTo(5000, 0.9, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeTo(5000, 0.9, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeTo(5000, 0.9, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').fadeTo(5000, 0.9);
        }

        function toggle() {
            // $ExpectType JQuery<HTMLElement>
            $('p').toggle(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').toggle(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').toggle(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').toggle(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').toggle(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').toggle('linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').toggle(true);

            // $ExpectType JQuery<HTMLElement>
            $('p').toggle();
        }

        function hide() {
            // $ExpectType JQuery<HTMLElement>
            $('p').hide(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').hide(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').hide(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').hide(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').hide(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').hide({
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').hide();
        }

        function show() {
            // $ExpectType JQuery<HTMLElement>
            $('p').show(5000, 'linear', function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').show(5000, 'linear');

            // $ExpectType JQuery<HTMLElement>
            $('p').show(5000, function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').show(5000);

            // $ExpectType JQuery<HTMLElement>
            $('p').show(function() {
                // $ExpectType HTMLElement
                this;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').show({
                duration: 5000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete() {
                    $(this).after('<div>Animation complete.</div>');
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').show();
        }
    }

    function queue() {
        function clearQueue() {
            // $ExpectType JQuery<HTMLElement>
            $('p').clearQueue('myQueue');

            // $ExpectType JQuery<HTMLElement>
            $('p').clearQueue();
        }

        function delay() {
            // $ExpectType JQuery<HTMLElement>
            $('p').delay('fast', 'myQueue');

            // $ExpectType JQuery<HTMLElement>
            $('p').delay('slow');
        }

        function dequeue() {
            // $ExpectType JQuery<HTMLElement>
            $('p').dequeue('myQueue');

            // $ExpectType JQuery<HTMLElement>
            $('p').dequeue();
        }

        function finish() {
            // $ExpectType JQuery<HTMLElement>
            $('p').finish('myQueue');

            // $ExpectType JQuery<HTMLElement>
            $('p').finish();
        }

        function queue() {
            // $ExpectType JQuery<HTMLElement>
            $('p').queue('myQueue', function(next) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType () => void
                next;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').queue('myQueue', [
                function(next) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType () => void
                    next;
                },
                function(next) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType () => void
                    next;
                }
            ]);

            // $ExpectType JQuery<HTMLElement>
            $('p').queue(function(next) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType () => void
                next;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').queue([
                function(next) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType () => void
                    next;
                },
                function(next) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType () => void
                    next;
                }
            ]);

            // $ExpectType Queue<HTMLElement>
            $('p').queue('myQueue');

            // $ExpectType Queue<HTMLElement>
            $('p').queue();
        }

        function stop() {
            // $ExpectType JQuery<HTMLElement>
            $('p').stop('myQueue', true, false);

            // $ExpectType JQuery<HTMLElement>
            $('p').stop('myQueue', true);

            // $ExpectType JQuery<HTMLElement>
            $('p').stop(true, false);

            // $ExpectType JQuery<HTMLElement>
            $('p').stop(true);
        }

        function promise() {
            // $ExpectType { description: string; } & Promise<JQuery<HTMLElement>, any, any>
            $('p').promise('myQueue', { description: 'desc' });

            // $ExpectType { description: string; } & Promise<JQuery<HTMLElement>, any, any>
            $('p').promise({ description: 'desc' });

            // $ExpectType Promise<JQuery<HTMLElement>, any, any>
            $('p').promise();
        }
    }

    function events() {
        // [bind() overloads] https://github.com/jquery/api.jquery.com/issues/1048
        function bind() {
            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('p').bind({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                },
                myEvent2: false
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', null);

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', undefined);
        }

        function delegate() {
            // $ExpectType JQuery<HTMLElement>
            $('table').delegate('td', 'myEvent', 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').delegate('td', 'myEvent', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').delegate('td', 'myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').delegate('td', {
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent2: false
            });
        }

        function off() {
            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td');

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent');

            // $ExpectType JQuery<HTMLElement>
            $('table').off({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent2: false
            }, 'td');

            // $ExpectType JQuery<HTMLElement>
            $('table').off({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent2: false
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').off($.Event('myEvent'));

            // $ExpectType JQuery<HTMLElement>
            $('table').off();
        }

        function on() {
            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', 'td', 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', null, 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', 'td', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', 'td', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', 3, function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, number>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                },
                myEvent2: false
            }, 'td', 'myData');

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                },
                myEvent2: false
            }, null, 'myData');

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent2: false
            }, 'td');

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, number>
                    event;
                },
                myEvent2: false
            }, 3);

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent2: false
            });
        }

        function one() {
            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', 'td', 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', null, 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', 'td', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', 'td', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', 3, function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, number>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                },
                myEvent2: false
            }, 'td', 'myData');

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                },
                myEvent2: false
            }, null, 'myData');

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent2: false
            }, 'td');

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, number>
                    event;
                },
                myEvent2: false
            }, 3);

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent2: false
            });
        }

        function trigger() {
            // $ExpectType JQuery<HTMLElement>
            $('p').trigger('myEvent', ['Custom', 'Event']);

            // $ExpectType JQuery<HTMLElement>
            $('p').trigger('myEvent', { myData: 'myData' });

            // $ExpectType JQuery<HTMLElement>
            $('p').trigger('myEvent', 'Custom');

            // $ExpectType JQuery<HTMLElement>
            $('p').trigger('myEvent', 3);

            // $ExpectType JQuery<HTMLElement>
            $('p').trigger($.Event('myEvent'), ['Custom', 'Event']);

            // $ExpectType JQuery<HTMLElement>
            $('p').trigger($.Event('myEvent'), { myData: 'myData' });

            // $ExpectType JQuery<HTMLElement>
            $('p').trigger($.Event('myEvent'), 'Custom');

            // $ExpectType JQuery<HTMLElement>
            $('p').trigger($.Event('myEvent'), 3);
        }

        function triggerHandler() {
            // $ExpectType any
            $('p').triggerHandler('myEvent', ['Custom', 'Event']);

            // $ExpectType any
            $('p').triggerHandler('myEvent', { myData: 'myData' });

            // $ExpectType any
            $('p').triggerHandler('myEvent', 'Custom');

            // $ExpectType any
            $('p').triggerHandler('myEvent', 3);

            // $ExpectType any
            $('p').triggerHandler($.Event('myEvent'), ['Custom', 'Event']);

            // $ExpectType any
            $('p').triggerHandler($.Event('myEvent'), { myData: 'myData' });

            // $ExpectType any
            $('p').triggerHandler($.Event('myEvent'), 'Custom');

            // $ExpectType any
            $('p').triggerHandler($.Event('myEvent'), 3);
        }

        function unbind() {
            // $ExpectType JQuery<HTMLElement>
            $('p').unbind('myEvent', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').unbind('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('p').unbind('myEvent');

            // $ExpectType JQuery<HTMLElement>
            $('p').unbind($.Event('myEvent'));

            // $ExpectType JQuery<HTMLElement>
            $('p').unbind();
        }

        function undelegate() {
            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click');

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', {
                myEvent1(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent2: false
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('.tt');

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate();
        }

        function blur() {
            // $ExpectType JQuery<HTMLElement>
            $('p').blur('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').blur(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').blur(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').blur();
        }

        function change() {
            // $ExpectType JQuery<HTMLElement>
            $('p').change('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').change(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').change(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').change();
        }

        function click() {
            // $ExpectType JQuery<HTMLElement>
            $('p').click('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').click(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').click(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').click();
        }

        function contextmenu() {
            // $ExpectType JQuery<HTMLElement>
            $('p').contextmenu('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').contextmenu(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').contextmenu(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').contextmenu();
        }

        function dblclick() {
            // $ExpectType JQuery<HTMLElement>
            $('p').dblclick('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').dblclick(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').dblclick(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').dblclick();
        }

        function focus() {
            // $ExpectType JQuery<HTMLElement>
            $('p').focus('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focus(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focus(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').focus();
        }

        function focusin() {
            // $ExpectType JQuery<HTMLElement>
            $('p').focusin('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focusin(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focusin(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').focusin();
        }

        function focusout() {
            // $ExpectType JQuery<HTMLElement>
            $('p').focusout('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focusout(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focusout(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').focusout();
        }

        function keydown() {
            // $ExpectType JQuery<HTMLElement>
            $('p').keydown('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keydown(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keydown(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').keydown();
        }

        function keypress() {
            // $ExpectType JQuery<HTMLElement>
            $('p').keypress('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keypress(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keypress(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').keypress();
        }

        function keyup() {
            // $ExpectType JQuery<HTMLElement>
            $('p').keyup('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keyup(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keyup(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').keyup();
        }

        function mousedown() {
            // $ExpectType JQuery<HTMLElement>
            $('p').mousedown('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mousedown(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mousedown(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').mousedown();
        }

        function mouseenter() {
            // $ExpectType JQuery<HTMLElement>
            $('p').mouseenter('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseenter(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseenter(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseenter();
        }

        function mouseleave() {
            // $ExpectType JQuery<HTMLElement>
            $('p').mouseleave('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseleave(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseleave(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseleave();
        }

        function mousemove() {
            // $ExpectType JQuery<HTMLElement>
            $('p').mousemove('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mousemove(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mousemove(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').mousemove();
        }

        function mouseout() {
            // $ExpectType JQuery<HTMLElement>
            $('p').mouseout('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseout(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseout(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseout();
        }

        function mouseover() {
            // $ExpectType JQuery<HTMLElement>
            $('p').mouseover('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseover(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseover(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseover();
        }

        function mouseup() {
            // $ExpectType JQuery<HTMLElement>
            $('p').mouseup('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseup(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseup(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseup();
        }

        function resize() {
            // $ExpectType JQuery<HTMLElement>
            $('p').resize('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').resize(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').resize(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').resize();
        }

        function scroll() {
            // $ExpectType JQuery<HTMLElement>
            $('p').scroll('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').scroll(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').scroll(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').scroll();
        }

        function select() {
            // $ExpectType JQuery<HTMLElement>
            $('p').select('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').select(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').select(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').select();
        }

        function submit() {
            // $ExpectType JQuery<HTMLElement>
            $('p').submit('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').submit(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').submit(false);

            // $ExpectType JQuery<HTMLElement>
            $('p').submit();
        }

        function hover() {
            // $ExpectType JQuery<HTMLElement>
            $('p').hover(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            }, function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').hover(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            }, false);

            // $ExpectType JQuery<HTMLElement>
            $('p').hover(false, function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').hover(false, false);

            // $ExpectType JQuery<HTMLElement>
            $('p').hover(function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').hover(false);
        }

        function ready() {
            // $ExpectType JQuery<HTMLElement>
            $('p').ready(($) => {
                // $ExpectType JQueryStatic<HTMLElement>
                $;
            });
        }
    }

    function manipulation() {
        function after() {
            // $ExpectType JQuery<HTMLElement>
            $('p').after('<p></p>', new Element(), new Text(), $('p'), [new Element(), new Text()]);

            // $ExpectType JQuery<HTMLElement>
            $('p').after(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return '<p></p>';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').after(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return new Element();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').after(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return new Text();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').after(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return [new Element(), new Text()];
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').after(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return $('p');
            });
        }

        function append() {
            // $ExpectType JQuery<HTMLElement>
            $('p').append('<p></p>', new Element(), new Text(), $('p'), [new Element(), new Text()]);

            // $ExpectType JQuery<HTMLElement>
            $('p').append(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return '<p></p>';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').append(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return new Element();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').append(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return new Text();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').append(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return [new Element(), new Text()];
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').append(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return $('p');
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').append($.parseHTML('<span>myTextNode <!-- myComment --></span>'));
        }

        function before() {
            // $ExpectType JQuery<HTMLElement>
            $('p').before('<p></p>', new Element(), new Text(), $('p'), [new Element(), new Text()]);

            // $ExpectType JQuery<HTMLElement>
            $('p').before(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return '<p></p>';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').before(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return new Element();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').before(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return new Text();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').before(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return [new Element(), new Text()];
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').before(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return $('p');
            });
        }

        function prepend() {
            // $ExpectType JQuery<HTMLElement>
            $('p').prepend('<p></p>', new Element(), new Text(), $('p'), [new Element(), new Text()]);

            // $ExpectType JQuery<HTMLElement>
            $('p').prepend(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return '<p></p>';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').prepend(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return new Element();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').prepend(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return new Text();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').prepend(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return [new Element(), new Text()];
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').prepend(function(index, html) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                html;

                return $('p');
            });
        }

        function appendTo() {
            // $ExpectType JQuery<HTMLElement>
            $('span').appendTo('p');

            // $ExpectType JQuery<HTMLElement>
            $('span').appendTo('<p></p>');

            // $ExpectType JQuery<HTMLElement>
            $('span').appendTo(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('span').appendTo([new HTMLElement()]);

            // $ExpectType JQuery<HTMLElement>
            $('span').appendTo($('p'));
        }

        function insertAfter() {
            // $ExpectType JQuery<HTMLElement>
            $('span').insertAfter('p');

            // $ExpectType JQuery<HTMLElement>
            $('span').insertAfter('<p></p>');

            // $ExpectType JQuery<HTMLElement>
            $('span').insertAfter(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('span').insertAfter([new HTMLElement()]);

            // $ExpectType JQuery<HTMLElement>
            $('span').insertAfter($('p'));
        }

        function insertBefore() {
            // $ExpectType JQuery<HTMLElement>
            $('span').insertBefore('p');

            // $ExpectType JQuery<HTMLElement>
            $('span').insertBefore('<p></p>');

            // $ExpectType JQuery<HTMLElement>
            $('span').insertBefore(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('span').insertBefore([new HTMLElement()]);

            // $ExpectType JQuery<HTMLElement>
            $('span').insertBefore($('p'));
        }

        function prependTo() {
            // $ExpectType JQuery<HTMLElement>
            $('span').prependTo('p');

            // $ExpectType JQuery<HTMLElement>
            $('span').prependTo('<p></p>');

            // $ExpectType JQuery<HTMLElement>
            $('span').prependTo(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('span').prependTo([new HTMLElement()]);

            // $ExpectType JQuery<HTMLElement>
            $('span').prependTo($('p'));
        }

        function clone() {
            // $ExpectType JQuery<HTMLElement>
            $('p').clone(true, true);

            // $ExpectType JQuery<HTMLElement>
            $('p').clone(true);

            // $ExpectType JQuery<HTMLElement>
            $('p').clone();
        }

        function detach() {
            // $ExpectType JQuery<HTMLElement>
            $('p').detach('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').detach();
        }

        function empty() {
            // $ExpectType JQuery<HTMLElement>
            $('p').empty();
        }

        function remove() {
            // $ExpectType JQuery<HTMLElement>
            $('p').remove('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').remove();
        }

        function replaceAll() {
            // $ExpectType JQuery<HTMLElement>
            $('p').replaceAll('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').replaceAll($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').replaceAll(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').replaceAll([new HTMLElement()]);
        }

        function replaceWith() {
            // $ExpectType JQuery<HTMLElement>
            $('p').replaceWith('<span></span>');

            // $ExpectType JQuery<HTMLElement>
            $('p').replaceWith($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').replaceWith(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').replaceWith([new HTMLElement()]);

            // $ExpectType JQuery<HTMLElement>
            $('p').replaceWith(function() {
                // $ExpectType HTMLElement
                this;

                return this;
            });
        }

        function unwrap() {
            // $ExpectType JQuery<HTMLElement>
            $('p').unwrap('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').unwrap();
        }

        function wrap() {
            // $ExpectType JQuery<HTMLElement>
            $('p').wrap('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').wrap('<span></span>');

            // $ExpectType JQuery<HTMLElement>
            $('p').wrap(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').wrap($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').wrap(function(index) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;

                return '<span></span>';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').wrap(function(index) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;

                return $('span');
            });
        }

        function wrapAll() {
            // $ExpectType JQuery<HTMLElement>
            $('p').wrapAll('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapAll('<span></span>');

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapAll(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapAll($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapAll(function() {
                // $ExpectType HTMLElement
                this;

                return '<span></span>';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapAll(function() {
                // $ExpectType HTMLElement
                this;

                return $('span');
            });
        }

        function wrapInner() {
            // $ExpectType JQuery<HTMLElement>
            $('p').wrapInner('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapInner('<span></span>');

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapInner(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapInner($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapInner(function(index) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;

                return '<span></span>';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapInner(function(index) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;

                return $('span');
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').wrapInner(function(index) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;

                return new HTMLElement();
            });
        }

        function html() {
            // $ExpectType JQuery<HTMLElement>
            $('p').html('<span></span>');

            // $ExpectType JQuery<HTMLElement>
            $('p').html(function(index, oldhtml) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                oldhtml;

                return oldhtml;
            });

            // $ExpectType string
            $('p').html();
        }

        function text() {
            // $ExpectType JQuery<HTMLElement>
            $('p').text('myText');

            // $ExpectType JQuery<HTMLElement>
            $('p').text(4);

            // $ExpectType JQuery<HTMLElement>
            $('p').text(true);

            // $ExpectType JQuery<HTMLElement>
            $('p').text(function(index, text) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                text;

                return 'myText';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').text(function(index, text) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                text;

                return 3;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').text(function(index, text) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                text;

                return false;
            });

            // $ExpectType string
            $('p').text();
        }

        function val() {
            // $ExpectType JQuery<HTMLElement>
            $('p').val('myVal');

            // $ExpectType JQuery<HTMLElement>
            $('p').val(5);

            // $ExpectType JQuery<HTMLElement>
            $('p').val(['myVal']);

            // $ExpectType JQuery<HTMLElement>
            $('p').val(function(index, value) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType string
                value;

                return 'myVal';
            });

            // $ExpectType string | number | string[] | null | undefined
            $('p').val();
        }
    }

    function traversing() {
        function add() {
            // $ExpectType JQuery<HTMLElement>
            $('p').add('span', new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').add('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').add(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').add([new HTMLElement()]);

            // $ExpectType JQuery<HTMLElement>
            $('p').add('<span></span>');

            // $ExpectType JQuery<HTMLElement>
            $('p').add($('span'));
        }

        function closest() {
            // $ExpectType JQuery<HTMLElement>
            $('p').closest('span', new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').closest('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').closest(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').closest($('span'));
        }

        function find() {
            // $ExpectType JQuery<HTMLElement>
            $('p').find('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').find(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').find($('span'));
        }

        function addBack() {
            // $ExpectType JQuery<HTMLElement>
            $('p').addBack('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').addBack();
        }

        function children() {
            // $ExpectType JQuery<HTMLElement>
            $('p').children('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').children();
        }

        function siblings() {
            // $ExpectType JQuery<HTMLElement>
            $('p').siblings('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').siblings();
        }

        function contents() {
            // $ExpectType JQuery<HTMLElement | Text | Comment>
            $('p').contents();
        }

        function end() {
            // $ExpectType JQuery<HTMLElement>
            $('p').end();
        }

        function first() {
            // $ExpectType JQuery<HTMLElement>
            $('p').first();
        }

        function last() {
            // $ExpectType JQuery<HTMLElement>
            $('p').last();
        }

        function offsetParent() {
            // $ExpectType JQuery<HTMLElement>
            $('p').offsetParent();
        }

        function filter() {
            // $ExpectType JQuery<HTMLElement>
            $('p').filter('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').filter(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').filter([new HTMLElement()]);

            // $ExpectType JQuery<HTMLElement>
            $('p').filter($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').filter(function(index, element) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                element;

                return false;
            });
        }

        function not() {
            // $ExpectType JQuery<HTMLElement>
            $('p').not('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').not(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').not([new HTMLElement()]);

            // $ExpectType JQuery<HTMLElement>
            $('p').not($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').not(function(index, element) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                element;

                return false;
            });
        }

        function is() {
            // $ExpectType boolean
            $('p').is('span');

            // $ExpectType boolean
            $('p').is(new HTMLElement());

            // $ExpectType boolean
            $('p').is([new HTMLElement()]);

            // $ExpectType boolean
            $('p').is($('span'));

            // $ExpectType boolean
            $('p').is(function(index, element) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                element;

                return false;
            });
        }

        function next() {
            // $ExpectType JQuery<HTMLElement>
            $('p').next('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').next();
        }

        function nextAll() {
            // $ExpectType JQuery<HTMLElement>
            $('p').nextAll('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').nextAll();
        }

        function nextUntil() {
            // $ExpectType JQuery<HTMLElement>
            $('p').nextUntil('span', 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').nextUntil(new HTMLElement(), 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').nextUntil($('span'), 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').nextUntil('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').nextUntil(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').nextUntil($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').nextUntil();
        }

        function prev() {
            // $ExpectType JQuery<HTMLElement>
            $('p').prev('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').prev();
        }

        function prevAll() {
            // $ExpectType JQuery<HTMLElement>
            $('p').prevAll('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').prevAll();
        }

        function prevUntil() {
            // $ExpectType JQuery<HTMLElement>
            $('p').prevUntil('span', 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').prevUntil(new HTMLElement(), 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').prevUntil($('span'), 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').prevUntil('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').prevUntil(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').prevUntil($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').prevUntil();
        }

        function parent() {
            // $ExpectType JQuery<HTMLElement>
            $('p').parent('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').parent();
        }

        function parents() {
            // $ExpectType JQuery<HTMLElement>
            $('p').parents('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').parents();
        }

        function parentsUntil() {
            // $ExpectType JQuery<HTMLElement>
            $('p').parentsUntil('span', 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').parentsUntil(new HTMLElement(), 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').parentsUntil($('span'), 'span');

            // $ExpectType JQuery<HTMLElement>
            $('p').parentsUntil('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').parentsUntil(new HTMLElement());

            // $ExpectType JQuery<HTMLElement>
            $('p').parentsUntil($('span'));

            // $ExpectType JQuery<HTMLElement>
            $('p').parentsUntil();
        }

        function eq() {
            // $ExpectType JQuery<HTMLElement>
            $('p').eq(0);
        }

        function has() {
            // $ExpectType JQuery<HTMLElement>
            $('p').has('span');

            // $ExpectType JQuery<HTMLElement>
            $('p').has(new HTMLElement());
        }

        function map() {
            // $ExpectType JQuery<HTMLElement>
            $('p').map(function(index, domElement) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                domElement;

                return 'myVal';
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').map(function(index, domElement) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                domElement;

                return ['myVal1', 'myVal2'];
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').map(function(index, domElement) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                domElement;

                return null;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').map(function(index, domElement) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                domElement;

                return undefined;
            });
        }

        function slice() {
            // $ExpectType JQuery<HTMLElement>
            $('p').slice(0, 10);

            // $ExpectType JQuery<HTMLElement>
            $('p').slice(0);
        }

        function pushStack() {
            // $ExpectType JQuery<HTMLElement>
            $('p').pushStack([new HTMLElement()], 'name', ['arg']);

            // $ExpectType JQuery<HTMLElement>
            $('p').pushStack([new HTMLElement()]);
        }
    }

    function misc() {
        function serialize() {
            // $ExpectType string
            $('p').serialize();
        }

        function serializeArray() {
            // $ExpectType NameValuePair[]
            $('p').serializeArray();
        }

        function each() {
            // $ExpectType JQuery<HTMLElement>
            $('p').each(function(index, element) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                element;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').each(function(index, element) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                element;

                return false;
            });
        }

        function extend() {
            // $ExpectType JQuery<HTMLElement>
            $.fn.extend({ myPlugin: {} });
        }

        function get() {
            // $ExpectType HTMLElement
            $('p').get(0);

            // $ExpectType HTMLElement[]
            $('p').get();
        }

        function index() {
            // $ExpectType number
            $('p').index('span');

            // $ExpectType number
            $('p').index(new HTMLElement());

            // $ExpectType number
            $('p').index($('span'));

            // $ExpectType number
            $('p').index();
        }

        function toArray() {
            // $ExpectType HTMLElement[]
            $('p').toArray();
        }
    }
}

function JQueryStatic() {
    function type_assertion() {
        const $Canvas = $ as JQueryStatic<HTMLCanvasElement>;
    }

    function type_annotation() {
        const jq: JQueryStatic = $;
    }

    function call_signature() {
        // #ExpectType JQuery<HTMLElement>
        $('<p></p>', new Document());

        // #ExpectType JQuery<HTMLElement>
        $('<p></p>', {
            class: 'my-div',
            on: {
                touchstart() {
                    // Do something
                }
            }
        });

        // #ExpectType JQuery<HTMLElement>
        $('span', new HTMLElement());

        // #ExpectType JQuery<HTMLElement>
        $('span', new Document());

        // #ExpectType JQuery<HTMLElement>
        $('span', $('p'));

        // #ExpectType JQuery<HTMLElement>
        $('span');

        // #ExpectType JQuery<HTMLElement>
        $('<p></p>');

        // #ExpectType JQuery<HTMLElement>
        $(new HTMLElement());

        // #ExpectType JQuery<HTMLElement>
        $([new HTMLElement()]);

        // #ExpectType JQuery<HTMLElement>
        $({ foo: 'bar', hello: 'world' });

        // #ExpectType JQuery<HTMLElement>
        $($('p'));

        // #ExpectType JQuery<HTMLElement>
        $(function($) {
            // #ExpectType Document
            this;
            // #ExpectType JQueryStatic<HTMLElement>
            $;
        });

        // #ExpectType JQuery<HTMLElement>
        $();
    }

    function Callbacks() {
        // #ExpectType Callbacks
        $.Callbacks('once');

        // #ExpectType Callbacks
        $.Callbacks();
    }

    function Event() {
        function constructor() {
            const e = $.Event('click');
            e.stopPropagation();
        }
    }

    function ajax() {
        // $ExpectType jqXHR<any>
        $.ajax('url', {
            cache: true
        });
    }

    function ajaxPrefilter() {
        // $ExpectType void
        $.ajaxPrefilter('dataTypes', (options, originalOptions, jqXHR) => {
            // $ExpectType AjaxSettings<any>
            options;
            // $ExpectType AjaxSettings<any>
            originalOptions;
            // $ExpectType jqXHR<any>
            jqXHR;

            return 'filtered';
        });

        // $ExpectType void
        $.ajaxPrefilter('dataTypes', (options, originalOptions, jqXHR) => {
            // $ExpectType AjaxSettings<any>
            options;
            // $ExpectType AjaxSettings<any>
            originalOptions;
            // $ExpectType jqXHR<any>
            jqXHR;
        });

        // $ExpectType void
        $.ajaxPrefilter((options, originalOptions, jqXHR) => {
            // $ExpectType AjaxSettings<any>
            options;
            // $ExpectType AjaxSettings<any>
            originalOptions;
            // $ExpectType jqXHR<any>
            jqXHR;

            return 'filtered';
        });

        // $ExpectType void
        $.ajaxPrefilter((options, originalOptions, jqXHR) => {
            // $ExpectType AjaxSettings<any>
            options;
            // $ExpectType AjaxSettings<any>
            originalOptions;
            // $ExpectType jqXHR<any>
            jqXHR;
        });
    }

    function ajaxSetup() {
        // $ExpectType AjaxSettings<any>
        $.ajaxSetup({
            cache: true
        });
    }

    function ajaxTransport() {
        // $ExpectType void
        $.ajaxTransport('dataTypes', (options, originalOptions, jqXHR) => {
            // $ExpectType AjaxSettings<any>
            options;
            // $ExpectType AjaxSettings<any>
            originalOptions;
            // $ExpectType jqXHR<any>
            jqXHR;

            return {
                send(headers, completeCallback) {
                    // $ExpectType PlainObject<any>
                    headers;
                    // $ExpectType SuccessCallback
                    completeCallback;
                },
                abort() { }
            };
        });

        // $ExpectType void
        $.ajaxTransport('dataTypes', (options, originalOptions, jqXHR) => {
            // $ExpectType AjaxSettings<any>
            options;
            // $ExpectType AjaxSettings<any>
            originalOptions;
            // $ExpectType jqXHR<any>
            jqXHR;
        });
    }

    function contains() {
        // $ExpectType boolean
        $.contains(new HTMLElement(), new HTMLElement());
    }

    function css() {
        // $ExpectType any
        $.css(new HTMLElement(), {});
    }

    function data() {
        // $ExpectType any
        $.data(new HTMLElement(), 'myKey', undefined);

        // $ExpectType "myValue"
        $.data(new HTMLElement(), 'myKey', 'myValue');

        // $ExpectType any
        $.data(new HTMLElement(), 'myKey');

        // $ExpectType any
        $.data(new HTMLElement());
    }

    function dequeue() {
        // $ExpectType void
        $.dequeue(new HTMLElement(), 'myQueue');

        // $ExpectType void
        $.dequeue(new HTMLElement());
    }

    function each() {
        // $ExpectType ArrayLike<string>
        $.each(['myVal1', 'myVal2'], function(index, val) {
            // $ExpectType string
            this;
            // $ExpectType number
            index;
            // $ExpectType string
            val;

            return false;
        });

        // $ExpectType ArrayLike<string>
        $.each(['myVal1', 'myVal2'], function(index, val) {
            // $ExpectType string
            this;
            // $ExpectType number
            index;
            // $ExpectType string
            val;

            return 10;
        });

        // $ExpectType ArrayLike<string>
        $.each(['myVal1', 'myVal2'], function(index, val) {
            // $ExpectType string
            this;
            // $ExpectType number
            index;
            // $ExpectType string
            val;
        });

        // $ExpectType { myVal1: boolean; myVal2: () => 10; myVal3: string; }
        $.each({
            myVal1: false,
            myVal2: () => {
                return 10;
            },
            myVal3: 'myVal3'
        }, function(propertyName, valueOfProperty) {
            // $ExpectType string | boolean | (() => 10)
            this;
            // $ExpectType "myVal1" | "myVal2" | "myVal3"
            propertyName;
            // $ExpectType string | boolean | (() => 10)
            valueOfProperty;

            return false;
        });

        // $ExpectType { myVal1: boolean; myVal2: () => 10; myVal3: string; }
        $.each({
            myVal1: false,
            myVal2: () => {
                return 10;
            },
            myVal3: 'myVal3'
        }, function(propertyName, valueOfProperty) {
            // $ExpectType string | boolean | (() => 10)
            this;
            // $ExpectType "myVal1" | "myVal2" | "myVal3"
            propertyName;
            // $ExpectType string | boolean | (() => 10)
            valueOfProperty;

            return 10;
        });

        // $ExpectType { myVal1: boolean; myVal2: () => 10; myVal3: string; }
        $.each({
            myVal1: false,
            myVal2: () => {
                return 10;
            },
            myVal3: 'myVal3'
        }, function(propertyName, valueOfProperty) {
            // $ExpectType string | boolean | (() => 10)
            this;
            // $ExpectType "myVal1" | "myVal2" | "myVal3"
            propertyName;
            // $ExpectType string | boolean | (() => 10)
            valueOfProperty;
        });
    }

    function error() {
        jQuery.error = console.error;
    }

    function escapeSelector() {
        // $ExpectType string
        $.escapeSelector('span');
    }

    function extend() {
        const t = { name: 'myObj' };
        const u = new EventTarget();
        const v = new Node();
        const w = new Comment();
        const x = new Text();
        const y = new Element();
        const z = new HTMLElement();
        const a = new SVGElement();

        // $ExpectType { name: string; } & EventTarget & Node & Comment & Text & Element & HTMLElement
        $.extend(true, t, u, v, w, x, y, z);

        // $ExpectType { name: string; } & EventTarget & Node & Comment & Text & Element
        $.extend(true, t, u, v, w, x, y);

        // $ExpectType { name: string; } & EventTarget & Node & Comment & Text
        $.extend(true, t, u, v, w, x);

        // $ExpectType { name: string; } & EventTarget & Node & Comment
        $.extend(true, t, u, v, w);

        // $ExpectType { name: string; } & EventTarget & Node
        $.extend(true, t, u, v);

        // $ExpectType { name: string; } & EventTarget
        $.extend(true, t, u);

        // $ExpectType any
        $.extend(true, t, u, v, w, x, y, z, a);

        // $ExpectType { name: string; } & EventTarget & Node & Comment & Text & Element & HTMLElement
        $.extend(t, u, v, w, x, y, z);

        // $ExpectType { name: string; } & EventTarget & Node & Comment & Text & Element
        $.extend(t, u, v, w, x, y);

        // $ExpectType { name: string; } & EventTarget & Node & Comment & Text
        $.extend(t, u, v, w, x);

        // $ExpectType { name: string; } & EventTarget & Node & Comment
        $.extend(t, u, v, w);

        // $ExpectType { name: string; } & EventTarget & Node
        $.extend(t, u, v);

        // $ExpectType { name: string; } & EventTarget
        $.extend(t, u);

        // $ExpectType any
        $.extend(t, u, v, w, x, y, z, a);
    }

    function get() {
        // $ExpectType jqXHR<any>
        $.get('url', { myData: 'myData' }, (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, 'script');

        // $ExpectType jqXHR<any>
        $.get('url', 'myData', (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, 'script');

        // $ExpectType jqXHR<any>
        $.get('url', { myData: 'myData' }, null, 'script');

        // $ExpectType jqXHR<any>
        $.get('url', 'myData', null, 'script');

        // $ExpectType jqXHR<any>
        $.get('url', (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, 'script');

        // $ExpectType jqXHR<any>
        $.get('url', null, 'script');

        // $ExpectType jqXHR<any>
        $.get('url', (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, 'script');

        // $ExpectType jqXHR<any>
        $.get('url', { myData: 'myData' });

        // $ExpectType jqXHR<any>
        $.get('url', 'myData');

        // $ExpectType jqXHR<any>
        $.get('url');

        // $ExpectType jqXHR<any>
        $.get({ url: 'url' });

        // $ExpectType jqXHR<any>
        $.get();
    }

    function getJSON() {
        // $ExpectType jqXHR<any>
        $.getJSON('url', { myVal1: 'myVal1' }, (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        });

        // $ExpectType jqXHR<any>
        $.getJSON('url', 'myVal1', (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        });

        // $ExpectType jqXHR<any>
        $.getJSON('url', (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        });

        // $ExpectType jqXHR<any>
        $.getJSON('url', { myVal1: 'myVal1' });

        // $ExpectType jqXHR<any>
        $.getJSON('url', 'myVal1');

        // $ExpectType jqXHR<any>
        $.getJSON('url');
    }

    function getScript() {
        // $ExpectType jqXHR<string | undefined>
        $.getScript('url', (data, textStatus, jqXHR) => {
            // $ExpectType string | undefined
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<string | undefined>
            jqXHR;
        });
    }

    function globalEval() {
        // $ExpectType void
        $.globalEval('throw new Error();');
    }

    function grep() {
        // $ExpectType string[]
        $.grep(['myVal1', 'myVal2'], (elementOfArray, indexInArray) => {
            // $ExpectType string
            elementOfArray;
            // $ExpectType number
            indexInArray;

            return true;
        }, true);

        // $ExpectType string[]
        $.grep(['myVal1', 'myVal2'], (elementOfArray, indexInArray) => {
            // $ExpectType string
            elementOfArray;
            // $ExpectType number
            indexInArray;

            return true;
        });
    }

    function hasData() {
        // $ExpectType boolean
        $.hasData(new HTMLElement());
    }

    function holdReady() {
        // $ExpectType void
        $.holdReady(true);
    }

    function htmlPrefilter() {
        // $ExpectType string
        $.htmlPrefilter('<span></span>');
    }

    function inArray() {
        // $ExpectType number
        $.inArray(1, [1, 2], 1);

        // $ExpectType number
        $.inArray(1, [1, 2]);
    }

    function isArray() {
        function type_guard(obj: object) {
            if ($.isArray(obj)) {
                // $ExpectType any[]
                obj;
            }
        }
    }

    function isEmptyObject() {
        // $ExpectType boolean
        $.isEmptyObject({});
    }

    function isFunction() {
        function type_guard(obj: object) {
            if ($.isFunction(obj)) {
                // $ExpectType Function
                obj;
            }
        }
    }

    function isNumeric() {
        function type_guard(obj: boolean) {
            if ($.isNumeric(obj)) {
                // $ExpectType (true & number) | (false & number)
                obj;
            }
        }
    }

    function isPlainObject() {
        function type_guard(obj: object) {
            if ($.isPlainObject(obj)) {
                // $ExpectType PlainObject<any>
                obj;
            }
        }
    }

    function isWindow() {
        function type_guard(obj: object) {
            if ($.isWindow(obj)) {
                // $ExpectType Window
                obj;
            }
        }
    }

    function isXMLDoc() {
        // $ExpectType boolean
        $.isXMLDoc(new Node());
    }

    function makeArray() {
        // $ExpectType number[]
        $.makeArray([1, 2]);
    }

    function map() {
        // $ExpectType number[]
        $.map([1, 2, 3], (elementOfArray, indexInArray) => {
            // $ExpectType number
            elementOfArray;
            // $ExpectType number
            indexInArray;

            return 200 + 10;
        });

        // $ExpectType (false | 1)[]
        $.map({
            myProp: true,
            name: 'Rogers',
        }, (propertyOfObject, key) => {
            // $ExpectType string | boolean
            propertyOfObject;
            // $ExpectType "myProp" | "name"
            key;

            switch (key) {
                case 'myProp':
                    return 1;
                case 'name':
                    return false;
            }
        });
    }

    function merge() {
        // $ExpectType (string | number)[]
        $.merge([1, 2, 3], ['myVal1', 'myVal2']);
    }

    function noConflict() {
        // $ExpectType JQueryStatic<HTMLElement>
        $.noConflict(true);

        // $ExpectType JQueryStatic<HTMLElement>
        $.noConflict();
    }

    function noop() {
        // $ExpectType undefined
        $.noop();
    }

    function now() {
        // $ExpectType number
        $.now();
    }

    function param() {
        // $ExpectType string
        $.param([true, 20], true);

        // $ExpectType string
        $.param({
            myVal1: true,
            myVal2: 20
        }, true);

        // $ExpectType string
        $.param($('input'), true);

        // $ExpectType string
        $.param([true, 20]);

        // $ExpectType string
        $.param({
            myVal1: true,
            myVal2: 20
        });

        // $ExpectType string
        $.param($('input'));
    }

    function parseHTML() {
        // $ExpectType Node[]
        $.parseHTML('<span></span>', document, true);

        // $ExpectType Node[]
        $.parseHTML('<span></span>', null, true);

        // $ExpectType Node[]
        $.parseHTML('<span></span>', undefined, true);

        // $ExpectType Node[]
        $.parseHTML('<span></span>', document);

        // $ExpectType Node[]
        $.parseHTML('<span></span>', null);

        // $ExpectType Node[]
        $.parseHTML('<span></span>', undefined);

        // $ExpectType Node[]
        $.parseHTML('<span></span>', false);

        // $ExpectType Node[]
        $.parseHTML('<span></span>');
    }

    function parseJSON() {
        // $ExpectType any
        $.parseJSON('{}');
    }

    function parseXML() {
        // $ExpectType XMLDocument
        $.parseXML('<xml></xml>');
    }

    function post() {
        // $ExpectType jqXHR<any>
        $.post('url', { myData: 'myData' }, (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, 'script');

        // $ExpectType jqXHR<any>
        $.post('url', 'myData', (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, 'script');

        // $ExpectType jqXHR<any>
        $.post('url', { myData: 'myData' }, null, 'script');

        // $ExpectType jqXHR<any>
        $.post('url', 'myData', null, 'script');

        // $ExpectType jqXHR<any>
        $.post('url', (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, 'script');

        // $ExpectType jqXHR<any>
        $.post('url', null, 'script');

        // $ExpectType jqXHR<any>
        $.post('url', (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, 'script');

        // $ExpectType jqXHR<any>
        $.post('url', { myData: 'myData' });

        // $ExpectType jqXHR<any>
        $.post('url', 'myData');

        // $ExpectType jqXHR<any>
        $.post('url');

        // $ExpectType jqXHR<any>
        $.post({ url: 'url' });

        // $ExpectType jqXHR<any>
        $.post();
    }

    function proxy() {
        // $ExpectType Function
        $.proxy($.noop, {}, 1, 2);

        // $ExpectType Function
        $.proxy($.noop, {});

        // $ExpectType Function
        $.proxy({ myFunc: $.noop }, 'myFunc', 1, 2);

        // $ExpectType Function
        $.proxy({ myFunc: $.noop }, 'myFunc');
    }

    function queue() {
        // $ExpectType Queue<HTMLElement>
        $.queue(new HTMLElement(), 'myQueue', function(next) {
            // $ExpectType HTMLElement
            this;
            // $ExpectType () => void
            next;
        });

        // $ExpectType Queue<HTMLElement>
        $.queue(new HTMLElement(), 'myQueue', [function(next) {
            // $ExpectType HTMLElement
            this;
            // $ExpectType () => void
            next;
        }]);

        // $ExpectType Queue<HTMLElement>
        $.queue(new HTMLElement(), 'myQueue');

        // $ExpectType Queue<HTMLElement>
        $.queue(new HTMLElement());
    }

    function readyException() {
        jQuery.readyException = (error) => {
            console.error(error);
        };
    }

    function removeData() {
        // $ExpectType void
        $.removeData(new HTMLElement(), 'test1');

        // $ExpectType void
        $.removeData(new HTMLElement());
    }

    function speed() {
        // $ExpectType EffectsOptions<HTMLElement>
        $.speed(5000, 'linear', function() {
            // $ExpectType HTMLElement
            this;
        });

        // $ExpectType EffectsOptions<HTMLElement>
        $.speed(5000, 'linear');

        // $ExpectType EffectsOptions<HTMLElement>
        $.speed(5000, function() {
            // $ExpectType HTMLElement
            this;
        });

        // $ExpectType EffectsOptions<HTMLElement>
        $.speed(5000);

        // $ExpectType EffectsOptions<HTMLElement>
        $.speed(function() {
            // $ExpectType HTMLElement
            this;
        });

        // $ExpectType EffectsOptions<HTMLElement>
        $.speed({
            duration: 5000,
            easing: 'linear',
            complete() {
                // $ExpectType HTMLElement
                this;
            }
        });

        // $ExpectType EffectsOptions<HTMLElement>
        $.speed();
    }

    function trim() {
        // $ExpectType string
        $.trim('myStr');
    }

    function type() {
        // $ExpectType "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "error" | "array" | "date" | "null" | "regexp"
        $.type({});
    }

    function unique() {
        // $ExpectType HTMLElement[]
        $.unique([new HTMLElement()]);
    }

    function uniqueSort() {
        // $ExpectType HTMLElement[]
        $.uniqueSort([new HTMLElement()]);
    }

    function when() {
        const t = $.ajax() as JQuery.jqXHR<string>;
        const u = $.ajax() as JQuery.jqXHR<number>;
        const v = $.ajax() as JQuery.jqXHR<boolean>;

        // $ExpectType Promise<[string | number | boolean, string, jqXHR<string | number | boolean>], any, any>
        $.when(t, u, v);

        // $ExpectType Promise<[string | number, string, jqXHR<string | number>], any, any>
        $.when(t, u);

        // $ExpectType Promise<string | jqXHR<string>, any, any>
        $.when(t);

        // $ExpectType Promise<any, any, any>
        $.when($.Deferred());

        // $ExpectType Promise<any, any, any>
        $.when();
    }
}

function AjaxSettings() {
    $.ajax({
        accepts: {
            mycustomtype: 'application/x-some-custom-type'
        },
        async: true,
        beforeSend(jqXHR, settings) {
            // $ExpectType any
            this;
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType AjaxSettingsBase<any>
            settings;
        },
        cache: false,
        complete(jqXHR, textStatus) {
            // $ExpectType any
            this;
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType TextStatus
            textStatus;
        },
        contents: {
            mycustomtype: /mycustomtype/
        },
        contentType: 'application/x-some-custom-type',
        converters: {
            'text mycustomtype': true,
            'mycustomtype json': (result) => {
                // $ExpectType any
                result;

                return result;
            }
        },
        crossDomain: false,
        data: {
            myData: 'myData'
        },
        dataFilter(data, type) {
            // $ExpectType string
            data;
            // $ExpectType string
            type;

            return 'filtered';
        },
        dataType: 'mycustomtype',
        error(jqXHR, textStatus, errorThrown) {
            // $ExpectType any
            this;
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        },
        global: true,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        ifModified: false,
        isLocal: true,
        jsonp: 'callback',
        jsonpCallback: 'callback',
        method: 'PUT',
        mimeType: 'mimeType',
        password: 'hunter2',
        processData: false,
        scriptCharset: 'scriptCharset',
        statusCode: {
            200(data, textStatus, jqXHR) {
                // $ExpectType any
                this;
                // $ExpectType any
                data;
                // $ExpectType SuccessTextStatus
                textStatus;
                // $ExpectType jqXHR<any>
                jqXHR;
            },
            404(jqXHR, textStatus, errorThrown) {
                // $ExpectType any
                this;
                // $ExpectType jqXHR<any>
                jqXHR;
                // $ExpectType ErrorTextStatus
                textStatus;
                // $ExpectType string
                errorThrown;
            }
        },
        success(data, textStatus, jqXHR) {
            // $ExpectType any
            this;
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        },
        timeout: 10,
        traditional: true,
        username: 'username',
        xhr() {
            return new XMLHttpRequest();
        },
        xhrFields: {
            withCredentials: true
        }
    });

    $.ajax({
        beforeSend(jqXHR, settings) {
            // $ExpectType any
            this;
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType AjaxSettingsBase<any>
            settings;

            return false;
        },
        complete: [function(jqXHR, textStatus) {
            // $ExpectType any
            this;
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType TextStatus
            textStatus;
        }],
        contentType: false,
        data: 'myData',
        error: [function(jqXHR, textStatus, errorThrown) {
            // $ExpectType any
            this;
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        }],
        jsonp: false,
        jsonpCallback() {
            // $ExpectType any
            this;

            return 'callback';
        },
        success: [function(data, textStatus, jqXHR) {
            // $ExpectType any
            this;
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }]
    });
}

function EffectsOptions() {
    $('p').show({
        always(animation, jumpToEnd) {
            // $ExpectType HTMLElement
            this;
            // $ExpectType Promise<any, any, any>
            animation;
            // $ExpectType boolean
            jumpToEnd;
        },
        complete() {
            // $ExpectType HTMLElement
            this;
        },
        done(animation, jumpToEnd) {
            // $ExpectType HTMLElement
            this;
            // $ExpectType Promise<any, any, any>
            animation;
            // $ExpectType boolean
            jumpToEnd;
        },
        duration: 5000,
        easing: 'linear',
        fail(animation, jumpToEnd) {
            // $ExpectType HTMLElement
            this;
            // $ExpectType Promise<any, any, any>
            animation;
            // $ExpectType boolean
            jumpToEnd;
        },
        progress(animation, progress, remainingMs) {
            // $ExpectType HTMLElement
            this;
            // $ExpectType Promise<any, any, any>
            animation;
            // $ExpectType number
            progress;
            // $ExpectType number
            remainingMs;
        },
        queue: true,
        specialEasing: {
            width: 'linear',
            height: 'easeOutBounce'
        },
        start(animation) {
            // $ExpectType HTMLElement
            this;
            // $ExpectType Promise<any, any, any>
            animation;
        },
        step(now, tween) {
            // $ExpectType HTMLElement
            this;
            // $ExpectType number
            now;
            // $ExpectType Tween<HTMLElement>
            tween;
        }
    });
}

function JQuery_Event() {
    function mixin() {
        const e = $.Event('keydown', {
            mySpecialKeyCode: JQuery.Key.CapsLock,
        });

        e.mySpecialKeyCode === JQuery.Key.NumLock;
    }
}

function jqXHR() {
    function catch_returnType() {
        // $ExpectType Deferred<void, never, any>
        $.ajax('/echo').catch(() => { });
    }

    function catch_throw_returnType() {
        // $ExpectType Deferred<never, any, never>
        $.ajax('/echo').catch((reason) => {
            throw new Error();
        });
    }

    function then_returnType() {
        // $ExpectType Deferred<void, any, any>
        $.ajax('/echo').then(() => { });
    }

    function throw_from_catch() {
        $.ajax('/echo').catch(() => {
            throw new Error('Thrown from [jQuery] 1st catch block');
        }).then((value) => {
            // $ExpectType never
            value;
        }).catch((reason) => {
            // $ExpectType any
            reason;
        }).then((value) => {
            // $ExpectType void
            value;
        });
    }

    function fail() {
        $.ajax('/echo').fail((jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        });
    }
}
