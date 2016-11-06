

function basics_arguments() {
	var $el: JQuery;
	$el.velocity({
		top: 10,
		left: 10
	}, {
		/* Velocity's default options: */
		duration: 400,
		easing: "swing",
		queue: "",
		begin: null,
		progress: null,
		complete: null,
		loop: false,
		delay: false,
		display: false,
		mobileHA: true
	});

	$el.velocity({ top: 50 }, 1000);
	$el.velocity({ top: 50 }, 1000, "swing");
	$el.velocity({ top: 50 }, "swing");
	$el.velocity({ top: 50 }, 1000, function() { alert("Hi"); });
	$.Velocity.mock = 1;

	$el.velocity({
		properties: { opacity: 1 },
		options: { duration: 500 }
	});
}

function basics_values() {
	var $el: JQuery;
	$el.velocity({
		top: 50, // Defaults to the px unit type
		left: "50%",
		width: "+=5rem", // Add 5rem to the current rem value
		height: "*=2" // Double the current height
	});
}

function options_duration() {
	var $el: JQuery;
	$el.velocity({ opacity: 1 }, { duration: 1000 });
	$el.velocity({ opacity: 1 }, { duration: "slow" });
}

function options_easing() {
	var $el: JQuery;
	/* Use one of the jQuery UI easings. */
	$el.velocity({ width: 50 }, "easeInSine");
	/* Use a custom bezier curve. */
	$el.velocity({ width: 50 }, [ 0.17, 0.67, 0.83, 0.67 ]);
	/* Use spring physics. */
	$el.velocity({ width: 50 }, [ 250, 15 ]);

	$el.velocity({
		borderBottomWidth: [ "2px", "spring" ], // Uses "spring"
		width: [ "100px", [ 250, 15 ] ], // Uses custom spring physics
		height: "100px" // Defaults to easeInSine
	}, {
		easing: "easeInSine" // The call's default easing
	});
}

function options_queue() {
	var $el: JQuery;
	/* Trigger the first animation: Animate width. */
	$el.velocity({ width: "500px" }, { duration: 10000 });
	/* Trigger the second animation: Animate height. */
	setTimeout(function() {
		/* Will run in parallel starting at the 5000ms mark. */
		$el.velocity({ height: "500px" }, { queue: false });
	}, 5000);
}

function options_complete() {
	var $el: JQuery;
	$el.velocity({
		opacity: 0
	}, {
		/* Logs all the animated divs. */
		complete: function(elements) { console.log(elements); }
	});
}

function options_begin() {
	var $el: JQuery;
	$el.velocity({
		opacity: 0
	}, {
		/* Logs all the animated divs. */
		begin: function(elements) { console.log(elements); }
	});
}

function options_progress() {
	var $el: JQuery;
	var $percentComplete: JQuery;
	var $timeRemaining: JQuery;
	$el.velocity({
		opacity: 0
	}, {
		progress: function(elements, percentComplete, timeRemaining, timeStart, tweenValue) {
			$percentComplete.html((percentComplete * 100) + "%");
			$timeRemaining.html(timeRemaining + "ms remaining!");
		}
	});
}

function options_mobileHA() {
	var $el: JQuery;
	$el.velocity({ height: "10em" }, { mobileHA: false });
}

function options_loop() {
	var $el: JQuery;
	$el.velocity({ height: "10em" }, { loop: 2 });
}

function options_delay() {
	var $el: JQuery;
	$el.velocity({
		height: "+=10em"
	}, {
		loop: 4,
		/* Wait 100ms before alternating. */
		delay: 100
	});
}

function options_display() {
	var $el: JQuery;
	/* Animate down to zero then set display to "none". */
	$el.velocity({ opacity: 0 }, { display: "none" });
	/* Set display to "block" then animate from opacity:0. */
	$el.velocity({ opacity: 1 }, { display: "block" });
}

function command_scroll() {
	var $el: JQuery;
	$el
		.velocity("scroll", { duration: 1500, easing: "spring" })
		.velocity({ opacity: 1 });

	/* Scroll container to the top of the targeted div. */
	$el.velocity("scroll", { container: $("#container") });

	/* Scroll the browser to the LEFT edge of the targeted div. */
	$el.velocity("scroll", { axis: "x" });

	/* Scroll to a position 50 pixels above the div. */
	$el
		.velocity("scroll", { duration: 750, offset: -50 })
		/* Then scroll to a position 250 pixels beyond the div. */
		.velocity("scroll", { duration: 750, offset: 250 });
}

function command_stop() {
	var $el: JQuery;
	$el.velocity("stop");
}

function command_reverse() {
	var $el: JQuery;
	$el.velocity("reverse");
	$el.velocity("reverse", { duration: 2000 });
}

function command_fadeIn_fadeOut() {
	var $el: JQuery;
	$el
		.velocity("fadeIn", { duration: 1500 })
		.velocity("fadeOut", { delay: 500, duration: 1500 });
}

