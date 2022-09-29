export class BoxToCirclePair extends Pair {
    static get pool(): any;
    private mBoxHalfWidth;
    private mBoxHalfHeight;
    private mBoxRotate;
    private mCircleCenter;
    set(a: BoxCollider, b: CircleCollider, bodyA: RigidBody, bodyB: RigidBody): Pair;
    private __rotate;
}
import { BoxCollider } from '../../../colliders/BoxCollider';
import { CircleCollider } from '../../../colliders/CircleCollider';
import { RigidBody } from '../../../physics/RigidBody';
import { Pair } from './Pair';
