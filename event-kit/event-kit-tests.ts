/// <reference path="./event-kit.d.ts" />

// The following line only works in TypeScript 1.5
//import { Disposable, CompositeDisposable, Emitter } from "event-kit";
// DefinitelyTyped is still using TypeScript 1.4 to run tests
// so until they upgrade we have to do the following instead
import eventKit = require('event-kit');
type Disposable = AtomEventKit.Disposable;
var Disposable = eventKit.Disposable;
type CompositeDisposable = AtomEventKit.CompositeDisposable;
var CompositeDisposable = eventKit.CompositeDisposable;
type Emitter = AtomEventKit.Emitter;
var Emitter = eventKit.Emitter;

// Emitter

class User {
	private emitter: Emitter;
	name: string;

	constructor() {
		this.emitter = new Emitter();
	}

	onDidChangeName(callback: (name: string) => void): Disposable {
		return this.emitter.on('did-change-name', callback);
	}

	setName(name: string): void {
		if (this.name != name) {
			this.name = name;
			this.emitter.emit('did-change-name', name);
		}
	}

	destroy(): void {
		this.emitter.dispose();
	}
}

// Disposable

var disposable = new Disposable(() => {
	// cleanup
});
disposable.dispose();

var user = new User();
var subscription = user.onDidChangeName((name: string) => {
	console.log('User name change to: ' + name);
});
subscription.dispose();

// CompositeDisposable

var subscriptions = new CompositeDisposable();
subscriptions.add(
	user.onDidChangeName((name: string) => {
		console.log('subscriber #1');
	}),
	user.onDidChangeName((name: string) => {
		console.log('subscriber #2');
	})
);
subscriptions.dispose();
