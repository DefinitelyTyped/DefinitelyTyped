import { Field, TextField, Model } from 'fireo';

const textField: TextField = Field.Text();
textField.setValue('test-string');

// $ExpectType any
textField.getValue();

class User extends Model {
    name: TextField = Field.Text();
}

// $ExpectType any
const user: User = User.init();
