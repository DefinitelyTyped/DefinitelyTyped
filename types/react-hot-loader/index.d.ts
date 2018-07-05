// Type definitions for react-hot-loader 4.1
// Project: https://github.com/gaearon/react-hot-loader
// Definitions by: Jacek Jagiello <https://github.com/jacekjagiello>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import "node";

export type ReactComponent<TProps> = React.ComponentClass<TProps> | React.StatelessComponent<TProps>;
export type ExtractProps<TComponent> = TComponent extends ReactComponent<infer TProps> ? TProps : {};

export interface ErrorReporterProps {
    error: any;
}

export interface AppContainerProps {
    errorReporter?: ReactComponent<ErrorReporterProps>;
    warnings?: boolean;
}
export class AppContainer extends React.Component<AppContainerProps, React.ComponentState> {}

export function hot(sourceModule: NodeModule): <TComponent>(component: TComponent) => ReactComponent<ExtractProps<TComponent>>;
