import ContainerProxyMixin from "@ember/engine/-private/container-proxy-mixin";
import RegistryProxyMixin from "@ember/engine/-private/registry-proxy-mixin";
import EmberObject from "@ember/object";

/**
 * The `EngineInstance` encapsulates all of the stateful aspects of a
 * running `Engine`.
 */
export default class EngineInstance extends EmberObject {
    /**
     * Unregister a factory.
     */
    unregister(fullName: string): unknown;

    /**
     *  Initialize the `EngineInstance` and return a promise that resolves
     *  with the instance itself when the boot process is complete.
     */
    boot(): Promise<EngineInstance>;
}

export default interface EngineInstance extends RegistryProxyMixin, ContainerProxyMixin {}
