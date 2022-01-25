import * as React from 'react';
import Twemoji, { TwemojiProps } from 'react-twemoji';

class Test extends React.Component<TwemojiProps> {
    render() {
        return (
            <Twemoji options={{ className: 'twemoji' }}>
                <p>😂<span>😉</span></p>
            </Twemoji>
        );
    }
}