import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import * as L from 'leaflet';
import { Component } from 'react';
import {
    Children,
    Circle,
    CircleMarker,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    Map,
    MapControl,
    MapControlProps,
    MapProps,
    Marker,
    MarkerProps,
    Path,
    Pane,
    Polygon,
    PolygonProps,
    Polyline,
    Popup,
    PopupProps,
    Rectangle,
    TileLayer,
    SVGOverlay,
    Tooltip,
    WMSTileLayer,
    ZoomControl,
    LeafletProvider,
    withLeaflet,
    Viewport,
    useLeaflet,
} from 'react-leaflet';
const { BaseLayer, Overlay } = LayersControl;

/// animate.js
interface AnimateExampleState {
    animate: boolean;
    hasLocation: boolean;
    latlng: L.LatLngExpression;
}

export class AnimateExample extends Component<undefined, AnimateExampleState> {
    state = {
        animate: false,
        hasLocation: false,
        latlng: {
            lat: 51.505,
            lng: -0.09,
        },
    };

    handleClick = (e: L.LeafletMouseEvent) => {
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
                    <input
                        checked={this.state.animate}
                        onChange={this.toggleAnimate}
                        type='checkbox'
                    />
                    Animate panning
                </label>
                <Map
                    animate={this.state.animate}
                    center={this.state.latlng}
                    // length={4} -- unimplemented; What component in the inheritance chain defines this property?
                    onclick={this.handleClick}
                    ref="map"
                    zoom={13}
                >
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
const outer: L.LatLngBoundsLiteral = [
    [50.505, -29.09],
    [52.505, 29.09],
];
const inner: L.LatLngBoundsLiteral = [
    [49.505, -2.09],
    [53.505, 2.09],
];

interface BoundsExampleState {
    bounds: L.LatLngBoundsLiteral;
}

export class BoundsExample extends Component<undefined, BoundsExampleState> {
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
interface MyPopupMarkerProps {
    children: Children;
    position: L.LatLngExpression;
}

interface MyMarker extends MyPopupMarkerProps {
    key: string;
}

const MyPopupMarker = ({ children, position }: MyPopupMarkerProps) => (
    <Marker position={position}>
        <Popup>
            <span>{children}</span>
        </Popup>
    </Marker>
);

interface MyMarkersListProps {
    markers: MyMarker[];
}

const MyMarkersList = ({ markers }: MyMarkersListProps) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ));
    return <div style={{ display: 'none' }}>{items}</div>;
};

interface CustomComponentState {
    lat: number;
    lng: number;
    zoom: number;
}

