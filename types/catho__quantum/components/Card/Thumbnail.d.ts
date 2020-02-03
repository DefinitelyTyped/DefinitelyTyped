import React = require('react');

type Thumbnail = React.ComponentType<{
    src: string;
    alt: string;
    rounded?: boolean;
    theme?: { colors?: object };
}> & {
    displayName: 'Card.Thumbnail';
};

export default Thumbnail;
