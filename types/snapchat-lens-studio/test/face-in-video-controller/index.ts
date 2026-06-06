// Typescript rewrite of FaceInVideoController.js by Olen Davis <https://github.com/OlenDavis>
// Version: 0.0.2
// Event: Initialized
// Description: The primary script that drives the face in video template.

//  @ui {"widget":"group_start", "label":"Video Control"}
//  @input bool showVideo = true
//  @input Asset.Texture movie { "label":"Background Video" }
//  @ui {"widget":"group_end"}
// @ui {"widget":"label"}
//  @ui {"widget":"group_start", "label":"Tracked Image Control"}
//  @input Asset.Texture mainImage { "label":"Image" }
//  @input Asset.Texture opacityTexture { "label":"Opacity Image" }
//  @input float imageSize = 0.5 {"label":"Size", "widget":"slider", "min":0.0, "max":1.0, "step":0.01}
//  @input float imageOffsetX = 0.0 {"label":"Offset X","widget":"slider", "min":-1.0, "max":1.0, "step":0.01}
//  @input float imageOffsetY = 0.0 {"label":"Offset Y", "widget":"slider", "min":-1.0, "max":1.0, "step":0.01}
//  @input float imageRotation = 0.0 {"label":"Rotate","widget":"slider", "min":0.0, "max":360.0, "step":0.5}
//  @input float imageAlpha = 1.0 {"label":"Alpha","widget":"slider", "min":0.0, "max":1.0, "step":0.1}
//  @input int imageSort {"widget":"combobox", "values":[{"label":"In Front of Video", "value":0}, {"label":"Behind Video", "value":1}, {"label":"Manual Sorting", "value":2}]}
//  @ui {"widget":"group_end"}
// @ui {"widget":"label"}
// @ui {"widget":"separator"}
//  @input bool advanced
//  @ui {"widget":"group_start", "label":"Tracking Control", "showIf": "advanced"}
//  @input bool trackPosition = true {"label":"Position"}
//  @input bool trackScale = true {"label":"Scale"}
//  @input bool trackRotation = true {"label":"Rotation"}
// @ui {"widget":"group_end"}
// @ui {"widget":"separator", "showIf": "advanced"}
//  @input Component.ScreenTransform trackedImageTransform {"showIf": "advanced"}
//  @input Component.Image movieImage {"showIf": "advanced"}
//  @input Component.ScreenTransform extentsTarget {"showIf": "advanced"}
//  @input Component.Image backgroundImage {"showIf": "advanced"}
//  @input Component.Image errorImage {"showIf": "advanced"}

import type { AnimationData } from "./animation-data";

declare global {
    interface Pass {
        /** Specifies the base color (albedo) of the material if the ‘Base Texture’ is disabled. Multiplied with the ‘Base Texture’ otherwise. */
        baseColor: vec4;
        /** Most materials use a base texture (albedo), but disabling it means the base texture will be considered white, and ‘Base Color’ will solely control the color. */
        baseTex: Asset.Texture;
        /**
         * Normally, the Base Texture’s alpha is taken as opacity. Enabling this allows you to define a separate greyscale opacity texture. The ‘Opacity Texture’ value will be multiplied with the
         * Base Texture’s alpha (which is 1 for textures without alpha) to get the final opacity. ‘Opacity Texture’ is only available if ‘Blend Mode’ is not ‘Disabled’.
         */
        opacityTex: Asset.Texture;
    }
    namespace SnapchatLensStudio {
        interface ScriptInputs {
            showVideo: boolean;
            movie: Asset.Texture;
            mainImage: Asset.Texture;
            opacityTexture: Asset.Texture;
            imageSize: number;
            imageOffsetX: number;
            imageOffsetY: number;
            imageRotation: number;
            imageAlpha: number;
            imageSort: number;
            advanced: boolean;
            trackPosition: boolean;
            trackScale: boolean;
            trackRotation: boolean;
            trackedImageTransform: Component.ScreenTransform;
            movieImage: Component.Image;
            extentsTarget: Component.ScreenTransform;
            backgroundImage: Component.Image;
            errorImage: Component.Image;
        }
    }
}

let animationData: AnimationData;
let provider: AnimatedTextureFileProvider;
let timer = 0;
let timeLimit: number;
let startTime = 0;
let startingPositionOffset: vec2;
let startingScaleOffset: vec2;
let startingRotationOffset: quat;
let animatedTextureInitialized = false;

