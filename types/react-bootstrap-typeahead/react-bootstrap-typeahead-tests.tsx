import * as React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

const options = [
    { name: 'Alabama', population: 4780127, capital: 'Montgomery', region: 'South' },
    { name: 'Alaska', population: 710249, capital: 'Juneau', region: 'West' },
    { name: 'Arizona', population: 6392307, capital: 'Phoenix', region: 'West' },
    { name: 'Arkansas', population: 2915958, capital: 'Little Rock', region: 'South' },
    { name: 'California', population: 37254503, capital: 'Sacramento', region: 'West' },
    { name: 'Colorado', population: 5029324, capital: 'Denver', region: 'West' },
];

class BasicExample extends React.Component {
    state = {
        multiple: false,
    };

    render() {
        const { multiple } = this.state;

        return (
            <div>
                <Typeahead
                    labelKey="name"
                    multiple={multiple}
                    options={options}
                    placeholder="Choose a state..."
                />
            </div>
        );
    }
}
