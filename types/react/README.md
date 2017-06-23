## Known Problems & Workarounds

### **The type of `cloneElement` is incorrect.**
This is similar to the `setState` problem, in that `cloneElement(element, props)` should should accept a `props` object with a subset of the properties on `element.props`. There is an additional complication, however—React attributes, such as `key` and `ref`, should also be accepted in `props`, but should not exist on `element.props`. The "correct" way to model this, then, is with
```ts
declare function cloneElement<P extends Q, Q>(
    element: ReactElement<P>,
    props?: Q & Attributes,
    ...children: ReactNode[]): ReactElement<P>;
```
However, type inference for `Q` defaults to `{}` when [intersected with another type](https://github.com/Microsoft/TypeScript/pull/5738#issuecomment-181904905). And since any object is assignable to `{}`, we would lose the type safety of the `P extends Q` constraint. Therefore, the type of `props` is left as `Q`, which should work for most cases. If you need to call `cloneElement` with `key` or `ref`, you'll need a type cast:
```ts
interface ButtonProps {
    label: string,
    isDisabled?: boolean;
}
var element: React.CElement<ButtonProps, Button>;

React.cloneElement(element, { label: "label" });

// cloning with optional props requires a cast
React.cloneElement(element, <{ isDisabled?: boolean }>{ isDisabled: true });

// cloning with key or ref requires a cast
React.cloneElement(element, <React.ClassAttributes<Button>>{ ref: button => button.reset() });
React.cloneElement(element, <{ isDisabled?: boolean } & React.Attributes>{
    key: "disabledButton",
    isDisabled: true
});
```

### **`React.Component<P, S>` subclass members aren't contextually typed.**
This problem manifests itself in two ways. It should be fixed in [TypeScript 2.0](https://github.com/Microsoft/TypeScript/pull/6118).

  - You might expect `componentDidUpdate(prevProps, prevState)` to have `prevProps` and `prevState` contextually typed as `P` and `S` respectively, but currently that is not the case. You must explicitly type-annotate both arguments.

  - You may get a cryptic error message when either `React.createElement` or `React.createFactory` doesn't recognize the `type` argument that you passed in as a valid `React.Component` subclass, because you overrode one of the static or instance members with a type that's not compatible with the superclass property's type. For example, with the following code:
    ```ts
    import * as React from "react";

    class MyComponent extends React.Component<Props> {
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
