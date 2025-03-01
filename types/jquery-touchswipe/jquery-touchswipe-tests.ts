// ======================
// === Detailed tests ===
// ======================

// $ExpectType JQuery<HTMLElement> | undefined
$("#element").swipe("destroy");

// $ExpectType JQuery<HTMLElement>
$("#element").swipe("disable");

// $ExpectType JQuery<HTMLElement>
$("#element").swipe("enable");

// $ExpectType JQuery<HTMLElement> | number
$("#element").swipe("option", "threshold"); // return the threshold

// $ExpectType JQuery<HTMLElement> | null
$("#element").swipe("option", "threshold", 100); // set the threshold after init

// $ExpectType JQuery<HTMLElement> | null
$("#element").swipe("option", { threshold: 100, fingers: 3 }); // set multiple properties after init

// $ExpectType JQuery<HTMLElement>
$("#element").swipe({ threshold: 100, fingers: 3 }); // set multiple properties after init - the "option" method is optional!

// $ExpectType JQuery<HTMLElement> | Settings
$("#element").swipe("option"); // Return the current options hash

// Pointer events
$("#element").swipe({
    doubleTap: function(event, target) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType HTMLElement
        target;
    },
    hold: function(event, target) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType HTMLElement
        target;
    },
    longTap: function(event, target) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType HTMLElement
        target;
    },
    tap: function(event, target) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType HTMLElement
        target;
    },
});

// Pinch events
$("#element").swipe({
    pinchIn: function(event, direction, distance, duration, fingerCount, zoom, fingerData) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Direction
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType number
        zoom;
        // $ExpectType FingerData
        fingerData;
    },
    pinchOut: function(event, direction, distance, duration, fingerCount, zoom, fingerData) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Direction
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType number
        zoom;
        // $ExpectType FingerData
        fingerData;
    },
    pinchStatus: function(event, phase, direction, distance, duration, fingerCount, zoom, fingerData) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Phase
        phase;
        // $ExpectType Direction | null
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType number
        zoom;
        // $ExpectType FingerData
        fingerData;
    },
});

// Swipe events
$("#element").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Direction
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType FingerData
        fingerData;
        // $ExpectType Direction
        currentDirection;
    },
    swipeDown: function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Direction
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType FingerData
        fingerData;
        // $ExpectType Direction
        currentDirection;
    },
    swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Direction
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType FingerData
        fingerData;
        // $ExpectType Direction
        currentDirection;
    },
    swipeRight: function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Direction
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType FingerData
        fingerData;
        // $ExpectType Direction
        currentDirection;
    },
    swipeStatus: function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Phase
        phase;
        // $ExpectType Direction | null
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType FingerData
        fingerData;
        // $ExpectType Direction | null
        currentDirection;
    },
    swipeUp: function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {
        // $ExpectType JQuery<HTMLElement>
        this;
        // $ExpectType TriggeredEvent<any, any, any, any>
        event;
        // $ExpectType Direction
        direction;
        // $ExpectType number
        distance;
        // $ExpectType number
        duration;
        // $ExpectType Finger
        fingerCount;
        // $ExpectType FingerData
        fingerData;
        // $ExpectType Direction
        currentDirection;
    },
});

