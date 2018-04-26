import * as React from "react";
import * as ReactDOM from 'react-dom';

// Import React Owl Carousel
import OwlCarousel from "react-owl-carousel";

export class ReactOwlCarouselTest extends React.Component {
    render() {
        return (
            <div>
                <OwlCarousel className={"owl-theme"} loop={false} margin={10} nav={false} dots={false}>
                    <div className="item"><h4>1</h4></div>
                    <div className="item"><h4>2</h4></div>
                    <div className="item"><h4>3</h4></div>
                    <div className="item"><h4>4</h4></div>
                    <div className="item"><h4>5</h4></div>
                    <div className="item"><h4>6</h4></div>
                    <div className="item"><h4>7</h4></div>
                    <div className="item"><h4>8</h4></div>
                    <div className="item"><h4>9</h4></div>
                    <div className="item"><h4>10</h4></div>
                    <div className="item"><h4>11</h4></div>
                    <div className="item"><h4>12</h4></div>
                </OwlCarousel>
            </div>
        );
    }
}

ReactDOM.render(<ReactOwlCarouselTest/>, document.getElementById("root"));
