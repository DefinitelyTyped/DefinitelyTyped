import { Map, Popup } from "mapbox-gl";
import MapboxglSpiderifier, { Options, popupOffsetForSpiderLeg, SpiderLeg } from "mapboxgl-spiderifier";

export const getInitializeSpiderLeg = (map: Map): Options["initializeLeg"] => (spiderLeg: SpiderLeg): void => {
    let popup: Popup;
    const pinElem = spiderLeg.elements.pin;
    const properties = spiderLeg.feature.properties;

    pinElem.innerHTML = properties?.title.replace(/[^\w\s\d.]/i, " ") || "?";
    if (properties?.isSelected === "1") {
        pinElem.classList.add("spider-leg-pin--isSelected");
    }

    pinElem.addEventListener("click", (ev) => {
        ev.preventDefault();
    });

    pinElem.addEventListener("mouseenter", () => {
        // $ExpectType SpiderLegOffsets
        const offset = popupOffsetForSpiderLeg(spiderLeg, 20);
        popup = new Popup({
            closeButton: false,
            offset,
        }).setText(properties?.title);
        spiderLeg.mapboxMarker.setPopup(popup);
        popup.addTo(map);
    });

    pinElem.addEventListener("mouseleave", () => {
        popup.remove();
    });
};

const map = new Map({
    accessToken: "",
    container: "#map",
});

// $ExpectType MapboxglSpiderifier
const spiderfier = new MapboxglSpiderifier(map, {
    animate: true,
    animationSpeed: 200,
    onClick: (e, marker) => {
        console.info(e, marker.feature);
    },
    customPin: true,
    initializeLeg: getInitializeSpiderLeg(map),
    circleFootSeparation: 50,
});

// $ExpectType void
const unspiderfyResult = spiderfier.unspiderfy();
