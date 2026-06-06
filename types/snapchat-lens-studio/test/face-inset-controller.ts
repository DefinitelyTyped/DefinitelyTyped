// Typescript rewrite of FaceInsetController.js by Olen Davis <https://github.com/OlenDavis>
// Version: 0.0.2
// Event: Lens Initialized
// Description: Handles which face the supplied face insets are set to. Also adjusts the face inset positions based on the billboard and device resolutions

// @input Component.FaceInsetVisual[] faceInsets
// @input int face {"widget":"combobox", "values":[{"label":"First Face", "value":0}, {"label":"Second Face", "value":1}]}
// @input bool fallbackToFirst {"showIf":"face", "showIfValue":1}
// @ui {"widget":"separator"}
// @ui {"widget":"group_start", "label":"Fill Settings"}
// @input Component.Image billboard
// @input Asset.Texture defaultCamTex {}
// @ui {"widget":"group_end"}

declare namespace SnapchatLensStudio {
    interface ScriptInputs {
        faceInsets: Component.FaceInsetVisual[];
        face: number;
        fallbackToFirst: boolean;
        billboard: Component.Image;
        defaultCamTex: Asset.Texture;
    }
}

// Initialize face insets
function initFaceInsets() {
    for (const faceInset of script.faceInsets) {
        if (!faceInset) {
            return;
        }

        faceInset.faceIndex = script.face;

        if (script.fallbackToFirst) {
            faceInset.faceIndex = 0;
        }

        // If your background uses fill mode
        // we need to recalculate the sprite's position
        // to account for how the image is displayed
        // because it changes based on the screen ratio.
        if (script.billboard.stretchMode === StretchMode.Fill) {
            const t = faceInset.getSceneObject().getTransform();

            const newPos = getFillScaledVec3(t.getLocalPosition());
            t.setLocalPosition(newPos);

            const newScale = getFillScaledVec3(t.getLocalScale());
            t.setLocalScale(newScale);
        }
    }
}

initFaceInsets();

// Set index when the face is found
function faceFound() {
    for (const faceInset of script.faceInsets) {
        if (!faceInset) {
            return;
        }

        faceInset.faceIndex = script.face;
    }
}
const faceFoundEvent = script.createEvent("FaceFoundEvent");
faceFoundEvent.faceIndex = script.face;
faceFoundEvent.bind(faceFound);

// If fallback is enabled, fallback to the first face
function faceLost() {
    if (script.fallbackToFirst) {
        for (const faceInset of script.faceInsets) {
            if (!faceInset) {
                return;
            }

            faceInset.faceIndex = 0;
        }
    }
}
const faceLostEvent = script.createEvent("FaceLostEvent");
faceLostEvent.faceIndex = script.face;
faceLostEvent.bind(faceLost);

function getFillScaledVec3(originalVec3: vec3) {
    if (!script.defaultCamTex) {
        print(
            "[FaceInsetController] Please set Default Cam Tex to Default Camera Texture. Skipping getFillModePosition().",
        );
        return originalVec3;
    }

    if (!script.billboard) {
        print("[FaceInsetController] Please set Billboard to your scene's Billboard. Skipping getFillModePosition().");
        return originalVec3;
    }

    const billboardTexture = script.billboard.mainMaterial.mainPass.baseTex;
    const imageRatioX = billboardTexture.getWidth();
    const imageRatioY = billboardTexture.getHeight();
    const imageRatio = imageRatioX / imageRatioY;

    const screenRatioX = script.defaultCamTex.getWidth();
    const screenRatioY = script.defaultCamTex.getHeight();
    const screenRatio = screenRatioX / screenRatioY;

    // By default position of sprite aligns
    // with the defaultRatio
    let multiplier = 1;

    if (screenRatio > imageRatio) {
        multiplier = screenRatio / imageRatio;
    }

    return new vec3(originalVec3.x * multiplier, originalVec3.y * multiplier, originalVec3.z);
}
