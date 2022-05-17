const canvas = document.createElement('canvas');
const ctx: WebGLRenderingContext | null = canvas.getContext('webgl') as any as WebGLRenderingContext;

(async () => {
    if (!navigator.xr || ctx && !ctx.makeXRCompatible) {
        throw Error('You do not have WebXR');
    }

    const startRot = new DOMPoint(0, 0, 0, 1);
    const startSpot = new DOMPoint(0, 0, 0, 1);

    await ctx.makeXRCompatible();

    const session = await navigator.xr.requestSession('immersive-vr');

    const ext = ctx.getExtension("OCULUS_multiview");
    if (ext && !ext.framebufferTextureMultisampleMultiviewOVR) {
        throw Error("Incorrect extension type");
    }

    const layer = new XRWebGLLayer(session, ctx);
    const init: XRRenderStateInit = {
        baseLayer: layer,
        depthFar: 800,
        depthNear: 0.01,
        inlineVerticalFieldOfView: 1,
    };
    session.updateRenderState(init);

    let space = await session.requestReferenceSpace('local');

    const loop: XRFrameRequestCallback = (time: number, frame: XRFrame) => { };
    const handle = session.requestAnimationFrame(loop);
    session.cancelAnimationFrame(handle);

    const renderFrame = (frame: XRFrame) => {
        const tf = new XRRigidTransform(startSpot, startRot);
        space = space.getOffsetReferenceSpace(tf);

        const pose = frame.getViewerPose(space);

        if (pose) {
            let view: XRView;
            for (view of pose.views) {
                const viewport: XRViewport | undefined = layer.getViewport(view);
                // draw to the device eyes
            }
        }
    };

    navigator.xr.addEventListener('devicechange', (e: Event) => {
        // Event is a simple event; there is no additional data
        // XR device availability changed
    });

    const video = document.createElement("video");
    const mediaBinding = new XRMediaBinding(session);
    const transform = new XRRigidTransform({
        x: 0,
        y: 0,
        z: -2
    }, {
        x: 0,
        y: 0,
        z: 0,
        w: 1
    });
    const mediaLayer = mediaBinding.createQuadLayer(video, {
        space,
        layout: "mono",
        invertStereo: false,
        transform,
        width: 1,
        height: video.height / video.width
    });

    mediaLayer.destroy();
})();
