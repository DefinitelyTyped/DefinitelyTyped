import Tasks, { Queue } from "@google-cloud/tasks";

// $ExpectType Tasks
const client = new Tasks({});

// $ExpectError
const failedClient = new Tasks({ unrecognized: "" });

const formattedParent = client.locationPath("[PROJECT]", "[LOCATION]");
const queue: Partial<Queue> = {};
const request = {
  parent: formattedParent,
  queue
};
client
  .createQueue(request)
  .then(([queue]) => {
    // $ExpectType Queue
    const q = queue;
  })
  .catch(err => {
    console.error(err);
  });
