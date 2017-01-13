

import { Disposable, CompositeDisposable, Emitter } from "event-kit";

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
		this.emitter.clear();
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
if(Disposable.isDisposable(subscription)) {}
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
