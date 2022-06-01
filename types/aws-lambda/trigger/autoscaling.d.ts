import { Handler, Callback } from "../handler";

export type AutoScalingScaleInHandler = Handler<AutoScalingScaleInEvent, AutoScalingScaleInResult>;
export type AutoScalingScaleInCallback = Callback<AutoScalingScaleInResult>;

export type AutoScalingInstanceMarketOption = "spot" | "on-demand";

export type AutoScalingScaleInCause = "SCALE_IN" | "INSTANCE_REFRESH" | "MAX_INSTANCE_LIFETIME" | "REBALANCE";

export interface AutoScalingTerminationRequest {
  AvailabilityZone: string;
  Capacity: number;
  InstanceMarketOption: AutoScalingInstanceMarketOption;
}

export interface AutoScalingInstanceRecord {
  AvailabilityZone: string;
  InstanceId: string;
  InstanceType: string;
  InstanceMarketOption: AutoScalingInstanceMarketOption;
}

/**
 * An Auto Scaling Group may trigger a Scale In Event when you have attached
 * a custom termination policy function. This event and the expected response are
 * described in the Auto Scaling docs at:
 *
 * https://docs.aws.amazon.com/autoscaling/ec2/userguide/lambda-custom-termination-policy.html
 */
export interface AutoScalingScaleInEvent {
  AutoScalingGroupARN: string;
  AutoScalingGroupName: string;
  CapacityToTerminate: AutoScalingTerminationRequest[];
  Instances: AutoScalingInstanceRecord[];
  Cause: AutoScalingScaleInCause;
  HasMoreInstances?: boolean;
}

export interface AutoScalingScaleInResult {
  InstanceIDs: string[];
}
