// Type definitions for non-npm package @ember/application 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Fapplication
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import Engine from '@ember/engine';
import ApplicationInstance from '@ember/application/instance';
import EventDispatcher from '@ember/application/-private/event-dispatcher';
import { EventDispatcherEvents } from '@ember/application/types';
import Router from '@ember/routing/router';
import Registry from '@ember/application/-private/registry';
import Resolver from 'ember-resolver';
import { AnyFn } from 'ember/-private/type-utils';
import Owner from '@ember/owner';
import type GlimmerComponent from '@glimmer/component';
import EmberObject from '@ember/object';

// Shut off default exporting; we don't want anything but the *intended*
// public API present.
export {};

/**
 * An instance of Ember.Application is the starting point for every Ember application. It helps to
 * instantiate, initialize and coordinate the many objects that make up your app.
 */
export default class Application extends Engine {
    /**
     * Call advanceReadiness after any asynchronous setup logic has completed.
     * Each call to deferReadiness must be matched by a call to advanceReadiness
     * or the application will never become ready and routing will not begin.
     */
    advanceReadiness(): void;
    /**
     * Use this to defer readiness until some condition is true.
     *
     * This allows you to perform asynchronous setup logic and defer
     * booting your application until the setup has finished.
     *
     * However, if the setup requires a loading UI, it might be better
     * to use the router for this purpose.
     */
    deferReadiness(): void;
    /**
     * defines an injection or typeInjection
     */
    inject(factoryNameOrType: string, property: string, injectionName: string): void;
    /**
     * This injects the test helpers into the window's scope. If a function of the
     * same name has already been defined it will be cached (so that it can be reset
     * if the helper is removed with `unregisterHelper` or `removeTestHelpers`).
     * Any callbacks registered with `onInjectHelpers` will be called once the
     * helpers have been injected.
     */
    injectTestHelpers(): void;
    /**
     * registers a factory for later injection
     * @param fullName type:name (e.g., 'model:user')
     * @param factory (e.g., App.Person)
     */
    register(
        fullName: string,
        factory: unknown,
        options?: { singleton?: boolean | undefined; instantiate?: boolean | undefined },
    ): void;
    /**
     * This removes all helpers that have been registered, and resets and functions
     * that were overridden by the helpers.
     */
    removeTestHelpers(): void;
    /**
     * Reset the application. This is typically used only in tests.
     */
    reset(): void;
    /**
     * This hook defers the readiness of the application, so that you can start
     * the app when your tests are ready to run. It also sets the router's
     * location to 'none', so that the window's location will not be modified
     * (preventing both accidental leaking of state between tests and interference
     * with your testing framework).
     */
    setupForTesting(): void;
    /**
     * The DOM events for which the event dispatcher should listen.
     */
    customEvents: EventDispatcherEvents;
    /**
     * The Ember.EventDispatcher responsible for delegating events to this application's views.
     */
    eventDispatcher: EventDispatcher;
    /**
     * Set this to provide an alternate class to `DefaultResolver`
     */
    resolver: Resolver | null;
    /**
     * The root DOM element of the Application. This can be specified as an
     * element or a jQuery-compatible selector string.
     *
     * This is the element that will be passed to the Application's, eventDispatcher,
     * which sets up the listeners for event delegation. Every view in your application
     * should be a child of the element you specify here.
     */
    rootElement: HTMLElement | string;
    /**
     * Called when the Application has become ready.
     * The call will be delayed until the DOM has become ready.
     */
    ready: AnyFn;
    /**
     * Application's router.
     */
    Router: Router;
    registry: Registry;
    /**
     *  Initialize the application and return a promise that resolves with the `Application`
     *  object when the boot process is complete.
     */
    boot(): Promise<Application>;
    /**
     * Create an ApplicationInstance for this Application.
     */
    buildInstance(options?: object): ApplicationInstance;
}

// Known framework objects, so that `getOwner` can always, accurately, return
// `Owner` when working with one of these classes, which the framework *does*
// guarantee will always have an `Owner`. NOTE: this must be kept up to date
// whenever we add new base classes to the framework. For example, if we
// introduce a standalone `Service` or `Route` base class which *does not*
// extend from `EmberObject`, it will need to be added here.
type FrameworkObject = EmberObject | GlimmerComponent;

/**
 * Framework objects in an Ember application (components, services, routes, etc.)
 * are created via a factory and dependency injection system. Each of these
 * objects is the responsibility of an "owner", which handled its
 * instantiation and manages its lifetime.
 */
export function getOwner(object: FrameworkObject): Owner;
export function getOwner(object: unknown): Owner | undefined;
/**
 * `setOwner` forces a new owner on a given object instance. This is primarily
 * useful in some testing cases.
 */
export function setOwner(object: unknown, owner: Owner): void;

/**
 * Detects when a specific package of Ember (e.g. 'Ember.Application')
 * has fully loaded and is available for extension.
 */
export function onLoad(name: string, callback: AnyFn): unknown;

/**
 * Called when an Ember.js package (e.g Ember.Application) has finished
 * loading. Triggers any callbacks registered for this event.
 */
export function runLoadHooks(name: string, object?: {}): unknown;
