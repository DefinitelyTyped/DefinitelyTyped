// Type definitions for ipaiva 0.2
// Project: https://github.com/ipaiva-studio
// Definitions by: ipaiva <https://github.com/ipaiva-studio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'ipaiva' {
    /**
     * The version of the ipaiva.
     */
    export const version: string;

    interface TextEditorOptions {
        placeholder?: string;
    }

    interface TextEditor {
        on(event: 'completed', fn: (content: string) => void): this;
    }

    export namespace textEditor {
        export function create(elem: HTMLElement, options?: TextEditorOptions): TextEditor;
    }

    export namespace window {
        export function showInformationMessage(message: string): void;
    }

    /**
     * library scope
     */
    export namespace library {
        type OnDidPickCallback = (callback: { url: string }) => void;
        interface OnDidPickOption {
            type: 'image' | 'video' | 'audio';
        }

        function onDidPick(callback: OnDidPickCallback, option?: OnDidPickOption): void;
    }

    export namespace Crate {
        interface Package {
            name: string;
            version: string;
        }

        interface NodeData {
            [key: string]: string | number | boolean | object;
        }

        type Props = Record<string, any>;

        interface Design {
            main?: string;
            data?: NodeData;
            options?: DesignOptions;
            dependencies?: any;
            transformer?: Transformer;
            styleSchema?: DesignStyleSchema;
            controls?: DesignControls;
            nodeEvents?: DesignNodeEvents;
            preCreate?(option: PreCreateOption): PreCreateOption;
            overrideRenderProperties?(props: Props): Props;

            /**
             * extract options
             *
             * @param options DesignOptions
             */
            extractOptions?(options: DesignOptions): DesignOptions;
        }

        interface Render {}

        interface Transformer {
            keepRatio?: boolean;
            minWidth?: number;
            minHeight?: number;
            zoomable?: string;
        }

        interface DesignOptions {
            width?: number;
            height?: number;
            hasMask?: boolean;
            attrs?: {
                [key: string]: any;
            };
        }

        type DesignStyleSchema = any;

        interface DesignControl {
            name: string;
            render: any; // React.ReactNode
        }

        type DesignControls = DesignControl[];

        /**
         * Node
         */
        interface NodeUpdateAttrs {
            [key: string]: any;
        }

        interface Node {
            update(attrs: NodeUpdateAttrs): Node;
            inactive(): Node;
            find(selector: string): HTMLElement | null;
        }

        /**
         * 节点事件
         *
         * click | dblclick
         */
        interface DesignNodeEvents {
            dblclick(e: MouseEvent, node: Node): void;
        }

        interface PreCreateOption {
            [key: string]: any;
        }
    }
}
