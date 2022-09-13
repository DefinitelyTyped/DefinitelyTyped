import { createEncoderModule, createDecoderModule, EncoderModule, DecoderModule } from 'draco3dgltf';

// Additional tests in '../draco3d/draco3d-tests.ts'.

createEncoderModule().then((encoderModule: EncoderModule) => {
    const encoder = new encoderModule.Encoder();
    encoderModule.destroy(encoder);
});

createDecoderModule().then((decoderModule: DecoderModule) => {
    const decoder = new decoderModule.Decoder();
    decoderModule.destroy(decoder);
});
