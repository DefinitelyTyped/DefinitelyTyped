
import AWS = require('aws-sdk');

var str: string;

var creds: AWS.Credentials;

creds = new AWS.Credentials(str, str);
creds = new AWS.Credentials(str, str, str);
str = creds.accessKeyId;


/*
 * ECS 
 */
var ecs:AWS.ECS

ecs = new AWS.ECS();
ecs = new AWS.ECS({apiVersion: '2012-11-05'});

ecs.describeClusters({
		clusters: ['STRING_VALUE', 'STRING_VALUE']
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

ecs.describeTasks({
		cluster: 'STRING_VALUE',
		tasks: ['STRING_VALUE', 'STRING_VALUE']
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});


/*
 * SQS 
 */
var sqs:AWS.SQS

//Default constructor
sqs = new AWS.SQS();

//Locking the API Version
sqs = new AWS.SQS({apiVersion: '2012-11-05'});

// Locking the API Version Globally
AWS.config.apiVersions = {
  sqs: '2012-11-05',
  // other service API versions
};

sqs.addPermission({
	AWSAccountIds: [ /* required */
		'STRING_VALUE',
		/* more items */
	],
	Actions: [ /* required */
		'STRING_VALUE',
		/* more items */
	],
	Label: 'STRING_VALUE', /* required */
	QueueUrl: 'STRING_VALUE' /* required */
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});
	
sqs.changeMessageVisibility({
		QueueUrl: 'STRING_VALUE', /* required */
		ReceiptHandle: 'STRING_VALUE', /* required */
		VisibilityTimeout: 0 /* required */
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});
	
sqs.changeMessageVisibilityBatch({
		Entries: [ /* required */
			{
				Id: 'STRING_VALUE', /* required */
				ReceiptHandle: 'STRING_VALUE', /* required */
				VisibilityTimeout: 0
			},
			/* more items */
		],
		QueueUrl: 'STRING_VALUE' /* required */
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});
	
sqs.createQueue({
		QueueName: 'STRING_VALUE', /* required */
		Attributes: {
			someKey: 'STRING_VALUE',
			/* anotherKey: ... */
		}
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.deleteMessage({
		QueueUrl: 'STRING_VALUE', /* required */
		ReceiptHandle: 'STRING_VALUE' /* required */
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});
	
sqs.deleteMessageBatch({
		Entries: [ /* required */
			{
			Id: 'STRING_VALUE', /* required */
			ReceiptHandle: 'STRING_VALUE' /* required */
			},
			/* more items */
		],
		QueueUrl: 'STRING_VALUE' /* required */
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});
	
sqs.deleteQueue({
		QueueUrl: 'STRING_VALUE' /* required */
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});
	
sqs.getQueueAttributes({
		QueueUrl: 'STRING_VALUE', /* required */
		AttributeNames: [
			'Policy | VisibilityTimeout | MaximumMessageSize | MessageRetentionPeriod | ApproximateNumberOfMessages | ApproximateNumberOfMessagesNotVisible | CreatedTimestamp | LastModifiedTimestamp | QueueArn | ApproximateNumberOfMessagesDelayed | DelaySeconds | ReceiveMessageWaitTimeSeconds | RedrivePolicy',
			/* more items */
		]
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});
	
sqs.getQueueUrl({
		QueueName: 'STRING_VALUE', /* required */
		QueueOwnerAWSAccountId: 'STRING_VALUE'
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});
	
sqs.listDeadLetterSourceQueues({
		QueueUrl: 'STRING_VALUE' /* required */
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});
	
sqs.listQueues({
		QueueNamePrefix: 'STRING_VALUE'
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else     console.log(data);           // successful response
	});

sqs.purgeQueue({
		QueueUrl: 'STRING_VALUE' /* required */
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});
	
sqs.receiveMessage({
		QueueUrl: 'STRING_VALUE', /* required */
		AttributeNames: [
			'Policy | VisibilityTimeout | MaximumMessageSize | MessageRetentionPeriod | ApproximateNumberOfMessages | ApproximateNumberOfMessagesNotVisible | CreatedTimestamp | LastModifiedTimestamp | QueueArn | ApproximateNumberOfMessagesDelayed | DelaySeconds | ReceiveMessageWaitTimeSeconds | RedrivePolicy',
			/* more items */
		],
		MaxNumberOfMessages: 0,
		MessageAttributeNames: [
			'STRING_VALUE',
			/* more items */
		],
		VisibilityTimeout: 0,
		WaitTimeSeconds: 0
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});
	
sqs.removePermission({
		Label: 'STRING_VALUE', /* required */
		QueueUrl: 'STRING_VALUE' /* required */
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});
	
sqs.sendMessage({
		MessageBody: 'STRING_VALUE', /* required */
		QueueUrl: 'STRING_VALUE', /* required */
		DelaySeconds: 0,
		MessageAttributes: {
			someKey: {
				DataType: 'STRING_VALUE', /* required */
				BinaryListValues: [
					new Buffer('...') || 'STRING_VALUE',
					/* more items */
				],
				BinaryValue: new Buffer('...') || 'STRING_VALUE',
				StringListValues: [
					'STRING_VALUE',
					/* more items */
				],
				StringValue: 'STRING_VALUE'
			},
			/* anotherKey: ... */
		}
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

sqs.sendMessageBatch({
		Entries: [ /* required */
			{
				Id: 'STRING_VALUE', /* required */
				MessageBody: 'STRING_VALUE', /* required */
				DelaySeconds: 0,
				MessageAttributes: {
					someKey: {
						DataType: 'STRING_VALUE', /* required */
						BinaryListValues: [
							new Buffer('...') ,
							/* more items */
						],
						BinaryValue: new Buffer('...'),
						StringListValues: [
							'STRING_VALUE',
							/* more items */
						],
						StringValue: 'STRING_VALUE'
					},
					/* anotherKey: ... */
				}
			},
			/* more items */
		],
		QueueUrl: 'STRING_VALUE' /* required */
	}, 
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});
	
sqs.setQueueAttributes({
		Attributes: { /* required */
			someKey: 'STRING_VALUE',
			/* anotherKey: ... */
		},
		QueueUrl: 'STRING_VALUE' /* required */
	}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});
	
	var dynamoDBDocClient:AWS.DynamoDB.DocumentClient;
dynamoDBDocClient = new AWS.DynamoDB.DocumentClient();
dynamoDBDocClient = new AWS.DynamoDB.DocumentClient({});
dynamoDBDocClient.createSet([1, 2, 3], { validate: true });
dynamoDBDocClient.get(
	{
		TableName: 'TABLE_NAME',
		Key: { userId: 'abc123', email: 'abc123@abc123.com' }
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	}
);
dynamoDBDocClient.put(
	{
		TableName: 'TABLE_NAME',
		Item: {
			userId: 'abc123',
			email: 'abc123@abc123.com',
			firstName: 'Matt',
			lastName: 'Forrester the ' + new Date().getTime()
		}
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	}
);
dynamoDBDocClient.delete(
	{
		TableName: 'TABLE_NAME',
		Key: {
			userId: 'abc123',
			email: 'abc123@abc123.com'
		}
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	}
);
dynamoDBDocClient.update(
	{
		TableName: 'TABLE_NAME',
		Key: {
			userId: 'abc123',
			email: 'abc123@abc123.com'
		},
		AttributeUpdates: {
			thingsWithWheels: {
				Action: 'PUT',
				Value: dynamoDBDocClient.createSet(
					[
						'SkateBoard',
						'Skates',
						'Mountain Bike',
						'Evolve Electric Skateboard'
					],
					{ validate: true }
				)
			},
			age: {
				Action: 'PUT',
				Value: 35
			}
		}
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	}
);
dynamoDBDocClient.scan(
	{
		TableName: 'TABLE_NAME',
		KeyConditions: {
			age: {
				ComparisonOperator: 'EQ',
				AttributeValueList: [35]
			}
		}
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	}
);
dynamoDBDocClient.query(
	{
		TableName: 'TABLE_NAME',
		KeyConditions: {
			userId: {
				ComparisonOperator: 'EQ',
				AttributeValueList: ['abc123']
			}
		}
	},
	function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	}
);

var kinesis = new AWS.Kinesis();

var putRecordParam = {
  Data: new Buffer('...') || 'STRING_VALUE', /* required */
  PartitionKey: 'STRING_VALUE', /* required */
  StreamName: 'STRING_VALUE', /* required */
  ExplicitHashKey: 'STRING_VALUE',
  SequenceNumberForOrdering: 'STRING_VALUE'
};
kinesis.putRecord(putRecordParam, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var putRecordParams = {
  Records: [ /* required */
    {
      Data: new Buffer('...') || 'STRING_VALUE', /* required */
      PartitionKey: 'STRING_VALUE', /* required */
      ExplicitHashKey: 'STRING_VALUE'
    },
    /* more items */
  ],
  StreamName: 'STRING_VALUE' /* required */
};
kinesis.putRecords(putRecordParams, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var increaseStreamRetentionPeriodParams = {
  RetentionPeriodHours: 0, /* required */
  StreamName: 'STRING_VALUE' /* required */
};
kinesis.increaseStreamRetentionPeriod(increaseStreamRetentionPeriodParams, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});