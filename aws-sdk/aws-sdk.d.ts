// Type definitions for aws-sdk
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: midknight41 <https://github.com/midknight41>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/aws-sdk.d.ts

/// <reference path="../node/node.d.ts" />

declare module "aws-sdk" {

  export var config: ClientConfig;

  export function Config(json: any): void;

  export class Credentials {
    constructor(accessKeyId: string, secretAccessKey: string, sessionToken?: string);
    accessKeyId: string;
  }

  export class EnvironmentCredentials extends Credentials {
    constructor(profile: string);
  }

  export module CognitoIdentity {
    export interface CognitoIdentityCredentialsParams {
      IdentityPoolId?: string;
      AccountId?: string;
      Logins?: {[k: string]: any};

      RoleArn?: string;
      RoleSessionName?: string;
      WebIdentityToken?: string;
      ProviderId?: string;
      Policy?: string;
      DurationSeconds?: number;

      IdentityId?: string;
    }
  }

  export class CognitoIdentityCredentials extends Credentials {
    constructor(params: CognitoIdentity.CognitoIdentityCredentialsParams);
  }

  export interface Logger {
    write?: (chunk: any, encoding?: string, callback?: () => void) => void;
    log?: (...messages: any[]) => void;
  }

  export interface HttpOptions {
    proxy?: string;
    agent?: any;
    timeout?: number;
    xhrAsync?: boolean;
    xhrWithCredentials?: boolean;
  }

  export class Endpoint {
    constructor(endpoint: string);

    host: string;
    hostname: string;
    href: string;
    port: number;
    protocol: string;
  }

  interface AwsError extends Error {
    stack: string;
  }

  export interface RetryDelayOption {
    base?: number;
    customBackoff?: (retryCount: number) => number;
  }

  export interface Ebs {
    SnapshotId?: string;
    VolumeSize?: number;
    VolumeType?: string;
    DeleteOnTermination?: boolean;
    Iops?: number;
    Encrypted?: boolean;
  }

  export interface BlockDeviceMapping {
    VirtualName?: string;
    DeviceName: string;
    Ebs?: Ebs;
    NoDevice?: boolean;
  }

  export interface InstanceMonitoring {
    SpotPrice?: string;
    Enabled?: boolean;
  }

  export interface Filter {
    Name?: string;
    Values?: boolean;
  }

  export interface StepAdjustment {
    scalingAdjustment: number;
    metricIntervalLowerBound?: number;
    metricIntervalUpperBound?: number;
  }

  export interface Tags {
    resourceId?: string;
    resourceType?: string;
    key: string;
    value?: string;
    propagateAtLaunch?: boolean;
  }

  export interface Services {
    autoscaling?: any;
    cloudformation?: any;
    cloudfront?: any;
    cloudsearch?: any;
    cloudsearchdomain?: any;
    cloudtrail?: any;
    cloudwatch?: any;
    cloudwatchlogs?: any;
    cognitoidentity?: any;
    cognitosync?: any;
    datapipeline?: any;
    directconnect?: any;
    dynamodb?: any;
    ec2?: any;
    ecs?: any;
    elasticache?: any;
    elasticbeanstalk?: any;
    elastictranscoder?: any;
    elb?: any;
    emr?: any;
    glacier?: any;
    httpOptions?: HttpOptions;
    iam?: any;
    importexport?: any;
    kinesis?: any;
    opsworks?: any;
    rds?: any;
    redshift?: any;
    route53?: any;
    route53domains?: any;
    s3?: any;
    ses?: any;
    simpledb?: any;
    sns?: any;
    sqs?: any;
    storagegateway?: any;
    sts?: any;
    support?: any;
    swf?: any;
  }

  export interface ClientConfigPartial extends Services {
    credentials?: Credentials;
    region?: string;
    accessKeyId?: string;
    secretAccessKey?: string;
    computeChecksums?: boolean;
    convertResponseTypes?: boolean;
    logger?: Logger;
    maxRedirects?: number;
    maxRetries?: number;
    paramValidation?: boolean;
    s3ForcePathStyle?: boolean;
    apiVersion?: any;
    apiVersions?: Services;
    signatureVersion?: string;
    sslEnabled?: boolean;
    systemClockOffset?: number;
  }

  export interface ClientConfig extends ClientConfigPartial {
    update?: (options: ClientConfigPartial, allUnknownKeys?: boolean) => void;
    getCredentials?: (callback: (err?: any) => void) => void;
    loadFromPath?: (path: string) => void;
    credentials: Credentials;
    region: string;
  }

  export class CloudFormation {
      constructor(options?: CloudFormation.Options);
      endpoint: Endpoint;

      cancelUpdateStack(params: CloudFormation.CancelUpdateStackParams, callback: (err: AwsError, data: any) => void): void;
      continueUpdateRollback(params: CloudFormation.ContinueUpdateRollbackParams, callback: (err: AwsError, data: any) => void): void;
      createChangeSet(params: CloudFormation.CreateChangeSetParams, callback: (err: AwsError, data: any) => void): void;
      createStack(params: CloudFormation.CreateStackParams, callback: (err: AwsError, data: any) => void): void;
      deleteChangeSet(params: CloudFormation.DeleteChangeSetParams, callback: (err: AwsError, data: any) => void): void;
      deleteStack(params: CloudFormation.DeleteStackParams, callback: (err: AwsError, data: any) => void): void;
      describeAccountLimits(params: CloudFormation.DescribeAccountLimitsParams, callback: (err: AwsError, data: any) => void): void;
      describeChangeSet(params: CloudFormation.DescribeChangeSetParams, callback: (err: AwsError, data: any) => void): void;
      describeStackEvents(params: CloudFormation.DescribeStackEventsParams, callback: (err: AwsError, data: any) => void): void;
      describeStackResource(params: CloudFormation.DescribeStackResourceParams, callback: (err: AwsError, data: any) => void): void;
      describeStackResources(params: CloudFormation.DescribeStackResourcesParams, callback: (err: AwsError, data: any) => void): void;
      describeStacks(params: CloudFormation.DescribeStacksParams, callback: (err: AwsError, data: any) => void): void;
      estimateTemplateCost(params: CloudFormation.EstimateTemplateCostParams, callback: (err: AwsError, data: any) => void): void;
      executeChangeSet(params: CloudFormation.ExecuteChangeSetParams, callback: (err: AwsError, data: any) => void): void;
      getStackPolicy(params: CloudFormation.GetStackPolicyParams, callback: (err: AwsError, data: any) => void): void;
      getTemplate(params: CloudFormation.GetTemplateParams, callback: (err: AwsError, data: any) => void): void;
      getTemplateSummary(params: CloudFormation.GetTemplateSummaryParams, callback: (err: AwsError, data: any) => void): void;
      listChangeSets(params: CloudFormation.ListChangeSetsParams, callback: (err: AwsError, data: any) => void): void;
      listStackResources(params: CloudFormation.ListStackResourcesParams, callback: (err: AwsError, data: any) => void): void;
      listStacks(params: CloudFormation.ListStacksParams, callback: (err: AwsError, data: any) => void): void;
      setStackPolicy(params: CloudFormation.SetStackPolicyParams, callback: (err: AwsError, data: any) => void): void;
      signalResource(params: CloudFormation.SignalResourceParams, callback: (err: AwsError, data: any) => void): void;
      updateStack(params: CloudFormation.UpdateStackParams, callback: (err: AwsError, data: any) => void): void;
      validateTemplate(params: CloudFormation.ValidateTemplateParams, callback: (err: AwsError, data: any) => void): void;
      waitFor(state: string, params: CloudFormation.WaitForParams, callback: (err: AwsError, data: any) => void): void;
  }

  export class Lambda {
    constructor(options?: any);
    endpoint: Endpoint;

    addPermission(params: Lambda.AddPermissionParams, callback: (err: AwsError, data: any) => void): void;
    createAlias(params: Lambda.CreateAliasParams, callback: (err: AwsError, data: any) => void): void;
    createEventSourceMapping(params: Lambda.CreateEventSourceMappingParams, callback: (err: AwsError, data: any) => void): void;
    createFunction(params: Lambda.CreateFunctionParams, callback: (err: AwsError, data: any) => void): void;
    deleteAlias(params: Lambda.DeleteAliasParams, callback: (err: AwsError, data: any) => void): void;
    deleteEventSourceMapping(params: Lambda.DeleteEventSourceMappingParams, callback: (err: AwsError, data: any) => void): void;
    deleteFunction(params: Lambda.DeleteFunctionParams, callback: (err: AwsError, data: any) => void): void;
    getAlias(params: Lambda.GetAliasParams, callback: (err: AwsError, data: any) => void): void;
    getEventSourceMapping(params: Lambda.GetEventSourceMappingParams, callback: (err: AwsError, data: any) => void): void;
    getFunction(params: Lambda.GetFunctionParams, callback: (err: AwsError, data: any) => void): void;
    getFunctionConfiguration(params: Lambda.GetFunctionConfigurationParams, callback: (err: AwsError, data: any) => void): void;
    getPolicy(params: Lambda.GetPolicyParams, callback: (err: AwsError, data: any) => void): void;
    invoke(params: Lambda.InvokeParams, callback: (err: AwsError, data: any) => void): void;
    listAliases(params: Lambda.ListAliasesParams, callback: (err: AwsError, data: any) => void): void;
    listEventSourceMappings(params: Lambda.ListEventSourceMappingsParams, callback: (err: AwsError, data: any) => void): void;
    listFunctions(params: Lambda.ListFunctionsParams, callback: (err: AwsError, data: any) => void): void;
    listVersionsByFunction(params: Lambda.ListVersionsByFunctionParams, callback: (err: AwsError, data: any) => void): void;
    publishVersion(params: Lambda.PublishVersionParams, callback: (err: AwsError, data: any) => void): void;
    removePermission(params: Lambda.RemovePermissionParams, callback: (err: AwsError, data: any) => void): void;
    updateAlias(params: Lambda.UpdateAliasParams, callback: (err: AwsError, data: any) => void): void;
    updateEventSourceMapping(params: Lambda.UpdateEventSourceMappingParams, callback: (err: AwsError, data: any) => void): void;
    updateFunctionCode(params: Lambda.UpdateFunctionCodeParams, callback: (err: AwsError, data: any) => void): void;
    updateFunctionConfiguration(params: Lambda.UpdateFunctionConfigurationParams, callback: (err: AwsError, data: any) => void): void;
  }

