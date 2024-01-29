import * as React from "react";
import { CirclePosition } from "react-circular";

function ReactCircularTests() {
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];

    return (
        <svg height="400" width="400" viewBox="0 0 400 400">
            {angles.map(angle => (
                <CirclePosition angle={angle} radius={200} adjust={-5}>
                    {({ x, y }: { x: number; y: number }) => <circle cx={x} cy={y} r="5" />}
                </CirclePosition>
            ))}
        </svg>
    );
}
