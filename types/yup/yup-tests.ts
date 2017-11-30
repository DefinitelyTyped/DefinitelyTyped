import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(() => new Date())
});

// check validity
schema.isValid({
    name: 'jimmy',
    age: 24
})
.then(valid => valid /* => true */);

class CustomDateSchema extends yup.date {
    isWednesday(message?: string): CustomDateSchema {
        return this.test({
            name: 'Wednesday',
            // tslint:disable-next-line:no-invalid-template-strings
            message: message || '${path} must be Wednesday',
            test: value => true /* Check that day is Wednesday */,
        }) as CustomDateSchema;
    }
}
const date = () => new CustomDateSchema();

yup.object().shape({
    startDate: date().isWednesday().required()
});
const valid = schema.isValidSync({
    startDate: '2017-11-29',
});

// test when
yup.object().shape({
    checkWednesday: yup.bool().required(),
    name: yup.string().required(),
    startDate: date()
        .required()
        .when(['checkWednesday', 'name'], (checkWednesday: boolean, name: string, schema: CustomDateSchema) => {
            return checkWednesday ? schema.isWednesday() : schema;
        })
});
