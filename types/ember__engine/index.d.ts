// import Ember from 'ember';
import EmberObject from "@ember/object";
// eslint-disable-next-line @definitelytyped/no-self-import
import RegistryProxyMixin from "@ember/engine/-private/registry-proxy-mixin";
// eslint-disable-next-line @definitelytyped/no-self-import
import Initializer from "@ember/engine/-private/types/initializer";
// eslint-disable-next-line @definitelytyped/no-self-import
import EngineInstance from "@ember/engine/instance";
import { Resolver } from "@ember/owner";

/**
 * The `Engine` class contains core functionality for both applications and
 * engines.
 */

export default class Engine extends EmberObject {
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
     * Set this to provide an alternate class to `DefaultResolver`
     */
    resolver: Resolver | null;
    /**
     * Create an EngineInstance for this Engine.
     */
    buildInstance(options?: object): EngineInstance;
}

// tslint:disable-next-line:no-empty-interface -- used for declaration merge
export default interface Engine extends RegistryProxyMixin {}

/**
 * `getEngineParent` retrieves an engine instance's parent instance.
 */
export function getEngineParent(engine: EngineInstance): EngineInstance;