// $ExpectType Settings
$.fn.swipe.defaults;
$.fn.swipe.defaults.allowPageScroll = "horizontal";
$.fn.swipe.defaults.cancelThreshold = 1;
$.fn.swipe.defaults.doubleTap = () => {};
$.fn.swipe.defaults.doubleTapThreshold = 1;
$.fn.swipe.defaults.excludedElements = "";
$.fn.swipe.defaults.fallbackToMouseEvents = false;
$.fn.swipe.defaults.fingerReleaseThreshold = 1;
$.fn.swipe.defaults.fingers = "all";
$.fn.swipe.defaults.hold = () => {};
$.fn.swipe.defaults.longTap = () => {};
$.fn.swipe.defaults.longTapThreshold = 1;
$.fn.swipe.defaults.maxTimeThreshold = 1;
$.fn.swipe.defaults.pinchIn = () => {};
$.fn.swipe.defaults.pinchOut = () => {};
$.fn.swipe.defaults.pinchStatus = () => {};
$.fn.swipe.defaults.pinchThreshold = 1;
$.fn.swipe.defaults.preventDefaultEvents = false;
$.fn.swipe.defaults.swipe = () => {};
$.fn.swipe.defaults.swipeDown = () => {};
$.fn.swipe.defaults.swipeLeft = () => {};
$.fn.swipe.defaults.swipeRight = () => {};
$.fn.swipe.defaults.swipeStatus = () => {};
$.fn.swipe.defaults.swipeUp = () => {};
$.fn.swipe.defaults.tap = () => {};
$.fn.swipe.defaults.threshold = 1;
$.fn.swipe.defaults.triggerOnTouchEnd = false;
$.fn.swipe.defaults.triggerOnTouchEnd = false;
$.fn.swipe.defaults.triggerOnTouchLeave = false;

// $ExpectType Directions
$.fn.swipe.directions;
// $ExpectType "down"
$.fn.swipe.directions.DOWN;
// $ExpectType "in"
$.fn.swipe.directions.IN;
// $ExpectType "left"
$.fn.swipe.directions.LEFT;
// $ExpectType "out"
$.fn.swipe.directions.OUT;
// $ExpectType "right"
$.fn.swipe.directions.RIGHT;
// $ExpectType "up"
$.fn.swipe.directions.UP;
// @ts-expect-error
$.fn.swipe.directions.DOWN = "down";
// @ts-expect-error
$.fn.swipe.directions.IN = "in";
// @ts-expect-error
$.fn.swipe.directions.LEFT = "left";
// @ts-expect-error
$.fn.swipe.directions.OUT = "out";
// @ts-expect-error
$.fn.swipe.directions.RIGHT = "right";
// @ts-expect-error
$.fn.swipe.directions.UP = "up";

// $ExpectType Fingers
$.fn.swipe.fingers;
// $ExpectType 1
$.fn.swipe.fingers.ONE;
// $ExpectType 2
$.fn.swipe.fingers.TWO;
// $ExpectType 3
$.fn.swipe.fingers.THREE;
// $ExpectType 4
$.fn.swipe.fingers.FOUR;
// $ExpectType 5
$.fn.swipe.fingers.FIVE;
// $ExpectType "all"
$.fn.swipe.fingers.ALL;
// @ts-expect-error
$.fn.swipe.fingers.ONE = 1;
// @ts-expect-error
$.fn.swipe.fingers.TWO = 2;
// @ts-expect-error
$.fn.swipe.fingers.THREE = 3;
// @ts-expect-error
$.fn.swipe.fingers.FOUR = 4;
// @ts-expect-error
$.fn.swipe.fingers.FIVE = 5;
// @ts-expect-error
$.fn.swipe.fingers.ALL = "all";

// $ExpectType PageScrolls
$.fn.swipe.pageScroll;
// $ExpectType "auto"
$.fn.swipe.pageScroll.AUTO;
// $ExpectType "horizontal"
$.fn.swipe.pageScroll.HORIZONTAL;
// $ExpectType "none"
$.fn.swipe.pageScroll.NONE;
// $ExpectType "vertical"
$.fn.swipe.pageScroll.VERTICAL;
// @ts-expect-error
$.fn.swipe.pageScroll.AUTO = "auto";
// @ts-expect-error
$.fn.swipe.pageScroll.HORIZONTAL = "horizontal";
// @ts-expect-error
$.fn.swipe.pageScroll.NONE = "none";
// @ts-expect-error
$.fn.swipe.pageScroll.VERTICAL = "vertical";

