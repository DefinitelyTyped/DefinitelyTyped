# React v0.14.4 Type Definitions

This directory contains type definitions for the following React packages:
- `react`
- `react-addons-create-fragment`
- `react-addons-css-transition-group`
- `react-addons-linked-state-mixin`
- `react-addons-perf`
- `react-addons-pure-render-mixin`
- `react-addons-shallow-compare`
- `react-addons-test-utils`
- `react-addons-transition-group`
- `react-addons-update`
- `react-dom`

## Getting Started
If you are using modules you should use `react.d.ts`, `react-dom.d.ts` or any of the `react-addons-*.d.ts` definition files. If `React` is in your global namespace, you should use `react-global.d.ts`.

## Known Problems & Workarounds

### **The type of `setState` is less than ideal and a little more strict than desirable.**
Starting with TypeScript 2.1, its more correct than it used to be, with a caveat: optional parameters on state interfaces are no longer valid.

```ts
interface FooState {
  bar: string;
  foo?: string;
}

const defaultFooState: FooState = {
  bar: "Hi",
  foo: undefined,
};

class Foo extends React.Component<{}, FooState> {
  public doStuff() {
    this.setState(defaultFooState);
  }
}
```

Will produce an error. The other way the types could be written (using `Partial<>` instead of `Pick<>`) would allow for you to set `undefined` to a parameter that is not allowed
to be `undefined`, which could lead to bugs. Users who want to keep optional state parameters should continue to use the hack of `setState({...} as any);`.


### **`React.Component<P, S>` subclass members aren't contextually typed.**
This problem manifests itself in two ways. It should be fixed in [TypeScript 2.0](https://github.com/Microsoft/TypeScript/pull/6118).

  - You might expect `componentDidUpdate(prevProps, prevState)` to have `prevProps` and `prevState` contextually typed as `P` and `S` respectively, but currently that is not the case. You must explicitly type-annotate both arguments.
  
  - You may get a cryptic error message when either `React.createElement` or `React.createFactory` doesn't recognize the `type` argument that you passed in as a valid `React.Component` subclass, because you overrode one of the static or instance members with a type that's not compatible with the superclass property's type. For example, with the following code:
    ```ts
    import * as React from "react";

    class MyComponent extends React.Component<Props, {}> {
        static contextTypes = {
            someValue: React.PropTypes.string
        };
    }

    React.createFactory(MyComponent);
    ```
    you might get this error:
    ```
    error TS2345: Argument of type 'typeof MyComponent' is not assignable to parameter of type 'string | ComponentClass<Props> | StatelessComponent<Props>'
      Type 'typeof ModernComponent' is not assignable to type 'StatelessComponent<Props>'.
        Types of property 'contextTypes' are incompatible.
          Type '{ someValue: Requireable<any>; }' is not assignable to type 'ValidationMap<any>'.
            Index signature is missing in type '{ someValue: Requireable<any>; }'.
    ```
    The work around is to add an explicit type annotation:
    ```ts
    static contextTypes: React.ValidationMap<any> = ...
    ```
