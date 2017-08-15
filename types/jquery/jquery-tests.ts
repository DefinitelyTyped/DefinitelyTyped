// tslint:disable:interface-name

function JQueryStatic() {
    function type_assertion() {
        const $Canvas = $ as JQueryStatic<HTMLCanvasElement>;
    }

    function type_annotation() {
        const jq: JQueryStatic = $;
    }

    function call_signature() {
        // $ExpectType JQuery<HTMLElement>
        $('<p></p>', new Document());

        // $ExpectType JQuery<HTMLElement>
        $('<p></p>', {
            class: 'my-div',
            on: {
                touchstart() {
                    // Do something
                }
            }
        });

        // $ExpectType JQuery<HTMLElement>
        $('span', new HTMLElement());

        // $ExpectType JQuery<HTMLElement>
        $('span', new Document());

        // $ExpectType JQuery<HTMLElement>
        $('span', $('p'));

        // $ExpectType JQuery<HTMLElement>
        $('span');

        // $ExpectType JQuery<HTMLElement>
        $('<p></p>');

        // $ExpectType JQuery<HTMLElement>
        $(new HTMLElement());

        // $ExpectType JQuery<HTMLElement>
        $([new HTMLElement()]);

        // $ExpectType JQuery<HTMLElement>
        $({ foo: 'bar', hello: 'world' });

        // $ExpectType JQuery<HTMLElement>
        $($('p'));

        // $ExpectType JQuery<HTMLElement>
        $(function($) {
            // $ExpectType Document
            this;
            // $ExpectType JQueryStatic<HTMLElement>
            $;
        });

        // $ExpectType JQuery<HTMLElement>
        $();
    }

    function Event() {
        // $ExpectType EventStatic<HTMLElement>
        $.Event;
    }

    function cssHooks() {
        // $ExpectType PlainObject<CSSHook<HTMLElement>>
        $.cssHooks;
    }

    function cssNumber() {
        // $ExpectType PlainObject<boolean>
        $.cssNumber;
    }

    function fn() {
        // $ExpectType JQuery<HTMLElement>
        $.fn;
    }

    function fx() {
        function interval() {
            // $ExpectType number
            $.fx.interval;
        }

        function off() {
            // $ExpectType boolean
            $.fx.off;
        }

        function step() {
            // $ExpectType PlainObject<AnimationHook<HTMLElement>>
            $.fx.step;
        }
    }

    function ready() {
        // $ExpectType Thenable<JQueryStatic<HTMLElement>>
        $.ready;
    }

    function support() {
        // $ExpectType PlainObject<any>
        $.support;
    }

    function valHooks() {
        // $ExpectType PlainObject<ValHook<HTMLElement>>
        $.valHooks;
    }

    function Callbacks() {
        // $ExpectType Callbacks<Function>
        $.Callbacks('once');

        // $ExpectType Callbacks<Function>
        $.Callbacks();
    }

    function Deferred() {
        function call_signature() {
            // $ExpectType Deferred<boolean, string, number>
            $.Deferred<boolean, string, number>(function(deferred) {
                // $ExpectType Deferred<boolean, string, number>
                this;
                // $ExpectType Deferred<boolean, string, number>
                deferred;
            });

            // $ExpectType Deferred<boolean, string, number>
            $.Deferred<boolean, string, number>();

            // $ExpectType Deferred<boolean, string, any>
            $.Deferred<boolean, string>(function(deferred) {
                // $ExpectType Deferred<boolean, string, any>
                this;
                // $ExpectType Deferred<boolean, string, any>
                deferred;
            });

            // $ExpectType Deferred<boolean, string, any>
            $.Deferred<boolean, string>();

            // $ExpectType Deferred<boolean, any, any>
            $.Deferred<boolean>(function(deferred) {
                // $ExpectType Deferred<boolean, any, any>
                this;
                // $ExpectType Deferred<boolean, any, any>
                deferred;
            });

            // $ExpectType Deferred<boolean, any, any>
            $.Deferred<boolean>();

            // $ExpectType Deferred<any, any, any>
            $.Deferred(function(deferred) {
                // $ExpectType Deferred<any, any, any>
                this;
                // $ExpectType Deferred<any, any, any>
                deferred;
            });

            // $ExpectType Deferred<any, any, any>
            $.Deferred();
        }

        function exceptionHook() {
            $.Deferred.exceptionHook = undefined;
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
            } else {
                // $ExpectType object
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
            } else {
                // $ExpectType object
                obj;
            }
        }
    }

    function isNumeric() {
        function type_guard(obj: boolean) {
            if ($.isNumeric(obj)) {
                // $ExpectType (true & number) | (false & number)
                obj;
            } else {
                // $ExpectType boolean
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
            } else {
                // $ExpectType object
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
        interface I1 { kind: 'I1'; }
        interface I2 { kind: 'I2'; }
        interface I3 { kind: 'I3'; }
        interface I4 { kind: 'I4'; }
        interface I5 { kind: 'I5'; }
        interface I6 { kind: 'I6'; }
        interface I7 { kind: 'I7'; }
        interface I8 { kind: 'I8'; }

        const a: I8 = {} as any;
        const b: I7 = {} as any;
        const c: I6 = {} as any;
        const d: I5 = {} as any;
        const e: I4 = {} as any;
        const f: I3 = {} as any;
        const g: I2 = {} as any;
        const h: I2 = {} as any;

        type A = typeof a;
        type B = typeof b;
        type C = typeof c;
        type D = typeof d;
        type E = typeof e;
        type F = typeof f;
        type G = typeof g;
        type H = typeof h;

        // (fn, null)
        {
            // $ExpectType () => void
            $.proxy((a, b, c, d, e, f, g) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType () => void
            $.proxy((a, b, c, d, e, f) => { }, null, a, b, c, d, e, f);

            // $ExpectType () => void
            $.proxy((a, b, c, d, e) => { }, null, a, b, c, d, e);

            // $ExpectType () => void
            $.proxy((a, b, c, d) => { }, null, a, b, c, d);

            // $ExpectType () => void
            $.proxy((a, b, c) => { }, null, a, b, c);

            // $ExpectType () => void
            $.proxy((a, b) => { }, null, a, b);

            // $ExpectType () => void
            $.proxy((a) => { }, null, a);

            // $ExpectType () => void
            $.proxy(() => { }, null);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1) => { }, null, a, b, c, d, e, f);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1) => { }, null, a, b, c, d, e);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1) => { }, null, a, b, c, d);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, t: I1) => { }, null, a, b, c);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, t: I1) => { }, null, a, b);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, t: I1) => { }, null, a);

            // $ExpectType (t: I1) => void
            $.proxy((t: I1) => { }, null);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2) => { }, null, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2) => { }, null, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2) => { }, null, a, b, c, d);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2) => { }, null, a, b, c);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, t: I1, u: I2) => { }, null, a, b);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, t: I1, u: I2) => { }, null, a);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((t: I1, u: I2) => { }, null);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3) => { }, null, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3) => { }, null, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3) => { }, null, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3) => { }, null, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3) => { }, null, a, b);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, t: I1, u: I2, v: I3) => { }, null, a);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((t: I1, u: I2, v: I3) => { }, null);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4) => { }, null, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4) => { }, null, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4) => { }, null, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4) => { }, null, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4) => { }, null, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4) => { }, null, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4) => { }, null);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, null, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, null, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, null, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, null, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, null, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, null, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5) => { }, null);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, null, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, null, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, null, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, null, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, null, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, null, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, null);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, null, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, null, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, null, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, null, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, null, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, null, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, null);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null);

            // $ExpectType (...args: any[]) => void
            $.proxy((a, b, c, d, e, f, g, h, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, null, a, b, c, d, e, f, g, h);
        }

        // (fn, undefined)
        {
            // $ExpectType () => void
            $.proxy((a, b, c, d, e, f, g) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType () => void
            $.proxy((a, b, c, d, e, f) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType () => void
            $.proxy((a, b, c, d, e) => { }, undefined, a, b, c, d, e);

            // $ExpectType () => void
            $.proxy((a, b, c, d) => { }, undefined, a, b, c, d);

            // $ExpectType () => void
            $.proxy((a, b, c) => { }, undefined, a, b, c);

            // $ExpectType () => void
            $.proxy((a, b) => { }, undefined, a, b);

            // $ExpectType () => void
            $.proxy((a) => { }, undefined, a);

            // $ExpectType () => void
            $.proxy(() => { }, undefined);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1) => { }, undefined, a, b, c, d, e);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1) => { }, undefined, a, b, c, d);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, c: C, t: I1) => { }, undefined, a, b, c);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, b: B, t: I1) => { }, undefined, a, b);

            // $ExpectType (t: I1) => void
            $.proxy((a: A, t: I1) => { }, undefined, a);

            // $ExpectType (t: I1) => void
            $.proxy((t: I1) => { }, undefined);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2) => { }, undefined, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2) => { }, undefined, a, b, c, d);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2) => { }, undefined, a, b, c);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, b: B, t: I1, u: I2) => { }, undefined, a, b);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((a: A, t: I1, u: I2) => { }, undefined, a);

            // $ExpectType (t: I1, u: I2) => void
            $.proxy((t: I1, u: I2) => { }, undefined);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3) => { }, undefined, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3) => { }, undefined, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3) => { }, undefined, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3) => { }, undefined, a, b);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((a: A, t: I1, u: I2, v: I3) => { }, undefined, a);

            // $ExpectType (t: I1, u: I2, v: I3) => void
            $.proxy((t: I1, u: I2, v: I3) => { }, undefined);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4) => { }, undefined, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4) => { }, undefined, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4) => { }, undefined, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4) => { }, undefined, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4) => { }, undefined, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4) => { }, undefined);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, undefined, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, undefined, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, undefined, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, undefined, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, undefined, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5) => { }, undefined);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, undefined, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, undefined, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, undefined, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, undefined, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, undefined, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, undefined);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, undefined, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, undefined, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, undefined, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, undefined, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, undefined, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, undefined);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined, a, b, c, d, e, f, g);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined, a, b, c, d, e, f);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined, a, b, c, d, e);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined, a, b, c, d);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined, a, b, c);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined, a, b);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined, a);

            // $ExpectType (t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined);

            // $ExpectType (...args: any[]) => void
            $.proxy((a, b, c, d, e, f, g, h, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, undefined, a, b, c, d, e, f, g, h);
        }

        // (fn, context)
        {
            // $ExpectType (this: {}) => void
            $.proxy((a, b, c, d, e, f, g) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}) => void
            $.proxy((a, b, c, d, e, f) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}) => void
            $.proxy((a, b, c, d, e) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}) => void
            $.proxy((a, b, c, d) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}) => void
            $.proxy((a, b, c) => { }, {}, a, b, c);

            // $ExpectType (this: {}) => void
            $.proxy((a, b) => { }, {}, a, b);

            // $ExpectType (this: {}) => void
            $.proxy((a) => { }, {}, a);

            // $ExpectType (this: {}) => void
            $.proxy(() => { }, {});

            // $ExpectType (this: {}, t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}, t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}, t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}, t: I1) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}, t: I1) => void
            $.proxy((a: A, b: B, c: C, t: I1) => { }, {}, a, b, c);

            // $ExpectType (this: {}, t: I1) => void
            $.proxy((a: A, b: B, t: I1) => { }, {}, a, b);

            // $ExpectType (this: {}, t: I1) => void
            $.proxy((a: A, t: I1) => { }, {}, a);

            // $ExpectType (this: {}, t: I1) => void
            $.proxy((t: I1) => { }, {});

            // $ExpectType (this: {}, t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}, t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}, t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}, t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}, t: I1, u: I2) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2) => { }, {}, a, b, c);

            // $ExpectType (this: {}, t: I1, u: I2) => void
            $.proxy((a: A, b: B, t: I1, u: I2) => { }, {}, a, b);

            // $ExpectType (this: {}, t: I1, u: I2) => void
            $.proxy((a: A, t: I1, u: I2) => { }, {}, a);

            // $ExpectType (this: {}, t: I1, u: I2) => void
            $.proxy((t: I1, u: I2) => { }, {});

            // $ExpectType (this: {}, t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3) => { }, {}, a, b, c);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3) => { }, {}, a, b);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3) => void
            $.proxy((a: A, t: I1, u: I2, v: I3) => { }, {}, a);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3) => void
            $.proxy((t: I1, u: I2, v: I3) => { }, {});

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4) => { }, {}, a, b, c);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4) => { }, {}, a, b);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4) => { }, {}, a);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4) => { }, {});

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, {}, a, b, c);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, {}, a, b);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5) => { }, {}, a);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5) => { }, {});

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, {}, a, b, c);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, {}, a, b);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, {}, a);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6) => { }, {});

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, {}, a, b, c);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, {}, a, b);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, {}, a);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7) => { }, {});

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, g: G, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {}, a, b, c, d, e, f, g);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, f: F, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {}, a, b, c, d, e, f);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, e: E, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {}, a, b, c, d, e);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, d: D, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {}, a, b, c, d);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, c: C, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {}, a, b, c);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, b: B, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {}, a, b);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((a: A, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {}, a);

            // $ExpectType (this: {}, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, ...args: any[]) => void
            $.proxy((t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {});

            // $ExpectType (this: {}, ...args: any[]) => void
            $.proxy((a, b, c, d, e, f, g, h, t: I1, u: I2, v: I3, w: I4, x: I5, y: I6, z: I7, _: I8) => { }, {}, a, b, c, d, e, f, g, h);
        }

        // $ExpectType (this: { myFunc: () => undefined; }, ...args: any[]) => any
        $.proxy({ myFunc: $.noop }, 'myFunc', 1, 2);

        // $ExpectType (this: { myFunc: () => undefined; }, ...args: any[]) => any
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
        // $ExpectType "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "date" | "error" | "null" | "regexp"
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
        interface I1 { kind: 'I1'; }
        interface I2 { kind: 'I2'; }
        interface I3 { kind: 'I3'; }
        interface I4 { kind: 'I4'; }
        interface I5 { kind: 'I5'; }
        interface I6 { kind: 'I6'; }
        interface I7 { kind: 'I7'; }
        interface I8 { kind: 'I8'; }
        interface I9 { kind: 'I9'; }

        function Promise3() {
            const t = $.ajax() as JQuery.jqXHR<string>;
            const u = $.ajax() as JQuery.jqXHR<number>;
            const v = $.ajax() as JQuery.jqXHR<boolean>;

            // // 3 parameters
            // {
            //     const w = $.when(t, u, v);
            //
            //     w.then((a, b, c) => {
            //         a[0]; // $ExpectType string
            //         a[1]; // $ExpectType SuccessTextStatus
            //         a[2]; // $ExpectType jqXHR<string>
            //         b[0]; // $ExpectType number
            //         b[1]; // $ExpectType SuccessTextStatus
            //         b[2]; // $ExpectType jqXHR<number>
            //         c[0]; // $ExpectType boolean
            //         c[1]; // $ExpectType SuccessTextStatus
            //         c[2]; // $ExpectType jqXHR<boolean>
            //     }, (a, b, c) => {
            //         a[0]; // $ExpectType jqXHR<string>
            //         a[1]; // $ExpectType ErrorTextStatus
            //         a[2]; // $ExpectType string
            //         b[0]; // $ExpectType jqXHR<number>
            //         b[1]; // $ExpectType ErrorTextStatus
            //         b[2]; // $ExpectType string
            //         c[0]; // $ExpectType jqXHR<boolean>
            //         c[1]; // $ExpectType ErrorTextStatus
            //         c[2]; // $ExpectType string
            //     }, (a, b, c) => {
            //         a; // $ExpectType never
            //         b; // $ExpectType never
            //         c; // $ExpectType never
            //     });
            // }
            //
            // // 2 parameters
            // {
            //     const w = $.when(t, u);
            //
            //     w.then((a, b) => {
            //         a[0]; // $ExpectType string
            //         a[1]; // $ExpectType SuccessTextStatus
            //         a[2]; // $ExpectType jqXHR<string>
            //         b[0]; // $ExpectType number
            //         b[1]; // $ExpectType SuccessTextStatus
            //         b[2]; // $ExpectType jqXHR<number>
            //     }, (a, b) => {
            //         a[0]; // $ExpectType jqXHR<string>
            //         a[1]; // $ExpectType ErrorTextStatus
            //         a[2]; // $ExpectType string
            //         b[0]; // $ExpectType jqXHR<number>
            //         b[1]; // $ExpectType ErrorTextStatus
            //         b[2]; // $ExpectType string
            //     }, (a, b) => {
            //         a; // $ExpectType never
            //         b; // $ExpectType never
            //     });
            // }

            // 1 parameter
            {
                const w = $.when(t);

                w.then((a, b, c) => {
                    a; // $ExpectType string
                    b; // $ExpectType SuccessTextStatus
                    c; // $ExpectType jqXHR<string>
                }, (a, b, c) => {
                    a; // $ExpectType jqXHR<string>
                    b; // $ExpectType ErrorTextStatus
                    c; // $ExpectType string
                }, (a, b, c) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                    c; // $ExpectType never
                });
            }
        }

        function Promise2() {
            const t: JQuery.Promise2<string, Error, number, boolean, any, any> = {} as any;
            const u: JQuery.Promise2<string, Error, number, boolean, any, any> = {} as any;
            const v: JQuery.Promise2<string, Error, number, boolean, any, any> = {} as any;

            // // 3 parameters
            // {
            //     const w = $.when(t, u, v);
            //
            //     w.then((a, b, c) => {
            //         a[0]; // $ExpectType string
            //         a[1]; // $ExpectType boolean
            //         b[0]; // $ExpectType string
            //         b[1]; // $ExpectType boolean
            //         c[0]; // $ExpectType string
            //         c[1]; // $ExpectType boolean
            //     }, (a, b, c) => {
            //         a[0]; // $ExpectType Error
            //         a[1]; // $ExpectType any
            //         b[0]; // $ExpectType Error
            //         b[1]; // $ExpectType any
            //         c[0]; // $ExpectType Error
            //         c[1]; // $ExpectType any
            //     }, (a, b, c) => {
            //         a; // $ExpectType never
            //         b; // $ExpectType never
            //         c; // $ExpectType never
            //     });
            // }
            //
            // // 2 parameters
            // {
            //     const w = $.when(t, u);
            //
            //     w.then((a, b) => {
            //         a[0]; // $ExpectType string
            //         a[1]; // $ExpectType boolean
            //         b[0]; // $ExpectType string
            //         b[1]; // $ExpectType boolean
            //     }, (a, b) => {
            //         a[0]; // $ExpectType Error
            //         a[1]; // $ExpectType any
            //         b[0]; // $ExpectType Error
            //         b[1]; // $ExpectType any
            //     }, (a, b) => {
            //         a; // $ExpectType never
            //         b; // $ExpectType never
            //     });
            // }

            // 1 parameter
            {
                const w = $.when(t);

                w.then((a, b) => {
                    a; // $ExpectType string
                    b; // $ExpectType boolean
                }, (a, b) => {
                    a; // $ExpectType Error
                    b; // $ExpectType any
                }, (a, b) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                });
            }
        }

        function Promise() {
            const p1: JQuery.Promise<I1, I2, I3> = {} as any;
            const p2: JQuery.Promise<I2, I3, I4> = {} as any;
            const p3: JQuery.Promise<I3, I4, I5> = {} as any;

            // 3 parameters
            {
                const w = $.when(p1, p2, p3);

                w.then((a, b, c) => {
                    a; // $ExpectType I1
                    b; // $ExpectType I2
                    c; // $ExpectType I3
                }, (a, b, c) => {
                    a; // $ExpectType I2
                    b; // $ExpectType I3
                    c; // $ExpectType I4
                }, (a, b, c) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                    c; // $ExpectType never
                });
            }

            // 2 parameters
            {
                const w = $.when(p1, p2);

                w.then((a, b) => {
                    a; // $ExpectType I1
                    b; // $ExpectType I2
                }, (a, b) => {
                    a; // $ExpectType I2
                    b; // $ExpectType I3
                }, (a, b) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                });
            }

            // 1 parameter
            {
                const w = $.when(p1);

                w.then(a => {
                    a; // $ExpectType I1
                }, a => {
                    a; // $ExpectType I2
                }, a => {
                    a; // $ExpectType never
                });
            }
        }

        function Thenable() {
            const t1: JQuery.Thenable<I1> = {} as any;
            const t2: JQuery.Thenable<I2> = {} as any;
            const t3: JQuery.Thenable<I3> = {} as any;

            // 3 parameters
            {
                const w = $.when(t1, t2, t3);

                w.then((a, b, c) => {
                    a; // $ExpectType I1
                    b; // $ExpectType I2
                    c; // $ExpectType I3
                }, (a, b, c) => {
                    a; // $ExpectType any
                    b; // $ExpectType any
                    c; // $ExpectType any
                }, (a, b, c) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                    c; // $ExpectType never
                });
            }

            // 2 parameters
            {
                const w = $.when(t1, t2);

                w.then((a, b) => {
                    a; // $ExpectType I1
                    b; // $ExpectType I2
                }, (a, b) => {
                    a; // $ExpectType any
                    b; // $ExpectType any
                }, (a, b) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                });
            }

            // 1 parameter
            {
                const w = $.when(t1);

                w.then(a => {
                    a; // $ExpectType I1
                }, a => {
                    a; // $ExpectType any
                }, a => {
                    a; // $ExpectType never
                });
            }
        }

        function value() {
            const w = $.when('myVal1');

            w.then(a => {
                a; // $ExpectType string
            });
        }

        function Zero() {
            const w = $.when();

            w.then(a => {
                a; // $ExpectType never
            }, a => {
                a; // $ExpectType never
            }, a => {
                a; // $ExpectType never
            });
        }

        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/2725
        function issue_2725() {
            function first() {
                return $.when('1');
            }

            $.when().then(() => {
                return first();
            }).then((value) => {
                value; // $ExpectType string
            });
        }

        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/10159
        function issue_10159() {
            interface One { result: number; }
            interface Two { Result: number; }
            interface Three { TheResult: number; }

            class AsyncRunner {
                Run(): void {
                    const task1 = this.runTask1();
                    const task2 = this.runTask2();
                    const task3 = this.runTask3();

                    $.when(task1, task2, task3)
                        .then((r1, r2, r3) => {
                            r1; // $ExpectType One
                            r2; // $ExpectType Two
                            r3; // $ExpectType Three
                        });
                }

                runTask1() {
                    let dfd = $.Deferred<One>();
                    console.log('Task 1');
                    setTimeout(() => { dfd.resolve({ result: 1 }); }, Math.floor(400 + Math.random() * 2000));
                    return dfd.promise();
                }

                runTask2() {
                    let dfd = $.Deferred<Two>();
                    console.log('Task 2');
                    setTimeout(() => { dfd.resolve({ Result: 2 }); }, Math.floor(400 + Math.random() * 2000));
                    return dfd.promise();
                }

                runTask3() {
                    let dfd = $.Deferred<Three>();
                    console.log('Task 3');
                    setTimeout(() => { dfd.resolve({ TheResult: 3 }); }, Math.floor(400 + Math.random() * 2000));
                    return dfd.promise();
                }
            }
        }
    }
}

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
        // $ExpectType HTMLElement
        $('div')[0];

        $('div')[0] = new HTMLElement();
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
                // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
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
                // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
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
                // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
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

            // $ExpectType Coordinates | undefined
            $('p').offset();
        }

        function position() {
            // $ExpectType Coordinates
            $('p').position();
        }

        function scrollLeft() {
            // $ExpectType JQuery<HTMLElement>
            $('p').scrollLeft(200);

            // $ExpectType number | undefined
            $('p').scrollLeft();
        }

        function scrollTop() {
            // $ExpectType JQuery<HTMLElement>
            $('p').scrollTop(200);

            // $ExpectType number | undefined
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', 'myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').bind('myEvent', function(this: I1, event) {
                // $ExpectType I1
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('p').bind({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                }
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', null);

            // $ExpectType JQuery<HTMLElement>
            $('p').bind('myEvent', undefined);
        }

        function delegate() {
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('table').delegate('td', 'myEvent', 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').delegate('td', 'myEvent', 'myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('table').delegate('td', 'myEvent', function(this: I1, event) {
                // $ExpectType I1
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
                myEvent2: false,
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                }
            });
        }

        function off() {
            function defaultContext_defaultData(this: HTMLElement, event: JQuery.Event<HTMLElement>) { }

            function defaultContext_customData(this: HTMLElement, event: JQuery.Event<HTMLElement, string>) { }

            function customContext_defaultData(this: I1, event: JQuery.Event<HTMLElement>) { }

            function customContext_customData(this: I1, event: JQuery.Event<HTMLElement, string>) { }

            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td', defaultContext_defaultData);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td', defaultContext_customData);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td', customContext_defaultData);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td', customContext_customData);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', 'td');

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', defaultContext_defaultData);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', defaultContext_customData);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', customContext_defaultData);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', customContext_customData);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').off('myEvent');

            // $ExpectType JQuery<HTMLElement>
            $('table').off({
                myEvent1: false,
                defaultContext_defaultData,
                defaultContext_customData,
                customContext_defaultData,
                customContext_customData
            }, 'td');

            // $ExpectType JQuery<HTMLElement>
            $('table').off({
                myEvent1: false,
                defaultContext_defaultData,
                defaultContext_customData,
                customContext_defaultData,
                customContext_customData
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').off($.Event('myEvent'));

            // $ExpectType JQuery<HTMLElement>
            $('table').off();
        }

        function on() {
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', 'td', 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', 'td', 'myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('table').on('myEvent', null, 'myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('table').on('myEvent', 'td', function(this: I1, event) {
                // $ExpectType I1
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
            $('table').on('myEvent', 3, function(this: I1, event) {
                // $ExpectType I1
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
            $('table').on('myEvent', function(this: I1, event) {
                // $ExpectType I1
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').on('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                }
            }, 'td', 'myData');

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                }
            }, null, 'myData');

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                }
            }, 'td');

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, number>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, number>
                    event;
                }
            }, 3);

            // $ExpectType JQuery<HTMLElement>
            $('table').on({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                }
            });
        }

        function one() {
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', 'td', 'myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', 'td', 'myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('table').one('myEvent', null, 'myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('table').one('myEvent', 'td', function(this: I1, event) {
                // $ExpectType I1
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
            $('table').one('myEvent', 3, function(this: I1, event) {
                // $ExpectType I1
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
            $('table').one('myEvent', function(this: I1, event) {
                // $ExpectType I1
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').one('myEvent', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                }
            }, 'td', 'myData');

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, string>
                    event;
                }
            }, null, 'myData');

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                }
            }, 'td');

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, number>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, number>
                    event;
                }
            }, 3);

            // $ExpectType JQuery<HTMLElement>
            $('table').one({
                myEvent1: false,
                myEvent2(event) {
                    // $ExpectType HTMLElement
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                },
                myEvent3(this: I1, event) {
                    // $ExpectType I1
                    this;
                    // $ExpectType Event<HTMLElement, null>
                    event;
                }
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
            function defaultContext_defaultData(this: HTMLElement, event: JQuery.Event<HTMLElement>) { }

            function defaultContext_customData(this: HTMLElement, event: JQuery.Event<HTMLElement, string>) { }

            function customContext_defaultData(this: I1, event: JQuery.Event<HTMLElement>) { }

            function customContext_customData(this: I1, event: JQuery.Event<HTMLElement, string>) { }

            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').unbind('myEvent', defaultContext_defaultData);

            // $ExpectType JQuery<HTMLElement>
            $('p').unbind('myEvent', defaultContext_customData);

            // $ExpectType JQuery<HTMLElement>
            $('p').unbind('myEvent', customContext_defaultData);

            // $ExpectType JQuery<HTMLElement>
            $('p').unbind('myEvent', customContext_customData);

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
            function defaultContext_defaultData(this: HTMLElement, event: JQuery.Event<HTMLElement>) { }

            function defaultContext_customData(this: HTMLElement, event: JQuery.Event<HTMLElement, string>) { }

            function customContext_defaultData(this: I1, event: JQuery.Event<HTMLElement>) { }

            function customContext_customData(this: I1, event: JQuery.Event<HTMLElement, string>) { }

            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click', defaultContext_defaultData);

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click', defaultContext_customData);

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click', customContext_defaultData);

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click', customContext_customData);

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click', false);

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', 'click');

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('td', {
                myEvent1: false,
                defaultContext_defaultData,
                defaultContext_customData,
                customContext_defaultData,
                customContext_customData
            });

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate('.tt');

            // $ExpectType JQuery<HTMLElement>
            $('table').undelegate();
        }

        function blur() {
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').blur('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').blur('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').blur(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').change('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').change('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').change(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').click('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').click('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').click(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').contextmenu('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').contextmenu('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').contextmenu(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').dblclick('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').dblclick('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').dblclick(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').focus('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focus('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').focus(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').focusin('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focusin('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').focusin(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').focusout('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').focusout('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').focusout(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').keydown('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keydown('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').keydown(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').keypress('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keypress('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').keypress(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').keyup('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').keyup('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').keyup(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').mousedown('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mousedown('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').mousedown(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseenter('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseenter('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').mouseenter(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseleave('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseleave('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').mouseleave(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').mousemove('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mousemove('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').mousemove(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseout('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseout('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').mouseout(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseover('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseover('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').mouseover(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseup('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').mouseup('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').mouseup(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').resize('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').resize('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').resize(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').scroll('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').scroll('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').scroll(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').select('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').select('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').select(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }

            // $ExpectType JQuery<HTMLElement>
            $('p').submit('myData', function(event) {
                // $ExpectType HTMLElement
                this;
                // $ExpectType Event<HTMLElement, string>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').submit('myData', function(this: I1, event) {
                // $ExpectType I1
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
            $('p').submit(function(this: I1, event) {
                // $ExpectType I1
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
            interface I1 { kind: 'I1'; }
            interface I2 { kind: 'I2'; }

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
            $('p').hover(function(this: I1, event) {
                // $ExpectType I1
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
            }, function(this: I1, event) {
                // $ExpectType I1
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').hover(function(this: I1, event) {
                // $ExpectType I1
                this;
                // $ExpectType Event<HTMLElement, null>
                event;
            }, function(this: I2, event) {
                // $ExpectType I2
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
            $('p').hover(function(this: I1, event) {
                // $ExpectType I1
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
            $('p').hover(false, function(this: I1, event) {
                // $ExpectType I1
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
            $('p').hover(function(this: I1, event) {
                // $ExpectType I1
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
            $('p').after('<p></p>', new Element(), new Text(), $('p').contents(), [new Element(), new Text()]);

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

                return $('p').contents();
            });
        }

        function append() {
            // $ExpectType JQuery<HTMLElement>
            $('p').append('<p></p>', new Element(), new Text(), $('p').contents(), [new Element(), new Text()]);

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

                return $('p').contents();
            });

            // $ExpectType JQuery<HTMLElement>
            $('p').append($.parseHTML('<span>myTextNode <!-- myComment --></span>'));
        }

        function before() {
            // $ExpectType JQuery<HTMLElement>
            $('p').before('<p></p>', new Element(), new Text(), $('p').contents(), [new Element(), new Text()]);

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

                return $('p').contents();
            });
        }

        function prepend() {
            // $ExpectType JQuery<HTMLElement>
            $('p').prepend('<p></p>', new Element(), new Text(), $('p').contents(), [new Element(), new Text()]);

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

                return $('p').contents();
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

            // $ExpectType string | number | string[] | undefined
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
            // $ExpectType JQuery<HTMLElement | Comment | Text>
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
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
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
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
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

function Callbacks() {
    function add() {
        const callbacks = $.Callbacks();

        // $ExpectType Callbacks<Function>
        callbacks.add(() => { }, [() => { }], () => { });

        // $ExpectType Callbacks<Function>
        callbacks.add(() => { }, [() => { }]);

        // $ExpectType Callbacks<Function>
        callbacks.add(() => { }, () => { });

        // $ExpectType Callbacks<Function>
        callbacks.add(() => { });

        // $ExpectType Callbacks<Function>
        callbacks.add([() => { }]);
    }

    function disable() {
        // $ExpectType Callbacks<Function>
        $.Callbacks().disable();
    }

    function disabled() {
        // $ExpectType boolean
        $.Callbacks().disabled();
    }

    function empty() {
        // $ExpectType Callbacks<Function>
        $.Callbacks().empty();
    }

    function fire() {
        // $ExpectType Callbacks<Function>
        $.Callbacks().fire(1);

        // $ExpectType Callbacks<Function>
        $.Callbacks().fire();
    }

    function fireWith() {
        // $ExpectType Callbacks<Function>
        $.Callbacks().fireWith(window, [1]);

        // $ExpectType Callbacks<Function>
        $.Callbacks().fireWith(window);
    }

    function fired() {
        // $ExpectType boolean
        $.Callbacks().fired();
    }

    function has() {
        // $ExpectType boolean
        $.Callbacks().has(() => { });

        // $ExpectType boolean
        $.Callbacks().has();
    }

    function lock() {
        // $ExpectType Callbacks<Function>
        $.Callbacks().lock();
    }

    function locked() {
        // $ExpectType boolean
        $.Callbacks().locked();
    }

    function remove() {
        // $ExpectType Callbacks<Function>
        $.Callbacks().remove(() => { }, () => { });
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

function _Event() {
    function call_signature() {
        // $ExpectType Event<HTMLElement, null> & Coordinates
        $.Event('keydown', $('p').offset());

        // $ExpectType Event<HTMLElement, null> & { type: string; }
        $.Event({
            type: 'keydown'
        });
    }

    function constructor() {
        // $ExpectType Event<HTMLElement, null> & Coordinates
        new $.Event('keydown', $('p').offset());

        // $ExpectType Event<HTMLElement, null> & { type: string; }
        new $.Event({
            type: 'keydown'
        });
    }
}

function jqXHR() {
    function always() {
        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').always((data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        }, [(data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        }], (data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').always((data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        }, [(data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        }]);

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').always([(data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        }], (data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').always((data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').always([(data_jqXHR, textStatus, jqXHR_errorThrown) => {
            // $ExpectType any
            data_jqXHR;
            // $ExpectType "success" | "notmodified" | "nocontent" | "error" | "timeout" | "abort" | "parsererror"
            textStatus;
            // $ExpectType string | jqXHR<any>
            jqXHR_errorThrown;
        }]);
    }

    function done() {
        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').done((data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, [(data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }], (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').done((data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }, [(data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }]);

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').done([(data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }], (data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').done((data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').done([(data, textStatus, jqXHR) => {
            // $ExpectType any
            data;
            // $ExpectType SuccessTextStatus
            textStatus;
            // $ExpectType jqXHR<any>
            jqXHR;
        }]);
    }

    function fail() {
        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').fail((jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        }, [(jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        }], (jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').fail((jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        }, [(jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        }]);

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').fail([(jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        }], (jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').fail((jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        });

        // $ExpectType jqXHR<any>
        $.ajax('/echo/json').fail([(jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        }]);
    }

    function _catch() {
        // $ExpectType Promise3<void, never, never, never, never, never, never, never, never>
        $.ajax('/echo').catch((jqXHR, textStatus, errorThrown) => {
            // $ExpectType jqXHR<any>
            jqXHR;
            // $ExpectType ErrorTextStatus
            textStatus;
            // $ExpectType string
            errorThrown;
        });
    }
}

function Promise3() {
    interface I1 { kind: 'I1'; }
    interface I2 { kind: 'I2'; }
    interface I3 { kind: 'I3'; }
    interface I4 { kind: 'I4'; }
    interface I5 { kind: 'I5'; }
    interface I6 { kind: 'I6'; }
    interface I7 { kind: 'I7'; }
    interface I8 { kind: 'I8'; }
    interface I9 { kind: 'I9'; }

    const p: JQuery.Promise3<string, Error, number, JQuery, string, boolean, any, Function, never> = {} as any;
    const p1: JQuery.Promise3<I1, I2, I3, I4, I5, I6, I7, I8, I9> = {} as any;
    const p2: JQuery.Promise3<I2, I3, I4, I5, I6, I7, I8, I9, I1> = {} as any;
    const p3: JQuery.Promise3<I3, I4, I5, I6, I7, I8, I9, I1, I2> = {} as any;

    const t1: JQuery.Thenable<I1> = {} as any;
    const t2: JQuery.Thenable<I2> = {} as any;
    const t3: JQuery.Thenable<I3> = {} as any;

    function then() {
        p.then((a, b, c) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
            c; // $ExpectType any
        }, (a, b, c) => {
            a; // $ExpectType Error
            b; // $ExpectType string
            c; // $ExpectType Function
        }, (a, b, c) => {
            a; // $ExpectType number
            b; // $ExpectType boolean
            c; // $ExpectType never
        });

        p.then(null, (a, b, c) => {
            a; // $ExpectType Error
            b; // $ExpectType string
            c; // $ExpectType Function
        }, (a, b, c) => {
            a; // $ExpectType number
            b; // $ExpectType boolean
            c; // $ExpectType never
        });

        p.then((a, b, c) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
            c; // $ExpectType any
        }, null, (a, b, c) => {
            a; // $ExpectType number
            b; // $ExpectType boolean
            c; // $ExpectType never
        });

        p.then(null, null, (a, b, c) => {
            a; // $ExpectType number
            b; // $ExpectType boolean
            c; // $ExpectType never
        });

        p.then((a, b, c) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
            c; // $ExpectType any
        }, (a, b, c) => {
            a; // $ExpectType Error
            b; // $ExpectType string
            c; // $ExpectType Function
        }, null);

        p.then((a, b, c) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
            c; // $ExpectType any
        }, (a, b, c) => {
            a; // $ExpectType Error
            b; // $ExpectType string
            c; // $ExpectType Function
        });

        p.then(null, (a, b, c) => {
            a; // $ExpectType Error
            b; // $ExpectType string
            c; // $ExpectType Function
        }, null);

        p.then(null, (a, b, c) => {
            a; // $ExpectType Error
            b; // $ExpectType string
            c; // $ExpectType Function
        });

        p.then((a, b, c) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
            c; // $ExpectType any
        }, null, null);

        p.then((a, b, c) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
            c; // $ExpectType any
        }, null);

        p.then((a, b, c) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
            c; // $ExpectType any
        });

        function doneFilter() {
            p.then(() => {
                return 1;
            }).then((a) => {
                a; // $ExpectType number
            });

            p.then(() => {
                return $.ready;
            }).then((a) => {
                a; // $ExpectType JQueryStatic<HTMLElement>
            });

            p.then(() => {
                return p;
            }).then((a, b, c) => {
                a; // $ExpectType string
                b; // $ExpectType JQuery<HTMLElement>
                c; // $ExpectType any
            }, (a, b, c) => {
                a; // $ExpectType Error
                b; // $ExpectType string
                c; // $ExpectType Function
            }, (a, b, c) => {
                a; // $ExpectType number
                b; // $ExpectType boolean
                c; // $ExpectType never
            });
        }

        function failFilter() {
            p.then(null, () => {
                return 1;
            }).then((a) => {
                a; // $ExpectType number
            });

            p.then(null, () => {
                return $.ready;
            }).then((a) => {
                a; // $ExpectType JQueryStatic<HTMLElement>
            });

            p.then(null, () => {
                return p;
            }).then((a, b, c) => {
                a; // $ExpectType string
                b; // $ExpectType JQuery<HTMLElement>
                c; // $ExpectType any
            }, (a, b, c) => {
                a; // $ExpectType Error
                b; // $ExpectType string
                c; // $ExpectType Function
            }, (a, b, c) => {
                a; // $ExpectType number
                b; // $ExpectType boolean
                c; // $ExpectType never
            });
        }

        function doneFilter_failFilter() {
            // (value, value)
            {
                const q = p.then(() => {
                    return 1;
                }, () => {
                    return 1;
                });

                q.then((a) => {
                    a; // $ExpectType number
                }, (a) => {
                    a; // $ExpectType never
                }, (a, b, c) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                    c; // $ExpectType never
                });
            }

            // (Thenable, Thenable)
            {
                const q = p.then(() => {
                    return t1;
                }, () => {
                    return t2;
                });

                q.then((a) => {
                    a; // $ExpectType I1 | I2
                }, (a) => {
                    a; // $ExpectType never
                }, (a, b, c) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                    c; // $ExpectType never
                });
            }

            // (Promise3, Promise3)
            {
                const q = p.then(() => {
                    return p1;
                }, () => {
                    return p2;
                });

                q.then((a, b, c) => {
                    a; // $ExpectType I1 | I2
                    b; // $ExpectType I4 | I5
                    c; // $ExpectType I7 | I8
                }, (a, b, c) => {
                    a; // $ExpectType I2 | I3
                    b; // $ExpectType I5 | I6
                    c; // $ExpectType I8 | I9
                }, (a, b, c) => {
                    a; // $ExpectType I3 | I4
                    b; // $ExpectType I6 | I7
                    c; // $ExpectType I1 | I9
                });
            }

            // (value, Thenable)
            {
                const q = p.then(() => {
                    return 1;
                }, () => {
                    return t1;
                });

                q.then((a) => {
                    a; // $ExpectType number | I1
                }, (a) => {
                    a; // never
                }, (a, b, c) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                    c; // $ExpectType never
                });
            }

            // (Thenable, value)
            {
                const q = p.then(() => {
                    return t1;
                }, () => {
                    return 1;
                });

                q.then((a) => {
                    a; // $ExpectType number | I1
                }, (a) => {
                    a; // never
                }, (a, b, c) => {
                    a; // $ExpectType never
                    b; // $ExpectType never
                    c; // $ExpectType never
                });
            }

            // (value, Promise3)
            {
                const q = p.then(() => {
                    return 1;
                }, () => {
                    return p1;
                });

                q.then((a, b, c) => {
                    a; // $ExpectType number | I1
                    b; // $ExpectType I4
                    c; // $ExpectType I7
                }, (a, b, c) => {
                    a; // $ExpectType I2
                    b; // $ExpectType I5
                    c; // $ExpectType I8
                }, (a, b, c) => {
                    a; // $ExpectType I3
                    b; // $ExpectType I6
                    c; // $ExpectType I9
                });
            }

            // (Promise3, value)
            {
                const q = p.then(() => {
                    return p1;
                }, () => {
                    return 1;
                });

                q.then((a, b, c) => {
                    a; // $ExpectType number | I1
                    b; // $ExpectType I4
                    c; // $ExpectType I7
                }, (a, b, c) => {
                    a; // $ExpectType I2
                    b; // $ExpectType I5
                    c; // $ExpectType I8
                }, (a, b, c) => {
                    a; // $ExpectType I3
                    b; // $ExpectType I6
                    c; // $ExpectType I9
                });
            }

            // (Thenable, Promise3)
            {
                const q = p.then(() => {
                    return t1;
                }, () => {
                    return p2;
                });

                q.then((a, b, c) => {
                    a; // $ExpectType I1 | I2
                    b; // $ExpectType I5
                    c; // $ExpectType I8
                }, (a, b, c) => {
                    a; // $ExpectType I3
                    b; // $ExpectType I6
                    c; // $ExpectType I9
                }, (a, b, c) => {
                    a; // $ExpectType I4
                    b; // $ExpectType I7
                    c; // $ExpectType I1
                });
            }

            // (Promise3, Thenable)
            {
                const q = p.then(() => {
                    return p1;
                }, () => {
                    return t2;
                });

                q.then((a, b, c) => {
                    a; // $ExpectType I1 | I2
                    b; // $ExpectType I4
                    c; // $ExpectType I7
                }, (a, b, c) => {
                    a; // $ExpectType I2
                    b; // $ExpectType I5
                    c; // $ExpectType I8
                }, (a, b, c) => {
                    a; // $ExpectType I3
                    b; // $ExpectType I6
                    c; // $ExpectType I9
                });
            }
        }
    }

    function _catch() {
        // $ExpectType Promise3<number, never, never, never, never, never, never, never, never>
        $.ajax('/echo/json').catch(() => {
            return 1;
        });

        // $ExpectType Promise3<I1, never, never, never, never, never, never, never, never>
        $.ajax('/echo/json').catch(() => {
            return t1;
        });

        // $ExpectType Promise3<any, jqXHR<any>, never, SuccessTextStatus, ErrorTextStatus, never, jqXHR<any>, string, never>
        $.ajax('/echo/json').catch(() => {
            return $.ajax('/echo/json');
        });
    }

    // As argument to PromiseLike parameter
    {
        Promise.resolve(p).then(a => {
            a; // $ExpectType string
        });
    }

    async function testAsync(p: JQuery.Promise3<string, {}, {}, {}, {}, {}, {}, {}, {}>): Promise<string> {
        return await p;
    }
}

