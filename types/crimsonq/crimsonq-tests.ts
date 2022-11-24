import CrimsonQClient = require('crimsonq');

(async () => {
    /**
     * initiate CrimsonQ server with this image: docker pull yousefjwadi/crimsonq
     * for `docker-compose.yaml` use:
     *  ----------------------------------------------------
     * version: "3.9"
     * services:
     *   crimsonq:
     *     image: yousefjwadi/crimsonq:latest
     *     ports:
     *       - "9001:9001"   <--- use this port in the configs below
     *       - "8080:8080"
     *     volumes:
     *       - crimsonq:/CrimsonQ
     * volumes:
     *   crimsonq: {}
     *  ----------------------------------------------------
     * or create it manually from: https://github.com/ywadi/crimsonq
     */
    const CQ = new CrimsonQClient({
        port: 9001, // port assigned in docker-compose as above
        host: 'localhost',
        password: 'crimsonQ!', // default password with docker image
    });
    CQ; // $ExpectType CrimsonQClient
    CQ.redisCommander; //  $ExpectType typeof IORedis;
    CQ.redisSubscriber; //  $ExpectType typeof IORedis;
    CQ.command; //  $ExpectType Command;

    await CQ.connect(); // $ExpectType { value: string; error: Error; }

    const producer = CQ.Producer(); // $ExpectType Producer
    const consumer = CQ.Consumer('I_AM_A_CONSUMER'); // $ExpectType Consumer
    await consumer.init(['/topic/path/#'], 1); // $ExpectType Error | undefined
    await consumer.getTopics();  // $ExpectType CommandResult | ErrorConstructor || ErrorConstructor | CommandResult
    consumer.events; // $ExpectType CrimsonQEventEmitter
    consumer.events.on('message', async (msg) => {
        msg; // $ExpectType RecievedMessage
        const value = JSON.parse(msg.message.value);
        if (value.failMe) {
            msg.fail("Faile this"); // $ExpectType Promise<CommandResult | ErrorConstructor | undefined> ||  Promise<ErrorConstructor | CommandResult | undefined>
        } else {
            msg.done(); // $ExpectType Promise<CommandResult | ErrorConstructor | undefined> || Promise<ErrorConstructor | CommandResult | undefined>
        }
    });

    producer.pushToConsumer('I_AM_A_CONSUMER', { msgValuesKey: 'msg Values Value' }); // $ExpectType Promise<CommandResult | ErrorConstructor> || Promise<ErrorConstructor | CommandResult>
    // tslint:disable-next-line
    producer.pushToConsumer('I_AM_A_CONSUMER', { failMe: true, msgValuesKey: 'msg Values Value' }); // $ExpectType Promise<CommandResult | ErrorConstructor> || Promise<ErrorConstructor | CommandResult>
    // tslint:disable-next-line
    producer.pushToTopic('/topic/path/more/parts/to/match', { msgSecondValuesKey: 'msg Second Values Value' }); // $ExpectType Promise<CommandResult | ErrorConstructor> || Promise<ErrorConstructor | CommandResult>
})();
