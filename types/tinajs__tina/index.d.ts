export function use(plugin: any): void;

export interface ComponentProperties {
    [key: string]: any;
}

export interface ComponentLifecycles {
    created: () => void;
    attached: () => void;
    ready: () => void;
    moved: () => void;
    detached: () => void;
}

export interface ComponentDefinitions extends ComponentLifecycles {
    properties: ComponentProperties;
    data: { [key: string]: any };
    compute: (data: { [key: string]: any }) => { [key: string]: any };
    methods: { [name: string]: (this: Component, ...args: any[]) => any };
    mixins: Array<Partial<ComponentDefinitions>>;
}

export class Component {
    static define(definitions: Partial<ComponentDefinitions>): void;
    static mixin(definitions: Partial<ComponentDefinitions>): void;
    setData(data: { [key: string]: any }): void;
    data: { [key: string]: any };
}

export interface PageHooks {
    beforeLoad: (this: Page) => void;
    onLoad: (this: Page, options?: any) => void;
    onReady: (this: Page) => void;
    onShow: (this: Page) => void;
    onHide: (this: Page) => void;
    onUnload: (this: Page) => void;
}

export interface PageEvents {
    onPullDownRefresh: (event: Page) => void;
    onReachBottom: (event: Page) => void;
    onShareAppMessage: (event: Page) => void;
    onPageScroll: (event: Page) => void;
}

export interface PageDefinitions extends ComponentDefinitions, PageEvents, PageHooks {
    mixins: Array<Partial<PageDefinitions>>;
}

export class Page extends Component {
    static define(definitions: Partial<PageDefinitions>): void;
    static mixin(definitions: Partial<PageDefinitions>): void;
}
