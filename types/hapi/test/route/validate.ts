
// Added from: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/16065#issuecomment-302216131

import * as Hapi from 'hapi';
import * as Joi from 'joi';

const validate: Hapi.RouteValidationConfigurationObject = {
    headers: true,
    params: {
        id: Joi.string(),
    },
    payload: Joi.object().required(),
    query: {
        providerId: Joi.string(),
    },
};

const config: Hapi.RouteAdditionalConfigurationOptions = {
    validate,
};
