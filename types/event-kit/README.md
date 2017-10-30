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

### Exposing Private Methods and Properties

[Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) can be used to augment any of the types used within Event Kit. As an example, if we wanted to reveal the private ```getEventNames``` method within the Emitter class, then we would create a file with the following contents:

```ts
// <<filename>>.d.ts

declare namespace EventKit {
  interface Emitter {
    getEventNames(): string[];
  }
}
```

Once this file is either referenced or included within your project, then this new member function would be freely usable on instances of the Emitter class without TypeScript reporting errors.
