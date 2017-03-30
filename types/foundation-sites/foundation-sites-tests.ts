$(document).foundation();
$(document).foundation('method5');
$(document).foundation(['method', 'method2']);

Foundation.Abide($('.selector'));
Foundation.Abide($('.selector'), {});

Foundation.Accordion($('.selector'));
Foundation.Accordion($('.selector'), {});

Foundation.AccordionMenu($('.selector'));
Foundation.AccordionMenu($('.selector'), {});

Foundation.DrillDown($('.selector'));
Foundation.DrillDown($('.selector'), {});

Foundation.Dropdown($('.selector'));
Foundation.Dropdown($('.selector'), {});

Foundation.DropdownMenu($('.selector'));
Foundation.DropdownMenu($('.selector'), {});

Foundation.Equalizer($('.selector'));
Foundation.Equalizer($('.selector'), {});

Foundation.Interchange($('.selector'));
Foundation.Interchange($('.selector'), {});

Foundation.Magellan($('.selector'));
Foundation.Magellan($('.selector'), {});

Foundation.OffCanvas($('.selector'));
Foundation.OffCanvas($('.selector'), {});

Foundation.Orbit($('.selector'));
Foundation.Orbit($('.selector'), {});

Foundation.Reveal($('.selector'));
Foundation.Reveal($('.selector'), {});

Foundation.Slider($('.selector'));
Foundation.Slider($('.selector'), {});

Foundation.Sticky($('.selector'));
Foundation.Sticky($('.selector'), {});

Foundation.Tabs($('.selector'));
Foundation.Tabs($('.selector'), {});

Foundation.Toggler($('.selector'));
Foundation.Toggler($('.selector'), {});

Foundation.Tooltip($('.selector'));
Foundation.Tooltip($('.selector'), {});

/*
 TODO: fix this:
 error TS7017: Index signature of object type implicitly has an 'any' type.

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

 pluginList().forEach((value:string) => {
 Foundation[value]($('.selector'));
 Foundation[value]($('.selector'), {});
 });
 */


