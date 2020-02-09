import React = require('react');

type Footer = React.ComponentType<{
    theme?: { spacing?: object };
}> & {
    displayName: 'Card.Footer';
};

export default Footer;
