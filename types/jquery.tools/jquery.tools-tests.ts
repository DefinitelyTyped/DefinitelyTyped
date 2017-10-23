/* from documentation at http://jquerytools.github.io/documentation/overlay/index.html */

$("img[rel]").overlay();

const triggers = $(".modalInput").overlay({
    // some mask tweaks suitable for modal dialogs
    mask: {
        color: '#ebecff',
        loadSpeed: 200,
        opacity: 0.9
    },

    closeOnClick: false
});

const buttons = $("#yesno button").click(function(e) {
    // get user input
    const yes = buttons.index(this) === 0;

    // do something with the answer
    triggers.eq(0).html("You clicked " + (yes ? "yes" : "no"));
});

// select one or more elements to be overlay triggers
$(".my_overlay_trigger").overlay({
    // one configuration property
    mask: {
        color: '#ccc'
    },
    // another property
    top: 50
    // ... the rest of the configuration properties
});

$("#prompt form").submit(function(e) {
    // close the overlay
    triggers.eq(1).overlay<JQueryTools.overlay.Overlay>().close();
    // or more straightforward:
    triggers.data('overlay').close();

    // get user input
    const input = $("input", this).val() as string;

    // do something with the answer
    triggers.eq(1).html(input);

    // do not submit the form
    return e.preventDefault();
});

$.tools.overlay.addEffect('', () => {}, () => {});

/* custom effects */
$.tools.overlay.addEffect("myEffect",
    function(position, done) {
        /*
        - 'this' variable is a reference to the overlay API
        - here we use jQuery's fadeIn() method to perform the effect
        */
        this.getOverlay().css(position).fadeIn(this.getConf().speed!, done);
    },

    // close function
    function(done) {
        // fade out the overlay
        this.getOverlay().fadeOut(this.getConf().closeSpeed!, done);
    }
);

$("#apple img[rel]").overlay({effect: 'apple'});

// select the overlay element - and "make it an overlay"
$("#facebox").overlay({
    // custom top position
    top: 260,
    // some mask tweaks suitable for facebox-looking dialogs
    mask: {
    // you might also consider a "transparent" color for the mask
    color: '#fff',
    // load mask a little faster
    loadSpeed: 200,
    // very transparent
    opacity: 0.5
    },
    // disable this for modal dialog-type of overlays
    closeOnClick: false,
    // load it immediately after the construction
    load: true
});

$(() => {
    // if the function argument is given to overlay,
    // it is assumed to be the onBeforeLoad event listener
    $("a[rel]").overlay({
        mask: 'darkred',
        effect: 'apple',

        onBeforeLoad() {
            // grab wrapper element inside content
            const wrap = this.getOverlay().find(".contentWrap");

            // load the page specified in the trigger
            wrap.load(this.getTrigger().attr("href")!);
        }
    });
});

$(() => {
    // positions for each overlay
    const positions = [
        [0, 530],
        [400, 20],
        [400, 530],
        [0, 20]
    ];

    // setup triggers
    $("button[rel]").each(function(i) {
        $(this).overlay({
            // common configuration for each overlay
            oneInstance: false,
            closeOnClick: false,

            // setup custom finish position
            top: positions[i][0],
            left: positions[i][1],
            // use apple effect
            effect: 'apple'
        });
    });
});

// loading animation
$.tools.overlay.addEffect("drop",
    function(css, done) {
        // use Overlay API to gain access to crucial elements
        const conf = this.getConf();
        const overlay = this.getOverlay();

        // determine initial position for the overlay
        if (conf.fixed)  {
            css['position'] = 'fixed';
        } else {
            css['top'] += $(window).scrollTop();
            css['left'] += $(window).scrollLeft();
            css['position'] = 'absolute';
        }

        // position the overlay and show it
        overlay.css(css).show();

        // begin animating with our custom easing
        overlay.animate(
            { top: '+=55',  opacity: 1,  width: '+=20'}, 400, 'drop', done
        );

        /* closing animation */
    },
    function(done) {
        this.getOverlay().animate(
            { top: '-=55', opacity: 0, width: '-=20' },
            300,
            'drop',
            function() {
                $(this).hide();
                done.call(null);
            });
    }
);

$("img[rel]").overlay({
    effect: 'drop',
    mask: '#789'
});
