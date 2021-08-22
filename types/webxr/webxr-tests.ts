import {
    XRWebGLLayer,
    XRSession,
    XRSystem,
    XRRenderStateInit,
    XRReferenceSpace,
    XRFrame,
    XRViewerPose,
    XRRigidTransform,
    XRView,
    XRViewport,
    XRFrameRequestCallback,
} from 'webxr';

const canvas = document.createElement('canvas');
const ctx: WebGLRenderingContext | null = canvas.getContext('webgl');

const xr = (navigator as any)?.xr as XRSystem;
if (!xr) {
    throw Error('You do not have WebXR');
}

let space: XRReferenceSpace;
let layer: XRWebGLLayer;
const startRot = new DOMPoint(0, 0, 0, 1);
const startSpot = new DOMPoint(0, 0, 0, 1);
xr.requestSession('immersive-vr').then((session: XRSession) => {
    if (ctx) {
        layer = new XRWebGLLayer(session, ctx);
        const init: XRRenderStateInit = {
            baseLayer: layer,
            depthFar: 800,
            depthNear: 0.01,
            inlineVerticalFieldOfView: 1,
        };
        session.updateRenderState(init);

        session
            .requestReferenceSpace('local')
            .then(rs => {
                space = rs as XRReferenceSpace;

                const loop: XRFrameRequestCallback = (time: number, frame: XRFrame) => {};
                const handle = session.requestAnimationFrame(loop);
                session.cancelAnimationFrame(handle);
            })
            .catch(e => {
                throw Error("Can't get reference space" + e);
            });
    }
});

const renderFrame = (frame: XRFrame) => {
    const tf = new XRRigidTransform(startSpot, startRot);
    space = space.getOffsetReferenceSpace(tf);

    const pose = frame.getViewerPose(space);

    if (pose) {
        let view: XRView;
        for (view of pose.views) {
            const viewport: XRViewport = layer.getViewport(view);
            // draw to the device eyes
        }
    }
};

xr.addEventListener('devicechange', (e: Event) => {
    // Event is a simple event; there is no additional data
    // XR device availability changed
});
