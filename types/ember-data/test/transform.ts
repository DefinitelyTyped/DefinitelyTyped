import { assert } from "@ember/debug";
import Ember from "ember";
import DS from "ember-data";

export class Point extends Ember.Object {
    x: number;
    y: number;
}

class PointTransform extends DS.Transform {
    serialize(value: Point): number[] {
        return [value.get("x"), value.get("y")];
    }
    deserialize(value: [number, number]): Point {
        return Point.create({ x: value[0], y: value[1] });
    }
}

class EnumTransform extends DS.Transform {
    deserialize<T>(
        serialized: any,
        options: { allowedValues: Record<string, T> },
    ): T {
        const { allowedValues } = options;
        const allowedValuesArr = Object.keys(allowedValues).map((key) => allowedValues[key]);

        assert(
            `Value "${serialized}" must be one of "${allowedValuesArr.join(", ")}"`,
            allowedValuesArr.indexOf(serialized) >= 0,
        );

        return serialized;
    }

    serialize<T>(
        deserialized: T,
        options: { allowedValues: Record<string, T> },
    ) {
        const { allowedValues } = options;
        const allowedValuesArr = Object.keys(allowedValues).map((key) => allowedValues[key]);

        assert(
            `Value "${deserialized}" must be one of "${allowedValuesArr.join(", ")}"`,
            allowedValuesArr.indexOf(deserialized) >= 0,
        );

        return deserialized;
    }
}

declare module "ember-data/types/registries/transform" {
    export default interface TransformRegistry {
        enum: EnumTransform;
        point: PointTransform;
        // This should really only contain transforms, but historically people have just put the return type directly in.
        oldPoint: Point;
    }
}
