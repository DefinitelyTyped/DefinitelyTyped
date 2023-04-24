import { Map } from 'leaflet';
import { getContext } from 'svelte';
import { LeafletMap, TileLayer, LeafletContext, Circle } from 'svelte-leafletjs';

//
// component tests
//

{
    const mapEl = new LeafletMap({
        target: document.body,
        props: { options: { center: [-41.2835, 174.7427] } },
    });

    // $ExpectType Map
    mapEl.getMap();

    mapEl.$on('locationfound', e => {
        // $ExpectType LocationEvent
        e;
    });
}

{
    new TileLayer({
        target: document.body,
        // @ts-expect-error -- required prop missing
        props: {},
    });
}

{
    const tileLayerEl = new TileLayer({
        target: document.body,
        props: {
            url: 'abc',
            // @ts-expect-error -- invalid value
            wms: 1,
        },
    });

    // $ExpectType TileLayer
    tileLayerEl.getTileLayer();

    // @ts-expect-error this event doesn't exist on this component
    tileLayerEl.$on('locationfound', () => {});
}

{
    const circleEl = new Circle({
        target: document.body,
        props: {
            latLng: [-36.77892, 174.55032],
            opacity: -3,
        },
    });

    // test that leaflet methods work
    circleEl.getCircle().getBounds();

    circleEl.$on('dblclick', e => {
        // $ExpectType LeafletMouseEvent
        e;
    });
}

{
    /* tslint:disable-next-line */
    let getMap: () => Map;

    const f = () => {
        const mapEl = new LeafletMap({
            target: document.body,
            props: { options: { center: [-36.84111, 174.7682] }, getMap, events: ['moveend', 'zoom', 'resize'] },
        });
    };
}

//
// context tests
//

// $ExpectType Map
getContext<LeafletContext.Map>('key').getMap();

// @ts-expect-error accessing invalid context attribute
getContext<LeafletContext.Map>('key').getLayer();

// $ExpectType Rectangle<any>
getContext<LeafletContext.Rectangle>('key').getLayer();
