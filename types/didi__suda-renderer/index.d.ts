// Type definitions for non-npm package @didi/suda-renderer 0.0
// Project: private
// Definitions by: rain <https://github.com/yhlchao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace SudaRendererSDK;

// 渲染器
declare class SudaRenderer {
    constructor(element: HTMLElement, options: SudaRendererOptions);
    context: SudaRendererContext;
    eventCenter: EventCenter;
    init: () => void;
    update: (formKey: string, version: string | undefined, options: SudaRendererUpdateOptions) => void;
}

// 创建渲染器实例的配置参数
interface SudaRendererOptions {
    formKey: string;
    version: string;
    debug?: boolean;
    router?: string;
    params?: Record<string, unknown>;
    dataSource?: {
        env?: string;
        sudaEnv?: string;
        headers?: Record<string, unknown>;
        isSuda?: boolean;
        renderBaseUrl?: string;
    };
    info?: {
        phone?: string | number;
        uid?: string | number;
    };
}

// 更新渲染器实例的配置参数
interface SudaRendererUpdateOptions {
    params?: Record<string, unknown>;
    dataSource?: {
        env?: string;
        sudaEnv?: string;
        headers?: Record<string, unknown>;
        isSuda?: boolean;
        renderBaseUrl?: string;
    };
}

interface SudaRendererContext {
    getSchema: () => Schema;
    getSchemaByComponentId: (id: number) => Schema | null;
    getModelTree: () => ModelTree;
    getModelByComponentId: (id: number) => Model | null;
    goToPage: (params: GoToPageParams) => void;
    getCommitInfoList: () => Array<Record<string, any>>;
}

// TODO: 补充
type Schema = any;
type Model = any;
type ModelTree = any;

interface GoToPageParams {
    isSuda: boolean;
    target: '_self' | '_blank';
    system: '_current' | '_other';
    path: string;
    query: Record<string, unknown>;
}

interface EventCenter {
    on: typeof EventCenterOn;
}

declare enum RendererEventEnum {
    ONLOAD = 'onload',
    ERROR = 'error',
    START_INIT = 'start-init',
    START_UPDATE = 'start-update',
    DSL_LOAD_SUCCESS = 'dsl:load-success',
    DSL_LOAD_ERROR = 'dsl:load-error',
    CONTEXT_INIT_SUCCESS = 'context:init-success',
    CONTEXT_INIT_ERROR = 'context:init-error',
}

declare function EventCenterOn(event: RendererEventEnum, callback: () => void): EventCenter;
declare function EventCenterOn(event: RendererEventEnum.ERROR, callback: (error: Error) => void): EventCenter;

declare enum SudaSdkTypeEnum {
    SudaRenderer,
}

interface SudaSdkLoaderOptions {
    type: keyof typeof SudaSdkTypeEnum;
    version: string;
}

// suda-sdk-loader
declare global {
    interface Window {
        getSudaSdk?: (options: SudaSdkLoaderOptions) => Promise<SudaRenderer>;
    }
}

export default SudaRenderer;
