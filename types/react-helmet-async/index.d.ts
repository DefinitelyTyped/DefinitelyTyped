// Type definitions for react-helmet-async 0.0
// Project: https://github.com/staylor/react-helmet-async#readme
// Definitions by: forabi <https://github.com/forabi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

import Helmet, { HelmetData } from 'react-helmet';
export default Helmet;

export interface PopulatedContext {
    helmet: HelmetData;
}

interface ProviderProps {
    context?: {};
}

export class HelmetProvider extends React.Component<ProviderProps> {}
