import kcl, { InitializeInput, ProcessRecordsInput, LeaseLossInput, ShardEndedInput, Callback } from 'aws-kcl';

// Example used from https://github.com/awslabs/amazon-kinesis-client-nodejs
const recordProcessor = {
    initialize(_initializeInput: InitializeInput, completeCallback: Callback) {
        completeCallback();
    },

    processRecords(processRecordsInput: ProcessRecordsInput, completeCallback: Callback) {
        if (!processRecordsInput || !processRecordsInput.records) {
            completeCallback();
            return;
        }

        const records = processRecordsInput.records;
        let record;
        let sequenceNumber;

        for (record of records) {
            sequenceNumber = record.sequenceNumber;
            const partitionKey = record.partitionKey;
            const data = new Buffer(record.data, 'base64').toString();
            console.log(partitionKey, data);
        }

        if (!sequenceNumber) {
            completeCallback();
            return;
        }
        processRecordsInput.checkpointer.checkpoint(
            sequenceNumber,
            (_err: string | undefined, _checkpointedSequenceNumber: string) => {
                completeCallback();
            },
        );
    },

    leaseLost(_leaseLostInput: LeaseLossInput, completeCallback: Callback) {
        completeCallback();
    },

    shardEnded(shardEndedInput: ShardEndedInput, completeCallback: Callback) {
        shardEndedInput.checkpointer.checkpoint((_err?: string) => {
            completeCallback();
        });
        completeCallback();
    },
};

kcl(recordProcessor).run();
