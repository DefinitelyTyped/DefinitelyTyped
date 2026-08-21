import * as React from "react";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import { ReactSvgPanZoomLoader, SvgLoaderSelectElement } from "react-svg-pan-zoom-loader";

const Example1 = () => (
    <ReactSvgPanZoomLoader
        src="file/path/image.svg"
        render={(content) => (
            <UncontrolledReactSVGPanZoom width={500} height={500}>
                <svg width={500} height={500}>
                    {content}
                </svg>
            </UncontrolledReactSVGPanZoom>
        )}
    />
);

const Example2 = () => (
    <ReactSvgPanZoomLoader
        src="file/path/image.svg"
        proxy={
            <>
                <SvgLoaderSelectElement selector="#tree" onClick={() => console.log("click")} stroke="#000" />
            </>
        }
        render={(content) => (
            <UncontrolledReactSVGPanZoom width={500} height={500}>
                <svg width={500} height={500}>
                    {content}
                </svg>
            </UncontrolledReactSVGPanZoom>
        )}
    />
);

const Example3 = () => {
    const svgAsXML = `<svg height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    Sorry, your browser does not support inline SVG.
  </svg>`;

    return (
        <ReactSvgPanZoomLoader
            svgXML={svgAsXML}
            render={(content) => (
                <UncontrolledReactSVGPanZoom width={500} height={500}>
                    <svg width={500} height={500}>
                        {content}
                    </svg>
                </UncontrolledReactSVGPanZoom>
            )}
        />
    );
};
