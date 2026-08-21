declare namespace AMap {
    namespace Lights {
        class AmbientLight {
            constructor(color: [number, number, number], intensity: number);
            setColor(color: [number, number, number]): void;
            setIntensity(intensity: number): void;
        }

        class DirectionLight {
            constructor(direction: [number, number, number], color: [number, number, number], intensity: number);
            update(): void;
            setDirection(direction: [number, number, number]): void;
            setColor(direction: [number, number, number]): void;
            setIntensity(intensity: number): void;
        }
    }
}
