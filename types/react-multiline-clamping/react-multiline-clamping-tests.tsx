import * as React from 'react';
import Clamp from 'react-multiline-clamping';

class Test extends React.Component {
    render() {
        return (
            <Clamp withTooltip lines={2} withToggle maxLines={11}>
                <p>Multiline text</p>
            </Clamp>
        );
    }
}
