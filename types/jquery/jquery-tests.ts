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
}

function JQueryStatic() {
    function type_assertion() {
        const $Canvas = $ as JQueryStatic<HTMLCanvasElement>;
    }

    function type_annotation() {
        const jq: JQueryStatic = $;
    }

    function constructor() {
        function selector_object_callback() {
            const jq = $ as JQueryStatic<Node>;
            // $ExpectType JQuery<Node>
            jq('div');
        }
    }

    function Callbacks() {
        const cb = $.Callbacks();

        cb.add(console.log);
    }

    function Event() {
        function constructor() {
            const e = $.Event('click');
            e.stopPropagation();
        }
    }

    function each() {
        function arrayLike() {
            $.each({ length: 3 }, (index, val) => {
                index === 3;
            });
        }
    }

    function isArray() {
        function type_guard(obj: object) {
            if ($.isArray(obj)) {
                console.log(obj[0]);
            }
        }
    }

    function isFunction() {
        function type_guard(obj: object) {
            if ($.isFunction(obj)) {
                obj();
            }
        }
    }

    function isNumeric() {
        function type_guard(obj: boolean) {
            if ($.isNumeric(obj)) {
                obj.toFixed();
            }
        }
    }

    function isPlainObject() {
        function type_guard(obj: object) {
            if ($.isPlainObject(obj)) {
                obj['key'] = true;
            }
        }
    }

    function isWindow() {
        function type_guard(obj: object) {
            if ($.isWindow(obj)) {
                obj.location.href === 'href';
            }
        }
    }

    function map() {
        function object() {
            const testObj = {
                myProp: true,
                name: 'Rogers',
            };

            const results = $.map(testObj, (propertyOfObject, key) => {
                switch (key) {
                    case 'myProp':
                        return 1;
                    case 'name':
                        return false;
                }
            });

            for (const result of results) {
                result === 1;
            }
        }
    }

    function queue() {
        const el = new HTMLElement();
        const queue = jQuery.queue(el);
        queue[0] === 'inprogress';
    }

    function readyException() {
        jQuery.readyException = (error) => {
            console.error(error);
        };
    }
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
            // This test is flaky
            // Should be 'ErrorTextStatus | null' and should be able to handle it out of order
            // $ExpectType "timeout" | "error" | "abort" | "parsererror" | null
            textStatus;
            // $ExpectType string
            errorThrown;
        });
    }
}
