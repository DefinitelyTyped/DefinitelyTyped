// Type definitions for vue-chartkick 0.5
// Project: https://github.com/ankane/vue-chartkick#readme
// Definitions by: CNS Media <https://github.com/cnsmedia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "vue-chartkick" {
    import {PluginObject} from "vue";
    interface VueChartkickPlugin extends PluginObject<{adapter: any}> {
        version: string;
        addAdapter: (library: any) => void
    }
    const VueChartkick: VueChartkickPlugin;
    export default VueChartkick;
}
