import React from 'react';
import theme from 'styled-theming';
import styled, { css } from 'styled-components';

const textColor = theme('mode', {
    dark: 'white',
    light: 'black',
});

const backgroundColor = theme.variants('mode', 'variant', {
    default: { light: 'gray', dark: 'darkgray' },
    primary: { light: 'blue', dark: 'darkblue' },
    success: { light: 'green', dark: 'darkgreen' },
    warning: { light: 'orange', dark: 'darkorange' },
});

const cssTheme = theme('mode', {
    dark: css`
        background: gray;
    `,
    light: css`
        background: white;
    `,
});

interface cssProps {
    visible: boolean;
}
const cssPropsTheme = theme('mode', {
    dark: css`
        visibility: ${(props: cssProps) => (props.visible ? 'visible' : 'hidden')};
    `,
    light: css`
        background: white;
    `,
});

interface buttonProps {
    hidden?: boolean | undefined;
}

const button = theme.variants('mode', 'kind', {
    primary: {
        light: (props: buttonProps) =>
            css`
                background: ${props.hidden ? 'transparent' : 'blue'};
            `,
        dark: (props: buttonProps) =>
            css`
                background: ${props.hidden ? 'transparent' : 'black'};
            `,
    },
    secondary: {
        light: (props: buttonProps) =>
            css`
                background: ${props.hidden ? 'transparent' : 'skyblue'};
            `,
        dark: (props: buttonProps) =>
            css`
                background: ${props.hidden ? 'transparent' : 'grey'};
            `,
    },
});

const Button = styled.button`
    ${button}
`;

const elementWithoutProp = React.createElement(Button);
const elementWithCorrectProp = React.createElement(Button, { kind: 'secondary' });
// TODO(react): Unclear why this doesn't error. Probably picking an overload where excess props are fine.
const element = React.createElement(Button, { kind: 'wrong variant' });
// @ts-expect-error
<Button kind="wrong variant" />;
