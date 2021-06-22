import kcl from 'aws-kcl';

// Example used from https://github.com/awslabs/amazon-kinesis-client-nodejs
const recordProcessor = {
    initialize(_initializeInput: kcl.InitializeInput, completeCallback: kcl.Callback) {
        completeCallback();
    },

    processRecords(processRecordsInput: kcl.ProcessRecordsInput, completeCallback: kcl.Callback) {
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

    leaseLost(_leaseLostInput: kcl.LeaseLossInput, completeCallback: kcl.Callback) {
        completeCallback();
    },

    shardEnded(shardEndedInput: kcl.ShardEndedInput, completeCallback: kcl.Callback) {
        shardEndedInput.checkpointer.checkpoint((_err?: string) => {
            completeCallback();
        });
        completeCallback();
    },
};

kcl(recordProcessor).run();
