import { Field, TextField, Model, IDField } from 'fireo';

const textField: TextField = Field.Text();
textField.setValue('test-string');

// $ExpectType string
textField.getValue();

class User extends Model {
    name: TextField = Field.Text();
}

// $ExpectType User
const user: User = User.init();