function command_slideDown_slideUp() {
	var $el: JQuery;
	$el
		.velocity("slideDown", { duration: 1500 })
		.velocity("slideUp", { delay: 500, duration: 1500 });
}

function feature_transforms() {
	var $el: JQuery;
	/* Translate to the right and rotate clockwise. */
	$el.velocity({
		translateX: "200px",
		rotateZ: "45deg"
	});

	/* Translate to the right and rotate clockwise. */
	$el.velocity({
		translateZ: 0, // Force HA by animating a 3D property
		translateX: "200px",
		rotateZ: "45deg"
	});
}

function feature_hooks() {
	var $el: JQuery;
	$el.velocity({ textShadowBlur: "10px" });
}

function feature_colors() {
	var $el: JQuery;
	$el.velocity({
		/* Animate red to 50% (0.5 * 255). */
		colorRed: "50%",
		/* Concurrently animate to a richer blue. */
		colorBlue: "+=50",
		/* Fade the text down to 85% opacity. */
		colorAlpha: 0.85
	});
}

function feature_sequences() {
	var $el: JQuery;
	$.Velocity.Sequences.hover = function (element: HTMLElement, options: {duration?: number}) {
		var duration = options.duration || 750;
		$.Velocity.animate(element,
			{
				translateY: "-=10px",
			}, {
				/* Delay is relative to user-adjustable duration. */
				delay: duration * 0.033,
				duration: duration,
				loop: 3,
				easing: "easeInOutSine"
			});
	};

	/* Later on in your code, trigger the sequence: */
	/* Note: As normal, you may optionally pass in options. */
	$el.velocity("hover", { duration: 450 });

	$.Velocity.Sequences.hover = function (element: HTMLElement, options: {duration?: number}) {
		var duration = options.duration || 750;
		/* Pre-construct animation maps before chaining. */
		var calls = [
			{
				properties: { translateY: "-10px" },
				options: {
					delay: duration * 0.033,
					duration: duration,
					loop: 3,
					easing: "easeInOutSine"
				}
			}
		];
		/* Iteratively chain the calls. */
		$.each(calls, function(i, call) {
			$.Velocity.animate(
				element,
				call.properties,
				call.options
			);
		});
	};
}

function advanced_value_functions() {
	var $el: JQuery;
	$el.velocity({
		opacity: function() { return Math.random() }
	});
	$el.velocity({
		translateX: function(i: number, total: number) {
			/* Generate translateX's end value. */
			return (i * 10) + "px";
		}
	});
}

function advanced_forcefeeding() {
	var $el: JQuery;
	$el.velocity({
		translateX: [ 500, 0 ],
		opacity: [ 0, "easeInSine", 1 ]
	});
	$el
		.velocity({ translateX: [ 500, 0 ] })
		.velocity({ translateX: 1000 });
}

function advanced_utility_function () {
	var divs = document.getElementsByTagName("div");
	$.Velocity.animate(divs, { opacity: 0 }, { duration: 1500 });
	$.Velocity.animate({
		elements: divs,
		properties: { opacity: 0 },
		options: { duration: 1500 }
	});
}

function ui_pack_sequence_running() {
	var $element1: JQuery;
	var $element2: JQuery;
	var $element3: JQuery;

	$element1.velocity({ translateX: 100 }, 1000, function() {
		$element2.velocity({ translateX: 200 }, 1000, function() {
			$element3.velocity({ translateX: 300 }, 1000);
		});
	});

	var mySequence = [
		{ e: $element1, p: { translateX: 100 }, o: { duration: 1000 } },
		{ e: $element2, p: { translateX: 200 }, o: { duration: 1000 } },
		{ e: $element3, p: { translateX: 300 }, o: { duration: 1000 } }
	];
	$.Velocity.RunSequence(mySequence);

	var mySequence2 = [
		{ e: $element1, p: { translateX: 100 }, o: { duration: 1000 } },
		/* The call below will run at the same time as the first call. */
		{ e: $element2, p: { translateX: 200 }, o: { duration: 1000, sequenceQueue: false } },
		/* As normal, the call below will run once the second call is complete. */
		{ e: $element3, p: { translateX: 300 }, o: { duration: 1000 } }
	];
	$.Velocity.RunSequence(mySequence2);
}

function ui_pack_registration() {
	var $element: JQuery;

	$.Velocity.RegisterEffect("callout.pulse", {
		defaultDuration: 900,
		calls: [
			[ { scaleX: 1.1 }, 0.50 ],
			[ { scaleX: 1 }, 0.50 ]
		]
	});
	$element.velocity("callout.pulse");

	$.Velocity
		.RegisterEffect("transition.flipXIn", {
			defaultDuration: 700,
			calls: [
				[ { opacity: 1, rotateY: [ 0, -55 ] } ]
			]
		})
		.RegisterEffect("transition.flipXOut", {
			defaultDuration: 700,
			calls: [
				[ { opacity: 0, rotateY: 55 } ]
			],
			reset: { rotateY: 0 }
		});
	$element
		.velocity("transition.flipXIn")
		.velocity("transition.flipXOut", { delay: 1000 });
}
