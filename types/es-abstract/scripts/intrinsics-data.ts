import {
    BASE_INTRINSIC_DATA as baseIntrinsicData,
    BASE_INTRINSICS as baseIntrinsics,
    Intrinsic,
    Override,
} from "../../get-intrinsic/scripts/intrinsics-data";
export * from "../../get-intrinsic/scripts/intrinsics-data";

// prettier-ignore
const propertyIsEnumerable: (target: object, property: PropertyKey) => boolean = Function.prototype.call.bind(
    Object.prototype.propertyIsEnumerable,
);

function omitFrom<T extends object, P extends PropertyKey>(src: T, props: readonly P[]): Omit<T, P> {
    const dest = Object.create(null);
    for (const key of Reflect.ownKeys(src)) {
        if (props.includes(key as any)) {
            continue;
        }

        const desc = Reflect.getOwnPropertyDescriptor(src, key);
        if (desc?.enumerable === true) {
            Object.defineProperty(dest, key, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: src[key as keyof T],
            });
        }
    }
    return dest;
}

// prettier-ignore
export const BASE_INTRINSICS: typeof baseIntrinsics = omitFrom(baseIntrinsics, [
    "%AggregateError%",
    "%BigInt%",
    "%BigInt64Array%",
    "%BigUint64Array%",
]);

export const BASE_INTRINSIC_DATA: { [intrinsic: string]: string | Intrinsic } = {
    __proto__: null!,
    ...baseIntrinsicData,
    Promise: {
        ...(baseIntrinsicData.Promise as Intrinsic),
        overrides: {
            ...(baseIntrinsicData.Promise as Intrinsic).overrides,
            // `%Promise.prototype.any%` is only supported from TypeScript 3.9:
            any: null,
        },
    },
    String: {
        ...(baseIntrinsicData.String as Intrinsic),
        overrides: {
            prototype: {
                overrides: {
                    // `%String.prototype.replaceAll%` is only supported from TypeScript 3.9:
                    replaceAll: null,
                },
            },
        },
    },
    TypedArray: {
        ...(baseIntrinsicData.TypedArray as Intrinsic),
        overrides: {
            ...(baseIntrinsicData.TypedArray as Intrinsic).overrides,
            prototype: {
                ...((baseIntrinsicData.TypedArray as Intrinsic).overrides?.prototype as Override),
                getterType: "TypedArray",
            },
        },
    },
};
