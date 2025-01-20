import { PluginObject } from "vue";

interface VueChartkickPlugin extends PluginObject<{ adapter: any }> {
    version: string;
    addAdapter: (library: any) => void;
}

declare const VueChartkick: VueChartkickPlugin;
export default VueChartkick;
