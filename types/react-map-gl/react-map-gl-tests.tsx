import * as React from "react";
import { 
    IViewport,
    IStaticMapProps,
    IInteractiveMapProps, 
    InteractiveMap,
    CanvasOverlay,
    SVGOverlay,
    HTMLOverlay,
    IHTMLOverlayProps,
    ICanvasRedrawOptions,
    IHTMLRedrawOptions,
    ISVGOverlayProps,
    ISVGRedrawOptions,
    StaticMap
} from 'react-map-gl';
import * as MapboxGL from "mapbox-gl";

interface MyMapState {
    viewport: IViewport; 
}

class MyMap extends React.Component<{}, MyMapState> {
    public state: MyMapState = {
        viewport: {
            bearing: 0,
            isDragging: false,
            latitude: 0,
            longitude: 0,
            zoom: 3,
        }
    }

    public render() {
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
                        redraw={(opts: ICanvasRedrawOptions) => {
                            const {
                                ctx,
                                height,
                                project,
                                unproject,
                                width,
                            } = opts;
                            const xy: number[] = unproject(project([20,20]));
                            ctx.clearRect(0, 0, width, height);
                        }}
                    />
                    <CanvasOverlay
                        redraw={(opts: ICanvasRedrawOptions) => {}}
                        captureScroll={true}
                        captureDrag={true}
                        captureClick={true}
                        captureDoubleClick={true}
                    />
                    <SVGOverlay
                        redraw={() => {}}
                    />
                    <SVGOverlay
                        redraw={(opts: ISVGRedrawOptions) => {
                            const {
                                height,
                                project,
                                unproject,
                                width,
                            } = opts;
                            const xy: number[] = unproject(project([20,20]));
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
                        redraw={(opts: IHTMLRedrawOptions) => {
                            const {
                                height,
                                project,
                                unproject,
                                width,
                            } = opts;
                            const xy: number[] = unproject(project([20,20]));
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
        )
    }

    private setRefInteractive = (el: InteractiveMap) => {
        const map: MapboxGL.Map = el.getMap();
    }

    private setRefStatic = (el: StaticMap) => {
        const map: MapboxGL.Map = el.getMap();
    }
}
