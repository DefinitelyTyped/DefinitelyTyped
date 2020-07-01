
// Added from: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/16065#issuecomment-302216131

import * as Hapi from 'hapi';
import * as Joi from 'hapi../../joi';

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

interface CustomValidationOptions extends Joi.ValidationOptions {
    myOption: number;
}

const inputValidationFunction: Hapi.ValidationFunctionForRouteInput<CustomValidationOptions> = (value, options, next) => {
    options.myOption; // check custom options
    options.context.auth.artifacts; // check context
    next(null, value); // check with value
    next(); // check without value
};

const validateWithFunctions: Hapi.RouteValidationConfigurationObject<CustomValidationOptions> = {
    params: inputValidationFunction,
    headers: inputValidationFunction,
    payload: inputValidationFunction,
    query: inputValidationFunction,
    options: {
        myOption: 18
    }
};

const responseValidationFunction: Hapi.ValidationFunctionForRouteResponse<CustomValidationOptions> = (value, options, next) => {
    options.myOption; // check custom options
    options.context.auth.isAuthenticated; // check context
    next(null, value); // check with value
    next(); // check without value
};

config = {
    validate: validateWithFunctions,
    response: {
        schema: responseValidationFunction,
        options: {
            myOption: 18
        }
    } as Hapi.RouteResponseConfigurationObject<CustomValidationOptions>
};
