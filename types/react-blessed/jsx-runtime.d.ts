import { BlessedIntrinsicElementsPrefixed, BlessedIntrinsicElements } from ".";
import * as React from "react";

// using jsx-runtime requires TS 4.1 and setting compiler option
// "jsxImportSource" to "react-blessed". global JSX.IntrinsicElements will
// still reflect the values set in @types/react/index.d.ts because they are
// declared in the global namespace. JSX will otherwise work as expected for
// "react-blessed" elements and will error for HTML elements.
export namespace JSX {
    // copy React JSX, otherwise class refs won't type as expected
    type IntrinsicAttributes = React.Attributes;
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}
    // set IntrinsicElements to 'react-blessed' elements both with and without
    // 'blessed-' prefix
    interface IntrinsicElements extends BlessedIntrinsicElementsPrefixed, BlessedIntrinsicElements {}
}