// $ExpectType Phases
$.fn.swipe.phases;
// $ExpectType "cancel"
$.fn.swipe.phases.PHASE_CANCEL;
// $ExpectType "end"
$.fn.swipe.phases.PHASE_END;
// $ExpectType "move"
$.fn.swipe.phases.PHASE_MOVE;
// $ExpectType "start"
$.fn.swipe.phases.PHASE_START;
// @ts-expect-error
$.fn.swipe.phases.PHASE_CANCEL = "cancel";
// @ts-expect-error
$.fn.swipe.phases.PHASE_END = "end";
// @ts-expect-error
$.fn.swipe.phases.PHASE_MOVE = "move";
// @ts-expect-error
$.fn.swipe.phases.PHASE_START = "start";

// ===============================
// === Example from the readme ===
// ===============================

$(() => {
    $("#test").swipe({
        // Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            $(this).text(`You swiped ${direction}`);
        },
    });

    // Set some options later
    $("#test").swipe({ fingers: 2 });
});

// ======================================
// === Sample code from the tutorials ===
// ======================================

// Tutorial: Any finger swipe
$(() => {
    $("#test").swipe({
        swipe: (event, direction, distance, duration, fingerCount, fingerData) => {
            $("#test").text(`You swiped ${direction} with ${fingerCount} fingers`);
        },
        threshold: 0,
        fingers: "all",
    });
});

// Tutorial: Basic swipe
$(() => {
    // Enable swiping...
    $("#test").swipe({
        // Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            $(this).text(`You swiped ${direction}`);
        },
        // Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0,
    });
});

// Tutorial: Excluded children
$(() => {
    let swipeCount1 = 0;
    let swipeCount2 = 0;
    $("#test").swipe({
        swipe: () => {
            swipeCount1++;
            $("#textText1").html(`You swiped ${swipeCount1} times`);
        },
        // By default any element with a class .noSwipe is not swipeable
    });
    // Enable swiping...
    $("#test2").swipe({
        swipe: () => {
            swipeCount2++;
            $("#textText2").html(`You swiped ${swipeCount2} times`);
        },
        // By default the value of $.fn.swipe.defaults.excludedElements is ".noSwipe"
        // To replace or clear the list, re set the excludedElements array.
        // To append to it, do the following (dont forget the proceeding comma) ...
        excludedElements: `${$.fn.swipe.defaults.excludedElements}, #some_other_div`,
    });
});

// Tutorial: Finger swipe
$(() => {
    $("#test, #test_2").swipe({
        swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData) {
            if (phase === $.fn.swipe.phases.PHASE_START) {
                $(this).text("moving...");
            }
            if (phase === $.fn.swipe.phases.PHASE_CANCEL) {
                $(this).text("swipe cancelled (due to finger count) ");
            }
        },
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            $(this).text(`You swiped ${direction} with ${fingerCount} fingers`);
        },
        threshold: 0,
        fingers: 2,
    });
    $("#test_2").swipe({ fingers: 3 });
});

