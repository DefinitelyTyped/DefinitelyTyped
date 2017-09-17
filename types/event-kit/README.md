## Event Kit Type Definitions

TypeScript type definitions for [event-kit](https://github.com/atom/event-kit), which is published [under the same name](https://www.npmjs.com/package/event-kit) on NPM.

### Usage Notes

#### Exports

The three classes exported from this module are: [CompositeDisposable](https://github.com/atom/event-kit/blob/master/src/composite-disposable.coffee), [Disposable](https://github.com/atom/event-kit/blob/master/src/disposable.coffee), and [Emitter](https://github.com/atom/event-kit/blob/master/src/emitter.coffee).

```ts
import { CompositeDisposable, Disposable, Emitter } from "event-kit";
let subscriptions = new CompositeDisposable();
```

#### The EventKit Namespace

All types used by "event-kit" can be referenced from the EventKit namespace.

```ts
function example(disposable: EventKit.DisposableLike) {}
```
