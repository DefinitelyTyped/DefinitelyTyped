import { IotData, PublishParams } from 'aws-greengrass-core-sdk';

const client = new IotData();

client.publish(
    {
        topic: 'foo',
        payload: 'bar',
        queueFullPolicy: 'BestEffort',
    },
    (error, data) => {
        if (error) {
            console.log(error);
        }
        if (data) {
            console.log(data.payload);
        }
    },
);
