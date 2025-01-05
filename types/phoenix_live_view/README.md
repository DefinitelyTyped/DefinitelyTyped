# @types/phoenix_live_view

This package contains the type definitions for the [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view) library.

## Installation

```bash
npm install --save-dev @types/phoenix_live_view
```

## BREAKING CHANGE in 0.20.0

The `ViewHook` interface has been modified to better reflect the type expected by developers writing their own hooks. It used to correspond to the type of the hook object as it is constructed by the Phoenix LiveView library internally, but it included properties which are not expected for developers to provide. This required casting or commenting to make the typescript compiler happy when declaring hooks.

The new `ViewHook` interface is now correct and only expects the hook functions that developers are expected to provide given the public API. But it still provides the previous interface as `ViewHookInternal` for those who need to use it.

Besides, and it correctly assigns the `ViewHookInternal` type to `this` when writing a hook, so properties like `el`, `viewName`, and functions like `push_event` are all there. The `ViewHook` interface can also now be used as a generic for developers who want to assign their own functions and properties to the hook object.

```typescript
const testHook: ViewHook = {
    mounted() {
        const hook = this;
        console.log("TestHook mounted", { element: this.el, viewName: this.viewName });
        hook.pushEvent("hook-mounted", { name: "testHook" }, (reply, ref) => {
            console.log(`Got hook-mounted reply ${JSON.stringify(reply)} ref ${ref}`);
        });
    },
};

const testHookWithExtendedPrototype: ViewHook<{ handleClick: (event: MouseEvent) => void }> = {
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

