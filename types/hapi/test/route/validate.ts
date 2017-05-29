
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
    options: {
        abortEarly: true,
    },
};

let config: Hapi.RouteAdditionalConfigurationOptions = {
    validate,
    response: {
        schema: Joi.object(),
    },
};

const inputValidationFunction: Hapi.ValidationFunctionForRouteInput = (value: any, options: Hapi.RouteInputValidationContext, next: Hapi.ContinuationOptionalValueFunction) => {
    next(undefined, value);
};

const responseValidationFunction: Hapi.ValidationFunctionForRouteResponse = (value: any, options: Hapi.RouteResponseValidationContext, next: Hapi.ContinuationOptionalValueFunction) => {
    next();
}

const validateWithFunctions: Hapi.RouteValidationConfigurationObject = {
    params: inputValidationFunction,
    headers: inputValidationFunction,
    payload: inputValidationFunction,
    query: inputValidationFunction,
};

config = {
    validate,
    response: {
        schema: responseValidationFunction,
    },
};
