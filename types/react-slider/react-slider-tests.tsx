import * as React from 'react';
import ReactSlider = require('react-slider');

class Slider extends React.Component<ReactSlider.ReactSliderProps> {
    render() {
        return (
            <ReactSlider
                snapDragDisabled
                trackClassName="classnameForBar"
                withTracks={false}
                marks={5}
                renderMark={props => <span {...props} />}
                {...this.props}
            />
        );
    }
}
