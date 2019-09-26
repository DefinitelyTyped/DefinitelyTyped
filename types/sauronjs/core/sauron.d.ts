import Component = require('./component');
import Service = require('./service');

declare class Info {
    total: number;
}

interface SauronComponentMap {
    [key: string]: Component;
}

interface SauronInstance {
    rebootstrap: (map?: SauronComponentMap) => void;
    info: () => Info;
    plugin: (plugin: (instance: SauronInstance, options: any) => void, options: any) => SauronInstance;
    service: (Service: new (options: any) => Service, options: any) => SauronInstance;
    initCache: (id: string) => void;
}

declare function instance(componentMap: SauronComponentMap, id?: string): SauronInstance;

export = instance;
