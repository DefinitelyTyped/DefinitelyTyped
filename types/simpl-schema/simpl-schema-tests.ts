import SimpleSchema from 'simpl-schema';

const StringSchema = new SimpleSchema({
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
        autoValue: () => new Date(),
    },
    title: {
        type: String,
        label: "Argument",
        /* TODO, this does not work: "The containing arrow function captures the global value of 'this' which implicitly has type 'any'."
        custom: () => {
          const text = this.value;
          if (text.length > 10) return { type: SimpleSchema.ErrorTypes.MAX_STRING, max: 10 };
        }
        */
    },
});

StringSchema.validate({
    basicString: "Test",
    limitedString: "pro",
    regExpString: "id"
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
        autoValue: () => new Date(),
    },
},
{
    clean: {
        filter: true,
        autoConvert: true,
        removeEmptyStrings: true,
        trimStrings: true,
        getAutoValues: true,
        removeNullsFromArrays: true,
    }
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
