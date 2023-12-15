declare namespace speedometer {
    type Speedometer = (delta: number) => number;
}
declare function speedometer(bufferTime?: number): speedometer.Speedometer;

export = speedometer;
