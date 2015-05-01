/// <reference path="qtip2.d.ts" />

var $a = $('_');


/**
 * Test core properties (http://qtip2.com/options#core)
 */
function testCoreProperties() {
	// Test with all core options specififed
	$a.qtip({
		content: 'Jan Jansen',
		id: 'jan-jansen',
		prerender: true,
		overwrite: true,
		suppress: true,
		metadata: {
			type: 'html5',
			name: 'qtipopts'
		}
	});

	// Test ID as boolean
	$a.qtip({
		content: 'yoshimo',
		id: false
	});

	// Test with no options specified
	$a.qtip({
		content: 'aerie'
	});
}


/**
 * http://qtip2.com/options#content.text
 */
function testContentText() {
	// Shorthand string
	$a.qtip({
		content: 'valygar'
	});

	// Regular string
	$a.qtip({
		content: { text: 'kivan' }
	});

	// Shorthand boolean
	$a.qtip({
		content: true
	});

	// Regular boolean
	$a.qtip({
		content: { text: true }
	});

	// Shorthand Deferred / Promise
	$a.qtip({
		content: $.Deferred().resolve('cernd')
	});

	$a.qtip({
		content: $.Deferred().reject().promise()
	});

	// Regular Deferred / Promise
	$a.qtip({
		content: { text: $.Deferred().resolve('horatio') }
	});

	$a.qtip({
		content: { text: $.Deferred().reject().promise() }
	});

	// Shorthand function
	$a.qtip({
		content: function(event, api) {	}
	});

	$a.qtip({
		content: function(event) { return 2; }
	});

	$a.qtip({
		content: function() { }
	});

	// Regular function
	$a.qtip({
		content: { text: function(event, api) {	} }
	});

	$a.qtip({
		content: { text: function(event) { return 2; } }
	});

	$a.qtip({
		content: { text: function() { } }
	});

	// Shorthand jQuery elements
	$a.qtip({
		content: $('.irenicus')
	});

	// Regular jQuery elements
	$a.qtip({
		content: { text: $('.irenicus') }
	});
}


/**
 * http://qtip2.com/options#content.title
 */
function testContentTitle() {
	// Shorthand string
	$a.qtip({
		content: { title: 'keldorn' }
	});

	// Regular string
	$a.qtip({
		content: {
			title: { text: 'nalia' }
		}
	});

	// Shorthand boolean
	$a.qtip({
		content: { title: true }
	});

	// Regular boolean
	$a.qtip({
		content: {
			title: { text: true }
		}
	});

	// Shorthand Deferred / Promise
	$a.qtip({
		content: { title: $.Deferred().resolve('mazzy') }
	});

	$a.qtip({
		content: { title: $.Deferred().reject().promise() }
	});

	// Regular Deferred / Promise
	$a.qtip({
		content: { title: { text: $.Deferred().resolve('bodhi') } }
	});

	$a.qtip({
		content: { title: { text: $.Deferred().reject().promise() } }
	});

	// Shorthand function
	$a.qtip({
		content: { title: function(event, api) {} }
	});

	$a.qtip({
		content: { title: function(event) { return 2; } }
	});

	$a.qtip({
		content: { title: function() { } }
	});

	// Regular function
	$a.qtip({
		content: { title: { text: function(event, api) { } } }
	});

	$a.qtip({
		content: { title: { text: function(event) { return 2; } } }
	});

	$a.qtip({
		content: { title: { text: function() { } } }
	});

	// Shorthand jQuery elements
	$a.qtip({
		content: { title: $('.irenicus') }
	});

	// Regular jQuery elements
	$a.qtip({
		content: { title: { text: $('.irenicus') } }
	});
}


/**
 * http://qtip2.com/options#content.button
 */
function testContentButtonProperty() {
	$a.qtip({
		content: { button: $('.minsc') }
	});

	$a.qtip({
		content: { button: 'jaheira' }
	});

	$a.qtip({
		content: { button: true }
	});
}


/**
 * http://qtip2.com/options#content.attr
 */
function testContentAttrProperty() {
	$a.qtip({
		content: { attr: 'viconia' }
	});
}


/**
 * http://qtip2.com/options#position
 */
function testPositionProperty() {
	// Shorthand
	$a.qtip({ position: 'top left' });

	// The below four calls test all combinations of all sub-properties
	$a.qtip({
		position: {
			target: $('.khalid'),
			my: 'top left',
			at: 'bottom right',
			container: $('.edwin-odesseiron'),
			viewport: $('.dynaheir'),
			effect: function(api, pos, viewport) { },
			adjust: { x: 2 }
		}
	});

	$a.qtip({
		position: {
			target: [2, 2],
			my: true,
			at: true,
			container: false,
			viewport: true,
			effect: function(api, pos) { return 2; },
			adjust: { y: 2 }
		}
	});

	$a.qtip({
		position: {
			target: 'mouse',
			effect: function(api) {},
			adjust: { x: 2, y: 2 }
		}
	});

	$a.qtip({
		position: {
			target: false,
			effect: function() {},
			adjust: {
				mouse: true,
				resize: true,
				scroll: false,
				method: 'flipinvert'
			}
		}
	});

	$a.qtip({
		position: {
			adjust: { }
		}
	});
}


