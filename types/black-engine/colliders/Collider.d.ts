export class Collider extends Component {
    private mChanged;
    private mCenter;
    private mMin;
    private mMax;
    containsPoint(point: Vector): boolean;
    refresh(transform: Matrix, position: Vector): void;
}
import { Component } from "../core/Component";
import { Matrix } from "../geom/Matrix";
import { Vector } from "../geom/Vector";
