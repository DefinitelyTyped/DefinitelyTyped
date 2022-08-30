// Type definitions for react-native-sensor-manager 0.1
// Project: https://github.com/kprimice/react-native-sensor-manager
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react-native" />

export * from 'react-native'

interface SensorManager {
    startAccelerometer(delay: number): void;
    stopAccelerometer(): void;
    startGyroscope(delay: number): void;
    stopGyroscope(): void;
    startMagnetometer(delay: number): void;
    stopMagnetometer(): void;
    startStepCounter(delay: number): void;
    stopStepCounter(): void;
    startThermometer(delay: number): void;
    stopThermometer(): void;
    startMotionValue(delay: number): void;
    stopMotionValue(): void;
    startOrientation(delay: number): void;
    stopOrientation(): void;
    startProximity(delay: number): void;
    stopProximity(): void;
    startLightSensor(delay: number): void;
    stopLightSensor(): void;
}

declare module 'react-native' {
    export interface DeviceEventEmitterStatic {
        addListener(event: 'Accelerometer' | 'Gyroscope' | 'Magnetometer', callback: (data: {x: number, y: number, z: number}) => void): EmitterSubscription;
        addListener(event: 'Orientation', callback: (data: {azimuth: number, pitch: number, roll: number}) => void): EmitterSubscription;
        addListener(event: 'StepCounter', callback: (data: {steps: number}) => void): EmitterSubscription;
        addListener(event: 'Thermometer', callback: (data: {temp: number}) => void): EmitterSubscription;
        addListener(event: 'LightSensor', callback: (data: {light: number}) => void): EmitterSubscription;
        addListener(event: 'Proximity', callback: (data: {isNear: boolean, value: number, maxRange: number}) => void): EmitterSubscription ;
    }

    export interface NativeModulesStatic {
        SensorManager: SensorManager
    }
}