export class CustomComponent extends Component<undefined, CustomComponentState> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    };

    render() {
        const center: L.LatLngExpression = [this.state.lat, this.state.lng];

        const markers: MyMarker[] = [
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

// Similar to custom-icons.js
export class MarkerWithDivIconExample extends Component<undefined, undefined> {
    render() {
        return (
            <Map>
                <Marker position={[0, 0]} icon={
                    new L.DivIcon({})
                } />
            </Map>
        );
    }
}

// draggable-marker.js
interface DraggableExampleState {
    center: L.LatLngLiteral;
    marker: L.LatLngLiteral;
    zoom: number;
    draggable: boolean;
}

export class DraggableExample extends Component<undefined, DraggableExampleState> {
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
        const {
            lat,
            lng,
        } = (this.refs.marker as Marker).leafletElement.getLatLng();
        this.setState({
            marker: { lat, lng },
        });
    }

    render() {
        const position: L.LatLngExpression = [this.state.center.lat, this.state.center.lng];
        const markerPosition: L.LatLngExpression = [this.state.marker.lat, this.state.marker.lng];

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
                    ref='marker'
                >
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
interface EventsExampleState {
    hasLocation: boolean;
    latlng: L.LatLngLiteral;
}

export class EventsExample extends Component<undefined, EventsExampleState> {
    state = {
        hasLocation: false,
        latlng: {
            lat: 51.505,
            lng: -0.09,
        },
    };

    handleClick = () => {
        (this.refs.map as Map).leafletElement.locate();
    }

    handleLocationFound = (e: L.LocationEvent) => {
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
                // length={4} -- unimplemented; What component in the inheritance chain defines this property?
                onclick={this.handleClick}
                // NB: lowercase prop for Leaflet event handler
                onlocationfound={this.handleLocationFound}
                ref="map"
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
export class LayersControlExample extends Component<undefined, undefined> {
    render() {
        const center: L.LatLngExpression = [51.505, -0.09];
        const rectangle: L.LatLngBoundsExpression = [
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
export class OtherLayersExample extends Component<undefined, undefined> {
    render() {
        const center: L.LatLngExpression = [51.505, -0.09];
        const rectangle: L.LatLngBoundsExpression = [
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
interface PaneExampleState {
    render: boolean;
}

export class PaneExample extends Component<undefined, PaneExampleState> {
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
interface SimpleExampleState {
    lat: number;
    lng: number;
    zoom: number;
}

export class SimpleExample extends Component<undefined, SimpleExampleState> {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    };

    render() {
        const position: L.LatLngExpression = [this.state.lat, this.state.lng];
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

// svg-overlay.js
export default class SVGOverlayExample extends Component {
  render() {
    return (
      <Map center={[51.505, -0.09]} zoom={13}>
        <SVGOverlay bounds={[[51.49, -0.08], [51.5, -0.06]]}>
          <rect x="0" y="0" width="100%" height="100%" fill="blue" />
          <circle r="5" cx="10" cy="10" fill="red" />
          <text x="50%" y="50%" fill="white">
            text
          </text>
        </SVGOverlay>
      </Map>
    );
  }
}

// tooltip.js
interface TooltipExampleState {
    clicked: number;
}

export class TooltipExample extends Component<undefined, TooltipExampleState> {
    state = {
        clicked: 0,
    };

    onClickCircle = () => {
        this.setState({ clicked: this.state.clicked + 1 });
    }

    render() {
        const center: L.LatLngExpression = [51.505, -0.09];

        const multiPolygon: L.LatLngExpression[][] = [
            [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
            [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
        ];

        const rectangle: L.LatLngBoundsExpression = [
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
                <Circle
                    center={center}
                    fillColor='blue'
                    onclick={this.onClickCircle}
                    radius={200}
                >
                    <Tooltip>
                        <span>{clickedText}</span>
                    </Tooltip>
                </Circle>
                <CircleMarker center={[51.51, -0.12]} color='red' radius={20}>
                    <Tooltip>
                        <span>Tooltip for CircleMarker</span>
                    </Tooltip>
                </CircleMarker>
                <Marker position={[51.510, -0.09]}>
                    <Popup>
                        <span>Popup for Marker</span>
                    </Popup>
                    <Tooltip>
                        <span>Tooltip for Marker</span>
                    </Tooltip>
                </Marker>
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
export class VectorLayersExample extends Component<undefined, undefined> {
    render() {
        const center: L.LatLngExpression = [51.505, -0.09];

        const polyline: L.LatLngExpression[] = [
            [51.505, -0.09],
            [51.51, -0.1],
            [51.51, -0.12],
        ];

        const multiPolyline: L.LatLngExpression[][] = [
            [[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]],
            [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]],
        ];

        const polygon: L.LatLngExpression[] = [
            [51.515, -0.09],
            [51.52, -0.1],
            [51.52, -0.12],
        ];

        const multiPolygon: L.LatLngExpression[][] = [
            [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
            [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
        ];

        const rectangle: L.LatLngBoundsExpression = [
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

// viewport.js
const DEFAULT_VIEWPORT: Viewport = {
    center: [51.505, -0.09],
    zoom: 13,
};

interface ViewportExampleState {
    viewport: Viewport;
}

class ViewportExample extends Component<undefined, ViewportExampleState> {
    state = {
        viewport: DEFAULT_VIEWPORT,
    };

    onClickReset = () => {
        this.setState({ viewport: DEFAULT_VIEWPORT });
    }

    onViewportChanged = (viewport: Viewport) => {
        this.setState({ viewport });
    }

    render() {
        return (
            <Map
                onClick={this.onClickReset}
                onViewportChanged={this.onViewportChanged}
                viewport={this.state.viewport}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        );
    }
}

// wms-tile-layer.js
interface WMSTileLayerExampleState {
    lat: number;
    lng: number;
    zoom: number;
    bluemarble: boolean;
}

export class WMSTileLayerExample extends Component<undefined, WMSTileLayerExampleState> {
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
                onclick={this.onClick}
            >
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

// MapControl https://github.com/PaulLeCam/react-leaflet/issues/130
class CenterControl extends MapControl {  // note we're extending MapControl from react-leaflet, not Component from react
    componentWillMount() {
        const centerControl = new L.Control({ position: 'bottomright' });  // see http://leafletjs.com/reference.html#control-positions for other positions
        const jsx = (
            // PUT YOUR JSX FOR THE COMPONENT HERE:
            <div>
                {/* add your JSX */}
            </div>
        );

        centerControl.onAdd = (map) => {
            const div = L.DomUtil.create('div', '');
            ReactDOM.render(jsx, div);
            return div;
        };

        this.leafletElement = centerControl;
    }
}

const mapControlCenter: L.LatLngExpression = [51.505, -0.09];

const CenterControlExample = () => (
    <Map center={mapControlCenter} zoom={13}>
        <CenterControl />
    </Map>
);

class LegendControl extends MapControl<MapControlProps & { className?: string }> {
    componentWillMount() {
        const legend = new L.Control({ position: 'bottomright' });
        const jsx = (
            <div>
                {this.props.children}
            </div>
        );

        legend.onAdd = (map) => {
            const div = L.DomUtil.create('div', '');
            ReactDOM.render(jsx, div);
            return div;
        };

        this.leafletElement = legend;
    }
}

const legendControlComponent = withLeaflet<MapControlProps>(LegendControl);

const LegendControlExample = () => (
    <Map className="map" center={mapControlCenter} zoom={13} style={{ height: "300px" }}>
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

class CustomPolygon extends Path<PolygonProps, L.Polygon> {
    createLeafletElement(props: PolygonProps) {
        const el = new L.Polygon(props.positions, this.getOptions(props));
        this.contextValue = { ...props.leaflet, popupContainer: el };
        return el;
    }

    updateLeafletElement(fromProps: PolygonProps, toProps: PolygonProps) {
        if (toProps.positions !== fromProps.positions) {
            this.leafletElement.setLatLngs(toProps.positions);
        }
        this.setStyleIfChanged(fromProps, toProps);
    }

    render() {
        const { children } = this.props;
        return children == null || this.contextValue == null ? null : (
            <LeafletProvider value={this.contextValue}>{children}</LeafletProvider>
        );
    }
}
const leafletComponent = withLeaflet<PolygonProps>(CustomPolygon);

// $ExpectType LeafletContext
useLeaflet();
