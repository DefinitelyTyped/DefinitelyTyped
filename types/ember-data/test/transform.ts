import Ember from 'ember';
import DS from 'ember-data';

export class Point extends Ember.Object {
    x: number;
    y: number;
}

class PointTransform extends DS.Transform {
    serialize(value: Point): number[] {
        return [value.get('x'), value.get('y')];
    }
    deserialize(value: [number, number]): Point {
        return Point.create({ x: value[0], y: value[1] });
    }
}

declare module 'ember-data/types/registries/transform' {
  export default interface TransformRegistry {
    point: PointTransform;
    // This should really only contain transforms, but historically people have just put the return type directly in.
    oldPoint: Point;
  }
}
