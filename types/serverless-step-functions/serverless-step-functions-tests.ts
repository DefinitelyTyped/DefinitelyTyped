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
    },
    validate: true,
    noOutput: false,
};
