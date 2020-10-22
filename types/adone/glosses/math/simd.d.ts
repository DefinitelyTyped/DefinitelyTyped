// based on https://github.com/ConquestArrow/simd.d.ts

declare namespace adone.math {
    /**
     * ES7 (proposed) SIMD numeric type polyfill
     */
    namespace simd {
        namespace I {
            type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray
                | Int16Array | Uint16Array
                | Int32Array | Uint32Array
                | Float32Array | Float64Array;

            /**
             * 128-bits divided into 4 lanes storing single precision floating point values.
             */
            interface Float32x4 {
                constructor: Float32x4Constructor;
                valueOf(): Float32x4;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Float32x4".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Float32x4;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Float32x4Constructor {
                /**
                 * SIMD.Float32x4 constructor
                 * @param s0 A 32bit float specifying the value of the lane.
                 * @param s1 A 32bit float specifying the value of the lane.
                 * @param s2 A 32bit float specifying the value of the lane.
                 * @param s3 A 32bit float specifying the value of the lane.
                 * @return SIMD.Float32x4 object
                 */
                (s0?: number, s1?: number, s2?: number, s3?: number): Float32x4;

                prototype: Float32x4;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Float32x4, lane: number): number;

                /**
                 * Returns a new instance with the lane values swizzled.
                 */
                swizzle(a: Float32x4, l1: number, l2: number, l3: number, l4: number): Float32x4;

                /**
                 * Returns a new instance with the lane values shuffled.
                 */
                shuffle(a: Float32x4, b: Float32x4, l1: number, l2: number, l3: number, l4: number): Float32x4;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Float32x4. Throws a TypeError otherwise.
                 */
                check(a: Float32x4): Float32x4;

                /**
                 * Creates a new SIMD.Float32x4 data type with all lanes set to a given value.
                 */
                splat(n: number): Float32x4;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Float32x4, lane: number, value: number): Float32x4;

                /**
                 * Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.
                 * @param selector the selector mask.
                 * @param a If the selector mask lane is `true`, pick the corresponding lane value from here.
                 * @param b If the selector mask lane is `false`, pick the corresponding lane value from here.
                 */
                select(selector: Bool32x4, a: Float32x4, b: Float32x4): Float32x4;

                equal(a: Float32x4, b: Float32x4): Bool32x4;

                notEqual(a: Float32x4, b: Float32x4): Bool32x4;

                lessThan(a: Float32x4, b: Float32x4): Bool32x4;

                lessThanOrEqual(a: Float32x4, b: Float32x4): Bool32x4;

                greaterThan(a: Float32x4, b: Float32x4): Bool32x4;

                greaterThanOrEqual(a: Float32x4, b: Float32x4): Bool32x4;

                add(a: Float32x4, b: Float32x4): Float32x4;

                sub(a: Float32x4, b: Float32x4): Float32x4;

                mul(a: Float32x4, b: Float32x4): Float32x4;

                div(a: Float32x4, b: Float32x4): Float32x4;

                neg(a: Float32x4): Float32x4;

                abs(a: Float32x4): Float32x4;

                min(a: Float32x4, b: Float32x4): Float32x4;

                max(a: Float32x4, b: Float32x4): Float32x4;

                minNum(a: Float32x4, b: Float32x4): Float32x4;

                maxNum(a: Float32x4, b: Float32x4): Float32x4;

                reciprocalApproximation(a: Float32x4, b: Float32x4): Float32x4;

                reciprocalSqrtApproximation(a: Float32x4): Float32x4;

                sqrt(a: Float32x4): Float32x4;

                /**
                 * Returns a new instance with all lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load(tarray: TypedArray, index: number): Float32x4;

                /**
                 * Returns a new instance with 1 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load1(tarray: TypedArray, index: number): Float32x4;

                /**
                 * Returns a new instance with 2 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load2(tarray: TypedArray, index: number): Float32x4;

                /**
                 * Returns a new instance with 3 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load3(tarray: TypedArray, index: number): Float32x4;

                /**
                 * Store all values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store(tarray: TypedArray, index: number, value: Float32x4): Float32x4;

                /**
                 * Store 1 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store1(tarray: TypedArray, index: number, value: Float32x4): Float32x4;

                /**
                 * Store 2 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store2(tarray: TypedArray, index: number, value: Float32x4): Float32x4;

                /**
                 * Store 3 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store3(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: Float32x4): Float32x4;

                /**
                 * Creates a new SIMD data type with a float conversion from a Int32x4.
                 * @param value An Int32x4 SIMD type to convert from.
                 */
                fromInt32x4(value: Int32x4): Float32x4;

                /**
                 * Creates a new SIMD data type with a float conversion from a Uint32x4.
                 * @param value An Uint32x4 SIMD type to convert from.
                 */
                fromUint32x4(value: Uint32x4): Float32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int32x4.
                 * @param value A Int32x4 SIMD type to convert from (bitwise).
                 */
                fromInt32x4Bits(value: Int32x4): Float32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int16x8.
                 * @param value A Int16x8 SIMD type to convert from (bitwise).
                 */
                fromInt16x8Bits(value: Int16x8): Float32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int8x16.
                 * @param value A Int8x16 SIMD type to convert from (bitwise).
                 */
                fromInt8x16Bits(value: Int8x16): Float32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint32x4.
                 * @param value A Uint32x4 SIMD type to convert from (bitwise).
                 */
                fromUint32x4Bits(value: Uint32x4): Float32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint16x8.
                 * @param value A Uint16x8 SIMD type to convert from (bitwise).
                 */
                fromUint16x8Bits(value: Uint16x8): Float32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint8x16.
                 * @param value A Uint8x16 SIMD type to convert from (bitwise).
                 */
                fromUint8x16Bits(value: Uint8x16): Float32x4;
            }

