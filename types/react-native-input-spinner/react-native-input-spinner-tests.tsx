import * as React from 'react';
import InputSpinner from 'react-native-input-spinner';

class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InputSpinner
          min={0}
          max={50}
          value={10}
          step={5}
          rounded={true}
        />
      </React.Fragment>
    );
  }
}
