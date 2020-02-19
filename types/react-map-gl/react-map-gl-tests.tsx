import * as React from 'react';
import {
    InteractiveMap,
    CanvasOverlay,
    SVGOverlay,
    HTMLOverlay,
    FullscreenControl,
    GeolocateControl,
    ScaleControl,
    CanvasRedrawOptions,
    HTMLRedrawOptions,
    SVGRedrawOptions,
    StaticMap,
    ViewportProps,
    Source,
    Layer,
} from 'react-map-gl';
import * as MapboxGL from 'mapbox-gl';
import { FeatureCollection } from 'geojson';

interface State {
    viewport: ViewportProps;
}

const geojson: FeatureCollection = {
    type: 'FeatureCollection',
    features: [{ type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [-122.4, 37.8] } }],
};

class MyMap extends React.Component<{}, State> {
    readonly state: State = {
        viewport: {
            width: 400,
            height: 400,
            bearing: 0,
            latitude: 0,
            longitude: 0,
            zoom: 3,
            pitch: 0,
            altitude: 1.5,
            maxZoom: 20,
            minZoom: 0,
            maxPitch: 60,
            minPitch: 0,
        },
    };
    private map: MapboxGL.Map;

    render() {
        return (
            <div>
                <InteractiveMap
                    {...this.state.viewport}
                    mapboxApiAccessToken="pk.test"
                    ref={this.setRefInteractive}
                    onViewportChange={viewport => this.setState({ viewport })}
                    onViewStateChange={({ viewState }) => this.setState({ viewport: viewState })}
                >
                    <FullscreenControl className="test-class" container={document.querySelector('body')} />
                    <GeolocateControl
                        className="test-class"
                        style={{ marginTop: '8px' }}
                        onGeolocate={options => {
                            console.log(options.enableHighAccuracy);
                        }}
                    />
                    <ScaleControl unit="nautical" />
                    <CanvasOverlay
                        redraw={opts => {
                            const { ctx, height, project, unproject, width } = opts;
                            const xy: number[] = unproject(project([20, 20]));
                            ctx.clearRect(0, 0, width, height);
                        }}
                    />
                    <CanvasOverlay
                        redraw={opts => {}}
                        captureScroll={true}
                        captureDrag={true}
                        captureClick={true}
                        captureDoubleClick={true}
                    />
                    <SVGOverlay redraw={() => {}} />
                    <SVGOverlay
                        redraw={opts => {
                            const { height, project, unproject, width } = opts;
                            const xy: number[] = unproject(project([20, 20]));
                        }}
                        captureScroll={true}
                        captureDrag={true}
                        captureClick={true}
                        captureDoubleClick={true}
                    />
                    <HTMLOverlay redraw={() => {}} />
                    <HTMLOverlay
                        redraw={opts => {
                            const { height, project, unproject, width } = opts;
                            const xy: number[] = unproject(project([20, 20]));
                        }}
                        style={{
                            border: '2px solid black',
                        }}
                        captureScroll={true}
                        captureDrag={true}
                        captureClick={true}
                        captureDoubleClick={true}
                    />

                    <Source type="geojson" data={geojson}>
                        <Layer
                            type="point"
                            paint={{
                                'circle-radius': 10,
                                'circle-color': '#007cbf',
                            }}
                        ></Layer>
                    </Source>
                </InteractiveMap>
                <StaticMap
                    {...this.state.viewport}
                    mapboxApiAccessToken="pk.test"
                    height={400}
                    width={400}
                    ref={this.setRefStatic}
                />
            </div>
        );
    }

    private readonly setRefInteractive = (el: InteractiveMap) => {
        this.map = el.getMap();
    }

    private readonly setRefStatic = (el: StaticMap) => {
        this.map = el.getMap();
    }
}
