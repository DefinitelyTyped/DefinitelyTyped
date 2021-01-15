import * as MapboxGL from 'mapbox-gl';
import * as React from 'react';

import {
    CanvasOverlay,
    CanvasRedrawOptions,
    FullscreenControl,
    GeolocateControl,
    HTMLOverlay,
    HTMLRedrawOptions,
    InteractiveMap,
    Layer,
    LinearInterpolator,
    SVGOverlay,
    SVGRedrawOptions,
    ScaleControl,
    Source,
    StaticMap,
    ViewportProps,
} from 'react-map-gl';

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
    private mapboxMap: MapboxGL.Map;
    private map: InteractiveMap;

    render() {
        return (
            <div>
                <InteractiveMap
                    {...this.state.viewport}
                    mapboxApiAccessToken="pk.test"
                    mapboxApiUrl="http://url.test"
                    ref={this.setRefInteractive}
                    onViewportChange={viewport => this.setState({ viewport })}
                    onViewStateChange={({ viewState }) => this.setState({ viewport: viewState })}
                    onClick={e => {
                        const features = this.map.queryRenderedFeatures(e.point);
                        if (features.length > 0) {
                            console.log(features[0].source);
                        }
                    }}
                    onContextMenu={event => {
                        event.preventDefault();
                    }}
                >
                    <FullscreenControl className="test-class" container={document.querySelector('body')} />
                    <GeolocateControl
                        auto={false}
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
                    <Source
                        id="raster-tiles-source"
                        type="raster"
                        scheme="tms"
                        tiles={["path/to/tiles/{z}/{x}/{y}.png"]}
                        tileSize={256}
                    >
                        <Layer
                            id="raster-layer"
                            type="raster"
                            source="raster-tiles-source"
                            paint={{}}
                            minzoom={0}
                            maxzoom={22}
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
                <button
                    onClick={() => {
                        const nullPoint = [0, 0];
                        const li = new LinearInterpolator({
                            around: nullPoint,
                        });
                        this.setState(prevState => ({
                            viewport: {
                                ...prevState.viewport,
                                latitude: nullPoint[1],
                                longitude: nullPoint[0],
                                transitionInterpolator: li,
                                transitionDuration: 100,
                            },
                        }));
                    }}
                >
                    Jump to Null Point
                </button>
            </div>
        );
    }

    private readonly setRefInteractive = (el: InteractiveMap) => {
        this.map = el;
        this.mapboxMap = el.getMap();
    }

    private readonly setRefStatic = (el: StaticMap) => {
        this.mapboxMap = el.getMap();
    }
}
