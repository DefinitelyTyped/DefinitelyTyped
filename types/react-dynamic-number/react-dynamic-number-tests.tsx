import * as React from 'react';
import DynamicNumber from 'react-dynamic-number';

export class Test extends React.Component {
  render() {
    return (
        <DynamicNumber
          separator={','}
          thousand={' '}
          integer={40}
          fraction={2}
          negative={false}
        />
    );
  }
}
