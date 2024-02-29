declare namespace WechatMiniprogram.Behavior {
    type BehaviorIdentifier = string;
    type Instance<
        TData extends DataOption,
        TProperty extends PropertyOption,
        TMethod extends MethodOption,
        TCustomInstanceProperty extends IAnyObject = Record<string, never>,
    > = Component.Instance<TData, TProperty, TMethod, TCustomInstanceProperty>;
    type TrivialInstance = Instance<IAnyObject, IAnyObject, IAnyObject>;
    type TrivialOption = Options<IAnyObject, IAnyObject, IAnyObject>;
    type Options<
        TData extends DataOption,
        TProperty extends PropertyOption,
        TMethod extends MethodOption,
        TCustomInstanceProperty extends IAnyObject = Record<string, never>,
    > =
        & Partial<Data<TData>>
        & Partial<Property<TProperty>>
        & Partial<Method<TMethod>>
        & Partial<OtherOption>
        & Partial<Lifetimes>
        & ThisType<Instance<TData, TProperty, TMethod, TCustomInstanceProperty>>;
    interface Constructor {
        <
            TData extends DataOption,
            TProperty extends PropertyOption,
            TMethod extends MethodOption,
            TCustomInstanceProperty extends IAnyObject = Record<string, never>,
        >(
            options: Options<TData, TProperty, TMethod, TCustomInstanceProperty>,
        ): BehaviorIdentifier;
    }

    type DataOption = Component.DataOption;
    type PropertyOption = Component.PropertyOption;
    type MethodOption = Component.MethodOption;
    type Data<D extends DataOption> = Component.Data<D>;
    type Property<P extends PropertyOption> = Component.Property<P>;
    type Method<M extends MethodOption> = Component.Method<M>;

    type DefinitionFilter = Component.DefinitionFilter;
    type Lifetimes = Component.Lifetimes;

    type OtherOption = Omit<Component.OtherOption, "options">;
}
/** 注册一个 `behavior`，接受一个 `Object` 类型的参数。*/
declare let Behavior: WechatMiniprogram.Behavior.Constructor;
