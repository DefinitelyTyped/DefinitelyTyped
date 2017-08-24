declare const Coordinate: {
    getInsidePosition(destPos: number, range: number[], circular: boolean[], bounce?: number[]): number;
    isOutside(pos: number, range: number[]): boolean;
    getDuration(distance: number, deceleration: any): number;
    isCircularable(destPos: number, range: number[], circular: boolean[]): boolean;
    getCirculatedPos(pos: number, range: number[], circular: boolean[]): number;
};
export default Coordinate;
