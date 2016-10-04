/// <reference path="./hyperscript.d.ts" />
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
