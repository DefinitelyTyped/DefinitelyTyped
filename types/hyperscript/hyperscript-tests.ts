
import * as h from 'hyperscript'

// Test/example code adapted from https://github.com/dominictarr/hyperscript/blob/master/README.md

// example
h('div#page',
	h('div#header',
		h('h1.classy', 'h', { style: {'background-color': '#22f'} })),
	h('div#menu', { style: {'background-color': '#2f2'} },
		h('ul',
			h('li', 'one'),
			h('li', 'two'),
			h('li', 'three'))),
		h('h2', 'content title', { style: {'background-color': '#f22'} }),
		h('p',
			"so it's just like a templating engine,\n",
			"but easy to use inline with javascript\n"),
		h('p',
			"the intension is for this to be used to create\n",
			"reusable, interactive html widgets. "))

// event
h('a', {href: '#',
	onclick: function (e: Event) {
		alert('you are 1,000,000th visitor!')
		e.preventDefault()
	}
}, 'click here to win a prize')

// array of children
const obj: {[id: string]: string} = {
	a: 'Apple',
	b: 'Banana',
	c: 'Cherry',
	d: 'Durian',
	e: 'Elder Berry'
}
h('table',
	h('tr', h('th', 'letter'), h('th', 'fruit')),
	Object.keys(obj).map(function (k) {
		return h('tr',
			h('th', k),
			h('td', obj[k])
		)
	})
)

// new context
const h2 = h.context()
h2('a', {href: '#',
	onclick: function (e: Event) {
		alert('you are 1,000,000th visitor!')
		e.preventDefault()
	}
}, "Click this")

h2.cleanup()

/* Polymorphic type tests */

// fall back to Element when in doubt
let fallbackTest = h('canvas#test3');

// determine proper Element type from tagName
let htmlTest1: HTMLCanvasElement = h('canvas');

// allow coercion of decorated tagName to proper type
let htmlTest2: HTMLCanvasElement = h<HTMLCanvasElement>('canvas#test2');

// if you need it to be an HTMLElement, you must coerce
let htmlTest3 = h<HTMLElement>('canvas#test3');

// support SVG elements
let svgTest1 = h('svg');

// allow coercions on SVG elements
let svgTest2 = h<SVGSVGElement>('svg#test5');

// inline coercion if you were feeling pedantic
h<HTMLDivElement>('div#page',
	h<HTMLDivElement>('div#header',
		h<HTMLHeadingElement>('h1.classy', 'h', { style: {'background-color': '#22f'} })));