const {
    showVideo,
    movie,
    mainImage,
    opacityTexture,
    imageSize,
    imageOffsetX,
    imageOffsetY,
    imageRotation,
    imageAlpha,
    imageSort,
    advanced,
    trackPosition,
    trackScale,
    trackRotation,
    trackedImageTransform,
    movieImage,
    extentsTarget,
    backgroundImage,
    errorImage,
} = script;

initialize();

function initialize() {
    findAnimationData();

    if (checkProperties()) {
        setupTracking();
        configureImageTransform({
            mainImage,
            opacityTexture,
            trackedImageTransform,
            imageSize,
            imageOffsetX,
            imageOffsetY,
            imageRotation,
            imageAlpha,
        });
    }
}

function configureImageTransform({
    mainImage: texture,
    opacityTexture,
    trackedImageTransform: objectsToTransform,
    imageSize: scaleToAdd,
    imageOffsetX: xOffsetToAdd,
    imageOffsetY: yOffsetToAdd,
    imageRotation: rotationToAdd,
    imageAlpha,
}: Pick<
    SnapchatLensStudio.ScriptInputs,
    | "mainImage"
    | "opacityTexture"
    | "trackedImageTransform"
    | "imageSize"
    | "imageOffsetX"
    | "imageOffsetY"
    | "imageRotation"
    | "imageAlpha"
>) {
    const scaleMultiplier = 20;
    const degToRad = 0.0175;
    const screenTransform = objectsToTransform;

    const trackedImageComp = getImageComponent(screenTransform);
    trackedImageComp.mainPass.baseTex = texture;

    if (opacityTexture) {
        trackedImageComp.mainPass.opacityTex = opacityTexture;
    }

    trackedImageComp.mainPass.baseColor = setAlpha(trackedImageComp.mainPass.baseColor, imageAlpha);

    const anchors = screenTransform.anchors;
    const offsets = screenTransform.offsets;

    const aspectScaling = new vec2(1, 1);
    const aspect = texture.control.getAspect();
    if (aspect > 1) {
        aspectScaling.x *= aspect;
    } else {
        aspectScaling.y /= aspect;
    }

    offsets.setSize(aspectScaling.uniformScale(scaleToAdd * scaleMultiplier));

    const offsetVec = new vec3(xOffsetToAdd, yOffsetToAdd, 0);

    anchors.left += offsetVec.x;
    anchors.right += offsetVec.x;
    anchors.top += offsetVec.y;
    anchors.bottom += offsetVec.y;

    const rotateTo = screenTransform.rotation.multiply(quat.angleAxis(rotationToAdd * degToRad, vec3.forward()));

    screenTransform.rotation = rotateTo;

    startingPositionOffset = screenTransform.anchors.getCenter();
    startingScaleOffset = screenTransform.offsets.getSize();
    startingRotationOffset = screenTransform.rotation;
}

function setupTracking() {
    if (!showVideo) {
        movieImage.enabled = false;

        if (movie) {
            print("WARNING: Please remove Background Video texture from the script component to save memory.");
        }
    } else {
        movieImage.mainPass.baseTex = movie;
    }

    errorImage.enabled = false;
    movieImage.extentsTarget = extentsTarget;

    let trackedImageMesh: Component.Image;
    let moveImageMesh: Component.Image;
    if (imageSort === 0) {
        trackedImageMesh = getImageComponent(trackedImageTransform);
        moveImageMesh = getImageComponent(movieImage);
        trackedImageMesh.setRenderOrder(moveImageMesh.getRenderOrder() + 1);

        if (backgroundImage) {
            backgroundImage.setRenderOrder(moveImageMesh.getRenderOrder() - 1);
        }
    } else if (imageSort === 1) {
        trackedImageMesh = getImageComponent(trackedImageTransform);
        moveImageMesh = getImageComponent(movieImage);
        trackedImageMesh.setRenderOrder(moveImageMesh.getRenderOrder() - 1);

        if (backgroundImage) {
            backgroundImage.setRenderOrder(trackedImageMesh.getRenderOrder() - 1);
        }
    }

    if (!showVideo) {
        animatedTextureInitialized = true;
    } else {
        playAnimatedTexture();
    }

    setAnimatedTextureTime(0);
}

