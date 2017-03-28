import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Leaflet from 'leaflet';
import { Component, PropTypes } from 'react';
import {
    Circle,
    CircleMarker,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    Map,
    MapControl,
    MapControlProps,
    MapInstance,
    Marker,
    MarkerInstance,
    Pane,
    Polygon,
    Polyline,
    Popup,
    Rectangle,
    TileLayer,
    Tooltip,
    WMSTileLayer,
    ZoomControl
} from 'react-leaflet';
const { BaseLayer, Overlay } = LayersControl;

/// animate.js
export class AnimateExample extends Component<any, any> {
    state = {
        animate: false,
        hasLocation: false,
        latlng: {
            lat: 51.505,
            lng: -0.09,
        },
    };

    handleClick = (e: Leaflet.MouseEvent) => {
        this.setState({
            latlng: e.latlng,
        });
    }

    toggleAnimate = () => {
        this.setState({
            animate: !this.state.animate,
        });
    }

    render() {
        const marker = this.state.hasLocation ? (
            <Marker position={this.state.latlng}>
                <Popup>
                    <span>You are here</span>
                </Popup>
            </Marker>
        ) : null;

        return (
            <div style={{ textAlign: 'center' }}>
                <label>
                    <input checked={this.state.animate} onChange={this.toggleAnimate} type='checkbox' />
                    Animate panning
        </label>
                <Map
                    animate={this.state.animate}
                    center={this.state.latlng}
                    // TODO length={4}
                    onclick={this.handleClick}
                    ref='map'
                    zoom={13}>
                    <TileLayer
                        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                    {marker}
                </Map>
            </div>
        );
    }
}

// bounds.js
const outer: Array<[number, number]> = [
    [50.505, -29.09],
    [52.505, 29.09],
];
const inner: Array<[number, number]> = [
    [49.505, -2.09],
    [53.505, 2.09],
];

export class BoundsExample extends Component<any, any> {
    state = {
        bounds: outer,
    };

    onClickInner = () => {
        this.setState({ bounds: inner });
    }

    onClickOuter = () => {
        this.setState({ bounds: outer });
    }

    render() {
        return (
            <Map bounds={this.state.bounds}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <Rectangle
                    bounds={outer}
                    color={this.state.bounds === outer ? 'red' : 'white'}
                    onclick={this.onClickOuter}
                    />
                <Rectangle
                    bounds={inner}
                    color={this.state.bounds === inner ? 'red' : 'white'}
                    onclick={this.onClickInner}
                    />
            </Map>
        );
    }
}

// custom-component.js
const SomeFn = (asd: string) => (
    asd + asd
);

const MyPopupMarker = ({ children, position }: any) => (
    <Marker position={position}>
        <Popup>
            <span>{children}</span>
        </Popup>
    </Marker>
);

/*(MyPopupMarker as any).propTypes = {
  children: MapPropTypes.children,
  position: MapPropTypes.latlng,
}*/

const MyMarkersList = ({ markers }: any) => {
    const items = markers.map(({ key, ...props }: any) => (
        <MyPopupMarker key={key} {...props} />
    ));
    return <div style={{ display: 'none' }}>{items}</div>;
};
(MyMarkersList as any).propTypes = {
    markers: PropTypes.array.isRequired,
};

export class CustomComponent extends Component<any, any> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    };

    render() {
        const center: [number, number] = [this.state.lat, this.state.lng];

        const markers = [
            { key: 'marker1', position: [51.5, -0.1], children: 'My first popup' },
            { key: 'marker2', position: [51.51, -0.1], children: 'My second popup' },
            { key: 'marker3', position: [51.49, -0.05], children: 'My third popup' },
        ];
        return (
            <Map center={center} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <MyMarkersList markers={markers} />
            </Map>
        );
    }
}

export class MarkerWithDivIconExample extends Component<any, any> {
    render() {
        return (
            <Map>
                <Marker position={[0, 0]} icon={
                        new Leaflet.DivIcon({})
                    }/>
            </Map>
        );
    }
}

// draggable-marker.js
export class DraggableExample extends Component<any, any> {
    state = {
        center: {
            lat: 51.505,
            lng: -0.09,
        },
        marker: {
            lat: 51.505,
            lng: -0.09,
        },
        zoom: 13,
        draggable: true,
    };

    toggleDraggable = () => {
        this.setState({ draggable: !this.state.draggable });
    }

    updatePosition = () => {
        const { lat, lng } = (this.refs['marker'] as MarkerInstance).leafletElement.getLatLng();
        this.setState({
            marker: { lat, lng },
        });
    }