/**
 * http://qtip2.com/options#show
 */
function testShowProperty() {
	// Shorthand
	$a.qtip({ show: true });
	$a.qtip({ show: 'mouseenter' });
	$a.qtip({ show: $('.korgan') });

	// The below calls test all combinations of all sub-properties
	$a.qtip({
		show: {
			target: $('.gorion'),
			event: false,
			delay: 42,
			solo: $('.imoen'),
			ready: true,
			effect: function(offset) {
			},
			modal: true
		}
	});

	$a.qtip({
		show: {
			target: false,
			event: 'mouseenter',
			solo: '.qtips',
			effect: true,
			modal: {
				on: true,
				blur: false,
				escape: true,
				stealfocus: true,
				effect: true
			}
		}
	});

	$a.qtip({
		show: {
			solo: false,
			modal: {
				effect: function(state) {}
			}
		}
	});

	$a.qtip({
		show: {
			modal: {}
		}
	});
}


/**
 * http://qtip2.com/options#hide
 */
function testHideProperty() {
	// Shorthand
	$a.qtip({ hide: 'mouseenter' });
	$a.qtip({ hide: $('.montaron') });

	// The below calls test all combinations of all sub-properties
	$a.qtip({
		hide: {
			target: $('.gorion'),
			event: false,
			delay: 42,
			inactive: 64,
			fixed: true,
			leave: 'window',
			distance: 32,
			effect: function(offset) {
			},
		}
	});

	$a.qtip({
		hide: {
			target: false,
			event: 'mouseenter',
			inactive: false,
			leave: false,
			distance: false,
			effect: true,
		}
	});
}


/**
 * http://qtip2.com/options#style
 */
function testStyleProperty() {
	// Shorthand
	$a.qtip({ style: 'kagain' });

	// The below calls test all combinations of all sub-properties
	$a.qtip({
		style: {
			classes: 'anomen',
			def: true,
			widget: true,
			width: '24pt',
			height: '24pt',
			tip: 'top left'
		}
	});

	$a.qtip({
		show: {
			classes: false,
			width: 24,
			height: 24,
			tip: false
		}
	});

	$a.qtip({
		show: {
			classes: false,
			width: false,
			height: false,
			tip: {
				corner: 'bottom right',
				mimic: 'bottom right',
				border: 3,
				width: 27,
				height: 32,
				offset: 1
			}
		}
	});

	$a.qtip({
		show: {
			tip: {
				corner: true,
				mimic: true,
				border: false
			}
		}
	});

	$a.qtip({
		show: {
			tip: { }
		}
	});
}


function baseCase() {
	$a.qtip();
	$a.qtip({});

	$a.qtip('horatio');
	$a.qtip('activate');
	$a.qtip('deactivate');
}


/**
 * Test with all options specified. Copied from http://qtip2.com/options#global and amended.
 */
function allTogetherNow() {
	$a.qtip({
		prerender: false,
		id: false,
		overwrite: true,
		suppress: true,
		content: {
			title: true,
			attr: 'title',
			text: false,
			button: false
		},
		position: {
			my: 'top left',
			at: 'bottom right',
			target: false,
			container: false,
			viewport: false,
			adjust: {
				x: 0, y: 0,
				mouse: true,
				resize: true,
				method: 'flip flip'
			},
			effect: function(api, pos, viewport) {
				$(this).animate(pos, {
					duration: 200,
					queue: false
				});
			}
		},
		show: {
			target: false,
			event: 'mouseenter',
			effect: true,
			delay: 90,
			solo: false,
			ready: false,
			modal: {
				on: false,
				effect: true,
				blur: true,
				escape: true
			}
		},
		hide: {
			target: false,
			event: 'mouseleave',
			effect: true,
			delay: 0,
			fixed: false,
			inactive: false,
			leave: 'window',
			distance: false
		},
		style: {
			classes: '',
			widget: false,
			width: false,
			height: false,
			tip: {
				corner: true,
				mimic: false,
				width: 8,
				height: 8,
				border: true,
				offset: 0
			}
		},
		events: {
			render: null,
			move: null,
			show: null,
			hide: null,
			toggle: null,
			visible: null,
			hidden: null,
			focus: null,
			blur: null
		}
	});
}