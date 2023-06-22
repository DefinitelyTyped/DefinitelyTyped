import SimpleSchema, { SimpleSchemaDefinition, SchemaDefinition } from 'simpl-schema';
import { check } from 'meteor/check';

const schema: SimpleSchemaDefinition = {
    basicString: {
        type: String
    },
    limitedString: {
        type: String,
        allowedValues: ['pro', 'con']
    },
    regExpString: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    createdAt: {
        type: Date,
        custom() {
            this.key;
            this.genericKey;
            this.isInArrayItemObject;
            this.isInSubObject;
            this.isModifier;
            this.definition;
            this.isSet;
            this.value;
            this.operator;
            this.validationContext;
            this.field('field');
            this.siblingField('field');
            this.addValidationErrors([
                {
                    type: 'validation-error',
                    name: 'Error',
                }
            ]);
            return undefined;
        },
        autoValue() {
            this.closestSubschemaFieldName;
            this.field('basicString');
            this.isModifier;
            this.isUpsert;
            this.isSet;
            this.key;
            this.operator;
            this.parentField();
            this.siblingField('field');
            this.unset();
            this.value;

            return new Date();
        }
    },
    title: {
        type: String,
        label: 'Title',
        /* Can't use arrow function here, else the context won't be available */
        custom() {
          const text = this.value;

          if (text.length > 100) return { type: SimpleSchema.ErrorTypes.MAX_STRING, max: 100 };
          else if (text.length < 10) return SimpleSchema.ErrorTypes.MIN_STRING;
        }
    }
};

const StringSchema = new SimpleSchema(schema);

const testData = {
    basicString: 'Test',
    limitedString: 'pro',
    regExpString: 'id',
};

const testOptions = {keys: ['basicString']};

StringSchema.validate(testData);

StringSchema.validate(testData, testOptions);

// Static versions
SimpleSchema.validate(testData, StringSchema);

SimpleSchema.validate(testData, StringSchema, testOptions);

StringSchema.validator();

StringSchema.validator({
    modifier: true,
    upsert: true,
    extendedCustomContext: {},
    ignore: ['Error'],
    keys: ['key']
});

// If clean: true, clean options can be provided
StringSchema.validator({
    clean: true,
    trimStrings: true,
    removeNullsFromArrays: true
});

StringSchema.clean({title: ''}, {
    removeEmptyStrings: true,
    removeNullsFromArrays: true,
    isUpsert: false
});

const StringSchemaWithOptions = new SimpleSchema({
    basicString: {
        type: String
    },
    limitedString: {
        type: String,
        allowedValues: ['pro', 'con']
    },
    subschema: {
        type: StringSchema
    },
    userId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    },
    createdAt: {
        type: Date,
        autoValue: () => new Date()
    }
},
{
    clean: {
        filter: true,
        autoConvert: true,
        removeEmptyStrings: true,
        trimStrings: true,
        getAutoValues: true,
        removeNullsFromArrays: true,
    },
    check,
});

new SimpleSchema({
    shortBoolean: Boolean,
    shortString: String,
    shortNumber: Number,
    shortInteger: SimpleSchema.Integer,
    shortDate: Date,
    shortArray: Array,
    arrayOfString: [String],
    arrayOfNumber: [Number],
    arrayOfInteger: [SimpleSchema.Integer],
    arrayOfSchema: [StringSchema],
    oneOfTest: SimpleSchema.oneOf(String, SimpleSchema.Integer, Number, Boolean, /regextest/),
    subSchema: StringSchemaWithOptions
});

StringSchema.extend(
    new SimpleSchema({
        name: { type: String }
    })
);
StringSchema.extend({
    name: { type: String }
});

StringSchema.extend({
    name: { type: String, required: false }
});

StringSchema.extend({
    name: { type: String, required: () => false }
});

SimpleSchema.extendOptions(['autoform']);

SimpleSchema.setDefaultMessages({
    messages: {
        en: {
            required: '{{{label}}} is required',
        },
    },
});

const objectKeysTestSchema = new SimpleSchema({});

// No prefix passed
// $ExpectType any[]
objectKeysTestSchema.objectKeys();

// Prefix passed
// $ExpectType any[]
objectKeysTestSchema.objectKeys("_prefix");

// $ExpectType SchemaDefinition
StringSchema.schema();

// $ExpectType SchemaDefinition
StringSchema.schema('basicString');

// $ExpectType typeof SimpleSchema | undefined
StringSchema.getObjectSchema('basicString');
