// this is not the actual definition file, just an example augmentation
/* tslint:disable:no-self-import no-declare-current-package */

import { VideoJsPlayer } from 'video.js';

declare module 'video.js' {
    interface VideoJsPlayer {
        somePluginDefinedInAugmentation(options?: {}): this;
    }

    interface VideoJsPlayerPluginOptions {
        somePluginDefinedInAugmentation: {
            someRequiredProperty: boolean;
        };
    }
}
