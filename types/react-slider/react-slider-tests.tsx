import * as React from 'react';
import ReactSlider from 'react-slider';


class Slider<S extends number> extends React.Component<ReactSlider.ReactSliderProps<S>> {
    render() {
        return (
            <ReactSlider
                snapDragDisabled
                barClassName="classnameForBar"
                withBars={false}
                {...this.props}
            />
        );
    }
}

function SingleValueSlider<S extends number>(props: React.PropsWithChildren<ReactSlider.ReactSliderProps<S>>){
    const [state, setState] = React.useState(0)
    return <ReactSlider {...props} value={state} onChange={setState} />
}


function MultiValueSlider<S extends number>(props: React.PropsWithChildren<ReactSlider.ReactSliderProps<S>>){
    const [state, setState] = React.useState([0,6,9])
    return <ReactSlider {...props} value={state} onChange={setState} />
}