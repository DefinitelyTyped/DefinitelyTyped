// Type definitions for react-hot-loader 3.0
// Project: https://github.com/gaearon/react-hot-loader
// Definitions by: Jacek Jagiello <https://github.com/jacekjagiello>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react"

interface ErrorReporterProps {
  error: any
}

export interface AppContainerProps {
  children?: React.ReactElement<any>,
  errorReporter?: React.ComponentClass<ErrorReporterProps> | React.StatelessComponent<ErrorReporterProps>
  warnings?: boolean
}

export class AppContainer extends React.Component<AppContainerProps, React.ComponentState> {}
