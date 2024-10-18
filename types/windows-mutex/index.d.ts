export class Mutex {
    constructor(name: string);
    isActive(): boolean;
    release(): void;
}

export function isActive(name: string): boolean;
