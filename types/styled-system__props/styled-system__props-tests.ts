import { pick, omit } from '@styled-system/props';

omit({
    color: 'red',
    id: 'test',
});

pick({
    color: 'red',
    id: 'test',
});

interface ButtonProps {
    id: string;
    className?: string;
}

const buttonProps: ButtonProps = {
    id: 'my-button',
    className: 'test'
};

const { id, ...rest } = buttonProps;

pick(buttonProps);

omit(rest);
