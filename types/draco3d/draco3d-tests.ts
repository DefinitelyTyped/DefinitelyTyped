import { createDecoderModule, createEncoderModule, DecoderModule, EncoderModule } from "draco3d";

/* Encode */

createEncoderModule().then((encoderModule: EncoderModule) => {
    const builder = new encoderModule.MeshBuilder();
    const mesh = new encoderModule.Mesh();
    const encoder = new encoderModule.Encoder();
    const expertEncoder = new encoderModule.ExpertEncoder(mesh);
    const dracoBuffer = new encoderModule.DracoInt8Array();
    const metadata = new encoderModule.Metadata();
    const metaBuilder = new encoderModule.MetadataBuilder();

    const attributeId = builder.AddUInt8Attribute(mesh, 5120, 100, 3, new Uint8Array(10));
    builder.AddInt8Attribute(mesh, 5120, 100, 3, new Int8Array(10));
    builder.AddUInt16Attribute(mesh, 5120, 100, 3, new Uint16Array(10));
    builder.AddInt16Attribute(mesh, 5120, 100, 3, new Int16Array(10));
    builder.AddUInt32Attribute(mesh, 5120, 100, 3, new Uint32Array(10));
    builder.AddFloatAttribute(mesh, 5120, 100, 3, new Float32Array(10));

    // $ExpectType boolean
    metaBuilder.AddStringEntry(metadata, "stringEntryName", "value");
    // $ExpectType boolean
    metaBuilder.AddIntEntry(metadata, "intEntryName", 42);
    // $ExpectType boolean
    metaBuilder.AddDoubleEntry(metadata, "doubleEntryName", 3.14);
    // $ExpectType boolean
    metaBuilder.AddIntEntryArray(metadata, "intEntryArrayName", new Int32Array(10), 10);

    // $ExpectType boolean
    builder.SetMetadataForAttribute(mesh, attributeId, metadata);
    // $ExpectType boolean
    builder.AddMetadata(mesh, metadata);
    // $ExpectType boolean
    builder.SetNormalizedFlagForAttribute(mesh, attributeId, true);

    encoder.SetAttributeQuantization(encoderModule.POSITION, 12);
    encoder.SetAttributeExplicitQuantization(encoderModule.POSITION, 14, 2, [0, 0, 0], 10);

    builder.AddFacesToMesh(mesh, 32, new Uint32Array(96));

    encoder.SetSpeedOptions(5, 5);
    encoder.SetTrackEncodedProperties(true);
    encoder.SetEncodingMethod(encoderModule.MESH_EDGEBREAKER_ENCODING);
    encoder.EncodeMeshToDracoBuffer(mesh, dracoBuffer);

    expertEncoder.SetSpeedOptions(5, 5);
    expertEncoder.SetTrackEncodedProperties(true);
    expertEncoder.SetEncodingMethod(encoderModule.MESH_EDGEBREAKER_ENCODING);
    expertEncoder.EncodeToDracoBuffer(true, dracoBuffer);

    let numVertices: number = encoder.GetNumberOfEncodedPoints();
    let numIndices: number = encoder.GetNumberOfEncodedFaces() * 3;

    numVertices = expertEncoder.GetNumberOfEncodedPoints();
    numIndices = expertEncoder.GetNumberOfEncodedFaces() * 3;

    encoderModule.destroy(dracoBuffer);
    encoderModule.destroy(mesh);
    encoderModule.destroy(builder);
    encoderModule.destroy(encoder);
    encoderModule.destroy(expertEncoder);
    encoderModule.destroy(metadata);
    encoderModule.destroy(metaBuilder);
});

/* Encode (Expert) */

createEncoderModule().then((encoderModule: EncoderModule) => {
    const builder = new encoderModule.MeshBuilder();
    const mesh = new encoderModule.Mesh();
    const encoder = new encoderModule.ExpertEncoder(mesh);
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
    encoder.EncodeToDracoBuffer(true, dracoBuffer);

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
    const querier = new decoderModule.MetadataQuerier();
    buffer.Init(new Int8Array(100), 100);
    const pointCloud = new decoderModule.PointCloud();
    const int32Array = new decoderModule.DracoInt32Array();

    try {
        const geometryType = decoder.GetEncodedGeometryType(buffer);
        if (geometryType !== decoderModule.TRIANGULAR_MESH) {
            throw new Error("Unknown geometry type.");
        }

        const mesh = new decoderModule.Mesh();
        const numMeshPoints = pointCloud.num_points();
        const meshStatus = decoder.DecodeBufferToMesh(buffer, mesh);

        if (!meshStatus.ok() || mesh.ptr === 0) {
            throw new Error("Decoding failure." + meshStatus.error_msg());
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
        // $ExpectType number
        const attributeId2 = decoder.GetAttributeIdByName(mesh, "entry_name");

        const pointCloudStatus = decoder.DecodeBufferToPointCloud(buffer, pointCloud);

        const metadata = decoder.GetMetadata(mesh);
        const attrMetadata = decoder.GetAttributeMetadata(mesh, attributeId);

        // $ExpectType number
        querier.NumEntries(metadata);
        // $ExpectType boolean
        querier.HasEntry(metadata, "entry_name");
        // $ExpectType string
        querier.GetEntryName(metadata, 0);
        // $ExpectType number
        querier.GetIntEntry(metadata, "entry_name");
        // $ExpectType number
        querier.GetDoubleEntry(metadata, "entry_name");
        // $ExpectType string
        querier.GetStringEntry(metadata, "entry_name");
        querier.GetIntEntryArray(metadata, "entry_name", int32Array);

        if (!pointCloudStatus.ok()) {
            throw new Error("Decoding failure." + pointCloudStatus.error_msg());
        }

        const numAttributes = pointCloud.num_attributes();
        const numPointCloudPoints = pointCloud.num_points();

        decoderModule._free(ptr);
    } finally {
        decoderModule.destroy(decoder);
        decoderModule.destroy(buffer);
        decoderModule.destroy(pointCloud);
        decoderModule.destroy(querier);
        decoderModule.destroy(int32Array);
    }
});
