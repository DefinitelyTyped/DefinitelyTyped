import { uv, xy } from '../src/chromaticity';
import ColorImport, { ToColorPrototype } from '../src/color';
import contrast from '../src/contrast';
import { contrastWCAG21, contrastAPCA, contrastMichelson, contrastWeber, contrastLstar } from '../src/contrast/';
import deltaE from '../src/deltaE';
import { deltaE76, deltaECMC, deltaE2000, deltaEJz, deltaEITP, deltaEOK } from '../src/deltaE/';
import { mix, range, steps } from '../src/interpolation';
import { getLuminance } from '../src/luminance';
import { lighten, darken } from '../src/variations';

declare namespace Color {
    // contrast
    export { contrast };
    // contrastMethods
    export { contrastWCAG21, contrastAPCA, contrastMichelson, contrastWeber, contrastLstar };
    // deltaE
    export { deltaE, deltaE76, deltaECMC, deltaE2000, deltaEJz, deltaEITP, deltaEOK };
    // interpolation
    export { mix, range, steps };
    // variations
    export { lighten, darken };
}

declare class Color extends ColorImport {
    // chromaticity
    uv: ToColorPrototype<typeof uv>;
    xy: ToColorPrototype<typeof xy>;

    // contrast
    contrast: ToColorPrototype<typeof contrast>;

    // contrastMethods
    contrastWCAG21: ToColorPrototype<typeof contrastWCAG21>;
    contrastAPCA: ToColorPrototype<typeof contrastAPCA>;
    contrastMichelson: ToColorPrototype<typeof contrastMichelson>;
    contrastWeber: ToColorPrototype<typeof contrastWeber>;
    contrastLstar: ToColorPrototype<typeof contrastLstar>;

    // deltaE
    deltaE: ToColorPrototype<typeof deltaE>;
    deltaE76: ToColorPrototype<typeof deltaE76>;
    deltaECMC: ToColorPrototype<typeof deltaECMC>;
    deltaE2000: ToColorPrototype<typeof deltaE2000>;
    deltaEJz: ToColorPrototype<typeof deltaEJz>;
    deltaEITP: ToColorPrototype<typeof deltaEITP>;
    deltaEOK: ToColorPrototype<typeof deltaEOK>;

    // interpolation
    mix: ToColorPrototype<typeof mix>;
    range: ToColorPrototype<typeof range>;
    steps: ToColorPrototype<typeof steps>;

    // luminance
    get luminance(): ReturnType<typeof getLuminance>;
    set luminance(_: any);

    // variations
    lighten: ToColorPrototype<typeof lighten>;
    darken: ToColorPrototype<typeof darken>;
}

export default Color;
