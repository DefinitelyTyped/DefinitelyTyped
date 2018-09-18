// Type definitions for @ember/controller 3.0
// Project: http://emberjs.com/
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import Ember from 'ember';

export default class Controller extends Ember.Controller { }
export const inject: typeof Ember.inject.controller;

// A type registry for Ember `Controller`s. Meant to be declaration-merged
// so string lookups resolve to the correct type.
// tslint:disable-next-line no-empty-interface
export interface Registry {}
