export class Particle {
    textureIndex: number;
    scaleX: number;
    scaleY: number;
    alpha: number;
    life: number;
    age: number;
    energy: number;
    mass: number;
    x: number;
    y: number;
    r: number;
    vx: number;
    vy: number;
    ax: number;
    ay: number;
    color: number | null;
    anchorX: number;
    anchorY: number;
    reset(): void;
    update(dt: number): void;
}
