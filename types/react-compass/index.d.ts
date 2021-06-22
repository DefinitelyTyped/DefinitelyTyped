// Type definitions for react-compass 0.1
// Project: https://github.com/virtyaluk/react-compass
// Definitions by: Rick Wilson <https://github.com/rwilson504>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface ReactCompassProps {
    direction: number;
    directionNames?: string[];
}

export function directionName(dir: number): string;
export function normalizeAngle(direction: number): number;

export class ReactCompass extends React.Component<ReactCompassProps, any> {}
export default ReactCompass;
