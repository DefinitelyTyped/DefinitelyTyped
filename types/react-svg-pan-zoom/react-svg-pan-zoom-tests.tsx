import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    ReactSVGPanZoom,
    Props,
    ViewerMouseEvent,
    Value, 
    TOOL_AUTO,
    TOOL_NONE,
    TOOL_PAN,
    TOOL_ZOOM_IN,
    TOOL_ZOOM_OUT,
    Tool,
    POSITION_RIGHT,
    POSITION_BOTTOM,
    POSITION_CENTER,
    POSITION_NONE,
    POSITION_LEFT,
    POSITION_TOP,
    ViewerTouchEvent
} from 'react-svg-pan-zoom';

class Example1 extends React.Component {
    Viewer: ReactSVGPanZoom | null;
    ViewerValue: Value | null;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        if (this.Viewer) {
            this.Viewer.fitToViewer();
        }
    }

    render() {
        return (
            <div>
                <button onClick={event => { if (this.Viewer) this.Viewer.zoomOnViewerCenter(1.1); }}>
                    Zoom in
                </button>
                <button onClick={event => { if (this.Viewer) this.Viewer.fitSelection(40, 40, 200, 200); }}>
                    Zoom area 200x200
                </button>
                <button onClick={event => { if (this.Viewer) this.Viewer.fitToViewer(); }}>
                    Fit
                </button>

                <hr/>

                <ReactSVGPanZoom
                    width={500}
                    height={500}
                    value={this.ViewerValue}
                    onChangeValue={(value: Value) => console.log('value changed', value)}
                    onZoom={(value: Value) => console.log('zoomed', value)}
                    onPan={(value: Value) => console.log('panned', value)}
                    tool={TOOL_AUTO}
                    onChangeTool={(tool: Tool) => console.log('tool changed', tool)}
                    SVGBackground={'white'}
                    SVGStyle={{background: "red"}}
                    background={"#ffff00"}
                    style={{border: "1px solid black"}}
                    className={"mySVGPanZoom"}
                    detectWheel={true}
                    detectAutoPan={true}
                    detectPinchGesture={true}
                    toolbarPosition={POSITION_RIGHT}
                    customToolbar={<div></div>}
                    modifierKeys={['Shift']}
                    preventPanOutside={true}
                    scaleFactor={1.1}
                    scaleFactorOnWheel={1.06}
                    scaleFactorMax={10}
                    scaleFactorMin={0.2}
                    miniaturePosition={POSITION_LEFT}
                    miniatureBackground={"#00ff00"}
                    miniatureWidth={100}
                    miniatureHeight={80}
                    customMiniature={<div></div>}
                    disableDoubleClickZoomWithToolAuto={true}
                    onClick={(event: ViewerMouseEvent<any>)  => console.log('click', event.x, event.y, event.originalEvent)}
                    onMouseUp={(event: ViewerMouseEvent<any>) => console.log('up', event.x, event.y)}
                    onMouseMove={(event: ViewerMouseEvent<any>) => console.log('move', event.x, event.y)}
                    onMouseDown={(event: ViewerMouseEvent<any>) => console.log('down', event.x, event.y)}
                    onTouchStart={(event: ViewerTouchEvent<any>) => console.log('touch start', event.translationX, event.translationY, event.originalEvent)}
                    onTouchMove={(event: ViewerTouchEvent<any>) => console.log('touch move', event.translationX, event.translationY)}
                    onTouchEnd={(event: ViewerTouchEvent<any>) => console.log('touch end', event.translationX, event.translationY)}
                    onTouchCancel={(event: ViewerTouchEvent<any>) => console.log('touch cancel', event.translationX, event.translationY)}
                    toolbarProps={{SVGAlignX: POSITION_LEFT, SVGAlignY: POSITION_TOP}}>

                    <svg width={617} height={316}>

                        <g fillOpacity=".5" strokeWidth="4">
                            <rect x="400" y="40" width="100" height="200" fill="#4286f4" stroke="#f4f142"/>
                            <circle cx="108" cy="108.5" r="100" fill="#0ff" stroke="#0ff"/>
                            <circle cx="180" cy="209.5" r="100" fill="#ff0" stroke="#ff0"/>
                            <circle cx="220" cy="109.5" r="100" fill="#f0f" stroke="#f0f"/>
                        </g>

                    </svg>
                </ReactSVGPanZoom>
            </div>
        );
    }
}

ReactDOM.render(
    <Example1 />,
    document.getElementById('app')
);
