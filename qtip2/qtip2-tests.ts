

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
		content: function(event: Event, api: QTip2.Api) {	}
	});

	$a.qtip({
		content: function(event: Event) { return 2; }
	});

	$a.qtip({
		content: function() { }
	});

	// Regular function
	$a.qtip({
		content: { text: function(event: Event, api: QTip2.Api) {} }
	});

	$a.qtip({
		content: { text: function(event: Event) { return 2; } }
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
		content: { title: function(event: Event, api: QTip2.Api) {} }
	});

	$a.qtip({
		content: { title: function(event: Event) { return 2; } }
	});

	$a.qtip({
		content: { title: function() { } }
	});

	// Regular function
	$a.qtip({
		content: { title: { text: function(event: Event, api: QTip2.Api) { } } }
	});

	$a.qtip({
		content: { title: { text: function(event: Event) { return 2; } } }
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
			effect: function(api: QTip2.Api, pos: any, viewport: any) { },
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
			effect: function(api: QTip2.Api, pos: any) { return 2; },
			adjust: { y: 2 }
		}
	});

	$a.qtip({
		position: {
			target: 'mouse',
			effect: function(api: QTip2.Api) {},
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
		style: {
			classes: false,
			width: 24,
			height: 24,
			tip: false
		}
	});

	$a.qtip({
		style: {
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
		style: {
			tip: {
				corner: true,
				mimic: true,
				border: false
			}
		}
	});

	$a.qtip({
		style: {
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


/**
 * http://qtip2.com/api#api-methods.get
 */
function testApiGetViaObject() {
	$a.qtip({});

	var api = $a.qtip('api');

	<string | boolean> api.get('id');
	<boolean> api.get('prerender');
	<boolean> api.get('overwrite');
	<boolean> api.get('suppress');
	<any> api.get('metadata');

	<QTip2.Content> api.get('content');
	<QTip2.Text> api.get('content.text');
	<string> api.get('content.attr');
	<QTip2.Title> api.get('content.title');
	<string | JQuery | boolean> api.get('content.button');

	<QTip2.Position> api.get('position');
	<string | boolean> api.get('position.my');
	<string | boolean> api.get('position.at');
	<QTip2.Target | boolean> api.get('position.target');
	<JQuery | boolean> api.get('position.container');
	<JQuery | boolean> api.get('position.viewport');
	<boolean | ((api: any, pos: any, viewport: any) => any)>
		api.get('position.effect');
	<QTip2.PositionAdjust> api.get('position.adjust');

	<QTip2.Show> api.get('show');
	<JQuery | boolean> api.get('show.target');
	<string | boolean> api.get('show.event');
	<number> api.get('show.delay');
	<JQuery | string | boolean> api.get('show.solo');
	<boolean> api.get('show.ready');
	<boolean | ((offset: any) => any)> api.get('show.effect');
	<boolean | QTip2.Modal> api.get('show.modal');

	<QTip2.Hide> api.get('hide');
	<JQuery | boolean> api.get('hide.target');
	<string | boolean> api.get('hide.event');
	<number> api.get('hide.delay');
	<string | boolean> api.get('hide.leave');
	<number | boolean> api.get('hide.distance');
	<boolean | ((offset: any) => any)> api.get('hide.effect');

	<QTip2.Style> api.get('style');
	<string | boolean> api.get('style.classes');
	<boolean> api.get('style.def');
	<boolean> api.get('style.widget');
	<string | number | boolean> api.get('style.width');
	<string | number | boolean> api.get('style.height');
	<string | boolean | QTip2.Tip> api.get('style.tip');

	<QTip2.Events> api.get('events');
	<QTip2.EventApiFunc> api.get('events.render');
	<QTip2.EventApiFunc> api.get('events.show');
	<QTip2.EventApiFunc> api.get('events.hide');
	<QTip2.EventApiFunc> api.get('events.toggle');
	<QTip2.EventApiFunc> api.get('events.visible');
	<QTip2.EventApiFunc> api.get('events.hidde');
	<QTip2.EventApiFunc> api.get('events.move');
	<QTip2.EventApiFunc> api.get('events.focus');
	<QTip2.EventApiFunc> api.get('events.blur');
}


/**
 * http://qtip2.com/api#api.updating
 */
function testApiGetViaString() {
	$a.qtip({});

	<string | boolean> $a.qtip('option', 'id');
	<boolean> $a.qtip('option', 'prerender');
	<boolean> $a.qtip('option', 'overwrite');
	<boolean> $a.qtip('option', 'suppress');
	<any> $a.qtip('option', 'metadata');

	<QTip2.Content> $a.qtip('option', 'content');
	<QTip2.Text> $a.qtip('option', 'content.text');
	<string> $a.qtip('option', 'content.attr');
	<QTip2.Title> $a.qtip('option', 'content.title');
	<string | JQuery | boolean> $a.qtip('option', 'content.button');

	<QTip2.Position> $a.qtip('option', 'position');
	<string | boolean> $a.qtip('option', 'position.my');
	<string | boolean> $a.qtip('option', 'position.at');
	<QTip2.Target | boolean> $a.qtip('option', 'position.target');
	<JQuery | boolean> $a.qtip('option', 'position.container');
	<JQuery | boolean> $a.qtip('option', 'position.viewport');
	<boolean | ((api: any, pos: any, viewport: any) => any)>
		$a.qtip('option', 'position.effect');
	<QTip2.PositionAdjust> $a.qtip('option', 'position.adjust');

	<QTip2.Show> $a.qtip('option', 'show');
	<JQuery | boolean> $a.qtip('option', 'show.target');
	<string | boolean> $a.qtip('option', 'show.event');
	<number> $a.qtip('option', 'show.delay');
	<JQuery | string | boolean> $a.qtip('option', 'show.solo');
	<boolean> $a.qtip('option', 'show.ready');
	<boolean | ((offset: any) => any)> $a.qtip('option', 'show.effect');
	<boolean | QTip2.Modal> $a.qtip('option', 'show.modal');

	<QTip2.Hide> $a.qtip('option', 'hide');
	<JQuery | boolean> $a.qtip('option', 'hide.target');
	<string | boolean> $a.qtip('option', 'hide.event');
	<number> $a.qtip('option', 'hide.delay');
	<string | boolean> $a.qtip('option', 'hide.leave');
	<number | boolean> $a.qtip('option', 'hide.distance');
	<boolean | ((offset: any) => any)> $a.qtip('option', 'hide.effect');

	<QTip2.Style> $a.qtip('option', 'style');
	<string | boolean> $a.qtip('option', 'style.classes');
	<boolean> $a.qtip('option', 'style.def');
	<boolean> $a.qtip('option', 'style.widget');
	<string | number | boolean> $a.qtip('option', 'style.width');
	<string | number | boolean> $a.qtip('option', 'style.height');
	<string | boolean | QTip2.Tip> $a.qtip('option', 'style.tip');

	<QTip2.Events> $a.qtip('option', 'events');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.render');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.show');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.hide');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.toggle');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.visible');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.hidde');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.move');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.focus');
	<QTip2.EventApiFunc> $a.qtip('option', 'events.blur');
}


/**
 * http://qtip2.com/api#api-methods.set
 */
function testApiSetViaObject() {

	// TODO
	$a.qtip({});

	var api = $a.qtip('api');

	<QTip2.Api> api.set({
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

	<QTip2.Api> api.set('id', <string | boolean> null);
	<QTip2.Api> api.set('prerender', <boolean> null);
	<QTip2.Api> api.set('overwrite', <boolean> null);
	<QTip2.Api> api.set('suppress', <boolean> null);
	<QTip2.Api> api.set('metadata', <any> null);

	<QTip2.Api> api.set('content', <QTip2.Text | QTip2.Content> null);
	<QTip2.Api> api.set('content.title', <QTip2.Title | { text: QTip2.Title }> null);
	<QTip2.Api> api.set('content.text', <QTip2.Text> null);
	<QTip2.Api> api.set('content.attr', <string> null);
	<QTip2.Api> api.set('content.button', <string | JQuery | boolean> null);

	<QTip2.Api> api.set('position', <string | QTip2.Position> null);
	<QTip2.Api> api.set('position.my', <string | boolean> null);
	<QTip2.Api> api.set('position.at', <string | boolean> null);
	<QTip2.Api> api.set('position.target', <QTip2.Target | boolean> null);
	<QTip2.Api> api.set('position.container', <JQuery | boolean> null);
	<QTip2.Api> api.set('position.viewport', <JQuery | boolean> null);
	<QTip2.Api> api.set('position.effect', <boolean | ((api: QTip2.Api, pos: any, viewport: any) => void)> null);
	<QTip2.Api> api.set('position.adjust', <QTip2.PositionAdjust> null);

	<QTip2.Api> api.set('show', <QTip2.Show> null);
	<QTip2.Api> api.set('show.target', <JQuery | boolean> null);
	<QTip2.Api> api.set('show.event', <string | boolean> null);
	<QTip2.Api> api.set('show.delay', <number> null);
	<QTip2.Api> api.set('show.solo', <JQuery | string | boolean> null);
	<QTip2.Api> api.set('show.ready', <boolean> null);
	<QTip2.Api> api.set('show.effect', <boolean | ((offset: any) => void)> null);
	<QTip2.Api> api.set('show.modal', <boolean | QTip2.Modal> null);

	<QTip2.Api> api.set('hide', <QTip2.Hide> null);
	<QTip2.Api> api.set('hide.target', <JQuery | boolean> null);
	<QTip2.Api> api.set('hide.event', <string | boolean> null);
	<QTip2.Api> api.set('hide.inactive', <number | boolean> null);
	<QTip2.Api> api.set('hide.fixed', <boolean> null);
	<QTip2.Api> api.set('hide.leave', <string | boolean> null);
	<QTip2.Api> api.set('hide.distance', <number | boolean> null);
	<QTip2.Api> api.set('hide.effect', <boolean | ((offset: any) => void)> null);

	<QTip2.Api> api.set('style', <QTip2.Style> null);
	<QTip2.Api> api.set('style.classes', <string | boolean> null);
	<QTip2.Api> api.set('style.def', <boolean> null);
	<QTip2.Api> api.set('style.widget', <boolean> null);
	<QTip2.Api> api.set('style.width', <string | number | boolean> null);
	<QTip2.Api> api.set('style.height', <string | number | boolean> null);
	<QTip2.Api> api.set('style.tip', <string | boolean | QTip2.Tip> null);

	<QTip2.Api> api.set('events', <QTip2.Events> null);
	<QTip2.Api> api.set('events.render', <QTip2.EventApiFunc> null);
	<QTip2.Api> api.set('events.show', <QTip2.EventApiFunc> null);
	<QTip2.Api> api.set('events.hide', <QTip2.EventApiFunc> null);
	<QTip2.Api> api.set('events.toggle', <QTip2.EventApiFunc> null);
	<QTip2.Api> api.set('events.visible', <QTip2.EventApiFunc> null);
	<QTip2.Api> api.set('events.hidden', <QTip2.EventApiFunc> null);
	<QTip2.Api> api.set('events.move', <QTip2.EventApiFunc> null);
	<QTip2.Api> api.set('events.focus', <QTip2.EventApiFunc> null);
	<QTip2.Api> api.set('events.blur', <QTip2.EventApiFunc> null);
}


/**
 * http://qtip2.com/api#api.updating
 */
function testApiSetViaString() {
	$a.qtip({});

	<QTip2.Api> $a.qtip('option', {
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
			effect: function(api: QTip2.Api, pos: any, viewport: any) {
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

	<QTip2.Api> $a.qtip('option', 'id', <string | boolean> null);
	<QTip2.Api> $a.qtip('option', 'prerender', <boolean> null);
	<QTip2.Api> $a.qtip('option', 'overwrite', <boolean> null);
	<QTip2.Api> $a.qtip('option', 'suppress', <boolean> null);
	<QTip2.Api> $a.qtip('option', 'metadata', <any> null);

	<QTip2.Api> $a.qtip('option', 'content', <QTip2.Text | QTip2.Content> null);
	<QTip2.Api> $a.qtip('option', 'content.title', <QTip2.Title | { text: QTip2.Title }> null);
	<QTip2.Api> $a.qtip('option', 'content.text', <QTip2.Text> null);
	<QTip2.Api> $a.qtip('option', 'content.attr', <string> null);
	<QTip2.Api> $a.qtip('option', 'content.button', <string | JQuery | boolean> null);

	<QTip2.Api> $a.qtip('option', 'position', <string | QTip2.Position> null);
	<QTip2.Api> $a.qtip('option', 'position.my', <string | boolean> null);
	<QTip2.Api> $a.qtip('option', 'position.at', <string | boolean> null);
	<QTip2.Api> $a.qtip('option', 'position.target', <QTip2.Target | boolean> null);
	<QTip2.Api> $a.qtip('option', 'position.container', <JQuery | boolean> null);
	<QTip2.Api> $a.qtip('option', 'position.viewport', <JQuery | boolean> null);
	<QTip2.Api> $a.qtip('option', 'position.effect', <boolean | ((api: QTip2.Api, pos: any, viewport: any) => void)> null);
	<QTip2.Api> $a.qtip('option', 'position.adjust', <QTip2.PositionAdjust> null);

	<QTip2.Api> $a.qtip('option', 'show', <QTip2.Show> null);
	<QTip2.Api> $a.qtip('option', 'show.target', <JQuery | boolean> null);
	<QTip2.Api> $a.qtip('option', 'show.event', <string | boolean> null);
	<QTip2.Api> $a.qtip('option', 'show.delay', <number> null);
	<QTip2.Api> $a.qtip('option', 'show.solo', <JQuery | string | boolean> null);
	<QTip2.Api> $a.qtip('option', 'show.ready', <boolean> null);
	<QTip2.Api> $a.qtip('option', 'show.effect', <boolean | ((offset: any) => void)> null);
	<QTip2.Api> $a.qtip('option', 'show.modal', <boolean | QTip2.Modal> null);

	<QTip2.Api> $a.qtip('option', 'hide', <QTip2.Hide> null);
	<QTip2.Api> $a.qtip('option', 'hide.target', <JQuery | boolean> null);
	<QTip2.Api> $a.qtip('option', 'hide.event', <string | boolean> null);
	<QTip2.Api> $a.qtip('option', 'hide.inactive', <number | boolean> null);
	<QTip2.Api> $a.qtip('option', 'hide.fixed', <boolean> null);
	<QTip2.Api> $a.qtip('option', 'hide.leave', <string | boolean> null);
	<QTip2.Api> $a.qtip('option', 'hide.distance', <number | boolean> null);
	<QTip2.Api> $a.qtip('option', 'hide.effect', <boolean | ((offset: any) => void)> null);

	<QTip2.Api> $a.qtip('option', 'style', <QTip2.Style> null);
	<QTip2.Api> $a.qtip('option', 'style.classes', <string | boolean> null);
	<QTip2.Api> $a.qtip('option', 'style.def', <boolean> null);
	<QTip2.Api> $a.qtip('option', 'style.widget', <boolean> null);
	<QTip2.Api> $a.qtip('option', 'style.width', <string | number | boolean> null);
	<QTip2.Api> $a.qtip('option', 'style.height', <string | number | boolean> null);
	<QTip2.Api> $a.qtip('option', 'style.tip', <string | boolean | QTip2.Tip> null);

	<QTip2.Api> $a.qtip('option', 'events', <QTip2.Events> null);
	<QTip2.Api> $a.qtip('option', 'events.render', <QTip2.EventApiFunc> null);
	<QTip2.Api> $a.qtip('option', 'events.show', <QTip2.EventApiFunc> null);
	<QTip2.Api> $a.qtip('option', 'events.hide', <QTip2.EventApiFunc> null);
	<QTip2.Api> $a.qtip('option', 'events.toggle', <QTip2.EventApiFunc> null);
	<QTip2.Api> $a.qtip('option', 'events.visible', <QTip2.EventApiFunc> null);
	<QTip2.Api> $a.qtip('option', 'events.hidden', <QTip2.EventApiFunc> null);
	<QTip2.Api> $a.qtip('option', 'events.move', <QTip2.EventApiFunc> null);
	<QTip2.Api> $a.qtip('option', 'events.focus', <QTip2.EventApiFunc> null);
	<QTip2.Api> $a.qtip('option', 'events.blur', <QTip2.EventApiFunc> null);
}


/**
 * http://qtip2.com/api#api-methods
 */
function testApiViaObject() {
	$a.qtip({});

	var api = $a.qtip('api');

	<QTip2.Api> api.toggle();
	<QTip2.Api> api.toggle(true);
	<QTip2.Api> api.toggle(false, <Event> null);

	<QTip2.Api> api.show();
	<QTip2.Api> api.show(<Event> null);

	<QTip2.Api> api.hide();
	<QTip2.Api> api.hide(<Event> null);

	<QTip2.Api> api.disable();
	<QTip2.Api> api.disable(true);

	<QTip2.Api> api.enable();

	<QTip2.Api> api.reposition();
	<QTip2.Api> api.reposition(<Event> null);
	<QTip2.Api> api.reposition(<Event> null, true);

	<QTip2.Api> api.focus();
	<QTip2.Api> api.focus(<Event> null);

	<QTip2.Api> api.blur();
	<QTip2.Api> api.blur(<Event> null);

	<QTip2.Api> api.destroy();
	<QTip2.Api> api.destroy(true);
}


/**
 * http://qtip2.com/api#api.updating
 */
function testApiMethodsViaString() {
	<JQuery> $a.qtip('toggle');
	<JQuery> $a.qtip('toggle', true);
	<JQuery> $a.qtip('toggle', true, <Event> null);

	<JQuery> $a.qtip('show');
	<JQuery> $a.qtip('show', <Event> null);

	<JQuery> $a.qtip('hide');
	<JQuery> $a.qtip('hide', <Event> null);

	<JQuery> $a.qtip('disable');
	<JQuery> $a.qtip('disable', true);

	<JQuery> $a.qtip('enable');

	<JQuery> $a.qtip('reposition');
	<JQuery> $a.qtip('reposition', <Event> null);
	<JQuery> $a.qtip('reposition', <Event> null, true);

	<JQuery> $a.qtip('focus');
	<JQuery> $a.qtip('focus', <Event> null);

	<JQuery> $a.qtip('blur');
	<JQuery> $a.qtip('blur', <Event> null);

	<JQuery> $a.qtip('destroy');
	<JQuery> $a.qtip('destroy', true);
}


/**
 * http://qtip2.com/options#global
 *
 * $.fn is of type any, therefore we can't (and don't need to) add type bindings for QTip2 globals under it.
 */
function testGlobals() {
	$.fn.qtip.defaults.prerender = true;
}