
import jjv = require('jjv');

// create new JJV environment
var env = jjv();
var errors: jjv.Errors;

// Register a `user` schema
env.addSchema('user', {
	type: 'object',
	properties: {
		firstname: {
			type: 'string',
			minLength: 2,
			maxLength: 15,
		},
		lastname: {
			type: 'string',
			minLength: 2,
			maxLength: 25,
		},
		gender: {
			type: 'string',
			enum: ['male', 'female'],
		},
		email: {
			type: 'string',
			format: 'email',
		},
		password: {
			type: 'string',
			minLength: 8,
		},
	},
	required: ['firstname', 'lastname', 'email', 'password'],
});

// Perform validation against an incomplete user object (errors will be reported)
errors = env.validate('user', { firstname: 'John', lastname: 'Smith' });

errors = env.validate({
	type: 'object',
	properties: {
		x: { type: 'number' },
		y: { type: 'number' },
	},
	required: ['x', 'y'],
}, { x: 'a' });

if (errors.validation['x'].type === 'string') {
	console.log('x is wrong type');
}

if (errors.validation['y'].required) {
	console.log('y is required');
}

env.defaultOptions.checkRequired = false;

env.validate('schemaName', {}, { checkRequired: false });

env.addType('date', (v: any) => !isNaN(Date.parse(v)));

env.addFormat('hexadecimal', (v: any) => (/^[a-fA-F0-9]+$/).test(v));

env.addCheck('exactLength', (v: any, p: any) => v.length === p);

env.addTypeCoercion('integer', (x: any) => parseInt(x, 10));