  export class AutoScaling {
    constructor(options?: any);
    endpoint: Endpoint;

    attachInstances(params: AutoScaling.AttachInstancesParams, callback: (err: AwsError, data: any) => void): void;
    attachLoadBalancers(params: AutoScaling.AttachLoadBalancersParams, callback: (err: AwsError, data: any) => void): void;
    attachLoadBalancerTargetGroups(param: AutoScaling.AttachLoadBalancerTargetGroupsParams, callback: (err: AwsError, data: any) => void): void;
    completeLifecycleAction(param: AutoScaling.CompleteLifecycleActionParams, callback: (err: AwsError, data: any) => void): void;
    createAutoScalingGroup(param: AutoScaling.CreateAutoScalingGroupParams, callback: (err: AwsError, data: any) => void): void;
    createLaunchConfiguration(param: AutoScaling.CreateLaunchConfigurationParams, callback: (err: AwsError, data: any) => void): void;
    createOrUpdateTags(param: AutoScaling.CreateOrUpdateTagsParams, callback: (err: AwsError, data: any) => void): void;
    deleteAutoScalingGroup(param: AutoScaling.DeleteAutoScalingGroupParams, callback: (err: AwsError, data: any) => void): void;
    deleteLaunchConfiguration(param: AutoScaling.DeleteLaunchConfigurationParams, callback: (err: AwsError, data: any) => void): void;
    deleteLifecycleHook(param: AutoScaling.DeleteLifecycleHookParams, callback: (err: AwsError, data: any) => void): void;
    deleteNotificationConfiguration(param: AutoScaling.DeleteNotificationConfigurationParams, callback: (err: AwsError, data: any) => void): void;
    deletePolicy(param: AutoScaling.DeletePolicyParams, callback: (err: AwsError, data: any) => void): void;
    deleteScheduledAction(param: AutoScaling.DeleteScheduledActionParams, callback: (err: AwsError, data: any) => void): void;
    deleteTags(param: AutoScaling.DeleteTagsParams, callback: (err: AwsError, data: any) => void): void;
    describeAccountLimits(callback: (err: AwsError, data: any) => void): void;
    describeAdjustmentTypes(callback: (err: AwsError, data: any) => void): void;
    describeAutoScalingGroups(param: AutoScaling.DescribeAutoScalingGroupsParams, callback: (err: AwsError, data: any) => void): void;
    describeAutoScalingInstances(param: AutoScaling.DescribeAutoScalingInstancesParams, callback: (err: AwsError, data: any) => void): void;
    describeAutoScalingNotificationTypes(callback: (err: AwsError, data: any) => void): void;
    describeLaunchConfigurations(param: AutoScaling.DescribeLaunchConfigurationsParams, callback: (err: AwsError, data: any) => void): void;
    describeLifecycleHooks(param: AutoScaling.DescribeLifecycleHooksParams, callback: (err: AwsError, data: any) => void): void;
    describeLifecycleHookTypes(callback: (err: AwsError, data: any) => void): void;
    describeLoadBalancers(param: AutoScaling.DescribeLoadBalancersParams, callback: (err: AwsError, data: any) => void): void;
    describeLoadBalancerTargetGroups(param: AutoScaling.DescribeLoadBalancerTargetGroupsParams, callback: (err: AwsError, data: any) => void): void;
    describeMetricCollectionTypes(callback: (err: AwsError, data: any) => void): void;
    describeNotificationConfigurations(param: AutoScaling.DescribeNotificationConfigurationsParams, callback: (err: AwsError, data: any) => void): void;
    describePolicies(param: AutoScaling.DescribePoliciesParams, callback: (err: AwsError, data: any) => void): void;
    describeScalingActivities(param: AutoScaling.DescribeScalingActivitiesParams, callback: (err: AwsError, data: any) => void): void;
    describeScalingProcessTypes(callback: (err: AwsError, data: any) => void): void;
    describeScheduledActions(param: AutoScaling.DescribeScheduledActionsParams, callback: (err: AwsError, data: any) => void): void;
    describeTags(param: AutoScaling.DescribeTagsParams, callback: (err: AwsError, data: any) => void): void;
    describeTerminationPolicyTypes(callback: (err: AwsError, data: any) => void): void;
    detachInstances(param: AutoScaling.DetachInstancesParams, callback: (err: AwsError, data: any) => void): void;
    detachLoadBalancers(param: AutoScaling.DetachLoadBalancersParams, callback: (err: AwsError, data: any) => void): void;
    detachLoadBalancerTargetGroups(param: AutoScaling.DetachLoadBalancerTargetGroupsParams, callback: (err: AwsError, data: any) => void): void;
    disableMetricsCollection(param: AutoScaling.DisableMetricsCollectionParams, callback: (err: AwsError, data: any) => void): void;
    enableMetricsCollection(param: AutoScaling.EnableMetricsCollectionParams, callback: (err: AwsError, data: any) => void): void;
    enterStandby(param: AutoScaling.EnterStandbyParams, callback: (err: AwsError, data: any) => void): void;
    executePolicy(param: AutoScaling.ExecutePolicyParams, callback: (err: AwsError, data: any) => void): void;
    exitStandby(param: AutoScaling.ExitStandbyParams, callback: (err: AwsError, data: any) => void): void;
    putLifecycleHook(param: AutoScaling.PutLifecycleHookParams, callback: (err: AwsError, data: any) => void): void;
    putNotificationConfiguration(param: AutoScaling.PutNotificationConfigurationParams, callback: (err: AwsError, data: any) => void): void;
    putScalingPolicy(param: AutoScaling.PutScalingPolicyParams, callback: (err: AwsError, data: any) => void): void;
    putScheduledUpdateGroupAction(param: AutoScaling.PutScheduledUpdateGroupActionParams, callback: (err: AwsError, data: any) => void): void;
    recordLifecycleActionHeartbeat(params: AutoScaling.RecordLifecycleActionHeartbeatParams, callback: (err: AwsError, data: any) => void): void;
    resumeProcesses(params: AutoScaling.ResumeProcessesParams, callback: (err: AwsError, data: any) => void): void;
    setDesiredCapacity(params: AutoScaling.SetDesiredCapacityParams, callback: (err: AwsError, data: any) => void): void;
    setInstanceHealth(params: AutoScaling.SetInstanceHealthParams, callback: (err: AwsError, data: any) => void): void;
    setInstanceProtection(params: AutoScaling.SetInstanceProtectionParams, callback: (err: AwsError, data: any) => void): void;
    suspendProcesses(params: AutoScaling.SuspendProcessesParams, callback: (err: AwsError, data: any) => void): void;
    terminateInstanceInAutoScalingGroup(params: AutoScaling.TerminateInstanceInAutoScalingGroupParams, callback: (err: AwsError, data: any) => void): void;
    updateAutoScalingGroup(params: AutoScaling.UpdateAutoScalingGroupParams, callback: (err: AwsError, data: any) => void): void;
  }

  export class SQS {
    constructor(options?: any);
    endpoint: Endpoint;

    addPermission(params: SQS.AddPermissionParams, callback: (err: AwsError, data: any) => void): void;
    changeMessageVisibility(params: SQS.ChangeMessageVisibilityParams, callback: (err: AwsError, data: any) => void): void;
    changeMessageVisibilityBatch(params: SQS.ChangeMessageVisibilityBatchParams, callback: (err: AwsError, data: SQS.ChangeMessageVisibilityBatchResponse) => void): void;
    createQueue(params: SQS.CreateQueueParams, callback: (err: AwsError, data: SQS.CreateQueueResult) => void): void;
    deleteMessage(params: SQS.DeleteMessageParams, callback: (err: AwsError, data: any) => void): void;
    deleteMessageBatch(params: SQS.DeleteMessageBatchParams, callback: (err: AwsError, data: SQS.DeleteMessageBatchResult) => void): void;
    deleteQueue(params: { QueueUrl: string; }, callback: (err: AwsError, data: any) => void): void;
    getQueueAttributes(params: SQS.GetQueueAttributesParams, callback: (err: AwsError, data: SQS.GetQueueAttributesResult) => void): void;
    getQueueUrl(params: SQS.GetQueueUrlParams, callback: (err: AwsError, data: { QueueUrl: string; }) => void): void;
    listDeadLetterSourceQueues(params: { QueueUrl: string }, callback: (err: AwsError, data: { queueUrls: string[] }) => void): void;
    listQueues(params: { QueueNamePrefix?: string }, callback: (err: AwsError, data: { QueueUrls: string[] }) => void): void;
    purgeQueue(params: { QueueUrl: string }, callback: (err: AwsError, data: any) => void): void;
    receiveMessage(params: SQS.ReceiveMessageParams, callback: (err: AwsError, data: SQS.ReceiveMessageResult) => void): void;
    removePermission(params: { QueueUrl: string, Label: string }, callback: (err: AwsError, data: any) => void): void;
    sendMessage(params: SQS.SendMessageParams, callback: (err: AwsError, data: SQS.SendMessageResult) => void): void;
    sendMessageBatch(params: SQS.SendMessageBatchParams, callback: (err: AwsError, data: SQS.SendMessageBatchResult) => void): void;
    setQueueAttributes(params: SQS.SetQueueAttributesParams, callback: (err: AwsError, data: any) => void): void;
  }

  export class SES {
    constructor(options?: any);
    endpoint: Endpoint;

    sendEmail(params: any, callback: (err: any, data: SES.SendEmailResult) => void): void;
  }

  export class SNS {
    constructor(options?: any);
    endpoint: Endpoint;

    publish(request: Sns.PublishRequest, callback: (err: any, data: any) => void): void;
  }

  export class SWF {
    constructor(options?: any);
    endpoint: Endpoint;

    countClosedWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
    countOpenWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
    countPendingActivityTasks(params: any, callback: (err: any, data: any) => void): void;
    countPendingDecisionTasks(params: any, callback: (err: any, data: any) => void): void;
    deprecateActivityType(params: any, callback: (err: any, data: any) => void): void;
    deprecateDomain(params: any, callback: (err: any, data: any) => void): void;
    deprecateWorkflowType(params: any, callback: (err: any, data: any) => void): void;
    describeActivityType(params: any, callback: (err: any, data: any) => void): void;
    describeDomain(params: any, callback: (err: any, data: any) => void): void;
    describeWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
    describeWorkflowType(params: any, callback: (err: any, data: any) => void): void;
    getWorkflowExecutionHistory(params: any, callback: (err: any, data: any) => void): void;
    listActivityTypes(params: any, callback: (err: any, data: any) => void): void;
    listClosedWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
    listDomains(params: any, callback: (err: any, data: any) => void): void;
    listOpenWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
    listWorkflowTypes(params: any, callback: (err: any, data: any) => void): void;
    pollForActivityTask(params: any, callback: (err: any, data: Swf.ActivityTask) => void): void;
    pollForDecisionTask(params: any, callback: (err: any, data: Swf.DecisionTask) => void): void;
    recordActivityTaskHeartbeat(params: any, callback: (err: any, data: any) => void): void;
    registerActivityType(params: any, callback: (err: any, data: any) => void): void;
    registerDomain(params: any, callback: (err: any, data: any) => void): void;
    registerWorkflowType(params: any, callback: (err: any, data: any) => void): void;
    requestCancelWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
    respondActivityTaskCanceled(params: Swf.RespondActivityTaskCanceledRequest, callback: (err: any, data: any) => void): void;
    respondActivityTaskCompleted(params: Swf.RespondActivityTaskCompletedRequest, callback: (err: any, data: any) => void): void;
    respondActivityTaskFailed(params: Swf.RespondActivityTaskFailedRequest, callback: (err: any, data: any) => void): void;
    respondDecisionTaskCompleted(params: Swf.RespondDecisionTaskCompletedRequest, callback: (err: any, data: any) => void): void;
    signalWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
    startWorkflowExecution(params: any, callback: (err: any, data: Swf.StartWorkflowExecutionResult) => void): void;
    terminateWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;

  }

  export class S3 {
    constructor(options?: any);
    endpoint: Endpoint;

    getObject(params: s3.GetObjectRequest, callback?: (err: Error, data: any) => void): any;
    putObject(params: s3.PutObjectRequest, callback?: (err: Error, data: any) => void): any;
    copyObject(params: s3.CopyObjectRequest, callback?: (err: Error, data: any) => void): any;
    deleteObject(params: s3.DeleteObjectRequest, callback: (err: Error, data: any) => void): void;
    headObject(params: s3.HeadObjectRequest, callback: (err: Error, data: any) => void): void;
    getSignedUrl(operation: string, params: any): string;
    getSignedUrl(operation: string, params: any, callback: (err: Error, url: string) => void): void;
    upload(params?: s3.PutObjectRequest, options?: s3.UploadOptions, callback?: (err: Error, data: any) => void): void;
    listObjects(params: s3.ListObjectRequest, callback: (err: Error, data: s3.ListObjectResponse) => void): void;
    listObjectsV2(params: s3.ListObjectV2Request, callback: (err: Error, data: s3.ListObjectV2Response) => void): void;
    waitFor(state: string, params: s3.HeadObjectRequest, callback: (err: Error, data: any) => void): void;

    createMultipartUpload(params: any, callback: (err: Error, data: any) => void): void;
    uploadPart(params: any, callback: (err: Error, data: any) => void): void;
    listParts(params: any, callback: (err: Error, data: any) => void): void;
    completeMultipartUpload(params: any, callback: (err: Error, data: any) => void): void;
  }

  export class STS {
    constructor(options?: any);
    endpoint: Endpoint;

		/**
		 * Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) that you can use to access AWS resources that you might not normally have access to.
		 */
    assumeRole(params: sts.AssumeRoleParams, callback: (err: any, data: sts.AssumeRoleCallbackData) => void): void;

		/**
		 * Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response.
		 */
    assumeRoleWithSAML(params: sts.AssumeRoleWithSAMLParams, callback: (err: any, data: any) => void): void;

		/**
		 * Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider, such as Amazon Cognito, Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity provider.
		 */
    assumeRoleWithWebIdentity(params: sts.AssumeRoleWithWebIdentityParams, callback: (err: any, data: any) => void): void;

		/**
		 * Creates a credentials object from STS response data containing credentials information.
		 */
    credentialsFrom(params: sts.CredentialsFromParams, callback: (err: any, data: any) => void): void;

		/**
		 * Decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request.
		 */
    decodeAuthorizationMessage(params: sts.DecodeAuthorizationMessageParams, callback: (err: any, data: any) => void): void;

		/**
		 * Returns details about the IAM identity whose credentials are used to call the API.
		 */
    getCallerIdentity(params: {}, callback: (err: any, data: any) => void): void;

		/**
		 * Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user.
		 */
    getFederationToken(params: sts.GetFederationTokenParams, callback: (err: any, data: any) => void): void;

		/**
		 * Returns a set of temporary credentials for an AWS account or IAM user.
		 */
    getSessionToken(params: sts.GetSessionTokenParams, callback: (err: any, data: any) => void): void;

  }

  export class ECS {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
    * Runs and maintains a desired number of tasks from a specified task definition. If the number of tasks running in a service drops below desiredCount, Amazon ECS spawns another instantiation of the task in the specified cluster. To update an existing service, see UpdateService.
    */
    createService(params: ecs.CreateServicesParams, callback: (err: any, data: any) => void): void;
		/**
		 * Describes one or more of your clusters.
		 */
    describeClusters(params: ecs.DescribeClustersParams, callback: (err: any, data: any) => void): void;
		/**
		 * Describes the specified services running in your cluster.
		 */
    describeServices(params: ecs.DescribeServicesParams, callback: (err: any, data: any) => void): void;
		/**
		 * Describes a specified task or tasks.
		 */
    describeTasks(params: ecs.DescribeTasksParams, callback: (err: any, data: any) => void): void;
		/**
		 * Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.
		 */
    describeTaskDefinition(params: ecs.DescribeTaskDefinitionParams, callback: (err: any, data: any) => void): void;
		/**
		 * Registers a new task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon EC2 Container Service Developer Guide.
		 */
    registerTaskDefinition(params: ecs.RegisterTaskDefinitionParams, callback: (err: any, data: any) => void): void;
		/**
		 * Modifies the desired count, deployment configuration, or task definition used in a service.
		 */
    updateService(params: ecs.UpdateServiceParams, callback: (err: any, data: any) => void): void;
  }

  export class DynamoDB {
    constructor(options?: any);
    endpoint: Endpoint;
    createTable(params: any, next: (err: any, data: any) => void): void;
    deleteTable(params: any, next: (err: any, data: any) => void): void;
  }

  // ==========================================================

  export module DynamoDB {

    interface _DDBDC_Generic {
      TableName: string;
      ExpressionAttributeNames?: { [someKey: string]: string };
      ReturnConsumedCapacity?: "INDEXES" | "TOTAL" | "NONE";
    }

    type _DDBDC_ComparisonOperator = "EQ" | "NE" | "IN" | "LE" | "LT" | "GE" | "GT" | "BETWEEN" | "NOT_NULL" | "NULL" | "CONTAINS" | "NOT_CONTAINS" | "BEGINS_WITH"
    type _DDBDC_Keys = { [someKey: string]: any };
    type _DDBDC_KeyComparison = {
      [someKey: string]: {
        AttributeValueList: any[];
        ComparisonOperator: _DDBDC_ComparisonOperator;
      }
    };

    interface _DDBDC_Reader extends _DDBDC_Generic {
      ConsistentRead?: boolean;
      ProjectionExpression?: string;
      AttributesToGet?: string[];
    }

    interface _DDBDC_Writer extends _DDBDC_Generic {
      ExpressionAttributeValues?: _DDBDC_Keys;
      ReturnItemCollectionMetrics?: "SIZE" | "NONE";
      ReturnValues?: "NONE" | "ALL_OLD" | "UPDATED_OLD" | "ALL_NEW" | "UPDATED_NEW";
      ConditionExpression?: string;
      ConditionalOperator?: "AND" | "OR";
      Expected?: {
        [someKey: string]: {
          AttributeValueList?: any[];
          ComparisonOperator?: _DDBDC_ComparisonOperator;
          Exists: boolean;
          Value?: any;
        }
      }
    }

    interface UpdateParam extends _DDBDC_Writer {
      Key: _DDBDC_Keys;
      UpdateExpression?: string;
      AttributeUpdates?: {
        [someKey: string]: {
          Action: "PUT" | "ADD" | "DELETE";
          Value: any
        }
      }
    }

    interface QueryParam extends _DDBDC_Reader {
      ConditionalOperator?: "AND" | "OR";
      ExclusiveStartKey?: _DDBDC_Keys;
      ExpressionAttributeValues?: _DDBDC_Keys;
      FilterExpression?: string;
      IndexName?: string;
      KeyConditionExpression?: string;
      KeyConditions?: _DDBDC_KeyComparison;
      Limit?: number;
      QueryFilter?: _DDBDC_KeyComparison;
      ScanIndexForward?: boolean;
      Select?: "ALL_ATTRIBUTES" | "ALL_PROJECTED_ATTRIBUTES" | "SPECIFIC_ATTRIBUTES" | "COUNT";
    }

    interface ScanParam extends QueryParam {
      Segment?: number;
      ScanFilter?: _DDBDC_KeyComparison;
      TotalSegments?: number;
    }

    interface GetParam extends _DDBDC_Reader {
      Key: _DDBDC_Keys;
    }

    interface PutParam extends _DDBDC_Writer {
      Item: _DDBDC_Keys;
    }

    interface DeleteParam extends _DDBDC_Writer {
      Key: _DDBDC_Keys;
    }

    export class DocumentClient {
      constructor(options?: any);
      get(params: GetParam, next: (err: any, data: any) => void): void;
      put(params: PutParam, next: (err: any, data: any) => void): void;
      delete(params: DeleteParam, next: (err: any, data: any) => void): void;
      query(params: QueryParam, next: (err: any, data: any) => void): void;
      scan(params: ScanParam, next: (err: any, data: any) => void): void;
      update(params: UpdateParam, next: (err: any, data: any) => void): void;
      createSet(list: any[], options?: { validate?: boolean }): { values: any[], type: string };
      batchGet(params: any, next: (err: any, data: any) => void): void;
      batchWrite(params: any, next: (err: any, data: any) => void): void;
    }

  }

