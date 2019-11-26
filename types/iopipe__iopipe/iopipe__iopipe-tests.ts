import iopipe = require('iopipe__iopipe');

const config = {
  token: "ABCDEFG"
};

function run(event: any, context: any, callback?: any)  {
  iopipe.label('my label');

  iopipe.metric("magic number", 42);

  iopipe.mark.start("my-db-call");
  // an expensive database query
  iopipe.mark.end("my-db-call");
}

export default iopipe(config)(run);
