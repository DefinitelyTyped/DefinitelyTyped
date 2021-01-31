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

StringSchema.validate({
    basicString: 'Test',
    limitedString: 'pro',
    regExpString: 'id',
}, {keys: ['basicString']});

StringSchema.validator();

StringSchema.validator({
    clean: true
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

SimpleSchema.extendOptions(['autoform']);
