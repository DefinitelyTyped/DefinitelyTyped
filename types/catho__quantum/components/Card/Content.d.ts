import React = require('react');

type Content = React.ComponentType<{
    theme?: { baseFontSize?: number; spacing?: object };
}> & {
    displayName: 'Card.Content';
};

export default Content;
