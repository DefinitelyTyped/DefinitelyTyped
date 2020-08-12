import * as React from 'react';

import Poll from 'react-polls';

class PollTest extends React.Component<{}> {
    render() {
        return (
            <Poll
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
