import { RecurlyError } from '@recurly/recurly-js';

const recurlyError: RecurlyError = {
  code: 'code',
  classification: 'classification',
  message: 'message',
  name: 'name'
};

recurlyError.help = 'help';
recurlyError.fields = ['field'];
recurlyError.details =  [{ field: 'field', messages: ['errors'] }];
