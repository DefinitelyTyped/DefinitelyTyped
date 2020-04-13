import kurento from 'kurento-client';

async () => {
    const sdpOffer = 'offer';
    const candidate = new RTCIceCandidate();

    const client = await kurento('//server', { failAfter: 500, useImplicitTransactions: true });
    const pipeline = await client.create('MediaPipeline');
    const endpoint = await pipeline.create('WebRtcEndpoint');

    endpoint.addIceCandidate(candidate);

    endpoint.on('OnIceCandidate', ({ candidate }) => {
        const value = kurento.getComplexType('IceCandidate')(
            candidate
        );

        endpoint.addIceCandidate(value);
    });

    const sdpAnswer = await endpoint.processOffer(sdpOffer);

    endpoint.gatherCandidates(error => {
        // ok
    });

    return { sdpAnswer };
};
