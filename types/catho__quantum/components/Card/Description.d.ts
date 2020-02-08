import React = require('react');

type Description = React.ComponentType<{
    small?: boolean;
    theme?: { baseFontSize?: number; spacing?: object };
}> & {
    displayName: 'Card.Description';
};

export default Description;
