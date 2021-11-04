/** @jsx h */
import { h, Component } from 'ink';
import TextInput from 'ink-text-input';
// NOTE: `import TextInput = require('ink-text-input');` will work as well
// For importing using ES6 default import as above,
// `allowSyntheticDefaultImports` flag in compiler options needs to be set to `true`

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
