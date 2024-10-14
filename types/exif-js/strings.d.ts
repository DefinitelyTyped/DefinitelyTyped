export namespace EXIF_STRINGS {
    type Flash =
        | "Flash did not fire"
        | "Flash fired"
        | "Strobe return light not detected"
        | "Strobe return light detected"
        | "Flash fired, compulsory flash mode"
        | "Flash fired, compulsory flash mode, return light not detected"
        | "Flash fired, compulsory flash mode, return light detected"
        | "Flash did not fire, compulsory flash mode"
        | "Flash did not fire, auto mode"
        | "Flash fired, auto mode"
        | "Flash fired, auto mode, return light not detected"
        | "Flash fired, auto mode, return light detected"
        | "No flash function"
        | "Flash fired, red-eye reduction mode"
        | "Flash fired, red-eye reduction mode, return light not detected"
        | "Flash fired, red-eye reduction mode, return light detected"
        | "Flash fired, compulsory flash mode, red-eye reduction mode"
        | "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected"
        | "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected"
        | "Flash fired, auto mode, red-eye reduction mode"
        | "Flash fired, auto mode, return light not detected, red-eye reduction mode"
        | "Flash fired, auto mode, return light detected, red-eye reduction mode";

    type ExposureProgram =
        | "Not defined"
        | "Manual"
        | "Normal program"
        | "Aperture priority"
        | "Shutter priority"
        | "Creative program"
        | "Action program"
        | "Portrait mode"
        | "Landscape mode";

    type MeteringMode =
        | "Unknown"
        | "Average"
        | "CenterWeightedAverage"
        | "Spot"
        | "MultiSpot"
        | "Pattern"
        | "Partial"
        | "Other";

    type LightSource =
        | "Unknown"
        | "Daylight"
        | "Fluorescent"
        | "Tungsten (incandescent light)"
        | "Flash"
        | "Fine weather"
        | "Cloudy weather"
        | "Shade"
        | "Daylight fluorescent (D 5700 - 7100K)"
        | "Day white fluorescent (N 4600 - 5400K)"
        | "Cool white fluorescent (W 3900 - 4500K)"
        | "White fluorescent (WW 3200 - 3700K)"
        | "Standard light A"
        | "Standard light B"
        | "Standard light C"
        | "D55"
        | "D65"
        | "D75"
        | "D50"
        | "ISO studio tungsten"
        | "Other";

    type SensingMethod =
        | "Not defined"
        | "One-chip color area sensor"
        | "Two-chip color area sensor"
        | "Three-chip color area sensor"
        | "Color sequential area sensor"
        | "Trilinear sensor"
        | "Color sequential linear sensor";

    type SceneCaptureType = "Standard" | "Landscape" | "Portrait" | "Night scene";

    type SceneType = "Directly photographed";

    type CustomRendered = "Normal process" | "Custom process";

    type WhiteBalance = "Auto white balance" | "Manual white balance";

    type GainControl =
        | "None"
        | "Low gain up"
        | "High gain up"
        | "Low gain down"
        | "High gain down";

    type Contrast = "Normal" | "Soft" | "Hard";

    type Saturation = "Normal" | "Low saturation" | "High saturation";

    type Sharpness = "Normal" | "Soft" | "Hard";

    type SubjectDistanceRange =
        | "Unknown"
        | "Macro"
        | "Close view"
        | "Distant view";

    type FileSource = "DSC";

    type Components = "" | "Y" | "Cb" | "Cr" | "R" | "G" | "B";
}
