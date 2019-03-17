// Type definitions for non-npm package @ember/service 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Fservice
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import EmberObject from '@ember/object';
import ComputedProperty from '@ember/object/computed';

export default class Service extends EmberObject {}
/**
 * Creates a property that lazily looks up a service in the container. There
 * are no restrictions as to what objects a service can be injected into.
 */
export function inject(): PropertyDecorator & ComputedProperty<Service>; // @inject() foo, foo: inject()
export function inject(target: object, propertyKey: string | symbol): void; // @inject foo
export function inject<K extends keyof Registry>(name: K): PropertyDecorator & ComputedProperty<Registry[K]>; // @inject('store') foo      @inject() foo

// A type registry for Ember `Service`s. Meant to be declaration-merged so
// string lookups resolve to the correct type.
// tslint:disable-next-line no-empty-interface strict-export-declare-modifiers
interface Registry {}
