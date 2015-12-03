// Tests for type definitions for Foundation Sites v6.0.4
// Project: http://foundation.zurb.com/
// Definitions by: Sam Vloeberghs <https://github.com/samvloeberghs/>
// Definitions by: Michał Wrześniewski <https://github.com/wrzesm01/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="foundation.d.ts" />

$(document).foundation();
$(document).foundation('method');
$(document).foundation(['method', 'method2']);

function pluginList() {

    'use strict';

    return [
        'Abide',
        'Accordion',
        'AccordionMenu',
        'DrillDown',
        'Dropdown',
        'DropdownMenu',
        'Equalizer',
        'Interchange',
        'Magellan',
        'OffCanvas',
        'Orbit',
        'Reveal',
        'Slider',
        'Sticky',
        'Tabs',
        'Toggler',
        'Tooltip'
    ];
}

pluginList().forEach((value:String) => {
    Foundation[value].($('.selector'));
    Foundation[value].($('.selector'), {});
});
