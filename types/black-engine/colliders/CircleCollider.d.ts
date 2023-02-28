export class CircleCollider extends Collider {
    constructor(x: number, y: number, radius: number);
    private mCircle;
    private mLocalCenter;
    private mLocalMin;
    private mLocalMax;
    private mRadius;
    set(x: number, y: number, radius: number): CircleCollider;
    refresh(transform: any, position: any): void;
}
import { Collider } from './Collider';
