import * as React from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

const Map = () => (
    <ComposableMap
        projectionConfig={{ rotate: [-11, 0, 0], scale: 205 }}
        height={551}
        style={{ height: 'auto', width: '100%' }}
        width={980}
    >
        <ZoomableGroup
            center={[0, 20]}
            disablePanning={true}
            filterZoomEvent={(event: any) => event.type === 'wheel'}
            onMoveStart={({ coordinates, zoom }, event) => {
                coordinates; // $ExpectType [number, number]
                zoom; // $ExpectType number
                event; // $ExpectType D3ZoomEvent<SVGElement, any>
            }}
            onMove={({ x, y, zoom, dragging }, event) => {
                x; // $ExpectType number
                y; // $ExpectType number
                zoom; // $ExpectType number
                dragging; // $ExpectType WheelEvent
                event; // $ExpectType D3ZoomEvent<SVGElement, any>
            }}
            onMoveEnd={({ coordinates, zoom }, event) => {
                coordinates; // $ExpectType [number, number]
                zoom; // $ExpectType number
                event; // $ExpectType D3ZoomEvent<SVGElement, any>
            }}
        >
            <Geographies geography="/worldmap.json">
                {({ geographies }) =>
                    geographies.map((geography, index) => (
                        <Geography
                            key={index}
                            geography={geography}
                            style={{
                                default: {
                                    fill: '#ECEFF1',
                                    outline: 'none',
                                    stroke: '#607D8B',
                                    strokeWidth: 0.75,
                                },
                                hover: {
                                    fill: '#607D8B',
                                    outline: 'none',
                                    stroke: '#607D8B',
                                    strokeWidth: 0.75,
                                },
                                pressed: {
                                    fill: '#607D8B',
                                    outline: 'none',
                                    stroke: '#607D8B',
                                    strokeWidth: 0.75,
                                },
                            }}
                        />
                    ))
                }
            </Geographies>
            <Marker coordinates={[1, 1]}>
                <circle cx={0} cy={0} r={5} style={{ fill: '#D13913' }} />
            </Marker>
        </ZoomableGroup>
    </ComposableMap>
);
