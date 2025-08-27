import StepFunctions = require("serverless-step-functions");

const stepFunctions: StepFunctions = {
    stateMachines: {
        hellostepfunc1: {
            events: [
                {
                    http: {
                        path: "gofunction",
                        method: "GET",
                    },
                },
                {
                    schedule: {
                        rate: "rate(10 minutes)",
                        enabled: true,
                        input: {
                            key1: "value1",
                            key2: "value2",
                            stageParams: {
                                stage: "dev",
                            },
                        },
                    },
                },
            ],
            name: "myStateMachine",
            definition: {
                Comment: "A Hello World example of the Amazon States Language using an AWS Lambda Function",
                StartAt: "HelloWorld1",
                States: {
                    HelloWorld1: {
                        Type: "Task",
                        Resource: {
                            "Fn::GetAtt": ["hello", "Arn"],
                        },
                        End: true,
                    },
                },
            },
            dependsOn: ["CustomIamRole"],
            tags: {
                Team: "Atlantis",
            },
        },
        hellostepfunc2: {
            definition: {
                StartAt: "HelloWorld2",
                States: {
                    HelloWorld2: {
                        Type: "Task",
                        Resource: {
                            "Fn::GetAtt": ["hello", "Arn"],
                        },
                        End: true,
                    },
                },
            },
        },
        ddbtablestepfunc: {
            definition: {
                Comment:
                    "Demonstrates how to reference a DynamoDB Table Name exported from an external CloudFormation Stack",
                StartAt: "ImportDDBTableName",
                States: {
                    ImportDDBTableName: {
                        Type: "Task",
                        Resource: "arn:aws:states:::dynamodb:updateItem",
                        Parameters: {
                            TableName: {
                                "Fn::ImportValue": "MyExternalStack:ToDoTable:Name",
                            },
                            Key: {
                                id: {
                                    "S.$": "$.todoId",
                                },
                            },
                            UpdateExpression: "SET #status = :updatedStatus",
                            ExpressionAttributeNames: {
                                "#status": "status",
                            },
                            ExpressionAttributeValues: {
                                ":updatedStatus": {
                                    S: "DONE",
                                },
                            },
                        },
                        End: true,
                    },
                },
            },
            dependsOn: ["DynamoDBTable", "KinesisStream", "CustomIamRole"],
            tags: {
                Team: "Atlantis",
            },
        },
        accountApplicationService: {
            name: "AccountApplicationService",
            definition: {
                Comment: "This is a state machine for account application service",
                StartAt: "Verification",
                States: {
                    Verification: {
                        Type: "Parallel",
                        QueryLanguage: "JSONata",
                        Branches: [
                            {
                                StartAt: "Check Identity",
                                States: {
                                    "Check Identity": {
                                        Type: "Pass",
                                        QueryLanguage: "JSONata",
                                        End: true,
                                        Output: {
                                            isIdentityValid:
                                                "{% $match($states.input.data.identity.email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/) and $match($states.input.data.identity.ssn, /^(\\d{3}-?\\d{2}-?\\d{4}|XXX-XX-XXXX)$/) %}",
                                        },
                                    },
                                },
                            },
                            {
                                StartAt: "Check Address",
                                States: {
                                    "Check Address": {
                                        Type: "Pass",
                                        QueryLanguage: "JSONata",
                                        End: true,
                                        Output: {
                                            isAddressValid:
                                                "{% $not(null in $each($states.input.data.address, function($v) { $length($trim($v)) > 0 ? $v : null })) %}",
                                        },
                                    },
                                },
                            },
                        ],
                        Assign: {
                            inputPayload: "{% $states.context.Execution.Input %}",
                            isCustomerValid: "{% $states.result.isIdentityValid and $states.result.isAddressValid %}",
                        },
                        Next: "Approve or Deny?",
                    },
                    "Approve or Deny?": {
                        Type: "Choice",
                        QueryLanguage: "JSONata",
                        Choices: [
                            {
                                Next: "Add Account",
                                Condition: "{% $isCustomerValid %}",
                            },
                        ],
                        Default: "Deny Message",
                    },
                    "Add Account": {
                        Type: "Task",
                        QueryLanguage: "JSONata",
                        Resource: "arn:aws:states:::dynamodb:putItem",
                        Arguments: {
                            TableName: "${AccountsTable}",
                            Item: {
                                PK: {
                                    S: "{% $uuid() %}",
                                },
                                email: {
                                    S: "{% $inputPayload.data.identity.email %}",
                                },
                                name: {
                                    S: "{% $inputPayload.data.firstname & ' ' & $inputPayload.data.lastname  %}",
                                },
                                address: {
                                    S: "{% $join($each($inputPayload.data.address, function($v) { $v }), ', ') %}",
                                },
                                timestamp: {
                                    S: "{% $now() %}",
                                },
                            },
                        },
                        Next: "Home Insurance Interests",
                    },
                    "Home Insurance Interests": {
                        Type: "Task",
                        QueryLanguage: "JSONata",
                        Resource: "arn:aws:states:::sqs:sendMessage",
                        Arguments: {
                            QueueUrl: "${HomeInsuranceInterestQueueArn}",
                            MessageBody:
                                "{% ($e := $inputPayload.data.identity.email; $n := $inputPayload.data.firstname & ' ' & $inputPayload.data.lastname; $inputPayload.data.interests[category = 'home']{'customer': $n, 'email': $e, 'totalAssetValue': $sum(estimatedValue), category: {type: yearBuilt}}) %}",
                        },
                        Next: "Approved Message",
                    },
                    "Approved Message": {
                        Type: "Task",
                        Resource: "arn:aws:states:::sns:publish",
                        Parameters: {
                            TopicArn: "${SendCustomerNotificationSNSTopicArn}",
                            "Message.$":
                                "States.Format('Hello {}, your application has been approved.', $inputPayload.data.firstname)",
                        },
                        End: true,
                    },
                    "Deny Message": {
                        Type: "Task",
                        Resource: "arn:aws:states:::sns:publish",
                        Parameters: {
                            TopicArn: "${SendCustomerNotificationSNSTopicArn}",
                            "Message.$":
                                "States.Format('Hello {}, your application has been denied because validation of provided data failed', $inputPayload.data.firstname)",
                        },
                        End: true,
                    },
                },
            },
        },
    },
    validate: true,
    noOutput: false,
};
