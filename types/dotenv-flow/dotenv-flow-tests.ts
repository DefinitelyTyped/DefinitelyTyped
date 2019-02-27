import dotenv = require("dotenv-flow");

const env = dotenv.config();
const dbUrl: string | null = env.error || !env.parsed ? null : env.parsed["BASIC"];

dotenv.load({
  cwd: "someDir",
  encoding: "utf8",
  purge_dotenv: true
});

const parsed = dotenv.parse("NODE_ENV=production\nDB_HOST=a.b.c");
const dbHost: string = parsed["DB_HOST"];

const parsedFromBuffer = dotenv.parse(new Buffer("JUSTICE=league\n"), {
  debug: true
});
const justice: string = parsedFromBuffer["JUSTICE"];
