# @types/phoenix_live_view

This package contains the type definitions for the [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view) library.

## Installation

```bash
npm install --save-dev @types/phoenix_live_view
```

## BREAKING CHANGE in 0.20 and 1.0

To preserve the actual namespaces of the phoenix_live_view Javascript modules, we distinguish
three different exports:

  * `ViewHookInterface` is the interface (contract) for a LiveView hook.
  * `ViewHook` is the implemented class in the phoenix_live_view module that implements
    `ViewHookInterface`
  * `Hook` is the generic interface that uses intersection types to let developers
    add additional functionality to an instance of a hook.

The `Hook` interface only expects the hook functions that developers are expected to provide given the public API.

`Hook` correctly assigns the `ViewHookInterface` interface to `this` when writing a hook, so properties like `el` and functions like `push_event` are all there. The `Hook` interface can also now be used as a generic for developers who want to assign their own functions and properties to the hook object.

```typescript
const testHook: Hook = {
    mounted() {
        const hook = this;
        console.log("TestHook mounted", { element: this.el });
        hook.pushEvent("hook-mounted", { name: "testHook" }, (reply: object, ref: number) => {
            console.log(`Got hook-mounted reply ${JSON.stringify(reply)} ref ${ref}`);
        });
    },
};

const testHookWithExtendedPrototype: Hook<{ handleClick: (event: MouseEvent) => void }> = {
    mounted() {
        this.handleClick = (event: MouseEvent) => {
            console.log("click", event);
            this.pushEvent("click", { x: event.clientX, y: event.clientY });
        };
        document.addEventListener("click", this.handleClick);
    },
    destroyed() {
        document.removeEventListener("click", this.handleClick);
    },
};

const MyHooks: HooksOptions = {
    test: testHook,
    testWithExtendedPrototype: testHookWithExtendedPrototype,
};

const liveSocket = new LiveSocket("/live", Socket, opts);
```

