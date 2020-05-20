import event from "./event";

export default class component {
    $isComponent: boolean;
    $prefix: string;
    data: { [name: string]: any };

    computed?: { [name: string]: (self?: component) => any };
    methods?: { [name: string]: (evt?: event) => any };

    $init($wxpage: any, $root: any, $parent: any): void;
    $initMixins(): void;
    onLoad(): void;
    setData(k: string | string[], v: any): void;
    getWxPage(): any;
    $setIndex(index: number): void;
    $getComponent(com: any): any;
    $apply(fn: () => void): void;
    $nextTick(fn: () => void): void;
}
