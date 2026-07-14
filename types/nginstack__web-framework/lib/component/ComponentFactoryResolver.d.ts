export = ComponentFactoryResolver;
declare function ComponentFactoryResolver(): void;
declare class ComponentFactoryResolver {
    private factories_;
    resolve(componentName: string): ComponentFactory;
    registerFactory(componentName: string, factory: ComponentFactory): void;
}
declare namespace ComponentFactoryResolver {
    export { getInstance, ComponentFactory };
}
declare function getInstance(): ComponentFactoryResolver;
type ComponentFactory = import('./ComponentFactory.js');
