// Type definitions for react-hot-loader
// Project: https://github.com/gaearon/react-hot-loader
// Definitions by: Jacek Jagiello <https://github.com/jacekjagiello/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react"

declare module "react-hot-loader" {

  interface ErrorReporterProps {
    error: any
  }

  export interface AppContainerProps {
    children?: React.ReactElement<any>,
    errorReporter?: React.StatelessComponent<ErrorReporterProps>
  }

  export class AppContainer extends React.Component<AppContainerProps, {}> {}
}
