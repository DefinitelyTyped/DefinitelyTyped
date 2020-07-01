declare var setTimeout: any;
import { Client, Task, Wait } from "zenaton";

Client.init("APP_ID", "API_TOKEN", "APP_ENV");

export default Task("TestTask", async () => {
  await new Wait().seconds(30).execute();
  await new Promise(resolve => setTimeout(resolve, 3000));

  return "Hello world!";
});
