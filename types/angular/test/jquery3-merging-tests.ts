import $ = require('jquery');
import * as angular from 'angular';

// Fix TODOs once https://github.com/Microsoft/TypeScript/issues/18910 is fixed

function JQuery() {
    function indexSignature() {
        $('p')[0]; // TODO: $ExpectType HTMLElement
    }

    function addClass() {
        // $ExpectType JQuery<HTMLElement>
        $('p').addClass('className');

        // $ExpectType JQuery<HTMLElement>
        $('p').addClass(function(index, currentClassName) {
            // TODO: $ExpectType HTMLElement
            this;
            // $ExpectType number
            index;
            // $ExpectType string
            currentClassName;

            return 'className';
        });
    }

    function attr() {
        // $ExpectType JQuery<HTMLElement>
        $('#greatphoto').attr('alt', 'Beijing Brush Seller');

        // $ExpectType JQuery<HTMLElement>
        $('#greatphoto').attr('width', 200);

        // $ExpectType JQuery<HTMLElement>
        $('#greatphoto').attr('title', null);

        // $ExpectType JQuery<HTMLElement>
        $('#greatphoto').attr('alt', function(index, attr) {
            // TODO: $ExpectType HTMLElement
            this;
            // $ExpectType number
            index;
            // $ExpectType string
            attr;

            return 'Beijing Brush Seller';
        });

        // $ExpectType JQuery<HTMLElement>
        $('#greatphoto').attr('width', function(index, attr) {
            // TODO: $ExpectType HTMLElement
            this;
            // $ExpectType number
            index;
            // $ExpectType string
            attr;

            return 200;
        });

        // $ExpectType JQuery<HTMLElement>
        $('#greatphoto').attr('title', function(index, attr) {
            // TODO: $ExpectType HTMLElement
            this;
            // $ExpectType number
            index;
            // $ExpectType string
            attr;
        });

        // $ExpectType JQuery<HTMLElement>
        $('#greatphoto').attr('title', function(index, attr) {
            // TODO: $ExpectType HTMLElement
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

        // @types/angular's definition wins here
        // // $ExpectType string | undefined
        // $('img').attr('src');
    }

    function bind() {
        // $ExpectType JQuery<HTMLElement>
        $('p').bind('myEvent', 'myData', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, string>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('p').bind('myEvent', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, null>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('p').bind('myEvent', false);

        // $ExpectType JQuery<HTMLElement>
        $('p').bind({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, null>
                event;
            }
        });

        // $ExpectType JQuery<HTMLElement>
        $('p').bind('myEvent', null);

        // $ExpectType JQuery<HTMLElement>
        $('p').bind('myEvent', undefined);
    }

    function children() {
        // $ExpectType JQuery<HTMLElement>
        $('p').children('span');

        // $ExpectType JQuery<HTMLElement>
        $('p').children();
    }

    function off() {
        function defaultData(this: HTMLElement, event: JQueryEventObject) { }

        function customData(this: HTMLElement, event: JQueryEventObject) { }

        // $ExpectType JQuery<HTMLElement>
        $('table').off('myEvent', 'td', defaultData);

        // $ExpectType JQuery<HTMLElement>
        $('table').off('myEvent', 'td', customData);

        // $ExpectType JQuery<HTMLElement>
        $('table').off('myEvent', 'td', false);

        // $ExpectType JQuery<HTMLElement>
        $('table').off('myEvent', 'td');

        // $ExpectType JQuery<HTMLElement>
        $('table').off('myEvent', defaultData);

        // $ExpectType JQuery<HTMLElement>
        $('table').off('myEvent', customData);

        // $ExpectType JQuery<HTMLElement>
        $('table').off('myEvent', false);

        // $ExpectType JQuery<HTMLElement>
        $('table').off('myEvent');

        // $ExpectType JQuery<HTMLElement>
        $('table').off({
            myEvent1: false,
            defaultData,
            customData
        }, 'td');

        // $ExpectType JQuery<HTMLElement>
        $('table').off({
            myEvent1: false,
            defaultData,
            customData
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').off($.Event('myEvent'));

        // $ExpectType JQuery<HTMLElement>
        $('table').off();
    }

    function on() {
        // $ExpectType JQuery<HTMLElement>
        $('table').on('myEvent', 'td', 'myData', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, string>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').on('myEvent', null, 'myData', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, string>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').on('myEvent', 'td', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, null>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').on('myEvent', 'td', false);

        // $ExpectType JQuery<HTMLElement>
        $('table').on('myEvent', 3, function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, number>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').on('myEvent', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, null>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').on('myEvent', false);

        // $ExpectType JQuery<HTMLElement>
        $('table').on({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, string>
                event;
            }
        }, 'td', 'myData');

        // $ExpectType JQuery<HTMLElement>
        $('table').on({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, string>
                event;
            }
        }, null, 'myData');

        // $ExpectType JQuery<HTMLElement>
        $('table').on({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, null>
                event;
            }
        }, 'td');

        // $ExpectType JQuery<HTMLElement>
        $('table').on({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, number>
                event;
            }
        }, 3);

        // $ExpectType JQuery<HTMLElement>
        $('table').on({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, null>
                event;
            }
        });
    }

    function one() {
        // $ExpectType JQuery<HTMLElement>
        $('table').one('myEvent', 'td', 'myData', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, string>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').one('myEvent', null, 'myData', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, string>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').one('myEvent', 'td', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, null>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').one('myEvent', 'td', false);

        // $ExpectType JQuery<HTMLElement>
        $('table').one('myEvent', 3, function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, number>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').one('myEvent', function(event) {
            // TODO: $ExpectType HTMLElement
            this;
            // TODO: $ExpectType Event<HTMLElement, null>
            event;
        });

        // $ExpectType JQuery<HTMLElement>
        $('table').one('myEvent', false);

        // $ExpectType JQuery<HTMLElement>
        $('table').one({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, string>
                event;
            }
        }, 'td', 'myData');

        // $ExpectType JQuery<HTMLElement>
        $('table').one({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, string>
                event;
            }
        }, null, 'myData');

        // $ExpectType JQuery<HTMLElement>
        $('table').one({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, null>
                event;
            }
        }, 'td');

        // $ExpectType JQuery<HTMLElement>
        $('table').one({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, number>
                event;
            }
        }, 3);

        // $ExpectType JQuery<HTMLElement>
        $('table').one({
            myEvent1: false,
            myEvent2(event) {
                // TODO: $ExpectType HTMLElement
                this;
                // TODO: $ExpectType Event<HTMLElement, null>
                event;
            }
        });
    }

    function removeClass() {
        // $ExpectType JQuery<HTMLElement>
        $('p').removeClass('className');

        // $ExpectType JQuery<HTMLElement>
        $('p').removeClass(function(index, currentClassName) {
            // TODO: $ExpectType HTMLElement
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
            // TODO: $ExpectType HTMLElement
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
            // TODO: $ExpectType HTMLElement
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
