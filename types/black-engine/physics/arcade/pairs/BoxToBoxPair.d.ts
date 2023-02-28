export class BoxToBoxPair extends Pair {
    static get pool(): any;
    private mProjections;
    set(a: BoxCollider, b: BoxCollider, bodyA: RigidBody, bodyB: RigidBody): Pair;
    private __refreshProjectionsRanges;
}
import { BoxCollider } from '../../../colliders/BoxCollider';
import { RigidBody } from '../../../physics/RigidBody';
import { Pair } from './Pair';
