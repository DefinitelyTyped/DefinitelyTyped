import kurento, { WebRtcEndpoint } from 'kurento-client';

async () => {
    const sdpOffer = 'sdpOffer';
    const candidate = new RTCIceCandidate();

    const client = await kurento('//server', { failAfter: 500, useImplicitTransactions: true });
    const pipeline = await client.create('MediaPipeline');
    const endpoint = await pipeline.create('WebRtcEndpoint');

    await Promise.all([
        pipeline.addTag('roomId', 'abc123'),
        pipeline.addTag('userId', '012345')
    ]);

    const signaling = {
        emit: (...args: any[]): void => {},
        on(event: string, handler: (...args: any[]) => void): void {},
    };

    endpoint.addIceCandidate(candidate);

    endpoint.on('OnIceCandidate', ({ candidate }) => {
        signaling.emit(candidate.candidate);
    });

    signaling.on('icecandidate', candidate => {
        const value = kurento.getComplexType('IceCandidate')(candidate);

        endpoint.addIceCandidate(value);
    });

    const sdpAnswer = await endpoint.processOffer(sdpOffer);

    endpoint.gatherCandidates(error => {
        // ok
    });

    return { sdpAnswer };
};

async () => {
    const client = await kurento('//server', { failAfter: 500, useImplicitTransactions: true });
    const pipeline = await client.create('MediaPipeline');

    await pipeline.release();
};

async () => {
    const endpointId = 'endpointId';
    const candidate = new RTCIceCandidate();

    const client = await kurento.getSingleton('//server', {});
    const endpoint = await client.getMediaobjectById(endpointId) as any as WebRtcEndpoint;
    const server = await client.getServerManager();

    endpoint.addIceCandidate(candidate);

    return { cpuUsage: server.getUsedCpu(5) };
};
