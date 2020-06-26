import * as React from 'react';
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom';
import { ReactSvgPanZoomLoader, SvgLoaderSelectElement } from 'react-svg-pan-zoom-loader';

const Example1 = () => (
    <ReactSvgPanZoomLoader
        src="file/path/image.svg"
        render={content => (
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
                <SvgLoaderSelectElement selector="#tree" onClick={() => console.log('click')} stroke="#000" />
            </>
        }
        render={content => (
            <UncontrolledReactSVGPanZoom width={500} height={500}>
                <svg width={500} height={500}>
                    {content}
                </svg>
            </UncontrolledReactSVGPanZoom>
        )}
    />
);
