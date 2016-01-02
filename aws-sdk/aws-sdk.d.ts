// Type definitions for aws-sdk
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: midknight41 <https://github.com/midknight41>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/aws-sdk.d.ts

/// <reference path="../node/node.d.ts" />

declare module "aws-sdk" {

	export var config: ClientConfig;

	export function Config(json: any): void;

	export class Credentials {
		constructor(accessKeyId: string, secretAccessKey: string, sessionToken?: string);
		accessKeyId: string;
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
		constructor(endpoint:string);
		
		host:string;
		hostname:string;
		href:string;
		port:number;
		protocol:string;
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
		getCredentials?: (callback: (err?: any) => void) => void ;
		loadFromPath?: (path: string) => void;
		credentials: Credentials;
		region: string;
	}

	export class SQS {
		constructor(options?: any);
		endpoint:Endpoint;
		
		addPermission(params: SQS.AddPermissionParams, callback: (err:Error, data:any) => void): void;
		changeMessageVisibility(params: SQS.ChangeMessageVisibilityParams, callback: (err:Error, data:any) => void): void;
		changeMessageVisibilityBatch(params: SQS.ChangeMessageVisibilityBatchParams, callback: (err:Error, data:SQS.ChangeMessageVisibilityBatchResponse) => void): void;
		createQueue(params: SQS.CreateQueueParams, callback: (err: Error, data: SQS.CreateQueueResult) => void): void;
		deleteMessage(params: SQS.DeleteMessageParams, callback: (err: Error, data: any) => void): void;
		deleteMessageBatch(params: SQS.DeleteMessageBatchParams, callback: (err: Error, data: SQS.DeleteMessageBatchResult) => void): void;
		deleteQueue(params: { QueueUrl: string; }, callback: (err: Error, data: any) => void): void;
		getQueueAttributes(params: SQS.GetQueueAttributesParams, callback: (err: Error, data: SQS.GetQueueAttributesResult) => void): void;
		getQueueUrl(params: SQS.GetQueueUrlParams, callback: (err: Error, data: { QueueUrl: string; }) => void): void;
		listDeadLetterSourceQueues(params: {QueueUrl:string}, callback: (err: Error, data: {queueUrls: string[]}) => void): void;
		listQueues(params: {QueueNamePrefix?:string}, callback: (err: Error, data: {QueueUrls: string[]}) => void): void;
		purgeQueue(params: {QueueUrl: string}, callback: (err: Error, data: any) => void): void;
		receiveMessage(params: SQS.ReceiveMessageParams, callback: (err: Error, data: SQS.ReceiveMessageResult) => void): void;
		removePermission(params: {QueueUrl: string, Label: string}, callback: (err: Error, data: any) => void): void;
		sendMessage(params: SQS.SendMessageParams, callback: (err: Error, data: SQS.SendMessageResult) => void): void;
		sendMessageBatch(params: SQS.SendMessageBatchParams, callback: (err: Error, data: SQS.SendMessageBatchResult) => void): void;
		setQueueAttributes(params: SQS.SetQueueAttributesParams, callback: (err: Error, data: any) => void): void;			
	}

	export class SES {
		constructor(options?: any);
		public client: Ses.Client;
	}

	export class SNS {
		constructor(options?: any);
		public client: Sns.Client;
	}

	export class SimpleWorkflow {
		constructor(options?: any);
		public client: Swf.Client;
	}

	export class S3 {
		constructor(options?: any);
		public client: s3.Client;
	}

	export class DynamoDB {
		constructor(options?: any);
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
			apiVersions?: { [serviceName:string]: string};
			logger?: Logger;
			systemClockOffset?: number;
			signatureVersion?: string;
			signatureCache?: boolean;
		}
		
		export interface AddPermissionParams {
			QueueUrl: string;
			Label: string;
			AWSAccountIds:string[];
			Actions:string[];
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
			Successful: { Id:string }[];
			Failed: BatchResultErrorEntry[];
		}

		export interface SendMessageParams {
			QueueUrl: string;
			MessageBody: string;
			DelaySeconds?: number;
			MessageAttributes?: { [name:string]: MessageAttribute; }
		}

		export interface ReceiveMessageParams {
			QueueUrl: string;
			MaxNumberOfMessages?: number;
			VisibilityTimeout?: number;
			AttributeNames?: string[];
			MessageAttributeNames?: string[];
			WaitTimeSeconds?:number;
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
			MessageAttributes?: { [name:string]: MessageAttribute; }
		}

		export interface CreateQueueParams {
			QueueName: string;
			Attributes: QueueAttributes;
		}
		
		export interface QueueAttributes {
			[name:string]: any;
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
			Attributes: {[name:string]: string};
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
			Attributes: { [name:string]:any };
			MD5OfMessageAttributes:string;
			MessageAttributes: { [name:string]: MessageAttribute; }
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
			MD5OfMessageAttributes:string;
		}

		export interface CreateQueueResult {
			QueueUrl: string;
		}
		
		export interface SetQueueAttributesParams {
			QueueUrl: string;
			Attributes: QueueAttributes;
		}

	}

	export module Ses {

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

		export class Client {
			//constructor(options?: any);
			public config: ClientConfig;

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

			publicTopic(params: PublishRequest, callback: (err: any, data: PublishResult) => void): void;
			createTopic(params: CreateTopicRequest, callback: (err: any, data: CreateTopicResult) => void): void;
			deleteTopic(params: DeleteTopicRequest, callback: (err: any, data: any) => void): void;
		}

		export interface PublishRequest {
			TopicArn?: string;
			Message?: string;
			MessageStructure?: string;
			Subject?: string;
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

		export interface Client {
			config: ClientConfig;

			putObject(params: PutObjectRequest, callback: (err: any, data: any) => void): void;
			getObject(params: GetObjectRequest, callback: (err: any, data: any) => void): void;
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
			Metadata?: string[];
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

	}
}
