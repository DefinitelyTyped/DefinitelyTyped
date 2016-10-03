/// <reference path="../react/react.d.ts" />
/// <reference path="./react-is-deprecated.d.ts"/>

import { PropTypes } from 'react';
import { deprecate, addIsDeprecated } from 'react-is-deprecated';

// test: one-off deprecation
deprecate(PropTypes.string, 'message');

// test: one-off deprecated with isRequired
deprecate(PropTypes.string.isRequired, 'message');

// test: isDeprecated is added to a proptype
addIsDeprecated(PropTypes).string.isDeprecated('message');

// test: isRequired is still present on that proptype
addIsDeprecated(PropTypes).string.isRequired;
