import EditText, { onSaveProps } from 'react-edit-text';
import * as React from 'react';

const onSaveTest = ({name, value}: onSaveProps) => {
    console.log(name + value);
};

<EditText />;
<EditText id="firstName"/>;
<EditText name="firstName"/>;
<EditText className="firstName"/>;
<EditText value="firstName"/>;
<EditText type="email" placeholder="Enter your email"/>;
<EditText type="email" name="email"/>;
<EditText type="email" name="email" onSave={onSaveTest}/>;
<EditText inline/>;
<EditText style={{margin: 0}}/>;
<EditText readonly/>;
