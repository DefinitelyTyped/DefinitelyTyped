import Mixin from "@ember/object/mixin";
import Owner from "@ember/owner";

/**
 * Given a fullName return a factory manager.
 */
interface ContainerProxyMixin extends Owner {
    /**
     * Returns an object that can be used to provide an owner to a
     * manually created instance.
     */
    ownerInjection(): {};
}
declare const ContainerProxyMixin: Mixin<ContainerProxyMixin>;
export default ContainerProxyMixin;