// Tutorial: Handlers and events
$(() => {
    $("#register_btn").on("click", function() {
        if ($(this).text() === "Register Events") {
            registerEvents();
        } else {
            deRegisterEvents();
        }
    });
    // Create the swipe object, and assign the callbacks
    $("#test").swipe({
        tap: (event, target) => {
            log("tap from callback");
        },
        hold: (event, target) => {
            log("hold from callback");
        },
        swipe: (event, direction, distance, duration, fingerCount, fingerData, currentDirection) => {
            log("swipe from callback");
        },
        swipeLeft: (event, distance, duration, fingerCount, fingerData, currentDirection) => {
            log("swipeLeft from callback");
        },
        swipeRight: (event, distance, duration, fingerCount, fingerData, currentDirection) => {
            log("swipeRight from callback");
        },
        swipeUp: (event, distance, duration, fingerCount, fingerData, currentDirection) => {
            log("swipeUp from callback");
        },
        swipeDown: (event, distance, duration, fingerCount, fingerData, currentDirection) => {
            log("swipeDown from callback");
        },
        swipeStatus: (event, phase, direction, distance, duration, fingers, fingerData, currentDirection) => {
            log("swipeStatus from callback");
        },
        pinchIn: (event, direction, distance, duration, fingerCount, pinchZoom, fingerData) => {
            log("pinchIn from callback");
        },
        pinchOut: (event, direction, distance, duration, fingerCount, pinchZoom, fingerData) => {
            log("pinchOut from callback");
        },
        pinchStatus: (event, phase, direction, distance, duration, fingerCount, pinchZoom, fingerData) => {
            log("pinchStatus from callback");
        },
        fingers: $.fn.swipe.fingers.ALL,
    });
    // Now assign the event handlers as well
    const events = [
        "tap",
        "hold",
        "swipe",
        "swipeLeft",
        "swipeRight",
        "swipeUp",
        "swipeDown",
        "swipeStatus",
        "pinch",
        "pinchIn",
        "pinchOut",
        "pinchStatus",
    ];
    function registerEvents() {
        for (const i in events) {
            $("#test").on(events[i], logEvent);
        }
        $("#register_btn").text("Remove Events").removeClass("btn-success").addClass("btn-danger");
    }
    function deRegisterEvents() {
        for (const i in events) {
            $("#test").off(events[i], logEvent);
        }
        $("#register_btn").text("Register Events").removeClass("btn-danger").addClass("btn-success");
    }
    function logEvent(event: JQuery.TriggeredEvent) {
        log(`<b>${event.type} from event handler</b>`);
    }
    function log(msg: string) {
        $("#test").html(`${msg}<br />${$("#test").html()}`);
    }
    registerEvents();
});

// Tutorial: Hold
$(() => {
    // Enable swiping...
    $("#test").swipe({
        hold: (event, target) => {
            $("#textText").html("You held the tap until the longTapThreshold was reached");
        },

        threshold: 50,
    });
});

// Tutorial: Options
$(() => {
    // Re set any options with a new options hash
    $("#setMultiple").on("click", () => {
        $("#test").swipe({ threshold: 0, fingers: 2 });
        alert(`Options are now \n${JSON.stringify($("#test").swipe("option"))}`);
    });
    // Get the options hash
    $("#getAll").on("click", () => {
        alert(JSON.stringify($("#test").swipe("option")));
    });
    // Legacy set options with the 'option' method
    $("#setThreshold").on("change", function() {
        $("#test").swipe("option", "threshold", Number.parseInt(String($(this).val())));
    });
    $("#getThreshold").on("click", () => {
        alert($("#test").swipe("option", "threshold"));
    });
    $("#test").swipe({
        threshold: 200,
        swipe: function(event, direction, distance, duration, fingerCount) {
            this.text(`You swiped ${distance}px`);
        },
    });
});

// Tutorial: Page scrolling
$(() => {
    $("#test1").swipe({ fingers: "all", swipeLeft: swipe1, swipeRight: swipe1, allowPageScroll: "auto" });
    $("#test2").swipe({ swipeLeft: swipe1, allowPageScroll: "none" });
    $("#test3").swipe({ swipeLeft: swipe1, swipeRight: swipe1 });
    $("#test4").swipe({ swipeStatus: swipe2, allowPageScroll: "vertical" });
    $("#test5").swipe({ swipeStatus: swipe2, allowPageScroll: "horizontal" });
    $("#test6").swipe({ pinchStatus: pinch, allowPageScroll: "vertical" });
    // Swipe handlers.
    function swipe1(
        this: JQuery,
        event: JQuery.TriggeredEvent,
        direction: JQueryTouchSwipe.Direction,
        distance: number,
        duration: number,
        fingerCount: JQueryTouchSwipe.Finger,
    ) {
        $(this).text(`You have swiped ${direction} with ${fingerCount} fingers`);
    }
    function swipe2(
        this: JQuery,
        event: JQuery.TriggeredEvent,
        phase: JQueryTouchSwipe.Phase,
        direction: JQueryTouchSwipe.Direction | null,
        distance: number,
    ) {
        $(this).text(`${phase} you have swiped ${distance}px in direction:${direction}`);
    }
    function pinch(
        this: JQuery,
        event: JQuery.TriggeredEvent,
        phase: JQueryTouchSwipe.Phase,
        direction: JQueryTouchSwipe.Direction | null,
        distance: number,
    ) {
        $(this).text(`${phase} you have pinched ${distance}px in direction:${direction}`);
    }
});

