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

        geocodeByAddress(address, (results, status) => {
            getLatLng(results[0]).then((latLng) => {
                console.info(latLng, status);
            });
        });

        geocodeByPlaceId(placeId, (results, status) => {
            getLatLng(results[0]).then((latLng) => {
                console.info(latLng, status);
            });
        });
    }

    onChange = (address: string) => this.setState({ address });

    render() {
        const inputProps: PlacesAutocomplete["props"]["inputProps"] = {
            value: this.state.address,
            onChange: this.onChange,
        };

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete
                    inputProps={inputProps}
                />
            </form>
        );
    }
}