function Promise2(p: JQuery.Promise2<string, Error, number, JQuery, string, boolean>) {
    function then() {
        p.then((a, b) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
        }, (a, b) => {
            a; // $ExpectType Error
            b; // $ExpectType string
        }, (a, b) => {
            a; // $ExpectType number
            b; // $ExpectType boolean
        });

        p.then(null, (a, b) => {
            a; // $ExpectType Error
            b; // $ExpectType string
        }, (a, b) => {
            a; // $ExpectType number
            b; // $ExpectType boolean
        });

        p.then((a, b) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
        }, null, (a, b) => {
            a; // $ExpectType number
            b; // $ExpectType boolean
        });

        p.then(null, null, (a, b) => {
            a; // $ExpectType number
            b; // $ExpectType boolean
        });

        p.then((a, b) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
        }, (a, b) => {
            a; // $ExpectType Error
            b; // $ExpectType string
        }, null);

        p.then((a, b) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
        }, (a, b) => {
            a; // $ExpectType Error
            b; // $ExpectType string
        });

        p.then(null, (a, b) => {
            a; // $ExpectType Error
            b; // $ExpectType string
        }, null);

        p.then(null, (a, b) => {
            a; // $ExpectType Error
            b; // $ExpectType string
        });

        p.then((a, b) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
        }, null, null);

        p.then((a, b) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
        }, null);

        p.then((a, b) => {
            a; // $ExpectType string
            b; // $ExpectType JQuery<HTMLElement>
        });

        function doneFilter() {
            p.then(() => {
                return 1;
            }).then((a) => {
                a; // $ExpectType number
            });

            p.then(() => {
                return $.ready;
            }).then((a) => {
                a; // $ExpectType JQueryStatic<HTMLElement>
            });

            p.then(() => {
                return p;
            }).then((a, b) => {
                a; // $ExpectType string
                b; // $ExpectType JQuery<HTMLElement>
            }, (a, b) => {
                a; // $ExpectType Error
                b; // $ExpectType string
            }, (a, b) => {
                a; // $ExpectType number
                b; // $ExpectType boolean
            });
        }

        function failFilter() {
            p.then(null, () => {
                return 1;
            }).then((a) => {
                a; // $ExpectType number
            });

            p.then(null, () => {
                return $.ready;
            }).then((a) => {
                a; // $ExpectType JQueryStatic<HTMLElement>
            });

            p.then(null, () => {
                return p;
            }).then((a, b) => {
                a; // $ExpectType string
                b; // $ExpectType JQuery<HTMLElement>
            }, (a, b) => {
                a; // $ExpectType Error
                b; // $ExpectType string
            }, (a, b) => {
                a; // $ExpectType number
                b; // $ExpectType boolean
            });
        }
    }

    async function testAsync(p: JQuery.Promise2<string, {}, {}, {}, {}, {}>): Promise<string> {
        return await p;
    }
}

