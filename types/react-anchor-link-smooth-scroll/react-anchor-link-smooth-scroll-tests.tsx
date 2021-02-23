import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class ReactAnimateOnScrollTest extends React.Component {
    render() {
        return (
            <>
                <AnchorLink offset="100" href="#some-link">
                    Some Text
                </AnchorLink>
                <AnchorLink offset={100} href="">
                    Some Text
                </AnchorLink>
                <AnchorLink offset={() => 100}>Some Text</AnchorLink>
            </>
        );
    }
}
