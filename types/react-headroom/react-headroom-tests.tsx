import * as React from 'react';
import Headroom from 'react-headroom';

class HeadroomWrapper extends React.Component {
    render() {
        return (
            <Headroom>
                <h1>This is a header</h1>
            </Headroom>
        );
    }
}
