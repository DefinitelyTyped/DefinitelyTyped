import { Disposable, CompositeDisposable, Emitter } from "event-kit";

declare let bool: boolean;
declare let subscription: Disposable;
declare let subscriptions: CompositeDisposable;
declare let emitter: Emitter;

// NPM Usage Tests ============================================================
class User {
    private readonly emitter: Emitter;
    name: string;

    constructor() {
        this.emitter = new Emitter();
    }

    onDidChangeName(callback: (value: string) => void) {
        return this.emitter.on("did-change-name", callback);
    }

    setName(name: string) {
        if (name !== this.name) {
            this.name = name;
            this.emitter.emit("did-change-name", name);
        }
        return name;
    }

    destroy() {
        this.emitter.dispose();
    }
}

const user = new User();
subscription = user.onDidChangeName(name => console.log("My name is #{name}"));
subscription.dispose();

// Disposable =================================================================
bool = subscription.disposed;
if (subscription.disposalAction) subscription.disposalAction();
subscription.dispose();

// CompositeDisposable ========================================================
// Properties
bool = subscriptions.disposed;

// Construction and Lifecycle
subscriptions = new CompositeDisposable();
new CompositeDisposable(subscription);
new CompositeDisposable(subscription, subscription);
new CompositeDisposable({ dispose() {} });

subscriptions.dispose();

// Managing Disposables
subscriptions.add(subscription);
subscriptions.add(
    subscription,
    { dispose() {} }
);

subscriptions.remove(subscription);
subscriptions.remove({ dispose() {} });

subscriptions.delete(subscription);
subscriptions.delete({ dispose() {} });

subscriptions.clear();

// Emitter ====================================================================
bool = emitter.disposed;

emitter.clear();
emitter.dispose();

// Event Subscription
subscription = emitter.on("test-event", value => {});
emitter.once("test-event", value => {});
subscription = emitter.preempt("test-event", value => {});

// Event Emission
emitter.emit("test-event");
emitter.emit("test-event", 42);

async function testEmitAsync() {
    await emitter.emitAsync("test-event");
    await emitter.emitAsync("test-event", 42);
}
