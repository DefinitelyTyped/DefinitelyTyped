import * as React from 'react';
import StarfieldAnimation from 'react-starfield-animation';

export default function App() {
    return (
        <StarfieldAnimation
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}
        />
    );
}
