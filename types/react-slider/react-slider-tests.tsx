import * as React from 'react';
import ReactSlider from 'react-slider';

class Slider extends React.Component<ReactSlider.ReactSliderProps<number>> {
    render() {
        return <ReactSlider snapDragDisabled trackClassName="classnameForBar" withTracks={false} {...this.props} />;
    }
}

function SingleValueSlider(props: React.PropsWithChildren<ReactSlider.ReactSliderProps<number>>) {
    const [state, setState] = React.useState(0);
    return <ReactSlider {...props} value={state} onChange={setState} />;
}

function MultiValueSlider(props: React.PropsWithChildren<ReactSlider.ReactSliderProps<number[]>>) {
    const [state, setState] = React.useState([0, 6, 9]);
    return <ReactSlider value={state} onChange={setState} ariaLabel={[]} />;
}
