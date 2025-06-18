function assertNever(value: never) {
    console.assert(true, value, "NEVER MORE! CAW!");
}

(async () => {
    const canvas = document.createElement("canvas");
    const ctx: WebGLRenderingContext | null = canvas.getContext("webgl");

    if (!ctx) {
        throw new Error("No graphics context");
    }

    if (!navigator.xr || !ctx.makeXRCompatible) {
        throw Error("You do not have WebXR");
    }

    navigator.xr.addEventListener("sessiongranted", evt => console.log("Session granted", evt.session));

    const startRot = new DOMPoint(0, 0, 0, 1);
    const startSpot = new DOMPoint(0, 0, 0, 1);

    await ctx.makeXRCompatible();

    // @ts-expect-error
    const badSession = new XRSession(); // shouldn't be able to do this.

    const root = document.body.querySelector("#screen-space-ui");
    const session = await navigator.xr.requestSession("immersive-vr", {
        domOverlay: {
            root: root!,
        },
    });

    if (!(session instanceof XRSession)) {
        throw new Error("Can't test instance of XRSession");
    }

    if (session.inputSources[0].gamepad?.hapticActuators) {
        session.inputSources[0].gamepad.hapticActuators[0].pulse(0.5, 100);
    }

    const button = root?.querySelector("button");
    button?.addEventListener("beforexrselect", (evt: XRSessionEvent) => {
        console.assert(evt.session === session);
    });

    if (session.domOverlayState !== undefined) {
        switch (session.domOverlayState.type) {
            case "floating":
                console.log("Floating DOM Overlay");
                break;
            case "head-locked":
                console.log("Head-locked DOM Overlay");
                break;
            case "screen":
                console.log("Screen DOM Overlay");
                break;
            default:
                assertNever(session.domOverlayState.type);
                break;
        }
    }

    session.addEventListener("end", evt => console.log("The session has ended.", evt.session));

    const ovrExt = ctx.getExtension("OVR_multiview2");
    if (ovrExt && !ovrExt.framebufferTextureMultiviewOVR) {
        throw Error("Incorrect extension type");
    }

    const omvExt = ctx.getExtension("OCULUS_multiview");
    if (omvExt && !omvExt.framebufferTextureMultiviewOVR && !omvExt.framebufferTextureMultisampleMultiviewOVR) {
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

    const layers: XRCompositionLayer[] = [];

    let space = await session.requestReferenceSpace("local");

    const loop: XRFrameRequestCallback = (time: number, frame: XRFrame) => {};
    const handle = session.requestAnimationFrame(loop);
    session.cancelAnimationFrame(handle);

    if (session.initiateRoomCapture) {
        session.initiateRoomCapture().then(() => {
            console.log("Room capture initiated");
        });
    }

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

            const angularVelocity: DOMPointReadOnly | undefined = pose.angularVelocity;
            const linearVelocity: DOMPointReadOnly | undefined = pose.linearVelocity;
        }

        const detectedMeshes = frame.detectedMeshes;
        detectedMeshes?.forEach((mesh: XRMesh) => {
            const meshPose = frame.getPose(mesh.meshSpace, space);
            if (meshPose) {
                const transform = meshPose.transform;
            }
            console.log(mesh.lastChangedTime);
            console.log(mesh.indices);
            console.log(mesh.vertices);
            console.log(mesh.lastChangedTime);
            console.log(mesh.semanticLabel);
        });

        const detectedPlanes = frame.detectedPlanes;
        detectedPlanes?.forEach((plane: XRPlane) => {
            const planePose = frame.getPose(plane.planeSpace, space);
            console.log(plane.lastChangedTime);
            console.log(plane.orientation);
            console.log(plane.polygon);
            console.log(plane.semanticLabel);
        });
    };

    navigator.xr.addEventListener("devicechange", (e: Event) => {
        // Event is a simple event; there is no additional data
        // XR device availability changed
    });

    if ("XRWebGLBinding" in window) {
        const glBinding = new XRWebGLBinding(session, ctx);
        const cubeLayer = glBinding.createCubeLayer({
            space,
            layout: "mono",
            isStatic: true,
            viewPixelWidth: 2048,
            viewPixelHeight: 2048,
        });

        layers.push(cubeLayer);

        await session.updateRenderState({
            layers,
        });
    }

    if ("XRMediaBinding" in window) {
        const video = document.createElement("video");
        const mediaBinding = new XRMediaBinding(session);
        const transform = new XRRigidTransform(
            {
                x: 0,
                y: 0,
                z: -2,
            },
            {
                x: 0,
                y: 0,
                z: 0,
                w: 1,
            },
        );
        const mediaLayer = mediaBinding.createQuadLayer(video, {
            space,
            layout: "mono",
            invertStereo: false,
            transform,
            width: 1,
            height: video.height / video.width,
        });

        layers.push(mediaLayer);

        await session.updateRenderState({
            layers,
        });
    }

    await session.updateRenderState({
        layers: [],
    });

    for (const layer of layers) {
        if (layer instanceof XRQuadLayer) {
            console.log("Layer is a quad layer");
        } else if (layer instanceof XRCubeLayer) {
            console.log("Layer is a cube layer");
        } else if (layer instanceof XRCylinderLayer) {
            console.log("Layer is a cylinder layer");
        } else if (layer instanceof XREquirectLayer) {
            console.log("Layer is an equirectangular layer");
        } else if (layer instanceof XRProjectionLayer) {
            console.log("Layer is a projection layer");
        } else if (layer instanceof XRCompositionLayer) {
            console.log("Layer is composition layer");
        } else {
            assertNever(layer);
        }

        layer.destroy();
    }

    const depthSensingSession = await navigator.xr!.requestSession("immersive-ar", {
        requiredFeatures: ["depth-sensing"],
        depthSensing: {
            usagePreference: ["cpu-optimized", "gpu-optimized"],
            dataFormatPreference: ["luminance-alpha", "float32"],
        },
    });

    function requestAnimationFrameCallback(t: number, frame: XRFrame) {
        session.requestAnimationFrame(requestAnimationFrameCallback);

        const pose = frame.getViewerPose(space);
        if (pose) {
            for (const view of pose.views) {
                const depthInformation = frame.getDepthInformation(view);
                if (depthInformation) {
                    useCpuDepthInformation(view, depthInformation);
                }
            }
        }
    }

    function useCpuDepthInformation(view: XRView, depthInformation: XRCPUDepthInformation) {
        const depthInMeters = depthInformation.getDepthInMeters(0.25, 0.75);
        console.log("Depth at normalized view coordinates (0.25, 0.75) is:", depthInMeters);
    }

    const glBinding = new XRWebGLBinding(session, ctx);

    function requestAnimationFrameCallback2(t: number, frame: XRFrame) {
        session.requestAnimationFrame(requestAnimationFrameCallback);

        const pose = frame.getViewerPose(space);
        if (pose) {
            for (const view of pose.views) {
                const depthInformation = glBinding.getDepthInformation(view);
                if (depthInformation) {
                    useGpuDepthInformation(view, depthInformation);
                }
            }
        }
    }

    const shaderProgram = ""; // Linked WebGLProgram.

    const programInfo = {
        uniformLocations: {
            depthTexture: ctx.getUniformLocation(shaderProgram, "uDepthTexture"),
            uvTransform: ctx.getUniformLocation(shaderProgram, "uUvTransform"),
            rawValueToMeters: ctx.getUniformLocation(shaderProgram, "uRawValueToMeters"),
        },
    };

    function useGpuDepthInformation(view: XRView, depthInformation: XRWebGLDepthInformation) {
        // ...

        ctx!.bindTexture(ctx!.TEXTURE_2D, depthInformation.texture);
        ctx!.activeTexture(ctx!.TEXTURE0);
        ctx!.uniform1i(programInfo.uniformLocations.depthTexture, 0);

        ctx!.uniformMatrix4fv(
            programInfo.uniformLocations.uvTransform,
            false,
            depthInformation.normDepthBufferFromNormView.matrix,
        );

        ctx!.uniform1f(
            programInfo.uniformLocations.rawValueToMeters,
            depthInformation.rawValueToMeters,
        );

        // ...
    }
})();
