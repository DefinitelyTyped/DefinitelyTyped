## Atom API Type Definitions

TypeScript type definitions for the [Atom Text Editor](https://atom.io/) public API, which is used to develop packages for the editor. Documentation for the public API can be found [here](https://atom.io/docs/api/v1.21.0/).

### Exports

#### The "atom" Variable

These definitions declare a global static variable named "atom" as ambient. This variable is an instance of the [AtomEnvironment](https://atom.io/docs/api/v1.21.0/AtomEnvironment) class.

```ts
if (atom.inDevMode()) {}
```

#### The "atom" Module

The following classes are exported within this module:
- [BufferedNodeProcess](https://atom.io/docs/api/v1.21.0/BufferedNodeProcess)
- [BufferedProcess](https://atom.io/docs/api/v1.21.0/BufferedProcess)
- [CompositeDisposable](https://atom.io/docs/api/v1.21.0/CompositeDisposable)
- [Directory](https://atom.io/docs/api/v1.21.0/Directory)
- [Disposable](https://atom.io/docs/api/v1.21.0/Disposable)
- [Emitter](https://atom.io/docs/api/v1.21.0/Emitter)
- [File](https://atom.io/docs/api/v1.21.0/File)
- [GitRepository](https://atom.io/docs/api/v1.21.0/GitRepository)
- [Notification](https://atom.io/docs/api/v1.21.0/Notification)
- [Point](https://atom.io/docs/api/v1.21.0/Point)
- [Range](https://atom.io/docs/api/v1.21.0/Range)
- [Task](https://atom.io/docs/api/v1.21.0/Task)
- [TextBuffer](https://atom.io/docs/api/v1.21.0/TextBuffer)
- [TextEditor](https://atom.io/docs/api/v1.21.0/TextEditor)

An example as to how you would use one of these classes in your own code:
```ts
import { CompositeDisposable } from "atom";
var subscriptions = new CompositeDisposable;
```

All other types exported within the ```atom``` module are interfaces, which represent the types referenced and used within the public API that are not directly exported by Atom itself and are thus not constructible.

### Service Type Definitions

Our goal is to eventually provide type definitions for Atom packages providing services for use within other Atom packages, though this is currently experimental and prone to change.

The following services are currently supported:
- [autocomplete-plus](https://atom.io/packages/autocomplete-plus)
- [status-bar](https://atom.io/packages/status-bar)

A usage example for ```status-bar``` would be:

```ts
import { StatusBar } from "atom/status-bar";

export function consumeStatusBar(statusBar: StatusBar) {
    let tile = statusBar.addLeftTile(item: myElement, priority: 100);
}
```

All types provided by service definitions are interfaces, with the import being elided by TypeScript.
