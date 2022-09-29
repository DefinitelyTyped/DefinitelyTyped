export class CircleToCirclePair extends Pair {
    static get pool(): any;
    set(a: CircleCollider, b: CircleCollider, bodyA: RigidBody, bodyB: RigidBody): Pair;
}
import { CircleCollider } from '../../../colliders/CircleCollider';
import { RigidBody } from '../../../physics/RigidBody';
import { Pair } from './Pair';
