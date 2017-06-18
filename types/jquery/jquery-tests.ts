function JQuery() {
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

    function on() {
        function false_handler_shorthand() {
            $().on('events', false);
        }

        function typed_event_data() {
            $('#myElement').on('custom', 45, (event, data) => {
                event.data === 23;
            });
        }
    }
}

function JQueryStatic() {
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

function JQuery_Event() {
    function type_guard(e: object) {
        if (e instanceof JQuery.Event) {
            e.isDefaultPrevented() === true;
        }
    }

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
