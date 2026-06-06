/// <reference lib="dom" />
/// <reference path="./async-validator.d.ts" />
/// <reference path="./element-plus.d.ts" />
/// <reference path="./common.d.ts" />

import { AvueCrud, AvueForm, AvueTree } from ".";

export * from "./crud";
export * from "./dic";
export * from "./form";
export * from "./select";
export * from "./tree";
export default Avue;

interface AvueConfig {
    size?: Size;
    menuType?: MenuType;
    theme?: "dark";
    axios?: any;
}
interface AvueInstall {
    install(app: any, config?: AvueConfig): void;
}
declare const Avue: AvueInstall;

declare module "vue" {
    interface GlobalComponents {
        AvueCrud: typeof AvueCrud;
        AvueForm: typeof AvueForm;
        AvueTree: typeof AvueTree;
    }
    interface ComponentCustomProperties {
        $Clipboard: (arg: { text: string }) => Promise<void>;
        $ImagePreview: (list: Array<{ url?: string; thumbUrl?: string }>, index?: number) => void;
        $Print: (selector: string | HTMLElement) => void;
        $Export: {
            excel: (arg: { title: string; columns: Array<{ label: string; prop: string }>; data: any[] }) => void;
            xlsx: (raw: File) => Promise<{ results: any[] }>;
        };
        $Log: {
            capsule: (title?: string, content?: string, type?: string) => void;
            colorful: (content?: string) => void;
            danger: (content?: string) => void;
            default: (content?: string) => void;
            primary: (content?: string) => void;
            success: (content?: string) => void;
            warning: (content?: string) => void;
        };
    }
}