function playAnimatedTexture() {
    const isAnimated = "getDuration" in movie.control;
    if (isAnimated) {
        provider = movie.control as AnimatedTextureFileProvider;
        provider.pause();
        provider.isAutoplay = false;
        if (animationData.duration + 1 !== provider.getFramesCount()) {
            showError(
                "ERROR: Exported tracking data frame numbers don't match the animated texture duration. Make sure to export the whole comp in After Effects or trim your comp.",
            );
            return;
        }
        const providerDurationCheck = roundToNearest(animationData.duration / animationData.frameRate);
        const providerDuration = roundToNearest(provider.getDuration());
        if (providerDuration !== providerDurationCheck) {
            showError("ERROR: You need to set the duration on animated texture to: " + providerDurationCheck);
            return;
        }
        animatedTextureInitialized = true;
    } else {
        showError("ERROR: Please assign a 2D Animated Texture file in the Video's texture input");
        return;
    }
}

function setAnimatedTextureTime(overtime: number) {
    startTime = getTime() - (overtime || 0);
}

function positionImage(frame: number) {
    if (animationData.positions[frame] !== null) {
        if (trackPosition) {
            const screenPos = animationData.positions[frame];
            const offsetPos = startingPositionOffset.add(screenPos);
            const worldPoint = extentsTarget.localPointToWorldPoint(offsetPos);
            const parentPoint = trackedImageTransform.worldPointToParentPoint(worldPoint);
            trackedImageTransform.anchors.setCenter(parentPoint);
        }

        if (trackScale) {
            const { x, y } = animationData.scales[frame];
            const trackedScale = new vec2(x, y).uniformScale(1 / 100);
            const newScale = startingScaleOffset.mult(trackedScale);
            trackedImageTransform.offsets.setSize(newScale);
        }

        if (trackRotation) {
            const rot = quat.fromEulerVec(animationData.rotations[frame].uniformScale(-Math.PI / 180));
            const rotateTo = startingRotationOffset.multiply(rot);
            trackedImageTransform.rotation = rotateTo;
        }
    }
}

function trackAnimatedTexture() {
    if (animatedTextureInitialized) {
        const frameNumber = Math.floor(timer * animationData.frameRate);
        if (frameNumber <= animationData.duration) {
            positionImage(frameNumber);

            if (showVideo) {
                provider.playFromFrame(frameNumber, -1);
            }
        }
    }
}

script.createEvent("UpdateEvent").bind(function onUpdate() {
    playBackTimer();
    trackAnimatedTexture();
});

function playBackTimer() {
    timer = getTime() - startTime;
    if (timer > timeLimit) {
        let overtime = timer - timeLimit;
        overtime = overtime % timeLimit;
        setAnimatedTextureTime(overtime);
    }
}

function findAnimationData() {
    const results: AnimationData[] = [];
    const allComponents = script.getSceneObject().getComponents("Component.ScriptComponent");
    for (const component of allComponents) {
        if (component.api) {
            if (component.api.animationData) {
                results.push(component.api.animationData);
            }
        }
    }

    if (results.length < 1) {
        return;
    }

    if (results.length > 1) {
        showError(
            "WARNING: There are multiple Tracking Data scripts on the faceInVideoController [EDIT_ME] object. Please make sure to only have one",
        );
    }

    animationData = results[results.length - 1];
    timeLimit = animationData.duration / animationData.frameRate;
}

function roundToNearest(value: number) {
    return Math.round(value * 1000) / 1000;
}

function getImageComponent(obj: Component) {
    return obj.getSceneObject().getComponent("Component.Image");
}
function setAlpha(color: vec4, alpha: number) {
    return new vec4(color.r, color.g, color.b, alpha);
}

function checkProperties() {
    if (!animationData) {
        showError(
            "ERROR: Tracking data not found. Please place the tracking data on the FaceInVideoController [EDIT_ME] object",
        );
        return false;
    }

    if (!mainImage) {
        showError("ERROR: Please assign a texture to Image texture input on FaceInVideoController script.");
        return false;
    }

    if (!trackedImageTransform) {
        showError(
            "ERROR: Please make sure Tracked Image object exists and assign the Tracked Image object under the advanced checkbox",
        );
        return false;
    }

    if (!movieImage) {
        showError(
            "ERROR: Please make sure Movie Image object exists and assign the Movie Image object under the advanced checkbox",
        );
        return false;
    }

    if (!extentsTarget) {
        showError(
            "ERROR: Please make sure Movie Image object exists and assign the Movie Image object under the advanced checkbox",
        );
        return false;
    }

    if (!backgroundImage) {
        showError("WARNING: Please make sure Background Image object exists and assigned under the advanced checkbox");
    }

    if (!movie && showVideo) {
        showError("ERROR: Please assign a video or animated texture to Video input on FaceInVideoController script.");
        return false;
    }
    return true;
}

function showError(message: string) {
    if (errorImage) {
        errorImage.enabled = true;
    }
    print("FaceInVideoController, " + message);
}
