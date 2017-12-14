import * as React from 'react';

export interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.StatelessComponent<ButtonProps>;

export interface WelcomeProps {
    showApp?: React.MouseEventHandler<HTMLElement>;
}

export const Welcome: React.StatelessComponent<WelcomeProps>;
