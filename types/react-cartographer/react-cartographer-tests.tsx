import * as React from "react";
import * from 'react-cartographer';
import Map from "react-cartographer/lib/components/Map";

class Test extends React.Component {
    render() {
        return (
            <Map
                providerKey=""
                provider='bing'
                mapId='map'
                addressLine1='One Microsoft Way'
                city='Redmond'
                state='WA'
                country='United States'
                zoom={15}
                height={270}
                width={580}
                useBackgroundImageStyle={true}
            />
        );
    }
}