    render() {
        const position: [number, number] = [this.state.center.lat, this.state.center.lng];
        const markerPosition: [number, number] = [this.state.marker.lat, this.state.marker.lng];

        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <Marker
                    draggable={this.state.draggable}
                    ondragend={this.updatePosition}
                    position={markerPosition}
                    ref='marker'>
                    <Popup minWidth={90}>
                        <span onClick={this.toggleDraggable}>
                            {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
                        </span>
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

// events.js
export class EventsExample extends Component<any, any> {
    state = {
        hasLocation: false,
        latlng: {
            lat: 51.505,
            lng: -0.09,
        },
    };

    handleClick = () => {
        (this.refs['map'] as MapInstance).leafletElement.locate();
    }

    handleLocationFound = (e: Leaflet.LocationEvent) => {
        this.setState({
            hasLocation: true,
            latlng: e.latlng,
        });
    }

    render() {
        const marker = this.state.hasLocation ? (
            <Marker position={this.state.latlng}>
                <Popup>
                    <span>You are here</span>
                </Popup>
            </Marker>
        ) : null;

        return (
            <Map
                center={this.state.latlng}
                // TODO length={4}
                onClick={this.handleClick}
                onlocationfound={this.handleLocationFound}
                ref='map'
                zoom={13}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                {marker}
            </Map>
        );
    }
}

// layers-control.js
export class LayersControlExample extends Component<any, any> {
    render() {
        const center: [number, number] = [51.505, -0.09];
        const rectangle: Array<[number, number]> = [
            [51.49, -0.08],
            [51.5, -0.06],
        ];

        return (
            <Map center={center} zoom={13}>
                <LayersControl position='topright'>
                    <BaseLayer checked name='OpenStreetMap.Mapnik'>
                        <TileLayer
                            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                            />
                    </BaseLayer>
                    <BaseLayer name='OpenStreetMap.BlackAndWhite'>
                        <TileLayer
                            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
                            />
                    </BaseLayer>
                    <Overlay name='Marker with popup'>
                        <Marker position={center}>
                            <Popup>
                                <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                            </Popup>
                        </Marker>
                    </Overlay>
                    <Overlay checked name='Layer group with circles'>
                        <LayerGroup>
                            <Circle center={center} fillColor='blue' radius={200} />
                            <Circle center={center} fillColor='red' radius={100} stroke={false} />
                            <LayerGroup>
                                <Circle center={[51.51, -0.08]} color='green' fillColor='green' radius={100} />
                            </LayerGroup>
                        </LayerGroup>
                    </Overlay>
                    <Overlay name='Feature group'>
                        <FeatureGroup color='purple'>
                            <Popup>
                                <span>Popup in FeatureGroup</span>
                            </Popup>
                            <Circle center={[51.51, -0.06]} radius={200} />
                            <Rectangle bounds={rectangle} />
                        </FeatureGroup>
                    </Overlay>
                </LayersControl>
            </Map>
        );
    }
}

// other-layers.js
export class OtherLayersExample extends Component<any, any> {
    render() {
        const center: [number, number] = [51.505, -0.09];
        const rectangle: Array<[number, number]> = [
            [51.49, -0.08],
            [51.5, -0.06],
        ];

        return (
            <Map center={center} zoom={13}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <LayerGroup>
                    <Circle center={center} fillColor='blue' radius={200} />
                    <Circle center={center} fillColor='red' radius={100} stroke={false} />
                    <LayerGroup>
                        <Circle center={[51.51, -0.08]} color='green' fillColor='green' radius={100} />
                    </LayerGroup>
                </LayerGroup>
                <FeatureGroup color='purple'>
                    <Popup>
                        <span>Popup in FeatureGroup</span>
                    </Popup>
                    <Circle center={[51.51, -0.06]} radius={200} />
                    <Rectangle bounds={rectangle} />
                </FeatureGroup>
            </Map>
        );
    }
}

// pane.js
export class PaneExample extends Component<any, any> {
    state = {
        render: true,
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                render: !this.state.render,
            });
        }, 5000);
    }

    render() {
        return (
            <Map bounds={outer}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                {this.state.render ? (
                    <Pane name='cyan-rectangle' style={{ zIndex: 500 }}>
                        <Rectangle bounds={outer} color='cyan' />
                    </Pane>
                ) : null}
                <Pane name='yellow-rectangle' style={{ zIndex: 499 }}>
                    <Rectangle bounds={inner} color='yellow' />
                    <Pane name='purple-rectangle' className='purplePane-purplePane'>
                        <Rectangle bounds={outer} color='purple' />
                    </Pane>
                </Pane>
            </Map>
        );
    }
}

