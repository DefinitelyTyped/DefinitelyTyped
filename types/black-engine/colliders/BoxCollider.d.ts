export class BoxCollider extends Collider {
    constructor(x: number, y: number, width: number, height: number);
    private mRect;
    private mNormals;
    private mVertices;
    private mLocalMin;
    private mLocalMax;
    private mLocalCenter;
    set(x: number, y: number, width: number, height: number): BoxCollider;
    refresh(transform: any, position: any): void;
}
import { Collider } from './Collider';
