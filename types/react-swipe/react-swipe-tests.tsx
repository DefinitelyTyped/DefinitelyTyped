import * as React from "react";
import ReactSwipe = require("react-swipe");

class ReactSwipeTest extends React.PureComponent {
    private swipeComponent: ReactSwipe | null = null;

    private readonly onPrev: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (this.swipeComponent != null) {
            this.swipeComponent.prev();
        }
    }

    private readonly onNext: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (this.swipeComponent != null) {
            this.swipeComponent.next();
        }
    }

    private readonly onSlideToStart: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (this.swipeComponent != null) {
            const lastSlide = this.swipeComponent.getNumSlides() - 1;
            this.swipeComponent.slide(lastSlide, 1000);
        }
    }

    private readonly onGetCurrentPosition: React.MouseEventHandler<HTMLButtonElement> = () => {
        const currentPosition = this.swipeComponent != null ? this.swipeComponent.getPos() : 0;
        alert(currentPosition);
    }

    render() {
        const swipeOptions: SwipeOptions = {
            auto: 12,
            disableScroll: true,
            stopPropagation: true
        };

        const style: ReactSwipe.Style = {
            child: {
                backgroundColor: "yellow"
            },
            container: {
                backgroundColor: "green"
            },
            wrapper: {
                backgroundColor: "red"
            }
        };

        return <div>
            <ReactSwipe
                className="carousel"
                id="test-carousel"
                swipeOptions={swipeOptions}
                style={style}
                ref={(swipeComponent) => { this.swipeComponent = swipeComponent; }}
            >
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
            <button onClick={this.onPrev}>Prev</button>
            <button onClick={this.onNext}>Next</button>
            <button onClick={this.onSlideToStart}>Slide to end</button>
            <button onClick={this.onGetCurrentPosition}>Get current position</button>
        </div>;
    }
}
