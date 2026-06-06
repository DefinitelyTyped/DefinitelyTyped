// JSBox Motion API TypeScript Declaration

declare namespace MotionTypes {
    interface MotionData {
        attitude: {
            yaw: number;
            quaternion: {
                y: number;
                w: number;
                z: number;
                x: number;
            };
            rotationMatrix: {
                m31: number;
                m21: number;
                m11: number;
                m33: number;
                m23: number;
                m13: number;
                m32: number;
                m22: number;
                m12: number;
            };
            pitch: number;
            roll: number;
        };
        magneticField: {
            field: {
                x: number;
                y: number;
                z: number;
            };
            accuracy: number;
        };
        rotationRate: {
            x: number;
            y: number;
            z: number;
        };
        acceleration: {
            x: number;
            y: number;
            z: number;
        };
        gravity: {
            x: number;
            y: number;
            z: number;
        };
    }
}

interface JBMotion {
    startUpdates(options: { interval: number; handler: (resp: MotionTypes.MotionData) => void }): void;
    stopUpdates(): void;
}

declare const $motion: JBMotion;
