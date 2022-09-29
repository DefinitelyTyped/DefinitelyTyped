import { AutoScalingScaleInHandler, AutoScalingScaleInResult } from "aws-lambda";

const handler: AutoScalingScaleInHandler = async (event, context, callback) => {
    str = event.AutoScalingGroupARN;
    str = event.AutoScalingGroupName;
    str = event.CapacityToTerminate[0].AvailabilityZone;
    num = event.CapacityToTerminate[0].Capacity;
    str = event.CapacityToTerminate[0].InstanceMarketOption;
    str = event.Instances[0].AvailabilityZone;
    str = event.Instances[0].InstanceId;
    str = event.Instances[0].InstanceType;
    str = event.Instances[0].InstanceMarketOption;
    str = event.Cause;
    boolOrUndefined = event.HasMoreInstances;

    const result: AutoScalingScaleInResult = {
        InstanceIDs: [
            "i-532085293",
            "i-108479122"
        ]
    };

    callback(new Error());
    callback(null, result);
    return result;
};