function _Promise(p: JQuery.Promise<string, Error, number>) {
    function then() {
        p.then((a) => {
            a; // $ExpectType string
        }, (a) => {
            a; // $ExpectType Error
        }, (a) => {
            a; // $ExpectType number
        });

        p.then(null, (a) => {
            a; // $ExpectType Error
        }, (a) => {
            a; // $ExpectType number
        });

        p.then((a) => {
            a; // $ExpectType string
        }, null, (a) => {
            a; // $ExpectType number
        });

        p.then(null, null, (a) => {
            a; // $ExpectType number
        });

        p.then((a) => {
            a; // $ExpectType string
        }, (a) => {
            a; // $ExpectType Error
        }, null);

        p.then((a) => {
            a; // $ExpectType string
        }, (a) => {
            a; // $ExpectType Error
        });

        p.then(null, (a) => {
            a; // $ExpectType Error
        }, null);

        p.then(null, (a) => {
            a; // $ExpectType Error
        });

        p.then((a) => {
            a; // $ExpectType string
        }, null, null);

        p.then((a) => {
            a; // $ExpectType string
        }, null);

        p.then((a) => {
            a; // $ExpectType string
        });

        function doneFilter() {
            p.then(() => {
                return 1;
            }).then((a) => {
                a; // $ExpectType number
            });

            p.then(() => {
                return $.ready;
            }).then((a) => {
                a; // $ExpectType JQueryStatic<HTMLElement>
            });

            p.then(() => {
                return p;
            }).then((a) => {
                a; // $ExpectType string
            }, (a) => {
                a; // $ExpectType Error
            }, (a) => {
                a; // $ExpectType number
            });
        }

        function failFilter() {
            p.then(null, () => {
                return 1;
            }).then((a) => {
                a; // $ExpectType number
            });

            p.then(null, () => {
                return $.ready;
            }).then((a) => {
                a; // $ExpectType JQueryStatic<HTMLElement>
            });

            p.then(null, () => {
                return p;
            }).then((a) => {
                a; // $ExpectType string
            }, (a) => {
                a; // $ExpectType Error
            }, (a) => {
                a; // $ExpectType number
            });
        }
    }

    async function testAsync(p: JQuery.Promise<string, Error, number>): Promise<string> {
        return await p;
    }
}
