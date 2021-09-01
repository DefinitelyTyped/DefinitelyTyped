import { assertType } from './lib/assert';

import Ember from 'ember';

assertType<typeof Ember.Error>(Ember.Error);
