import * as Joi from 'joi';

Joi.string().phoneNumber({ strict: true }).validate('+123456789');
