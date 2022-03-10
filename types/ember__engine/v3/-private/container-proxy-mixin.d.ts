import Mixin from '@ember/object/mixin';

/**
 * Given a fullName return a factory manager.
 */
interface ContainerProxyMixin {
    /**
     * Returns an object that can be used to provide an owner to a
     * manually created instance.
     */
    ownerInjection(): {};
    /**
     * Given a fullName return a corresponding instance.
     */
    lookup(fullName: string, options?: {}): any;
    /**
     * Given a fullName return a corresponding factory.
     */
    factoryFor(fullName: string, options?: {}): any;
}
declare const ContainerProxyMixin: Mixin<ContainerProxyMixin>;
export default ContainerProxyMixin;
