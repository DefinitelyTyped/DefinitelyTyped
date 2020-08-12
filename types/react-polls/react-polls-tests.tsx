import * as React from 'react';

import Polls from 'react-polls';

class Test extends React.Component {
    render() {
        return (
            <Polls
                question={'Test Question?'}
                answers={[
                    { option: 'Yes', votes: 0 },
                    { option: 'No', votes: 1 },
                ]}
                onVote={(voteAnswer: string) => console.log('Voted!')}
            />
        );
    }
}
