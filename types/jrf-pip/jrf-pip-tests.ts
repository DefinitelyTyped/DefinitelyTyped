import parallelProcessing = require("jrf-pip");

interface ParallelProcessingParams<T> {
    arrayValues: T[];

    processingFn(params: ProcessingFnParams<T>): void | Promise<void>;

    nextValueFn?(params: NextValueFnParams<T>): boolean | Promise<boolean>;

    cycleTimeout?: number | undefined;
    parallel?: number | undefined;
    awaitRes?: boolean | undefined;

    cb?(stackError: StackError<T>): void | Promise<void>;
}

interface ProcessingFnParams<T> {
    value: T;
    index: number;
    arrayValues: T[];
    iteration: number;
}

interface NextValueFnParams<T> {
    value: T;
    index: number;
    arrayValues: T[];
    iteration: number;
}

interface StackError<T> {
    value: T;
    index: number;
    iteration: number;
    error: any;
}

interface User {
    id: number;
    sex: string;

    sendMes(iteration: number): void;
}

// Send a message to group users
async function sendMesToGroupUsers(): Promise<void> {
    // Generate groups of 10,000 users.
    // 5000 female
    // 5000 males
    const groupUsers: User[] = generateUsers();

    // Filter Function
    // Skip Male Users
    // i.e. send message only to female
    const nextValueFn = (params: NextValueFnParams<User>) => {
        return params.value.sex === "male";
    };

    // Processing Function
    // Send a message
    const processingFn = (params: ProcessingFnParams<User>) => {
        const user = params.value;
        user.sendMes(params.iteration);
    };

    // Callback function. It will work after the completion of sending the message.
    const cb = (stackError: StackError<User>): void => {
    };

    // Starting parallel iterative processing
    // An array of arrayValues is specified for processing
    // filter function nextValueFn specified
    // the processing function of the processingFn array element is specified
    // a callback function is set that will be executed when parallel processing is completed
    // set the number of 1000 parallel processed array values through Promise.all()
    const params: ParallelProcessingParams<User> = {
        arrayValues: groupUsers,
        nextValueFn,
        processingFn,
        cb,
        parallel: 1000,
    };
    await parallelProcessing(params);
}

// Send a message to the users of the group in a synchronous style
async function sendMesToGroupUsersSyncStyle(): Promise<void> {
    // Generate groups of 10,000 users.
    // 5000 female
    // 5000 males
    const groupUsers: User[] = generateUsers();

    // Filter Function
    // Skip Male Users
    // i.e. send message only to female
    const nextValueFn = (params: NextValueFnParams<User>) => {
        return params.value.sex === "male";
    };

    // Processing Function
    // Send a message
    const processingFn = (params: ProcessingFnParams<User>) => {
        const user = params.value;
        user.sendMes(params.iteration);
    };

    // Starting parallel iterative processing
    // An array of arrayValues is specified for processing
    // filter function nextValueFn specified
    // the processing function of the processingFn array element is specified
    // the awaitRes response wait parameter is specified i.e. synchronous execution
    // set the number of 2000 parallel values of the array through Promise.all()
    // time of cycleTimeout of an asynchronous pause between iterations is set
    const params: ParallelProcessingParams<User> = {
        arrayValues: groupUsers,
        nextValueFn,
        processingFn,
        awaitRes: true,
        parallel: 2000,
        cycleTimeout: 100,
    };
    const stackError: Array<StackError<User>> | undefined = await parallelProcessing(params);
}

function generateUsers(count: number = 10000): User[] {
    const groupUsers: User[] = [];

    const even = (n: number): boolean => !(n % 2);
    for (let i = 1; i <= count; i++) {
        const sex: string = even(i) ? "male" : "female";
        groupUsers.push({
            id: i,
            sex,
            sendMes(iteration: number): void {
            },
        });
    }

    return groupUsers;
}

Promise.resolve()
    .then(sendMesToGroupUsers)
    .then(sendMesToGroupUsersSyncStyle)
    .catch(e => {
    });
