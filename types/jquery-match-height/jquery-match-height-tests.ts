/* from documentation at https://github.com/liabru/jquery-match-height */

$(document).ready(() => {
    $(".containers").matchHeight();
    $(".containers").matchHeight({
        byRow: true,
        property: "height",
        remove: true}
    );
});

$.fn.matchHeight._update();

$.fn.matchHeight._rows($('.containers'));

$('.containers').matchHeight({ remove: true });

$.fn.matchHeight._beforeUpdate = (event, groups) => {
    // do something before any updates are applied
};

$.fn.matchHeight._afterUpdate = (event, groups) => {
    // do something after all updates are applied
};

let elements = $('.containers');
let options = {byRow: true};

$.fn.matchHeight._apply(elements, options);

$.fn.matchHeight._throttle = 80;

$.fn.matchHeight._maintainScroll = true;

$.fn.matchHeight._groups;
