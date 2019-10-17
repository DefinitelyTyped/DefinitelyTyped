import * as fs from "fs";

import {
    Kafka,
    AssignerProtocol,
    PartitionAssigners,
    logLevel,
    CompressionTypes,
    CompressionCodecs,
    ResourceTypes,
    PartitionAssigner,
    LoggerMessage
} from "kafkajs";

const { MemberMetadata, MemberAssignment } = AssignerProtocol;
const { roundRobin } = PartitionAssigners;

// COMMON
const host = "localhost";
const topic = "topic-test";

const logger = (loggerMessage: LoggerMessage): void => {
    console.log(`[${loggerMessage.namespace}] ${loggerMessage.log.message}`);
};

const kafka = new Kafka({
    logLevel: logLevel.INFO,
    brokers: [`${host}:9094`, `${host}:9097`, `${host}:9100`],
    clientId: "example-consumer",
    ssl: {
        servername: "localhost",
        rejectUnauthorized: false,
        ca: [fs.readFileSync("./testHelpers/certs/cert-signed", "utf-8")]
    },
    sasl: {
        mechanism: "plain",
        username: "test",
        password: "testtest"
    },
    logCreator: () => logger
});

// CONSUMER
const consumer = kafka.consumer({ groupId: "test-group" });

const runConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic });
    await consumer.run({
        // eachBatch: async ({ batch }) => {
        //   console.log(batch)
        // },
        eachMessage: async ({ topic, partition, message }) => {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${
                message.timestamp
            }`;
            console.log(`- ${prefix} ${message.key}#${message.value}`);
        }
    });
    await consumer.disconnect();
};

runConsumer().catch(e => console.error(`[example/consumer] ${e.message}`, e));

// PRODUCER
const producer = kafka.producer({ allowAutoTopicCreation: true });

const getRandomNumber = () => Math.round(Math.random() * 1000);
const createMessage = (num: number) => ({
    key: `key-${num}`,
    value: `value-${num}-${new Date().toISOString()}`
});

const sendMessage = () => {
    return producer
        .send({
            topic,
            compression: CompressionTypes.GZIP,
            messages: Array(getRandomNumber())
                .fill(0)
                .map(_ => createMessage(getRandomNumber()))
        })
        .then(console.log)
        .catch(e => console.error(`[example/producer] ${e.message}`, e));
};

const runProducer = async () => {
    await producer.connect();
    setInterval(sendMessage, 3000);
    await producer.disconnect();
};

runProducer().catch(e => console.error(`[example/producer] ${e.message}`, e));

// ADMIN
const admin = kafka.admin({ retry: { retries: 10 } });

const runAdmin = async () => {
  await admin.connect();
  const { topics } = await admin.getTopicMetadata({});
  await admin.createTopics({ topics: [{ topic, numPartitions: 10, replicationFactor: 1}], timeout: 30000, waitForLeaders: true });
  await admin.disconnect();
};

runAdmin().catch(e => console.error(`[example/admin] ${e.message}`, e));

// OTHERS
async () => {
    await producer.send({
        topic: "topic-name",
        compression: CompressionTypes.GZIP,
        messages: [{ key: "key1", value: "hello world!" }]
    });
};

// import SnappyCodec from "kafkajs-snappy";
const SnappyCodec: any = undefined;
CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;

const myCustomAssignmentArray = [0];
const assignment: { [key: number]: { [key: string]: number[] } } = {
    0: { a: [0] }
};
const MyPartitionAssigner: PartitionAssigner = ({ cluster: any }) => ({
    name: "MyPartitionAssigner",
    version: 1,
    async assign({ members, topics }) {
        // perform assignment
        return myCustomAssignmentArray.map(memberId => ({
            memberId,
            memberAssignment: MemberAssignment.encode({
                version: this.version,
                assignment: assignment[memberId]
            })
        }));
    },
    protocol({ topics }) {
        return {
            name: this.name,
            metadata: MemberMetadata.encode({
                version: this.version,
                topics
            })
        };
    }
});

kafka.consumer({
    groupId: "my-group",
    partitionAssigners: [MyPartitionAssigner, roundRobin]
});
