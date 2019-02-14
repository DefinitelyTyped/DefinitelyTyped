/** @jsx h */
import { h, Component } from 'ink';
import TextInput from 'ink-text-input';

interface QueryState {
    query: string;
}

class SearchQuery extends Component {
    constructor() {
        super();

        this.state = {
            query: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(props: {}, state: QueryState) {
        return (
            <div>
                Enter your query:

				<TextInput
                    value={state.query}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </div>
        );
    }

    private handleChange(value: string) {
        this.setState({
            query: value,
        });
    }

    private handleSubmit(value: string) {
        console.log(value);
    }
}
