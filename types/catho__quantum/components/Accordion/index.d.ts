import React = require('react');

export interface AccordionProps {
    theme?: {
        colors?: object;
        spacing?: object;
        baseFontSize?: number;
    };
    keepOnlyOneOpen?: boolean;
    items: Array<{
        title?: string;
        content?: React.ReactNode;
        opened?: boolean;
        onClick?: () => void;
    }>;
}

export default class Accordion extends React.Component<AccordionProps> {}