  // ===========================================================

  export module CloudFormation {

    export interface CancelUpdateStackParams {
      StackName: string;
    }

    export interface ContinueUpdateRollbackParams {
      StackName: string;
    }

    export interface CreateChangeSetParams {
      StackName: string;
      TemplateBody?: string;  //  specify either TemplateBody or TemplateURL
      TemplateURL?: string;   //  specify either TemplateBody or TemplateURL
      UsePreviousTemplate?: boolean;
      Parameters?: CloudFormation.Parameter[];
      Capabilities?: string[];  //  CAPABILITY_IAM | CAPABILITY_NAMED_IAM
      ResourceTypes?: string[];
      NotificationARNs?: string[];
      Tags?: CloudFormation.Tag[];
      ChangeSetName: string;
      ClientToken?: string;
      Description?: string;
    }

    export interface CreateStackParams {
      StackName: string;
      TemplateBody?: string;  //  specify either TemplateBody or TemplateURL
      TemplateURL?: string;   //  specify either TemplateBody or TemplateURL
      Parameters?: CloudFormation.Parameter[];
      DisableRollback?: boolean;  //  cannot specify both DisableRollback and OnFailure
      TimeoutInMinutes?: number;
      NotificationARNs?: string[];
      Capabilities?: string[];
      ResourceTypes?: string[];
      OnFailure?: string[];       //  cannot specify both DisableRollback and OnFailure
                                  //  DO_NOTHING | ROLLBACK | DELETE
      StackPolicyBody?: string[];  //  cannot specify both StackPolicyBody and StackPolicyURL
      StackPolicyURL?: string[];   //  cannot specify both StackPolicyBody and StackPolicyURL
      Tags?: CloudFormation.Tag[];
    }

    export interface DeleteChangeSetParams {
      ChangeSetName: string;
      StackName?: string;
    }

    export interface DeleteStackParams {
      StackName: string;
      RetainResources?: string[];
    }

    export interface DescribeAccountLimitsParams {
      NextToken?: string;
    }

    export interface DescribeChangeSetParams {
      ChangeSetName: string;
      StackName?: string;
      NextToken?: string;
    }

    export interface DescribeStackEventsParams {
      StackName?: string;
      NextToken?: string;
    }

    export interface DescribeStackResourceParams {
      StackName: string;
      LogicalResourceId: string;
    }

    export interface DescribeStackResourcesParams {
      StackName?: string;          //  must specify either StackName or PhysicalResourceId
      LogicalResourceId?: string;
      PhysicalResourceId?: string; //  must specify either StackName or PhysicalResourceId
    }

    export interface DescribeStacksParams {
      StackName?: string;
      NextToken?: string;
    }

    export interface EstimateTemplateCostParams {
      TemplateBody?: string;  //  must specify either TemplateBody or TemplateURL
                              //  if both are passed, only TemplateBody is used
      TemplateURL?: string;   //  must specify either TemplateBody or TemplateURL
      Parameters?: CloudFormation.Parameter[];
    }

    export interface ExecuteChangeSetParams {
      ChangeSetName: string;
      StackName?: string;
    }

    export interface GetStackPolicyParams {
      StackName: string;
    }

    export interface GetTemplateParams {
      StackName: string;
    }

    export interface GetTemplateSummaryParams {
      //  must specify one of the three
      TemplateBody?: string;
      TemplateURL?: string;
      StackName?: string;
    }

    export interface ListChangeSetsParams {
      StackName: string;
      NextToken?: string;
    }

    export interface ListStackResourcesParams {
      StackName: string;
      NextToken?: string;
    }

    export interface ListStacksParams {
      NextToken?: string;
      StackStatusFilter?: string[];
    }

    export interface SetStackPolicyParams {
      StackName: string;
      StackPolicyBody?: string;  //  cannot set both StackPolicyBody and StackPolicyURL
      StackPolicyURL?: string;   //  cannot set both StackPolicyBody and StackPolicyURL
    }

    export interface SignalResourceParams {
      StackName: string;
      LogicalResourceId: string;
      UniqueId: string;
      Status: string;  //  SUCCESS | FAILURE
    }

    export interface UpdateStackParams {
      StackName: string;
      TemplateBody?: string;  //  specify either TemplateBody or TemplateURL, not both
      TemplateURL?: string;   //  specify either TemplateBody or TemplateURL, not both
      UsePreviousTemplate?: boolean;
      StackPolicyDuringUpdateBody?: string;  //  cannot set both StackPolicyDuringUpdateBody and StackPolicyDuringUpdateURL
      StackPolicyDuringUpdateURL?: string;   //  cannot set both StackPolicyDuringUpdateBody and StackPolicyDuringUpdateURL
      Parameters?: CloudFormation.Parameter[];
      Capabilities?: string[];  //  CAPABILITY_IAM | CAPABILITY_NAMED_IAM
      ResourceTypes?: string[];
      StackPolicyBody?: string;  //  cannot set both StackPolicyBody and StackPolicyURL
      StackPolicyURL?: string;   //  cannot set both StackPolicyBody and StackPolicyURL
      NotificationARNs?: string[];
      Tags?: CloudFormation.Tag[];
    }

    export interface ValidateTemplateParams {
      TemplateBody?: string;  //  must pass either TemplateBody or TemplateURL
                              //  if both are specified, only TemplateBody is used
      TemplateURL?: string;   //  must pass either TemplateBody or TemplateURL
    }

    export interface WaitForParams {
      StackName: string;
      NextToken?: string;
    }

    export interface Options {
      params?: any;
      endpoint?: string;
      accessKeyId?: string;
      secretAccessKey?: string;
      sessionToken?: any;
      credentials?: any;
      credentialProvider?: any;
      region?: string;
      maxRetries?: number;
      maxRedirects?: number;
      sslEnabled?: boolean;
      paramValidation?: any;
      computeChecksums?: boolean;
      convertResponseTypes?: boolean;
      correctClockSkew?: boolean;
      s3ForcePathStyle?: boolean;
      s3BucketEndpoint?: boolean;
      s3DisableBodySigning?: boolean;
      retryDelayOptions?: any;
      httpOptions?: any;
      apiVersion?: any;
      apiVersions?: any;
      logger?: any;
      systemClockOffset?: number;
      signatureVersion?: string;
      signatureCache?: boolean;
    }

    export interface Parameter {
      ParameterKey: string;
      ParameterValue: string;
      UsePreviousValue?: boolean;  //  if you specify true, do not specify ParameterValue
    }

    export interface Tag {
      Key: string;
      Value: string;
    }
  }

  // ===========================================================

  export module Lambda {

    export interface AddPermissionParams {
      Action: string;
      FunctionName: string;
      Principal: string;
      StatementId: string;
      Qualifier?: string;
      SourceAccount?: string;
      SourceArn?: string;
    }

    export interface CreateAliasParams {
      FunctionName: string;
      FunctionVersion: string;
      Name: string;
      Description?: string;
    }

    export interface CreateEventSourceMappingParams {
      EventSourceArn: string;
      FunctionName: string;
      StartingPosition: string; /* TRIM_HORIZON | LATEST */
      BatchSize?: number;
      Enabled?: boolean
    }

    export interface CreateFunctionParams {
      Code: {
        S3Bucket?: string;
        S3Key?: string;
        S3ObjectVersion?: string;
        ZipFile?: any; // new Buffer('...') || string;
      },
      FunctionName: string;
      Handler: string;
      Role: string;
      Runtime: string; /* 'nodejs | java8 | python2.7', */
      Description?: string;
      MemorySize?: number;
      Publish?: boolean;
      Timeout?: number;
      VpcConfig?: {
        SecurityGroupIds?: string[];
        SubnetIds?: string[];
      }
    }

    export interface DeleteAliasParams {
      FunctionName: string;
      Name: string;
    }

    export interface DeleteEventSourceMappingParams {
      UUID: string;
    }

    export interface DeleteFunctionParams {
      FunctionName: string;
      Qualifier?: string;
    }
    export interface GetAliasParams {
      FunctionName: string;
      Name: string;
    }

    export interface GetEventSourceMappingParams {
      UUID: string;
    }

    export interface GetFunctionParams {
      FunctionName: string;
      Qualifier?: string;
    }

    export interface GetFunctionConfigurationParams {
      FunctionName: string;
      Qualifier?: string;
    }

    export interface GetPolicyParams {
      FunctionName: string;
      Qualifier?: string;
    }

    export interface InvokeParams {
      FunctionName: string;
      ClientContext?: string;
      InvocationType?: string;/* 'Event | RequestResponse | DryRun' */
      LogType?: string; /* 'None | Tail' */
      Payload?: any; /* new Buffer('...') || string */
      Qualifier?: string;
    }

    export interface ListAliasesParams {
      FunctionName: string;
      FunctionVersion?: string;
      Marker?: string;
      MaxItems?: number
    }

    export interface ListEventSourceMappingsParams {
      EventSourceArn?: string;
      FunctionName?: string;
      Marker?: string;
      MaxItems?: number
    }

    export interface ListFunctionsParams {
      Marker?: string;
      MaxItems?: number
    }

    export interface ListVersionsByFunctionParams {
      FunctionName: string;
      Marker?: string;
      MaxItems?: number
    }

    export interface PublishVersionParams {
      FunctionName: string;
      CodeSha256?: string;
      Description?: string;
    }

    export interface RemovePermissionParams {
      FunctionName: string;
      StatementId: string;
      Qualifier?: string;
    }

    export interface UpdateAliasParams {
      FunctionName: string;
      Name: string;
      Description?: string;
      FunctionVersion?: string;
    }

    export interface UpdateEventSourceMappingParams {
      UUID: string;
      BatchSize?: number;
      Enabled?: boolean;
      FunctionName?: string;
    }

    export interface UpdateFunctionCodeParams {
      FunctionName: string;
      Publish?: boolean;
      S3Bucket?: string;
      S3Key?: string;
      S3ObjectVersion?: string;
      ZipFile?: any; /* new Buffer('...') || string; */

    }

