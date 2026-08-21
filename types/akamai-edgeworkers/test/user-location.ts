function onClientRequest(request: EW.IngressClientRequest) {
    const userLocation = request.userLocation;

    const latitude: string | undefined = userLocation!.latitude;
    const longitude: string | undefined = userLocation!.longitude;
    const continent: string | undefined = userLocation!.continent;
    const country: string | undefined = userLocation!.country;
    const region: string | undefined = userLocation!.region;
    const city: string | undefined = userLocation!.city;
    const zipCode: string | undefined = userLocation!.zipCode;
    const dma: string | undefined = userLocation!.dma;
    const timezone: string | undefined = userLocation!.timezone;
    const networkType: string | undefined = userLocation!.networkType;
    const bandwidth: string | undefined = userLocation!.bandwidth;
    const areaCodes: string[] | undefined = userLocation!.areaCodes;
    const fips: string[] | undefined = userLocation!.fips;
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
