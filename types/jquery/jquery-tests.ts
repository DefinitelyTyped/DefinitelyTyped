function JQuery() {
    function iterable() {
        for (const a of $('div')) {
            a.textContent = 'myDiv';
        }
    }

    function arrayLike() {
        $('div')[0] === new HTMLElement();
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
            // $ExpectType "abort" | "timeout" | "error" | "parsererror" | null
            textStatus;
            // $ExpectType string
            errorThrown;
        });
    }
}
