import * as React from 'react';
import ReactTypingEffect from 'react-typing-effect';

class Test extends React.Component {
    render() {
        return (
            <ReactTypingEffect staticText="Hello" text={['Test', 'Again Test']} typingDelay={500} eraseDelay={1000} eraseSpeed={150} />
        );
    }
}
