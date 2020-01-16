// Type definitions for react-div-100vh 0.3
// Project: https://github.com/mvasin/react-div-100vh
// Definitions by: Tommy Mönnich <https://github.com/t-moennich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface Div100vhProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    as?: keyof JSX.IntrinsicElements;
}

declare const Div100vh: React.ComponentClass<Div100vhProps>;

export default Div100vh;
