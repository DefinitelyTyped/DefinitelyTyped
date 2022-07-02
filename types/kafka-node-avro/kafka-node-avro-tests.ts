import * as KafkaAvro from 'kafka-node-avro';

KafkaAvro.init({
    kafka: {
        kafkaHost: 'kafka:9092',
    },
    schema: {
        registry: 'http://schema-registry:8081',
    },
}).then((client: KafkaAvro.Kafka) => {
    client
        .send({
            topic: 'kafka-topic',
            key: 'message-key',
            messages: {
                name: 'John',
                lastName: 'Doe',
                age: 53,
            },
        });
});
