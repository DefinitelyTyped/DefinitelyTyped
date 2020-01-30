import React = require('react');

type Media = React.ComponentType<{
    className?: string;
    style?: object;
    theme?: { colors?: object; spacing?: object };
}> & {
    displayName: 'Card.Media';
};

export default Media;
