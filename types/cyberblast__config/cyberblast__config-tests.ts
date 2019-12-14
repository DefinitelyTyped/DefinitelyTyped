import { Config } from "cyberblast__config";

const c = new Config(""); // $ExpectType Config
c.load(); // $ExpectType Promise<any>
c.settings(); // $ExpectType any
