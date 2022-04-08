import r = require("revalidate");

const isValidEmail = r.createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  'Invalid email address'
);

const isGreaterThan = (n: any) => r.createValidator(
  message => value => {
    if (value && Number(value) <= n) {
      return message;
    }
  },
  field => `${field} must be greater than ${n}`
);

const customIsRequired = r.isRequired({ message: 'Required' });

const lessThan = r.hasLengthLessThan(16)({ message: 'Must be 15 characters or less' });

const username = r.composeValidators(
  customIsRequired,
  lessThan
)();

const email = r.composeValidators(
  customIsRequired,
  isValidEmail
)();

const isNumber = r.isNumeric({
  message: 'Must be a number'
});

const isGreater = isGreaterThan(17)({
  message: 'Sorry, you must be at least 18 years old'
});

const age = r.composeValidators(
  customIsRequired,
  isNumber,
  isGreater
)();

const validate = r.combineValidators({
  username,
  email,
  age
});
