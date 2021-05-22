import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

export const _ = () => {
    const form = useForm({ defaultValues: { example: 'test' } });

    useFormPersist(
        'exampleForm',
        { watch: form.watch, setValue: form.setValue },
        {
            storage: window.localStorage,
        },
    );
    return null;
};
