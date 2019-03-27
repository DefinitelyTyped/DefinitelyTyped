import * as React from 'react';
import Hammer from 'react-hammerjs';

class ReactHammer extends React.Component<Hammer.ReactHammerProps> {
    swipe: Hammer.ReactHammerProps['onSwipe'] = input => {
        console.log(input.deltaX);
    }

    render() {
        const { children, ...props } = this.props;
        return (
            <Hammer onSwipe={this.swipe} {...props}>
                {children}
            </Hammer>
        );
    }
}
