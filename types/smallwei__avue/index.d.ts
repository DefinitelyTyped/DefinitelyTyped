// Type definitions for avue 3.0
// Project: https://github.com/nmxiaowei/avue
// Definitions by: Lyoko <https://github.com/SoulLyoko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="dom" />
/// <reference path="./element-plus.d.ts" />
/// <reference path="./dic.d.ts" />
/// <reference path="./form.d.ts" />
/// <reference path="./crud.d.ts" />
/// <reference path="./tree.d.ts" />
/// <reference path="./global.d.ts" />

// import { App } from 'vue';

interface AvueConfig {
    size?: 'large' | 'default' | 'small';
    menuType?: 'button' | 'icon' | 'text' | 'menu';
    theme?: 'dark';
    axios?: any;
}
interface AvueInstaller {
    install(app: any, config?: AvueConfig): void;
}
declare const Avue: AvueInstaller;

export default Avue;