    export interface UpdateFunctionConfigurationParams {
      FunctionName: string;
      Description?: string;
      Handler?: string;
      MemorySize?: number;
      Role?: string;
      Timeout?: number;
      VpcConfig?: {
        SecurityGroupIds?: string[];
        SubnetIds?: string[];
      }
    }
  }

  export module AutoScaling {
    export interface AutoScalingOptions {
        params?: any;
        endpoint?: string;
        accessKeyId?: string;
        secretAccessKey?: string;
        sessionToken?: Credentials;
        credentials?: Credentials;
        credentialProvider?: any;
        region?: string;
        maxRetries?: number;
        maxRedirects?: number;
        sslEnabled?: boolean;
        paramValidation?: boolean;
        computeChecksums?: boolean;
        convertResponseTypes?: boolean;
        correctClockSkew?: boolean;
        s3ForcePathStyle?: boolean;
        s3BucketEndpoint?: boolean;
        s3DisableBodySigning?: boolean;
        retryDelayOptions?: RetryDelayOption;
        httpOptions?: HttpOptions;
        apiVersion?: string;
        apiVersions?: { [serviceName: string]: string };
        logger?: Logger;
        systemClockOffset?: number;
        signatureVersion?: string;
        signatureCache?: boolean;
    }

    export interface AttachInstancesParams {
        AutoScalingGroupName: string;
        InstanceIds: string[];
    }

    export interface AttachLoadBalancersParams {
        AutoScalingGroupName: string;
        LoadBalancerNames: string[];
    }

    export interface AttachLoadBalancerTargetGroupsParams {
        AutoScalingGroupName: string;
        TargetGroupARNs: string[];
    }

    export interface CompleteLifecycleActionParams {
        AutoScalingGroupName: string;
        LifecycleActionResult: string;
        LifecycleHookName: string;
        lifecycleActionToken?: string;
        InstanceId?: string;
    }

    export interface CreateAutoScalingGroupParams {
        AutoScalingGroupName: string;
        MinSize: number;
        MaxSize: number;
        LaunchConfigurationName?: string;
        InstanceId?: string;
        DesiredCapacity?: number;
        DefaultCooldown?: number;
        AvailabilityZones?: string[];
        LoadBalancerNames?: string[];
        TargetGroupARNs?: string[];
        HealthCheckType?: string;
        HealthCheckGracePeriod?: number;
        PlacementGroup?: string;
        VPCZoneIdentifier?: string;
        TerminationPolicies?: string;
        NewInstancesProtectedFromScaleIn?: boolean;
        Tags?: Tags;
    }

    export interface CreateLaunchConfigurationParams {
        LaunchConfigurationName: string;
        AssociatePublicIpAddress?: boolean;
        ImageId?: string;
        KeyName?: string;
        SecurityGroups?: string[];
        ClassicLinkVPCId?: string;
        ClassicLinkVPCSecurityGroups?: string[];
        UserData?: string;
        InstanceId?: string;
        InstanceType?: string;
        KernelId?: string;
        RamdiskId?: string;
        BlockDeviceMappings?: BlockDeviceMapping[];
        InstanceMonitoring?: InstanceMonitoring;
        SpotPrice?: string;
        IamInstanceProfile?: string;
        EbsOptimized?: boolean;
        PlacementTenancy?: string;
    }

    export interface CreateOrUpdateTagsParams {
        Tags: Tags[];
    }

    export interface DeleteAutoScalingGroupParams {
        AutoScalingGroupName: string;
        ForceDelete?: boolean;
    }

    export interface DeleteLaunchConfigurationParams {
        LaunchConfigurationName: string;
    }

    export interface DeleteLifecycleHookParams {
        AutoScalingGroupName: string;
        LifecycleHookName: string;
    }

    export interface DeleteNotificationConfigurationParams {
        AutoScalingGroupName: string;
        TopicARN: string;
    }

    export interface DeletePolicyParams {
        PolicyName: string;
        AutoScalingGroupName?: string;
    }

    export interface DeleteScheduledActionParams {
        AutoScalingGroupName: string;
        ScheduledActionName: string;
    }

    export interface DeleteTagsParams {
        Tags: Tags[];
    }

