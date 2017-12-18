import { createAdapter } from "bunyan-winston-adapter";
import { Logger, LoggerInstance, transports } from "winston";

const logger = new Logger();
const mapping = {
  trace: 'silly'
};
const adapterA = createAdapter(logger);
const adapterB = createAdapter(logger, mapping);
