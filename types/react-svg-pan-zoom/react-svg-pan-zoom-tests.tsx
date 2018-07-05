import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ReactSVGPanZoom,
  Props,
  fitToViewer,
  ViewerMouseEvent
} from 'react-svg-pan-zoom';

class Example1 extends React.Component {
  Viewer: ReactSVGPanZoom | null;

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
          style={{border: "1px solid black"}}
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

ReactDOM.render(
  <Example1 />,
  document.getElementById('app')
);
