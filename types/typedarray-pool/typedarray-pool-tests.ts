import * as pool from 'typedarray-pool';
import * as tape from 'tape';

tape("typedarray-pool", function(t) {

    pool.clearCache()

    for(var i=1; i<100; ++i) {
        const a1 = pool.malloc(i, "int8")
        t.assert(a1 instanceof Int8Array, "int8array valid")
        t.assert(a1.length >= i, "int8array length")
        pool.free(a1)

        const a2 = pool.malloc(i, "int16")
        t.assert(a2 instanceof Int16Array, "int16")
        t.assert(a2.length >= i)
        pool.free(a2)

        const a3 = pool.malloc(i, "int32")
        t.assert(a3 instanceof Int32Array, "int32")
        t.assert(a3.length >= i)
        pool.free(a3)

        const a4 = pool.malloc(i, "uint8")
        t.assert(a4 instanceof Uint8Array, "uint8")
        t.assert(!Buffer.isBuffer(a4), "not buffer")
        t.assert(a4.length >= i)
        pool.free(a4)

        const a5 = pool.malloc(i, "uint16")
        t.assert(a5 instanceof Uint16Array, "uint16")
        t.assert(a5.length >= i)
        pool.free(a5)

        const a6 = pool.malloc(i, "uint32")
        t.assert(a6 instanceof Uint32Array, "uint32")
        t.assert(a6.length >= i)
        pool.free(a6)

        const a7 = pool.malloc(i, "float")
        t.assert(a7 instanceof Float32Array, "float")
        t.assert(a7.length >= i)
        pool.free(a7)

        const a8 = pool.malloc(i, "double")
        t.assert(a8 instanceof Float64Array, "double")
        t.assert(a8.length >= i)
        pool.free(a8)

        const a9 = pool.malloc(i, "uint8_clamped")
        if((typeof Uint8ClampedArray) !== "undefined") {
            t.assert(a9 instanceof Uint8ClampedArray, "uint8_clamped")
        } else {
            t.assert(a9 instanceof Uint8Array, "unit8_clamped clamped default to uint8")
        }
        t.assert(a9.length >= i)
        pool.free(a9)

        const a10 = pool.malloc(i, "buffer")
        t.assert(Buffer.isBuffer(a10), "buffer")
        t.assert(a10.length >= i)
        pool.free(a10)

        const a11 = pool.malloc(i)
        t.assert(a11 instanceof ArrayBuffer, "array buffer")
        t.assert(a11.byteLength >= i)
        pool.free(a11)

        const a12 = pool.malloc(i, "arraybuffer")
        t.assert(a12 instanceof ArrayBuffer, "array buffer")
        t.assert(a12.byteLength >= i)
        pool.free(a12)

        const a13 = pool.malloc(i, "dataview")
        t.assert(a13 instanceof DataView, "dataview")
        t.assert(a13.byteLength >= i)
        pool.free(a13)
    }

    for(var i=1; i<100; ++i) {
        const a1 = pool.mallocInt8(i)
        t.assert(a1 instanceof Int8Array, "int8")
        t.assert(a1.length >= i)
        pool.freeInt8(a1)

        const a2 = pool.mallocInt16(i)
        t.assert(a2 instanceof Int16Array, "int16")
        t.assert(a2.length >= i)
        pool.freeInt16(a2)

        const a3 = pool.mallocInt32(i)
        t.assert(a3 instanceof Int32Array, "int32")
        t.assert(a3.length >= i)
        pool.freeInt32(a3)

        const a4 = pool.mallocUint8(i)
        t.assert(a4 instanceof Uint8Array, "uint8")
        t.assert(!Buffer.isBuffer(a4), "not buffer")
        t.assert(a4.length >= i)
        pool.freeUint8(a4)

        const a5 = pool.mallocUint16(i)
        t.assert(a5 instanceof Uint16Array, "uint16")
        t.assert(a5.length >= i)
        pool.freeUint16(a5)

        const a6 = pool.mallocUint32(i)
        t.assert(a6 instanceof Uint32Array, "uint32")
        t.assert(a6.length >= i)
        pool.freeUint32(a6)

        const a7 = pool.mallocFloat(i)
        t.assert(a7 instanceof Float32Array, "float32")
        t.assert(a7.length >= i)
        pool.freeFloat(a7)

        const a8 = pool.mallocDouble(i)
        t.assert(a8 instanceof Float64Array, "float64")
        t.assert(a8.length >= i)
        pool.freeDouble(a8)

        const a9 = pool.mallocUint8Clamped(i)
        if((typeof Uint8ClampedArray) !== "undefined") {
            t.assert(a9 instanceof Uint8ClampedArray, "uint8 clamped")
        } else {
            t.assert(a9 instanceof Uint8Array, "uint8 clamped defaults to unt8")
        }
        t.assert(a9.length >= i)
        pool.freeUint8Clamped(a9)

        const a10 = pool.mallocBuffer(i)
        t.assert(Buffer.isBuffer(a10), "buffer")
        t.assert(a10.length >= i)
        pool.freeBuffer(a10)

        const a11 = pool.mallocArrayBuffer(i)
        t.assert(a11 instanceof ArrayBuffer, "array buffer")
        t.assert(a11.byteLength >= i)
        pool.freeArrayBuffer(a11)

        const a12 = pool.mallocDataView(i)
        t.assert(a12 instanceof DataView, "data view")
        t.assert(a12.byteLength >= i)
        pool.freeDataView(a12)
    }

    pool.clearCache()

    t.end()
})
