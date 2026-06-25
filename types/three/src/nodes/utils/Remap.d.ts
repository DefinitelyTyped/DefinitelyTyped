import { Color } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import Node from "../core/Node.js";

type FloatOrNumber = Node<"float"> | number;
type Boolean = Node<"bool"> | boolean;

type Vec2 = Node<"vec2"> | Vector2;
type Vec3 = Node<"vec3"> | Vector3 | Node<"color"> | Color;
type Vec4 = Node<"vec4"> | Vector4;

type Vec2OrFloat = Vec2 | FloatOrNumber;
type Vec3OrFloat = Vec3 | FloatOrNumber;
type Vec4OrFloat = Vec4 | FloatOrNumber;

interface RemapFunction {
    (
        node: FloatOrNumber,
        inLowNode: FloatOrNumber,
        inHighNode: FloatOrNumber,
        outLowNode?: FloatOrNumber,
        outHighNode?: FloatOrNumber,
        doClamp?: Boolean,
    ): Node<"float">;
    (
        node: Vec2OrFloat,
        inLowNode: Vec2OrFloat,
        inHighNode: Vec2OrFloat,
        outLowNode?: Vec2OrFloat,
        outHighNode?: Vec2OrFloat,
        doClamp?: Boolean,
    ): Node<"vec2">;
    (
        node: Vec3OrFloat,
        inLowNode: Vec3OrFloat,
        inHighNode: Vec3OrFloat,
        outLowNode?: Vec3OrFloat,
        outHighNode?: Vec3OrFloat,
        doClamp?: Boolean,
    ): Node<"vec3">;
    (
        node: Vec4OrFloat,
        inLowNode: Vec4OrFloat,
        inHighNode: Vec4OrFloat,
        outLowNode?: Vec4OrFloat,
        outHighNode?: Vec4OrFloat,
        doClamp?: Boolean,
    ): Node<"vec4">;
}

export const remap: RemapFunction;

interface RemapClampFunction {
    (
        node: FloatOrNumber,
        inLowNode: FloatOrNumber,
        inHighNode: FloatOrNumber,
        outLowNode?: FloatOrNumber,
        outHighNode?: FloatOrNumber,
    ): Node<"float">;
    (
        node: Vec2OrFloat,
        inLowNode: Vec2OrFloat,
        inHighNode: Vec2OrFloat,
        outLowNode?: Vec2OrFloat,
        outHighNode?: Vec2OrFloat,
    ): Node<"vec2">;
    (
        node: Vec3OrFloat,
        inLowNode: Vec3OrFloat,
        inHighNode: Vec3OrFloat,
        outLowNode?: Vec3OrFloat,
        outHighNode?: Vec3OrFloat,
    ): Node<"vec3">;
    (
        node: Vec4OrFloat,
        inLowNode: Vec4OrFloat,
        inHighNode: Vec4OrFloat,
        outLowNode?: Vec4OrFloat,
        outHighNode?: Vec4OrFloat,
    ): Node<"vec4">;
}

export const remapClamp: RemapClampFunction;

interface RemapFloatExtension {
    (
        inLowNode: FloatOrNumber,
        inHighNode: FloatOrNumber,
        outLowNode?: FloatOrNumber,
        outHighNode?: FloatOrNumber,
        doClamp?: Boolean,
    ): Node<"float">;
    (
        inLowNode: Vec2OrFloat,
        inHighNode: Vec2OrFloat,
        outLowNode?: Vec2OrFloat,
        outHighNode?: Vec2OrFloat,
        doClamp?: Boolean,
    ): Node<"vec2">;
    (
        inLowNode: Vec3OrFloat,
        inHighNode: Vec3OrFloat,
        outLowNode?: Vec3OrFloat,
        outHighNode?: Vec3OrFloat,
        doClamp?: Boolean,
    ): Node<"vec3">;
    (
        inLowNode: Vec4OrFloat,
        inHighNode: Vec4OrFloat,
        outLowNode?: Vec4OrFloat,
        outHighNode?: Vec4OrFloat,
        doClamp?: Boolean,
    ): Node<"vec4">;
}

interface RemapClampFloatExtension {
    (
        inLowNode: FloatOrNumber,
        inHighNode: FloatOrNumber,
        outLowNode?: FloatOrNumber,
        outHighNode?: FloatOrNumber,
    ): Node<"float">;
    (
        inLowNode: Vec2OrFloat,
        inHighNode: Vec2OrFloat,
        outLowNode?: Vec2OrFloat,
        outHighNode?: Vec2OrFloat,
    ): Node<"vec2">;
    (
        inLowNode: Vec3OrFloat,
        inHighNode: Vec3OrFloat,
        outLowNode?: Vec3OrFloat,
        outHighNode?: Vec3OrFloat,
    ): Node<"vec3">;
    (
        inLowNode: Vec4OrFloat,
        inHighNode: Vec4OrFloat,
        outLowNode?: Vec4OrFloat,
        outHighNode?: Vec4OrFloat,
    ): Node<"vec4">;
}

interface RemapVec2Extension {
    (
        inLowNode: Vec2OrFloat,
        inHighNode: Vec2OrFloat,
        outLowNode?: Vec2OrFloat,
        outHighNode?: Vec2OrFloat,
        doClamp?: Boolean,
    ): Node<"vec2">;
}

interface RemapClampVec2Extension {
    (
        inLowNode: Vec2OrFloat,
        inHighNode: Vec2OrFloat,
        outLowNode?: Vec2OrFloat,
        outHighNode?: Vec2OrFloat,
    ): Node<"vec2">;
}

interface RemapVec3Extension {
    (
        inLowNode: Vec3OrFloat,
        inHighNode: Vec3OrFloat,
        outLowNode?: Vec3OrFloat,
        outHighNode?: Vec3OrFloat,
        doClamp?: Boolean,
    ): Node<"vec3">;
}

interface RemapClampVec3Extension {
    (
        inLowNode: Vec3OrFloat,
        inHighNode: Vec3OrFloat,
        outLowNode?: Vec3OrFloat,
        outHighNode?: Vec3OrFloat,
        doClamp?: Boolean,
    ): Node<"vec3">;
}

interface RemapVec4Extension {
    (
        inLowNode: Vec4OrFloat,
        inHighNode: Vec4OrFloat,
        outLowNode?: Vec4OrFloat,
        outHighNode?: Vec4OrFloat,
        doClamp?: Boolean,
    ): Node<"vec4">;
}

interface RemapClampVec4Extension {
    (
        inLowNode: Vec4OrFloat,
        inHighNode: Vec4OrFloat,
        outLowNode?: Vec4OrFloat,
        outHighNode?: Vec4OrFloat,
    ): Node<"vec4">;
}

declare module "../core/Node.js" {
    interface FloatExtensions {
        remap: RemapFloatExtension;
        remapClamp: RemapClampFloatExtension;
    }
    interface Vec2Extensions {
        remap: RemapVec2Extension;
        remapClamp: RemapClampVec2Extension;
    }
    interface Vec3Extensions {
        remap: RemapVec3Extension;
        remapClamp: RemapClampVec3Extension;
    }
    interface Vec4Extensions {
        remap: RemapVec4Extension;
        remapClamp: RemapClampVec4Extension;
    }
}

export {};
