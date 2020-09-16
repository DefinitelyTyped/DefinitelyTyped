import * as React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress, geocodeByPlaceId, getLatLng
} from 'react-places-autocomplete';

class Test extends React.Component {
    state = {
        address: 'San Francisco, CA',
        placeId: '12345',
    };

    handleFormSubmit = (event: any) => {
        event.preventDefault();

        const { address, placeId } = this.state;

        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => console.log('Success', latLng))
            .catch((error) => console.error('Error', error));

        geocodeByPlaceId(placeId)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => console.log('Success', latLng))
            .catch((error) => console.error('Error', error));
    }

    onChange = (address: string) => this.setState({ address });

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete value={this.state.address} onChange={this.onChange} googleCallbackName="google_callback_name">
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => {
                        const inputProps = getInputProps({
                            required: true,
                            className: loading ? 'is-pending' : ''
                        });
                        return (
                            <>
                                <input {...inputProps} />
                                <div>
                                    {suggestions.map(suggestion => {
                                        const divProps = getSuggestionItemProps(suggestion, {
                                            className: suggestion.active ? 'active' : ''
                                        });
                                        return (
                                            <div {...divProps}>
                                                {suggestion.description}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        );
                    }
                }
                </PlacesAutocomplete>
            </form>
        );
    }
}
