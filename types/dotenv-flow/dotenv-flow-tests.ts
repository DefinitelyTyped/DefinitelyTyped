import dotenv from "dotenv-flow";

const filenames: string[] = dotenv.listFiles("/path/to/project");
dotenv.listFiles("/path/to/project", {});
dotenv.listFiles("/path/to/project", { node_env: "development" });

const parsed: { [name: string]: string } = dotenv.parse("/path/to/project/.env");
dotenv.parse("/path/to/project/.env", {});
dotenv.parse(["/path/to/project/.env"], {});
dotenv.parse("/path/to/project/.env", { encoding: "utf8" });
dotenv.parse(["/path/to/project/.env"], { encoding: "utf8" });

const result = dotenv.load("/path");
const value: string | null = result.error || !result.parsed ? null : result.parsed["BASIC"];

dotenv.load(["/path"]);
dotenv.load("/path", {});
dotenv.load(["/path"], {});
dotenv.load("/path", { encoding: "utf8", silent: true });
dotenv.load(["/path"], { encoding: "utf8", silent: true });

dotenv.unload("/path/to/project/.env");
dotenv.unload(["/path/to/project/.env"]);
dotenv.unload("/path/to/project/.env", {});
dotenv.unload(["/path/to/project/.env"], {});
dotenv.unload("/path/to/project/.env", { encoding: "utf8" });
dotenv.unload(["/path/to/project/.env"], { encoding: "utf8" });

const config = dotenv.config();
const dbUrl: string | null = config.error || !config.parsed ? null : config.parsed["BASIC"];

dotenv.config({});
dotenv.config({
    node_env: "production",
    default_node_env: "development",
    path: "/path/to/project",
    encoding: "utf8",
    purge_dotenv: true,
    silent: false,
});
