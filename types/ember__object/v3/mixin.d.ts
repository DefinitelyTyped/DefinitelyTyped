import EmberObject from "@ember/object";
import { Fix, MixinOrLiteral } from "@ember/object/-private/types";

/**
 * The `Ember.Mixin` class allows you to create mixins, whose properties can be
 * added to other classes.
 */
export default class Mixin<T, Base = EmberObject> {
    /**
     * Mixin needs to have *something* on its prototype, otherwise it's treated like an empty interface.
     * It cannot be private, sadly.
     */
    __ember_mixin__: never;

    static create<T, Base = EmberObject>(
        args?: MixinOrLiteral<T, Base> & ThisType<Fix<T & Base>>,
    ): Mixin<T, Base>;

    static create<T1, T2, Base = EmberObject>(
        arg1: MixinOrLiteral<T1, Base> & ThisType<Fix<T1 & Base>>,
        arg2: MixinOrLiteral<T2, Base> & ThisType<Fix<T2 & Base>>,
    ): Mixin<T1 & T2, Base>;

    static create<T1, T2, T3, Base = EmberObject>(
        arg1: MixinOrLiteral<T1, Base> & ThisType<Fix<T1 & Base>>,
        arg2: MixinOrLiteral<T2, Base> & ThisType<Fix<T2 & Base>>,
        arg3: MixinOrLiteral<T3, Base> & ThisType<Fix<T3 & Base>>,
    ): Mixin<T1 & T2 & T3, Base>;

    static create<T1, T2, T3, T4, Base = EmberObject>(
        arg1: MixinOrLiteral<T1, Base> & ThisType<Fix<T1 & Base>>,
        arg2: MixinOrLiteral<T2, Base> & ThisType<Fix<T2 & Base>>,
        arg3: MixinOrLiteral<T3, Base> & ThisType<Fix<T3 & Base>>,
        arg4: MixinOrLiteral<T4, Base> & ThisType<Fix<T4 & Base>>,
    ): Mixin<T1 & T2 & T3 & T4, Base>;
}