    export interface DescribeAutoScalingGroupsParams {
        AutoScalingGroupName?: string;
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribeAutoScalingInstancesParams {
        InstanceIds?: string[];
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribeLaunchConfigurationsParams {
        LaunchConfigurationNames?: string[];
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribeLifecycleHooksParams {
        AutoScalingGroupName: string;
        LifecycleHookNames?: string[];
    }

    export interface DescribeLoadBalancersParams {
        AutoScalingGroupName: string;
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribeLoadBalancerTargetGroupsParams {
        AutoScalingGroupName: string;
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribeNotificationConfigurationsParams {
        AutoScalingGroupName?: string;
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribePoliciesParams {
        AutoScalingGroupName?: string;
        PolicyNames?: string[];
        PolicyTypes?: string[];
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribeScalingActivitiesParams {
        AutoScalingGroupName?: string;
        ActivityIds?: string[];
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribeScheduledActionsParams {
        AutoScalingGroupName?: string;
        ScheduledActionNames?: string[];
        StartTime?: Date;
        EndTime?: Date;
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DescribeTagsParams {
        Filters?: Filter[];
        NextToken?: string;
        MaxRecords?: number;
    }

    export interface DetachInstancesParams {
        AutoScalingGroupName: string;
        ShouldDecrementDesiredCapacity: boolean;
        InstanceIds?: string[];
    }

    export interface DetachLoadBalancersParams {
        AutoScalingGroupName: string;
        LoadBalancerNames: string;
    }

    export interface DetachLoadBalancerTargetGroupsParams {
        AutoScalingGroupName: string;
        TargetGroupARNs: string[];
    }

    export interface DisableMetricsCollectionParams {
        AutoScalingGroupName: string;
        Metrics?: string[];
    }

    export interface EnableMetricsCollectionParams {
        AutoScalingGroupName: string;
        Granularity: string;
        Metrics?: string[];
    }

    export interface EnterStandbyParams {
        AutoScalingGroupName: string;
        ShouldDecrementDesiredCapacity: boolean;
        InstanceIds?: string[];
    }

    export interface ExecutePolicyParams {
        PolicyName: string;
        AutoScalingGroupName?: string;
        HonorCooldown?: boolean;
        MetricValue?: number;
        BreachThreshold?: number;
    }

    export interface ExitStandbyParams {
        AutoScalingGroupName: string;
        InstanceIds?: string[];
    }

    export interface PutLifecycleHookParams {
        AutoScalingGroupName: string;
        LifecycleHookName: string;
        LifecycleTransition?: string;
        RoleARN?: string;
        NotificationTargetARN?: string;
        NotificationMetadata?: string;
        HeartbeatTimeout?: number;
        DefaultResult?: string;
    }

    export interface PutNotificationConfigurationParams {
        AutoScalingGroupName: string;
        NotificationTypes: string[];
        TopicARN: string;
    }

    export interface PutScalingPolicyParams {
        AutoScalingGroupName: string;
        AdjustmentType: string;
        PolicyName: string;
        PolicyType?: string;
        MinAdjustmentStep?: number;
        MinAdjustmentMagnitude?: number;
        ScalingAdjustment?: number;
        Cooldown?: number;
        MetricAggregationType?: string;
        StepAdjustments?: StepAdjustment[];
        EstimatedInstanceWarmup: number;
    }

    export interface PutScheduledUpdateGroupActionParams {
        AutoScalingGroupName: string;
        ScheduledActionName: string;
        Time?: Date;
        StartTime?: Date;
        EndTime?: Date;
        Recurrence?: string;
        MinSize?: number;
        MaxSize?: number;
        DesiredCapacity?: number;
    }

    export interface RecordLifecycleActionHeartbeatParams {
        AutoScalingGroupName: string;
        LifecycleHookName: string;
        LifecycleActionToken?: string;
        InstanceId?: string;
    }

    export interface ResumeProcessesParams {
        AutoScalingGroupName: string;
        ScalingProcesses?: string[];
    }

    export interface SetDesiredCapacityParams {
        AutoScalingGroupName: string;
        DesiredCapacity: number;
        HonorCooldown?: boolean;
    }

    export interface SetInstanceHealthParams {
        HealthStatus: string;
        InstanceId: string;
        ShouldRespectGracePeriod?: boolean;
    }

    export interface SetInstanceProtectionParams {
        AutoScalingGroupName: string;
        InstanceIds: string[];
        ProtectedFromScaleIn: boolean;
    }

    export interface SuspendProcessesParams {
        AutoScalingGroupName: string;
        ScalingProcesses?: string[];
    }

    export interface TerminateInstanceInAutoScalingGroupParams {
        InstanceId: string;
        ShouldDecrementDesiredCapacity: boolean;
    }

    export interface UpdateAutoScalingGroupParams {
        AutoScalingGroupName: string;
        LaunchConfigurationName: string;
        MinSize: number;
        MaxSize: number;
        DesiredCapacity: number;
        DefaultCooldown: number;
        AvailabilityZones: string[];
        HealthCheckType: string;
        HealthCheckGracePeriod: number;
        PlacementGroup: string;
        VPCZoneIdentifier: string;
        TerminationPolicies: string[];
        NewInstancesProtectedFromScaleIn?: boolean;
    }
  }


  export module SQS {

    export interface SqsOptions {
      params?: any;
      endpoint?: string;
      accessKeyId?: string;
      secretAccessKey?: string;
      sessionToken?: Credentials;
      credentials?: Credentials;
      credentialProvider?: any;
      region?: string;
      maxRetries?: number;
      maxRedirects?: number;
      sslEnabled?: boolean;
      paramValidation?: boolean;
      computeChecksums?: boolean;
      convertResponseTypes?: boolean;
      correctClockSkew?: boolean;
      s3ForcePathStyle?: boolean;
      s3BucketEndpoint?: boolean;
      httpOptions?: HttpOptions;
      apiVersion?: string;
      apiVersions?: { [serviceName: string]: string };
      logger?: Logger;
      systemClockOffset?: number;
      signatureVersion?: string;
      signatureCache?: boolean;
    }

    export interface AddPermissionParams {
      QueueUrl: string;
      Label: string;
      AWSAccountIds: string[];
      Actions: string[];
    }

    export interface ChangeMessageVisibilityParams {
      QueueUrl: string,
      ReceiptHandle: string,
      VisibilityTimeout: number
    }

    export interface ChangeMessageVisibilityBatchParams {
      QueueUrl: string,
      Entries: { Id: string; ReceiptHandle: string; VisibilityTimeout?: number; }[]
    }

    export interface ChangeMessageVisibilityBatchResponse {
      Successful: { Id: string }[];
      Failed: BatchResultErrorEntry[];
    }

    export interface SendMessageParams {
      QueueUrl?: string;
      MessageBody: string;
      DelaySeconds?: number;
      MessageAttributes?: { [name: string]: MessageAttribute; }
    }

    export interface ReceiveMessageParams {
      QueueUrl: string;
      MaxNumberOfMessages?: number;
      VisibilityTimeout?: number;
      AttributeNames?: string[];
      MessageAttributeNames?: string[];
      WaitTimeSeconds?: number;
    }

    export interface DeleteMessageBatchParams {
      QueueUrl: string;
      Entries: DeleteMessageBatchRequestEntry[];
    }

    export interface DeleteMessageBatchRequestEntry {
      Id: string;
      ReceiptHandle: string;
    }

    export interface DeleteMessageParams {
      QueueUrl: string;
      ReceiptHandle: string;
    }

    export interface SendMessageBatchParams {
      QueueUrl: string;
      Entries: SendMessageBatchRequestEntry[];
    }

    export interface SendMessageBatchRequestEntry {
      Id: string;
      MessageBody: string;
      DelaySeconds?: number;
      MessageAttributes?: { [name: string]: MessageAttribute; }
    }

    export interface CreateQueueParams {
      QueueName: string;
      Attributes: QueueAttributes;
    }

    export interface QueueAttributes {
      [name: string]: any;
      DelaySeconds?: number;
      MaximumMessageSize?: number;
      MessageRetentionPeriod?: number;
      Policy?: any;
      ReceiveMessageWaitTimeSeconds?: number;
      VisibilityTimeout?: number;
      RedrivePolicy?: any;
    }

    export interface GetQueueAttributesParams {
      QueueUrl: string;
      AttributeNames: string[];
    }

    export interface GetQueueAttributesResult {
      Attributes: { [name: string]: string };
    }

    export interface GetQueueUrlParams {
      QueueName: string;
      QueueOwnerAWSAccountId?: string;
    }

    export interface SendMessageResult {
      MessageId: string;
      MD5OfMessageBody: string;
      MD5OfMessageAttributes: string;
    }

    export interface ReceiveMessageResult {
      Messages: Message[];
    }

    export interface Message {
      MessageId: string;
      ReceiptHandle: string;
      MD5OfBody: string;
      Body: string;
      Attributes: { [name: string]: any };
      MD5OfMessageAttributes: string;
      MessageAttributes: { [name: string]: MessageAttribute; }
    }

    export interface MessageAttribute {
      StringValue?: string;
      BinaryValue?: any; //(Buffer, Typed Array, Blob, String)
      StringListValues?: string[];
      BinaryListValues?: any[];
      DataType: string;
    }

    export interface DeleteMessageBatchResult {
      Successful: DeleteMessageBatchResultEntry[];
      Failed: BatchResultErrorEntry[];
    }

    export interface DeleteMessageBatchResultEntry {
      Id: string;
    }

    export interface BatchResultErrorEntry {
      Id: string;
      Code: string;
      Message?: string;
      SenderFault: boolean;
    }

    export interface SendMessageBatchResult {
      Successful: SendMessageBatchResultEntry[];
      Failed: BatchResultErrorEntry[];
    }

    export interface SendMessageBatchResultEntry {
      Id: string;
      MessageId: string;
      MD5OfMessageBody: string;
      MD5OfMessageAttributes: string;
    }

    export interface CreateQueueResult {
      QueueUrl: string;
    }

    export interface SetQueueAttributesParams {
      QueueUrl: string;
      Attributes: QueueAttributes;
    }

  }

  export module SES {

    export interface Client {
      config: ClientConfig;

      sendEmail(params: any, callback: (err: any, data: SendEmailResult) => void): void;
    }

    export interface SendEmailRequest {
      Source: string;
      Destination: Destination;
      Message: Message;
      ReplyToAddresses: string[];
      ReturnPath: string;
    }

    export class Destination {
      ToAddresses: string[];
      CcAddresses: string[];
      BccAddresses: string[];
    }

    export class Message {
      Subject: Content;
      Body: Body;
    }

    export class Content {
      Data: string;
      Charset: string;
    }

    export class Body {
      Text: Content;
      Html: Content;
    }

    export class SendEmailResult {
      MessageId: string;
    }

  }

  export module Swf {

    export interface Client {
      //constructor(options?: any);
      config: ClientConfig;

      countClosedWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
      countOpenWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
      countPendingActivityTasks(params: any, callback: (err: any, data: any) => void): void;
      countPendingDecisionTasks(params: any, callback: (err: any, data: any) => void): void;
      deprecateActivityType(params: any, callback: (err: any, data: any) => void): void;
      deprecateDomain(params: any, callback: (err: any, data: any) => void): void;
      deprecateWorkflowType(params: any, callback: (err: any, data: any) => void): void;
      describeActivityType(params: any, callback: (err: any, data: any) => void): void;
      describeDomain(params: any, callback: (err: any, data: any) => void): void;
      describeWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
      describeWorkflowType(params: any, callback: (err: any, data: any) => void): void;
      getWorkflowExecutionHistory(params: any, callback: (err: any, data: any) => void): void;
      listActivityTypes(params: any, callback: (err: any, data: any) => void): void;
      listClosedWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
      listDomains(params: any, callback: (err: any, data: any) => void): void;
      listOpenWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
      listWorkflowTypes(params: any, callback: (err: any, data: any) => void): void;
      pollForActivityTask(params: any, callback: (err: any, data: ActivityTask) => void): void;
      pollForDecisionTask(params: any, callback: (err: any, data: DecisionTask) => void): void;
      recordActivityTaskHeartbeat(params: any, callback: (err: any, data: any) => void): void;
      registerActivityType(params: any, callback: (err: any, data: any) => void): void;
      registerDomain(params: any, callback: (err: any, data: any) => void): void;
      registerWorkflowType(params: any, callback: (err: any, data: any) => void): void;
      requestCancelWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
      respondActivityTaskCanceled(params: RespondActivityTaskCanceledRequest, callback: (err: any, data: any) => void): void;
      respondActivityTaskCompleted(params: RespondActivityTaskCompletedRequest, callback: (err: any, data: any) => void): void;
      respondActivityTaskFailed(params: RespondActivityTaskFailedRequest, callback: (err: any, data: any) => void): void;
      respondDecisionTaskCompleted(params: RespondDecisionTaskCompletedRequest, callback: (err: any, data: any) => void): void;
      signalWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
      startWorkflowExecution(params: any, callback: (err: any, data: StartWorkflowExecutionResult) => void): void;
      terminateWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
    }

    export interface PollForActivityTaskRequest {
      domain?: string;
      taskList?: TaskList;
      identity?: string;
    }

    export interface TaskList {
      name?: string;
    }

    export interface PollForDecisionTaskRequest {
      domain?: string;
      taskList?: TaskList;
      identity?: string;
      nextPageToken?: string;
      maximumPageSize?: number;
      reverseOrder?: Boolean;
    }

    export interface StartWorkflowExecutionRequest {
      domain?: string;
      workflowId?: string;
      workflowType?: WorkflowType;
      taskList?: TaskList;
      input?: string;
      executionStartToCloseTimeout?: string;
      tagList?: string[];
      taskStartToCloseTimeout?: string;
      childPolicy?: string;
    }

    export interface WorkflowType {
      name?: string;
      version?: string;
    }

    export interface RespondDecisionTaskCompletedRequest {
      taskToken?: string;
      decisions?: Decision[];
      executionContext?: string;
    }

    export interface Decision {
      decisionType?: string;
      scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;
      requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;
      completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;
      failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;
      cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;
      continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;
      recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;
      startTimerDecisionAttributes?: StartTimerDecisionAttributes;
      cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;
      signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;
      requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;
      startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;
    }

    export interface ScheduleActivityTaskDecisionAttributes {
      activityType?: ActivityType;
      activityId?: string;
      control?: string;
      input?: string;
      scheduleToCloseTimeout?: string;
      taskList?: TaskList;
      scheduleToStartTimeout?: string;
      startToCloseTimeout?: string;
      heartbeatTimeout?: string;
    }

    export interface ActivityType {
      name?: string;
      version?: string;
    }

    export interface RequestCancelActivityTaskDecisionAttributes {
      activityId?: string;
    }

    export interface CompleteWorkflowExecutionDecisionAttributes {
      result?: string;
    }

    export interface FailWorkflowExecutionDecisionAttributes {
      reason?: string;
      details?: string;
    }

    export interface CancelWorkflowExecutionDecisionAttributes {
      details?: string;
    }

    export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
      input?: string;
      executionStartToCloseTimeout?: string;
      taskList?: TaskList;
      taskStartToCloseTimeout?: string;
      childPolicy?: string;
      tagList?: string[];
      workflowTypeVersion?: string;
    }

    export interface RecordMarkerDecisionAttributes {
      markerName?: string;
      details?: string;
    }

    export interface StartTimerDecisionAttributes {
      timerId?: string;
      control?: string;
      startToFireTimeout?: string;
    }

    export interface CancelTimerDecisionAttributes {
      timerId?: string;
    }

    export interface SignalExternalWorkflowExecutionDecisionAttributes {
      workflowId?: string;
      runId?: string;
      signalName?: string;
      input?: string;
      control?: string;
    }

    export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
      workflowId?: string;
      runId?: string;
      control?: string;
    }

    export interface StartChildWorkflowExecutionDecisionAttributes {
      workflowType?: WorkflowType;
      workflowId?: string;
      control?: string;
      input?: string;
      executionStartToCloseTimeout?: string;
      taskList?: TaskList;
      taskStartToCloseTimeout?: string;
      childPolicy?: string;
      tagList?: string[];
    }

    export interface RespondActivityTaskCompletedRequest {
      taskToken?: string;
      result?: string;
    }

    export interface RespondActivityTaskFailedRequest {
      taskToken?: string;
      reason?: string;
      details?: string;
    }

    export interface RespondActivityTaskCanceledRequest {
      taskToken?: string;
      details?: string;
    }

    export interface DecisionTask {
      taskToken?: string;
      startedEventId?: number;
      workflowExecution?: WorkflowExecution;
      workflowType?: WorkflowType;
      events?: HistoryEvent[];
      nextPageToken?: string;
      previousStartedEventId?: number;
    }

    export interface WorkflowExecution {
      workflowId?: string;
      runId?: string;
    }

    export interface HistoryEvent {
      eventTimestamp?: any;
      eventType?: string;
      eventId?: number;
      workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;
      workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;
      completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;
      workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;
      failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;
      workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
      workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;
      cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;
      workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;
      continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;
      workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;
      workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;
      decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;
      decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;
      decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;
      decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;
      activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;
      activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;
      activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;
      activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;
      activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;
      activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;
      activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;
      workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;
      markerRecordedEventAttributes?: MarkerRecordedEventAttributes;
      timerStartedEventAttributes?: TimerStartedEventAttributes;
      timerFiredEventAttributes?: TimerFiredEventAttributes;
      timerCanceledEventAttributes?: TimerCanceledEventAttributes;
      startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;
      childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;
      childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;
      childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;
      childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;
      childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;
      childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;
      signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;
      externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;
      signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;
      externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;
      requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
      requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;
      scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;
      requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;
      startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;
      cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;
      startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;
    }

    export interface WorkflowExecutionStartedEventAttributes {
      input?: string;
      executionStartToCloseTimeout?: string;
      taskStartToCloseTimeout?: string;
      childPolicy?: string;
      taskList?: TaskList;
      workflowType?: WorkflowType;
      tagList?: string[];
      continuedExecutionRunId?: string;
      parentWorkflowExecution?: WorkflowExecution;
      parentInitiatedEventId?: number;
    }

    export interface WorkflowExecutionCompletedEventAttributes {
      result?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface CompleteWorkflowExecutionFailedEventAttributes {
      cause?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface WorkflowExecutionFailedEventAttributes {
      reason?: string;
      details?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface FailWorkflowExecutionFailedEventAttributes {
      cause?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface WorkflowExecutionTimedOutEventAttributes {
      timeoutType?: string;
      childPolicy?: string;
    }

    export interface WorkflowExecutionCanceledEventAttributes {
      details?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface CancelWorkflowExecutionFailedEventAttributes {
      cause?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface WorkflowExecutionContinuedAsNewEventAttributes {
      input?: string;
      decisionTaskCompletedEventId?: number;
      newExecutionRunId?: string;
      executionStartToCloseTimeout?: string;
      taskList?: TaskList;
      taskStartToCloseTimeout?: string;
      childPolicy?: string;
      tagList?: string[];
      workflowType?: WorkflowType;
    }

    export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
      cause?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface WorkflowExecutionTerminatedEventAttributes {
      reason?: string;
      details?: string;
      childPolicy?: string;
      cause?: string;
    }

    export interface WorkflowExecutionCancelRequestedEventAttributes {
      externalWorkflowExecution?: WorkflowExecution;
      externalInitiatedEventId?: number;
      cause?: string;
    }

    export interface DecisionTaskScheduledEventAttributes {
      taskList?: TaskList;
      startToCloseTimeout?: string;
    }

    export interface DecisionTaskStartedEventAttributes {
      identity?: string;
      scheduledEventId?: number;
    }

    export interface DecisionTaskCompletedEventAttributes {
      executionContext?: string;
      scheduledEventId?: number;
      startedEventId?: number;
    }

    export interface DecisionTaskTimedOutEventAttributes {
      timeoutType?: string;
      scheduledEventId?: number;
      startedEventId?: number;
    }

    export interface ActivityTaskScheduledEventAttributes {
      activityType?: ActivityType;
      activityId?: string;
      input?: string;
      control?: string;
      scheduleToStartTimeout?: string;
      scheduleToCloseTimeout?: string;
      startToCloseTimeout?: string;
      taskList?: TaskList;
      decisionTaskCompletedEventId?: number;
      heartbeatTimeout?: string;
    }

    export interface ActivityTaskStartedEventAttributes {
      identity?: string;
      scheduledEventId?: number;
    }

    export interface ActivityTaskCompletedEventAttributes {
      result?: string;
      scheduledEventId?: number;
      startedEventId?: number;
    }

    export interface ActivityTaskFailedEventAttributes {
      reason?: string;
      details?: string;
      scheduledEventId?: number;
      startedEventId?: number;
    }

    export interface ActivityTaskTimedOutEventAttributes {
      timeoutType?: string;
      scheduledEventId?: number;
      startedEventId?: number;
      details?: string;
    }

    export interface ActivityTaskCanceledEventAttributes {
      details?: string;
      scheduledEventId?: number;
      startedEventId?: number;
      latestCancelRequestedEventId?: number;
    }

    export interface ActivityTaskCancelRequestedEventAttributes {
      decisionTaskCompletedEventId?: number;
      activityId?: string;
    }

    export interface WorkflowExecutionSignaledEventAttributes {
      signalName?: string;
      input?: string;
      externalWorkflowExecution?: WorkflowExecution;
      externalInitiatedEventId?: number;
    }

    export interface MarkerRecordedEventAttributes {
      markerName?: string;
      details?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface TimerStartedEventAttributes {
      timerId?: string;
      control?: string;
      startToFireTimeout?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface TimerFiredEventAttributes {
      timerId?: string;
      startedEventId?: number;
    }

    export interface TimerCanceledEventAttributes {
      timerId?: string;
      startedEventId?: number;
      decisionTaskCompletedEventId?: number;
    }

    export interface StartChildWorkflowExecutionInitiatedEventAttributes {
      workflowId?: string;
      workflowType?: WorkflowType;
      control?: string;
      input?: string;
      executionStartToCloseTimeout?: string;
      taskList?: TaskList;
      decisionTaskCompletedEventId?: number;
      childPolicy?: string;
      taskStartToCloseTimeout?: string;
      tagList?: string[];
    }

    export interface ChildWorkflowExecutionStartedEventAttributes {
      workflowExecution?: WorkflowExecution;
      workflowType?: WorkflowType;
      initiatedEventId?: number;
    }

    export interface ChildWorkflowExecutionCompletedEventAttributes {
      workflowExecution?: WorkflowExecution;
      workflowType?: WorkflowType;
      result?: string;
      initiatedEventId?: number;
      startedEventId?: number;
    }

    export interface ChildWorkflowExecutionFailedEventAttributes {
      workflowExecution?: WorkflowExecution;
      workflowType?: WorkflowType;
      reason?: string;
      details?: string;
      initiatedEventId?: number;
      startedEventId?: number;
    }

    export interface ChildWorkflowExecutionTimedOutEventAttributes {
      workflowExecution?: WorkflowExecution;
      workflowType?: WorkflowType;
      timeoutType?: string;
      initiatedEventId?: number;
      startedEventId?: number;
    }

    export interface ChildWorkflowExecutionCanceledEventAttributes {
      workflowExecution?: WorkflowExecution;
      workflowType?: WorkflowType;
      details?: string;
      initiatedEventId?: number;
      startedEventId?: number;
    }

    export interface ChildWorkflowExecutionTerminatedEventAttributes {
      workflowExecution?: WorkflowExecution;
      workflowType?: WorkflowType;
      initiatedEventId?: number;
      startedEventId?: number;
    }

    export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
      workflowId?: string;
      runId?: string;
      signalName?: string;
      input?: string;
      decisionTaskCompletedEventId?: number;
      control?: string;
    }

    export interface ExternalWorkflowExecutionSignaledEventAttributes {
      workflowExecution?: WorkflowExecution;
      initiatedEventId?: number;
    }

    export interface SignalExternalWorkflowExecutionFailedEventAttributes {
      workflowId?: string;
      runId?: string;
      cause?: string;
      initiatedEventId?: number;
      decisionTaskCompletedEventId?: number;
      control?: string;
    }

    export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
      workflowExecution?: WorkflowExecution;
      initiatedEventId?: number;
    }

    export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
      workflowId?: string;
      runId?: string;
      decisionTaskCompletedEventId?: number;
      control?: string;
    }

    export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
      workflowId?: string;
      runId?: string;
      cause?: string;
      initiatedEventId?: number;
      decisionTaskCompletedEventId?: number;
      control?: string;
    }

    export interface ScheduleActivityTaskFailedEventAttributes {
      activityType?: ActivityType;
      activityId?: string;
      cause?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface RequestCancelActivityTaskFailedEventAttributes {
      activityId?: string;
      cause?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface StartTimerFailedEventAttributes {
      timerId?: string;
      cause?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface CancelTimerFailedEventAttributes {
      timerId?: string;
      cause?: string;
      decisionTaskCompletedEventId?: number;
    }

    export interface StartChildWorkflowExecutionFailedEventAttributes {
      workflowType?: WorkflowType;
      cause?: string;
      workflowId?: string;
      initiatedEventId?: number;
      decisionTaskCompletedEventId?: number;
      control?: string;
    }

    export interface ActivityTask {
      taskToken?: string;
      activityId?: string;
      startedEventId?: number;
      workflowExecution?: WorkflowExecution;
      activityType?: ActivityType;
      input?: string;
    }

    export interface PollForActivityTaskResult {
      activityTask?: ActivityTask;
    }

    export interface PollForDecisionTaskResult {
      decisionTask?: DecisionTask;
    }

    export interface StartWorkflowExecutionResult {
      run?: Run;
    }

    export interface Run {
      runId?: string;
    }

  }

  export module Sns {

    export interface Client {
      config: ClientConfig;

      publish(params: PublishRequest, callback: (err: any, data: PublishResult) => void): void;
      createTopic(params: CreateTopicRequest, callback: (err: any, data: CreateTopicResult) => void): void;
      deleteTopic(params: DeleteTopicRequest, callback: (err: any, data: any) => void): void;
    }

    export interface PublishRequest {
      TopicArn?: string;
      TargetArn?: string;
      MessageAttributes?: { [name: string]: MessageAttribute; };
      Message?: string;
      MessageStructure?: string;
      Subject?: string;
    }

    export interface MessageAttribute {
      DataType: string;
      StringValue?: string;
      BinaryValue: any; // (Buffer, Typed Array, Blob, String)
    }

    export interface PublishResult {
      MessageId?: string;
    }

    export interface CreateTopicRequest {
      Name?: string;
    }

    export interface CreateTopicResult {
      TopicArn?: string;
    }

    export interface DeleteTopicRequest {
      TopicArn?: string;
    }

  }

  export module s3 {
    interface Owner {
        DisplayName: string;
        ID: string;
    }

    interface ObjectKeyPrefix {
        Prefix: string;
    }

    export interface ListObjectContent {
        Key: string;
        LastModified: Date;
        ETag: string;
        Size: number;
        StorageClass: "STANDARD" | "REDUCED_REDUNDANCY" | "GLACIER";
        Owner?: Owner
    }

    // This private interface contains the common parts between v1 and v2 of the API Request and is exposed via V1 and V2 subclasses
    interface ListObjectRequestBase {
        Bucket: string;
        Delimiter?: string;
        EncodingType?: 'url';
        MaxKeys?: number;
        Prefix?: string;
    }

    // This private interface contains the common parts between v1 and v2 of the API Response and is exposed via V1 and V2 subclasses
    interface ListObjectResponseBase {
        IsTruncated: boolean;
        Contents: ListObjectContent[];
        Name: string;
        Prefix?: string;
        Delimiter?: string;
        MaxKeys: number;
        CommonPrefixes?: ObjectKeyPrefix[];
        EncodingType?: "url";
    }

    export interface PutObjectRequest {
      ACL?: string;
      Body?: any;
      Bucket: string;
      CacheControl?: string;
      ContentDisposition?: string;
      ContentEncoding?: string;
      ContentLanguage?: string;
      ContentLength?: string;
      ContentMD5?: string;
      ContentType?: string;
      Expires?: any;
      GrantFullControl?: string;
      GrantRead?: string;
      GrantReadACP?: string;
      GrantWriteACP?: string;
      Key: string;
      Metadata?: { [key: string]: string; };
      ServerSideEncryption?: string;
      StorageClass?: string;
      WebsiteRedirectLocation?: string;
    }

    export interface CopyObjectRequest {
      Bucket: string;
      CopySource: string;
      Key: string;
      ACL?: string;
      CacheControl?: string;
      ContentDisposition?: string;
      ContentEncoding?: string;
      ContentLanguage?: string;
      ContentType?: string;
      CopySourceIfMatch?: string;
      CopySourceIfModifiedSince?: any;
      CopySourceIfNoneMatch?: string;
      CopySourceIfUnmodifiedSince?: any;
      CopySourceSSECustomerAlgorithm?: string;
      CopySourceSSECustomerKey?: any;
      CopySourceSSECustomerKeyMD5?: string;
      Expires?: any;
      GrantFullControl?: string;
      GrantRead?: string;
      GrantReadACP?: string;
      GrantWriteACP?: string;
      Metadata?: { [key: string]: string; };
      MetadataDirective?: string;
      RequestPayer?: string;
      SSECustomerAlgorithm?: string;
      SSECustomerKey?: any;
      SSECustomerKeyMD5?: string;
      SSEKMSKeyId?: string;
      ServerSideEncryption?: string;
      StorageClass?: string;
      WebsiteRedirectLocation?: string;
    }

    export interface GetObjectRequest {
      Bucket: string;
      IfMatch?: string;
      IfModifiedSince?: any;
      IfNoneMatch?: string;
      IfUnmodifiedSince?: any;
      Key: string;
      Range?: string;
      ResponseCacheControl?: string;
      ResponseContentDisposition?: string;
      ResponseContentEncoding?: string;
      ResponseContentLanguage?: string;
      ResponseContentType?: string;
      ResponseExpires?: any;
      VersionId?: string;
    }

    export interface DeleteObjectRequest {
      Bucket: string;
      Key: string;
      MFA?: string;
      RequestPayer?: string;
      VersionId?: string;
    }

    export interface HeadObjectRequest {
      Bucket: string;
      Key: string;
      IfMatch?: string;
      IfModifiedSince?: Date;
      IfNoneMatch?: string;
      IfUnmodifiedSince?: Date;
      Range?: string;
      RequestPayer?: string;
      SSECustomerAlgorithm?: string;
      SSECustomerKey?: Buffer | string;
      SSECustomerKeyMD5?: string;
      VersionId?: string;
    }

    export interface UploadOptions {
      partSize?: number;
      queueSize?: number;
    }

    export interface ListObjectRequest extends ListObjectRequestBase {
        Marker?: string;
    }

    export interface ListObjectV2Request extends ListObjectRequestBase {
        ContinuationToken?: string;
        FetchOwner?: boolean;
        StartAfter?: string;
    }

    export interface ListObjectResponse extends ListObjectResponseBase {
        Marker?: string;
        NextMarker?: string;
    }

    export interface ListObjectV2Response extends ListObjectResponseBase {
        KeyCount: number;
        ContinuationToken?: string;
        NextContinuationToken?: string;
        StartAfter?: string;
    }
  }

  export module ecs {
    export interface CreateServicesParams {
      desiredCount: number;
      serviceName: string;
      taskDefinition: string;
      clientToken?: string;
      cluster?: string;
      deploymentConfiguration?: {
        maximumPercent?: number;
        minimumHealthyPercent?: number;
      };
      loadBalancers?: {
        containerName?: string;
        containerPort?: number;
        loadBalancerName?: string;
      }[];
      role?: string;
    }

    export interface DescribeServicesParams {
			/**
			 * A list of services to describe.
			 */
      services: string[];
			/**
			 * The name of the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed.
			 */
      cluster?: string;
    }

    export interface DescribeClustersParams {
			/**
			 * A space-separated list of cluster names or full cluster Amazon Resource Name (ARN) entries. If you do not specify a cluster, the default cluster is assumed.
			 */
      clusters?: string[];
    }

    export interface DescribeTasksParams {
			/**
			 * A space-separated list of task IDs or full Amazon Resource Name (ARN) entries.
			 */
      tasks: string[];
			/**
			 * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task to describe. If you do not specify a cluster, the default cluster is assumed.
			 */
      cluster?: string;
    }

    export interface DescribeTaskDefinitionParams {
			/**
			 * The `family` for the latest `ACTIVE` revision, `family` and `revision` (`family:revision`) for a specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to describe.
			 */
      taskDefinition: string;
    }

    export interface RegisterTaskDefinitionParams {
      containerDefinitions: {
        command?: string[],
        cpu?: number,
        disableNetworking?: boolean,
        dnsSearchDomains?: string[],
        dnsServers?: string[],
        dockerLabels?: any,
        dockerSecurityOptions?: string[],
        entryPoint?: string[],
        environment?: any[],
        essential?: boolean,
        extraHosts?: {
          hostName: string,
          ipAddress: string
        }[];
        hostname?: string,
        image?: string,
        links?: string[],
        logConfiguration?: {
          logDriver: string,
          options: any
        }[],
        memory?: number,
        mountPoints?: {
          containerPath: string,
          readOnly: boolean,
          sourceVolume: string
        }[];
        name?: string,
        portMappings?: {
          containerPort?: number,
          hostPort?: number,
          protocol: string
        }[];
        privileged?: boolean,
        readonlyRootFilesystem?: boolean,
        ulimits?: {
          hardLimit: number,
          name: string,
          softLimit: number
        }[];
        user?: string,
        volumesFrom?: {
          readOnly?: boolean,
          sourceContainer?: string
        }[],
        workingDirectory?: string
      }[];
      family: string;
      volumes?: {
        host: {
          sourcePath: string
        },
        name: string
      }[];
    }

    export interface UpdateServiceParams {
      service: string;
      cluster?: string;
      deploymentConfiguration?: {
        maximumPercent: number;
        minimumHealthyPercent: number;
      };
      desiredCount?: number;
      taskDefinition: string;
    }
  }

  export module sts {
    export interface AssumeRoleParams {
      RoleArn: string;
      RoleSessionName: string;
      DurationSeconds?: number;
      ExternalId?: string;
      Policy?: string;
      SerialNumber?: string;
      TokenCode?: string;
    }

    export interface AssumeRoleCallbackData {
      Credentials: TemporaryCredentials;
      AssumedRoleUser: AssumedRoleUser;
      PackedPolicySize: number;
    }

    export interface TemporaryCredentials {
      AccessKeyId: string;
      SecretAccessKey: string;
      SessionToken: string;
      Expiration: Date;
    }

    export interface AssumedRoleUser {
      AssumedRoleId: string;
      Arn: string;
    }

    export interface AssumeRoleWithSAMLParams {
      PrincipalArn: string;
      RoleArn: string;
      SAMLAssertion: string;
      DurationSeconds?: number;
      Policy?: string;
    }

    export interface AssumeRoleWithWebIdentityParams {
      RoleArn: string;
      RoleSessionName: string;
      WebIdentityToken: string;
      DurationSeconds?: number;
      Policy?: string;
      ProviderId?: string;
    }

    export interface CredentialsFromParams {
			/**
			 * Data retrieved from a call to AWS.STS.getFederatedToken, getSessionToken(), assumeRole(), or assumeRoleWithWebIdentity().
			 */
      Data: any;
			/**
			 * An optional credentials object to fill instead of creating a new object. Useful when modifying an existing credentials object from a refresh call.
			 */
      Credentials?: Credentials
    }

    export interface DecodeAuthorizationMessageParams {
      EncodedMessage: string;
    }

    export interface GetFederationTokenParams {
      Name: string;
      DurationSeconds?: number,
      Policy?: string
    }

    export interface GetSessionTokenParams {
      DurationSeconds: number,
      SerialNumber: string;
      TokenCode: string;
    }
  }
}
