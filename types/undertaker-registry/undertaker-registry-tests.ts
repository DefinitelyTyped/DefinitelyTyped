import * as UndertakerRegistry from "undertaker-registry";

const ArgTask = (firstArg: string, secondArg: number) => {
    // Task
};

const NoArgTask = () => {
    // Task without arguments
};

const registryInstance = new UndertakerRegistry();

const setTask = registryInstance.set("task", ArgTask);
setTask("string", 123);

const getTask = registryInstance.get<typeof ArgTask>("taskName");
getTask("string", 123);

const tasks = registryInstance.tasks();
const taskFromTasks = tasks["task"] as typeof ArgTask;
taskFromTasks("string", 123);

class MyRegistry extends UndertakerRegistry { }

registryInstance.init(MyRegistry);

const myRegistryInstance = new MyRegistry();

const setTask2 = registryInstance.set("task", NoArgTask);
setTask2();

const getTask2 = registryInstance.get<typeof NoArgTask>("taskName");
getTask2();

const tasks2 = registryInstance.tasks();
const taskFromTasks2 = tasks["task"] as typeof NoArgTask;
taskFromTasks2();
