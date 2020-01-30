import React = require('react');

type Header = React.ComponentType<{
    theme?: { spacing?: object };
}> & {
    displayName: 'Card.Header';
};

export default Header;
