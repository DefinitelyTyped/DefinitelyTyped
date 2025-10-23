import React = require("react");

export interface ReactCompassProps {
    direction: number;
    directionNames?: string[] | undefined;
}

export function directionName(dir: number): string;
export function normalizeAngle(direction: number): number;

export class ReactCompass extends React.Component<ReactCompassProps, any> {}
export default ReactCompass;
