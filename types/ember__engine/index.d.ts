// Type definitions for non-npm package @ember/engine 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Fengine
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

// import Ember from 'ember';
import EmberObject from '@ember/object';
import RegistryProxyMixin from '@ember/engine/-private/registry-proxy-mixin';
import Initializer from '@ember/engine/-private/types/initializer';
import EngineInstance from '@ember/engine/instance';
import Resolver from 'ember-resolver';

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
