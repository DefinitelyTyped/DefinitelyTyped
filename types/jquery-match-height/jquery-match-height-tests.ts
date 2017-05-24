/* from documentation at https://github.com/liabru/jquery-match-height */

$(document).ready(() => {
    $(".containers").matchHeight();
    $(".containers").matchHeight({
        byRow: true,
        property: "height",
        target: null,
        remove: true}
    );
});

$.fn.matchHeight._update();

$.fn.matchHeight._rows($('.containers'));

$('.containers').matchHeight({ remove: true });

// tslint:disable-next-line no-used-variable
$.fn.matchHeight._beforeUpdate = (event: any, groups: any) => {
    // do something before any updates are applied
};

// tslint:disable-next-line no-used-variable
$.fn.matchHeight._afterUpdate = (event: any, groups: any) => {
    // do something after all updates are applied
};

let elements = $('.containers');
let options = {byRow: true};

$.fn.matchHeight._apply(elements, options);

$.fn.matchHeight._throttle = 80;

$.fn.matchHeight._maintainScroll = true;

$.fn.matchHeight._groups;
