declare const removedComponent: (name: any) => {
    new (): {};
    create(): void;
    init(): void;
    components: WeakMap<object, any>;
    options: {};
};
export default removedComponent;