// simple.js
export class SimpleExample extends Component<any, any> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    };

    render() {
        const position: [number, number] = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

// tooltip.js
export class TooltipExample extends Component<any, any> {
    state = {
        clicked: 0,
    };

    onClickCircle = () => {
        this.setState({ clicked: this.state.clicked + 1 });
    }

    render() {
        const center: [number, number] = [51.505, -0.09];

        const multiPolygon: Array<Array<[number, number]>> = [
            [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
            [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
        ];

        const rectangle: Array<[number, number]> = [
            [51.49, -0.08],
            [51.5, -0.06],
        ];

        const clickedText = this.state.clicked === 0
            ? 'Click this Circle to change the Tooltip text'
            : `Circle click: ${this.state.clicked}`;

        return (
            <Map center={center} zoom={13}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <Circle center={center} fillColor='blue' onclick={this.onClickCircle} radius={200}>
                    <Tooltip>
                        <span>{clickedText}</span>
                    </Tooltip>
                </Circle>
                <CircleMarker center={[51.51, -0.12]} color='red' radius={20}>
                    <Tooltip>
                        <span>Tooltip for CircleMarker</span>
                    </Tooltip>
                </CircleMarker>
                <Polygon color='purple' positions={multiPolygon}>
                    <Tooltip sticky>
                        <span>sticky Tooltip for Polygon</span>
                    </Tooltip>
                </Polygon>
                <Rectangle bounds={rectangle} color='black'>
                    <Tooltip direction='bottom' offset={[0, 20]} opacity={1} permanent>
                        <span>permanent Tooltip for Rectangle</span>
                    </Tooltip>
                </Rectangle>
            </Map>
        );
    }
}

// vector-layers.js
export class VectorLayersExample extends Component<any, any> {
    render() {
        const center: [number, number] = [51.505, -0.09];

        const polyline: Array<[number, number]> = [
            [51.505, -0.09],
            [51.51, -0.1],
            [51.51, -0.12],
        ];

        const multiPolyline: Array<Array<[number, number]>> = [
            [[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]],
            [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]],
        ];

        const polygon: Array<[number, number]> = [
            [51.515, -0.09],
            [51.52, -0.1],
            [51.52, -0.12],
        ];

        const multiPolygon: Array<Array<[number, number]>> = [
            [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
            [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
        ];

        const rectangle: Array<[number, number]> = [
            [51.49, -0.08],
            [51.5, -0.06],
        ];

        return (
            <Map center={center} zoom={13}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <Circle center={center} fillColor='blue' radius={200} />
                <CircleMarker center={[51.51, -0.12]} color='red' radius={20}>
                    <Popup>
                        <span>Popup in CircleMarker</span>
                    </Popup>
                </CircleMarker>
                <Polyline color='lime' positions={polyline} />
                <Polyline color='lime' positions={multiPolyline} />
                <Polygon color='purple' positions={polygon} />
                <Polygon color='purple' positions={multiPolygon} />
                <Rectangle bounds={rectangle} color='black' />
            </Map>
        );
    }
}

// wms-tile-layer.js
export class WMSTileLayerExample extends Component<any, any> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 5,
        bluemarble: false,
    };

    onClick = () => {
        this.setState({
            bluemarble: !this.state.bluemarble,
        });
    }

    render() {
        return (
            <Map
                center={[this.state.lat, this.state.lng]}
                zoom={this.state.zoom}
                onClick={this.onClick}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                <WMSTileLayer
                    layers={this.state.bluemarble ? 'nasa:bluemarble' : 'ne:ne'}
                    url='http://demo.opengeo.org/geoserver/ows?'
                    />
            </Map>
        );
    }
}

// zoom-control.js
const ZoomControlExample = () => (
    <Map center={[51.505, -0.09]} zoom={13} zoomControl={false}>
        <TileLayer
            attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
        <ZoomControl position='topright' />
    </Map>
);


//MapControl https://github.com/PaulLeCam/react-leaflet/issues/130
const mapControlCenter: [number, number] = [51.505, -0.09];
class CenterControl extends MapControl<MapControlProps> {  // note we're extending MapControl from react-leaflet, not Component from react
  componentWillMount() {
    const centerControl = new L.Control({position: this.props.position});  // see http://leafletjs.com/reference.html#control-positions for other positions
    const jsx = (
      // PUT YOUR JSX FOR THE COMPONENT HERE:
      <div {...this.props}>
        // add your JSX 
      </div>
    );

    centerControl.onAdd = (map) => {
      let div = L.DomUtil.create('div', '');
      ReactDOM.render(jsx, div);
      return div;
    };

    this.leafletElement = centerControl;
  }
}
const CenterControlExample = () => (
    <Map center={mapControlCenter} zoom={13}>
        <CenterControl/>
    </Map>
);

class LegendControl extends MapControl<MapControlProps & { className?: string }> {
  componentWillMount() {
    const legend = new L.Control({position: this.props.position});
    const jsx = (
      <div {...this.props}>
        {this.props.children}
      </div>
    );

    legend.onAdd = (map) => {
      let div = L.DomUtil.create('div', '');
      ReactDOM.render(jsx, div);
      return div;
    };

    this.leafletElement = legend;
  }
}

const LegendControlExample = () => (
    <Map className="map" center={mapControlCenter} zoom={13} style={{height: "300px"}}>
    <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <LegendControl className="supportLegend">
        <ul className="legend">
        <li className="legendItem1">Strong Support</li>
        <li className="legendItem2">Weak Support</li>
        <li className="legendItem3">Weak Oppose</li>
        <li className="legendItem4">Strong Oppose</li>
        </ul>
    </LegendControl>
    </Map>
);