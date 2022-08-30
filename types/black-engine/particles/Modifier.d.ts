export class Modifier {
    constructor(isInitializer?: boolean);
    private mIsInitializer;
    scatter: Scatter;
    isActive: boolean;
    protected preUpdate(dt: number): void;
    protected update(emitter: Emitter, particle: Particle, dt: number): void;
    protected postUpdate(dt: number): void;
    get isInitializer(): boolean;
}
import { Scatter } from '../scatters/Scatter';
import { Emitter } from './Emitter';
import { Particle } from './Particle';
