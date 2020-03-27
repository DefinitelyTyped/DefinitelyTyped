import { Client, HandlerArgs, Task, TaskService, TopicSubscription, Variables } from 'camunda-external-task-client-js';

new Client({ baseUrl: '' }); // $ExpectType Client
new Variables(); // $ExpectType Variables
new Variables().set('a', 42).getAllTyped(); // $ExpectType TypedValue[]

const client: Client = new Client({ baseUrl: '' }); // $ExpectType Client
client.on('subscribe', (topic: string, topicSubscription: TopicSubscription) => {});
client.on('unsubscribe', (topic: string, topicSubscription: TopicSubscription) => {});

client.on('poll:start', () => {});
client.on('poll:stop', () => {});

client.on('poll:success', (tasks: Task[]) => {});

client.on('complete:success', (task: Task) => {});
client.on('handleFailure:success', (task: Task) => {});
client.on('handleBpmnError:success', (task: Task) => {});
client.on('extendLock:success', (task: Task) => {});
client.on('unlock:success', (task: Task) => {});

client.on('handleFailure:error', (task: Task, error: any) => {});
client.on('handleBpmnError:error', (task: Task, error: any) => {});
client.on('extendLock:error', (task: Task, error: any) => {});
client.on('unlock:error', (task: Task, error: any) => {});

client.on('complete:error', (error: any) => {});
client.on('poll:error', (error: any) => {});

client.start();
client.stop();
client.subscribe('', {}, (args: HandlerArgs) => {
    const task: Task = args.task;
    const taskService: TaskService = args.taskService;
    task.businessKey;
    task.processInstanceId;
    task.id;
    task.executionId;
    task.activityId;
    task.activityInstanceId;
    task.tenantId;
    task.topicName;
    task.workerId;

    taskService.handleFailure(task, {});
    taskService.complete(task);
});
