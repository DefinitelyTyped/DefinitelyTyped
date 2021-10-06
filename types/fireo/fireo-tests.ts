import { Field, TextField } from 'fireo';

const textField: TextField = Field.Text();
textField.setValue('test-string');

// $ExpectType string
textField.getValue();
