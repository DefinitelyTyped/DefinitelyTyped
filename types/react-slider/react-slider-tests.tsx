import * as React from 'react';
import ReactSlider from 'react-slider';

class Slider extends React.Component<ReactSlider.ReactSliderProps<number>> {
    render() {
        return <ReactSlider {...this.props} />;
    }
}

function SingleValueSlider() {
    const [state, setState] = React.useState(0);
    return <ReactSlider value={state} onChange={setState} ariaLabel={''} />;
}

function MultiValueSlider() {
    const [state, setState] = React.useState([0, 6, 9]);
    return <ReactSlider value={state} onChange={setState} ariaLabel={[]} />;
}
