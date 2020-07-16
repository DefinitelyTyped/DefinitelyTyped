declare namespace WechatMiniprogram {
    namespace Behavior {
        type Instance<
            TData extends DataOption,
            TProperty extends PropertyOption,
            TMethod extends MethodOption
        > = Component.Instance<TData, TProperty, TMethod>
        type TrivialInstance = Instance<IAnyObject, IAnyObject, IAnyObject>
        type TrivialOption = Options<IAnyObject, IAnyObject, IAnyObject>
        type Options<
            TData extends DataOption,
            TProperty extends PropertyOption,
            TMethod extends MethodOption
        > = Partial<Data<TData>> &
            Partial<Property<TProperty>> &
            Partial<Method<TMethod>> &
            Partial<OtherOption> &
            Partial<Lifetimes> &
            ThisType<Instance<TData, TProperty, TMethod>>
        interface Constructor {
            <
                TData extends DataOption,
                TProperty extends PropertyOption,
                TMethod extends MethodOption
            >(
                options: Options<TData, TProperty, TMethod>
            ): string
        }

        type DataOption = Component.DataOption
        type PropertyOption = Component.PropertyOption
        type MethodOption = Component.MethodOption
        type Data<D extends DataOption> = Component.Data<D>
        type Property<P extends PropertyOption> = Component.Property<P>
        type Method<M extends MethodOption> = Component.Method<M>

        type DefinitionFilter = Component.DefinitionFilter
        type Lifetimes = Component.Lifetimes

        type OtherOption = Omit<Component.OtherOption, 'options'>
    }
}
/** 注册一个 `behavior`，接受一个 `Object` 类型的参数。*/
declare let Behavior: WechatMiniprogram.Behavior.Constructor
