import * as React from "react";
import ImageZoom from "react-medium-image-zoom";

const component: React.FC = () => {
    return (
        <div>
            <ImageZoom
                image={{
                    src: "https://raw.githubusercontent.com/rpearce/react-medium-image-zoom/master/docs/bridge.jpg",
                    alt: "Golden Gate Bridge",
                    className: "img"
                }}
                zoomImage={{
                    src: "https://raw.githubusercontent.com/rpearce/react-medium-image-zoom/master/docs/bridge-big.jpg",
                    alt: "Golden Gate Bridge",
                    className: "img--zoomed"
                }}
            />
        </div>
    );
};

export default component;
