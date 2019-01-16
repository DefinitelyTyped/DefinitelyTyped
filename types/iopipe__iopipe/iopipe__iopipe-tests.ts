import iopipe, { label, metric, mark } from "iopipe__iopipe";

const config = {
  token: "ABCDEFG"
};

function run(event: any, context: any, callback?: any)  {
  label('my label');

  metric("magic number", 42);

  mark.start("my-db-call");
  // an expensive database query
  mark.end("my-db-call");
}

iopipe(config)(run);