// Tutorial: Page zoom
$(() => {
    $("#test").swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            $(this).text(`You swiped ${direction}`);
        },
        fingers: 1,
        threshold: 0,
    });
});

// Tutorial: Pinch
$(() => {
    $("#test").swipe({
        pinchIn: function(event, direction, distance, duration, fingerCount, pinchZoom) {
            $(this).text(`You pinched ${direction} by ${distance}px, zoom scale is ${pinchZoom}`);
        },
        pinchOut: function(event, direction, distance, duration, fingerCount, pinchZoom) {
            $(this).text(`You pinched ${direction} by ${distance}px, zoom scale is ${pinchZoom}`);
        },
        pinchStatus: function(event, phase, direction, distance, duration, fingerCount, pinchZoom) {
            $(this).html(
                `Pinch zoom scale ${pinchZoom}  <br/>Distance pinched ${distance} <br/>Direction ${direction}`,
            );
        },
        fingers: 2,
        pinchThreshold: 0,
    });
});

// Tutorial: Pinch and Swipe
$(() => {
    $("#test").swipe({
        swipeStatus: function(event, phase, direction, distance, duration, fingerCount) {
            $(this).find("#swipe_text").text(`swiped ${distance} px`);
            if (phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) {
                // The handlers below fire after the status,
                // so we can change the text here, and it will be replaced if the handlers below fire
                $(this).find("#swipe_text").text("No swipe was made");
            }
        },
        pinchStatus: function(event, phase, direction, distance, duration, fingerCount, pinchZoom) {
            $(this).find("#pinch_text").text(`pinched ${distance} px `);
            if (phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL) {
                // The handlers below fire after the status,
                // so we can change the text here, and it will be replaced if the handlers below fire
                $(this).find("#pinch_text").text("No pinch was made");
            }
        },
        swipe: function(event, direction, distance, duration, fingerCount) {
            $(this).find("#swipe_text").text(`You swiped ${direction} with ${fingerCount} fingers`);
        },
        pinchIn: function(event, direction, distance, duration, fingerCount, pinchZoom) {
            $(this).find("#pinch_text").text(`You pinched ${direction} by ${distance}px, zoom scale is ${pinchZoom}`);
        },
        pinchOut: function(event, direction, distance, duration, fingerCount, pinchZoom) {
            $(this).find("#pinch_text").text(`You pinched ${direction} by ${distance}px, zoom scale is ${pinchZoom}`);
        },
        fingers: $.fn.swipe.fingers.ALL,
    });
});

// Tutorial: Pinch status
$(() => {
    $("#test").swipe({
        pinchStatus: function(event, phase, direction, distance, duration, fingerCount, pinchZoom, fingerData) {
            $(this).html(`Pinch zoom ${pinchZoom}  <br/>Distance pinched ${distance} <br/>Direction ${direction}`);
        },
        fingers: 2,
        threshold: 0,
        preventDefaultEvents: false,
    });
});

// Tutorial: Single swipe
$(() => {
    // Keep track of how many swipes
    let count = 0;
    // Enable swiping...
    $("#test").swipe({
        // Single swipe handler for left swipes
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            $(this).text(`You swiped ${direction} ${++count} times `);
        },
        // Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0,
    });
});

// Tutorial: Stop_propagation
$(() => {
    // Enable swiping...
    $("#test").swipe({
        swipeStatus: function(event, phase, direction, distance, fingerCount) {
            let str = "";
            switch (phase) {
                case "start":
                    str = "Started";
                    break;
                case "move":
                    str = `You have moved ${distance} pixels, past 200 and the handler will fire`;
                    break;
                case "end":
                    str = `Handler fired, you swiped ${direction}`;
                    break;
                case "cancel":
                    str = "cancel handler fired";
                    break;
            }

            $(this).text(str);
            // This will cancel the current swipe and immediately re run this handler with a cancel event
            return false;
        },
    });
});

