/**
 * Tests for the Ember-Data "module API" introduced in v2.3
 * @see https://www.emberjs.com/blog/2016/01/12/ember-data-2-3-released.html#toc_importing-modules
 */
import DS from 'ember-data';
// Adapters
import Adapter from 'ember-data/adapter';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import RESTAdapter from 'ember-data/adapters/rest';
// Serializers
import Serializer from 'ember-data/serializer';
import RESTSerializer from 'ember-data/serializers/rest';
import JSONSerializer from 'ember-data/serializers/json';
import JSONAPISerializer from 'ember-data/serializers/json-api';

// Model
import Model from 'ember-data/model';
// Model - attr
import attr from 'ember-data/attr';
// Model - relationships
import { hasMany, belongsTo } from 'ember-data/relationships';

// Transforms
import BooleanTransform from 'ember-data/transforms/boolean';
import StringTransform from 'ember-data/transforms/string';
import NumberTransform from 'ember-data/transforms/number';
import DateTransform from 'ember-data/transforms/date';
import Transform from 'ember-data/transforms/transform';

// Store
import Store from 'ember-data/store';

// Errors
import * as EDErrors from 'ember-data/adapters/errors';

import { assertType } from './lib/assert';

// ADAPTERS
// - identity
assertType<typeof DS.Adapter>(Adapter);
assertType<typeof DS.RESTAdapter>(RESTAdapter);
assertType<typeof DS.JSONAPIAdapter>(JSONAPIAdapter);
// - inheritance
assertType<typeof DS.Adapter>(RESTAdapter);
assertType<typeof DS.RESTAdapter>(JSONAPIAdapter);

// SERIALIZERS
// - identity
assertType<typeof DS.Serializer>(Serializer);
assertType<typeof DS.RESTSerializer>(RESTSerializer);
assertType<typeof DS.JSONSerializer>(JSONSerializer);
assertType<typeof DS.JSONAPISerializer>(JSONAPISerializer);
// - inheritance
assertType<typeof DS.Serializer>(JSONSerializer);
assertType<typeof DS.JSONSerializer>(RESTSerializer);
assertType<typeof DS.JSONSerializer>(JSONAPISerializer);

// MODEL
// - identity
assertType<typeof DS.Model>(Model);
// - attributes
assertType<typeof DS.attr>(attr);
// - relationships
assertType<typeof DS.hasMany>(hasMany);
assertType<typeof DS.belongsTo>(belongsTo);

// TRANSFORMS
// - identity
assertType<typeof DS.BooleanTransform>(BooleanTransform);
assertType<typeof DS.NumberTransform>(NumberTransform);
assertType<typeof DS.StringTransform>(StringTransform);
assertType<typeof DS.DateTransform>(DateTransform);
assertType<typeof DS.Transform>(Transform);

// STORE
// - identity
assertType<typeof DS.Store>(Store);

// ERRORS
// - identity
assertType<typeof DS.AdapterError>(EDErrors.AdapterError);
assertType<typeof DS.InvalidError>(EDErrors.InvalidError);
assertType<typeof DS.UnauthorizedError>(EDErrors.UnauthorizedError);
assertType<typeof DS.ForbiddenError>(EDErrors.ForbiddenError);
assertType<typeof DS.NotFoundError>(EDErrors.NotFoundError);
assertType<typeof DS.ConflictError>(EDErrors.ConflictError);
assertType<typeof DS.ServerError>(EDErrors.ServerError);
assertType<typeof DS.TimeoutError>(EDErrors.TimeoutError);
assertType<typeof DS.AbortError>(EDErrors.AbortError);
assertType<typeof DS.errorsHashToArray>(EDErrors.errorsHashToArray);
assertType<typeof DS.errorsArrayToHash>(EDErrors.errorsArrayToHash);
