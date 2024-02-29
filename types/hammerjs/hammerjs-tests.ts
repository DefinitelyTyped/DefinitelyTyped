// Tests based on examples at http://hammerjs.github.io/examples/

(() => {
    var myElement = document.getElementById("myElement");

    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    // listen to events...
    mc.on("panleft panright tap press", function(ev) {
        console.log(ev.maxPointers - 2);
        console.log(Math.floor(ev.overallVelocity));
        console.log(ev.timeStamp + Date.now());
    });
})();

(() => {
    var myElement = document.getElementById("myElement");

    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    // listen to events...
    mc.on("panleft panright tap press", function(ev) {
        myElement.textContent = ev.type + " gesture detected.";
    });
})();

(() => {
    var myElement = document.getElementById("myElement");

    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    // let the pan gesture support all directions.
    // this will block the vertical scrolling on a touch-device while on the element
    mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });

    // listen to events...
    mc.on("panleft panright panup pandown tap press", function(ev: HammerInput) {
        type EventType =
            | HammerStatic["INPUT_START"]
            | HammerStatic["INPUT_MOVE"]
            | HammerStatic["INPUT_END"]
            | HammerStatic["INPUT_CANCEL"];
        const eventType: EventType = ev.eventType;
        myElement.textContent = ev.type + " gesture detected.";
    });
})();

(() => {
    var myElement = document.getElementById("myElement");

    var mc = new Hammer.Manager(myElement);

    // create a pinch and rotate recognizer
    // these require 2 pointers
    var pinch = new Hammer.Pinch();
    var rotate = new Hammer.Rotate();

    // we want to detect both the same time
    pinch.recognizeWith(rotate);

    // add to the Manager
    mc.add([pinch, rotate]);

    mc.on("pinch rotate", function(ev: HammerInput) {
        myElement.textContent += ev.type + " ";
    });
})();

(() => {
    var myElement = document.getElementById("myElement");

    // We create a manager object, which is the same as Hammer(), but without the presetted recognizers.
    var mc = new Hammer.Manager(myElement);

    // Default, tap recognizer
    mc.add(new Hammer.Tap());

    // Tap recognizer with minimal 4 taps
    mc.add(new Hammer.Tap({ event: "quadrupletap", taps: 4 }));

    // we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
    // the tap event will be emitted on every tap
    mc.get("quadrupletap").recognizeWith("tap");

    mc.on("tap quadrupletap", function(ev) {
        myElement.textContent += ev.type + " ";
    });
})();

(() => {
    var myElement = document.getElementById("myElement");

    // We create a manager object, which is the same as Hammer(), but without the presetted recognizers.
    var mc = new Hammer.Manager(myElement);

    // Tap recognizer with minimal 2 taps
    mc.add(new Hammer.Tap({ event: "doubletap", taps: 2 }));
    // Single tap recognizer
    mc.add(new Hammer.Tap({ event: "singletap" }));

    // we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
    mc.get("doubletap").recognizeWith("singletap");
    // we only want to trigger a tap, when we don't have detected a doubletap
    mc.get("singletap").requireFailure("doubletap");

    mc.on("singletap doubletap", function(ev) {
        myElement.textContent += ev.type + " ";
    });
})();

(() => {
    var myElement = document.getElementById("myElement");

    // We create a manager object using custom options
    var options: HammerOptions = {
        recognizers: [
            [Hammer.Tap, { event: "doubletap", taps: 2 }],
            [Hammer.Tap, { event: "singletap" }],
        ],
        inputClass: Hammer.TouchInput,
    };
    var mc = new Hammer.Manager(myElement, options);

    // we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
    mc.get("doubletap").recognizeWith("singletap");
    // we only want to trigger a tap, when we don't have detected a doubletap
    mc.get("singletap").requireFailure("doubletap");

    mc.on("singletap doubletap", function(ev) {
        myElement.textContent += ev.type + " ";
    });
})();

(() => {
    var input = {
        [Hammer.STATE_POSSIBLE]: 1 as 1,
        [Hammer.STATE_BEGAN]: 2 as 2,
        [Hammer.STATE_CHANGED]: 4 as 4,
        [Hammer.STATE_ENDED]: 8 as 8,
        [Hammer.STATE_CANCELLED]: 16 as 16,
        [Hammer.STATE_FAILED]: 32 as 32,
    };
    input[Hammer.STATE_RECOGNIZED] = Hammer.STATE_ENDED as typeof Hammer.STATE_ENDED;

    var direction = {
        [Hammer.INPUT_START]: 1 as 1,
        [Hammer.INPUT_MOVE]: 2 as 2,
        [Hammer.INPUT_END]: 4 as 4,
        [Hammer.INPUT_CANCEL]: 8 as 8,
    };

    var state = {
        [Hammer.DIRECTION_NONE]: 1 as 1,
        [Hammer.DIRECTION_LEFT]: 2 as 2,
        [Hammer.DIRECTION_RIGHT]: 4 as 4,
        [Hammer.DIRECTION_UP]: 8 as 8,
        [Hammer.DIRECTION_DOWN]: 16 as 16,
        [Hammer.DIRECTION_HORIZONTAL]: (Hammer.DIRECTION_LEFT | Hammer.DIRECTION_RIGHT) as 6, // TS infers this as a number, so we have to cast it ourselves
        [Hammer.DIRECTION_VERTICAL]: (Hammer.DIRECTION_UP | Hammer.DIRECTION_DOWN) as 24, // bits aren't overlapping, so binary or is equal to addition
        [Hammer.DIRECTION_ALL]: (Hammer.DIRECTION_HORIZONTAL | Hammer.DIRECTION_VERTICAL) as 30,
    };

    type KeysSameAsValues<T extends { [K in keyof T]: K }> = true; // typecheck: if all keys are equal to their value
    type HammerInputLiteralsCheck = KeysSameAsValues<typeof input>;
    type HammerDirectionLiteralsCheck = KeysSameAsValues<typeof direction>;
    type HammerStateLiteralsCheck = KeysSameAsValues<typeof state>;
})();
