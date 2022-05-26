// Type definitions for vue3-openlayers 0.1
// Project: https://github.com/MelihAltintas/vue3-openlayers
// Definitions by: Pavel Z <https://github.com/R3VoLuT1OneR>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.6

import { App } from 'vue';
import feature from 'ol/Feature';
import * as geom from 'ol/geom';
import * as format from 'ol/format';
import * as loadingstrategy from 'ol/loadingstrategy';
import * as selectconditions from 'ol/events/condition';
import * as extent from 'ol/extent';
import * as animations from 'ol/easing';

declare module '@vue/runtime-core' {
    function inject(key: 'ol-feature'): typeof feature;
    function inject(key: 'ol-geom'): typeof geom;
    function inject(key: 'ol-animations'): typeof animations;
    function inject(key: 'ol-format'): typeof format;
    function inject(key: 'ol-loadingstrategy'): typeof loadingstrategy;
    function inject(key: 'ol-selectconditions'): typeof selectconditions;
    function inject(key: 'ol-extent'): typeof extent;
}

declare function install(app: App): void;

export default install;
export {
    install
};
