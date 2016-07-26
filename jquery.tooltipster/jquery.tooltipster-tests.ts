

// Type definition tests for jQuery Tooltipster 3.3.0
// Project: https://github.com/iamceege/tooltipster
// Definitions by: Patrick Magee <https://github.com/pjmagee/>, Dmitry Pesterev <https://github.com/VorobeY1326/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Tests taken from the getting started section of the Tooltipster website

$(document).ready(function () {

    $('.tooltip').tooltipster();

    $('#my-tooltip').tooltipster({
        content: $('<span><img src="my-image.png" /> <strong>This text is in bold case !</strong></span>')
    });

    $('#my-tooltip').tooltipster({
        content: 'string test'
    });
});


$(document).ready(function () {
    $('.tooltip').tooltipster({
        contentAsHTML: true
    });
});

$('.tooltip').tooltipster({
    theme: 'tooltipster-noir'
});

$('.tooltip').tooltipster({
    animation: 'fade',
    delay: 200,
    theme: 'tooltipster-default',
    touchDevices: false,
    trigger: 'hover'
});

$.fn.tooltipster('setDefaults', {
    position: 'bottom'
});

var myNewContent = '';

function callback(): void {

}

// temporarily disable a tooltip from being able to open
$('.tooltip').tooltipster('disable');

// if a tooltip was disabled from opening, reenable its previous functionality
$('.tooltip').tooltipster('enable');

// hide and destroy tooltip functionality
$('.tooltip').tooltipster('destroy');

// return a tooltip's current content (if selector contains multiple origins, only the value of the first will be returned)
$('.tooltip').tooltipster('content');

// update tooltip content
$('.tooltip').tooltipster('content', myNewContent);

//update option
$('.tooltip').tooltipster('option', 'delay', '200');

// reposition and resize the tooltip
$('.tooltip').tooltipster('reposition');

// return the HTML root element of the tooltip
$('.tooltip').tooltipster('elementTooltip');

// return the HTML root element of the icon if there is one, 'undefined' otherwise
$('.tooltip').tooltipster('elementIcon');

$('.tooltip').tooltipster({
    content: 'Loading...',
    functionBefore: function (origin, continueTooltip) {

        // we'll make this function asynchronous and allow the tooltip to go ahead and show the loading notification while fetching our data
        continueTooltip();

        // next, we want to check if our data has already been cached
        if (origin.data('ajax') !== 'cached') {
            $.ajax({
                type: 'POST',
                url: 'example.php',
                success: function (data) {
                    // update our tooltip content with our returned data and cache it
                    origin.tooltipster('content', data).data('ajax', 'cached');
                }
            });
        }
    }
});



$('.tooltip').tooltipster({
    content: 'Loading...',
    functionBefore: (origin, continueTooltip) => {

        // we'll make this function asynchronous and allow the tooltip to go ahead and show the loading notification while fetching our data
        continueTooltip();

        // next, we want to check if our data has already been cached
        if (origin.data('ajax') !== 'cached') {
            $.ajax({
                type: 'POST',
                url: 'example.php',
                success: function (data) {
                    // update our tooltip content with our returned data and cache it
                    origin.tooltipster('content', data).data('ajax', 'cached');
                }
            });
        }
    }
});

$('.tooltip').tooltipster({
    functionInit: function (origin, content) {

        if (content === 'This is bad content') {

            // when the request has finished loading, we will change the tooltip's content
            $.ajax({
                type: 'POST',
                url: 'example.php',
                success: function (data) {
                    origin.tooltipster('content', 'New content has been loaded : ' + data);
                }
            });

            // this returned string will overwrite the content of the tooltip for the time being
            return 'Wait while we load new content...';
        }
        else {
            // return nothing : the initialization continues normally with its content unchanged.
        }
    }
});

$('.tooltip').tooltipster({
    functionInit: (origin, content) => {

        if (content === 'This is bad content') {

            // when the request has finished loading, we will change the tooltip's content
            $.ajax({
                type: 'POST',
                url: 'example.php',
                success: function (data) {
                    origin.tooltipster('content', 'New content has been loaded : ' + data);
                }
            });

            // this returned string will overwrite the content of the tooltip for the time being
            return 'Wait while we load new content...';
        }
        else {
            // return nothing : the initialization continues normally with its content unchanged.
        }
    }
});

$(document).ready(function () {

    // first on page load, initiate the Tooltipster plugin
    $('.tooltip').tooltipster();

    $('.tooltip').tooltipster({
        contentAsHTML: true
    });

    $('.tooltip').tooltipster({
        content: $('<span><img src="my-image.png" /> <strong>This text is in bold case !</strong></span>')
    });

    // then immediately show the tooltip
    $('#example').tooltipster('show');

    // as soon as a key is pressed on the keyboard, hide the tooltip.
    $(window).keypress(function () {
        $('#example').tooltipster('hide');
    });

    $('#example').tooltipster('show', function () {
        alert('The tooltip is now fully open. The content is: ' + this.tooltipster('content'));
    });

    $('#example').tooltipster('show', () => {
        alert('The tooltip is now fully open. The content is: ' + this.tooltipster('content'));
    });

    $(window).keypress(function () {
        $('#example').tooltipster('hide', function () {
            alert('The tooltip is now fully closed');
        });
    });
});
