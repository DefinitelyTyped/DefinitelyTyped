import * as React from 'react';

interface Fields {
    age: number;
    name: string;
    birthdate: {
        year: number,
        month: string,
        date: number,
    };
}

interface Props extends FormComponentProps<Fields> {
    foo: number;
}

class Form extends React.Component<Props> {
    render() {
        const { form } = this.props;

        form.getFieldValue('age');
        form.getFieldValue('birthdate.year');

        return null;
    }
}

createForm<Props>({
    onFieldsChange(props, fields) {
        props.foo;
        props.form;
        fields.age && fields.age.dirty;
    }
})(Form);
