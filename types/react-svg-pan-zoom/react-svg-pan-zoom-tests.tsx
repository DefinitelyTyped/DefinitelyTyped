import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ReactSVGPanZoom,
  Props,
  fitToViewer,
  ViewerMouseEvent,
  Value,
  Tool,
  MODE_PANNING,
  TOOL_NONE,
  UncontrolledReactSVGPanZoom
} from 'react-svg-pan-zoom';

interface State {
  value: Value;
  tool: Tool;
}

class Example1 extends React.Component<{}, State> {
  Viewer: ReactSVGPanZoom | null;

  constructor(props: Props) {
    super(props);
    this.state = {
      value: {
        version: 2,
        mode: MODE_PANNING,
        focus: true,
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0,
        viewerWidth: 500,
        viewerHeight: 500,
        SVGWidth: 500,
        SVGHeight: 500,
        startX: null,
        startY: null,
        endX: null,
        endY: null,
        miniatureOpen: true
      },
      tool: TOOL_NONE
    };
  }

  componentDidMount() {
    if (this.Viewer) {
      this.Viewer.fitToViewer();
    }
  }

  render() {
    const miniatureProps = {
      position: 'left' as 'left',
      background: '#fff',
      width: 100,
      height: 80
    };

    const toolbarProps = {
      position: 'right' as 'right'
    };

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
          toolbarProps={toolbarProps}
          miniatureProps={miniatureProps}
          style={{border: "1px solid black"}}
          tool={this.state.tool}
          value={this.state.value}
          onChangeTool={(tool: Tool) => this.setState({tool})}
          onChangeValue={(value: Value) => this.setState({value})}
          width={500} height={500} ref={Viewer => this.Viewer = Viewer}
          onClick={(event: ViewerMouseEvent<any>)  => console.log('click', event.x, event.y, event.originalEvent)}
          onMouseUp={(event: ViewerMouseEvent<any>) => console.log('up', event.x, event.y)}
          onMouseMove={(event: ViewerMouseEvent<any>) => console.log('move', event.x, event.y)}
          onMouseDown={(event: ViewerMouseEvent<any>) => console.log('down', event.x, event.y)}>

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
class MyViewer extends React.Component {
  render() {
    return (
      <UncontrolledReactSVGPanZoom
        width={200} height={400}
      >
      </UncontrolledReactSVGPanZoom>
    );
  }
}

ReactDOM.render(
  <Example1 />,
  document.getElementById('app')
);