// Tutorial: Swipe status
$(() => {
    // Enable swiping...
    $("#test").swipe({
        swipeStatus: (event, phase, direction, distance, duration, fingers, fingerData, currentDirection) => {
            let str = `<h4>Swipe Phase : ${phase}<br/>`;
            str += `Current direction: ${currentDirection}<br/>`;
            str += `Direction from initial touch: ${direction}<br/>`;
            str += `Distance from initial touch: ${distance}<br/>`;
            str += `Duration of swipe: ${duration}<br/>`;
            str += `Fingers used: ${fingers}<br/></h4>`;
            // Here we can check the:
            // phase : 'start', 'move', 'end', 'cancel'
            // direction : 'left', 'right', 'up', 'down'
            // distance : Distance finger is from initial touch point in px
            // duration : Length of swipe in MS
            // fingerCount : the number of fingers used
            if (phase !== "cancel" && phase !== "end") {
                if (duration < 5000) {
                    str +=
                        "Under maxTimeThreshold.<h3>Swipe handler will be triggered if you release at this point.</h3>";
                } else {
                    str +=
                        "Over maxTimeThreshold. <h3>Swipe handler will be canceled if you release at this point.</h3>";
                }
                if (distance < 200) {
                    str += "Not yet reached threshold.  <h3>Swipe will be canceled if you release at this point.</h3>";
                } else {
                    str += "Threshold reached <h3>Swipe handler will be triggered if you release at this point.</h3>";
                }
            }
            if (phase === "cancel") {
                str += "<br/>Handler not triggered. <br/> One or both of the thresholds was not met ";
            }
            if (phase === "end") {
                str += "<br/>Handler was triggered.";
            }
            $("#test").html(str);
        },
        threshold: 200,
        maxTimeThreshold: 5000,
        fingers: "all",
    });
});

// Tutorial: Tap vs swipe
$(() => {
    let tapCount = 0;
    let doubleTapCount = 0;
    let longTapCount = 0;
    let swipeCount = 0;
    let blackCount = 0;
    // Enable swiping...
    $("#test").swipe({
        tap: (event, target) => {
            tapCount++;
            msg(target);
        },
        doubleTap: (event, target) => {
            doubleTapCount++;
            msg(target);
            return true;
        },
        longTap: (event, target) => {
            longTapCount++;
            msg(target);
        },
        swipe: () => {
            swipeCount++;
            $("#textText").html(`You swiped ${swipeCount} times`);
        },
        excludedElements: "",
        threshold: 50,
    });
    $("#test_btn").on("click", () => {
        window.open("http://www.google.com");
    });
    // Assign a click handler to a child of the touchSwipe object
    // This will require the jquery.ui.ipad.js to be picked up correctly.
    $("#another_div").on("click", () => {
        blackCount++;
        $("#another_div").html(
            `<h3 id='div text'>jQuery click handler fired on the black div : you clicked the black div ${blackCount} times</h3>`,
        );
    });
    function msg(target: HTMLElement) {
        $("#textText").html(
            `You tapped ${tapCount}, double tapped ${doubleTapCount} and long tapped ${longTapCount} times on ${
                $(target).attr("id")
            }`,
        );
    }
});

// Tutorial: Thresholds
$(() => {
    $("#test").swipe({
        swipe: function(event, direction) {
            $(this).text(`You swiped ${direction}`);
        },
        swipeStatus: function(event, phase) {
            if (phase === "cancel") {
                $(this).text("You didn't swipe far enough ");
            }
        },
        threshold: 200,
    });
});

// Tutorial: Trigger handlers
$(() => {
    // Enable swiping...
    $("#test").swipe({
        swipeStatus: function(event, phase, direction, distance) {
            let str = "";
            if (phase === "move") {
                str = `You have moved ${distance} pixels, past 200 and the handler will fire`;
            }
            if (phase === "end") {
                str = `Handler fired, you swiped ${direction}`;
            }
            $(this).text(str);
        },
        triggerOnTouchEnd: false,
        threshold: 200,
    });
});
