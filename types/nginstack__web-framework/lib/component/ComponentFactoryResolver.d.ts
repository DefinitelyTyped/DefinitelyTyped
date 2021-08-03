export = ComponentFactoryResolver;
declare function ComponentFactoryResolver(): void;
declare class ComponentFactoryResolver {
    factories_: any;
    resolve(componentName: string): any;
    registerFactory(componentName: string, factory: any): void;
}
declare namespace ComponentFactoryResolver {
    function getInstance(): ComponentFactoryResolver;
}
