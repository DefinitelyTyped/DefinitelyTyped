import { Constructor, Mix, Super } from "./-private/utils";

declare namespace CoreObject {
    /** The type of options allowed to be passed to `Base.extend()` */
    type ExtendOptions<Base> = { [K in keyof Base]?: Base[K] } & Record<string, any>;

    /** The `this` type for any methods on the options passed to `Base.extend()` */
    type ExtendThisType<Base, Ext> = ThisType<Mix<Base, Ext> & { _super: Super<Base> }>;
}

declare class CoreObject {
    // TODO restrict to `Record<string, unknown>` once we can restrict to 3.0+ on DT
    init(options?: Record<string, any>): void;

    static extend<BaseClass extends Constructor<any>, Ext extends CoreObject.ExtendOptions<InstanceType<BaseClass>>>(
        this: BaseClass,
        options: Ext & CoreObject.ExtendThisType<InstanceType<BaseClass>, Ext>,
    ): BaseClass & Constructor<Mix<InstanceType<BaseClass>, Ext>>;
}
export = CoreObject;
