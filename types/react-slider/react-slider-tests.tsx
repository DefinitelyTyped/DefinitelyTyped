import * as React from 'react';
import ReactSlider from 'react-slider';

class Slider extends React.Component<ReactSlider.ReactSliderProps> {
    render() {
        return (
            <ReactSlider
                snapDragDisabled
                trackClassName="classnameForBar"
                withTracks={false}
                {...this.props}
            />
        );
    }
}
