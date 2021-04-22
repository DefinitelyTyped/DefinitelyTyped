import kurento, { WebRtcEndpoint } from 'kurento-client';

async () => {
    const sdpOffer = 'sdpOffer';
    const candidate = new RTCIceCandidate();

    const client = await kurento('//server', { failAfter: 500, useImplicitTransactions: true });
    const pipeline = await client.create('MediaPipeline');
    const endpoint = await pipeline.create('WebRtcEndpoint');

    await Promise.all([pipeline.addTag('roomId', 'abc123'), pipeline.addTag('userId', '012345')]);

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
    const endpoint = ((await client.getMediaobjectById(endpointId)) as any) as WebRtcEndpoint;
    const server = await client.getServerManager();

    endpoint.addIceCandidate(candidate);

    return { cpuUsage: server.getUsedCpu(5) };
};

async () => {
    const endpointId = 'endpointId';

    const client = await kurento('//server', { failAfter: 500, useImplicitTransactions: true });
    const endpoint = await client.getMediaobjectById<WebRtcEndpoint>(endpointId); // $ExpectType WebRtcEndpoint

    await endpoint.release();
};

async () => {
    // Test RecorderEndpoint
    const kurentoClient = await kurento('//server');
    const pipeline = await kurentoClient.create('MediaPipeline'); // $ExpectType MediaPipeline
    await pipeline.create('RecorderEndpoint', { uri: '' }); // $ExpectType RecorderEndpoint
    await pipeline.create('RecorderEndpoint', { uri: '', mediaProfile: 'MP4' }); // $ExpectType RecorderEndpoint
    await pipeline.create('RecorderEndpoint', { uri: '', mediaProfile: 'MP4', stopOnEndOfStream: true }); // $ExpectType RecorderEndpoint
};

async () => {
    const kurentoClient = await kurento('//server');
    const pipeline = await kurentoClient.create('MediaPipeline'); // $ExpectType MediaPipeline
    const webRtcEp = await pipeline.create('WebRtcEndpoint'); // $ExpectType WebRtcEndpoint
    const recorderEp = await pipeline.create('RecorderEndpoint', { uri: '' }); // $ExpectType RecorderEndpoint
    const playerEp = await pipeline.create('PlayerEndpoint'); // $ExpectType PlayerEndpoint

    // Test connectivities between commonly used element combinations
    webRtcEp.connect(webRtcEp);
    webRtcEp.connect(recorderEp);
    playerEp.connect(webRtcEp);
    playerEp.connect(recorderEp);

    // Test MediaElement.connect with each MediaType
    await webRtcEp.connect(webRtcEp, 'VIDEO');
    await webRtcEp.connect(webRtcEp, 'AUDIO');
    await webRtcEp.connect(webRtcEp, 'DATA');

    // Test MediaElement.connect with method overloading
    await webRtcEp.connect(webRtcEp, 'VIDEO', 'source description');
    await webRtcEp.connect(webRtcEp, 'VIDEO', 'source description', 'sink description');
    await webRtcEp.connect(webRtcEp, 'VIDEO', 'source description', 'sink description', () => {});

    // Test MediaElement.disconnect with each MediaType
    await webRtcEp.disconnect(webRtcEp, 'VIDEO');
    await webRtcEp.disconnect(webRtcEp, 'AUDIO');
    await webRtcEp.disconnect(webRtcEp, 'DATA');

    // Test MediaElement.disconnect with method overloading
    await webRtcEp.disconnect(webRtcEp, 'VIDEO', 'source description');
    await webRtcEp.disconnect(webRtcEp, 'VIDEO', 'source description', 'sink description');
    await webRtcEp.disconnect(webRtcEp, 'VIDEO', 'source description', 'sink description', () => {});

    // Test MediaElement.getSinkConnections with method overloading
    await webRtcEp.getSinkConnections(); // $ExpectType ElementConnectionData[]
    await webRtcEp.getSinkConnections('VIDEO'); // $ExpectType ElementConnectionData[]
    await webRtcEp.getSinkConnections('VIDEO', 'description'); // $ExpectType ElementConnectionData[]
    await webRtcEp.getSinkConnections('VIDEO', 'description', () => {}); // $ExpectType ElementConnectionData[]

    // Test MediaElement.getSourceConnections with method overloading
    await webRtcEp.getSourceConnections(); // $ExpectType ElementConnectionData[]
    await webRtcEp.getSourceConnections('VIDEO'); // $ExpectType ElementConnectionData[]
    await webRtcEp.getSourceConnections('VIDEO', 'description'); // $ExpectType ElementConnectionData[]
    await webRtcEp.getSourceConnections('VIDEO', 'description', () => {}); // $ExpectType ElementConnectionData[]

    // Test the return type of MediaElement.getSinkConnections, ElementConnectionData
    (await webRtcEp.getSinkConnections()).forEach(connectionData => {
        connectionData; // $ExpectType ElementConnectionData
        connectionData.source; // $ExpectType MediaElement
        connectionData.sink; // $ExpectType MediaElement
        connectionData.type; // $ExpectType MediaType
        connectionData.sourceDescription; // $ExpectType string
        connectionData.sinkDescription; // $ExpectType string
    });

    // Test commonly used methods
    await webRtcEp.processOffer('some offer'); // $ExpectType string
    await recorderEp.record(); // $ExpectType void
    await recorderEp.stopAndWait(); // $ExpectType void
    await recorderEp.pause(); // $ExpectType UriEndpointState
    await recorderEp.stop(); // $ExpectType UriEndpointState
    await playerEp.play(); // $ExpectType void
    await playerEp.pause(); // $ExpectType UriEndpointState
    await playerEp.stop(); // $ExpectType UriEndpointState

    // Test MediaElement.isMediaFlowingIn/Out with each MediaType
    await webRtcEp.isMediaFlowingIn('VIDEO'); // $ExpectType boolean
    await webRtcEp.isMediaFlowingIn('AUDIO'); // $ExpectType boolean
    await webRtcEp.isMediaFlowingIn('DATA'); // $ExpectType boolean
    await webRtcEp.isMediaFlowingOut('VIDEO'); // $ExpectType boolean
    await webRtcEp.isMediaFlowingOut('AUDIO'); // $ExpectType boolean
    await webRtcEp.isMediaFlowingOut('DATA'); // $ExpectType boolean

    // Test commonly used event listeners
    webRtcEp.on('IceCandidateFound', ev => {
        ev.candidate; // $ExpectType IceCandidate
    });
    recorderEp
        .on('Recording', () => {})
        .on('Paused', () => {})
        .on('Stopped', () => {});
    playerEp.on('EndOfStream', () => {});
};
