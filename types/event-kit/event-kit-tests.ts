import { Disposable, CompositeDisposable, Emitter } from "event-kit";

// Emitter
class User {
	private emitter: EventKit.Emitter;
	name: string;

	constructor() {
		this.emitter = new Emitter();
	}

	onDidChangeName(callback: (name: string) => void): EventKit.Disposable {
		return this.emitter.on("did-change-name", callback);
	}

	setName(name: string): void {
		if (this.name !== name) {
			this.name = name;
			this.emitter.emit("did-change-name", name);
		}
	}

	destroy(): void {
		this.emitter.clear();
		this.emitter.dispose();
	}
}

// Disposable
const disposable = new Disposable(() => {
	// cleanup
});
disposable.dispose();

const user = new User();
const subscription = user.onDidChangeName((name: string) => {
	console.log(`User name chnaged to: ${name}`);
});
if (Disposable.isDisposable(subscription)) {}
subscription.dispose();

// CompositeDisposable
const subscriptions = new CompositeDisposable();
subscriptions.add(
	user.onDidChangeName((name: string) => {
		console.log("subscriber #1");
	}),
	user.onDidChangeName((name: string) => {
		console.log("subscriber #2");
	})
);
subscriptions.dispose();
