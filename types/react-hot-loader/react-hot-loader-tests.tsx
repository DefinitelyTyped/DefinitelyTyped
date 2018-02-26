import * as React from 'react'
import { AppContainer } from 'react-hot-loader'

interface ErrorReporterProps {
  error: any
}

class ErrorReporterComponent extends React.Component<ErrorReporterProps> {
  public render() {
    return <p>{this.props.error.message}</p>
  }
}

const DummyComponent = () => <p>Dummy component</p>
const ErrorReporter = ({ error } : ErrorReporterProps) => <ErrorReporterComponent error={error} />

class AppContainerTest extends React.Component {
  public render() {
    return (
      <div>
        <AppContainer errorReporter={ErrorReporterComponent}>
          <DummyComponent />
        </AppContainer>
      </div>
    )
  }
}

export default AppContainerTest
