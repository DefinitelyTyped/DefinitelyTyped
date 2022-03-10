import { createEncoderModule, createDecoderModule, EncoderModule, DecoderModule } from 'draco3d';

/* Encode */

createEncoderModule().then((encoderModule: EncoderModule) => {
    const encoder = new encoderModule.Encoder();
    const builder = new encoderModule.MeshBuilder();
    const mesh = new encoderModule.Mesh();
    const dracoBuffer = new encoderModule.DracoInt8Array();

    builder.AddUInt8Attribute(mesh, 5120, 100, 3, new Uint8Array(10));
    builder.AddInt8Attribute(mesh, 5120, 100, 3, new Int8Array(10));
    builder.AddUInt16Attribute(mesh, 5120, 100, 3, new Uint16Array(10));
    builder.AddInt16Attribute(mesh, 5120, 100, 3, new Int16Array(10));
    builder.AddUInt32Attribute(mesh, 5120, 100, 3, new Uint32Array(10));
    builder.AddFloatAttribute(mesh, 5120, 100, 3, new Float32Array(10));

    encoder.SetAttributeQuantization(encoderModule.POSITION, 12);
    encoder.SetAttributeExplicitQuantization(encoderModule.POSITION, 14, 2, [0, 0, 0], 10);

    builder.AddFacesToMesh(mesh, 32, new Uint32Array(96));

    encoder.SetSpeedOptions(5, 5);
    encoder.SetTrackEncodedProperties(true);
    encoder.SetEncodingMethod(encoderModule.MESH_EDGEBREAKER_ENCODING);
    encoder.EncodeMeshToDracoBuffer(mesh, dracoBuffer);

    const numVertices: number = encoder.GetNumberOfEncodedPoints();
    const numIndices: number = encoder.GetNumberOfEncodedFaces() * 3;

    encoderModule.destroy(dracoBuffer);
    encoderModule.destroy(mesh);
    encoderModule.destroy(builder);
    encoderModule.destroy(encoder);
});

/* Decode */

createDecoderModule().then((decoderModule: DecoderModule) => {
    const decoder = new decoderModule.Decoder();
    const buffer = new decoderModule.DecoderBuffer();
    buffer.Init(new Int8Array(100), 100);

    try {
        const geometryType = decoder.GetEncodedGeometryType(buffer);
        if (geometryType !== decoderModule.TRIANGULAR_MESH) {
            throw new Error('Unknown geometry type.');
        }

        const mesh = new decoderModule.Mesh();
        const status = decoder.DecodeBufferToMesh(buffer, mesh);

        if (!status.ok() || mesh.ptr === 0) {
            throw new Error('Decoding failure.' + status.error_msg());
        }

        // Indices.
        let ptr = decoderModule._malloc(50);
        decoder.GetTrianglesUInt16Array(mesh, 50, ptr);
        const indices = new Uint16Array(decoderModule.HEAPU16.buffer, ptr, 12).slice();
        decoderModule._free(ptr);

        // Attributes.
        ptr = decoderModule._malloc(75);
        const attribute = decoder.GetAttributeByUniqueId(mesh, 123);
        decoder.GetAttributeDataArrayForAllPoints(mesh, attribute, decoderModule.DT_FLOAT32, 75, ptr);
        const attributeArray = new Float32Array(decoderModule.HEAPF32.buffer, ptr, 24).slice();

        const attributeId = decoder.GetAttributeId(mesh, decoderModule.POSITION);
        const attribute2 = decoder.GetAttribute(mesh, attributeId);

        decoderModule._free(ptr);
    } finally {
        decoderModule.destroy(buffer);
    }
});
