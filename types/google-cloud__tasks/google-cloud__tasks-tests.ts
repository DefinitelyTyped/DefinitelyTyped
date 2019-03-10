import Tasks, { Queue } from "@google-cloud/tasks";

const client = new Tasks({});

const formattedParent = client.locationPath("[PROJECT]", "[LOCATION]");
const queue: Partial<Queue> = {};
const request = {
  parent: formattedParent,
  queue
};
client
  .createQueue(request)
  .then(([queue]) => {
    const q = queue;
  })
  .catch(err => {
    console.error(err);
  });
