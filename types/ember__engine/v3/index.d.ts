// import Ember from 'ember';
import RegistryProxyMixin from "@ember/engine/-private/registry-proxy-mixin";
import Resolver from "@ember/engine/-private/resolver";
import Initializer from "@ember/engine/-private/types/initializer";
import EngineInstance from "@ember/engine/instance";
import EmberObject from "@ember/object";

/**
 * The `Engine` class contains core functionality for both applications and
 * engines.
 */
export default class Engine extends EmberObject.extend(RegistryProxyMixin) {
    /**
     * The goal of initializers should be to register dependencies and injections.
     * This phase runs once. Because these initializers may load code, they are
     * allowed to defer application readiness and advance it. If you need to access
     * the container or store you should use an InstanceInitializer that will be run
     * after all initializers and therefore after all code is loaded and the app is
     * ready.
     */
    static initializer(initializer: Initializer<Engine>): void;
    /**
     * Instance initializers run after all initializers have run. Because
     * instance initializers run after the app is fully set up. We have access
     * to the store, container, and other items. However, these initializers run
     * after code has loaded and are not allowed to defer readiness.
     */
    static instanceInitializer(instanceInitializer: Initializer<EngineInstance>): void;
    /**
     * Set this to provide an alternate class to `Ember.DefaultResolver`
     */
    resolver: Resolver;
    /**
     * Create an EngineInstance for this Engine.
     */
    buildInstance(options?: object): EngineInstance;
}

/**
 * `getEngineParent` retrieves an engine instance's parent instance.
 */
export function getEngineParent(engine: EngineInstance): EngineInstance;
