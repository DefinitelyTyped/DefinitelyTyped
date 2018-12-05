import * as React from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

class Test extends React.Component {
    state = {
        address: 'San Francisco, CA',
        placeId: '12345',
    };

    handleFormSubmit = (event: any) => {
        event.preventDefault();

        const { address, placeId } = this.state;

        // Old API
        geocodeByAddress(address, (results, status) => {
            const latLng = getLatLng(results[0]);
            console.info(latLng, status);
        });

        geocodeByPlaceId(placeId, (results, status) => {
            const latLng = getLatLng(results[0]);
            console.info(latLng, status);
        });

        // New API
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
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        };

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete value={this.state.address} onChange={this.onChange} />
            </form>
        );
    }
}
