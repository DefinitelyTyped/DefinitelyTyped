import * as $ from 'jquery';
import * as angular from 'angular';

function JQuery() {
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

        // $ExpectType string
        $('img').attr('src');
    }

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

    function children() {
        $('p').children();

        $('p').children('span');
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
