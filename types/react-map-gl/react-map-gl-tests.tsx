import * as React from "react";
import {
    Viewport,
    InteractiveMap,
    CanvasOverlay,
    SVGOverlay,
    HTMLOverlay,
    CanvasRedrawOptions,
    HTMLRedrawOptions,
    SVGRedrawOptions,
    StaticMap
} from 'react-map-gl';
import * as MapboxGL from "mapbox-gl";

interface State {
    viewport: Viewport;
}

class MyMap extends React.Component<{}, State> {
    readonly state: State = {
        viewport: {
            bearing: 0,
            latitude: 0,
            longitude: 0,
            zoom: 3,
        }
    };
    private map: MapboxGL.Map;

    render() {
        return (
            <div>
                <InteractiveMap
                    {...this.state.viewport}
                    mapboxApiAccessToken="pk.test"
                    height={400}
                    width={400}
                    ref={this.setRefInteractive}
                >
                    <CanvasOverlay
                        redraw={(opts: CanvasRedrawOptions) => {
                            const {
                                ctx,
                                height,
                                project,
                                unproject,
                                width,
                            } = opts;
                            const xy: number[] = unproject(project([20, 20]));
                            ctx.clearRect(0, 0, width, height);
                        }}
                    />
                    <CanvasOverlay
                        redraw={(opts: CanvasRedrawOptions) => {}}
                        captureScroll={true}
                        captureDrag={true}
                        captureClick={true}
                        captureDoubleClick={true}
                    />
                    <SVGOverlay
                        redraw={() => {}}
                    />
                    <SVGOverlay
                        redraw={(opts: SVGRedrawOptions) => {
                            const {
                                height,
                                project,
                                unproject,
                                width,
                            } = opts;
                            const xy: number[] = unproject(project([20, 20]));
                        }}
                        captureScroll={true}
                        captureDrag={true}
                        captureClick={true}
                        captureDoubleClick={true}
                    />
                    <HTMLOverlay
                        redraw={() => {}}
                    />
                    <HTMLOverlay
                        redraw={(opts: HTMLRedrawOptions) => {
                            const {
                                height,
                                project,
                                unproject,
                                width,
                            } = opts;
                            const xy: number[] = unproject(project([20, 20]));
                        }}
                        style={{
                            border: "2px solid black"
                        }}
                        captureScroll={true}
                        captureDrag={true}
                        captureClick={true}
                        captureDoubleClick={true}
                    />
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
