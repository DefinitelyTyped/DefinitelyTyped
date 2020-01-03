import * as React from 'react';
import {
  DotIndicator,
} from 'react-native-indicators';

class Example extends React.Component {
  render() {
    return (
        <React.Fragment>
            <DotIndicator color='white' />
            <DotIndicator style={{ flex: 0 }} />
        </React.Fragment>
    );
  }
}
