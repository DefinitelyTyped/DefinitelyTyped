import * as React from "react";
import Slider from "react-motion-slider";

class Test extends React.Component {
    protected slider: Slider;

    public render() {
        return (
            <div onMouseEnter={this.onMouseEnter.bind(this) }>
                <Slider currentIndex={1}
                    autoHeight
                    align="center"
                    ref={ref => this.slider = ref}
                    >
                    <div key="slide1"/>
                    <div key="slide2"/>
                </Slider>
            </div>
        );
    }

    protected onMouseEnter(): void {
        this.slider.next();
    }
}
