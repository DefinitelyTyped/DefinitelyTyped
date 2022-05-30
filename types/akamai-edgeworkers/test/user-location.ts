function onClientRequest(request: EW.IngressClientRequest) {
    const userLocation = request.userLocation;

    typeof userLocation?.latitude === "string";
    typeof userLocation?.longitude === "string";
    typeof userLocation?.continent === "string";
    typeof userLocation?.country === "string";
    typeof userLocation?.region === "string";
    typeof userLocation?.city === "string"
    typeof userLocation?.zipCode === "string";
    typeof userLocation?.dma === "string";
    typeof userLocation?.timezone === "string";
    typeof userLocation?.networkType === "string";
    typeof userLocation?.bandwidth === "string";
    typeof userLocation?.areaCodes === "string";
    typeof userLocation?.fips === "string";
}

export function onOriginRequest(request: EW.IngressOriginRequest) {
    const userLocation = request.userLocation;
}

export function onOriginResponse(request: EW.EgressOriginRequest, response: EW.EgressOriginResponse) {
    const userLocation = request.userLocation;
}

export function onClientResponse(request: EW.EgressClientRequest, response: EW.EgressClientResponse) {
    const userLocation = request.userLocation;
}
