import * as FluxStore from "./FluxStore";

declare namespace FluxMixinLegacy {
    interface Options {
        withProps?: boolean;
    }
}

/**
 * `FluxContainer` should be preferred over this mixin, but it requires using
 * react with classes. So this mixin is provided where it is not yet possible
 * to convert a container to be a class.
 *
 * This mixin should be used for React components that have state based purely
 * on stores. `this.props` will not be available inside of `calculateState()`.
 *
 * This mixin will only `setState` not replace it, so you should always return
 * every key in your state unless you know what you are doing.
 *
 * On the second calculateState when prevState is not null, the state will be
 * updated to contain the previous foo AND the bar that was just returned. Only
 * returning bar will not delete foo.
 */
declare function FluxMixinLegacy(stores: Array<FluxStore<any>>, options?: FluxMixinLegacy.Options): any;

export = FluxMixinLegacy;
