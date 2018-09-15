// Type definitions for @ember/service 3.0
// Project: http://emberjs.com/
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import Ember from 'ember';

export default class Service extends Ember.Service { }
export const inject: typeof Ember.inject.service;

// A type registry for Ember `Service`s. Meant to be declaration-merged so
// string lookups resolve to the correct type.
// tslint:disable-next-line no-empty-interface strict-export-declare-modifiers
interface Registry {}
