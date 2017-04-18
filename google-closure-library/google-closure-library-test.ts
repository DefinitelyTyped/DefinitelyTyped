/// <reference path="google-closure-library.d.ts" />
goog.require('goog.dom');
function sayHi() {
	let newHeader = goog.dom.createDom('h1', {
		'style': 'background-color:#EEE'
	});
	goog.dom.appendChild(document.body, newHeader);
}

sayHi();

let Queue = goog.require('goog.structs.Queue');

let q = new Queue<number>();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
let n: number = q.dequeue();
let s: number = q.dequeue();
