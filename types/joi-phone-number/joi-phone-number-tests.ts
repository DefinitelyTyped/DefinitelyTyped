import Joi = require('joi');
import JoiPhone = require('joi-phone-number');

// extend joi
Joi.extend(JoiPhone);

Joi.string().phoneNumber({ strict: true }).validate('+123456789');

// no options
Joi.string().phoneNumber().validate('+123456789');

// empty options
Joi.string().phoneNumber({}).validate('+123456789');

// country array
Joi.string()
    .phoneNumber({ defaultCountry: ['US', 'UK'] })
    .validate('+123456789');

// all options
Joi.string().phoneNumber({ defaultCountry: 'US', format: 'e164', strict: true }).validate('+123456789');
