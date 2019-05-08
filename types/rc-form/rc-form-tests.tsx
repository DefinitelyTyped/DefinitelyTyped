import * as React from 'react';
import * as rcForm from 'rc-form';

interface Fields {
    age: number;
    name: string;
    birthdate?: {
        year: number,
        month: 'jan' | 'feb',
        date: number,
    };
    arr: Array<{
        a: number,
        b?: string,
    }>;
}

interface Props extends rcForm.FormComponentProps<Fields> {
    foo?: number;
    bar: string;
}

class Form extends React.Component<Props> {
    componentDidMount() {
        this.props.form.setFields({
            arr: {
                12: {
                    a: {
                        value: 13,
                    }
                }
            },
            birthdate: {
                month: {
                    value: 'jan',
                    touched: true,
                }
            },
        });
    }

    render() {
        const { form } = this.props;

        form.getFieldValue('age');
        form.getFieldValue('birthdate.year');

        return null;
    }
}

rcForm.createForm<Props>({
    onFieldsChange(props, fields, allFields) {
        props.foo;
        props.form;
        fields.age && fields.age;
        allFields.birthdate && allFields.birthdate.month.errors;
    }
})(Form);
