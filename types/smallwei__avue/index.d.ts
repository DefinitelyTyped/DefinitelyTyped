// Type definitions for avue 3.0
// Project: https://github.com/nmxiaowei/avue
// Definitions by: Lyoko <https://github.com/SoulLyoko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="dom" />
/// <reference types="web-bluetooth" />
/// <reference types="./dic" />
/// <reference types="./form" />
/// <reference types="./crud" />
/// <reference types="./tree" />
/// <reference types="./global" />

import { App } from 'vue';

interface AvueConfig {
    size?: 'large' | 'default' | 'small';
    menuType?: 'button' | 'icon' | 'text' | 'menu';
    theme?: 'dark';
    axios?: any;
}
interface AvueInstaller {
    install(app: App, config?: AvueConfig): void;
}
declare const Avue: AvueInstaller;

export default Avue;
