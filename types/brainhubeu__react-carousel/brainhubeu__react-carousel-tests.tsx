import * as React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";

interface MyCarouselProps {
    value: number;
}

interface MyCarouselState {
    value: number;
    slides: Array<React.ReactComponentElement<'img'>>;
}

class MyCarousel extends React.Component<MyCarouselProps, MyCarouselState> {
    state = {
        value: 0,
        slides: [
            <img key={1} alt="img-2"/>,
            <img key={2} alt="img-2"/>,
            <img key={3} alt="img-3"/>,
        ],
    };

    handleChange = (value: number) => {
        this.setState({value});
    }

    render() {
        const {value, slides} = this.state;

        return (
            <>
                <Carousel
                    addArrowClickHandler
                    animationSpeed={2000}
                    arrows
                    arrowLeft={<div>left</div>}
                    arrowRight={<div>left</div>}
                    autoPlay={1000}
                    clickToChange
                    centered
                    dots={false}
                    draggable
                    itemWidth={100}
                    infinite
                    keepDirectionWhenDragging
                    onChange={this.handleChange}
                    offset={50}
                    slides={slides}
                    slidesPerPage={1}
                    slidesPerScroll={3}
                    stopAutoPlayOnHover
                    value={value}>
                    <img alt="image-1"/>
                    <img alt="image-2"/>
                    <img alt="image-3"/>
                </Carousel>
                <Dots number={slides.length} value={value} onChange={this.handleChange}/>
            </>
        );
    }
}
