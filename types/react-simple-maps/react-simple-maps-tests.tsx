import * as React from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, MapContext } from "react-simple-maps";

const cities: { name: string, coordinates: [number, number] }[] = [
    { name: "New York", coordinates: [-74.006, 40.7128] },
    { name: "Paris", coordinates: [2.3522, 48.8566] },
    { name: "Singapore", coordinates: [103.8198, 1.3521] }
];

const Map = () => {
    const { projection } = React.useContext(MapContext);
    const line = cities
      .map((city, i) => {
        const [x, y] = projection(city.coordinates);
        return !i ? `M${x},${y}` : `L${x},${y}`;
      })
      .join(' ');

    return (
        <ComposableMap
            projectionConfig={{ rotate: [-11, 0, 0], scale: 205 }}
            height={551}
            style={{ height: "auto", width: "100%" }}
            width={980}
        >
            <ZoomableGroup
                center={[0, 20]}
                disablePanning={true}
                filterZoomEvent={(event: any) => event.type === "wheel"}
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
                                        fill: "#ECEFF1",
                                        outline: "none",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                    },
                                    hover: {
                                        fill: "#607D8B",
                                        outline: "none",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                    },
                                    pressed: {
                                        fill: "#607D8B",
                                        outline: "none",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                    },
                                }}
                            />
                        ))}
                </Geographies>
                <Marker coordinates={[1, 1]}>
                    <circle cx={0} cy={0} r={5} style={{ fill: "#D13913" }} />
                </Marker>

                <path d={line} fill="none" stroke="#F00" strokeWidth={3} />
            </ZoomableGroup>
        </ComposableMap>
    )
};
