import VMAP, { VMAPAdBreak, VMAPAdSource, VMAPExtension, VMAPTrackingEvent } from 'vmap';

interface ExtendedVMAPAdBreak extends VMAPAdBreak {
    foo: 'foo';
}
interface ExtendedVMAPAdSource extends VMAPAdSource {
    bar: 'bar';
}
interface ExtendedVMAPExtension extends VMAPExtension {
    baz: 'baz';
}
interface ExtendedVMAPTrackingEvent extends VMAPTrackingEvent {
    foobarbaz: 'foobarbaz';
}

const domParser = new DOMParser();
const vmapXML = domParser.parseFromString('', 'text/xml');

const vmap = new VMAP(vmapXML);

const version = vmap.version;

vmap.adBreaks.forEach(adBreak => {
    const timeoffset = adBreak.timeOffset;
    const breakType = adBreak.breakType;
    const breakId = adBreak.breakId;
    const repeatAfter = adBreak.repeatAfter;

    const adSource = adBreak.adSource;
    const id = adSource.id;
    const allowMultipleAds = adSource.allowMultipleAds;
    const followRedirects = adSource.followRedirects;
    const adTagURI = adSource.adTagURI;
    const customData = adSource.customData;
    const vastAdData = adSource.vastAdData;

    adBreak.trackingEvents.forEach(trackingEvent => {
        const event = trackingEvent.event;
        const uri = trackingEvent.uri;
    });

    adBreak.extensions.forEach(extension => {
        const children = extension.children;
        const attribute = extension.attribute;
        const value = extension.value;
    });
});
