import * as React from 'react';
import { EditText, EditTextarea, onSaveProps } from 'react-edit-text';

const onSaveTest = ({ name, value, previousValue }: onSaveProps) => {
    console.log(name + value + previousValue);
};

const onChangeTest = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(event.target.value);
};

const formatDisplayTextTest = (value: string) => {
    return '$' + value;
};

const TestEditButton = <div>Edit</div>;

const handleEditMode = () => {
    console.log("edit mode");
};

const handleBlur = () => {
    console.log("blurred");
};

<EditText />;
<EditText id="firstName" />;
<EditText name="firstName" />;
<EditText className="firstName" />;
<EditText inputClassName="firstName" />;
<EditText value="firstName" />;
<EditText defaultValue="firstName" />;
<EditText value="firstName" onChange={onChangeTest} />;
<EditText type="email" placeholder="Enter your email" />;
<EditText type="email" name="email" />;
<EditText type="email" name="email" onSave={onSaveTest} />;
<EditText inline />;
<EditText style={{ margin: 0 }} />;
<EditText readonly />;
<EditText type="number" value="100" formatDisplayText={formatDisplayTextTest} />;
<EditText showEditButton />;
<EditText showEditButton editButtonContent="Edit" />;
<EditText showEditButton editButtonContent={<i className="editIcon" />} />;
<EditText showEditButton editButtonProps={{ style: { marginTop: 10, padding: 0 }, id: 'test', className: 'test' }} />;
<EditText showEditButton editButtonContent={TestEditButton} editButtonProps={{ autoFocus: true }} />;
<EditText onEditMode={handleEditMode} />;
<EditText onBlur={handleBlur} />;

<EditTextarea />;
<EditTextarea id="desc" />;
<EditTextarea name="desc" />;
<EditTextarea className="desc" />;
<EditTextarea inputClassName="desc" />;
<EditTextarea value="Description" />;
<EditTextarea defaultValue="Description" />;
<EditTextarea value="Description" onChange={onChangeTest} />;
<EditTextarea placeholder="Enter a description" />;
<EditTextarea name="desc" onSave={onSaveTest} />;
<EditTextarea rows={5} />;
<EditTextarea style={{ padding: 0 }} />;
<EditTextarea readonly />;
<EditTextarea value="100" formatDisplayText={formatDisplayTextTest} />;
<EditTextarea onEditMode={handleEditMode} />;
<EditTextarea onBlur={handleBlur} />;