            /**
             * 128-bits divided into 4 lanes storing 32-bit signed integer values.
             */
            interface Int32x4 {
                constructor: Int32x4Constructor;
                valueOf(): Int32x4;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Int32x4".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Int32x4;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Int32x4Constructor {
                /**
                 * SIMD.Int32x4 constructor
                 * @param s0 A 32bit int specifying the value of the lane.
                 * @param s1 A 32bit int specifying the value of the lane.
                 * @param s2 A 32bit int specifying the value of the lane.
                 * @param s3 A 32bit int specifying the value of the lane.
                 * @return SIMD.Int32x4 object
                 */
                (s0?: number, s1?: number, s2?: number, s3?: number): Int32x4;

                prototype: Int32x4;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Int32x4, lane: number): number;

                /**
                 * Returns a new instance with the lane values swizzled.
                 */
                swizzle(a: Int32x4, l1: number, l2: number, l3: number, l4: number): Int32x4;

                /**
                 * Returns a new instance with the lane values shuffled.
                 */
                shuffle(a: Int32x4, b: Int32x4, l1: number, l2: number, l3: number, l4: number): Int32x4;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Int32x4. Throws a TypeError otherwise.
                 */
                check(a: Int32x4): Int32x4;

                /**
                 * Creates a new SIMD.Int32x4 data type with all lanes set to a given value.
                 */
                splat(n: number): Int32x4;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Int32x4, lane: number, value: number): Int32x4;

                /**
                 * Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.
                 * @param selector the selector mask.
                 * @param a If the selector mask lane is `true`, pick the corresponding lane value from here.
                 * @param b If the selector mask lane is `false`, pick the corresponding lane value from here.
                 */
                select(selector: Bool32x4, a: Int32x4, b: Int32x4): Int32x4;

                equal(a: Int32x4, b: Int32x4): Bool32x4;

                notEqual(a: Int32x4, b: Int32x4): Bool32x4;

                lessThan(a: Int32x4, b: Int32x4): Bool32x4;

                lessThanOrEqual(a: Int32x4, b: Int32x4): Bool32x4;

                greaterThan(a: Int32x4, b: Int32x4): Bool32x4;

                greaterThanOrEqual(a: Int32x4, b: Int32x4): Bool32x4;

                and(a: Int32x4, b: Int32x4): Int32x4;

                or(a: Int32x4, b: Int32x4): Int32x4;

                xor(a: Int32x4, b: Int32x4): Int32x4;

                not(a: Int32x4, b: Int32x4): Int32x4;

                add(a: Int32x4, b: Int32x4): Int32x4;

                sub(a: Int32x4, b: Int32x4): Int32x4;

                mul(a: Int32x4, b: Int32x4): Int32x4;

                neg(a: Int32x4): Int32x4;

                /**
                 * Returns a new instance with the lane values shifted left by a given bit count (`a << bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted left by a given bit count (`a << bits`).
                 */
                shiftLeftByScalar(a: Int32x4, bits: number): Int32x4;

                /**
                 * Returns a new instance with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 */
                shiftRightByScalar(a: Int32x4, bits: number): Int32x4;

                /**
                 * Returns a new instance with all lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load(tarray: TypedArray, index: number): Int32x4;

                /**
                 * Returns a new instance with 1 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load1(tarray: TypedArray, index: number): Int32x4;

                /**
                 * Returns a new instance with 2 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load2(tarray: TypedArray, index: number): Int32x4;

                /**
                 * Returns a new instance with 3 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load3(tarray: TypedArray, index: number): Int32x4;

                /**
                 * Store all values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store(tarray: TypedArray, index: number, value: Int32x4): Int32x4;

                /**
                 * Store 1 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store1(tarray: TypedArray, index: number, value: Int32x4): Int32x4;

                /**
                 * Store 2 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store2(tarray: TypedArray, index: number, value: Int32x4): Int32x4;

                /**
                 * Store 3 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store3(tarray: TypedArray, index: number, value: Int32x4): Int32x4;

                /**
                 * Creates a new SIMD data type with a float conversion from a Float32x4.
                 * @param value An Float32x4 SIMD type to convert from.
                 */
                fromFloat32x4(value: Float32x4): Int32x4;

                /**
                 * Creates a new SIMD data type with a float conversion from a Uint32x4.
                 * @param value An Uint32x4 SIMD type to convert from.
                 */
                fromUint32x4(value: Uint32x4): Int32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Float32x4.
                 * @param value A Float32x4 SIMD type to convert from (bitwise).
                 */
                fromFloat32x4Bits(value: Float32x4): Int32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int16x8.
                 * @param value A Int16x8 SIMD type to convert from (bitwise).
                 */
                fromInt16x8Bits(value: Int16x8): Int32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int8x16.
                 * @param value A Int8x16 SIMD type to convert from (bitwise).
                 */
                fromInt8x16Bits(value: Int8x16): Int32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint32x4.
                 * @param value A Uint32x4 SIMD type to convert from (bitwise).
                 */
                fromUint32x4Bits(value: Uint32x4): Int32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint16x8.
                 * @param value A Uint16x8 SIMD type to convert from (bitwise).
                 */
                fromUint16x8Bits(value: Uint16x8): Int32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint8x16.
                 * @param value A Uint8x16 SIMD type to convert from (bitwise).
                 */
                fromUint8x16Bits(value: Uint8x16): Int32x4;
            }

            /**
             * 128-bits divided into 8 lanes storing 16-bit signed integer values.
             */
            interface Int16x8 {
                constructor: Int16x8Constructor;
                valueOf(): Int16x8;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Int16x8".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Int16x8;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Int16x8Constructor {
                /**
                 * SIMD.Int16x8 constructor
                 * @param s0 A 16bit int specifying the value of the lane.
                 * @param s1 A 16bit int specifying the value of the lane.
                 * @param s2 A 16bit int specifying the value of the lane.
                 * @param s3 A 16bit int specifying the value of the lane.
                 * @param s4 A 16bit int specifying the value of the lane.
                 * @param s5 A 16bit int specifying the value of the lane.
                 * @param s6 A 16bit int specifying the value of the lane.
                 * @param s7 A 16bit int specifying the value of the lane.
                 * @return SIMD.Int16x8 object
                 */
                (s0?: number, s1?: number, s2?: number, s3?: number, s4?: number, s5?: number, s6?: number, s7?: number): Int16x8;

                prototype: Int16x8;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Int16x8, lane: number): number;

                /**
                 * Returns a new instance with the lane values swizzled.
                 */
                swizzle(a: Int16x8, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number): Int16x8;

                /**
                 * Returns a new instance with the lane values shuffled.
                 */
                shuffle(a: Int16x8, b: Int16x8, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number): Int16x8;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Int16x8. Throws a TypeError otherwise.
                 */
                check(a: Int16x8): Int16x8;

                /**
                 * Creates a new SIMD.Int16x8 data type with all lanes set to a given value.
                 */
                splat(n: number): Int16x8;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Int16x8, lane: number, value: number): Int16x8;

                /**
                 * Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.
                 * @param selector the selector mask.
                 * @param a If the selector mask lane is `true`, pick the corresponding lane value from here.
                 * @param b If the selector mask lane is `false`, pick the corresponding lane value from here.
                 */
                select(selector: Bool16x8, a: Int16x8, b: Int16x8): Int16x8;

                equal(a: Int16x8, b: Int16x8): Bool16x8;

                notEqual(a: Int16x8, b: Int16x8): Bool16x8;

                lessThan(a: Int16x8, b: Int16x8): Bool16x8;

                lessThanOrEqual(a: Int16x8, b: Int16x8): Bool16x8;

                greaterThan(a: Int16x8, b: Int16x8): Bool16x8;

                greaterThanOrEqual(a: Int16x8, b: Int16x8): Bool16x8;

                and(a: Int16x8, b: Int16x8): Int16x8;

                or(a: Int16x8, b: Int16x8): Int16x8;

                xor(a: Int16x8, b: Int16x8): Int16x8;

                not(a: Int16x8, b: Int16x8): Int16x8;

                add(a: Int16x8, b: Int16x8): Int16x8;

                sub(a: Int16x8, b: Int16x8): Int16x8;

                mul(a: Int16x8, b: Int16x8): Int16x8;

                neg(a: Int16x8): Int16x8;

                /**
                 * Returns a new instance with the lane values shifted left by a given bit count (`a << bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted left by a given bit count (`a << bits`).
                 */
                shiftLeftByScalar(a: Int16x8, bits: number): Int16x8;

                /**
                 * Returns a new instance with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 */
                shiftRightByScalar(a: Int16x8, bits: number): Int16x8;

                addSaturate(a: Int16x8, b: Int16x8): Int16x8;

                subSaturate(a: Int16x8, b: Int16x8): Int16x8;

                /**
                 * Returns a new instance with all lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load(tarray: TypedArray, index: number): Int16x8;

                /**
                 * Store all values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store(tarray: TypedArray, index: number, value: Int16x8): Int16x8;

                /**
                 * Creates a new SIMD data type with a float conversion from a Uint16x8.
                 * @param value An Uint16x8 SIMD type to convert from.
                 */
                fromUint16x8(value: Uint16x8): Int16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Float32x4.
                 * @param value A Float32x4 SIMD type to convert from (bitwise).
                 */
                fromFloat32x4Bits(value: Float32x4): Int16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int32x4.
                 * @param value A Int32x4 SIMD type to convert from (bitwise).
                 */
                fromInt32x4Bits(value: Int32x4): Int16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int8x16.
                 * @param value A Int8x16 SIMD type to convert from (bitwise).
                 */
                fromInt8x16Bits(value: Int8x16): Int16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint32x4.
                 * @param value A Uint32x4 SIMD type to convert from (bitwise).
                 */
                fromUint32x4Bits(value: Uint32x4): Int16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint16x8.
                 * @param value A Uint16x8 SIMD type to convert from (bitwise).
                 */
                fromUint16x8Bits(value: Uint16x8): Int16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint8x16.
                 * @param value A Uint8x16 SIMD type to convert from (bitwise).
                 */
                fromUint8x16Bits(value: Uint8x16): Int16x8;
            }

            /**
             * 128-bits divided into 16 lanes storing 8-bit signed integer values.
             */
            interface Int8x16 {
                constructor: Int8x16Constructor;
                valueOf(): Int8x16;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Int8x16".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Int8x16;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Int8x16Constructor {
                /**
                 * SIMD.Int8x16 constructor
                 * @param s0 A 8bit int specifying the value of the lane.
                 * @param s1 A 8bit int specifying the value of the lane.
                 * @param s2 A 8bit int specifying the value of the lane.
                 * @param s3 A 8bit int specifying the value of the lane.
                 * @param s4 A 8bit int specifying the value of the lane.
                 * @param s5 A 8bit int specifying the value of the lane.
                 * @param s6 A 8bit int specifying the value of the lane.
                 * @param s7 A 8bit int specifying the value of the lane.
                 * @param s8 A 8bit int specifying the value of the lane.
                 * @param s9 A 8bit int specifying the value of the lane.
                 * @param s10 A 8bit int specifying the value of the lane.
                 * @param s11 A 8bit int specifying the value of the lane.
                 * @param s12 A 8bit int specifying the value of the lane.
                 * @param s13 A 8bit int specifying the value of the lane.
                 * @param s14 A 8bit int specifying the value of the lane.
                 * @param s15 A 8bit int specifying the value of the lane.
                 * @return SIMD.Int8x16 object
                 */
                (
                    s0?: number,
                    s1?: number,
                    s2?: number,
                    s3?: number,
                    s4?: number,
                    s5?: number,
                    s6?: number,
                    s7?: number,
                    s8?: number,
                    s9?: number,
                    s10?: number,
                    s11?: number,
                    s12?: number,
                    s13?: number,
                    s14?: number,
                    s15?: number
                ): Int8x16;

                prototype: Int8x16;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Int8x16, lane: number): number;

                /**
                 * Returns a new instance with the lane values swizzled.
                 */
                swizzle(
                    a: Int8x16,
                    l1: number,
                    l2: number,
                    l3: number,
                    l4: number,
                    l5: number,
                    l6: number,
                    l7: number,
                    l8: number,
                    l9: number,
                    l10: number,
                    l11: number,
                    l12: number,
                    l13: number,
                    l14: number,
                    l15: number,
                    l16: number
                ): Int8x16;

                /**
                 * Returns a new instance with the lane values shuffled.
                 */
                shuffle(
                    a: Int8x16,
                    b: Int8x16,
                    l1: number,
                    l2: number,
                    l3: number,
                    l4: number,
                    l5: number,
                    l6: number,
                    l7: number,
                    l8: number,
                    l9: number,
                    l10: number,
                    l11: number,
                    l12: number,
                    l13: number,
                    l14: number,
                    l15: number,
                    l16: number
                ): Int8x16;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Int8x16. Throws a TypeError otherwise.
                 */
                check(a: Int8x16): Int8x16;

                /**
                 * Creates a new SIMD.Int8x16 data type with all lanes set to a given value.
                 */
                splat(n: number): Int8x16;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Int8x16, lane: number, value: number): Int8x16;

                /**
                 * Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.
                 * @param selector the selector mask.
                 * @param a If the selector mask lane is `true`, pick the corresponding lane value from here.
                 * @param b If the selector mask lane is `false`, pick the corresponding lane value from here.
                 */
                select(selector: Bool8x16, a: Int8x16, b: Int8x16): Int8x16;

                equal(a: Int8x16, b: Int8x16): Bool8x16;

                notEqual(a: Int8x16, b: Int8x16): Bool8x16;

                lessThan(a: Int8x16, b: Int8x16): Bool8x16;

                lessThanOrEqual(a: Int8x16, b: Int8x16): Bool8x16;

                greaterThan(a: Int8x16, b: Int8x16): Bool8x16;

                greaterThanOrEqual(a: Int8x16, b: Int8x16): Bool8x16;

                and(a: Int8x16, b: Int8x16): Int8x16;

                or(a: Int8x16, b: Int8x16): Int8x16;

                xor(a: Int8x16, b: Int8x16): Int8x16;

                not(a: Int8x16, b: Int8x16): Int8x16;

                add(a: Int8x16, b: Int8x16): Int8x16;

                sub(a: Int8x16, b: Int8x16): Int8x16;

                mul(a: Int8x16, b: Int8x16): Int8x16;

                neg(a: Int8x16): Int8x16;

                /**
                 * Returns a new instance with the lane values shifted left by a given bit count (`a << bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted left by a given bit count (`a << bits`).
                 */
                shiftLeftByScalar(a: Int8x16, bits: number): Int8x16;

                /**
                 * Returns a new instance with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 */
                shiftRightByScalar(a: Int8x16, bits: number): Int8x16;

                addSaturate(a: Int8x16, b: Int8x16): Int8x16;

                subSaturate(a: Int8x16, b: Int8x16): Int8x16;

                /**
                 * Returns a new instance with all lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load(tarray: TypedArray, index: number): Int8x16;

                /**
                 * Store all values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store(tarray: TypedArray, index: number, value: Int8x16): Int8x16;

                /**
                 * Creates a new SIMD data type with a float conversion from a Uint8x16.
                 * @param value An Uint8x16 SIMD type to convert from.
                 */
                fromUint8x16(value: Uint8x16): Int8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Float32x4.
                 * @param value A Float32x4 SIMD type to convert from (bitwise).
                 */
                fromFloat32x4Bits(value: Float32x4): Int8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int32x4.
                 * @param value A Int32x4 SIMD type to convert from (bitwise).
                 */
                fromInt32x4Bits(value: Int32x4): Int8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int16x8.
                 * @param value A Int16x8 SIMD type to convert from (bitwise).
                 */
                fromInt16x8Bits(value: Int16x8): Int8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint32x4.
                 * @param value A Uint32x4 SIMD type to convert from (bitwise).
                 */
                fromUint32x4Bits(value: Uint32x4): Int8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint16x8.
                 * @param value A Uint16x8 SIMD type to convert from (bitwise).
                 */
                fromUint16x8Bits(value: Uint16x8): Int8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint8x16.
                 * @param value A Uint8x16 SIMD type to convert from (bitwise).
                 */
                fromUint8x16Bits(value: Uint8x16): Int8x16;
            }

            /**
             * 128-bits divided into 4 lanes storing 32-bit unsigned integer values.
             */
            interface Uint32x4 {
                constructor: Uint32x4Constructor;
                valueOf(): Uint32x4;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Uint32x4".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Uint32x4;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Uint32x4Constructor {
                /**
                 * SIMD.Uint32x4 constructor
                 * @param s0 A 32bit uint specifying the value of the lane.
                 * @param s1 A 32bit uint specifying the value of the lane.
                 * @param s2 A 32bit uint specifying the value of the lane.
                 * @param s3 A 32bit uint specifying the value of the lane.
                 * @return SIMD.Uint32x4 object
                 */
                (s0?: number, s1?: number, s2?: number, s3?: number): Uint32x4;

                prototype: Uint32x4;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Uint32x4, lane: number): number;

                /**
                 * Returns a new instance with the lane values swizzled.
                 */
                swizzle(a: Uint32x4, l1: number, l2: number, l3: number, l4: number): Uint32x4;

                /**
                 * Returns a new instance with the lane values shuffled.
                 */
                shuffle(a: Uint32x4, b: Uint32x4, l1: number, l2: number, l3: number, l4: number): Uint32x4;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Uint32x4. Throws a TypeError otherwise.
                 */
                check(a: Uint32x4): Uint32x4;

                /**
                 * Creates a new SIMD.Uint32x4 data type with all lanes set to a given value.
                 */
                splat(n: number): Uint32x4;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Uint32x4, lane: number, value: number): Uint32x4;

                /**
                 * Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.
                 * @param selector the selector mask.
                 * @param a If the selector mask lane is `true`, pick the corresponding lane value from here.
                 * @param b If the selector mask lane is `false`, pick the corresponding lane value from here.
                 */
                select(selector: Bool32x4, a: Uint32x4, b: Uint32x4): Uint32x4;

                equal(a: Uint32x4, b: Uint32x4): Bool32x4;

                notEqual(a: Uint32x4, b: Uint32x4): Bool32x4;

                lessThan(a: Uint32x4, b: Uint32x4): Bool32x4;

                lessThanOrEqual(a: Uint32x4, b: Uint32x4): Bool32x4;

                greaterThan(a: Uint32x4, b: Uint32x4): Bool32x4;

                greaterThanOrEqual(a: Uint32x4, b: Uint32x4): Bool32x4;

                and(a: Uint32x4, b: Uint32x4): Uint32x4;

                or(a: Uint32x4, b: Uint32x4): Uint32x4;

                xor(a: Uint32x4, b: Uint32x4): Uint32x4;

                not(a: Uint32x4, b: Uint32x4): Uint32x4;

                add(a: Uint32x4, b: Uint32x4): Uint32x4;

                sub(a: Uint32x4, b: Uint32x4): Uint32x4;

                mul(a: Uint32x4, b: Uint32x4): Uint32x4;

                /**
                 * Returns a new instance with the lane values shifted left by a given bit count (`a << bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted left by a given bit count (`a << bits`).
                 */
                shiftLeftByScalar(a: Uint32x4, bits: number): Uint32x4;

                /**
                 * Returns a new instance with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 */
                shiftRightByScalar(a: Uint32x4, bits: number): Uint32x4;

                /**
                 * Returns a new instance with all lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load(tarray: TypedArray, index: number): Uint32x4;

                /**
                 * Returns a new instance with 1 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load1(tarray: TypedArray, index: number): Uint32x4;

                /**
                 * Returns a new instance with 2 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load2(tarray: TypedArray, index: number): Uint32x4;

                /**
                 * Returns a new instance with 3 lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load3(tarray: TypedArray, index: number): Uint32x4;

                /**
                 * Store all values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store(tarray: TypedArray, index: number, value: Uint32x4): Uint32x4;

                /**
                 * Store 1 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store1(tarray: TypedArray, index: number, value: Uint32x4): Uint32x4;

                /**
                 * Store 2 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store2(tarray: TypedArray, index: number, value: Uint32x4): Uint32x4;

                /**
                 * Store 3 values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store3(tarray: TypedArray, index: number, value: Uint32x4): Uint32x4;

                /**
                 * Creates a new SIMD data type with a float conversion from a Float32x4.
                 * @param value An Float32x4 SIMD type to convert from.
                 */
                fromFloat32x4(value: Float32x4): Uint32x4;

                /**
                 * Creates a new SIMD data type with a float conversion from a Int32x4.
                 * @param value An Int32x4 SIMD type to convert from.
                 */
                fromInt32x4(value: Int32x4): Uint32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Float32x4.
                 * @param value A Float32x4 SIMD type to convert from (bitwise).
                 */
                fromFloat32x4Bits(value: Float32x4): Uint32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int32x4.
                 * @param value A Int32x4 SIMD type to convert from (bitwise).
                 */
                fromInt32x4Bits(value: Int32x4): Uint32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int16x8.
                 * @param value A Int16x8 SIMD type to convert from (bitwise).
                 */
                fromInt16x8Bits(value: Int16x8): Uint32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int8x16.
                 * @param value A Int8x16 SIMD type to convert from (bitwise).
                 */
                fromInt8x16Bits(value: Int8x16): Uint32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint16x8.
                 * @param value A Uint16x8 SIMD type to convert from (bitwise).
                 */
                fromUint16x8Bits(value: Uint16x8): Uint32x4;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint8x16.
                 * @param value A Uint8x16 SIMD type to convert from (bitwise).
                 */
                fromUint8x16Bits(value: Uint8x16): Uint32x4;
            }

            /**
             * 128-bits divided into 8 lanes storing 16-bit unsigned integer values.
             */
            interface Uint16x8 {
                constructor: Uint16x8Constructor;
                valueOf(): Uint16x8;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Uint16x8".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Uint16x8;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Uint16x8Constructor {
                /**
                 * SIMD.Uint16x8 constructor
                 * @param s0 A 16bit uint specifying the value of the lane.
                 * @param s1 A 16bit uint specifying the value of the lane.
                 * @param s2 A 16bit uint specifying the value of the lane.
                 * @param s3 A 16bit uint specifying the value of the lane.
                 * @param s4 A 16bit uint specifying the value of the lane.
                 * @param s5 A 16bit uint specifying the value of the lane.
                 * @param s6 A 16bit uint specifying the value of the lane.
                 * @param s7 A 16bit uint specifying the value of the lane.
                 * @return SIMD.Uint16x8 object
                 */
                (s0?: number, s1?: number, s2?: number, s3?: number, s4?: number, s5?: number, s6?: number, s7?: number): Uint16x8;

                prototype: Uint16x8;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Uint16x8, lane: number): number;

                /**
                 * Returns a new instance with the lane values swizzled.
                 */
                swizzle(a: Uint16x8, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number): Uint16x8;

                /**
                 * Returns a new instance with the lane values shuffled.
                 */
                shuffle(a: Uint16x8, b: Uint16x8, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number): Uint16x8;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Uint16x8. Throws a TypeError otherwise.
                 */
                check(a: Uint16x8): Uint16x8;

                /**
                 * Creates a new SIMD.Uint16x8 data type with all lanes set to a given value.
                 */
                splat(n: number): Uint16x8;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Uint16x8, lane: number, value: number): Uint16x8;

                /**
                 * Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.
                 * @param selector the selector mask.
                 * @param a If the selector mask lane is `true`, pick the corresponding lane value from here.
                 * @param b If the selector mask lane is `false`, pick the corresponding lane value from here.
                 */
                select(selector: Bool16x8, a: Uint16x8, b: Uint16x8): Uint16x8;

                equal(a: Uint16x8, b: Uint16x8): Bool16x8;

                notEqual(a: Uint16x8, b: Uint16x8): Bool16x8;

                lessThan(a: Uint16x8, b: Uint16x8): Bool16x8;

                lessThanOrEqual(a: Uint16x8, b: Uint16x8): Bool16x8;

                greaterThan(a: Uint16x8, b: Uint16x8): Bool16x8;

                greaterThanOrEqual(a: Uint16x8, b: Uint16x8): Bool16x8;

                and(a: Uint16x8, b: Uint16x8): Uint16x8;

                or(a: Uint16x8, b: Uint16x8): Uint16x8;

                xor(a: Uint16x8, b: Uint16x8): Uint16x8;

                not(a: Uint16x8, b: Uint16x8): Uint16x8;

                add(a: Uint16x8, b: Uint16x8): Uint16x8;

                sub(a: Uint16x8, b: Uint16x8): Uint16x8;

                mul(a: Uint16x8, b: Uint16x8): Uint16x8;

                /**
                 * Returns a new instance with the lane values shifted left by a given bit count (`a << bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted left by a given bit count (`a << bits`).
                 */
                shiftLeftByScalar(a: Uint16x8, bits: number): Uint16x8;

                /**
                 * Returns a new instance with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 */
                shiftRightByScalar(a: Uint16x8, bits: number): Uint16x8;

                addSaturate(a: Uint16x8, b: Uint16x8): Uint16x8;

                subSaturate(a: Uint16x8, b: Uint16x8): Uint16x8;

                /**
                 * Returns a new instance with all lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load(tarray: TypedArray, index: number): Uint16x8;

                /**
                 * Store all values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store(tarray: TypedArray, index: number, value: Uint16x8): Uint16x8;

                /**
                 * Creates a new SIMD data type with a float conversion from a Int16x8.
                 * @param value An Int16x8 SIMD type to convert from.
                 */
                fromInt16x8(value: Int16x8): Uint16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Float32x4.
                 * @param value A Float32x4 SIMD type to convert from (bitwise).
                 */
                fromFloat32x4Bits(value: Float32x4): Uint16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int32x4.
                 * @param value A Int32x4 SIMD type to convert from (bitwise).
                 */
                fromInt32x4Bits(value: Int32x4): Uint16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int16x8.
                 * @param value A Int16x8 SIMD type to convert from (bitwise).
                 */
                fromInt16x8Bits(value: Int16x8): Uint16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int8x16.
                 * @param value A Int8x16 SIMD type to convert from (bitwise).
                 */
                fromInt8x16Bits(value: Int8x16): Uint16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint32x4.
                 * @param value A Uint32x4 SIMD type to convert from (bitwise).
                 */
                fromUint32x4Bits(value: Uint32x4): Uint16x8;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint8x16.
                 * @param value A Uint8x16 SIMD type to convert from (bitwise).
                 */
                fromUint8x16Bits(value: Uint8x16): Uint16x8;
            }

            /**
             * 128-bits divided into 16 lanes storing 8-bit unsigned integer values.
             */
            interface Uint8x16 {
                constructor: Uint8x16Constructor;
                valueOf(): Uint8x16;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Uint8x16".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Uint8x16;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Uint8x16Constructor {
                /**
                 * SIMD.Uint8x16 constructor
                 * @param s0 A 8bit uint specifying the value of the lane.
                 * @param s1 A 8bit uint specifying the value of the lane.
                 * @param s2 A 8bit uint specifying the value of the lane.
                 * @param s3 A 8bit uint specifying the value of the lane.
                 * @param s4 A 8bit uint specifying the value of the lane.
                 * @param s5 A 8bit uint specifying the value of the lane.
                 * @param s6 A 8bit uint specifying the value of the lane.
                 * @param s7 A 8bit uint specifying the value of the lane.
                 * @param s8 A 8bit uint specifying the value of the lane.
                 * @param s9 A 8bit uint specifying the value of the lane.
                 * @param s10 A 8bit uint specifying the value of the lane.
                 * @param s11 A 8bit uint specifying the value of the lane.
                 * @param s12 A 8bit uint specifying the value of the lane.
                 * @param s13 A 8bit uint specifying the value of the lane.
                 * @param s14 A 8bit uint specifying the value of the lane.
                 * @param s15 A 8bit uint specifying the value of the lane.
                 * @return SIMD.Uint8x16 object
                 */
                (
                    s0?: number,
                    s1?: number,
                    s2?: number,
                    s3?: number,
                    s4?: number,
                    s5?: number,
                    s6?: number,
                    s7?: number,
                    s8?: number,
                    s9?: number,
                    s10?: number,
                    s11?: number,
                    s12?: number,
                    s13?: number,
                    s14?: number,
                    s15?: number
                ): Uint8x16;

                prototype: Uint8x16;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Uint8x16, lane: number): number;

                /**
                 * Returns a new instance with the lane values swizzled.
                 */
                swizzle(
                    a: Uint8x16,
                    l1: number,
                    l2: number,
                    l3: number,
                    l4: number,
                    l5: number,
                    l6: number,
                    l7: number,
                    l8: number,
                    l9: number,
                    l10: number,
                    l11: number,
                    l12: number,
                    l13: number,
                    l14: number,
                    l15: number,
                    l16: number
                ): Uint8x16;

                /**
                 * Returns a new instance with the lane values shuffled.
                 */
                shuffle(
                    a: Uint8x16,
                    b: Uint8x16,
                    l1: number,
                    l2: number,
                    l3: number,
                    l4: number,
                    l5: number,
                    l6: number,
                    l7: number,
                    l8: number,
                    l9: number,
                    l10: number,
                    l11: number,
                    l12: number,
                    l13: number,
                    l14: number,
                    l15: number,
                    l16: number
                ): Uint8x16;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Uint8x16. Throws a TypeError otherwise.
                 */
                check(a: Uint8x16): Uint8x16;

                /**
                 * Creates a new SIMD.Uint8x16 data type with all lanes set to a given value.
                 */
                splat(n: number): Uint8x16;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Uint8x16, lane: number, value: number): Uint8x16;

                /**
                 * Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.
                 * @param selector the selector mask.
                 * @param a If the selector mask lane is `true`, pick the corresponding lane value from here.
                 * @param b If the selector mask lane is `false`, pick the corresponding lane value from here.
                 */
                select(selector: Bool8x16, a: Uint8x16, b: Uint8x16): Uint8x16;

                equal(a: Uint8x16, b: Uint8x16): Bool8x16;

                notEqual(a: Uint8x16, b: Uint8x16): Bool8x16;

                lessThan(a: Uint8x16, b: Uint8x16): Bool8x16;

                lessThanOrEqual(a: Uint8x16, b: Uint8x16): Bool8x16;

                greaterThan(a: Uint8x16, b: Uint8x16): Bool8x16;

                greaterThanOrEqual(a: Uint8x16, b: Uint8x16): Bool8x16;

                and(a: Uint8x16, b: Uint8x16): Uint8x16;

                or(a: Uint8x16, b: Uint8x16): Uint8x16;

                xor(a: Uint8x16, b: Uint8x16): Uint8x16;

                not(a: Uint8x16, b: Uint8x16): Uint8x16;

                add(a: Uint8x16, b: Uint8x16): Uint8x16;

                sub(a: Uint8x16, b: Uint8x16): Uint8x16;

                mul(a: Uint8x16, b: Uint8x16): Uint8x16;

                /**
                 * Returns a new instance with the lane values shifted left by a given bit count (`a << bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted left by a given bit count (`a << bits`).
                 */
                shiftLeftByScalar(a: Uint8x16, bits: number): Uint8x16;

                /**
                 * Returns a new instance with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 * @param a An instance of a SIMD type.
                 * @param bits Bit count to shift by.
                 * @return A new corresponding SIMD data type with the lane values shifted right by a given bit count (`a >> bits` or `a >>> bits`).
                 */
                shiftRightByScalar(a: Uint8x16, bits: number): Uint8x16;

                addSaturate(a: Uint8x16, b: Uint8x16): Uint8x16;

                subSaturate(a: Uint8x16, b: Uint8x16): Uint8x16;

                /**
                 * Returns a new instance with all lane values loaded from a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start loading in the typed array.
                 */
                load(tarray: TypedArray, index: number): Uint8x16;

                /**
                 * Store all values of a SIMD data type into a typed array.
                 * @param tarray An instance of a typed array.
                 * @param index A number for the index from where to start storing in the typed array.
                 * @param value An instance of a SIMD data type to store into the typed array.
                 * @return The value that has been stored (a SIMD data type).
                 */
                store(tarray: TypedArray, index: number, value: Uint8x16): Uint8x16;

                /**
                 * Creates a new SIMD data type with a float conversion from a Int8x16.
                 * @param value An Int8x16 SIMD type to convert from.
                 */
                fromInt8x16(value: Int8x16): Uint8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Float32x4.
                 * @param value A Float32x4 SIMD type to convert from (bitwise).
                 */
                fromFloat32x4Bits(value: Float32x4): Uint8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int32x4.
                 * @param value A Int32x4 SIMD type to convert from (bitwise).
                 */
                fromInt32x4Bits(value: Int32x4): Uint8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int16x8.
                 * @param value A Int16x8 SIMD type to convert from (bitwise).
                 */
                fromInt16x8Bits(value: Int16x8): Uint8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Int8x16.
                 * @param value A Int8x16 SIMD type to convert from (bitwise).
                 */
                fromInt8x16Bits(value: Int8x16): Uint8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint32x4.
                 * @param value A Uint32x4 SIMD type to convert from (bitwise).
                 */
                fromUint32x4Bits(value: Uint32x4): Uint8x16;

                /**
                 * Creates a new SIMD data type with a bit-wise copy from a Uint16x8.
                 * @param value A Uint16x8 SIMD type to convert from (bitwise).
                 */
                fromUint16x8Bits(value: Uint16x8): Uint8x16;
            }

            /**
             * A SIMD type representing 4 boolean values, as an intermediate value in manipulating 128-bit vectors.
             */
            interface Bool32x4 {
                constructor: Bool32x4Constructor;
                valueOf(): Bool32x4;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Bool32x4".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Bool32x4;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Bool32x4Constructor {
                /**
                 * SIMD.Bool32x4 constructor
                 * @param s0 A 32bit bool specifying the value of the lane.
                 * @param s1 A 32bit bool specifying the value of the lane.
                 * @param s2 A 32bit bool specifying the value of the lane.
                 * @param s3 A 32bit bool specifying the value of the lane.
                 * @return SIMD.Bool32x4 object
                 */
                (s0?: boolean, s1?: boolean, s2?: boolean, s3?: boolean): Bool32x4;

                prototype: Bool32x4;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Bool32x4, lane: number): boolean;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Bool32x4. Throws a TypeError otherwise.
                 */
                check(a: Bool32x4): Bool32x4;

                /**
                 * Creates a new SIMD.Bool32x4 data type with all lanes set to a given value.
                 */
                splat(n: boolean): Bool32x4;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Bool32x4, lane: number, value: boolean): Bool32x4;

                /**
                 * If all lane values are `true`, return `true`.
                 */
                allTrue(a: Bool32x4): boolean;

                /**
                 * If any lane values are `true`, return `true`.
                 */
                anyTrue(a: Bool32x4): boolean;

                and(a: Bool32x4, b: Bool32x4): Bool32x4;

                or(a: Bool32x4, b: Bool32x4): Bool32x4;

                xor(a: Bool32x4, b: Bool32x4): Bool32x4;

                not(a: Bool32x4, b: Bool32x4): Bool32x4;
            }

            /**
             * A SIMD type representing 16 boolean values, as an intermediate value in manipulating 128-bit vectors
             */
            interface Bool16x8 {
                constructor: Bool16x8Constructor;
                valueOf(): Bool16x8;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Bool16x8".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Bool16x8;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Bool16x8Constructor {
                /**
                 * SIMD.Bool16x8 constructor
                 * @param s0 A 16bit bool specifying the value of the lane.
                 * @param s1 A 16bit bool specifying the value of the lane.
                 * @param s2 A 16bit bool specifying the value of the lane.
                 * @param s3 A 16bit bool specifying the value of the lane.
                 * @param s4 A 16bit bool specifying the value of the lane.
                 * @param s5 A 16bit bool specifying the value of the lane.
                 * @param s6 A 16bit bool specifying the value of the lane.
                 * @param s7 A 16bit bool specifying the value of the lane.
                 * @return SIMD.Bool16x8 object
                 */
                (s0?: boolean, s1?: boolean, s2?: boolean, s3?: boolean, s4?: boolean, s5?: boolean, s6?: boolean, s7?: boolean): Bool16x8;

                prototype: Bool16x8;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Bool16x8, lane: number): boolean;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Bool16x8. Throws a TypeError otherwise.
                 */
                check(a: Bool16x8): Bool16x8;

                /**
                 * Creates a new SIMD.Bool16x8 data type with all lanes set to a given value.
                 */
                splat(n: boolean): Bool16x8;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Bool16x8, lane: number, value: boolean): Bool16x8;

                /**
                 * If all lane values are `true`, return `true`.
                 */
                allTrue(a: Bool16x8): boolean;

                /**
                 * If any lane values are `true`, return `true`.
                 */
                anyTrue(a: Bool16x8): boolean;

                and(a: Bool16x8, b: Bool16x8): Bool16x8;

                or(a: Bool16x8, b: Bool16x8): Bool16x8;

                xor(a: Bool16x8, b: Bool16x8): Bool16x8;

                not(a: Bool16x8, b: Bool16x8): Bool16x8;
            }

            /**
             * A SIMD type representing 8 boolean values, as an intermediate value in manipulating 128-bit vectors
             */
            interface Bool8x16 {
                constructor: Bool8x16Constructor;
                valueOf(): Bool8x16;
                toLocaleString(): string;
                toString(): string;

                /**
                 * The initial value of the @@toStringTag property is the String value "SIMD.Bool8x16".
                 */
                [Symbol.toStringTag]: string;
                [Symbol.toPrimitive](hint: "string"): string;
                [Symbol.toPrimitive](hint: "number"): number;
                [Symbol.toPrimitive](hint: "default"): Bool8x16;
                [Symbol.toPrimitive](hint: string): any;
            }

            interface Bool8x16Constructor {
                /**
                 * SIMD.Bool8x16 constructor
                 * @param s0 A 8bit bool specifying the value of the lane.
                 * @param s1 A 8bit bool specifying the value of the lane.
                 * @param s2 A 8bit bool specifying the value of the lane.
                 * @param s3 A 8bit bool specifying the value of the lane.
                 * @param s4 A 8bit bool specifying the value of the lane.
                 * @param s5 A 8bit bool specifying the value of the lane.
                 * @param s6 A 8bit bool specifying the value of the lane.
                 * @param s7 A 8bit bool specifying the value of the lane.
                 * @param s8 A 8bit bool specifying the value of the lane.
                 * @param s9 A 8bit bool specifying the value of the lane.
                 * @param s10 A 8bit bool specifying the value of the lane.
                 * @param s11 A 8bit bool specifying the value of the lane.
                 * @param s12 A 8bit bool specifying the value of the lane.
                 * @param s13 A 8bit bool specifying the value of the lane.
                 * @param s14 A 8bit bool specifying the value of the lane.
                 * @param s15 A 8bit bool specifying the value of the lane.
                 * @return SIMD.Bool8x16 object
                 */
                (
                    s0?: boolean, s1?: boolean,
                    s2?: boolean,
                    s3?: boolean,
                    s4?: boolean,
                    s5?: boolean,
                    s6?: boolean,
                    s7?: boolean,
                    s8?: boolean,
                    s9?: boolean,
                    s10?: boolean,
                    s11?: boolean,
                    s12?: boolean,
                    s13?: boolean,
                    s14?: boolean,
                    s15?: boolean
                ): Bool8x16;

                prototype: Bool8x16;

                /**
                 * Returns the value of the given lane.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param lane An index number for which lane to extract.
                 * @return The value of the extracted lane.
                 */
                extractLane(simd: Bool8x16, lane: number): boolean;

                /**
                 * Returns a new instance if the parameter is a valid SIMD data type and the same as Bool8x16. Throws a TypeError otherwise.
                 */
                check(a: Bool8x16): Bool8x16;

                /**
                 * Creates a new SIMD.Bool8x16 data type with all lanes set to a given value.
                 */
                splat(n: boolean): Bool8x16;

                /**
                 * Returns a new instance with the given lane value replaced.
                 * @param simd An instance of a corresponding SIMD type.
                 * @param value A new value to be used for the lane.
                 * @return A new SIMD data type with the given lane value replaced.
                 */
                replaceLane(simd: Bool8x16, lane: number, value: boolean): Bool8x16;

                /**
                 * If all lane values are `true`, return `true`.
                 */
                allTrue(a: Bool8x16): boolean;

                /**
                 * If any lane values are `true`, return `true`.
                 */
                anyTrue(a: Bool8x16): boolean;

                and(a: Bool8x16, b: Bool8x16): Bool8x16;

                or(a: Bool8x16, b: Bool8x16): Bool8x16;

                xor(a: Bool8x16, b: Bool8x16): Bool8x16;

                not(a: Bool8x16, b: Bool8x16): Bool8x16;
            }
        }

        const Float32x4: I.Float32x4Constructor;
        const Int32x4: I.Int32x4Constructor;
        const Int16x8: I.Int16x8Constructor;
        const Int8x16: I.Int8x16Constructor;
        const Uint32x4: I.Uint32x4Constructor;
        const Uint16x8: I.Uint16x8Constructor;
        const Uint8x16: I.Uint8x16Constructor;
        const Bool32x4: I.Bool32x4Constructor;
        const Bool16x8: I.Bool16x8Constructor;
        const Bool8x16: I.Bool8x16Constructor;
    }
}
