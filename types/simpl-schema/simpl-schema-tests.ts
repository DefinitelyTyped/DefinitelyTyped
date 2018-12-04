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
  title: {
    type: String,
    label: "Argument",
    custom: function () {
      var text = this.value;
      if(text.length > 10) return { type: SimpleSchema.ErrorTypes.MAX_STRING, max: 10 };
    }
  },
});

StringSchema.validate({
    basicString: "Test",
    limitedString: "pro",
    regExpString: "id"
});

    /*
    ,
    title: {
      type: String,
      label: "Argument",
      custom: function () {
        var text = this.value;
        text = text.replace(/https?:\/\/(www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6})\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi, '$2');

        if(text.length > MAX_ARGUMENT_LENGTH) return { type: SimpleSchema.ErrorTypes.MAX_STRING, max: MAX_ARGUMENT_LENGTH }
        else if(text.length < MIN_ARGUMENT_LENGTH) return { type: SimpleSchema.ErrorTypes.MIN_STRING, min: MIN_ARGUMENT_LENGTH }
      }
    },
    questionId: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    side: {
      type: String,
      allowedValues: ['pro', 'con']
    },
    userId: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    createdAt: {
      type: Date,
      autoValue: () => new Date(),
    },
    clapCount: {
      type: SimpleSchema.Integer,
      defaultValue: 0
    },
    highlight: {
      type: Array,
      optional: true
    },
    'highlight.$': {
      type: Object
    },
    'highlight.$.start': SimpleSchema.Integer,
    'highlight.$.end': SimpleSchema.Integer,
    'highlight.$.text': {
      type: String,
      trim: false
    }
    */
    /*
    ,
    {
        clean: {
            filter: true,
            autoConvert: true,
            removeEmptyStrings: true,
            trimStrings: true,
            getAutoValues: true,
            removeNullsFromArrays: true,
        }
    }
    */
