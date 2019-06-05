// Type definitions for react-helmet-async 1.0
// Project: https://github.com/staylor/react-helmet-async, https://github.com/nytimes/react-helmet-async
// Definitions by: forabi <https://github.com/forabi>
//                 Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { HelmetData } from "react-helmet";

export { default as Helmet } from "react-helmet";

export interface PopulatedContext {
    helmet: HelmetData;
}

interface ProviderProps {
    context?: {};
}

export class HelmetProvider extends React.Component<ProviderProps> {}
