import { createAdapter } from "bunyan-winston-adapter";
import { createLogger } from "winston";

const logger = createLogger();
const mapping = {
  trace: 'silly'
};
const adapterA = createAdapter(logger);
const adapterB = createAdapter(logger, mapping);
