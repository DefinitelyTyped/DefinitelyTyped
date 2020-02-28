import * as React from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
import ReactMapGL from 'react-map-gl';

const mapAccess: any = {
    mapboxApiAccessToken: "pk.test"
};

const mapStyle: any = {
    width: '100%',
    height: 600
};

const queryParams: any = {
    country: 'us'
};

class App extends React.Component {
    state = {
        viewport: {}
    };

    onSelected = (viewport: any, item: any) => {
        this.setState({viewport});
        console.log('Selected: ', item);
    }

    render() {
        const {viewport} = this.state;

        return (
            <div>
                <Geocoder
                    {...mapAccess} onSelected={this.onSelected} viewport={viewport} hideOnSelect={true}
                    queryParams={queryParams}
                />
                <ReactMapGL
                    {...mapAccess} {...viewport} {...mapStyle}
                    onViewportChange={(newViewport) => this.setState({viewport: newViewport})}
                />
            </div>
        );
    }
}
