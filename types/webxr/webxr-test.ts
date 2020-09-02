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
    XRViewPort,
    XRSpace,
} from './index.d';

const canvas = document.createElement('canvas');
const ctx: WebGLRenderingContext | null = canvas.getContext('webgl');

const xr = (navigator as any)?.xr as XRSystem;
if (!xr) {
    throw Error('You do not have WebXR');
}

let space: XRReferenceSpace;
let layer: XRWebGLLayer;
let startRot = new DOMPoint(0, 0, 0, 1);
let startSpot = new DOMPoint(0, 0, 0, 1);
xr.requestSession('immersive-vr').then((session: XRSession) => {
    if (ctx) {
        layer = new XRWebGLLayer(session, ctx);
        session.updateRenderState(<XRRenderStateInit>{
            baseLayer: layer,
            depthFar: 800,
            depthNear: 0.01,
        });

        session
            .requestReferenceSpace('local')
            .then(rs => {
                space = rs as XRReferenceSpace;
            })
            .catch(e => {
                throw Error("Can't get reference space" + e);
            });
    }
});

const renderFrame = (frame: XRFrame) => {
    const tf = new XRRigidTransform(startSpot, startRot);
    space = space.getOffsetReferenceSpace(tf);

    let pose: XRViewerPose = frame.getViewerPose(space);

    if (pose) {
        let view: XRView;
        for (view of pose.views) {
            let viewport: XRViewPort = layer.getViewport(view);
            // draw to the device eyes
        }
    }
};
