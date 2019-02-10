import * as React from 'react';
import ScaledImage from 'react-native-scaled-image';

class Example extends React.Component {
    render() {
        return (
          <ScaledImage
              source={require('image.png')}
              style={{ resizeMode: 'contain' }}
              width={360} />
        );
    }
}

export default Example;
